// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ParticleBackground } from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Yash Tiwari | Robotics Innovator",
  description: "Mechatronics Engineer specializing in advanced robotics, simulation, and intelligent systems. Building the future one robot at a time.",
  keywords: "robotics, mechatronics, engineering, AI, ROS, simulation, automation, innovation",
  authors: [{ name: "Yash Tiwari" }],
  creator: "Yash Tiwari",
  publisher: "Yash Tiwari",
  openGraph: {
    title: "Yash Tiwari | Robotics Innovator",
    description: "Mechatronics Engineer specializing in advanced robotics, simulation, and intelligent systems.",
    type: "website",
    locale: "en_US",
    siteName: "Yash Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Tiwari | Robotics Innovator",
    description: "Building the future of robotics through innovative engineering solutions.",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <ParticleBackground />
        <div className="relative z-10">
          {children}
        </div>
        {/* Performance optimization scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical resources
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  const link = document.createElement('link');
                  link.rel = 'prefetch';
                  link.href = '/images/ros.jpeg';
                  document.head.appendChild(link);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}