import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "A2Z Cleaning Service - Professional Cleaning in Sydney",
  description: "A2Z Cleaning Service offers top-notch professional cleaning services in Sydney. From residential to commercial cleaning, we ensure a spotless and welcoming environment. Book today!",
  keywords: "A2Z cleaning service, Sydney cleaners, professional cleaning, residential cleaning, commercial cleaning, carpet cleaning, upholstery cleaning, end of lease cleaning, eco-friendly cleaning",
  author: "A2Z Cleaning Service",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#007aff",
  openGraph: {
    title: "A2Z Cleaning Service - Professional Cleaning in Sydney",
    description: "A2Z Cleaning Service provides expert cleaning services in Sydney. We offer residential and commercial cleaning solutions tailored to your needs.",
    type: "website",
    url: "https://www.a2zcleaningservice.com",
    images: [
      {
        url: "https://www.a2zcleaningservice.com/cleaning_banner.png",
        width: 1200,
        height: 630,
        alt: "A2Z Cleaning Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@A2ZCleaning",
    title: "A2Z Cleaning Service - Professional Cleaning in Sydney",
    description: "A2Z Cleaning Service provides expert cleaning solutions in Sydney.",
    image: "https://www.a2zcleaningservice.com/cleaning_banner.png",
  },
  canonical: "https://www.a2zcleaningservice.com",
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
        <meta property="og:site_name" content="A2Z Cleaning Service" />
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

        <title>{metadata.title}</title>
      </head>
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
