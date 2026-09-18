import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecosen Inc LTD - Civil & Electrical Construction Experts",
  description:
    "Ecosen Inc LTD delivers exceptional civil and electrical construction solutions across East Africa. Building resilient infrastructure with quality, safety, and innovation.",
  keywords: [
    "civil construction",
    "electrical construction",
    "infrastructure",
    "East Africa",
    "Rwanda",
    "Uganda",
    "Tanzania",
    "sustainable construction",
  ],
  authors: [{ name: "Ecosen Inc LTD" }],
  creator: "Ecosen Inc LTD",
  publisher: "Ecosen Inc LTD",
  openGraph: {
    title: "Ecosen Inc LTD - Civil & Electrical Construction Experts",
    description:
      "Building resilient infrastructure through quality, safety, and innovation across East Africa.",
    url: "https://ecosenltd.com",
    siteName: "Ecosen Inc LTD",
    images: [
      {
        url: "/logo/ecosen-logo.png",
        width: 1200,
        height: 630,
        alt: "Ecosen Inc LTD Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosen Inc LTD - Civil & Electrical Construction Experts",
    description:
      "Building resilient infrastructure through quality, safety, and innovation across East Africa.",
    images: ["/logo/ecosen-logo.png"],
    creator: "@ecoseninc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ecosen Inc LTD",
              url: "https://ecosenltd.com",
              logo: "https://ecosenltd.com/logo/ecosen-logo.png",
              description:
                "Civil and Electrical Construction Experts in East Africa",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RW", // Assuming Rwanda, adjust as needed
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+250-788-759-252", // Replace with actual phone
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/ecosenltd",
                "https://www.linkedin.com/company/ecosenltd",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
