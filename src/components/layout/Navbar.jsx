import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ showBrand = true }) => {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-[70] px-5 sm:px-8 py-6"
    >
      <div className="max-w-[1320px] mx-auto">
        <AnimatePresence initial={false}>
          {showBrand ? (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.22 }}
              className="inline-flex items-center gap-3 rounded-xl px-3 py-2"
            >
              <a
                href="#hero"
                className="w-9 h-9 rounded-[4px] border border-slate-300/65 flex items-center justify-center text-xs font-medium tracking-wide text-slate-100"
              >
                A.L
              </a>

              <a href="#hero" className="text-xl text-slate-100 font-medium tracking-tight">
                alfonz.dev
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 