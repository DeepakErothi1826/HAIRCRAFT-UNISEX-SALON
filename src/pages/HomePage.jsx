import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const BASE = import.meta.env.BASE_URL;

const services = [
  {
    title: 'Hairdresser services',
    img: `${BASE}images/service-hair.png`,
    subtitle: 'Balayage, Highlights, Expert Cuts',
  },
  {
    title: 'Grooming',
    img: `${BASE}images/service-grooming.png`,
    subtitle: 'Eyebrow Shaping, Threading, Shaves',
  },
  {
    title: 'Facial treatments',
    img: `${BASE}images/service-facial.png`,
    subtitle: 'Premium Facials, Acne, Skin Care',
  },
  {
    title: 'Spa & Wellness',
    img: `${BASE}images/service-spa.png`,
    subtitle: 'Waxing, Manicure, Pedicure, Bridal',
  },
];

const testimonials = [
  {
    quote:
      "The best salon experience I've ever had. The balayage was absolutely stunning and the staff made me feel like royalty.",
    name: 'PRIYA SHARMA',
  },
  {
    quote:
      'Incredible attention to detail. My haircut was exactly what I envisioned. The scalp massage was heavenly!',
    name: 'AMIT FERNANDES',
  },
  {
    quote:
      'My bridal preparation was perfect. The team at Haircraft understood exactly what I wanted. Highly recommend!',
    name: 'ANANYA DESAI',
  },
];

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
              Premium Hair Studio
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-espresso"
            >
              Beauty studio
              <br />
              <span className="italic">&ldquo;Haircraft.&rdquo;</span>
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
              Comfort, individual approach to customers and a high level of
              service.
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
                4.9
              </span>
              <span className="text-xs tracking-wide text-espresso/50 font-sans">
                125+ Reviews
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
                    alt="Haircraft Salon stylist at work"
                    className="w-full h-full object-cover"
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
            Haircraft Services
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
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
/*  SECTION 3 — STUDIO / ABOUT PREVIEW                                 */
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
                alt="Haircraft salon interior"
                className="w-full h-full object-cover"
                style={{ y: parallaxY }}
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
              Beauty Studio in Dadar East
            </motion.span>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="italic">&ldquo;Haircraft&rdquo;</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm leading-relaxed text-espresso/70 font-sans">
                A great gift for your relatives and friends will be our salon
                gift card, which will allow you to use any services from our
                range of offers.
              </p>
              <p className="text-sm leading-relaxed text-espresso/70 font-sans">
                Everyone is unique, and so should their hairstyle. When creating
                a cut, our hairdressers take into account a person&apos;s
                individuality.
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
              Dadar East:{' '}
              <a
                href="tel:+919876543210"
                className="animated-underline font-medium text-espresso"
              >
                +91 98765 43210
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 4 — TESTIMONIALS                                           */
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
/*  SECTION 5 — MARQUEE STRIP                                          */
/* ------------------------------------------------------------------ */

const marqueeText =
  'HAIR DESIGN \u2022 GROOMING \u2022 FACIALS \u2022 SPA \u2022 WELLNESS \u2022 BRIDAL \u2022 BALAYAGE \u2022 ';

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
      <HeroSection />
      <ServicesSection />
      <StudioSection />
      <TestimonialsSection />
      <MarqueeStrip />
    </motion.div>
  );
}
