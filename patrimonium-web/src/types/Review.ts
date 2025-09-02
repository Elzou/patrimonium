export type Review = {
    id: string;
    author: string;
    rating: 1 | 2 | 3 | 4 | 5;
    content: string;
    dateISO?: string;
};