import { useEffect, useState } from 'react';
import './App.css';

const Typewriter = () => {
  const phrases = ["IT 3rd Year Student", "Web Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // Handle blinking caret
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000); // Pause before deleting
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  const currentPhrase = phrases[index];

  return (
    <p className="typing-text">
      I am <span className="typewriter">{currentPhrase.substring(0, subIndex)}</span>
      <span className="caret" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </p>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <div className="WebTitle">
          ALFONZ PEREZ
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#message" onClick={() => setMenuOpen(false)}>Message</a>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="mode-toggle mobile-toggle"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mode-toggle desktop-toggle"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="main-content">
      <div className="heading-container">
  <h1>Hello, World! It's Alfonz</h1>
</div>
        <Typewriter />
        <img
          className="profile-pic-placeholder"
          src="profile/profile.webp"
          alt="Profile"
        />

        <section id="about" className="section">
          <p>Hey!  I'm Alfonz, a third-year student at Negros Oriental State University studying information technology. 
 enthusiastic about constructing, photo editing, and web development 
 captivating online interactive experiences.</p>
        </section>

        <section id="socials" className="section">
  <h2>Socials</h2>
  <div className="social-icons">
  <a href="https://www.facebook.com/pahingakamunaaaa" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
    </a>
    <a href="https://github.com/TacoTues1" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
    </a>
    <a href="https://www.instagram.com/alfonzpereezz/" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
    </a>
  </div>
</section>


<section id="projects" className="section">
  <h2>Projects</h2>
  <div className="project-cards">
    <div className="project-card">
      <img src="projects_image/countryAPI.png" alt="Country Information Project" className="project-image" />
      <h3>Country Information using API</h3>
      <p>This project displays country details using a public API. It features a search bar, flags, and hover modals.</p>
      <div className="project-links">
        <a href="https://github.com/TacoTues1/Testing" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon-small" />
        </a>
        <a href="https://midtermtesting.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" alt="Netlify" className="icon-small" />
        </a>
      </div>
    </div>
  </div>
</section>

<section id="skills" className="section">
  <h2>Skills</h2>
  <div className="skill-icons">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="ReactJS" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="Laravel" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="PHP" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon-small" />
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" alt="MySQL" className="icon-small" />
  </div>
</section>
<section id="message" className="section">
  <h2>Message for Me :)</h2>
  <form>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        required
      />
    </div>
    <button type="submit" className="submit-btn">Send Message</button>
  </form>
</section>

      </main>
    </div>
  );
}

export default App;
