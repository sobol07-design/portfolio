import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function RevealSection({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="reveal-section"
      initial={
        reduced ? false : { opacity: 0.5, transform: "translateY(56px)" }
      }
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
