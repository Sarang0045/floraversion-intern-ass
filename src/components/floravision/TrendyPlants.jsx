import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import plantain from "@/assets/plant logo 23.png";
import succulent from "@/assets/plant logo 21.png";

const cards = [
  {
    image: plantain,
    title: "For Your Desks Decorations",
    desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    reverse: false,
  },
  {
    image: succulent,
    title: "For Your Desks Decorations",
    desc: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
    reverse: true,
  },
];

export function TrendyPlants() {
  return (
    <section className="relative -mt-20 pb-24">
      <div className="flora-shell">
        <SectionTitle>Our Trendy plants</SectionTitle>

        <div className="mt-16 space-y-28">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`glass min-h-[21.5rem] rounded-[5rem] px-8 py-10 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-20 ${
                c.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`relative h-64 w-64 md:h-[24rem] md:w-[24rem] shrink-0 -my-24 ${c.reverse ? "md:mr-4" : "md:-ml-8"}`}>
                <img
                  src={c.image}
                  alt={c.title}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-[0_30px_50px_rgb(0_0_0/0.62)]"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-white">{c.title}</h3>
                <p className="mt-3 max-w-[36rem] text-xs md:text-sm text-white/75 leading-snug">{c.desc}</p>
                <p className="mt-4 text-xl font-medium text-white">{c.price}</p>
                <div className="mt-5 flex items-center gap-4 justify-center md:justify-start">
                  <button className="flora-button h-8 px-10 text-xs">
                    Explore
                  </button>
                  <button aria-label="Add to cart" className="flora-button size-8">
                    <ShoppingBag className="size-3.5 text-white" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
