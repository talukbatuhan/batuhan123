import React from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GALLERY_TEXTS, GalleryItem } from './GalleryTypes';

interface GalleryGridProps {
    onItemClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ onItemClick }) => {
    return (
        <section className="py-12">
            <h2 className="text-4xl font-extrabold text-white text-center mb-12 tracking-wide">
                Galeri Başlığı
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {GALLERY_ITEMS.map((item, index) => (
                    <div 
                        key={item.id} 
                        className="group relative aspect-square overflow-hidden rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:ring-4 hover:ring-blue-400"
                        onClick={() => onItemClick(index)}
                    >
                        {/* Video mu yoksa görsel mi olduğunu thumb ile ayırt edebiliriz, 
                           ancak burada basitçe 'src' veya 'youtubeEmbedUrl' varsa bir önizleme gösterelim.
                        */}
                        <Image
                            src={item.thumb || item.src || "/placeholder.jpg"} // Video için de bir thumb olmalı
                            alt={item.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transition duration-500 group-hover:opacity-80"
                        />
                        
                        {/* Video ikonunu ekleyelim */}
                        {item.youtubeEmbedUrl && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition duration-300">
                                <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.409 7.005c-.068-.521-.297-.978-.737-1.417C19.782 5.09 18.23 4.5 12 4.5c-6.23 0-7.782.59-8.672 1.088-.44.439-.67 1.088-.738 1.417C2.5 7.636 2.5 12 2.5 12c0 4.365.001 6.364.737 7.005.068.33.297.896.737 1.336.89.497 2.443 1.088 8.672 1.088 6.23 0 7.782-.59 8.672-1.088.44-.439.67-.978.737-1.417C21.5 16.364 21.5 12 21.5 12c0-4.365-.001-6.364-.091-4.995zM10.5 16.5v-9L16 12l-5.5 4.5z"/>
                                </svg>
                            </div>
                        )}
                        
                        {/* Alt metin için hover efekti */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium">{item.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GalleryGrid;