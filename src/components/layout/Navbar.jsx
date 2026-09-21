import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ showBrand = true }) => {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-[70] px-5 sm:px-8 py-5 sm:py-6 pointer-events-none"
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        <AnimatePresence initial={false}>
          {showBrand ? (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto inline-flex items-center gap-3 rounded-xl px-2 py-1.5"
            >
              <a
                href="#hero"
                className="w-9 h-9 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-md flex items-center justify-center text-xs font-semibold tracking-wider text-[var(--khaki-accent-bright)] hover:border-[var(--border-card-hover)] hover:text-[var(--text-head)] transition-colors shadow-sm"
              >
                A.L
              </a>

              <a
                href="#hero"
                className="text-lg sm:text-xl font-medium tracking-tight text-[var(--text-head)] hover:text-[var(--khaki-accent-bright)] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                alfonz<span className="text-[var(--khaki-accent)]">.dev</span>
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 