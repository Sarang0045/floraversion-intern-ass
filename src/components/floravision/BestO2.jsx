import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import aglaonema from "@/assets/plant logo 15.png";

export function BestO2() {
  return (
    <section className="relative py-28">
      <div className="flora-shell">
        <SectionTitle>Our Best o2</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 glass min-h-[25rem] rounded-[3rem] px-8 py-10 md:px-16 grid md:grid-cols-[0.95fr_1.05fr] gap-8 items-center"
        >
          <div className="flex justify-center md:justify-start">
            <img
              src={aglaonema}
              alt="Best O2 plant"
              width={768}
              height={768}
              loading="lazy"
              className="-my-24 w-80 md:w-[27rem] drop-shadow-[0_30px_60px_rgb(0_0_0/0.62)]"
            />
          </div>
          <div>
            <h3 className="max-w-[27rem] text-xl md:text-2xl font-semibold text-white leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h3>
            <p className="mt-6 max-w-[35rem] text-xs md:text-sm text-white/72 leading-snug">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p className="mt-4 max-w-[35rem] text-xs md:text-sm text-white/72 leading-snug">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button className="flora-button h-8 px-10 text-xs">
                Explore
              </button>
              <div className="flex gap-6">
                <button aria-label="Previous" className="text-white/80 hover:text-white transition">
                  <ChevronLeft className="size-4" />
                </button>
                <button aria-label="Next" className="text-white/80 hover:text-white transition">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
