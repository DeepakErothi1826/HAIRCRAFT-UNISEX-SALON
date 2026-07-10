import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Reusable fade-up variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

/* ── SVG social icons ── */
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

/* ── Data ── */
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const services = ['Hair Design', 'Grooming', 'Skin & Facials', 'Spa & Wellness'];

function Footer() {
  return (
    <footer className="relative bg-espresso text-canvas overflow-hidden">
      {/* Subtle rose top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-rose/40" />

      {/* ─── Main Grid ─── */}
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* ── Column 1 — Brand ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif text-2xl font-bold text-canvas tracking-tight">
                Haircraft.
              </span>
            </Link>
            <p className="font-sans text-sm text-canvas/70 leading-relaxed max-w-xs">
              A premium unisex salon in Dadar East, Mumbai — where artistry meets care.
              Elevating everyday grooming into an experience worth savouring.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: YouTubeIcon, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-canvas/60 hover:text-rose transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Column 2 — Quick Links ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-canvas/70 hover:text-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3 — Services ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="font-sans text-sm text-canvas/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 4 — Contact ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <h4 className="font-serif text-lg font-semibold mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-sm text-canvas/70">
              <li className="leading-relaxed">
                Opposite Gold Cinema,
                <br />
                Dadar East, Mumbai 400014
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-rose transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@haircraft.in"
                  className="hover:text-rose transition-colors duration-300"
                >
                  hello@haircraft.in
                </a>
              </li>
              <li className="text-canvas/50 text-xs tracking-wide">
                Mon – Sat: 10 AM – 8 PM
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
        className="border-t border-canvas/10 px-6 md:px-12 lg:px-20 py-6"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="font-sans text-xs text-canvas/50">
            &copy; 2024 Haircraft Unisex Salon. All rights reserved.
          </span>
          <span className="font-sans text-xs text-canvas/40">
            Crafted with passion in Mumbai
          </span>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
