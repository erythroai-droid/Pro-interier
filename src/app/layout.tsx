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
  title: "Потолочный Pro_interier | Натяжные потолки под ключ в Москве и МО",
  description: "Официальный сайт студии Потолочный PRO Интерьер. Установка натяжных потолков любой сложности: матовые, глянцевые, тканевые, многоуровневые, световые линии.",
  keywords: "натяжные потолки, установка потолков, матовые потолки, тканевые потолки, световые линии, Pro-interier, Москва, Московская область",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${ptSerif.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
