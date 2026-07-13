import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Haircraft Unisex Salon',
  description: 'Premium unisex salon in Dadar East, Mumbai — where artistry meets care. Balayage, grooming, facials, spa, and bridal packages since 2015.',
  url: 'https://haircraft.in',
  telephone: '+919876543210',
  email: 'hello@haircraft.in',
  foundingDate: '2015',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '125',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opposite Gold Cinema, Dadar East',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400014',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://instagram.com/haircraft',
    'https://facebook.com/haircraft',
    'https://youtube.com/@haircraft',
  ],
  image: 'https://haircraft.in/images/hero-portrait.png',
};

export default function JSONLD() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
