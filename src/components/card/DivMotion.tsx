"use client";
import { motion } from "framer-motion";
const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export const DivMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="min-w-[140px]  max-w-[200px] min-h-[230px]  sm:min-h-[270px] relative border border-[#ffffff20] overflow-hidden rounded-lg shadow-2xl shadow-[#ffffff10] group"
      variants={variant}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      {children}
    </motion.div>
  );
};
