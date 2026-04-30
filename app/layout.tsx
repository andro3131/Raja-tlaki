import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raja-tlaki.si"),
  title: {
    default: "Raja-tlaki d.o.o. — Strojni estrihi in ometi po vsej Sloveniji",
    template: "%s · Raja-tlaki d.o.o.",
  },
  description:
    "Strojni estrihi, Baumit ometi in industrijski tlaki s kvarcom. Iz Kamnika delamo po vsej Sloveniji. 20 let izkušenj, ekipa skupaj 16 let.",
  keywords: [
    "strojni estrihi",
    "strojni ometi",
    "industrijski tlaki",
    "kvarcni beton",
    "Baumit Ratio 26",
    "Kamnik",
    "Ljubljana",
    "Slovenija",
    "tlak",
    "estrih",
    "Raja-tlaki",
  ],
  authors: [{ name: "Raja-tlaki d.o.o." }],
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: "https://raja-tlaki.si",
    siteName: "Raja-tlaki d.o.o.",
    title: "Raja-tlaki d.o.o. — Strojni estrihi in ometi po vsej Sloveniji",
    description:
      "Strojni estrihi, Baumit ometi in industrijski tlaki s kvarcom. Iz Kamnika delamo po vsej Sloveniji.",
    images: [
      {
        url: "https://raja-tlaki.b-cdn.net/raja-logo.png",
        width: 1200,
        height: 630,
        alt: "Raja-tlaki d.o.o.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Raja-tlaki d.o.o.",
    legalName:
      "RAJA-TLAKI, strojni tlaki, ometi in druga zaključna gradbena dela, d.o.o.",
    description:
      "Strojni estrihi, Baumit ometi in industrijski tlaki s kvarcom po vsej Sloveniji.",
    url: "https://raja-tlaki.si",
    logo: "https://raja-tlaki.b-cdn.net/raja-logo.png",
    image: "https://raja-tlaki.b-cdn.net/raja-logo.png",
    telephone: "+386-51-349-833",
    email: "rajatlaki@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pot na Dobravo 88",
      addressLocality: "Kamnik",
      postalCode: "1241",
      addressCountry: "SI",
    },
    areaServed: {
      "@type": "Country",
      name: "Slovenija",
    },
    foundingDate: "2010-09-29",
    taxID: "SI71007881",
    vatID: "SI71007881",
  };

  return (
    <html lang="sl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
