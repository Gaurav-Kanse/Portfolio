import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="h-screen bg-[#f4efe6] text-[#111] flex items-center justify-center relative overflow-hidden"
    >

      {/* Left Decorative X Pattern */}
      <div className="absolute top-20 left-20 grid grid-cols-6 gap-3 opacity-30 select-none">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="text-sm">×</span>
        ))}
      </div>

      {/* Top Right Vertical Line */}
      <div className="absolute top-16 right-16 h-40 w-[1px] bg-black opacity-20" />

      {/* Top Right Stars */}
      <div className="absolute top-10 right-24 text-xs opacity-40 select-none">
        ✦ ✧ ✦
      </div>

      {/* Bottom Right Horizontal Line */}
      <div className="absolute bottom-20 right-16 w-48 h-[1px] bg-black opacity-20" />

      {/* Bottom Right Single Star */}
      <div className="absolute bottom-24 right-10 text-sm opacity-40 select-none">
        ✦
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold tracking-widest"
        >
          PORTFOLIO
        </motion.h1>

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
          Gaurav Kanse — 2024-25
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
