import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Reusable animated counter hook ─── */
function useCountUp(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime = null;
    const isFloat = String(target).includes('.');
    const numericTarget = parseFloat(target);

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * numericTarget;
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, startCounting]);

  return count;
}

/* ─── Stat Counter Component ─── */
function StatCounter({ value, suffix = '', label, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="block font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-espresso leading-none">
        {count}{suffix}
      </span>
      <span className="block mt-3 font-sans text-sm md:text-base tracking-[0.15em] uppercase text-espresso/50">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── SVG Icons ─── */
const ScissorsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="36" r="5" stroke="#1C1A17" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="#1C1A17" strokeWidth="1.5" fill="none" />
    <line x1="16" y1="14" x2="42" y2="34" stroke="#1C1A17" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="34" x2="42" y2="14" stroke="#1C1A17" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 40S6 28 6 18C6 12.477 10.477 8 16 8C19.527 8 22.594 10.012 24 12.916C25.406 10.012 28.473 8 32 8C37.523 8 42 12.477 42 18C42 28 24 40 24 40Z"
      stroke="#1C1A17"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4L27.5 18.5H42L30 28L34 44L24 34L14 44L18 28L6 18.5H20.5L24 4Z"
      stroke="#1C1A17"
      strokeWidth="1.5"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Values Data ─── */
const values = [
  {
    icon: <ScissorsIcon />,
    title: 'Expert Craftsmanship',
    description:
      'Every stylist at Haircraft undergoes rigorous training. We stay ahead of global trends to bring you the finest techniques.',
  },
  {
    icon: <HeartIcon />,
    title: 'Personal Touch',
    description:
      'We listen, we understand, we create. Your vision is our mission. Every visit is a bespoke experience.',
  },
  {
    icon: <SparkleIcon />,
    title: 'Premium Quality',
    description:
      'We use only the finest products from world-renowned brands. Your hair deserves nothing but the best.',
  },
];

/* ─── Stats Data ─── */
const stats = [
  { value: '8', suffix: '+', label: 'Years Experience' },
  { value: '15000', suffix: '+', label: 'Happy Clients' },
  { value: '4.9', suffix: '', label: 'Google Rating' },
  { value: '125', suffix: '+', label: '5-Star Reviews' },
];

/* ─── Floating Decorative Dot ─── */
function FloatingDot({ size = 8, color = 'bg-rose', top, left, right, bottom, delay = 0, duration = 5 }) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} pointer-events-none`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        y: [0, -18, -6, -22, 0],
        x: [0, 8, -4, 10, 0],
        opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

/* ─── Rotating Text Badge ─── */
function RotatingBadge() {
  const text = ' HAIRCRAFT • PREMIUM SALON • DADAR EAST • ';
  const characters = text.split('');

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="fill-espresso/40" style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif', letterSpacing: '3px' }}>
            <textPath href="#circlePath">
              {characters.map((char, i) => (
                <tspan key={i}>{char}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-rose" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════ */
export default function AboutPage() {
  const storyImageRef = useRef(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyImageRef,
    offset: ['start end', 'end start'],
  });
  const storyImageY = useTransform(storyScroll, [0, 1], [60, -60]);

  /* ─── Animation variants ─── */
  const containerStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const maskReveal = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* ═══════ SECTION 1: HERO BANNER ═══════ */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #FDFBF7 0%, #E6D5C3 100%)',
        }}
      >
        {/* Floating decorative elements */}
        <FloatingDot size={12} color="bg-rose/30" top="15%" left="8%" delay={0} duration={6} />
        <FloatingDot size={8} color="bg-rose/20" top="60%" left="15%" delay={1.5} duration={7} />
        <FloatingDot size={16} color="bg-nude/50" top="25%" right="12%" delay={0.8} duration={5.5} />
        <FloatingDot size={10} color="bg-rose/25" top="70%" right="20%" delay={2} duration={6.5} />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Overline */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/50 mb-6"
            >
              Our Story
            </motion.p>

            {/* Main heading with mask reveal */}
            <motion.h1
              variants={maskReveal}
              className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-espresso leading-[0.95] mb-8"
            >
              About
              <br />
              <span className="italic text-rose-dark">Haircraft</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-espresso/60 leading-relaxed max-w-xl"
            >
              Where art meets hair. Since 2015, crafting confidence in Dadar East.
            </motion.p>
          </motion.div>

          {/* Decorative arch image overlapping right side */}
          <motion.div
            className="hidden lg:block absolute right-12 xl:right-20 top-1/2 -translate-y-1/2 w-72 xl:w-80 h-[420px] xl:h-[460px] arch-frame"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src="/images/hero-portrait.png"
              alt="Haircraft Salon"
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 gradient-overlay opacity-20" />
          </motion.div>
        </div>

        {/* Bottom fade line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
      </section>

      {/* ═══════ SECTION 2: OUR STORY ═══════ */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        {/* Floating decorative shapes */}
        <FloatingDot size={14} color="bg-rose/20" top="10%" right="5%" delay={0.5} duration={7} />
        <FloatingDot size={10} color="bg-nude/40" top="50%" left="3%" delay={1} duration={6} />
        <FloatingDot size={6} color="bg-rose/30" bottom="20%" right="8%" delay={2} duration={5} />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT: Parallax Image in Arch Frame */}
            <motion.div
              ref={storyImageRef}
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                {/* Background decorative shape */}
                <div className="absolute -inset-4 bg-nude/30 rounded-[2rem] rounded-t-[999px] -z-10" />

                {/* Arch-framed image with parallax */}
                <motion.div
                  className="arch-frame w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-b-2xl"
                  style={{ y: storyImageY }}
                >
                  <img
                    src="/images/salon-interior.png"
                    alt="Inside Haircraft Salon"
                    className="w-full h-full object-cover scale-110"
                  />
                </motion.div>

                {/* Rotating badge positioned bottom-right */}
                <div className="absolute -bottom-10 -right-6 md:-right-10 z-10">
                  <RotatingBadge />
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Story Text */}
            <div className="lg:pl-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={containerStagger}
              >
                {/* Section label */}
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-sm tracking-[0.2em] uppercase text-rose-dark mb-4"
                >
                  Est. 2015
                </motion.p>

                {/* Heading */}
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-8 leading-tight"
                >
                  Our Philosophy
                </motion.h2>

                {/* Decorative line */}
                <motion.div
                  variants={fadeUp}
                  className="w-16 h-[2px] bg-rose mb-8"
                />

                {/* Paragraphs */}
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-espresso/70 leading-relaxed text-base md:text-lg mb-6"
                >
                  At Haircraft, we believe that beauty is not just about appearance—it is about how
                  you feel. Founded opposite Gold Cinema in the heart of Dadar East, our salon has
                  become a sanctuary where modern techniques meet timeless elegance.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="font-sans text-espresso/70 leading-relaxed text-base md:text-lg mb-10"
                >
                  Our team of expert stylists brings together years of training and a passion for
                  perfection. Every cut, every colour, every treatment is tailored to celebrate your
                  unique individuality.
                </motion.p>

                {/* Small CTA */}
                <motion.div variants={fadeUp}>
                  <Link
                    to="/contact"
                    className="pill-btn pill-btn-outline text-sm"
                  >
                    Get in Touch
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: OUR VALUES ═══════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDE3 100%)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerStagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-rose-dark mb-4"
            >
              Our Core
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso"
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-nude/30 rounded-2xl p-8 md:p-10 text-center relative group cursor-default"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-espresso mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-espresso/60 leading-relaxed text-sm md:text-base">
                  {value.description}
                </p>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-rose/50 rounded-full group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: TEAM / STATS ═══════ */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        {/* Floating decorative dots */}
        <FloatingDot size={10} color="bg-rose/25" top="12%" left="6%" delay={0} duration={6} />
        <FloatingDot size={14} color="bg-rose/20" top="30%" right="10%" delay={1} duration={7} />
        <FloatingDot size={8} color="bg-rose/30" bottom="20%" left="12%" delay={0.5} duration={5.5} />
        <FloatingDot size={12} color="bg-rose/15" bottom="15%" right="6%" delay={1.8} duration={6.5} />
        <FloatingDot size={6} color="bg-rose/35" top="55%" left="20%" delay={2.5} duration={5} />
        <FloatingDot size={16} color="bg-nude/30" top="20%" right="25%" delay={0.3} duration={8} />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerStagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-rose-dark mb-4"
            >
              The Numbers
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso"
            >
              Trusted by Thousands
            </motion.h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.12}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: CTA BANNER ═══════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E6D5C3 0%, #D2B49A 100%)' }}>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                Let&rsquo;s Begin
              </motion.p>

              {/* Main CTA Text */}
              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-10"
              >
                Ready to transform
                <br />
                your look?
              </motion.h2>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/contact" className="pill-btn pill-btn-primary">
                  Book Appointment
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/gallery" className="pill-btn pill-btn-outline">
                  View Gallery
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Background decorative circles */}
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-canvas/10 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-canvas/8 pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-canvas/5 pointer-events-none" />
        </div>
      </section>
    </motion.div>
  );
}
