import { motion } from "framer-motion";
import { Play, Star, ChevronRight } from "lucide-react";
import aglaonema from "@/assets/plant logo 15.png";

export function Hero() {
  return (
    <section className="relative min-h-[52rem] pt-24 md:pt-28">
      <div className="flora-shell relative grid md:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 md:col-span-7 pt-5 md:pt-24"
        >
          <h1 className="text-glow font-bold text-white leading-none text-[clamp(3rem,7vw,5.9rem)]">
            Earth's Exhale
          </h1>
          <p className="mt-3 max-w-[28rem] text-white/72 text-xs md:text-sm leading-snug">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <button className="flora-button h-8 px-7 text-xs">
              Buy Now
            </button>
            <button className="flex items-center gap-2.5 text-white text-xs group">
              <span className="size-9 rounded-full border border-white/70 flex items-center justify-center group-hover:bg-white/10 transition">
                <Play className="size-3.5 fill-white" />
              </span>
              Live Demo
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass mt-28 md:mt-36 w-[19rem] rounded-[1.15rem] p-4 animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-[radial-gradient(circle_at_35%_25%,#f8a37a,#5141a5_48%,#15142b)] flex items-center justify-center text-[0.63rem] font-semibold text-white">
                RH
              </div>
              <div>
                <p className="text-xs font-medium text-white">Ronnie Hamill</p>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="size-2.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="size-2.5 text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-[0.68rem] text-white/70 leading-snug">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 md:col-span-5 flex justify-end"
        >
          <div className="hero-plant-card mt-10 md:mt-3 w-full max-w-[26.5rem] p-6 animate-float" style={{ animationDelay: "1.5s" }}>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute h-0 w-0"
            >
              <defs>
                <clipPath id="heroPlantCardClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0.005 0.85 L 0.005 0.15 C 0.005 0.067 0.067 0.005 0.15 0.005 C 0.30 0.005 0.35 0.12 0.50 0.12 C 0.65 0.12 0.70 0.005 0.85 0.005 C 0.933 0.005 0.995 0.067 0.995 0.15 L 0.995 0.85 C 0.995 0.933 0.933 0.995 0.85 0.995 L 0.15 0.995 C 0.067 0.995 0.005 0.933 0.005 0.85 Z" />
                </clipPath>
              </defs>
            </svg>
            <div aria-hidden="true" className="hero-plant-surface" />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 0.5 85 L 0.5 15 C 0.5 6.7 6.7 0.5 15 0.5 C 30 0.5 35 12 50 12 C 65 12 70 0.5 85 0.5 C 93.3 0.5 99.5 6.7 99.5 15 L 99.5 85 C 99.5 93.3 93.3 99.5 85 99.5 L 15 99.5 C 6.7 99.5 0.5 93.3 0.5 85 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.58)"
                strokeWidth="1.15"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="relative z-10 h-[18rem]">
              <img
                src={aglaonema}
                alt="Aglaonema plant"
                width={768}
                height={768}
                className="absolute left-1/2 top-[-7.5rem] h-[25rem] w-[25rem] -translate-x-1/2 object-contain drop-shadow-[0_20px_40px_rgb(0_0_0/0.5)]"
              />
            </div>
            <div className="relative z-10 px-2">
              <p className="text-xs text-white/62">Indoor Plant</p>
              <div className="flex items-center justify-between mt-1 gap-4">
                <h3 className="text-xl font-light text-white">Aglaonema plant</h3>
                <ChevronRight className="size-4 text-white/80" />
              </div>
              <button className="flora-button mt-4 h-8 px-7 text-xs">
                Buy Now
              </button>
            </div>
            <div className="relative z-10 mt-5 flex items-center justify-center gap-1.5">
              <span className="h-1 w-5 bg-white rounded-full" />
              <span className="size-1 bg-white/55 rounded-full" />
              <span className="size-1 bg-white/55 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
