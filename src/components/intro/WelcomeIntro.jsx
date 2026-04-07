import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

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

const NEXT_WORD_DELAY_MS = 130;
const LAST_WORD_HOLD_MS = 1000;

const sheetVariants = {
  idle: { y: '0%' },
  exit: { y: '-120%' },
};

const SHEET_EXIT_TRANSITION = {
  type: 'tween',
  duration: 0.46,
  ease: [0.22, 1, 0.36, 1],
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
        transition={SHEET_EXIT_TRANSITION}
        onAnimationComplete={() => {
          if (isExiting) {
            onFinish();
          }
        }}
      />

      {!isExiting && (
      <div className="welcome-word-wrap text-xs sm:text-sm md:text-base lg:text-lg">
          <span className="welcome-word">• {activeWord}</span>
      </div>
      )}
    </div>
  );
}

export default WelcomeIntro;