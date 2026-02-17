import { motion } from "framer-motion";

const skills = [
  "Front-End Development",
  "Back-End Development",
  "Three.js",
  "Python",
  "Java",
  "Machine Learning",
  "UI/UX Design",
  "Blender"
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-28">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="px-8 py-4 rounded-full bg-white border border-gray-200 text-sm md:text-base font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
