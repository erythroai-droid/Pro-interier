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
      {/* Mobile Accordion (visible on mobile only) */}
      <div className={styles.mobileAccordion}>
        <button 
          className={`${styles.accordionTitle} ${isOpen ? styles.accordionTitleOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Ceiling Types
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

      {/* Desktop Sidebar */}
      <div className={styles.desktopSidebar}>
        <h6 className="bottom_30">Ceiling Types</h6>
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
