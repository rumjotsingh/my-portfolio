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
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Full-Stack Developer and AI Builder. 12+ projects, production CRM serving 1000+ customers. React, Next.js, TypeScript, Node.js, OpenAI.",
  keywords: [
    "Rumjot Singh",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Full-Stack Developer building AI-powered products and scalable SaaS platforms. 12+ projects, 1000+ customers served.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description:
      "Full-Stack Developer building AI-powered products and scalable SaaS platforms. 12+ projects, 1000+ customers served.",
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
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
              alumniOf: siteConfig.education.institution,
              url: siteConfig.github,
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
