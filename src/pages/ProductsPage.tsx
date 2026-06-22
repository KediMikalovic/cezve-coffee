import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { Search, Plus, Package, Layers, Wallet, Loader2 } from "lucide-react";
import { CATEGORIES, type Product, type ProductInput } from "../interfaces/product";
import * as svc from "../services/productService";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import ConfirmDialog from "../components/ConfirmDialog";
import StatCard from "../components/StatCard";
import EmptyState from "../components/EmptyState";
import { formatPrice } from "../lib/format";

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Hepsi");
  const [sort, setSort] = useState<"new" | "price" | "stock">("new");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [toDelete, setToDelete] = useState<Product | null>(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await svc.getProducts();
        if (!ignore) setItems(data);
      } catch {
        if (!ignore) toast.error("Veriler yüklenemedi");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    void load();
    return () => {
      ignore = true;
    };
  }, []);

  const filtered = useMemo(() => {
    let r = [...items];
    if (q.trim()) r = r.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (cat !== "Hepsi") r = r.filter((p) => p.category === cat);
    if (sort === "price") r.sort((a, b) => a.price - b.price);
    if (sort === "stock") r.sort((a, b) => a.stock - b.stock);
    return r;
  }, [items, q, cat, sort]);

  const stats = useMemo(
    () => ({
      count: items.length,
      categories: new Set(items.map((i) => i.category)).size,
      stockValue: items.reduce((s, i) => s + i.price * i.stock, 0),
    }),
    [items]
  );

  async function handleSubmit(data: ProductInput, id?: string) {
    if (id) {
      const u = await svc.updateProduct(id, data);
      setItems((p) => p.map((x) => (x.id === id ? u : x)));
      toast.success("Ürün güncellendi");
    } else {
      const n = await svc.addProduct(data);
      setItems((p) => [n, ...p]);
      toast.success("Ürün eklendi");
    }
  }

  async function confirmDelete() {
    if (!toDelete) return;
    const id = toDelete.id;
    try {
      await svc.deleteProduct(id);
      setItems((p) => p.filter((x) => x.id !== id));
      toast.success("Ürün silindi");
    } catch {
      toast.error("Silinemedi");
    } finally {
      setToDelete(null);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-28">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={<Package />} label="Toplam Ürün" value={String(stats.count)} />
        <StatCard icon={<Layers />} label="Kategori" value={String(stats.categories)} />
        <StatCard icon={<Wallet />} label="Stok Değeri" value={formatPrice(stats.stockValue)} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            className="field pl-10"
            placeholder="Ürün ara..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <select className="field sm:w-44" value={cat} onChange={(e) => setCat(e.target.value)}>
          <option value="Hepsi">Tüm kategoriler</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          className="field sm:w-44"
          value={sort}
          onChange={(e) => setSort(e.target.value as "new" | "price" | "stock")}
        >
          <option value="new">En yeni</option>
          <option value="price">Fiyat (artan)</option>
          <option value="stock">Stok (artan)</option>
        </select>
        <button
          onClick={() => { setEditing(null); setFormOpen(true); }}
          className="btn-primary whitespace-nowrap"
        >
          <Plus size={18} /> Yeni Ürün
        </button>
      </div>

      {loading ? (
        <div className="mt-16 flex justify-center text-muted">
          <Loader2 className="animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState message="Ürün bulunamadı. Yeni bir ürün ekleyebilirsin." />
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onEdit={(x) => { setEditing(x); setFormOpen(true); }}
                onDelete={setToDelete}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      <ProductForm
        open={formOpen}
        initial={editing}
        onClose={() => { setFormOpen(false); setEditing(null); }}
        onSubmit={handleSubmit}
      />
      <ConfirmDialog
        open={!!toDelete}
        title="Ürünü sil"
        message={`"${toDelete?.name}" kalıcı olarak silinsin mi?`}
        onCancel={() => setToDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
