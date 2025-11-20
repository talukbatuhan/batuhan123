// pages/index.tsx (veya app/page.tsx)

import GalleryComponent from '@/app/components/GalleryPage/GalleryComponent';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Diğer sayfa öğeleri */}
      
      {/* Galeri bileşenimiz */}
      <GalleryComponent />
      
    </div>
  );
}