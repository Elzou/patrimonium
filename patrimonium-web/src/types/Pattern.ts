export type Pattern = {
    id: string;
    title: string;
    designer: string;
    coverUrl?: string;
    gallery?: string[];
    description: string;
    recommendedFabrics: string[]; // e.g., ["Viscose", "Coton"]
    sizes: string; // e.g., "34–48"
    fabricQuantity: string; // e.g., "1,8m → 3,5m"
};