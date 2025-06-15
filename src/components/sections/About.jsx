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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-lg transform rotate-3" />
              <img
                src="/images/profile.jpg" // Replace with your photo path
                alt="Profile"
                className="relative w-full h-full object-cover rounded-lg transform -rotate-3"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
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

            {/* Key Points */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { label: 'Experience', value: '4+' },
                { label: 'Projects', value: '7' },
                { label: 'Companies', value: '..' },
                { label: 'Location', value: 'Dumaguete City' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 