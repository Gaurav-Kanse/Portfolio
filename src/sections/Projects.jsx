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
    <section className="min-h-screen bg-[#f4efe6] text-[#111] px-10 md:px-20 py-20">
      <h2 className="text-4xl font-bold mb-16 text-center tracking-wide">
        GIT HUB PROJECTS
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: false }}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-2">
              {repo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {repo.description }
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
