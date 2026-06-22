import { motion } from "framer-motion";
import { CATEGORIES } from "../../interfaces/product";

const GRADIENTS: Record<string, string> = {
  "Sıcak Kahve": "from-orange-dark to-orange",
  "Soğuk Kahve": "from-forest to-[#4a7361]",
  Frappe: "from-[#7A857C] to-[#2C4A3B]",
  Milkshake: "from-[#D9824A] to-[#D9D2C6]",
  Tatlı: "from-espresso to-orange-dark",
};

export default function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
          Kategori Vitrini
        </h2>
        <p className="mt-3 text-muted">Her damak zevkine bir Kolibri lezzeti.</p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5, type: "spring", damping: 18 }}
            whileHover={{ y: -6 }}
            className={`flex h-36 cursor-default items-end rounded-3xl bg-gradient-to-br p-5 text-cream shadow-card transition-shadow duration-300 hover:shadow-glow ${GRADIENTS[cat]}`}
          >
            <span className="font-display text-xl font-semibold">{cat}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
