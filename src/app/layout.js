import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "A2Z Cleaning and Repair Sewa - Professional Services in Gothatar, Kathmandu",
  description: "A2Z Cleaning and Repair Sewa provides professional cleaning and home repair services in Gothatar, Kathmandu, Nepal. From residential cleaning to repairs, we ensure a spotless and well-maintained home. Contact us today!",
  keywords: "A2Z Cleaning and Repair Sewa, Gothatar, Kathmandu cleaning, home repair service, Nepal cleaners, professional cleaning, residential cleaning, commercial cleaning, repair services, eco-friendly cleaning, local cleaning service, carpet cleaning, upholstery cleaning, end of lease cleaning, Nepal home maintenance",
  author: "A2Z Cleaning and Repair Sewa",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#007aff",
  openGraph: {
    title: "A2Z Cleaning and Repair Sewa - Professional Services in Gothatar, Kathmandu",
    description: "A2Z Cleaning and Repair Sewa offers expert cleaning and home repair services in Gothatar, Kathmandu, Nepal. Contact us for all your home maintenance needs.",
    type: "website",
    url: "https://www.a2zcleaningandrepairsewa.com.np",
    images: [
      {
        url: "https://www.a2zcleaningandrepairsewa.com.np/cleaning_banner.png",
        width: 1200,
        height: 630,
        alt: "A2Z Cleaning and Repair Sewa - Professional Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@A2ZCleaning",
    title: "A2Z Cleaning and Repair Sewa - Professional Services in Gothatar, Kathmandu",
    description: "Expert cleaning and repair services in Gothatar, Kathmandu, Nepal. Book our professional services today.",
    image: "https://www.a2zcleaningandrepairsewa.com.np/cleaning_banner.png",
  },
  canonical: "https://www.a2zcleaningandrepairsewa.com.np",
  contact: {
    email: "atozhomerepairservice@gmail.com",
    phone: "+977 9812107370, +977 9762272048",
    address: "Gothatar, Kathmandu, Nepal",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "A2Z Cleaning and Repair Sewa",
    description: "Professional cleaning and repair services in Gothatar, Kathmandu, Nepal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gothatar",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
    telephone: "+9779812107370",
    email: "atozhomerepairservice@gmail.com",
    image: "https://www.a2zcleaningandrepairsewa.com.np/cleaning_banner.png",
    url: "https://www.a2zcleaningandrepairsewa.com.np",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00",
    areaServed: {
      "@type": "Place",
      name: "Kathmandu",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content={metadata.viewport} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* SEO Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Open Graph (OG) Meta Tags for social sharing */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content="A2Z Cleaning and Repair Sewa" />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card for sharing */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Canonical link */}
        <link rel="canonical" href={metadata.canonical} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data (Schema.org for Local SEO) */}
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>

        <title>{metadata.title}</title>
      </head>
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
