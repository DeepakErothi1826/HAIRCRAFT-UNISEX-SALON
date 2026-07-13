import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://haircraft.in';

export default function SEO({
  title,
  description = 'Premium unisex salon in Dadar East, Mumbai — where artistry meets care. Balayage, grooming, facials, spa, and bridal packages since 2015.',
  path = '',
  ogImage = '/images/hero-portrait.png',
  ogType = 'website',
}) {
  const fullTitle = title
    ? `${title} | Haircraft Unisex Salon`
    : 'Haircraft Unisex Salon | Premium Hair & Beauty | Dadar East, Mumbai';

  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:site_name" content="Haircraft Unisex Salon" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
    </Helmet>
  );
}
