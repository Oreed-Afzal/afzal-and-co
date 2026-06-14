import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Lawyers in Lahore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "lawyers in Lahore",
    "best law firm Lahore",
    "criminal lawyer Lahore",
    "family lawyer Lahore",
    "civil litigation Lahore",
    "advocate Lahore",
    "legal consultants Pakistan",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} | Trusted Lawyers in Lahore`,
    description: site.description,
    images: [
      { url: "/images/og.svg", width: 1200, height: 630, alt: site.legalName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} | Trusted Lawyers in Lahore`,
    description: site.description,
    images: ["/images/og.svg"],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

function StructuredData() {
  const { address } = site.contact;
  const json = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": site.url,
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "$$",
    foundingDate: String(site.foundedYear),
    areaServed: "Lahore, Pakistan",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.line1,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: "PK",
    },
    openingHours: "Mo-Sa 08:00-23:00",
    sameAs: [site.social.facebook, site.social.linkedin, site.social.instagram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen font-sans antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
