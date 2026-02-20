import { motion } from "framer-motion";
import {
  Code,
  Server,
  GitBranch,
  Brain,
  Database,
  Box,
  Layers,
  Cpu
} from "lucide-react";

const skillGroups = [
  {
    title: "Development",
    number: "01",
    skills: [
      { name: "React", icon: Code },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Node.js", icon: Server },
      { name: "FastAPI", icon: Server },
      { name: "REST APIs", icon: Database },
      { name: "Git & GitHub", icon: GitBranch }
    ]
  },
  {
    title: "AI & Machine Learning",
    number: "02",
    skills: [
      { name: "Python", icon: Cpu },
      { name: "Scikit-learn", icon: Brain },
      { name: "Pandas", icon: Database },
      { name: "Model Deployment", icon: Server },
      { name: "Basic NLP", icon: Brain }
    ]
  },
  {
    title: "Creative Technology",
    number: "03",
    skills: [
      { name: "Three.js", icon: Box },
      { name: "Blender (3D Rendering)", icon: Box },
      { name: "Framer Motion", icon: Layers }
    ]
  }
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#f4e7ce] text-[#111] px-10 md:px-24 py-40">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-6 mb-32"
        >
          <span className="text-6xl font-light text-gray-400">
            02
          </span>
          <h2 className="text-6xl font-semibold tracking-tight">
            Skills
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-32">

          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Group Header */}
              <div className="flex items-center gap-6 mb-16">
                <span className="text-3xl font-light text-gray-400">
                  {group.number}
                </span>
                <h3 className="text-3xl font-semibold tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-5 p-6 rounded-2xl 
                                 bg-white/60 backdrop-blur-md 
                                 border border-black/5
                                 transition-all duration-500
                                 hover:-translate-y-2
                                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    >
                      <div className="p-3 rounded-xl bg-black/5 group-hover:bg-black transition-colors duration-500">
                        <Icon
                          size={20}
                          className="text-black group-hover:text-white transition-colors duration-500"
                        />
                      </div>

                      <span className="text-sm font-medium tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          ))}

        </div>

        {/* Cinematic Divider */}
        <div className="mt-36 flex justify-center">
          <div className="w-32 h-[1px] bg-black/20" />
        </div>

      </div>

    </section>
  );
}