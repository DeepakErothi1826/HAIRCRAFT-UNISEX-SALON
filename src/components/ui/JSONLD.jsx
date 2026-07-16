import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'HAIR PRAY LOVE',
  description: 'HAIR PRAY LOVE is a premium boutique hair salon in Khar West, Mumbai, offering expert haircuts, hair coloring, hair treatments, keratin, smoothening, hair spa, and personalized styling with over 16 years of professional experience.',
  url: 'https://hairpraylove.com',
  telephone: '+918850159641',
  email: 'hello@hairpraylove.com',
  foundingDate: '2009',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '321',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 2, Sheetal Vaibhav Building, 18th Road, Khar West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400052',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://instagram.com/hairpraylove',
    'https://facebook.com/hairpraylove',
    'https://youtube.com/@hairpraylove',
  ],
  image: 'https://hairpraylove.com/images/hero-portrait.png',
};

export default function JSONLD() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
