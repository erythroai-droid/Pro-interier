"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TextAnimation from "@/components/TextAnimation/TextAnimation";
import CalculatorModal from "@/components/CalculatorModal/CalculatorModal";
import RequestModal from "@/components/RequestModal/RequestModal";
import styles from "./Navbar.module.css";

interface MenuCategory {
  title: string;
  slug: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize state on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const columns: MenuCategory[][] = [
    [
      { title: "Matte & Glossy PVC", slug: "matovye-i-glyancivye-pvh" },
      { title: "Fabric Ceilings", slug: "tkanevye-potolki" },
      { title: "Multi-level Ceilings", slug: "mnogourovnevye-potolki" },
      { title: "Photo Printed Ceilings", slug: "fotopechat-na-potolke" },
      { title: "Sky with Clouds", slug: "nebo-s-oblakami" },
      { title: "Stained Glass Ceilings", slug: "vitrazh-na-potolok" },
    ],
    [
      { title: "Floating Ceilings", slug: "paryashie-potolki" },
      { title: "Shadow Ceilings", slug: "tenevye-potolki" },
      { title: "Luminous LED Ceilings", slug: "svetovye-led-potolki" },
      { title: "Light Lines", slug: "svetovye-linii" },
      { title: "With LED Backlight", slug: "s-podsvetkoy-led" },
      { title: "3D Ceilings", slug: "3d-potolki" },
    ],
    [
      { title: "In Apartment", slug: "v-kvartire" },
      { title: "In Country House", slug: "v-zagorodnem-dome" },
      { title: "In Swimming Pool", slug: "v-basseine" },
      { title: "In Kids Room", slug: "v-detskoy-komnate" },
      { title: "In Kitchen", slug: "v-kuhne" },
      { title: "In Bathroom", slug: "v-vanne" },
    ],
    [
      { title: "Hidden Curtain Niche", slug: "nisha-dlya-shtor-skrytaya" },
      { title: "Ceiling Soundproofing", slug: "shumoizolyaciya-potolka" },
      { title: "Ceiling Spotlights", slug: "svetilniki-dlya-potolka" },
      { title: "Our Portfolio", slug: "foto-nashih-rabot" },
      { title: "Installation Prices", slug: "ceny-na-montazh-potolkov" },
      { title: "Discounts & Offers", slug: "skidki-i-akcii" },
    ],
  ];

  return (
    <>
      <div className={`${styles.navbar} ${isScrolled ? styles.menuScrolled : ""}`}>
        <Link href="/" className={styles.logo} aria-label="Pro Interier Logo" />

        {/* Ceiling Types Section */}
        <div className={styles.menuArea}>
          <div className={styles.kind} onClick={toggleDropdown}>
            ceiling types
            <span className={`${styles.openIcon} ${isDropdownOpen ? styles.openIconActive : ""}`} />
          </div>
        </div>

        {/* Desktop horizontal menu */}
        <div className={`${styles.menu} ${isScrolled ? styles.menuScrolled : ""}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/about" className="underline">about us</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/portfolio" className="underline">our works</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/prices" className="underline">prices</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/discounts" className="underline">discounts</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contacts" className="underline">contacts</Link>
            </li>
          </ul>
        </div>

        {/* Ceiling Calculator Button */}
        <Link 
          href="/calculator" 
          className={`${styles.calculator} ${isScrolled ? styles.calculatorScrolled : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setIsCalculatorOpen(true);
          }}
        >
          ceiling calculator
        </Link>

        {/* Leave Request Button */}
        <Link 
          href="/request" 
          className={`${styles.feedback} ${isScrolled ? styles.feedbackScrolled : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setIsRequestOpen(true);
          }}
        >
          leave request
        </Link>

        {/* Mobile burger button */}
        <div 
          className={`${styles.hamburger} ${isScrolled ? styles.hamburgerScrolled : ""} ${isMobileMenuOpen ? styles.burgerActive : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className={styles.burgerLines} />
        </div>
      </div>

      {/* Mega dropdown menu "Ceiling Types" */}
      <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ""}`}>
        {/* Top panel: Logo + Close */}
        <div className={styles.dropdownTopBar}>
          <div className={styles.dropdownLogo} />
          <button 
            className={styles.dropdownClose} 
            onClick={() => setIsDropdownOpen(false)}
            aria-label="Close menu"
          >
            close menu <span className={styles.closeCross}>✕</span>
          </button>
        </div>

        <h2 className={styles.dropdownHeader}>Turnkey Stretch Ceilings</h2>
        
        <div className={styles.dropdownContent}>
          {columns.map((col, index) => (
            <ul key={index}>
              {col.map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/ceilings/${item.slug}`} 
                    className="underline"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Promo banner at bottom */}
        <div className={styles.dropdownPromo}>
          <Link 
            href="/ceilings/shumoizolyaciya-potolka" 
            onClick={() => setIsDropdownOpen(false)}
          >
            <TextAnimation text="Order soundproofing and get a discount on your stretch ceiling!" />
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>about us</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>our works</Link>
          </li>
          <li>
            <Link href="/prices" onClick={() => setIsMobileMenuOpen(false)}>prices</Link>
          </li>
          <li>
            <Link href="/discounts" onClick={() => setIsMobileMenuOpen(false)}>discounts</Link>
          </li>
          <li>
            <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>contacts</Link>
          </li>
        </ul>
        <div className={styles.mobileMenuDivider} />
        <div className={styles.mobileMenuButtons}>
          <Link 
            href="/calculator" 
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              setIsCalculatorOpen(true);
            }}
          >
            ceiling calculator
          </Link>
          <Link 
            href="/request" 
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              setIsRequestOpen(true);
            }}
          >
            book a measurement
          </Link>
        </div>
      </div>

      <CalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
      <RequestModal 
        isOpen={isRequestOpen} 
        onClose={() => setIsRequestOpen(false)} 
      />
    </>
  );
}
