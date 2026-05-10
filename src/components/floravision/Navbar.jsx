import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/plant.png";

const links = ["Home", "Plants Type", "More", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#0d180d]/75 border-b border-white/5" : ""
      }`}
    >
      <nav className="flora-shell h-16 md:h-[4.65rem] flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 font-bold text-[0.84rem] md:text-[0.95rem]">
          <img src={logo} alt="" className="size-7 md:size-8 object-contain" />
          <span>FloraVision<span className="text-white">.</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[0.72rem] text-white/85">
          {links.map((l) => (
            <li key={l} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              {l}
              {l === "Plants Type" && <ChevronDown className="size-3.5" />}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="text-white/80 hover:text-white"><Search className="size-3.5" /></button>
          <button aria-label="Cart" className="text-white/80 hover:text-white"><ShoppingBag className="size-3.5" /></button>
          <button aria-label="Menu" className="text-white/80 hover:text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden glass-strong border-t border-white/5"
        >
          <ul className="flex flex-col p-6 gap-4 text-white/90">
            {links.map((l) => (
              <li key={l} className="py-2 border-b border-white/5 cursor-pointer hover:text-[oklch(0.85_0.16_150)]">{l}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
