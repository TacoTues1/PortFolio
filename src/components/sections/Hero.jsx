import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaGithub, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import networkAddressingCertificate from '../../cert/Network Addressing and Basic Troubleshooting.pdf';
import networkAddressingUpdatedCertificate from '../../cert/NetworkAddressingandBasicTroubleshootingUpdate20260406-31-azfu5c.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const introText =
  "I'm Alfonz Perez, a full stack developer based in the Philippines who also likes dabbling with design. I graduated from Negros Oriental State University with a Bachelor of Science in Information Technology (BSIT). Feel free to reach out to me!";

const HERO_TITLE_TEXT = 'Hello!';

const projectItems = [
  {
    name: 'Abalay Rent',
    href: 'https://abalay-rent.me',
    description: 'Current project in progress: rental platform at abalay-rent.me.',
  },
  {
    name: 'Abalay Mobile App',
    href: 'https://play.google.com/store/apps/details?id=com.abalay.mobile&hl=en',
    description: 'Android mobile app published on Google Play for Abalay.',
  },
  {
    name: 'Time Master',
    href: 'https://clocktimerwatch.netlify.app/',
    description: 'Productive stopwatch and custom timer landing with focused UI.',
  },
  {
    name: 'Tic Tac Toe',
    href: 'https://tictac2s.netlify.app/',
    description: 'Clean game experience with smooth play flow and score logic.',
  },
  {
    name: 'Photo Booth',
    href: 'https://photobth.netlify.app/',
    description: 'Webcam-based photo capture app with quick preview and sharing.',
  },
];

const contactItems = [
  { name: 'Email', href: 'mailto:alfonzperez92@gmail.com', value: 'alfonzperez92@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/TacoTues1', value: 'github.com/TacoTues1' },
  { name: 'Facebook', href: 'https://www.facebook.com/pahingakamunaaaa', value: 'facebook.com/pahingakamunaaaa' },
];

const certificateItems = [
  {
    name: 'Network Addressing and Basic Troubleshooting',
    href: networkAddressingCertificate,
    value: 'Open certificate PDF',
  },
  {
    name: 'Network Addressing and Basic Troubleshooting (Updated)',
    href: networkAddressingUpdatedCertificate,
    value: 'Open certificate PDF',
  },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/pahingakamunaaaa', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/alfonzpereezz/', icon: FaInstagram },
  { label: 'GitHub', href: 'https://github.com/TacoTues1', icon: FaGithub },
  { label: 'Gmail', href: 'mailto:alfonzperez92@gmail.com', icon: FaEnvelope },
];

const Hero = ({ startTyping = true, onTypeSequenceDone = () => {} }) => {
  const [activePanel, setActivePanel] = useState(null);
  const [hoveredCertificate, setHoveredCertificate] = useState(null);
  const [phase, setPhase] = useState(startTyping ? 'typingName' : 'idle');
  const [charIndex, setCharIndex] = useState(startTyping ? 1 : 0);
  const [typedText, setTypedText] = useState(startTyping ? HERO_TITLE_TEXT.slice(0, 1) : '');

  useLayoutEffect(() => {
    if (startTyping && phase === 'idle') {
      setTypedText(HERO_TITLE_TEXT.slice(0, 1));
      setCharIndex(1);
      setPhase('typingName');
    }
  }, [startTyping, phase]);

  useEffect(() => {
    let timeout;

    if (phase === 'typingName') {
      if (charIndex < HERO_TITLE_TEXT.length) {
        timeout = setTimeout(() => {
          setTypedText(HERO_TITLE_TEXT.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase('done');
          setTypedText(HERO_TITLE_TEXT);
        },1060);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex]);

  useEffect(() => {
    if (phase === 'done') {
      onTypeSequenceDone();
    }
  }, [phase, onTypeSequenceDone]);

  useEffect(() => {
    if (activePanel !== 'certificate') {
      setHoveredCertificate(null);
    }
  }, [activePanel]);

  useEffect(() => {
    if (activePanel) {
      const appShell = document.querySelector('.app-shell');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (appShell instanceof HTMLElement) {
        appShell.style.overflow = 'hidden';
      }
    } else {
      const appShell = document.querySelector('.app-shell');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (appShell instanceof HTMLElement) {
        appShell.style.overflow = '';
      }
    }

    return () => {
      const appShell = document.querySelector('.app-shell');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (appShell instanceof HTMLElement) {
        appShell.style.overflow = '';
      }
    };
  }, [activePanel]);

  const showDetails = phase === 'done';
  const featuredProjects = projectItems.slice(0, 2);
  const otherProjects = projectItems.slice(2);

  const actionButtons = (
    <div className="mx-auto flex w-full max-w-[280px] flex-col gap-3">
      <button
        type="button"
        onClick={() => setActivePanel('projects')}
        className="group inline-flex w-full items-center justify-between gap-3 rounded-lg border border-[#2e7f88]/35 bg-transparent px-4 py-3 text-[#47c4cb] hover:border-[#48d6de]/55 transition-colors"
      >
        <span className="text-base font-semibold">View my works</span>
        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>

      <button
        type="button"
        onClick={() => setActivePanel('certificate')}
        className="group inline-flex w-full items-center justify-between gap-3 rounded-lg border border-white/20 bg-transparent px-4 py-3 text-slate-200 hover:border-[#48d6de]/45 hover:text-[#5dd8df] transition-colors"
      >
        <span className="text-base font-semibold">Certificate</span>
        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>

      <button
        type="button"
        onClick={() => setActivePanel('contact')}
        className="group inline-flex w-full items-center justify-between gap-3 rounded-lg border border-white/20 bg-transparent px-4 py-3 text-slate-200 hover:border-[#48d6de]/45 hover:text-[#5dd8df] transition-colors"
      >
        <span className="text-base font-semibold">Contact Me</span>
        <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );

  return (
    <>
      <section id="hero" className="relative min-h-[100dvh] flex items-start lg:items-center">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 w-full pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-16">
          <div className="relative min-h-0 lg:min-h-[68vh] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10 items-start lg:items-center">
            <motion.div
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
              className="w-full max-w-[760px] justify-self-start self-center"
            >
              <h1 className="text-[38px] sm:text-[58px] md:text-[68px] lg:text-[64px] xl:text-[72px] font-semibold text-slate-100 leading-[1.02] mb-0 min-h-[1.2em]">
                {typedText}
                {phase !== 'done' && phase !== 'idle' ? <span className="typing-cursor">|</span> : null}
              </h1>

              <div className="mt-5 sm:mt-6 min-h-[170px] sm:min-h-[220px] md:min-h-[250px]">
                <motion.div
                  initial={false}
                  animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 8 }}
                  transition={{ duration: showDetails ? 0.85 : 0.2, delay: showDetails ? 0.25 : 0, ease: 'easeOut' }}
                  className={showDetails ? 'pointer-events-auto' : 'pointer-events-none select-none'}
                >
                  <p className="hero-copy text-sm sm:text-base md:text-lg text-slate-200/95 leading-relaxed max-w-[760px] mb-6 sm:mb-8">
                    {introText}
                  </p>

                  <div className="flex items-center gap-5 flex-wrap">
                    {socialLinks.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 10 }}
                        transition={{ delay: showDetails ? 0.12 + index * 0.08 : 0, duration: 0.34 }}
                        whileHover={{ y: -2, scale: 1.04 }}
                        className="h-12 w-12 rounded-full flex items-center justify-center text-slate-100/90 hover:text-white border border-white/12 hover:border-white/35"
                        aria-label={item.label}
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showDetails ? (
                <motion.aside
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="hidden lg:flex w-full max-w-[300px] items-center justify-center justify-self-center self-center"
                >
                  {actionButtons}
                </motion.aside>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {showDetails ? (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.32 }}
                  className="lg:hidden mt-6 sm:mt-8 w-full max-w-[320px]"
                >
                  {actionButtons}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activePanel ? (
          <>
            {activePanel === 'projects' ? (
              <motion.section
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.52, ease: 'easeInOut' }}
                className="fixed inset-0 z-[85] bg-[#1c1f26]"
              >
                <div className="h-full overflow-y-auto">
                  <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-8 sm:py-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-cyan-300 text-sm tracking-wider uppercase">Portfolio</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-slate-100 mt-2">View my works</h2>
                        <p className="text-slate-300 mt-3 max-w-2xl">
                          Full landing-style project view. Click any project to open it.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActivePanel(null)}
                        className="h-10 w-10 rounded-lg border border-white/15 text-slate-200 hover:text-white"
                        aria-label="Close panel"
                      >
                        <XMarkIcon className="h-5 w-5 mx-auto" />
                      </button>
                    </div>

                    <div className="mt-10 pb-8">
                      <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-6">
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Current Projects Working</p>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                          {featuredProjects.map((project) => (
                            <a
                              key={project.name}
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl border border-cyan-300/20 bg-black/15 p-5 hover:border-[#48d6de]/45 transition-colors"
                            >
                              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100">{project.name}</h3>
                              <p className="text-slate-300 mt-3 leading-relaxed">{project.description}</p>
                              <span className="inline-flex items-center mt-5 text-[#62d7de] font-medium">
                                Open Project
                                <ArrowRightIcon className="h-4 w-4 ml-2" />
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Other Projects</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                        {otherProjects.map((project, index) => (
                        <motion.a
                          key={project.name}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.06 * index, duration: 0.35 }}
                          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#48d6de]/45 transition-colors"
                        >
                          <h3 className="text-2xl font-semibold text-slate-100">{project.name}</h3>
                          <p className="text-slate-300 mt-3 leading-relaxed">{project.description}</p>
                          <span className="inline-flex items-center mt-5 text-[#62d7de] font-medium">
                            Open Project
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </span>
                        </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ) : (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/45 z-[75]"
                  onClick={() => setActivePanel(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                />

                <motion.aside
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.46, ease: 'easeInOut' }}
                  className="fixed right-0 top-0 h-screen w-full max-w-[390px] bg-[#1c1f26] border-l border-white/10 z-[80] px-6 py-6"
                >
                  {activePanel === 'certificate' ? (
                    <>
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-slate-100">Certificate</h2>
                        <button
                          type="button"
                          onClick={() => setActivePanel(null)}
                          className="h-10 w-10 rounded-lg border border-white/15 text-slate-200 hover:text-white"
                          aria-label="Close panel"
                        >
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        </button>
                      </div>

                      <div className="mt-8 space-y-4">
                        {certificateItems.map((item) => (
                          <motion.div
                            layout
                            transition={{ layout: { type: 'spring', stiffness: 420, damping: 34, mass: 0.45 } }}
                            key={item.name}
                            onMouseEnter={() => setHoveredCertificate(item.name)}
                            onMouseLeave={() => setHoveredCertificate(null)}
                          >
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onFocus={() => setHoveredCertificate(item.name)}
                              onBlur={() => setHoveredCertificate(null)}
                              className="block rounded-lg border border-white/10 px-4 py-3 hover:border-[#48d6de]/45 transition-colors"
                            >
                              <p className="text-sm text-slate-400">{item.name}</p>
                              <p className="text-slate-100 mt-1">{item.value}</p>
                            </a>

                            <AnimatePresence initial={false}>
                              {hoveredCertificate === item.name ? (
                                <motion.div
                                  key={`${item.name}-preview`}
                                  initial={{ height: 0, opacity: 0, marginTop: 0, scaleY: 0.96 }}
                                  animate={{ height: 'auto', opacity: 1, marginTop: 8, scaleY: 1 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0, scaleY: 0.96 }}
                                  transition={{
                                    height: { type: 'spring', stiffness: 360, damping: 32, mass: 0.42 },
                                    opacity: { duration: 0.16, ease: 'easeOut' },
                                    scaleY: { duration: 0.2, ease: 'easeOut' },
                                  }}
                                  className="overflow-hidden"
                                  style={{ transformOrigin: 'top center' }}
                                >
                                  <div className="rounded-lg border border-white/10 bg-black/20 p-2 certificate-preview">
                                    <Document
                                      file={item.href}
                                      loading={<p className="px-2 py-3 text-sm text-slate-300">Loading preview...</p>}
                                      error={<p className="px-2 py-3 text-sm text-slate-300">Preview unavailable. Open the certificate PDF.</p>}
                                      className="flex justify-center"
                                    >
                                      <Page
                                        pageNumber={1}
                                        height={176}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                      />
                                    </Document>
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-slate-100">Contact Me</h2>
                        <button
                          type="button"
                          onClick={() => setActivePanel(null)}
                          className="h-10 w-10 rounded-lg border border-white/15 text-slate-200 hover:text-white"
                          aria-label="Close panel"
                        >
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        </button>
                      </div>

                      <div className="mt-8 space-y-4">
                        {contactItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg border border-white/10 px-4 py-3 hover:border-[#48d6de]/45 transition-colors"
                          >
                            <p className="text-sm text-slate-400">{item.name}</p>
                            <p className="text-slate-100 mt-1">{item.value}</p>
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </motion.aside>
              </>
            )}
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Hero;
