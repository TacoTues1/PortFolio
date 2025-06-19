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
      title: 'Photo Booth',
      description:
        "A Photo Booth website is a web-based application that allows users to take, preview, and download photos using their device's webcam. It typically features options like layout selection, countdown timers, photo filters, and a gallery to view or delete saved images. Ideal for events, personal use, or entertainment, the site offers an interactive and fun way to capture memories directly through the browser.",
      image: '/images/photobooth.jpg',
      technologies: ['React', 'Webcam API', 'JavaScript', 'CSS'],
      github: '', // Add GitHub link if available
      live: 'https://photobth.netlify.app/',
    },
    {
      title: 'TESTING',
      description:
        'A full-stack web application built with React, Node.js, and MongoDB.',
      image: '/images/sample.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/username/project1',
      live: 'https://project1.com',
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
                <div className="mt-auto text-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
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
                {repos.map((repo) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {repo.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <FaGithub className="w-4 h-4 mr-1" />
                          {repo.language || 'Not specified'}
                        </span>
                        <span className="flex items-center">
                          ⭐ {repo.stargazers_count}
                        </span>
                      </div>
                      <span className="text-xs">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 