export interface GalleryItem {
    id: number;
    // Görsel yolu (URL)
    src?: string; 
    // Önizleme görseli yolu (isteğe bağlı, src yerine ızgarada gösterilebilir)
    thumb?: string; 
    // Alternatif metin
    alt: string;
    // YouTube Embed URL'si (Video öğeleri için)
    youtubeEmbedUrl?: string; 
}

export const GALLERY_ITEMS: GalleryItem[] = [
    // Görsel Örnekleri
    {
        id: 1,
        src: "/next.svg",
        alt: "Makineler Afiş",
    },
    {
        id: 2,
        src: "/vercel.svg",
        alt: "GyroMix Afiş",
    },
    {
        id: 3,
        src: "/window.svg",
        alt: "MasterTint Afiş",
    },
    
    // YouTube Video Örneği (Kendi URL'niz ile değiştirin)
{
        id: 10,
        youtubeEmbedUrl: "https://www.youtube.com/embed/xTqhdtE2XaI?controls=1", 
        alt: "Örnek Tanıtım Videosu",
        // 'xTqhdtE2XaI' videonun ID'sidir. hqdefault, yüksek kaliteli bir önizlemedir.
        thumb: "https://img.youtube.com/vi/xTqhdtE2XaI/hqdefault.jpg" // 👈 BU ALAN EKLENMELİ!
    },
    
    {
        id: 4,
        src: "/file.svg",
        alt: "MasterTint Özellikleri",
    },
    {
        id: 5,
        src: "/globe.svg",
        alt: "Broşür Sayfa 1",
    },
];


export const GALLERY_TEXTS = {
    backButton: "Geri Kapat",
    fullscreenButton: "Tam Ekran Yap",
    mediaNotFound: "Medya Bulunamadı",
    prev: "Önceki",
    next: "Sonraki",
};