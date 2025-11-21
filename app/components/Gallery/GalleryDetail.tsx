import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_TEXTS } from './GalleryTypes';
import YouTubePlayer from '@/app/components/Gallery/YoutubePlayer'; // YouTube bileşenini import ediyoruz

interface GalleryDetailProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
    onOpenFullscreen: () => void;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex, 
    onOpenFullscreen 
}) => {
    
    const item = GALLERY_ITEMS[currentIndex];
    const modalRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        onSetCurrentIndex(currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        onSetCurrentIndex(currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1);
    };

    // Esc tuşu ile kapatma
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

    if (!item) return <div className="text-white text-center p-4">{GALLERY_TEXTS.mediaNotFound}</div>;

    const isVideo = !!item.youtubeEmbedUrl;

    return (
        <div 
            ref={modalRef}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        >
            {/* Kapatma Butonu */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-4xl leading-none z-[51] p-2 hover:text-red-500 transition-colors"
                aria-label={GALLERY_TEXTS.backButton}
            >
                &times;
            </button>
            
            <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 rounded-lg shadow-2xl">
                
                {/* Medya İçeriği */}
                <div className="flex-grow p-4 overflow-hidden flex items-center justify-center">
                    {isVideo ? (
                        <YouTubePlayer 
                            embedUrl={item.youtubeEmbedUrl!} 
                            className="w-full max-w-full"
                        />
                    ) : (
                        item.src ? (
                            <div className="relative w-full h-full aspect-video md:aspect-[3/2] lg:aspect-video">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                        ) : (
                            <p className="text-white">{GALLERY_TEXTS.mediaNotFound}</p>
                        )
                    )}
                </div>

                {/* Alt Kısım ve Kontroller */}
                <div className="flex justify-between items-center p-4 border-t border-slate-700">
                    <button 
                        onClick={handlePrev}
                        className="p-2 text-white hover:text-blue-400 transition-colors disabled:opacity-50"
                        aria-label={GALLERY_TEXTS.prev}
                    >
                        &lt; {GALLERY_TEXTS.prev}
                    </button>
                    
                    <span className="text-lg font-medium text-white/80 select-none">
                        {item.alt}
                    </span>
                    
                    <button 
                        onClick={handleNext}
                        className="p-2 text-white hover:text-blue-400 transition-colors disabled:opacity-50"
                        aria-label={GALLERY_TEXTS.next}
                    >
                        {GALLERY_TEXTS.next} &gt;
                    </button>
                </div>
                
                {/* Tam Ekran Butonu */}
                {!isVideo && ( // Videolar zaten tam ekran gibi davrandığı için sadece görsellere ekleyebiliriz.
                    <button
                        onClick={onOpenFullscreen}
                        className="absolute top-6 right-16 p-2 text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full z-50"
                        title={GALLERY_TEXTS.fullscreenButton}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 11h2v-3h3V6H5v5zm14-3v3h-3V6h5v2h-2zm-2 9h-3v-3h-2v5h5v-2zM7 13H5v5h5v-2H7v-3z"/></svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default GalleryDetail;