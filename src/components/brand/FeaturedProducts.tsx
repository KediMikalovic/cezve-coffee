import { motion } from "framer-motion";
import type { Product } from "../../interfaces/product";
import { useTilt } from "../../hooks/useTilt";
import { formatPrice } from "../../lib/format";

function FeaturedCard({ product, index }: { product: Product; index: number }) {
  const tilt = useTilt(9);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, type: "spring", damping: 20 }}
      className="group"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={tilt.style}
        className="relative overflow-hidden rounded-3xl glass shadow-card transition-shadow duration-300 group-hover:shadow-glow will-change-transform"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image_url ?? "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80"}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-forest backdrop-blur">
            {product.category}
          </span>
        </div>
        <div className="p-4" style={{ transform: "translateZ(35px)" }}>
          <h3 className="font-display text-lg font-semibold text-forest">{product.name}</h3>
          <p className="mt-1 text-lg font-semibold text-orange">{formatPrice(product.price)}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface Props {
  products: Product[];
}

export default function FeaturedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
          Öne Çıkan Ürünler
        </h2>
        <p className="mt-3 text-muted">
          Kolibri menümüzden en sevilen lezzetler, taze çekirdeklerle hazırlanır.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((p, i) => (
          <FeaturedCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
