import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { professionalSnapshot, siteConfig } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | rumjot.me`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Rumjot Singh's portfolio at rumjot.me. Full-Stack Developer and AI Builder with production experience in React, Next.js, TypeScript, Node.js, and scalable web apps.",
  keywords: [
    "Rumjot Singh",
    "rumjot.me",
    "Software Engineer",
    "Full Stack Developer",
    "AI Builder",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "SaaS Developer",
    "TypeScript",
    "Node.js",
    "OpenAI",
    "Portfolio",
    "Haryana India",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  applicationName: "Rumjot Singh Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${siteConfig.name} | rumjot.me`,
    description:
      "Rumjot Singh's portfolio at rumjot.me. Full-Stack Developer building AI-powered products and scalable SaaS platforms.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 1200,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | rumjot.me`,
    description:
      "Rumjot Singh's portfolio at rumjot.me. Full-Stack Developer building AI-powered products and scalable SaaS platforms.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: "Full Stack Developer",
              description: siteConfig.tagline,
              url: siteConfig.siteUrl,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              alumniOf: siteConfig.education.institution,
              sameAs: [
                siteConfig.github,
                siteConfig.linkedin,
                siteConfig.leetcode,
              ],
              knowsAbout: professionalSnapshot.roles,
            }),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
