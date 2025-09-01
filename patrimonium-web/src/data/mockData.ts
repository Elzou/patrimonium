import type {Pattern} from "../types/Pattern";
import type {Fabric} from "../types/Fabric";
import type {Review} from "../types/Review";

export const mockPattern: Pattern = {
    id: "1",
    title: "Robe Aloha",
    creator: "Apolline Patterns",
    description: "Une robe estivale facile à coudre, avec plusieurs variantes.",
    fabrics: ["Viscose", "Coton"],
    sizes: "34-48",
    fabricQuantity: "1,8m → 3,5m",
    images: ["/images/aloha-robe.jpg", "/images/aloha-details.jpg"],
};

export const mockFabrics: Fabric[] = [
    { id: "f1", name: "Viscose fleurie", brand: "Lise Tailor", image: "/images/viscose1.jpg" },
    { id: "f2", name: "Coton imprimé", brand: "Atelier Brunette", image: "/images/viscose2.jpg" },
];

export const mockReviews: Review[] = [
    { id: "r1", author: "Passepoil De Chat", rating: 5, comment: "Super patron, bien expliqué !" },
    { id: "r2", author: "Couture Addict", rating: 4, comment: "Très joli rendu, mais taille un peu grand." },
];
