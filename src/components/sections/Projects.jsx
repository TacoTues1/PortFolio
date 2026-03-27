import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

const featuredProjects = [
  {
    title: 'Abalay Rent',
    description:
      'Current project in progress: a rental platform experience for abalay-rent.me.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    github: '',
    live: 'https://abalay-rent.me',
  },
  {
    title: 'Time Master',
    description:
      'A complete time management app with stopwatch and custom timer flows built for productivity and focused routines.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TacoTues1/Clock',
    live: 'https://clocktimerwatch.netlify.app/',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A polished Tic Tac Toe with PvP and smart PvE mode, game state handling, score tracking, and smooth interaction.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TacoTues1/TicTacToe',
    live: 'https://tictac2s.netlify.app/',
  },
  {
    title: 'Photo Booth',
    description:
      'A browser-based photo booth with capture, preview, and download capabilities powered by webcam APIs.',
    technologies: ['React', 'Web APIs', 'CSS'],
    github: '',
    live: 'https://photobth.netlify.app/',
  },
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/TacoTues1/repos?sort=updated');
        const filteredRepos = response.data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);
        setRepos(filteredRepos);
      } catch (error) {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="section-shell pt-2">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="panel-card p-8 sm:p-10"
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">My Project</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-black/25 p-5 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="text-sm text-slate-300/85 leading-relaxed mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-cyan-300"
                    >
                      <FaGithub className="h-4 w-4" />
                      Code
                    </a>
                  ) : null}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                  >
                    Visit
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Recent GitHub Repositories</h3>
            {loading ? (
              <p className="text-slate-400">Loading repositories...</p>
            ) : repos.length === 0 ? (
              <p className="text-slate-400">Unable to load repositories right now.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-slate-100 font-medium">{repo.name}</h4>
                      <span className="text-xs text-cyan-200">⭐ {repo.stargazers_count}</span>
                    </div>
                    <p className="text-sm text-slate-300/85 mt-2">
                      {repo.description || 'No description available.'}
                    </p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
