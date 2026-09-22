import React, { useEffect, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiSass,
  SiPostgresql,
  SiGit,
} from 'react-icons/si';
import {
  ArrowRightIcon,
  XMarkIcon,
  CheckBadgeIcon,
  SparklesIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const HERO_TITLE_TEXT = 'Hello!';

const techStack = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Sass', icon: SiSass },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
];

const projectItems = [
  {
    name: 'Abalay Rent',
    category: 'Full Stack Platform',
    status: 'Completed',
    href: 'https://abalay-rent.me',
    description:
      'Completed property rental platform with intuitive search, seamless booking inquiries, and streamlined host listing management.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    featured: true,
  },
  {
    name: 'Abalay Mobile App',
    category: 'Mobile Application',
    status: 'Completed',
    href: 'https://play.google.com/store/apps/details?id=com.abalay.mobile&hl=en',
    description:
      'Completed Android application published on Google Play for the Abalay platform, delivering responsive on-the-go rental management.',
    tags: ['Android', 'Mobile App', 'Google Play', 'Cross-Platform'],
    featured: true,
  },
  {
    name: 'Time Master',
    category: 'Productivity Utility',
    status: 'Live',
    href: 'https://clocktimerwatch.netlify.app/',
    github: 'https://github.com/TacoTues1/Clock',
    description:
      'A refined productivity suite with custom stopwatch, interval countdowns, and minimalist ergonomics tailored for deep work routines.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Audio API'],
    featured: false,
  },
  {
    name: 'Tic Tac Toe',
    category: 'Interactive Game',
    status: 'Live',
    href: 'https://tictac2s.netlify.app/',
    github: 'https://github.com/TacoTues1/TicTacToe',
    description:
      'Polished turn-based strategy game featuring intelligent PvE mode, score persistence, dynamic board state transitions, and smooth audio feedback.',
    tags: ['JavaScript', 'Game Architecture', 'CSS Grid', 'Animation'],
    featured: false,
  },
  {
    name: 'Photo Booth',
    category: 'Web API & Media',
    status: 'Live',
    href: 'https://photobth.netlify.app/',
    description:
      'Browser-based photobooth with live webcam streaming, multi-frame countdown capture, filters, and high-resolution image exporting.',
    tags: ['React', 'Camera API', 'Canvas', 'Tailwind'],
    featured: false,
  },
];

const contactItems = [
  {
    name: 'Email',
    href: 'mailto:alfonzperez92@gmail.com',
    value: 'alfonzperez92@gmail.com',
    desc: 'Primary contact for opportunities',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TacoTues1',
    value: 'github.com/TacoTues1',
    desc: 'Open source repositories & projects',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/pahingakamunaaaa',
    value: 'facebook.com/pahingakamunaaaa',
    desc: 'Social updates & messages',
  },
];

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const certificateItems = [
  {
    name: 'IT Support Specialist Pathway Exam',
    subtitle: 'Cisco Networking Academy • Career Path',
    href: `${PUBLIC_URL}/cert/IT_Support_Specialist_Career_Path_certificate_alfonzperez92-gmail-com_5baefa7c-794f-4d5a-b88b-618debd5a5df.pdf`,
    value: 'Open certificate PDF',
    date: '14 Jul 2026',
  },
  {
    name: 'Security and Connectivity Support',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Security_and_Connectivity_Support_certificate_alfonzperez92-gmail-com_d99086e4-e5c1-4222-8e0b-cd20c218cdbf.pdf`,
    value: 'Open certificate PDF',
    date: '14 Jul 2026',
  },
  {
    name: 'Hardware and Upgrade Support',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Hardware_and_Upgrade_Support_certificate_alfonzperez92-gmail-com_d1f464bc-2b35-4ed9-91a7-d720955f2472.pdf`,
    value: 'Open certificate PDF',
    date: '14 Jul 2026',
  },
  {
    name: 'Operating Systems Support',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Operating_Systems_Support_certificate_alfonzperez92-gmail-com_586736a1-5a28-4fc4-8d21-2e90dd71b8aa.pdf`,
    value: 'Open certificate PDF',
    date: '13 Jul 2026',
  },
  {
    name: 'IT Customer Support Basics',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/IT_Customer_Support_Basics_certificate_alfonzperez92-gmail-com_98795b3b-1163-4fc4-b6f4-841c41770cfd.pdf`,
    value: 'Open certificate PDF',
    date: '13 Jul 2026',
  },
  {
    name: 'Computer Hardware Basics',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Computer_Hardware_Basics_certificate_alfonzperez92-gmail-com_863f1d0d-ffec-4ee6-9a10-5f7a8081951b.pdf`,
    value: 'Open certificate PDF',
    date: '11 Jul 2026',
  },
  {
    name: 'Networking Basics',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Networking_Basics_certificate_alfonzperez92-gmail-com_0bca25bc-4edc-4b1e-b5d0-cfd04d87c488.pdf`,
    value: 'Open certificate PDF',
    date: '09 Jul 2026',
  },
  {
    name: 'Network Addressing & Basic Troubleshooting',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/Network%20Addressing%20and%20Basic%20Troubleshooting.pdf`,
    value: 'Open certificate PDF',
    date: '06 Apr 2026',
  },
  {
    name: 'Network Addressing & Troubleshooting (Updated)',
    subtitle: 'Cisco Networking Academy',
    href: `${PUBLIC_URL}/cert/NetworkAddressingandBasicTroubleshootingUpdate20260406-31-azfu5c.pdf`,
    value: 'Open certificate PDF',
    date: '06 Apr 2026',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/TacoTues1', icon: FaGithub },
  { label: 'Gmail', href: 'mailto:alfonzperez92@gmail.com', icon: FaEnvelope },
  { label: 'Instagram', href: 'https://www.instagram.com/alfonzpereezz/', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/pahingakamunaaaa', icon: FaFacebookF },
];

const Hero = ({ startTyping = true, onTypeSequenceDone = () => {} }) => {
  const [activePanel, setActivePanel] = useState(null);
  const [hoveredCertificate, setHoveredCertificate] = useState(null);
  const [phase, setPhase] = useState(startTyping ? 'typingName' : 'idle');
  const [charIndex, setCharIndex] = useState(startTyping ? 1 : 0);
  const [typedText, setTypedText] = useState(startTyping ? HERO_TITLE_TEXT.slice(0, 1) : '');

  // Dynamic role typewriter state
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

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
        }, 105);
      } else {
        timeout = setTimeout(() => {
          setPhase('done');
          setTypedText(HERO_TITLE_TEXT);
        }, 900);
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, charIndex]);

  // Continuous role typewriter
  useEffect(() => {
    if (phase !== 'done') return;

    const currentRole = [
      'Full Stack Developer',
      'IT Support Specialist',
      'Network & Systems Diagnostics',
      'BSIT Graduate',
    ][roleIndex];

    let timeout;

    if (!isDeletingRole) {
      if (typedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setIsDeletingRole(true);
        }, 2200);
      }
    } else {
      if (typedRole.length > 0) {
        timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
        }, 35);
      } else {
        setIsDeletingRole(false);
        setRoleIndex((prev) => (prev + 1) % 4);
        timeout = setTimeout(() => {}, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, typedRole, isDeletingRole, roleIndex]);

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
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [activePanel]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alfonzperez92@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    emailjs
      .send(
        'service_47wpvcg',
        'template_38f1kri',
        {
          name: formData.name,
          email_id: formData.email,
          message: formData.message,
        },
        'JSyV51NPodTEnPL9p'
      )
      .then(() => {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I will reply soon.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setFormStatus({
          type: 'error',
          message: 'Direct dispatch failed. You can reach me directly at alfonzperez92@gmail.com.',
        });
      });
  };

  const showDetails = phase === 'done';
  const featuredProjects = projectItems.filter((p) => p.featured);
  const otherProjects = projectItems.filter((p) => !p.featured);

  const actionCards = (
    <div className="json-actions mx-auto flex w-full max-w-[380px] flex-col gap-3">
      {[
        {
          panel: 'projects',
          file: 'works.json',
          title: 'View my works',
          metaKey: 'projects',
          metaValue: '5',
          metaType: 'number',
        },
        {
          panel: 'certificate',
          file: 'certificates.json',
          title: 'Certificates',
          metaKey: 'credentials',
          metaValue: '9',
          metaType: 'number',
        },
        {
          panel: 'contact',
          file: 'contact.json',
          title: 'Contact Me',
          metaKey: 'status',
          metaValue: 'open',
          metaType: 'string',
        },
      ].map((item) => (
        <button
          key={item.panel}
          type="button"
          onClick={() => setActivePanel(item.panel)}
          className="json-action-card group w-full text-left"
        >
          <span className="json-file-header">
            <span className="safari-traffic-lights" aria-hidden="true">
              <span className="safari-dot safari-dot-red" />
              <span className="safari-dot safari-dot-yellow" />
              <span className="safari-dot safari-dot-green" />
            </span>
            <span className="json-address-bar">
              <span className="json-file-icon" aria-hidden="true">{'{}'}</span>
              <span className="json-file-name">{item.file}</span>
            </span>
            <span className="json-toolbar-action" aria-hidden="true">
              <ArrowRightIcon className="h-3.5 w-3.5 text-[var(--text-muted)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--khaki-accent-bright)]" />
            </span>
          </span>

          <span className="json-code" aria-label={`${item.title}, ${item.metaKey}: ${item.metaValue}`}>
            <span className="json-code-line json-brace">{'{'}</span>
            <span className="json-code-line json-code-indent">
              <span className="json-key">"action"</span>
              <span className="json-punctuation">: </span>
              <span className="json-string">"{item.title}"</span>
              <span className="json-punctuation">,</span>
            </span>
            <span className="json-code-line json-code-indent">
              <span className="json-key">"{item.metaKey}"</span>
              <span className="json-punctuation">: </span>
              <span className={item.metaType === 'number' ? 'json-number' : 'json-string'}>
                {item.metaType === 'string' ? `"${item.metaValue}"` : item.metaValue}
              </span>
            </span>
            <span className="json-code-line json-brace">{'}'}</span>
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      <section id="hero" className="relative min-h-[100dvh] flex items-start lg:items-center">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 w-full pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
          <div className="relative min-h-0 lg:min-h-[66vh] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 lg:gap-12 items-start lg:items-center">
            <motion.div
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="w-full max-w-[780px] justify-self-start self-center"
            >

              {/* Main Headline */}
              <motion.h1
                initial={false}
                animate={{ opacity: startTyping ? 1 : 0, y: startTyping ? 0 : 8 }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="text-[42px] sm:text-[60px] md:text-[68px] lg:text-[72px] font-semibold text-[var(--text-head)] leading-[1.02] mb-1 min-h-[1.15em] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {typedText}
                {phase !== 'done' && phase !== 'idle' ? (
                  <span className="typing-cursor">|</span>
                ) : null}
              </motion.h1>

              {/* Dynamic Role Typewriter */}
              <div className="flex items-center gap-2 font-mono text-sm sm:text-lg text-[var(--khaki-accent-bright)] min-h-[1.8em] mb-4">
                {showDetails ? (
                  <>
                    <span className="text-[var(--khaki-accent)] select-none">&gt;</span>
                    <span>{typedRole}</span>
                    <span className="typing-cursor">_</span>
                  </>
                ) : null}
              </div>

              {/* Bio & Details Container */}
              <div className="min-h-[180px] sm:min-h-[220px]">
                <motion.div
                  initial={false}
                  animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 6 }}
                  transition={{
                    duration: showDetails ? 0.6 : 0.2,
                    delay: showDetails ? 0.15 : 0,
                    ease: 'easeOut',
                  }}
                  className={showDetails ? 'pointer-events-auto' : 'pointer-events-none select-none'}
                >
                  <p className="hero-copy text-base sm:text-lg text-[var(--text-body)] leading-relaxed max-w-[720px] mb-4 transition-colors">
                    I'm <strong className="text-[var(--text-head)] font-medium">Alfonz Perez</strong>, a full stack developer based in the UAE with practical experience in <strong className="text-[var(--text-head)] font-medium">Web Development, IT support, systems diagnostics, and network troubleshooting</strong>. I graduated from Negros Oriental State University with a Bachelor of Science in Information Technology (BSIT).
                  </p>

                  {/* IT Support & Systems Experience Strip */}
                  <div className="mb-6">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
                      IT Support &amp; Systems Experience
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        'Hardware & Software Setup',
                        'Network Addressing (IPv4/IPv6)',
                        'Troubleshooting & Diagnostics',
                        'System Maintenance',
                        'Technical Support',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] text-xs text-[var(--text-body)] font-mono"
                        >
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Web Stack Strip */}
                  <div className="mb-7">
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
                      Core Development Stack
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] text-xs text-[var(--text-body)] font-mono hover:border-[var(--border-card-hover)] hover:text-[var(--text-head)] transition-colors"
                        >
                          <tech.icon className="h-3.5 w-3.5 text-[var(--khaki-accent-bright)]" />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links - Clean and without bouncy hover */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {socialLinks.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 6 }}
                        transition={{ delay: showDetails ? 0.08 + index * 0.05 : 0, duration: 0.25 }}
                        className="h-10 w-10 rounded-lg flex items-center justify-center text-[var(--text-body)] hover:text-[var(--text-head)] border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--border-card-hover)] hover:bg-[var(--bg-card-solid)] transition-colors"
                        aria-label={item.label}
                        title={item.label}
                      >
                        <item.icon className="h-4 w-4" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Desktop Action Cards */}
            <AnimatePresence>
              {showDetails ? (
                <motion.aside
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="hidden lg:flex w-full max-w-[390px] items-center justify-center justify-self-center self-center"
                >
                  {actionCards}
                </motion.aside>
              ) : null}
            </AnimatePresence>

            {/* Mobile Action Cards */}
            <AnimatePresence>
              {showDetails ? (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.32 }}
                  className="lg:hidden mt-7 w-full max-w-[400px] mx-auto"
                >
                  {actionCards}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Slide Drawers */}
      <AnimatePresence>
        {activePanel ? (
          <>
            {/* PROJECTS FULL SCREEN DRAWER */}
            {activePanel === 'projects' ? (
              <motion.section
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[85] bg-[#141310]/98 backdrop-blur-2xl text-[#f5f1ea]"
              >
                <div className="h-full overflow-y-auto">
                  <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-8 sm:py-12">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-6 pb-6 border-b border-[#c3b091]/15">
                      <div>
                        <span
                          className="text-xs uppercase tracking-[0.24em] text-[#c3b091] font-mono"
                        >
                          Portfolio & Works
                        </span>
                        <h2
                          className="text-3xl sm:text-5xl font-semibold text-[#f5f1ea] mt-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Featured Creations
                        </h2>
                        <p className="text-[#c5bcaf] mt-2.5 max-w-2xl text-sm sm:text-base leading-relaxed">
                          Selected web applications, cross-platform mobile software, and interactive utilities. Click any project to view live or explore repositories.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActivePanel(null)}
                        className="h-11 w-11 rounded-xl border border-[#c3b091]/30 bg-[#1f1d18] text-[#d5cbbe] hover:text-[#f5f1ea] hover:border-[#c3b091]/70 transition-all flex items-center justify-center flex-shrink-0"
                        aria-label="Close panel"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Featured Projects Highlight */}
                    <div className="mt-8">
                      <div className="rounded-3xl border border-[#c3b091]/30 bg-gradient-to-b from-[#24211a]/80 to-[#1b1914]/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                        <div className="flex items-center gap-2 mb-6">
                          <SparklesIcon className="h-4 w-4 text-[#e5c687]" />
                          <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#e5c687] font-medium">
                            Flagship Deliverables
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {featuredProjects.map((project) => (
                            <div
                              key={project.name}
                              className="group flex flex-col justify-between rounded-2xl border border-[#c3b091]/20 bg-[#161411]/85 p-6 hover:border-[#e5c687]/60 hover:shadow-[0_12px_32px_rgba(195,176,145,0.14)] transition-all duration-300"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-[#c3b091]/30 bg-[#c3b091]/15 text-[#e5d9c3]">
                                    {project.category}
                                  </span>
                                  <span className="text-[11px] font-mono text-[#a3b899] flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#8fa97e] animate-pulse"></span>
                                    {project.status}
                                  </span>
                                </div>

                                <h3
                                  className="text-2xl sm:text-3xl font-semibold text-[#f5f1ea] group-hover:text-[#e5c687] transition-colors"
                                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                  {project.name}
                                </h3>

                                <p className="text-[#c5bcaf] mt-3 text-sm sm:text-base leading-relaxed">
                                  {project.description}
                                </p>
                              </div>

                              <div className="mt-6 pt-5 border-t border-[#c3b091]/15 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#201d17] text-[#9c9180] border border-[#c3b091]/15"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <a
                                  href={project.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#e5c687] hover:text-[#f5f1ea] group/link"
                                >
                                  <span>Open Project</span>
                                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Other Projects Grid */}
                    <div className="mt-12 pb-12">
                      <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#9c9180] mb-5">
                        Other Utilities & Applications
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                          <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * index, duration: 0.35 }}
                            className="group flex flex-col justify-between rounded-2xl border border-[#c3b091]/20 bg-[#191713]/80 p-6 hover:border-[#c3b091]/50 hover:bg-[#201d17] hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[#c3b091]/20 bg-[#c3b091]/10 text-[#d5cbbe]">
                                  {project.category}
                                </span>
                                <span className="text-[10px] font-mono text-[#9c9180]">
                                  {project.status}
                                </span>
                              </div>

                              <h3
                                className="text-xl font-semibold text-[#f5f1ea] group-hover:text-[#e5c687] transition-colors"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                              >
                                {project.name}
                              </h3>

                              <p className="text-[#b5ab9d] mt-2.5 text-sm leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#c3b091]/15">
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#151310] text-[#8e8476]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between gap-3">
                                <a
                                  href={project.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c3b091] hover:text-[#e5c687]"
                                >
                                  <span>Live Demo</span>
                                  <FaExternalLinkAlt className="h-3 w-3" />
                                </a>

                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-[#9c9180] hover:text-[#f5f1ea]"
                                    aria-label="GitHub Repository"
                                  >
                                    <FaGithub className="h-3.5 w-3.5" />
                                    <span>Code</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ) : (
              <>
                {/* Backdrop Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[75]"
                  onClick={() => setActivePanel(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                />

                {/* SIDE DRAWER (CERTIFICATES / CONTACT) */}
                <motion.aside
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed right-0 top-0 h-screen w-full max-w-[430px] bg-[#171512] border-l border-[#c3b091]/20 z-[80] p-6 sm:p-7 overflow-y-auto text-[#f5f1ea]"
                >
                  {/* CERTIFICATE PANEL */}
                  {activePanel === 'certificate' ? (
                    <>
                      <div className="flex items-center justify-between pb-5 border-b border-[#c3b091]/15">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#c3b091]">
                            Credentials
                          </p>
                          <h2
                            className="text-2xl font-semibold text-[#f5f1ea] mt-0.5"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            Certifications
                          </h2>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActivePanel(null)}
                          className="h-10 w-10 rounded-xl border border-[#c3b091]/25 text-[#c5bcaf] hover:text-[#f5f1ea] hover:border-[#c3b091]/60 flex items-center justify-center transition-colors"
                          aria-label="Close panel"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-6 space-y-5">
                        {certificateItems.map((item) => (
                          <motion.div
                            layout
                            transition={{
                              layout: { type: 'spring', stiffness: 400, damping: 32, mass: 0.45 },
                            }}
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
                              className="block rounded-2xl border border-[#c3b091]/20 bg-[#1e1c17]/80 p-4 hover:border-[#c3b091]/60 hover:bg-[#25221c] transition-all"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded border border-[#8fa97e]/30 bg-[#8fa97e]/15 text-[#b9cead]">
                                  <CheckBadgeIcon className="h-3 w-3 text-[#8fa97e]" />
                                  {item.date}
                                </span>
                                <FaExternalLinkAlt className="h-3 w-3 text-[#9c9180]" />
                              </div>

                              <p className="text-base font-medium text-[#f5f1ea] mt-2 leading-snug">
                                {item.name}
                              </p>
                              <p className="text-xs text-[#9c9180] font-mono mt-1">
                                {item.subtitle}
                              </p>

                              <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#c3b091]">
                                <span>{item.value}</span>
                                <ArrowRightIcon className="h-3 w-3" />
                              </span>
                            </a>

                            {/* Interactive PDF Preview container */}
                            <AnimatePresence initial={false}>
                              {hoveredCertificate === item.name ? (
                                <motion.div
                                  key={`${item.name}-preview`}
                                  initial={{ height: 0, opacity: 0, marginTop: 0, scaleY: 0.96 }}
                                  animate={{ height: 'auto', opacity: 1, marginTop: 10, scaleY: 1 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0, scaleY: 0.96 }}
                                  transition={{
                                    height: { type: 'spring', stiffness: 360, damping: 32, mass: 0.4 },
                                    opacity: { duration: 0.16, ease: 'easeOut' },
                                    scaleY: { duration: 0.2, ease: 'easeOut' },
                                  }}
                                  className="overflow-hidden"
                                  style={{ transformOrigin: 'top center' }}
                                >
                                  <div className="rounded-xl border border-[#c3b091]/25 bg-black/40 p-2.5 certificate-preview shadow-lg">
                                    <Document
                                      file={item.href}
                                      loading={
                                        <div className="py-8 text-center text-xs font-mono text-[#c3b091] animate-pulse">
                                          Loading certificate document...
                                        </div>
                                      }
                                      error={
                                        <div className="py-4 text-center text-xs font-mono text-[#c5bcaf]">
                                          Preview unavailable. Click the card above to open PDF.
                                        </div>
                                      }
                                      className="flex justify-center"
                                    >
                                      <Page
                                        pageNumber={1}
                                        height={185}
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
                    /* CONTACT PANEL */
                    <>
                      <div className="flex items-center justify-between pb-5 border-b border-[#c3b091]/15">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#c3b091]">
                            Get in Touch
                          </p>
                          <h2
                            className="text-2xl font-semibold text-[#f5f1ea] mt-0.5"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            Contact Me
                          </h2>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActivePanel(null)}
                          className="h-10 w-10 rounded-xl border border-[#c3b091]/25 text-[#c5bcaf] hover:text-[#f5f1ea] hover:border-[#c3b091]/60 flex items-center justify-center transition-colors"
                          aria-label="Close panel"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Quick Copy Email Card */}
                      <div className="mt-6 rounded-2xl border border-[#c3b091]/25 bg-[#1f1d17] p-4 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] font-mono text-[#9c9180] uppercase tracking-wider">
                            Direct Email
                          </p>
                          <p className="text-sm font-medium text-[#f5f1ea] truncate mt-0.5">
                            alfonzperez92@gmail.com
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c3b091]/35 bg-[#c3b091]/15 text-xs text-[#e5d9c3] hover:border-[#c3b091] hover:bg-[#c3b091]/25 transition-all flex-shrink-0"
                          title="Copy email to clipboard"
                        >
                          {copiedEmail ? (
                            <>
                              <FaCheck className="h-3 w-3 text-[#8fa97e]" />
                              <span className="text-[#8fa97e] font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <FaCopy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Interactive Contact Form */}
                      <form onSubmit={handleFormSubmit} className="mt-6 space-y-3.5">
                        <div>
                          <label className="block text-xs font-mono text-[#c5bcaf] mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full name"
                            className="input-field text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#c5bcaf] mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Your Email Address"
                            className="input-field text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-[#c5bcaf] mb-1.5">
                            Message
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your project or inquiry..."
                            className="input-field text-sm resize-none"
                          />
                        </div>

                        {formStatus.message && (
                          <div
                            className={`p-3 rounded-xl text-xs font-mono border ${
                              formStatus.type === 'success'
                                ? 'border-[#8fa97e]/40 bg-[#8fa97e]/15 text-[#c5deba]'
                                : formStatus.type === 'error'
                                ? 'border-rose-500/30 bg-rose-950/20 text-rose-300'
                                : 'border-[#c3b091]/30 bg-[#c3b091]/15 text-[#e5d9c3]'
                            }`}
                          >
                            {formStatus.message}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={formStatus.type === 'loading'}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#c3b091]/40 bg-[#c3b091]/20 px-4 py-3 text-sm font-semibold text-[#f5f1ea] hover:bg-[#c3b091]/35 hover:border-[#c3b091] transition-all disabled:opacity-50"
                        >
                          <PaperAirplaneIcon className="h-4 w-4" />
                          <span>{formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
                        </button>
                      </form>

                      {/* Direct Links Section */}
                      <div className="mt-8 pt-6 border-t border-[#c3b091]/15">
                        <p className="text-[11px] font-mono text-[#9c9180] uppercase tracking-wider mb-3">
                          Other Channels
                        </p>
                        <div className="space-y-2.5">
                          {contactItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 rounded-xl border border-[#c3b091]/15 bg-[#191713] hover:border-[#c3b091]/45 hover:bg-[#201d17] transition-all"
                            >
                              <div>
                                <p className="text-xs font-medium text-[#f5f1ea]">{item.name}</p>
                                <p className="text-[11px] text-[#9c9180] font-mono mt-0.5">{item.desc}</p>
                              </div>
                              <FaExternalLinkAlt className="h-3 w-3 text-[#c3b091]" />
                            </a>
                          ))}
                        </div>
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
