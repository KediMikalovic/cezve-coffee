import { motion } from "framer-motion";
import { Sprout, Flame, Coffee } from "lucide-react";

const STEPS = [
  { icon: Sprout, title: "Çekirdek", desc: "Doğaya en yakın çiftliklerden, elle seçilmiş taze kahve çekirdekleri." },
  { icon: Flame, title: "Kavurma", desc: "Ustalarımız her partiyi sabırla, doğru sıcaklıkta kavurarak aromayı açığa çıkarır." },
  { icon: Coffee, title: "Fincan", desc: "Taze öğütülen çekirdekler, cezvede demlenip sıcacık fincanınıza ulaşır." },
];

export default function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">Süreç</h2>
        <p className="mt-3 text-muted">Çekirdekten fincana, her adımda özen.</p>
      </motion.div>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-3">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-soft sm:block" />
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.15, duration: 0.6, type: "spring", damping: 18 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-forest text-cream shadow-glow">
              <step.icon size={28} />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-forest">
              {i + 1}. {step.title}
            </h3>
            <p className="mt-2 max-w-[230px] text-sm text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
