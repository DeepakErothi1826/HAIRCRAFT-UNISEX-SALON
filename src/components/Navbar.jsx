import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE } from '../utils/constants';

const navLinks = NAV_LINKS;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll detection — glass effect kicks in past 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ─── Navbar ─── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-canvas/80 backdrop-blur-lg shadow-[0_1px_0_rgba(210,180,154,0.25)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-espresso tracking-tight">
              Haircraft.
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`animated-underline relative font-sans text-sm tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-rose-dark font-medium'
                        : 'text-espresso hover:text-rose-dark'
                    }`}
                  >
                    {link.name}

                    {/* Active indicator — thin bar that stays visible */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-rose-dark"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Contact Info (desktop) ── */}
          <div className="hidden lg:flex flex-col items-end flex-shrink-0">
            <a
              href="tel:+919876543210"
              className="font-sans text-sm text-espresso hover:text-rose-dark transition-colors duration-300"
            >
              +91 98765 43210
            </a>
            <span className="font-sans text-xs text-rose-dark mt-0.5 tracking-wide">
                  {SITE.address.split(',')[1].trim()}, Mumbai
            </span>
          </div>

          {/* ── Hamburger Button (mobile / tablet) ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="block w-6 h-[1.5px] bg-espresso origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: 12 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-espresso"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="block w-6 h-[1.5px] bg-espresso origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-espresso/30 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              key="mobilePanel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 34 }}
              className="fixed top-0 right-0 z-40 h-full w-[80vw] max-w-sm bg-canvas shadow-2xl lg:hidden flex flex-col"
            >
              {/* Top spacer matching navbar height */}
              <div className="pt-24 px-8" />

              {/* Links */}
              <nav className="flex-1 px-8">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ delay: i * 0.06, duration: 0.35 }}
                      >
                        <Link
                          to={link.path}
                          className={`font-serif text-2xl transition-colors duration-300 ${
                            isActive ? 'text-rose-dark' : 'text-espresso hover:text-rose-dark'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Contact info at bottom */}
              <div className="px-8 pb-10 border-t border-nude pt-6">
                <a
                  href="tel:+919876543210"
                  className="font-sans text-sm text-espresso hover:text-rose-dark transition-colors block"
                >
                  +91 98765 43210
                </a>
                <span className="font-sans text-xs text-rose-dark mt-1 block tracking-wide">
              {SITE.address.split(',')[1].trim()}, Mumbai
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
