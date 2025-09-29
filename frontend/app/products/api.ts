export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string; 
}

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!res.ok) throw new Error('Ürünler alınamadı');
  return res.json();
};
