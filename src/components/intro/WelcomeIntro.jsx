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

const NEXT_WORD_DELAY_MS = 150;
const LAST_WORD_HOLD_MS = 1000;

const sheetVariants = {
  idle: { y: '0%' },
  exit: { y: '-112%' },
};

const SHEET_EXIT_TRANSITION = {
  type: 'tween',
  duration: 0.78,
  ease: [0.76, 0, 0.24, 1],
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

      <div className="welcome-word-wrap" style={{ display: 'grid', width: 'min(90vw, 28rem)', minHeight: '5rem' }}>
        <AnimatePresence mode="wait" initial={false}>
          {!isExiting ? (
            <motion.span
              key={activeWord}
              className="welcome-word"
              style={{ gridArea: '1 / 1', justifySelf: 'center', alignSelf: 'center' }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4, transition: { duration: 0.09, ease: 'easeInOut' } }}
              transition={{ duration: 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="welcome-star" aria-hidden="true">&#10022;</span>
              <span className="welcome-text">{activeWord}</span>
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WelcomeIntro;
