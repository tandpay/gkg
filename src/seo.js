// Single source for page metadata and structured data. Used by the build-time
// prerender (scripts/prerender.mjs) and by the client on route changes.

export const SITE_URL = 'https://goldenkitchengarden.com';
export const SITE_NAME = 'Golden Kitchen Garden Rwanda';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const products = [
  'Kitchen Garden Design and Installation',
  'Agroforestry Nursery',
  'Landscaping',
  'French Beans Cultivation',
  'Strawberries Cultivation',
  'Vegetables and Spices Nursery Seedbeds',
  'Upcycling',
  'Maize Production',
  'Permaculture Design',
  'Agriculture Consultation',
  'Agriculture Capacity Building',
];

const organization = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: 'Golden Kitchen Garden Rwanda Ltd',
  alternateName: ['GKG', 'GKG Rwanda', 'Golden Kitchen Garden'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 1024,
    height: 1024,
  },
  image: OG_IMAGE,
  description:
    'Golden Kitchen Garden Rwanda (GKG) is a registered social enterprise in Musanze, Rwanda, founded in 2020. It promotes regenerative and climate-smart agriculture, kitchen and school gardens, nutrition and food security, circular-economy composting, edible landscaping, and income opportunities for women, youth, and persons with disabilities.',
  slogan: 'Where beauty meets nutrition.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Jean de Dieu Twagirimana',
    jobTitle: 'Managing Director & Founder',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nkotsi',
    addressLocality: 'Musanze',
    addressRegion: 'Northern Province',
    addressCountry: 'RW',
  },
  telephone: '+250788206976',
  email: 'info@goldenkitchengarden.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+250788206976',
      email: 'customer@goldenkitchengarden.com',
      areaServed: 'RW',
      availableLanguage: ['English'],
    },
  ],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'RDB company code',
    value: '112368548',
  },
  areaServed: { '@type': 'Country', name: 'Rwanda' },
  knowsAbout: [
    'Climate-smart agriculture',
    'Regenerative agriculture',
    'Kitchen gardens',
    'School gardens',
    'Edible landscaping',
    'Permaculture',
    'Organic farming',
    'Composting',
    'Agroforestry',
    'Food security',
    'Nutrition',
    'Farmer Field Schools',
    'Village Savings and Loan Associations (VSLAs)',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Products and services',
    itemListElement: products.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, areaServed: 'Rwanda' },
    })),
  },
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: 'GKG Rwanda',
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

export const routes = [
  {
    path: '/',
    file: 'index.html',
    pageType: 'WebPage',
    title: 'Golden Kitchen Garden Rwanda (GKG) | Climate-Smart Agriculture in Musanze',
    heading: 'Home',
    description:
      'Golden Kitchen Garden Rwanda (GKG) is a Musanze social enterprise building climate-smart kitchen gardens, edible landscapes, organic seedlings and compost, and farmer training for food security across Rwanda.',
    image: '/hero.jpg',
  },
  {
    path: '/about',
    file: 'about.html',
    pageType: 'AboutPage',
    title: 'About Us | Golden Kitchen Garden Rwanda (GKG)',
    heading: 'About Us',
    description:
      'Founded in 2020 by Jean de Dieu Twagirimana, Golden Kitchen Garden Rwanda Ltd (RDB 112368548) is a registered social enterprise in Nkotsi, Musanze advancing nutrition, food security and climate-smart agriculture.',
    image: '/empowering-women.jpg',
  },
  {
    path: '/products',
    file: 'products.html',
    pageType: 'CollectionPage',
    title: 'Products & Services | Kitchen Gardens, Landscaping & Nursery – GKG Rwanda',
    heading: 'Our Products',
    description:
      'Kitchen garden design and installation, landscaping, permaculture design, agroforestry and vegetable nurseries, French beans, strawberries, maize, upcycling, and agriculture consultation and training in Rwanda.',
    image: '/6.1.jpg',
  },
  {
    path: '/impact',
    file: 'impact.html',
    pageType: 'WebPage',
    title: 'Our Impact | Golden Kitchen Garden Rwanda (GKG)',
    heading: 'Our Impact',
    description:
      '3,300+ women, youth and persons with disabilities empowered, 400+ modern kitchen gardens installed, 50+ VSLAs, 10 cooperatives and 30+ school agriculture clubs supported across Rwanda.',
    image: '/7.jpg',
  },
];

export const notFound = {
  path: null,
  file: '404.html',
  title: 'Page not found | Golden Kitchen Garden Rwanda',
  description: 'This page does not exist. Visit Golden Kitchen Garden Rwanda to learn about our climate-smart agriculture work in Musanze.',
  noindex: true,
};

export function routeFor(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === clean) ?? notFound;
}

export function canonicalUrl(route) {
  return route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
}

export function structuredData(route) {
  const url = canonicalUrl(route);
  const page = {
    '@type': route.pageType,
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: `${SITE_URL}${route.image}`,
  };
  const graph = [organization, website, page];
  if (route.path !== '/') {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: route.heading, item: url },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Head tags for one route, as an HTML string injected at build time.
export function headTags(route, { heroPreload } = {}) {
  const tags = [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  ];
  if (route.noindex) {
    tags.push('<meta name="robots" content="noindex, follow" />');
    return tags.join('\n    ');
  }
  const url = canonicalUrl(route);
  tags.push(
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
    `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    '<meta property="og:locale" content="en_US" />',
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="Golden Kitchen Garden Rwanda farm team tending a strawberry field" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(route)).replace(/</g, '\\u003c')}</script>`,
  );
  if (route.path === '/' && heroPreload) tags.push(heroPreload);
  return tags.join('\n    ');
}
