import Image from 'next/image';

// Bileşenin alacağı props'lar için bir TypeScript Arayüzü (Interface) tanımlıyoruz.
// Bu, projenin okunabilirliğini ve güvenilirliğini artırır.
interface TailwindImageProps {
  imageSrc: string; // Görselin kaynağı (URL veya yerel yol)
  imageAlt: string; // Görselin alternatif metni
  title: string;    // Bileşen başlığı
}

// React.FC (Function Component) tipini kullanarak bileşeni tanımlıyoruz
const TailwindImageComponent: React.FC<TailwindImageProps> = ({ imageSrc, imageAlt, title }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg max-w-sm mx-auto shadow-xl bg-white">
      
      {/* Başlık */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      
      {/* Açıklama */}
      <p className="text-sm text-gray-600 mb-6 text-center">
        Tailwind CSS ile stil verilmiş, Next.js Image bileşeni kullanılarak optimize edilmiş görsel.
      </p>

      {/* Görseli çevreleyen kapsayıcı */}
      {/* w-full ve h-48 ile sabit bir boyut verip relative yapıyoruz */}
      <div className="w-full h-48 relative rounded-md overflow-hidden transition duration-300 transform hover:scale-[1.02] hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill" // Kapsayıcıyı doldur
          objectFit="contain" // Resmi keserek sığdır
          className="rounded-md" // Tailwind sınıfları doğrudan Image bileşenine de uygulanabilir
          priority // Yüksek öncelikli yükleme
        />
      </div>
      
      {/* Dipnot */}
      <p className="mt-4 text-xs text-indigo-600 font-medium">Görsel başarıyla yüklendi ve optimize edildi!</p>
    </div>
  );
};

export default TailwindImageComponent;