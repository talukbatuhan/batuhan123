import Head from 'next/head';
import TailwindImageComponent from '@/app/components/TailwindImageComponent';

export default function Home() {
  // Örnek görsel verileri
  const sampleImage = {
    src: "/mars.png",
    alt: "Kodlama ekranı ve kahve",
    title: "TypeScript ve Tailwind Bileşeni"
  };

  return (
    <>
      <Head>
        <title>TSX Tailwind Image Örneği</title>
      </Head>
      
      {/* Sayfanın ortasında gösterim */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <TailwindImageComponent 
          imageSrc={sampleImage.src}
          imageAlt={sampleImage.alt}
          title={sampleImage.title}
        />
      </div>
    </>
  );
}