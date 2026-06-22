import { motion } from "framer-motion";
import { COFFEE_IMAGES } from "../../services/coffeeApi";

export default function GalleryMarquee() {
  const loop = [...COFFEE_IMAGES, ...COFFEE_IMAGES];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl px-4 text-center"
      >
        <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">Galeri</h2>
        <p className="mt-3 text-muted">Fincandan kareler.</p>
      </motion.div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((src, i) => (
            <div
              key={i}
              className="h-44 w-64 flex-shrink-0 overflow-hidden rounded-3xl shadow-card"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
