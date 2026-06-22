import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw, Loader2 } from "lucide-react";
import { CATEGORIES, type Category, type Product, type ProductInput } from "../interfaces/product";
import { getRandomCoffeeImage } from "../services/coffeeApi";

interface Props {
  open: boolean;
  initial?: Product | null;
  onClose: () => void;
  onSubmit: (data: ProductInput, id?: string) => Promise<void>;
}

export default function ProductForm({ open, initial, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);
  const [price, setPrice] = useState<number | "">("");
  const [stock, setStock] = useState<number | "">("");
  const [image, setImage] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [wasOpen, setWasOpen] = useState(false);

  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setName(initial?.name ?? "");
      setCategory((initial?.category as Category) ?? CATEGORIES[0]);
      setPrice(initial?.price ?? "");
      setStock(initial?.stock ?? "");
      setImage(initial?.image_url ?? null);
      setErrors({});
    }
  }

  useEffect(() => {
    if (open && !initial?.image_url) void rollImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  async function rollImage() {
    setImgLoading(true);
    setImage(await getRandomCoffeeImage());
    setImgLoading(false);
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Ürün adı zorunlu";
    if (price === "" || Number(price) <= 0) e.price = "Fiyat sıfırdan büyük olmalı";
    if (stock === "" || Number(stock) < 0) e.stock = "Stok negatif olamaz";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate()) return;
    setSaving(true);
    try {
      await onSubmit(
        { name: name.trim(), category, price: Number(price), stock: Number(stock), image_url: image },
        initial?.id
      );
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-lg rounded-3xl glass p-6 shadow-card"
          >
            <button onClick={onClose} className="absolute right-4 top-4 text-muted hover:text-forest">
              <X />
            </button>
            <h2 className="font-display text-2xl font-semibold text-forest">
              {initial ? "Ürünü Düzenle" : "Yeni Ürün"}
            </h2>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-2xl bg-soft flex-shrink-0">
                {image && <img src={image} alt="" className="h-full w-full object-cover" />}
              </div>
              <button onClick={rollImage} className="btn-ghost" disabled={imgLoading}>
                {imgLoading ? <Loader2 className="animate-spin" size={15} /> : <RefreshCw size={15} />}
                Rastgele görsel
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <input
                  className="field"
                  placeholder="Ürün adı"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <select
                className="field"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    className="field"
                    type="number"
                    placeholder="Fiyat (₺)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  />
                  {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price}</p>}
                </div>
                <div>
                  <input
                    className="field"
                    type="number"
                    placeholder="Stok"
                    value={stock}
                    onChange={(e) => setStock(e.target.value === "" ? "" : Number(e.target.value))}
                  />
                  {errors.stock && <p className="mt-1 text-xs text-red-600">{errors.stock}</p>}
                </div>
              </div>
            </div>

            <button onClick={submit} disabled={saving} className="btn-primary mt-5 w-full">
              {saving ? <Loader2 className="animate-spin" size={16} /> : null}
              {initial ? "Güncelle" : "Ekle"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
