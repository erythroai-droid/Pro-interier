"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingActions.module.css";
import CalculatorModal from "@/components/CalculatorModal/CalculatorModal";
import RequestModal from "@/components/RequestModal/RequestModal";

export default function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <div className={`${styles.floatingContainer} ${isVisible ? styles.visible : ""}`}>
        {/* Quick Menu Popover */}
        <div className={`${styles.quickMenu} ${isMenuOpen ? styles.quickMenuOpen : ""}`}>
          <button
            className={styles.quickMenuItem}
            onClick={() => {
              setIsRequestOpen(true);
              setIsMenuOpen(false);
            }}
          >
            <span className={styles.itemIcon}>📐</span>
            <span className={styles.itemLabel}>Free Measurement</span>
          </button>
          <button
            className={styles.quickMenuItem}
            onClick={() => {
              setIsCalculatorOpen(true);
              setIsMenuOpen(false);
            }}
          >
            <span className={styles.itemIcon}>🧮</span>
            <span className={styles.itemLabel}>Ceiling Calculator</span>
          </button>
          <a href="tel:+74955067244" className={styles.quickMenuItem}>
            <span className={styles.itemIcon}>📞</span>
            <span className={styles.itemLabel}>Call Studio</span>
          </a>
        </div>

        {/* Main Floating Action Pulse Button */}
        <button
          className={`${styles.mainFab} ${isMenuOpen ? styles.mainFabActive : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Quick Actions"
          title="Quick Consultation"
        >
          <span className={styles.fabPulse} />
          <span className={styles.fabIcon}>{isMenuOpen ? "✕" : "💬"}</span>
        </button>

        {/* Scroll To Top with circular progress */}
        <button
          className={styles.scrollTopBtn}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <svg className={styles.progressSvg} width="52" height="52" viewBox="0 0 52 52">
            <circle
              className={styles.circleBg}
              cx="26"
              cy="26"
              r={radius}
              strokeWidth="3"
            />
            <circle
              className={styles.circleProgress}
              cx="26"
              cy="26"
              r={radius}
              strokeWidth="3"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>
          <span className={styles.arrowUp}>↑</span>
        </button>
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
