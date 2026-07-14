"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";

interface SidebarCategory {
  title: string;
  slug: string;
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const columns: SidebarCategory[][] = [
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
      {/* Аккордеон для мобильных (отображается только на мобильных) */}
      <div className={styles.mobileAccordion}>
        <button 
          className={`${styles.accordionTitle} ${isOpen ? styles.accordionTitleOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Виды потолков
          <span className={styles.toggleIcon} />
        </button>
        <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ""}`}>
          <div className={styles.sidebarContent}>
            {columns.map((col, cIdx) => (
              <ul key={cIdx}>
                {col.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/ceilings/${item.slug}`} className="underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Сайдбар для десктопа */}
      <div className={styles.desktopSidebar}>
        <h6 className="bottom_30">Виды потолков</h6>
        {columns.map((col, cIdx) => (
          <ul key={cIdx}>
            {col.map((item) => (
              <li key={item.slug}>
                <Link href={`/ceilings/${item.slug}`} className="underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
