interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://slospas.com/#business",
  name: "SLO Spas",
  description:
    "SLO County's exclusive authorized Jacuzzi dealer. Hot tubs, swim spas, infrared saunas, cold plunges, and Covana automated spa covers. Family-owned since 1986.",
  url: "https://slospas.com",
  telephone: "+1-805-544-3565",
  email: "Dane@slospas.com",
  foundingDate: "1986",
  priceRange: "$$$$",
  image: "https://slospas.com/images/BA1_9096.jpg",
  logo: "https://slospas.com/images/logo-light.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3035 Broad Street",
    addressLocality: "San Luis Obispo",
    addressRegion: "CA",
    postalCode: "93401",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2628,
    longitude: -120.6596,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://www.instagram.com/slospas/"],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 35.2628,
      longitude: -120.6596,
    },
    geoRadius: "80000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wellness Products",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Jacuzzi Hot Tubs" },
      { "@type": "OfferCatalog", name: "Jacuzzi Swim Spas" },
      { "@type": "OfferCatalog", name: "Infrared Saunas" },
      { "@type": "OfferCatalog", name: "Cold Plunges" },
      { "@type": "OfferCatalog", name: "Covana Automated Spa Covers" },
    ],
  },
};
