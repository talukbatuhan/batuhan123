import React, { useEffect } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_TEXTS } from './GalleryTypes';
import YouTubePlayer from '@/app/components/Gallery/YoutubePlayer'; 
interface FullscreenOverlayProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
}

const FullscreenOverlay: React.FC<FullscreenOverlayProps> = ({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex 
}) => {
    
    const item = GALLERY_ITEMS[currentIndex];

    const handlePrev = () => {
        onSetCurrentIndex(currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        onSetCurrentIndex(currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1);
    };

    // Esc tuşu ile kapatma ve yön tuşları
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose, handlePrev, handleNext]);

    if (!item) return null;

    const isVideo = !!item.youtubeEmbedUrl;

    return (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4">
            
            {/* Kapatma Butonu */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-4xl leading-none z-[61] p-2 hover:text-red-500 transition-colors"
                aria-label={GALLERY_TEXTS.backButton}
            >
                &times;
            </button>
            
            {/* Önceki Butonu */}
            <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 text-white text-3xl z-60 bg-black/30 hover:bg-black/70 rounded-full transition-colors hidden md:block"
                aria-label={GALLERY_TEXTS.prev}
            >
                &lt;
            </button>

            {/* Sonraki Butonu */}
            <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 text-white text-3xl z-60 bg-black/30 hover:bg-black/70 rounded-full transition-colors hidden md:block"
                aria-label={GALLERY_TEXTS.next}
            >
                &gt;
            </button>

            {/* Medya İçeriği */}
            <div className="w-full h-full flex items-center justify-center">
                {isVideo ? (
                    <YouTubePlayer 
                        embedUrl={item.youtubeEmbedUrl!} 
                        className="max-w-6xl"
                    />
                ) : (
                    item.src ? (
                        <div className="relative w-full h-full max-w-full max-h-full">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                layout="fill"
                                objectFit="contain" // Görseli tam ekranda sığdırmak için 'contain'
                                className="rounded-lg"
                            />
                        </div>
                    ) : (
                        <p className="text-white text-xl">{GALLERY_TEXTS.mediaNotFound}</p>
                    )
                )}
            </div>
            
            {/* Alt Metin */}
            <div className="absolute bottom-4 left-0 right-0 text-center p-2 bg-black/50 text-white z-60">
                {item.alt}
            </div>
        </div>
    );
};

export default FullscreenOverlay;