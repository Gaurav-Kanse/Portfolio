import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Gaurav-Kanse/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 6);
        setRepos(sorted);
      });
  }, []);

  return (
    <section
      className="relative min-h-screen bg-[#f4e7ce] px-10 md:px-24 py-40 text-[#111]"
    
    >
      <div className="max-w-6xl mx-auto bg-[#f4e7ce]">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-6 mb-24"
        >
          <span className="text-6xl font-light text-gray-400 tracking-tight">
            03
          </span>
          <h2 className="text-6xl font-semibold tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {/* Editorial Intro */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <p className="text-xl leading-relaxed text-gray-700">
            A curated collection of development work —
            focused on performance, structure, and refined interface design.
          </p>

          <p className="text-gray-600 leading-relaxed">
            These projects reflect my approach to building scalable,
            thoughtful digital systems — balancing clean architecture
            with elegant user experience.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-md 
                         border border-black/5 
                         rounded-2xl p-8 
                         transition-all duration-500
                         hover:-translate-y-3
                         hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {repo.name}
                </h3>

                {repo.language && (
                  <span className="text-xs px-3 py-1 rounded-full 
                                   bg-black/5 text-gray-600">
                    {repo.language}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed min-h-[70px]">
                {repo.description || "No description provided."}
              </p>

              {/* Footer */}
              <div className="mt-8 text-sm font-medium text-black/70 
                              group-hover:translate-x-1 
                              transition-transform duration-300">
                View Repository →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Premium Divider */}
        <div className="mt-36 mb-16 flex justify-center">
          <div className="w-32 h-[1px] bg-black/20" />
        </div>

        {/* GitHub CTA */}
        <div className="flex flex-col items-center gap-8">

          <p className="text-gray-600 text-sm tracking-wide">
            Explore more work and contributions on GitHub.
          </p>

          <a
            href="https://github.com/Gaurav-Kanse"
            target="_blank"
            rel="noreferrer"
            className="group relative px-14 py-5 rounded-full 
                       bg-black text-white font-medium tracking-wide
                       transition-all duration-500
                       hover:scale-105"
          >
            <span className="relative z-10">Visit My GitHub</span>

            {/* Subtle glow */}
            <span className="absolute inset-0 rounded-full 
                             bg-gradient-to-r from-white/10 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition duration-500" />
          </a>

        </div>

      </div>
    </section>
  );
}