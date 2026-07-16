import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui';
import { BASE, GALLERY_FILTERS, GALLERY_ITEMS } from '../utils/constants';

const galleryItems = GALLERY_ITEMS.map((item) => ({
  ...item,
  src: `${BASE}images/${item.img}`,
}));

const filters = GALLERY_FILTERS;

/* ─── Gallery Item Component ─── */
function GalleryItem({ item }) {
  return (
    <motion.div
      layout
      layoutId={`gallery-item-${item.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className={`${item.span} relative group cursor-pointer overflow-hidden rounded-2xl ${
        item.arch ? 'arch-frame' : ''
      }`}
      style={{
        minHeight: item.span.includes('row-span-2') ? '420px' : '200px',
      }}
    >
      {/* Image */}
      <motion.img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover absolute inset-0"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        loading="lazy"
      />

      {/* Gradient overlay – always present at bottom, intensifies on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Always-visible subtle bottom gradient for text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-espresso/40 to-transparent" />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
        <motion.p
          className="font-serif text-lg md:text-xl text-canvas font-semibold drop-shadow-md"
          initial={false}
        >
          {item.title}
        </motion.p>
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-canvas/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {item.category}
        </p>
      </div>

      {/* Hover border accent */}
      <div className="absolute inset-0 rounded-2xl border-2 border-canvas/0 group-hover:border-canvas/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   GALLERY PAGE
   ═══════════════════════════════════════════════ */
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  /* Animation variants */
  const containerStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <SEO title="Gallery" description="Browse our portfolio of transformations — haircuts, balayage, hair coloring, keratin treatments, and styling at HAIR PRAY LOVE salon in Khar West, Mumbai." path="/gallery" />
      {/* ═══════ SECTION 1: GALLERY HERO ═══════ */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        {/* Subtle decorative shapes */}
        <motion.div
          className="absolute top-20 right-16 w-24 h-24 rounded-full bg-nude/30 pointer-events-none"
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-12 w-16 h-16 rounded-full bg-rose/15 pointer-events-none"
          animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Overline */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/50 mb-6"
            >
              Gallery
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold text-6xl md:text-7xl text-espresso leading-[0.95] mb-6"
            >
              Our <span className="italic text-rose-dark">Work</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-espresso/60 leading-relaxed max-w-xl mx-auto mb-12"
            >
              Every style tells a story. Explore our latest transformations.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`relative px-6 py-2.5 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-400 cursor-pointer ${
                      isActive
                        ? 'bg-espresso text-canvas shadow-lg shadow-espresso/20'
                        : 'bg-transparent text-espresso border border-espresso/20 hover:border-espresso/50 hover:bg-espresso/5'
                    }`}
                  >
                    {filter.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="absolute inset-0 bg-espresso rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2: GALLERY GRID ═══════ */}
      <section className="px-4 md:px-8 lg:px-12 pb-20 md:pb-28 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 3: CTA ═══════ */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E6D5C3 0%, #D2B49A 100%)',
        }}
      >
        {/* Decorative background circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-canvas/10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-canvas/8 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerStagger}
          >
            {/* Overline */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/40 mb-6"
            >
              Your Turn
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-10"
            >
              Want to see
              <br />
              yourself here?
            </motion.h2>

            {/* CTA Button */}
            <motion.div variants={fadeUp}>
              <Link to="/contact" className="pill-btn pill-btn-primary">
                Book Your Session
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
