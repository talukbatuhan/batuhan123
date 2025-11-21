import React from 'react';

// Bileşenin alacağı prop'ları (özellikleri) tanımlıyoruz
interface YouTubePlayerProps {
  /**
   * YouTube embed (gömme) URL'si.
   * Örn: "https://www.youtube.com/embed/VIDEO_ID?..."
   */
  embedUrl: string;
  /** Oynatıcıya uygulanacak ek Tailwind CSS sınıfları (isteğe bağlı). */
  className?: string;
}

/**
 * TypeScript, React ve Tailwind CSS kullanarak responsive YouTube video oynatıcı.
 */
const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ embedUrl, className = '' }) => {
  
  // Responsive 16:9 oranı için kullanılan stil hilesi.
  // padding-top: 56.25% (9/16) ile yükseklik otomatik ayarlanır.
  const responsiveStyle = {
    paddingTop: '56.25%', // 16:9 oranı için gerekli yükseklik ayarı
  };

  return (
    // Dış sarmalayıcı: Responsive çerçeveyi ve temel stili sağlar
    <div 
      className={`relative w-full overflow-hidden rounded-xl shadow-2xl bg-black ${className}`} 
      style={responsiveStyle}
    >
      {/* <iframe> etiketi, YouTube videosunu uygulamanıza gömmek için kullanılır.
        absolute top-0 left-0 w-full h-full sınıfları, iframe'in dış sarmalayıcının
        içini tamamen doldurmasını sağlar.
      */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;