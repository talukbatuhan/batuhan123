import React from 'react';
import VideoPlayer from '@/app/components/Video'; // Doğru yolu belirttiğinden emin ol

// Örnek bir video URL'si (Gerçek bir URL ile değiştirin!)
const SAMPLE_VIDEO_URL = '/314643_small.mp4'; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        🎬 Tailwind CSS ile Video Oynatıcı Örneği
      </h1>
      
      {/* 1. Varsayılan Sınıflarla Kullanım */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Varsayılan Oynatıcı (Maksimum Genişlik)
        </h2>
        <VideoPlayer 
          src={SAMPLE_VIDEO_URL} 
        />
      </section>

      {/* 2. Özel Tailwind Sınıflarıyla Kullanım (Daha küçük bir genişlik ayarı) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Özel Sınıflarla Oynatıcı (w-1/2)
        </h2>
        {/* mx-auto ile ortalıyoruz ve özel bir çerçeve rengi ekliyoruz */}
        <div className="max-w-xl mx-auto border-4 border-indigo-500 rounded-xl p-2">
          <VideoPlayer 
            src={SAMPLE_VIDEO_URL} 
            className="w-full" // w-1/2 yerine, dış div'in max-w-xl'ini kullanmasını sağladık
          />
        </div>
      </section>
    </div>
  );
};

export default App;