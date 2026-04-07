import React, { useState } from 'react';
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
      <main className="h-full">
        <Hero startTyping={welcomeFinished} onTypeSequenceDone={() => setIntroDone(true)} />
      </main>
    </div>
  );
}

export default App;
