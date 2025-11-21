/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... diğer konfigürasyon ayarları ...
  
  images: {
    // Görsel yüklemeye izin verilen alan adlarını (hostnames) buraya ekleyin
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // YouTube thumbnail'ları için bu şarttır
        port: '',
        pathname: '/vi/**', // Sadece /vi/ altındaki yollara izin vermek için
      },
      // Eğer başka harici alan adlarından da görsel yüklüyorsanız, onları da buraya ekleyin.
    ],
    // Veya eski Next.js sürümlerinde (Next.js 13 öncesi veya 13'ün ilk sürümleri) şu şekilde de kullanılabilir:
    // domains: ['img.youtube.com', 'example.com'], 
  },
  
  // ... diğer konfigürasyon ayarları ...
};

module.exports = nextConfig;