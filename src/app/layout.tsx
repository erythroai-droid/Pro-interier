import type { Metadata } from "next";
import { Oswald, PT_Serif } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollAnimations from "@/components/GSAPAnimations/ScrollAnimations";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ceiling Pro_interier | Turnkey Stretch Ceilings in Moscow and Moscow Region",
  description: "Official website of the Ceiling PRO Interior studio. Installation of stretch ceilings of any complexity: matte, glossy, fabric, multi-level, light lines.",
  keywords: "stretch ceilings, ceiling installation, matte ceilings, fabric ceilings, light lines, Pro-interier, Moscow, Moscow region",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${ptSerif.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/img/slider/room.webp"
          type="image/webp"
          media="(min-width: 769px)"
          // @ts-expect-error - fetchPriority is supported in Next/React 19
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/img/slider/room-mobile.webp"
          type="image/webp"
          media="(max-width: 768px)"
          // @ts-expect-error - fetchPriority is supported in Next/React 19
          fetchpriority="high"
        />
      </head>
      <body>
        <ScrollAnimations />
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
