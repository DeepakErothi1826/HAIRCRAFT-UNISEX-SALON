import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://hairpraylove.com';

export default function SEO({
  title,
  description = 'HAIR PRAY LOVE is a premium boutique hair salon in Khar West, Mumbai, offering expert haircuts, hair coloring, hair treatments, keratin, smoothening, hair spa, and personalized styling with over 16 years of professional experience.',
  path = '',
  ogImage = '/images/hero-portrait.png',
  ogType = 'website',
}) {
  const fullTitle = title
    ? `${title} | HAIR PRAY LOVE`
    : 'HAIR PRAY LOVE | Premium Hair Salon in Khar West, Mumbai';

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
      <meta property="og:site_name" content="HAIR PRAY LOVE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
    </Helmet>
  );
}
