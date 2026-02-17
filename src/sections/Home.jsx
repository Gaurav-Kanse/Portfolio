import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax Effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="h-screen bg-[#f4efe6] text-[#111] flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative X Pattern */}
      <div className="absolute top-20 left-20 grid grid-cols-6 gap-3 opacity-40">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="text-sm">×</span>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="text-center"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold tracking-widest"
        >
          PORTFOLIO
        </motion.h1>

        {/* Year Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="h-[2px] w-40 bg-black mx-auto my-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm tracking-widest"
        >
          Gaurav Kanse - 2024-25
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 text-xs tracking-widest"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
