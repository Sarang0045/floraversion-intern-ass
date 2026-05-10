import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  { name: "Shelly Russel", initials: "SR", color: "bg-[radial-gradient(circle_at_38%_25%,#f5a07a,#8b1d62_42%,#0b1220_74%)]", text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!" },
  { name: "Lula Rolfson", initials: "LR", color: "bg-[radial-gradient(circle_at_38%_25%,#f6c47d,#6d583a_44%,#102018_78%)]", text: "Each one has its own unique charm and personality, and they're already started brightening up my space. The vibrant colors and freshness make such a huge difference in my home." },
  { name: "Carol Huels", initials: "CH", color: "bg-[radial-gradient(circle_at_38%_25%,#fe4464,#4733bd_43%,#10172a_78%)]", text: "It's like bringing a little piece of nature indoors. Definitely worth the investment, my place and home has never looked better!" },
];

export function Reviews() {
  return (
    <section className="relative py-24">
      <div className="flora-shell">
        <SectionTitle>Customer Review</SectionTitle>
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass min-h-[15.5rem] rounded-[2rem] p-8"
            >
              <div className="flex items-center gap-3">
                <div className={`size-11 rounded-full ${r.color} flex items-center justify-center text-[0.62rem] font-semibold text-white`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="size-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-7 text-[0.72rem] leading-snug text-white/68">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
