import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { SEO } from '../components/ui';
import { SERVICES, TESTIMONIALS, STATS, VALUES, SITE, BASE } from '../utils/constants';
import { useCountUp } from '../hooks/useCountUp';

const services = SERVICES.map((s) => ({
  title: s.title,
  img: `${BASE}images/${s.img}`,
  subtitle: s.tagline,
}));

const testimonials = TESTIMONIALS;

/* ------------------------------------------------------------------ */
/*  REUSABLE: Rotating Circular Text Badge                             */
/* ------------------------------------------------------------------ */

function CircularBadge({ size = 120, className = '' }) {
  const id = useRef(`circBadge-${Math.random().toString(36).slice(2, 8)}`);
  const r = size / 2 - 10;

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <path
            id={id.current}
            d={`M ${size / 2},${size / 2} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r + 6} fill="#1C1A17" />
        <text
          fill="#FDFBF7"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          letterSpacing="3"
          fontWeight="500"
        >
          <textPath href={`#${id.current}`}>
            WE CREATE BEAUTY AND WELL-BEING &bull;&nbsp;
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 1 — HERO                                                   */
/* ------------------------------------------------------------------ */

function HeroSection() {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = useCallback(
    (e) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  /* staggered children variants */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-nude/40 overflow-hidden">
      <div className="section-padding w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* -------- LEFT COLUMN -------- */}
          <motion.div
            className="flex flex-col gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={childVariants}
              className="text-xs tracking-widest uppercase font-sans text-espresso/60"
            >
              Premium Hair Studio in Khar West
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-espresso"
            >
              Premium Hair Salon
              <br />
              <span className="italic">&ldquo;HAIR PRAY LOVE&rdquo;</span>
            </motion.h1>

            <motion.div variants={childVariants}>
              <Link to="/contact" className="pill-btn pill-btn-primary">
                Contact us &rarr;
              </Link>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="max-w-sm text-sm leading-relaxed text-espresso/70 font-sans"
            >
              Experience premium hair care with over 16 years of expertise. Every visit is designed to deliver excellence.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex items-center gap-3"
            >
              <div className="flex text-gold text-lg" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
              <span className="font-serif font-bold text-espresso text-lg">
                5.0
              </span>
              <span className="text-xs tracking-wide text-espresso/50 font-sans">
                321+ Google Reviews
              </span>
            </motion.div>
          </motion.div>

          {/* -------- RIGHT COLUMN — 3D Card -------- */}
          <motion.div
            className="perspective-container flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              <motion.div
                ref={cardRef}
                className="relative w-[320px] sm:w-[380px] md:w-[420px]"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                {/* arch image */}
                <div
                  className="overflow-hidden shadow-2xl"
                  style={{
                    borderTopLeftRadius: '999px',
                    borderTopRightRadius: '999px',
                    aspectRatio: '3/4',
                  }}
                >
                  <img
                    src={`${BASE}images/hero-portrait.png`}
                    alt="HAIR PRAY LOVE Salon stylist at work"
                    className="w-full h-full object-cover"
                    fetchpriority="high"
                  />
                </div>
              </motion.div>

              {/* floating badge */}
              <div className="absolute -right-6 -bottom-6 z-10">
                <CircularBadge size={120} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2 — SERVICES GRID                                          */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="section-padding bg-canvas">
      <div className="max-w-[1440px] mx-auto">
        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso">
            Our Services
          </h2>
          <div className="mt-4 mx-auto w-20 h-[2px] bg-rose" />
        </motion.div>

        {/* grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* arch image frame */}
              <div
                className="overflow-hidden mb-5"
                style={{
                  borderTopLeftRadius: '999px',
                  borderTopRightRadius: '999px',
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <h3 className="font-serif text-lg font-semibold text-espresso">
                {service.title}
              </h3>
              <p className="mt-1 text-sm font-sans text-espresso/60">
                {service.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* note */}
        <motion.p
          className="mt-14 text-center italic font-serif text-espresso/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A visit to the salon is possible only by appointment
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3 — THE NUMBERS                                            */
/* ------------------------------------------------------------------ */

/* StatCounter helper                                                         */

function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(value, 2200, isInView);
  const isFloat = String(value).includes('.');

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-espresso leading-none">
        {isFloat ? count.toFixed(1) : count}{suffix}
      </span>
      <span className="block mt-3 font-sans text-xs md:text-sm tracking-[0.15em] uppercase text-espresso/50">
        {label}
      </span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — VALUES                                                 */
/* ------------------------------------------------------------------ */

const ScissorsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="36" r="5" stroke="#1C1A17" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="5" stroke="#1C1A17" strokeWidth="1.5" />
    <line x1="16" y1="14" x2="42" y2="34" stroke="#1C1A17" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="34" x2="42" y2="14" stroke="#1C1A17" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 40S6 28 6 18C6 12.477 10.477 8 16 8C19.527 8 22.594 10.012 24 12.916C25.406 10.012 28.473 8 32 8C37.523 8 42 12.477 42 18C42 28 24 40 24 40Z" stroke="#1C1A17" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L27.5 18.5H42L30 28L34 44L24 34L14 44L18 28L6 18.5H20.5L24 4Z" stroke="#1C1A17" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const valueIcons = {
  'Expert Craftsmanship': <ScissorsIcon />,
  'Personal Touch': <HeartIcon />,
  'Premium Quality': <SparkleIcon />,
};

const valueItems = VALUES.map((v) => ({ ...v, icon: valueIcons[v.title] }));

function ValuesSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5EDE3 0%, #FDFBF7 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-rose-dark mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso">
            Our Core Values
          </h2>
          <div className="mt-4 mx-auto w-20 h-[2px] bg-rose" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-nude/30 rounded-2xl p-8 md:p-10 text-center group cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-espresso mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-espresso/60 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              <div className="mt-6 mx-auto w-10 h-[2px] bg-rose/40 rounded-full group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 5 — STUDIO / ABOUT PREVIEW                                 */
/* ------------------------------------------------------------------ */

function StudioSection() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section className="section-padding bg-nude/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* -------- LEFT — Image -------- */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              ref={imageRef}
              className="relative overflow-hidden shadow-2xl"
              style={{
                borderTopLeftRadius: '999px',
                borderTopRightRadius: '999px',
                aspectRatio: '3/4',
              }}
            >
              <motion.img
                src={`${BASE}images/salon-interior.png`}
                alt="HAIR PRAY LOVE salon interior"
                className="w-full h-full object-cover"
                style={{ y: parallaxY }}
                loading="lazy"
              />

              {/* gradient overlay for video play */}
              <div className="absolute inset-0 gradient-overlay" />

              {/* video play button */}
              <motion.button
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-canvas/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(253,251,247,0.4)',
                    '0 0 0 20px rgba(253,251,247,0)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeOut',
                  },
                }}
                aria-label="Play salon tour video"
              >
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M22 14L2 26V2L22 14Z"
                    fill="#1C1A17"
                    stroke="#1C1A17"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>

            {/* floating badge */}
            <div className="absolute -left-4 -top-4 z-10">
              <CircularBadge size={110} />
            </div>
          </motion.div>

          {/* -------- RIGHT — Text content -------- */}
          <div className="flex flex-col gap-6">
            <motion.span
              className="text-xs tracking-widest uppercase font-sans text-espresso/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Premium Hair Salon in Khar West
            </motion.span>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="italic">&ldquo;HAIR PRAY LOVE&rdquo;</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm leading-relaxed text-espresso/70 font-sans">
                HAIR PRAY LOVE is a premium boutique hair salon located in Khar West, Mumbai, offering exceptional hair care and personalized styling experiences.
              </p>
              <p className="text-sm leading-relaxed text-espresso/70 font-sans">
                With over 16 years of professional expertise, our talented stylists specialize in precision haircuts, premium hair coloring, and customized styling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="pill-btn pill-btn-primary">
                Contact us &rarr;
              </Link>
            </motion.div>

            <motion.p
              className="text-sm font-sans text-espresso/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Khar West:{' '}
              <a
                href="tel:+918850159641"
                className="animated-underline font-medium text-espresso"
              >
                +91 88501 59641
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 6 — THE NUMBERS                                            */
/* ------------------------------------------------------------------ */

function NumbersSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDE3 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-rose-dark mb-4">
            The Numbers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso">
            Trusted by Thousands
          </h2>
          <div className="mt-4 mx-auto w-20 h-[2px] bg-rose" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 7 — TESTIMONIALS                                           */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-canvas overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center">
        {/* heading */}
        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* carousel */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-4"
            >
              {/* quote */}
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-espresso/90 max-w-2xl mx-auto">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>

              {/* stars */}
              <div className="flex justify-center gap-1 mt-6 text-gold text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>

              {/* reviewer */}
              <p className="mt-4 text-xs tracking-widest uppercase font-sans text-espresso/60">
                &mdash; {testimonials[activeIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dot navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-espresso scale-125'
                  : 'bg-rose hover:bg-rose-dark'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 8 — FINAL CTA BANNER                                      */
/* ------------------------------------------------------------------ */

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E6D5C3 0%, #D2B49A 100%)' }}>
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/50 mb-6"
            >
              Let&rsquo;s Get Started
            </motion.p>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-8"
            >
              Ready to Transform
              <br />
              Your Look?
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className="font-sans text-base md:text-lg text-espresso/70 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Book your appointment today and experience the artistry of HAIR PRAY LOVE.
              Your journey to confidence starts here.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="pill-btn pill-btn-primary">
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="pill-btn pill-btn-outline">
                Call {SITE.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-canvas/10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-canvas/8 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-24 h-24 rounded-full bg-canvas/5 pointer-events-none" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 9 — MARQUEE STRIP                                          */
/* ------------------------------------------------------------------ */

const marqueeText =
  'HAIR PRAY LOVE \u2022 WOMEN\'S HAIRCUTS \u2022 HAIR COLORING \u2022 BALAYAGE \u2022 KERATIN \u2022 HAIR SPA \u2022 ';

function MarqueeStrip() {
  return (
    <div className="bg-espresso text-canvas py-4 overflow-hidden select-none">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="text-sm tracking-widest font-sans inline-block whitespace-nowrap">
            {marqueeText.repeat(4)}
          </span>
          {/* duplicate for seamless loop */}
          <span className="text-sm tracking-widest font-sans inline-block whitespace-nowrap">
            {marqueeText.repeat(4)}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SEO path="/" />
      <HeroSection />
      <ServicesSection />

      <ValuesSection />
      <StudioSection />
      <NumbersSection />

      <TestimonialsSection />



      <FinalCTASection />
      <MarqueeStrip />
    </motion.div>
  );
}
