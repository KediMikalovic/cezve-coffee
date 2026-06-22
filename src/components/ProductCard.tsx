import { motion } from "framer-motion";
import { Pencil, Trash2, AlertTriangle } from "lucide-react";
import type { Product } from "../interfaces/product";
import { useTilt } from "../hooks/useTilt";
import { formatPrice } from "../lib/format";

interface Props {
  product: Product;
  onEdit: (p: Product) => void;
  onDelete: (p: Product) => void;
}

export default function ProductCard({ product, onEdit, onDelete }: Props) {
  const tilt = useTilt(9);
  const low = product.stock < 20;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", damping: 24, stiffness: 240 }}
      className="group"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        className="relative overflow-hidden rounded-3xl glass shadow-card transition-shadow duration-300 group-hover:shadow-glow will-change-transform"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={product.image_url ?? "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-forest backdrop-blur">
            {product.category}
          </span>
          {low && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white shadow">
              <AlertTriangle size={12} /> Düşük stok
            </span>
          )}
        </div>

        <div className="p-4" style={{ transform: "translateZ(40px)" }}>
          <h3 className="font-display text-xl font-semibold text-forest">{product.name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-lg font-semibold text-orange">{formatPrice(product.price)}</span>
            <span className="text-sm text-muted">Stok: {product.stock}</span>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={() => onEdit(product)} className="btn-ghost flex-1">
              <Pencil size={15} /> Düzenle
            </button>
            <button
              onClick={() => onDelete(product)}
              className="inline-flex items-center justify-center rounded-xl bg-red-50 px-3 py-2 text-red-600 transition hover:bg-red-100"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
