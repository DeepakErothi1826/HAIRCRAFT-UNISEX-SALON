import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO, FloatingDot } from '../components/ui';
import { BASE, PRICING } from '../utils/constants';

const services = [
  {
    id: 1,
    title: 'Hairdresser Services',
    img: `${BASE}images/service-hair.png`,
    tagline: 'Balayage, Highlights, Expert Cuts',
    desc: 'From precision cuts to transformative colour, our stylists bring your vision to life. Whether you want a subtle balayage or a bold restyle, every service is tailored to your face shape, hair type, and lifestyle.',
    price: '₹1,500+',
    features: ['Precision haircuts & styling', 'Balayage & global colour', 'Highlights & baby lights', 'Keratin & deep conditioning'],
  },
  {
    id: 2,
    title: 'Grooming',
    img: `${BASE}images/service-grooming.png`,
    tagline: 'Eyebrow Shaping, Threading, Shaves',
    desc: 'Clean lines, sharp edges, and a flawless finish. Our grooming services are designed for both men and women who appreciate meticulous attention to detail and a refreshing experience.',
    price: '₹500+',
    features: ['Eyebrow shaping & threading', 'Beard trimming & shaping', 'Traditional & straight-razor shaves', 'Face waxing'],
  },
  {
    id: 3,
    title: 'Facial Treatments',
    img: `${BASE}images/service-facial.png`,
    tagline: 'Premium Facials, Acne Care, Skin Rejuvenation',
    desc: 'Reveal your natural glow with our premium facial treatments. Using world-class products and advanced techniques, we target your unique skin concerns for visible, lasting results.',
    price: '₹1,200+',
    features: ['Deep-cleansing & hydration facials', 'Acne & scar treatments', 'Anti-ageing & brightening', 'Gold & diamond facials'],
  },
  {
    id: 4,
    title: 'Spa & Wellness',
    img: `${BASE}images/service-spa.png`,
    tagline: 'Waxing, Manicure, Pedicure, Bridal Packages',
    desc: 'Unwind and indulge in our spa & wellness services. Our bridal packages are comprehensive, ensuring you look and feel your absolute best on your special day.',
    price: '₹800+',
    features: ['Full-body waxing', 'Manicure & pedicure', 'Head & scalp massage', 'Complete bridal packages'],
  },
];

const pricing = PRICING;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const maskReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <SEO title="Services" description="Explore our premium range of hair services: women's haircuts, hair coloring, balayage, keratin treatment, hair spa, and styling in Khar West, Mumbai." path="/services" />
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #E6D5C3 100%)' }}
      >
        <FloatingDot size={12} color="bg-rose/30" top="15%" left="8%" delay={0} duration={6} />
        <FloatingDot size={8} color="bg-rose/20" top="60%" left="15%" delay={1.5} duration={7} />
        <FloatingDot size={16} color="bg-nude/50" top="25%" right="12%" delay={0.8} duration={5.5} />
        <FloatingDot size={10} color="bg-rose/25" top="70%" right="20%" delay={2} duration={6.5} />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/50 mb-6"
            >
              What We Offer
            </motion.p>

            <motion.h1
              variants={maskReveal}
              className="font-serif font-bold text-6xl md:text-7xl lg:text-8xl text-espresso leading-[0.95] mb-8"
            >
              Our
              <br />
              <span className="italic text-rose-dark">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-espresso/60 leading-relaxed max-w-xl"
            >
              From precision cuts to indulgent spa treatments — every service at HAIR PRAY LOVE is crafted with care and expertise.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
      </section>

      {/* ═══════ SERVICE DETAILS ═══════ */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        <FloatingDot size={14} color="bg-rose/20" top="10%" right="5%" delay={0.5} duration={7} />
        <FloatingDot size={10} color="bg-nude/40" top="50%" left="3%" delay={1} duration={6} />

        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? 'lg:direction-rtl' : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
              >
                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  className={`${isReversed ? 'lg:order-2' : ''}`}
                >
                  <div className="arch-frame overflow-hidden relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 gradient-overlay opacity-10" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={fadeUp}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-rose-dark mb-3 block">
                    {service.tagline}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-espresso mb-6">
                    {service.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-rose mb-6" />
                  <p className="font-sans text-espresso/70 leading-relaxed text-base md:text-lg mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 font-sans text-espresso/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl font-bold text-espresso">
                      {service.price}
                    </span>
                    <Link to="/contact" className="pill-btn pill-btn-primary text-sm">
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════ PRICING TABLE ═══════ */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDE3 100%)' }}>
        <FloatingDot size={10} color="bg-rose/25" top="12%" left="6%" delay={0} duration={6} />
        <FloatingDot size={12} color="bg-rose/15" bottom="15%" right="6%" delay={1.8} duration={6.5} />

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-rose-dark mb-4"
            >
              Pricing
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso"
            >
              Price List
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {pricing.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="flex items-center justify-between bg-canvas/80 rounded-xl px-6 py-5 border border-nude/50 hover:border-rose/30 transition-colors duration-300"
              >
                <div>
                  <span className="font-sans text-sm text-espresso/50 uppercase tracking-wider">{item.tag}</span>
                  <p className="font-serif text-lg font-semibold text-espresso mt-0.5">{item.name}</p>
                </div>
                <span className="font-serif text-xl font-bold text-espresso">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10 font-sans text-sm text-espresso/50"
          >
            Prices are indicative and may vary based on hair length, density, and stylist seniority.
          </motion.p>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="section-padding bg-canvas relative overflow-hidden">
        <FloatingDot size={8} color="bg-rose/30" bottom="20%" left="12%" delay={0.5} duration={5.5} />
        <FloatingDot size={6} color="bg-rose/35" top="55%" left="20%" delay={2.5} duration={5} />

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm tracking-[0.2em] uppercase text-rose-dark mb-4"
            >
              Experience
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso"
            >
              Your Visit, Step by Step
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book', desc: 'Schedule your appointment online or give us a call. We\'ll find the perfect time for you.' },
              { step: '02', title: 'Consult', desc: 'Sit down with your stylist for a personalised consultation. We\'ll discuss your vision and recommend the best approach.' },
              { step: '03', title: 'Experience', desc: 'Relax and enjoy our premium service. From the scalp massage to the final blow-dry, every moment matters.' },
              { step: '04', title: 'Reveal', desc: 'Walk out feeling confident and refreshed. We\'ll share tips to maintain your look at home.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (parseInt(item.step) - 1) * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="font-serif text-5xl md:text-6xl font-bold text-rose/30 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-espresso mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-espresso/60 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E6D5C3 0%, #D2B49A 100%)' }}>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="font-sans text-sm tracking-[0.2em] uppercase text-espresso/40 mb-6"
              >
                Let&rsquo;s Get Started
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-10"
              >
                Ready to book your
                <br />
                appointment?
              </motion.h2>

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
                <a href="tel:+918850159641" className="pill-btn pill-btn-outline">
                  Call +91 88501 59641
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-canvas/10 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-canvas/8 pointer-events-none" />
        </div>
      </section>
    </motion.div>
  );
}
