import { motion } from "framer-motion";
import Hummingbird from "../Hummingbird";

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80"
              alt="Kahve çekirdekleri"
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-forest shadow-glow"
          >
            <Hummingbird color="#EFE6DA" className="h-10 w-10" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", damping: 20 }}
        >
          <span className="text-3xl" aria-hidden>☘</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-forest sm:text-4xl">
            Doğadan İlham
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Cezve'nin yolculuğu, kolibrilerin çiçekten çiçeğe süzülüşü gibi hafif ve özenli bir
            keşifle başlar. Her çekirdek, doğaya en yakın çiftliklerden seçilir; her kavurma,
            ormanın sessizliğinden ilham alan bir sabırla yapılır.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Amacımız sadece kahve sunmak değil, fincanınıza doğanın dengesini ve sıcaklığını
            taşımak. Bu yüzden paletimizde orman yeşili ve toprak tonları hakim — markamız,
            içtiğiniz her yudumda hissetmenizi istediğimiz huzuru yansıtıyor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
