import { motion } from "framer-motion";

export function SectionTitle({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <h2 className="bracket-title relative inline-block px-2 text-2xl md:text-[1.7rem] font-semibold leading-none text-white">
        {children}
      </h2>
    </motion.div>
  );
}
