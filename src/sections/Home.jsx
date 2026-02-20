import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="h-screen bg-gradient-to-b bg-[#f4e7ce] text-[#111] flex items-center justify-center relative overflow-hidden"
    >

      {/* Subtle Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]" />

      {/* X Pattern */}
      <div className="absolute top-20 left-20 grid grid-cols-6 gap-3 opacity-25 select-none">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="text-sm">×</span>
        ))}
      </div>

      {/* Top Right Vertical Line (Animated Draw) */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-16 right-16 h-40 w-[1px] bg-black opacity-20 origin-top"
      />

      {/* Floating Stars */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-12 right-24 text-xs opacity-40 select-none"
      >
        ✦ ✧ ✦
      </motion.div>

      {/* Bottom Horizontal Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute bottom-20 right-16 w-48 h-[1px] bg-black opacity-20 origin-left"
      />

      {/* Bottom Star */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-24 right-10 text-sm opacity-40 select-none"
      >
        ✦
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="text-center relative z-10 max-w-4xl px-6"
      >

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-semibold tracking-tight"
        >
          Gaurav Kanse
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[2px] w-32 bg-black mx-auto my-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-600 tracking-wide"
        >
          Creative Developer • UI Designer • ML Explorer
        </motion.p>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 text-xs tracking-[0.3em] text-gray-500"
      >
        SCROLL
      </motion.div>

    </section>
  );
}