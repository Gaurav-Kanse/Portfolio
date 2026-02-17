import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-28 relative overflow-hidden">

      {/* Decorative X pattern */}
      <div className="absolute top-20 right-20 grid grid-cols-5 gap-3 opacity-20 text-gray-400 select-none">
        {[...Array(10)].map((_, i) => (
          <span key={i}>×</span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-16"
        >
          About Me
        </motion.h2>

        {/* Intro Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl mb-20 max-w-3xl leading-relaxed text-gray-700"
        >
          I’m Gaurav — a developer who blends logic, design, and creativity 
          to build digital experiences that feel intentional and alive.
        </motion.p>

        {/* Two Column Editorial Layout */}
        <div className="grid md:grid-cols-2 gap-16 text-lg leading-relaxed text-gray-700">

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            I love building clean and performance-focused interfaces.
            As someone deeply interested in UI/UX, I care about how things
            feel just as much as how they function. Every project I build
            aims to balance simplicity with impact.
            <br /><br />
            My journey started with curiosity — experimenting with code,
            animation, and design until things started to click.
          </motion.p>

          <motion.p
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Beyond development, I explore Blender, machine learning,
            and creative problem solving. I enjoy working on projects
            that challenge me technically while also allowing space
            for visual storytelling.
            <br /><br />
            Calm. Focused. Always building.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-gray-200" />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <div className="text-sm text-gray-500 uppercase tracking-widest">
            Contact
          </div>

          <div className="flex flex-col md:flex-row gap-6">

            <a
              href="https://github.com/Gaurav-Kanse"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
            >
              github.com/Gaurav-Kanse
            </a>

            <a
              href="mailto:gauravkanse27@gmail.com"
              className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
            >
              gauravkanse27@gmail.com
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
