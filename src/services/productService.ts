import { supabase } from "./supabaseClient";
import type { Product, ProductInput } from "../interfaces/product";

const TABLE = "products";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Product[];
}

export async function addProduct(p: ProductInput): Promise<Product> {
  const { data, error } = await supabase.from(TABLE).insert(p).select().single();
  if (error) throw error;
  return data as Product;
}

export async function updateProduct(id: string, p: Partial<ProductInput>): Promise<Product> {
  const { data, error } = await supabase.from(TABLE).update(p).eq("id", id).select().single();
  if (error) throw error;
  return data as Product;
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}
