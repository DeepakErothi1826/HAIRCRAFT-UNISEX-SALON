export const BASE = import.meta.env.BASE_URL;

export const SITE = {
  name: 'Haircraft Unisex Salon',
  tagline: 'Premium Hair & Beauty Studio',
  description:
    'Premium unisex salon in Dadar East, Mumbai — where artistry meets care. Balayage, grooming, facials, spa, and bridal packages since 2015.',
  url: 'https://haircraft.in',
  phone: '+91 98765 43210',
  email: 'hello@haircraft.in',
  address: 'Opposite Gold Cinema, Dadar East, Mumbai 400014',
  since: 2015,
  rating: 4.9,
  reviews: 125,
  hours: {
    weekday: '10:00 AM – 8:00 PM',
    weekend: 'By Appointment Only',
  },
  social: {
    instagram: 'https://instagram.com/haircraft',
    facebook: 'https://facebook.com/haircraft',
    youtube: 'https://youtube.com/@haircraft',
  },
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Hairdresser Services',
    slug: 'hair',
    img: 'service-hair.png',
    tagline: 'Balayage, Highlights, Expert Cuts',
    price: '₹1,500+',
    description:
      'From precision cuts to transformative colour, our stylists bring your vision to life.',
    features: [
      'Precision haircuts & styling',
      'Balayage & global colour',
      'Highlights & baby lights',
      'Keratin & deep conditioning',
    ],
  },
  {
    id: 2,
    title: 'Grooming',
    slug: 'grooming',
    img: 'service-grooming.png',
    tagline: 'Eyebrow Shaping, Threading, Shaves',
    price: '₹500+',
    description:
      'Clean lines, sharp edges, and a flawless finish for both men and women.',
    features: [
      'Eyebrow shaping & threading',
      'Beard trimming & shaping',
      'Traditional & straight-razor shaves',
      'Face waxing',
    ],
  },
  {
    id: 3,
    title: 'Facial Treatments',
    slug: 'skin',
    img: 'service-facial.png',
    tagline: 'Premium Facials, Acne Care, Skin Rejuvenation',
    price: '₹1,200+',
    description:
      'Reveal your natural glow with our premium facial treatments using world-class products.',
    features: [
      'Deep-cleansing & hydration facials',
      'Acne & scar treatments',
      'Anti-ageing & brightening',
      'Gold & diamond facials',
    ],
  },
  {
    id: 4,
    title: 'Spa & Wellness',
    slug: 'spa',
    img: 'service-spa.png',
    tagline: 'Waxing, Manicure, Pedicure, Bridal Packages',
    price: '₹800+',
    description:
      'Unwind and indulge in our spa & wellness services. Comprehensive bridal packages available.',
    features: [
      'Full-body waxing',
      'Manicure & pedicure',
      'Head & scalp massage',
      'Complete bridal packages',
    ],
  },
];

export const PRICING = [
  { name: 'Haircut & Blow-Dry', price: '₹1,200', tag: 'Starts at' },
  { name: 'Global Hair Colour', price: '₹4,500', tag: 'Starts at' },
  { name: 'Balayage / Highlights', price: '₹5,500', tag: 'Starts at' },
  { name: 'Beard Trim & Shape', price: '₹400', tag: 'Flat' },
  { name: 'Classic Facial', price: '₹1,200', tag: 'Starts at' },
  { name: 'Gold Facial', price: '₹2,500', tag: 'Flat' },
  { name: 'Manicure', price: '₹800', tag: 'Starts at' },
  { name: 'Pedicure', price: '₹1,000', tag: 'Starts at' },
  { name: 'Full-Body Waxing', price: '₹1,800', tag: 'Starts at' },
  { name: 'Bridal Package', price: '₹15,000', tag: 'Starts at' },
];

export const TESTIMONIALS = [
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

export const STATS = [
  { value: '8', suffix: '+', label: 'Years Experience' },
  { value: '15000', suffix: '+', label: 'Happy Clients' },
  { value: '4.9', suffix: '', label: 'Google Rating' },
  { value: '125', suffix: '+', label: '5-Star Reviews' },
];

export const VALUES = [
  {
    title: 'Expert Craftsmanship',
    icon: 'scissors',
    description:
      'Every stylist at Haircraft undergoes rigorous training. We stay ahead of global trends to bring you the finest techniques.',
  },
  {
    title: 'Personal Touch',
    icon: 'heart',
    description:
      'We listen, we understand, we create. Your vision is our mission. Every visit is a bespoke experience.',
  },
  {
    title: 'Premium Quality',
    icon: 'sparkle',
    description:
      'We use only the finest products from world-renowned brands. Your hair deserves nothing but the best.',
  },
];

export const PROCESS = [
  { step: '01', title: 'Book', desc: 'Schedule your appointment online or give us a call.' },
  { step: '02', title: 'Consult', desc: 'Sit down with your stylist for a personalised consultation.' },
  { step: '03', title: 'Experience', desc: 'Relax and enjoy our premium service from start to finish.' },
  { step: '04', title: 'Reveal', desc: 'Walk out feeling confident and refreshed.' },
];

export const GALLERY_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'hair', label: 'Hair' },
  { key: 'grooming', label: 'Grooming' },
  { key: 'skin', label: 'Skin' },
  { key: 'bridal', label: 'Bridal' },
];

export const GALLERY_ITEMS = [
  { id: 1, img: 'hero-portrait.png', category: 'hair', title: 'Balayage Perfection', span: 'col-span-1 row-span-2', arch: true },
  { id: 2, img: 'service-hair.png', category: 'hair', title: 'Golden Highlights', span: 'col-span-1 row-span-1', arch: false },
  { id: 3, img: 'service-grooming.png', category: 'grooming', title: 'Brow Sculpting', span: 'col-span-1 row-span-1', arch: false },
  { id: 4, img: 'service-facial.png', category: 'skin', title: 'Glow Facial', span: 'col-span-1 row-span-2', arch: true },
  { id: 5, img: 'service-spa.png', category: 'bridal', title: 'Bridal Prep', span: 'col-span-1 row-span-1', arch: false },
  { id: 6, img: 'salon-interior.png', category: 'hair', title: 'Studio Vibes', span: 'col-span-2 row-span-1', arch: false },
  { id: 7, img: 'hero-portrait.png', category: 'bridal', title: 'Bridal Glamour', span: 'col-span-1 row-span-1', arch: false },
  { id: 8, img: 'service-hair.png', category: 'hair', title: 'Layered Cut', span: 'col-span-1 row-span-1', arch: false },
  { id: 9, img: 'service-facial.png', category: 'skin', title: 'Acne Treatment', span: 'col-span-1 row-span-1', arch: false },
  { id: 10, img: 'service-grooming.png', category: 'grooming', title: 'Clean Shave', span: 'col-span-1 row-span-2', arch: true },
  { id: 11, img: 'service-spa.png', category: 'bridal', title: 'Nail Art', span: 'col-span-1 row-span-1', arch: false },
  { id: 12, img: 'salon-interior.png', category: 'hair', title: 'Color Magic', span: 'col-span-1 row-span-1', arch: false },
];

export const FAQS = [
  { q: 'Do I need an appointment?', a: 'Yes, we recommend booking in advance to ensure availability. Walk-ins are welcome but subject to availability.' },
  { q: 'What are your most popular services?', a: 'Our balayage and global hair colour services are extremely popular, along with our premium facial treatments and bridal preparation packages.' },
  { q: 'Do you offer bridal packages?', a: 'Absolutely! We offer comprehensive bridal preparation packages including hair styling, makeup, skin treatments, and nail care.' },
  { q: 'What products do you use?', a: 'We exclusively use premium, internationally acclaimed brands to ensure the best results for your hair and skin.' },
  { q: 'Is parking available?', a: 'Yes, there is convenient parking available near our salon in Dadar East, opposite Gold Cinema.' },
];

export const WEEKDAYS = [
  { label: 'Mon', hours: '10 AM – 8 PM', idx: 1 },
  { label: 'Tue', hours: '10 AM – 8 PM', idx: 2 },
  { label: 'Wed', hours: '10 AM – 8 PM', idx: 3 },
  { label: 'Thu', hours: '10 AM – 8 PM', idx: 4 },
  { label: 'Fri', hours: '10 AM – 8 PM', idx: 5 },
  { label: 'Sat', hours: '10 AM – 8 PM', idx: 6 },
  { label: 'Sun', hours: 'By Appt', idx: 0 },
];

export const CONTACT_SERVICES = [
  'Hair Design',
  'Grooming',
  'Skin & Facials',
  'Spa & Wellness',
  'Bridal Prep',
  'Other',
];

export const MARQUEE_TEXT =
  'HAIR DESIGN \u2022 GROOMING \u2022 FACIALS \u2022 SPA \u2022 WELLNESS \u2022 BRIDAL \u2022 BALAYAGE \u2022 ';
