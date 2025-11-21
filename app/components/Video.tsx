import React from 'react';

// Bileşenin alacağı prop'ların (özelliklerin) tipini tanımlıyoruz.
interface VideoPlayerProps {
  /** Video dosyasının URL adresi */
  src: string;
  /** Video oynatıcıya uygulanacak ek Tailwind CSS sınıfları */
  className?: string;
}

/**
 * TypeScript, React ve Tailwind CSS kullanarak basit bir video oynatıcı bileşeni.
 *
 * @param {VideoPlayerProps} props - src ve className özelliklerini içerir.
 */
const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = '' }) => {
  // Varsayılan Tailwind sınıflarını ve dışarıdan gelen sınıfları birleştiriyoruz.
  const baseClasses = 'w-full h-auto rounded-lg shadow-xl';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className="flex justify-center p-4 bg-gray-100 dark:bg-gray-800">
      <video
        // Tailwind CSS ile stil verilmiş sınıflar
        className={combinedClasses} 
        
        // Videonun URL adresi
        src={src} 
        
        // Oynatıcı kontrollerini göster
        controls 
        
        // Otomatik oynatmayı devre dışı bırakıyoruz (genellikle tarayıcılar engeller)
        // autoPlay 
        
        // Döngüye al
        loop 
        
        // Videodan önce yüklenecek görselin URL adresi (isteğe bağlı)
        // poster="/path/to/poster-image.jpg"
      >
        {/* Tarayıcı videoyu desteklemezse gösterilecek metin */}
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoPlayer;