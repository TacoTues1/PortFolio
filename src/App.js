import React, { useEffect, useState } from 'react';
import { SwatchIcon } from '@heroicons/react/24/solid';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WelcomeIntro from './components/intro/WelcomeIntro';

const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_SEQUENCE = ['dark', 'light', 'rose', 'watermelon', 'midnight', 'cybor', 'aurora', 'ember', 'mono', 'lime'];

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme && THEME_SEQUENCE.includes(savedTheme)) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [activeTheme, setActiveTheme] = useState(getInitialTheme);
  const [introDone, setIntroDone] = useState(false);
  const [welcomeFinished, setWelcomeFinished] = useState(false);

  useEffect(() => {
    const themeClasses = THEME_SEQUENCE.map((theme) => `theme-${theme}`);
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
      <div className="app-shell text-white min-h-screen">
        <div className="ambient-bg" aria-hidden="true" />
        {!welcomeFinished && <WelcomeIntro onFinish={() => setWelcomeFinished(true)} />}
        <Navbar showBrand={introDone} />
        <main className="min-h-screen">
          <Hero startTyping={welcomeFinished} onTypeSequenceDone={() => setIntroDone(true)} />
        </main>
      </div>

      {welcomeFinished ? (
        <button
          type="button"
          onClick={rotateTheme}
          className="theme-toggle-btn"
          aria-label={`Change theme. Current theme: ${activeTheme}`}
          title={`Theme: ${activeTheme}`}
        >
          <SwatchIcon className="theme-toggle-icon" aria-hidden="true" />
          <span className="sr-only">Change theme</span>
        </button>
      ) : null}
    </>
  );
}

export default App;
