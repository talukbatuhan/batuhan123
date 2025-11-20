export interface GalleryItem {
    id: number;
    src: string; 
    alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 1,
        src: "/mars.png",
        alt: "mars",
    },
    {
        id: 2,
        src: "/grave.png",
        alt: "grave",
    },
    {
        id: 3,
        src: "/hazelnut.png",
        alt: "hazelnut"
    }
]