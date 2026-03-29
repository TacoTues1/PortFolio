import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WelcomeIntro from './components/intro/WelcomeIntro';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [welcomeFinished, setWelcomeFinished] = useState(false);

  return (
    <div className="h-screen app-shell text-white overflow-hidden">
      <div className="ambient-bg" aria-hidden="true" />
      {!welcomeFinished && <WelcomeIntro onFinish={() => setWelcomeFinished(true)} />}
      <Navbar showBrand={introDone} />
      <motion.main
        initial={{ y: 24 }}
        animate={{ y: welcomeFinished ? 0 : 24 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="h-full"
      >
        <Hero onTypeSequenceDone={() => setIntroDone(true)} />
      </motion.main>
    </div>
  );
}

export default App;
