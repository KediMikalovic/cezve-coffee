export const CATEGORIES = [
  "Sıcak Kahve",
  "Soğuk Kahve",
  "Frappe",
  "Milkshake",
  "Tatlı",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  stock: number;
  image_url: string | null;
  created_at?: string;
}

export type ProductInput = Omit<Product, "id" | "created_at">;
