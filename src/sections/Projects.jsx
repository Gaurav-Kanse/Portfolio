import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Gaurav-Kanse/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 6);
        setRepos(sorted);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-28">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight"
      >
        Selected Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
            className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold tracking-tight">
                {repo.name}
              </h3>

              {repo.language && (
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {repo.language}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed min-h-[60px]">
              {repo.description || "No description provided."}
            </p>

            <div className="mt-6 text-sm font-medium text-gray-800 group-hover:translate-x-1 transition-transform duration-300">
              View Repository →
            </div>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-24 mb-12 border-t border-gray-200 max-w-4xl mx-auto" />

      {/* GitHub CTA */}
      <div className="flex flex-col items-center gap-6">

        <p className="text-gray-600 text-sm">
          Explore more projects and contributions on my GitHub.
        </p>

        <a
          href="https://github.com/Gaurav-Kanse"
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 rounded-full bg-black text-white font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105"
        >
          Visit My GitHub →
        </a>

      </div>
    </section>
  );
}
