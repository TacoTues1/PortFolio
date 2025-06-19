import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
  Passionate Full Stack Developer specializing in building modern, responsive web applications with React, Node.js, and Tailwind CSS.
</p>
          </motion.div>

          {/* Key Information Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Experience', value: '4+ Years', description: 'Student' },
              { label: 'Company', value: 'Freelancer', description: 'Current Position' },
              { label: 'Location', value: 'Dumaguete City', description: 'Philippines' },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in
                modern web technologies. With several years of experience in
                building scalable applications, I focus on creating intuitive and
                efficient user experiences.
              </p>
              <p>
                 My journey in web development started with a curiosity about how
                 things work on the internet, which led me to dive deep into both
                 frontend and backend technologies. I enjoy solving complex
                 problems and turning ideas into reality through clean and
                 maintainable code.
               </p>
               <p>
                 When I'm not coding, you can find me exploring new technologies,
                 contributing to open-source projects, or sharing my knowledge
                 through technical writing and mentoring.
               </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 