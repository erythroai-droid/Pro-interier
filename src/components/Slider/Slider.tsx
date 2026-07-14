"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Slider.module.css";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  slug: string;
  orientation: "horizontal" | "vertical";
  slice1Rotation: number;
  slice2Rotation: number;
  slice1Scale: number;
  slice2Scale: number;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Квартира",
    description: "Cтудия натяжной потолок белый матовый пвх",
    image: "/img/slider/room.jpg",
    price: "от 23 800 ₽",
    slug: "v-kvartire",
    orientation: "horizontal",
    slice1Rotation: -25,
    slice2Rotation: -25,
    slice1Scale: 2,
    slice2Scale: 2,
  },
  {
    id: 2,
    title: "Кухня",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/kitchen.jpg",
    price: "от 9 600 ₽",
    slug: "v-kuhne",
    orientation: "vertical",
    slice1Rotation: 10,
    slice2Rotation: -15,
    slice1Scale: 1.5,
    slice2Scale: 1.5,
  },
  {
    id: 3,
    title: "Спальня",
    description: "Натяжной потолок тканевый Дескор белый",
    image: "/img/slider/badroom.jpg",
    price: "от 16 400 ₽",
    slug: "tkanevye-potolki",
    orientation: "horizontal",
    slice1Rotation: 3,
    slice2Rotation: 3,
    slice1Scale: 2,
    slice2Scale: 1,
  },
  {
    id: 4,
    title: "Ванная",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/bathroom.jpg",
    price: "от 7 800 ₽",
    slug: "v-vanne",
    orientation: "vertical",
    slice1Rotation: -5,
    slice2Rotation: 25,
    slice1Scale: 2,
    slice2Scale: 1,
  },
  {
    id: 5,
    title: "Гостинная",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/livingroom.jpg",
    price: "от 13 700 ₽",
    slug: "v-kvartire",
    orientation: "horizontal",
    slice1Rotation: -5,
    slice2Rotation: 10,
    slice1Scale: 2,
    slice2Scale: 1,
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setExiting(current);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setExiting(current);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (exiting !== null) {
      const timer = setTimeout(() => {
        setExiting(null);
        setIsTransitioning(false);
      }, 800); // Совпадает со скоростью перехода в CSS (0.8s)
      return () => clearTimeout(timer);
    }
  }, [exiting]);

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [current, isTransitioning]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleNextClick = () => {
    resetAutoPlay();
    nextSlide();
  };

  const handlePrevClick = () => {
    resetAutoPlay();
    prevSlide();
  };

  return (
    <div className={styles.sliderWrapper}>
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        const isExiting = idx === exiting;
        const showSlide = isActive || isExiting;

        if (!showSlide) return null;

        const isHorizontal = slide.orientation === "horizontal";

        // Расчет 3D трансформаций для уходящего слайда
        let slice1Style: React.CSSProperties = {};
        let slice2Style: React.CSSProperties = {};

        if (isExiting) {
          if (isHorizontal) {
            slice1Style = {
              transform: `translateY(-230%) rotate(${slide.slice1Rotation}deg) scale(${slide.slice1Scale})`,
              opacity: 0,
            };
            slice2Style = {
              transform: `translateY(230%) rotate(${slide.slice2Rotation}deg) scale(${slide.slice2Scale})`,
              opacity: 0,
            };
          } else {
            slice1Style = {
              transform: `translateX(-230%) rotate(${slide.slice1Rotation}deg) scale(${slide.slice1Scale})`,
              opacity: 0,
            };
            slice2Style = {
              transform: `translateX(230%) rotate(${slide.slice2Rotation}deg) scale(${slide.slice2Scale})`,
              opacity: 0,
            };
          }
        }

        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
          >
            {/* 3D Сплит фонового изображения */}
            <div
              className={`${styles.bgSlice} ${isHorizontal ? styles.sliceTop : styles.sliceLeft}`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                ...slice1Style
              }}
            />
            <div
              className={`${styles.bgSlice} ${isHorizontal ? styles.sliceBottom : styles.sliceRight}`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
                ...slice2Style
              }}
            />

            {/* Контент слайда */}
            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              
              {/* Кнопка с ценой по центру */}
              <Link href={`/ceilings/${slide.slug}`} className={styles.priceBtn}>
                <span className={styles.priceText}>{slide.price}</span>
                <span className={styles.hoverText}>ПОДРОБНЕЕ</span>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Квадратные кнопки навигации внизу справа */}
      <div className={styles.navArrows}>
        <button
          className={styles.arrowPrev}
          onClick={handlePrevClick}
          aria-label="Предыдущий слайд"
        />
        <button
          className={styles.arrowNext}
          onClick={handleNextClick}
          aria-label="Следующий слайд"
        />
      </div>
    </div>
  );
}
