import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface Props {
  productCount: number;
  categoryCount: number;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5, type: "spring", damping: 18 }}
      className="glass rounded-3xl p-8 text-center shadow-card"
    >
      <p className="font-display text-4xl font-semibold text-forest sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsSection({ productCount, categoryCount }: Props) {
  const stats: Stat[] = [
    { value: productCount || 20, suffix: "+", label: "Ürün Çeşidi" },
    { value: categoryCount || 5, label: "Kategori" },
    { value: 3, suffix: ".", label: "Nesil Kahve Ustası" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <StatItem key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
