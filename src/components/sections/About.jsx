import React from 'react';
import { motion } from 'framer-motion';

const details = [
  { label: 'Based In', value: 'Singapore' },
  { label: 'Focus', value: 'Full Stack Development' },
  { label: 'University', value: 'NTU Computer Science' },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="panel-card p-8 sm:p-10"
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Intentional products, clean engineering.</h2>
          <p className="section-copy max-w-4xl mt-5">
            I build thoughtful digital experiences with a balance of product design and
            engineering precision. I enjoy shaping interaction details, writing scalable code,
            and shipping products that are fast, clear, and genuinely useful.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-xl border border-white/10 bg-black/20 px-5 py-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                <p className="text-base text-slate-100 mt-1 font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
