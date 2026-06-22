import { useEffect, useRef, useState } from "react";
import { CATEGORIES, type Product } from "../interfaces/product";
import * as svc from "../services/productService";
import Hero from "../components/brand/Hero";
import StatsSection from "../components/brand/StatsSection";
import FeaturedProducts from "../components/brand/FeaturedProducts";
import BrandStory from "../components/brand/BrandStory";
import ProcessTimeline from "../components/brand/ProcessTimeline";
import CategoryShowcase from "../components/brand/CategoryShowcase";
import GalleryMarquee from "../components/brand/GalleryMarquee";
import CtaFooter from "../components/brand/CtaFooter";

export default function BrandPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void svc.getProducts().then(setProducts).catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <Hero onExplore={() => featuredRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <StatsSection productCount={products.length} categoryCount={CATEGORIES.length} />
      <div ref={featuredRef}>
        <FeaturedProducts products={products} />
      </div>
      <BrandStory />
      <ProcessTimeline />
      <CategoryShowcase />
      <GalleryMarquee />
      <CtaFooter />
    </div>
  );
}
