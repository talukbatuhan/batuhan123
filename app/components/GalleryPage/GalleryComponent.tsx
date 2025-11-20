// components/GalleryComponent.tsx

import React from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from './GalleryTypes'; // Veri dosyasını import ediyoruz

const GalleryComponent: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center border-b pb-4">
                🚀 Görsel Galerisi
            </h2>
            
            {/* Tailwind Grid Yapısı */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* GALLERY_ITEMS dizisi üzerinde MAP işlemi yapıyoruz */}
                {GALLERY_ITEMS.map((item: GalleryItem) => (
                    // Her bir öğe için bir kart oluşturuyoruz
                    <div 
                        key={item.id} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]"
                    >
                        {/* Görseli sarmalayan div (Next/Image için relative olmalı) */}
                        <div className="relative w-full h-64">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                // ÖNEMLİ: Yerel dosyalarınızın public/ klasöründe olduğundan emin olun!
                                layout="fill" // Kapsayıcı div'i doldurur
                                objectFit="contain" // Görseli kırparak kapsayıcıya sığdırır
                                className="transition duration-300 group-hover:opacity-90"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                loading="lazy" // Gecikmeli yükleme
                            />
                        </div>
                        
                        {/* Görsel Açıklaması */}
                        <div className="p-4 bg-gray-50">
                            <p className="text-lg font-semibold text-indigo-600 capitalize">
                                {item.alt}
                            </p>
                            <span className="text-sm text-gray-500">
                                ID: {item.id}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            {GALLERY_ITEMS.length === 0 && (
                <p className="text-center text-gray-500 mt-10">Gösterilecek görsel bulunamadı.</p>
            )}
        </div>
    );
};

export default GalleryComponent;