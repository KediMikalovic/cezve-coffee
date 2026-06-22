import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import Hummingbird from "../Hummingbird";

export default function CtaFooter() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      <div className="relative bg-gradient-to-br from-forest via-[#24402f] to-espresso px-4 py-20">
        <motion.div
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange/25 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cream/15 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
          className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <Hummingbird color="#EFE6DA" className="h-10 w-10" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Fincanınız Hazır Olsun
          </h2>
          <p className="mt-3 text-cream/75">
            Ürünlerimizi yönetim panelinden keşfedin, menüyü güncel tutun ve Kolibri lezzetini
            büyütün.
          </p>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="mt-7">
            <Link to="/yonetim" className="btn-primary">
              <LayoutDashboard size={18} /> Yönetim Paneline Git
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-espresso px-4 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Cezve. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
