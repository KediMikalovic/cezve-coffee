import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, LayoutDashboard } from "lucide-react";
import Hummingbird from "../Hummingbird";

interface Props {
  onExplore: () => void;
}

export default function Hero({ onExplore }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-forest">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-[#1d332a] to-espresso" />
        <motion.div
          className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-orange/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-cream/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-soft/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.span
          className="absolute left-[12%] top-[22%] text-4xl opacity-30 animate-float-slow"
          aria-hidden
        >
          ☘
        </motion.span>
        <motion.span
          className="absolute right-[18%] top-[60%] text-3xl opacity-25 animate-float"
          aria-hidden
        >
          ●
        </motion.span>
        <motion.span
          className="absolute left-[22%] bottom-[18%] text-2xl opacity-20 animate-float-slow"
          aria-hidden
        >
          ☘
        </motion.span>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 16, delay: 0.1 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 shadow-glow"
        >
          <Hummingbird color="#EFE6DA" className="h-9 w-9" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display text-5xl font-semibold leading-tight text-cream sm:text-6xl lg:text-7xl"
        >
          Doğadan İlham Alan{" "}
          <span className="bg-gradient-to-r from-orange via-orange-dark to-cream bg-clip-text text-transparent">
            Kahve
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-xl text-base text-cream/75 sm:text-lg"
        >
          Cezve, her fincanda kolibri kadar hafif ve doğa kadar samimi bir deneyim sunar.
          Özenle seçilmiş çekirdekler, ustaca kavrulur, sevgiyle fincana taşınır.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onExplore}
            className="btn-primary"
          >
            Menüyü Keşfet <ChevronDown size={18} />
          </motion.button>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/yonetim"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cream/30 bg-white/5 px-5 py-3 font-semibold text-cream backdrop-blur transition hover:bg-white/15"
            >
              <LayoutDashboard size={18} /> Yönetim Paneli
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.div>
    </div>
  );
}
