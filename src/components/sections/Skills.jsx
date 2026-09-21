import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Sass', icon: SiSass },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell pt-2">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="panel-card p-8 sm:p-10"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech I use to ship fast.</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] px-4 py-5 flex flex-col items-center text-center transition-colors hover:border-[var(--border-card-hover)]"
              >
                <skill.icon className="h-8 w-8 text-[var(--khaki-accent-bright)]" />
                <p className="mt-3 text-sm font-medium text-[var(--text-head)] font-mono">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
