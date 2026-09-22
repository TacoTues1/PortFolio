import React, { useEffect, useState } from 'react';
import { SwatchIcon } from '@heroicons/react/24/solid';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WelcomeIntro from './components/intro/WelcomeIntro';

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_SEQUENCE = ['khaki', 'sand', 'olive', 'midnight', 'mono'];

const THEME_LABELS = {
  khaki: 'Khaki Luxury',
  sand: 'Desert Sand',
  olive: 'Safari Olive',
  midnight: 'Obsidian Earth',
  mono: 'Studio Mono',
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme && THEME_SEQUENCE.includes(savedTheme) && savedTheme !== 'sand') {
    return savedTheme;
  }
  return 'khaki';
};

function App() {
  const [activeTheme, setActiveTheme] = useState(getInitialTheme);
  const [introDone, setIntroDone] = useState(false);
  const [welcomeFinished, setWelcomeFinished] = useState(false);

  useEffect(() => {
    const allKnownThemes = [
      'khaki',
      'sand',
      'olive',
      'midnight',
      'mono',
      'dark',
      'light',
      'rose',
      'watermelon',
      'cybor',
      'aurora',
      'ember',
      'lime',
    ];
    const themeClasses = allKnownThemes.map((theme) => `theme-${theme}`);
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(`theme-${activeTheme}`);
    localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  const applyNextTheme = () => {
    setActiveTheme((currentTheme) => {
      const currentIndex = THEME_SEQUENCE.indexOf(currentTheme);
      const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % THEME_SEQUENCE.length;
      return THEME_SEQUENCE[nextIndex];
    });
  };

  const rotateTheme = () => {
    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(() => {
        applyNextTheme();
      });
      return;
    }

    applyNextTheme();
  };

  return (
    <>
      <div className="app-shell min-h-screen">
        <div className="ambient-bg" aria-hidden="true" />
        {!welcomeFinished && <WelcomeIntro onFinish={() => setWelcomeFinished(true)} />}
        <Navbar showBrand={introDone} />
        <main className="min-h-screen">
          <Hero startTyping={welcomeFinished} onTypeSequenceDone={() => setIntroDone(true)} />
        </main>
      </div>

      {introDone ? (
        <button
          type="button"
          onClick={rotateTheme}
          className="theme-toggle-widget"
          aria-label={`Change theme. Current theme: ${THEME_LABELS[activeTheme] || activeTheme}`}
          title={`Switch theme: currently ${THEME_LABELS[activeTheme] || activeTheme}`}
        >
          <div className="theme-toggle-icon-wrap" aria-hidden="true">
            <SwatchIcon className="theme-toggle-icon" />
          </div>
          <span className="theme-toggle-text">
            {THEME_LABELS[activeTheme] || activeTheme}
          </span>
        </button>
      ) : null}
    </>
  );
}

export default App;
