"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface MenuCategory {
  title: string;
  slug: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Инициализировать состояние при монтировании
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
      { title: "Матовые и глянцевые пвх", slug: "matovye-i-glyancivye-pvh" },
      { title: "Тканевые потолки", slug: "tkanevye-potolki" },
      { title: "Многоуровневые потолки", slug: "mnogourovnevye-potolki" },
      { title: "Фотопечать на потолке", slug: "fotopechat-na-potolke" },
      { title: "Небо с облаками", slug: "nebo-s-oblakami" },
      { title: "Витраж на потолок", slug: "vitrazh-na-potolok" },
    ],
    [
      { title: "Парящие потолки", slug: "paryashie-potolki" },
      { title: "Теневые потолки", slug: "tenevye-potolki" },
      { title: "Световые Led потолки", slug: "svetovye-led-potolki" },
      { title: "Световые линии", slug: "svetovye-linii" },
      { title: "С подсветкой Led", slug: "s-podsvetkoy-led" },
      { title: "3D потолки", slug: "3d-potolki" },
    ],
    [
      { title: "В квартире", slug: "v-kvartire" },
      { title: "В загороднем доме", slug: "v-zagorodnem-dome" },
      { title: "В басcеине", slug: "v-basseine" },
      { title: "В детской комнате", slug: "v-detskoy-komnate" },
      { title: "В кухне", slug: "v-kuhne" },
      { title: "В ванне", slug: "v-vanne" },
    ],
    [
      { title: "Ниша для штор скрытая", slug: "nisha-dlya-shtor-skrytaya" },
      { title: "Шумоизоляция потолка", slug: "shumoizolyaciya-potolka" },
      { title: "Светильники для потолка", slug: "svetilniki-dlya-potolka" },
      { title: "Фото наших работ", slug: "foto-nashih-rabot" },
      { title: "Цены на монтаж потолков", slug: "ceny-na-montazh-potolkov" },
      { title: "Скидки и акции", slug: "skidki-i-akcii" },
    ],
  ];

  return (
    <>
      <div className={`${styles.navbar} ${isScrolled ? styles.menuScrolled : ""}`}>
        <Link href="/" className={styles.logo} aria-label="Pro Interier Logo" />

        {/* Раздел Виды потолков */}
        <div className={styles.menuArea}>
          <div className={styles.kind} onClick={toggleDropdown}>
            виды потолков
            <span className={`${styles.openIcon} ${isDropdownOpen ? styles.openIconActive : ""}`} />
          </div>
        </div>

        {/* Десктопное горизонтальное меню */}
        <div className={`${styles.menu} ${isScrolled ? styles.menuScrolled : ""}`}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/about" className="underline">о компании</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/portfolio" className="underline">наши работы</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/prices" className="underline">цены</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/discounts" className="underline">скидки</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contacts" className="underline">контакты</Link>
            </li>
          </ul>
        </div>

        {/* Кнопка Калькулятор */}
        <Link 
          href="/calculator" 
          className={`${styles.calculator} ${isScrolled ? styles.calculatorScrolled : ""}`}
        >
          калькулятор потолков
        </Link>

        {/* Кнопка Оставить заявку */}
        <Link 
          href="/request" 
          className={`${styles.feedback} ${isScrolled ? styles.feedbackScrolled : ""}`}
        >
          оставить заявку
        </Link>

        {/* Мобильная кнопка бургера */}
        <div 
          className={`${styles.hamburger} ${isScrolled ? styles.hamburgerScrolled : ""} ${isMobileMenuOpen ? styles.burgerActive : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className={styles.burgerLines} />
        </div>
      </div>

      {/* Мега-выпадающее меню "Виды потолков" */}
      <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ""}`}>
        <button 
          className={styles.closeButton} 
          onClick={() => setIsDropdownOpen(false)}
          aria-label="Закрыть меню"
        />
        <h2 className={styles.dropdownHeader}>Натяжные потолки под ключ</h2>
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
        <div className={styles.dropdownPromo}>
          <Link 
            href="/ceilings/shumoizolyaciya-potolka" 
            onClick={() => setIsDropdownOpen(false)}
          >
            Закажите звукоизоляцию потолка и получите скидку на натяжной потолок!
          </Link>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>о компании</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>наши работы</Link>
          </li>
          <li>
            <Link href="/prices" onClick={() => setIsMobileMenuOpen(false)}>цены</Link>
          </li>
          <li>
            <Link href="/discounts" onClick={() => setIsMobileMenuOpen(false)}>скидки</Link>
          </li>
          <li>
            <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>контакты</Link>
          </li>
        </ul>
        <div className={styles.mobileMenuDivider} />
        <div className={styles.mobileMenuButtons}>
          <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
            калькулятор потолков
          </Link>
          <Link href="/request" onClick={() => setIsMobileMenuOpen(false)}>
            оставить заявку на замер
          </Link>
        </div>
      </div>
    </>
  );
}
