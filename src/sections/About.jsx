import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#f4e7ce] text-[#111] px-10 md:px-24 py-40">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-baseline gap-6 mb-24"
        >
          <span className="text-6xl font-light text-gray-400">
            01
          </span>
          <h2 className="text-6xl font-semibold tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Intro Statement */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl max-w-3xl leading-relaxed text-gray-700 mb-28"
        >
          I build digital experiences that balance logic, design, and creativity —
          crafting interfaces that feel intentional, refined, and alive.
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-24 text-lg leading-relaxed text-gray-700">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              My work focuses on clean, performance-driven interfaces.
              I believe simplicity creates impact — and thoughtful design
              turns functionality into experience.
              <br /><br />
              I approach development with a calm, structured mindset —
              refining details, improving performance, and building
              intuitive digital systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              Beyond front-end development, I explore 3D visualization
              through Blender and experiment with machine learning.
              I enjoy blending technical depth with cinematic storytelling.
              <br /><br />
              Calm. Focused. Always building.
            </p>
          </motion.div>

        </div>

        {/* Premium Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-36 flex justify-center"
        >
          <div className="w-32 h-[1px] bg-black/20 origin-left" />
        </motion.div>

      </div>

    </section>
  );
}