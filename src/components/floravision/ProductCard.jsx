import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass relative min-h-[20.2rem] rounded-[2rem] px-9 pb-7 pt-28 group hover:border-[oklch(0.55_0.12_150/0.5)] hover:shadow-[0_0_40px_oklch(0.55_0.18_150/0.25)] transition-all"
    >
      <div className="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2">
        <img
          src={product.image}
          alt={product.name}
          width={768}
          height={768}
          loading="lazy"
          className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgb(0_0_0/0.55)] group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-base font-normal text-white">{product.name}</h3>
      <p className="mt-3 min-h-[4.2rem] text-[0.72rem] leading-snug text-white/70">{product.desc}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-normal text-white">{product.price}</span>
        <button aria-label="Add to cart" className="flora-button size-7">
          <ShoppingBag className="size-3 text-white" />
        </button>
      </div>
    </motion.div>
  );
}
