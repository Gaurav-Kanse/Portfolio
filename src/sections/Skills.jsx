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
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-16 text-center tracking-wide">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: false }}
            className="bg-white shadow-lg rounded-xl p-8 text-center font-semibold hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
