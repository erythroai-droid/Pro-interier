import type { Metadata } from "next";
import { Oswald, PT_Serif } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
