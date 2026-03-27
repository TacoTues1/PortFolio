import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="h-screen app-shell text-slate-100 overflow-hidden">
      <div className="ambient-bg" aria-hidden="true" />
      <Navbar showBrand={introDone} />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full"
      >
        <Hero onTypeSequenceDone={() => setIntroDone(true)} />
      </motion.main>
    </div>
  );
}

export default App;
