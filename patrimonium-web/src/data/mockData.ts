import type {Pattern} from "../types/Pattern";
import type {Fabric} from "../types/Fabric";
import type {Review} from "../types/Review";

export const mockPattern: Pattern = {
    id: "aloha",
    title: "Robe Aloha",
    designer: "Apolline Patterns",
    coverUrl: "https://placehold.co/560x420",
    gallery: [
        "https://placehold.co/80x60",
        "https://placehold.co/80x60",
        "https://placehold.co/80x60",
    ],
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    recommendedFabrics: ["Viscose", "Coton"],
    sizes: "34–48",
    fabricQuantity: "1,8m → 3,5m",
};

export const mockFabrics: Fabric[] = [
    { id: "f1", name: "Viscose fleurie", brand: "Lise Tailor", imageUrl: "/images/viscose1.jpg" },
    { id: "f2", name: "Coton imprimé", brand: "Atelier Brunette", imageUrl: "/images/viscose2.jpg" },
];

export const mockReviews: Review[] = [
    { id: "r1", author: "Passepoil De Chat", rating: 5, content: "Super patron, bien expliqué !" },
    { id: "r2", author: "Couture Addict", rating: 4, content: "Très joli rendu, mais taille un peu grand." },
];
