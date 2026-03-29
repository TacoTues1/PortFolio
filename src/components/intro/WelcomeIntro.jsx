import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const greetings = [
  'Hola',
  'Bonjour',
  'Ciao',
  'Szia',
  'Ahoj',
  'Salut',
  'Selam',
  'Kamusta',
  'Salaam',
  'Halo',
  'Ola',
  'Annyeong',
  'Nin hao',
  'Merhaba',
  'Shalom',
  'Sawubona',
  'Hello',
];

const NEXT_WORD_DELAY_MS = 170;
const LAST_WORD_HOLD_MS = 900;

const sheetVariants = {
  idle: { y: '0%' },
  exit: { y: '-120%' },
};

const wordVariants = {
  initial: { y: 12 },
  animate: { y: 0 },
  exit: { y: -12 },
};

function WelcomeIntro({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const activeWord = useMemo(() => greetings[wordIndex], [wordIndex]);

  useEffect(() => {
    if (isExiting) {
      return undefined;
    }

    const isLastWord = wordIndex === greetings.length - 1;
    const delay = isLastWord ? LAST_WORD_HOLD_MS : NEXT_WORD_DELAY_MS;
    const timer = window.setTimeout(() => {
      if (isLastWord) {
        setIsExiting(true);
        return;
      }

      setWordIndex((current) => current + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isExiting, wordIndex]);

  return (
    <div className="welcome-overlay">
      <motion.div
        className="welcome-sheet"
        variants={sheetVariants}
        initial="idle"
        animate={isExiting ? 'exit' : 'idle'}
        transition={{ type: 'spring', stiffness: 96, damping: 22, mass: 1.02 }}
        onAnimationComplete={() => {
          if (isExiting) {
            onFinish();
          }
        }}
      />

      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            className="welcome-word-wrap"
            key={activeWord}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.14, ease: [0.24, 0.84, 0.2, 1] }}
          >
            <span className="welcome-word">{activeWord}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WelcomeIntro;