export const COFFEE_IMAGES = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
  "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=80",
  "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
];

export function getRandomCoffeeImage(): Promise<string> {
  const idx = Math.floor(Math.random() * COFFEE_IMAGES.length);
  return Promise.resolve(COFFEE_IMAGES[idx]);
}
