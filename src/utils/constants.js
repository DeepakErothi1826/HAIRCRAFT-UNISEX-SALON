export const BASE = import.meta.env.BASE_URL;

export const SITE = {
  name: 'HAIR PRAY LOVE',
  tagline: 'Premium Hair Salon',
  description:
    'HAIR PRAY LOVE is a premium boutique hair salon in Khar West, Mumbai, offering expert haircuts, hair coloring, hair treatments, keratin, smoothening, hair spa, and personalized styling with over 16 years of professional experience.',
  url: 'https://hairpraylove.com',
  phone: '+91 88501 59641',
  email: 'hello@hairpraylove.com',
  address: 'Shop No. 2, Sheetal Vaibhav Building, 18th Road, Khar West, Mumbai, Maharashtra 400052',
  since: 2009,
  rating: 5.0,
  reviews: 321,
  hours: {
    weekday: '10:00 AM – 8:00 PM',
    weekend: '10:00 AM – 8:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/hairpraylove',
    facebook: 'https://facebook.com/hairpraylove',
    youtube: 'https://youtube.com/@hairpraylove',
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
    title: 'Women\'s Haircuts',
    slug: 'haircut',
    img: 'service-hair.png',
    tagline: 'Precision Cuts & Styling',
    price: '₹1,500+',
    description:
      'From precision cuts to transformative styles, our expert stylists bring your vision to life with meticulous attention to detail.',
    features: [
      'Precision haircuts & styling',
      'Layered & textured cuts',
      'Bang & fringe trimming',
      'Seasonal hair consultations',
    ],
  },
  {
    id: 2,
    title: 'Hair Coloring',
    slug: 'coloring',
    img: 'service-grooming.png',
    tagline: 'Global Color, Balayage & Highlights',
    price: '₹3,500+',
    description:
      'Transform your look with our premium hair coloring services. From natural global color to stunning balayage, we customize every look to complement your style.',
    features: [
      'Global hair color',
      'Balayage & ombre',
      'Hair highlights & baby lights',
      'Color correction',
    ],
  },
  {
    id: 3,
    title: 'Hair Treatments',
    slug: 'treatments',
    img: 'service-facial.png',
    tagline: 'Keratin, Smoothening & Botox',
    price: '₹4,000+',
    description:
      'Restore, repair, and rejuvenate your hair with our premium treatment services. Using world-class products for visible, lasting results.',
    features: [
      'Keratin treatment',
      'Hair smoothening',
      'Hair botox',
      'Deep conditioning',
    ],
  },
  {
    id: 4,
    title: 'Hair Spa & Styling',
    slug: 'spa',
    img: 'service-spa.png',
    tagline: 'Scalp Treatments, Blow Dry & Styling',
    price: '₹800+',
    description:
      'Indulge in our luxurious hair spa and styling services. Comprehensive care from scalp treatments to perfect blow-dry styles.',
    features: [
      'Hair spa & scalp treatments',
      'Blow dry & ironing',
      'Hair styling for occasions',
      'Deep conditioning treatments',
    ],
  },
];

export const PRICING = [
  { name: 'Women\'s Haircut & Blow-Dry', price: '₹1,500', tag: 'Starts at' },
  { name: 'Global Hair Colour', price: '₹4,500', tag: 'Starts at' },
  { name: 'Balayage / Highlights', price: '₹6,000', tag: 'Starts at' },
  { name: 'Hair Botox', price: '₹5,000', tag: 'Starts at' },
  { name: 'Keratin Treatment', price: '₹6,500', tag: 'Starts at' },
  { name: 'Hair Smoothening', price: '₹5,500', tag: 'Starts at' },
  { name: 'Hair Spa', price: '₹1,200', tag: 'Starts at' },
  { name: 'Blow Dry', price: '₹500', tag: 'Starts at' },
  { name: 'Deep Conditioning', price: '₹800', tag: 'Starts at' },
  { name: 'Hair Consultation', price: '₹300', tag: 'Complimentary' },
];

export const TESTIMONIALS = [
  {
    quote:
      "Got a haircut here and absolutely loved the service!",
    name: 'Fatema Singaporewala',
  },
  {
    quote:
      "If you need a haircut or hair color, it's the go-to place!",
    name: 'Anushree Gupta Shah',
  },
  {
    quote:
      "The attention to detail and quality of products were top-notch.",
    name: 'Huda Shaikh',
  },
];

export const STATS = [
  { value: '16', suffix: '+', label: 'Years Experience' },
  { value: '321', suffix: '+', label: 'Happy Clients' },
  { value: '5.0', suffix: '', label: 'Google Rating' },
  { value: '321', suffix: '+', label: '5-Star Reviews' },
];

export const VALUES = [
  {
    title: 'Expert Craftsmanship',
    icon: 'scissors',
    description:
      'With over 16 years of experience, our skilled stylists stay ahead of global trends to bring you the finest hair care techniques.',
  },
  {
    title: 'Personal Touch',
    icon: 'heart',
    description:
      'We listen, we understand, we create. Your vision is our mission. Every visit is a bespoke experience tailored to you.',
  },
  {
    title: 'Premium Quality',
    icon: 'sparkle',
    description:
      'We use only the finest premium hair care products. Your hair deserves nothing but the best.',
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
  { key: 'coloring', label: 'Coloring' },
  { key: 'treatments', label: 'Treatments' },
  { key: 'styling', label: 'Styling' },
];

export const GALLERY_ITEMS = [
  { id: 1, img: 'hero-portrait.png', category: 'hair', title: 'Precision Cut', span: 'col-span-1 row-span-2', arch: true },
  { id: 2, img: 'service-hair.png', category: 'hair', title: 'Classic Style', span: 'col-span-1 row-span-1', arch: false },
  { id: 3, img: 'service-grooming.png', category: 'coloring', title: 'Balayage Beauty', span: 'col-span-1 row-span-1', arch: false },
  { id: 4, img: 'service-facial.png', category: 'treatments', title: 'Hair Treatment', span: 'col-span-1 row-span-2', arch: true },
  { id: 5, img: 'service-spa.png', category: 'styling', title: 'Blow Dry Style', span: 'col-span-1 row-span-1', arch: false },
  { id: 6, img: 'salon-interior.png', category: 'hair', title: 'Salon Vibes', span: 'col-span-2 row-span-1', arch: false },
  { id: 7, img: 'hero-portrait.png', category: 'coloring', title: 'Color Magic', span: 'col-span-1 row-span-1', arch: false },
  { id: 8, img: 'service-hair.png', category: 'hair', title: 'Layered Cut', span: 'col-span-1 row-span-1', arch: false },
  { id: 9, img: 'service-facial.png', category: 'treatments', title: 'Keratin Treatment', span: 'col-span-1 row-span-1', arch: false },
  { id: 10, img: 'service-grooming.png', category: 'coloring', title: 'Global Color', span: 'col-span-1 row-span-2', arch: true },
  { id: 11, img: 'service-spa.png', category: 'styling', title: 'Special Occasion', span: 'col-span-1 row-span-1', arch: false },
  { id: 12, img: 'salon-interior.png', category: 'hair', title: 'Expert Styling', span: 'col-span-1 row-span-1', arch: false },
];

export const FAQS = [
  { q: 'Do I need an appointment?', a: 'Yes, we recommend booking in advance to ensure availability. Walk-ins are welcome but subject to availability.' },
  { q: 'What are your most popular services?', a: 'Our balayage and global hair colour services are extremely popular, along with our keratin treatments and precision haircuts.' },
  { q: 'What products do you use?', a: 'We exclusively use premium, internationally acclaimed hair care brands to ensure the best results for your hair.' },
  { q: 'Is parking available?', a: 'Yes, there is convenient parking available near our salon in Khar West, Mumbai.' },
  { q: 'What are your business hours?', a: 'We are open daily from 10:00 AM to 8:00 PM, seven days a week.' },
];

export const WEEKDAYS = [
  { label: 'Mon', hours: '10 AM – 8 PM', idx: 1 },
  { label: 'Tue', hours: '10 AM – 8 PM', idx: 2 },
  { label: 'Wed', hours: '10 AM – 8 PM', idx: 3 },
  { label: 'Thu', hours: '10 AM – 8 PM', idx: 4 },
  { label: 'Fri', hours: '10 AM – 8 PM', idx: 5 },
  { label: 'Sat', hours: '10 AM – 8 PM', idx: 6 },
  { label: 'Sun', hours: '10 AM – 8 PM', idx: 0 },
];

export const CONTACT_SERVICES = [
  'Women\'s Haircuts',
  'Hair Coloring',
  'Hair Treatments',
  'Hair Spa',
  'Hair Styling',
  'Other',
];

export const MARQUEE_TEXT =
  'HAIR PRAY LOVE \u2022 WOMEN\'S HAIRCUTS \u2022 HAIR COLORING \u2022 BALAYAGE \u2022 KERATIN \u2022 HAIR SPA \u2022 ';