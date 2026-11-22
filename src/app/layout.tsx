import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/site/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Student",
  description: siteConfig.description,
  sameAs: [
    "https://www.linkedin.com/in/sudhith-mannuru-173325243/",
    "https://www.instagram.com/sudhith1/",
    "https://discord.com/users/897269148156051477",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Sudhith Mannuru",
    "machine learning",
    "computer vision",
    "NoMaeTrust",
    "Civitas",
    "AnactOrtho",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "SEc1iRGgsKzMTIOBZjSBlcbZDRDHIFoQaBANx_HZPUo",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <AppProviders>
          <SkipLink />
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
