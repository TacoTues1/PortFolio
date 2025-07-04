import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllRepos, setShowAllRepos] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch all repositories
        const response = await axios.get(
          'https://api.github.com/users/TacoTues1/repos?sort=updated'
        );
        // Filter out forks and sort by stars
        const filteredRepos = response.data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setRepos([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featuredProjects = [
    {
      title: 'Time Master',
      description:
        "A comprehensive time management web application featuring a stopwatch and timer functionality. Built with modern web technologies, it provides precise time tracking with start, stop, and reset capabilities. The timer allows users to set custom hours, minutes, and seconds for countdown purposes. Perfect for productivity, workouts, cooking, or any activity requiring time management.",
      image: '/images/timemaster.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
      github: 'https://github.com/TacoTues1/Clock',
      live: 'https://clocktimerwatch.netlify.app/',
    },
    {
      title: 'Tic Tac Toe',
      description:
        "A classic Tic Tac Toe game with both Player vs Player and Player vs Computer modes. Features a clean, intuitive interface with score tracking and game state management. The computer opponent uses strategic algorithms to provide a challenging gameplay experience. Includes game restart functionality and visual feedback for game status.",
      image: '/images/tictactoe.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      github: 'https://github.com/TacoTues1/TicTacToe',
      live: 'https://tictac2s.netlify.app/',
    },
    {
      title: 'Simple Pong Game',
      description:
        "A modern implementation of the classic Pong arcade game using web technologies. Features smooth paddle movement, ball physics, and responsive controls. The game includes score tracking and maintains the nostalgic feel of the original while adding modern web design elements and smooth animations.",
      image: '/images/ponggame.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
      github: 'https://github.com/TacoTues1/PongGame',
      live: 'https://ponggam3.netlify.app/',
    },
    {
      title: 'Photo Booth',
      description:
        "A Photo Booth website is a web-based application that allows users to take, preview, and download photos using their device's webcam. It typically features options like layout selection, countdown timers, photo filters, and a gallery to view or delete saved images. Ideal for events, personal use, or entertainment, the site offers an interactive and fun way to capture memories directly through the browser.",
      image: '/images/photobooth.jpg',
      technologies: ['React', 'Webcam API', 'JavaScript', 'CSS'],
      github: '', // Add GitHub link if available
      live: 'https://photobth.netlify.app/',
    },
    // Add more featured projects here
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is a unique piece
              of development that showcases my skills and experience.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between min-h-[220px]"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded mb-3 mx-auto"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm text-center">
                  {project.description.length > 100 ? project.description.slice(0, 100) + '...' : project.description}
                </p>
                <div className="mt-auto text-center space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repositories */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Recent Github Repositories
            </h3>
            {loading ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Loading repositories...
              </div>
            ) : repos.length === 0 ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Unable to load repositories. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllRepos ? repos : repos.slice(0, 6)).map((repo) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between min-h-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {repo.name}
                      </h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-xs"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        View
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span className="flex items-center">
                        {repo.language || 'Not specified'}
                      </span>
                      <span className="flex items-center">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-0">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
            {repos.length > 6 && (
              <div className="flex justify-center mt-4">
                <button
                  className="text-blue-600 dark:text-blue-400 bg-transparent border-none px-4 py-2 text-sm font-medium cursor-pointer hover:underline focus:outline-none"
                  type="button"
                  onClick={() => setShowAllRepos((prev) => !prev)}
                >
                  {showAllRepos ? 'See Less' : 'See More'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 