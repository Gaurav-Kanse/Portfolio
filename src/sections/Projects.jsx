import { motion } from "framer-motion";

const pinnedProjects = [
  {
    name: "AI Business Manager",
    repo: "Ai-Business-Manger",
    description:
      "AI-powered business assistant integrating invoice parsing, inventory updates, and intelligent chat-based interaction.",
    tech: ["Python", "FastAPI", "LLM"]
  },
  {
    name: "BookBridge",
    repo: "BookBridge",
    description:
      "A structured web platform built with modern JavaScript architecture focusing on usability and clean UI implementation.",
    tech: ["JavaScript", "Frontend"]
  },
  {
    name: "Machine Learning",
    repo: "Machine-Learning-",
    description:
      "Collection of machine learning experiments, model training workflows, and data analysis implementations.",
    tech: ["Python", "Jupyter", "ML"]
  },
  {
    name: "Nyx Personal Chatbot",
    repo: "Nyx-Personal-Chatbot",
    description:
      "Custom conversational AI chatbot with structured dialogue handling and backend logic integration.",
    tech: ["Python", "AI"]
  },
  {
    name: "Portfolio",
    repo: "Portfolio",
    description:
      "Cinematic minimal luxury portfolio built using React, Framer Motion, and interactive UI systems.",
    tech: ["React", "Framer Motion", "Tailwind"]
  },
  {
    name: "Alexis",
    repo: "Alexis",
    description:
      "Voice-based AI assistant integrating conversational AI and real-time execution capabilities.",
    tech: ["Python", "AI", "Voice SDK"]
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#f4e7ce] px-10 md:px-20 py-32 text-[#111] relative overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-6 mb-24">
          <span className="text-6xl font-light text-gray-400 opacity-40">
            03
          </span>
          <h2 className="text-6xl font-semibold tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* Intro Text */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed">
          <p>
            A curated selection of pinned repositories showcasing applied development,
            AI experimentation, and structured frontend engineering.
          </p>
          <p>
            Each project reflects hands-on implementation, architectural thinking,
            and practical problem solving across real-world scenarios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {pinnedProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={`https://github.com/Gaurav-Kanse/${project.repo}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-md 
                         border border-black/5 
                         rounded-2xl p-10 
                         transition-all duration-500
                         hover:-translate-y-3
                         hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                {project.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-black/5 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-sm font-medium text-black/70 group-hover:translate-x-1 transition-transform duration-300">
                View Repository →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-32 mb-16 flex justify-center">
          <div className="w-32 h-[1px] bg-black/20" />
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Gaurav-Kanse"
            target="_blank"
            rel="noreferrer"
            className="px-14 py-5 rounded-full bg-black text-white font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:bg-gray-800"
          >
            View Full GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}