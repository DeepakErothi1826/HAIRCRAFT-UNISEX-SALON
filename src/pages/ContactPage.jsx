import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/ui';
import { CONTACT_SERVICES, WEEKDAYS, FAQS } from '../utils/constants';

/* ─── animation variants ─── */
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] } },
});

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

/* ─── data ─── */
const services = CONTACT_SERVICES;
const weekDays = WEEKDAYS;
const faqs = FAQS;

/* ─── inline SVG icons ─── */
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-espresso/60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </motion.svg>
);

/* ─── FAQ Accordion Item ─── */
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-rose/30">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-serif text-lg md:text-xl text-espresso pr-4">{question}</span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-espresso/70 font-sans leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════ */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const todayIdx = new Date().getDay();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFAQ = (idx) => {
    setOpenFAQ((prev) => (prev === idx ? null : idx));
  };

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <SEO title="Contact" description="Get in touch with HAIR PRAY LOVE. Book an appointment, call us, or visit our salon in Khar West, Mumbai." path="/contact" />
      {/* ── SECTION 1 : HERO ── */}
      <section className="section-padding flex flex-col items-center justify-center text-center pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.h1
          {...fadeUp(0)}
          className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-espresso leading-none tracking-tight"
        >
          Contact
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 max-w-xl text-espresso/60 font-sans text-lg md:text-xl leading-relaxed"
        >
          We&rsquo;d love to hear from you. Book your appointment or visit us today.
        </motion.p>

        {/* decorative line */}
        <motion.span
          {...fadeUp(0.3)}
          className="mt-8 block h-px w-16 bg-rose"
        />
      </section>

      {/* ── SECTION 2 : SPLIT LAYOUT ── */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — CONTACT FORM */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={staggerChild} className="font-serif text-3xl text-espresso">
              Get in Touch
            </motion.h2>
            <motion.p variants={staggerChild} className="mt-3 text-espresso/60 font-sans leading-relaxed">
              Fill out the form and we&rsquo;ll get back to you within 24 hours.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-10 rounded-2xl bg-nude/40 p-10 text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose/30 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <h3 className="font-serif text-2xl text-espresso">Thank you!</h3>
                <p className="mt-2 text-espresso/60 font-sans">We&rsquo;ll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-2">
                {/* Full Name */}
                <motion.div variants={staggerChild} className="floating-label-group">
                  <input type="text" id="name" name="name" placeholder=" " required />
                  <label htmlFor="name">Full Name</label>
                </motion.div>

                {/* Email */}
                <motion.div variants={staggerChild} className="floating-label-group">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">Email</label>
                </motion.div>

                {/* Phone */}
                <motion.div variants={staggerChild} className="floating-label-group">
                  <input type="tel" id="phone" name="phone" placeholder=" " />
                  <label htmlFor="phone">Phone</label>
                </motion.div>

                {/* Service dropdown */}
                <motion.div variants={staggerChild} className="floating-label-group">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full appearance-none bg-transparent border-b-[1.5px] border-rose pt-5 pb-2 font-sans text-base text-espresso outline-none focus:border-espresso transition-colors cursor-pointer"
                    style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {/* custom chevron */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </motion.div>

                {/* Message */}
                <motion.div variants={staggerChild} className="floating-label-group">
                  <textarea id="message" name="message" rows={4} placeholder=" " />
                  <label htmlFor="message">Message</label>
                </motion.div>

                {/* Submit */}
                <motion.div variants={staggerChild} className="pt-4">
                  <button
                    type="submit"
                    className="pill-btn pill-btn-primary w-full sm:w-auto justify-center"
                  >
                    Send Message
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* RIGHT — INFO & MAP */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={staggerChild} className="font-serif text-3xl text-espresso">
              Visit Our Studio
            </motion.h2>

            <div className="mt-8 space-y-6">
              {/* Location */}
              <motion.div variants={staggerChild} className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-nude/50 text-espresso">
                  <LocationIcon />
                </span>
                <div>
                  <p className="font-sans text-espresso leading-relaxed">
                    Shop No. 2, Sheetal Vaibhav Building,<br />
                    18th Road, Khar West, Mumbai&nbsp;–&nbsp;400052
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={staggerChild} className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-nude/50 text-espresso">
                  <PhoneIcon />
                </span>
                <div>
                  <a href="tel:+918850159641" className="font-sans text-espresso hover:text-rose transition-colors">
                    +91 88501 59641
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={staggerChild} className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-nude/50 text-espresso">
                  <EmailIcon />
                </span>
                <div>
                  <a href="mailto:hello@hairpraylove.com" className="font-sans text-espresso hover:text-rose transition-colors">
                    hello@hairpraylove.com
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div variants={staggerChild} className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-nude/50 text-espresso">
                  <ClockIcon />
                </span>
                <div className="font-sans text-espresso leading-relaxed">
                  <p>Daily: 10:00 AM – 8:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div variants={staggerChild} className="mt-10 rounded-2xl overflow-hidden">
              <iframe
                title="HAIR PRAY LOVE Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.845!3d19.018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzA0LjgiTiA3MsKwNTAnNDIuMCJF!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-64 md:h-80 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Quick-action buttons */}
            <motion.div
              variants={staggerChild}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="tel:+918850159641" className="pill-btn pill-btn-primary">
                <PhoneIcon />
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir//Khar+West,+Mumbai,+Maharashtra+400052"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline"
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/918850159641?text=Hi%20HAIR%20PRAY%20LOVE!%20I%E2%80%99d%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 : WORKING HOURS STRIP ── */}
      <section className="bg-nude/30">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center font-serif text-2xl md:text-3xl text-espresso mb-10"
          >
            Working Hours
          </motion.h3>

          {/* Desktop grid / Mobile horizontal scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-7 gap-3 pb-2 lg:pb-0 scrollbar-hide"
          >
            {weekDays.map((day) => {
              const isToday = todayIdx === day.idx;
              return (
                <div
                  key={day.label}
                  className={`flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-5 py-5 min-w-[110px] transition-colors ${
                    isToday
                      ? 'bg-rose text-canvas'
                      : 'bg-canvas/60 text-espresso'
                  }`}
                >
                  <span className={`font-serif text-lg font-semibold ${isToday ? 'text-canvas' : 'text-espresso'}`}>
                    {day.label}
                  </span>
                  <span className={`mt-1 text-sm font-sans ${isToday ? 'text-canvas/80' : 'text-espresso/60'}`}>
                    {day.hours}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4 : FAQ ACCORDION ── */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl text-espresso text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={staggerChild}>
                <FAQItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === idx}
                  onToggle={() => toggleFAQ(idx)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
