"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  orientation: "horizontal" | "vertical";
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Квартира",
    description: "Cтудия натяжной потолок белый матовый пвх",
    image: "/img/slider/room.jpg",
    orientation: "horizontal",
  },
  {
    id: 2,
    title: "Кухня",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/kitchen.jpg",
    orientation: "vertical",
  },
  {
    id: 3,
    title: "Спальня",
    description: "Натяжной потолок тканевый Дескор белый",
    image: "/img/slider/badroom.jpg",
    orientation: "horizontal",
  },
  {
    id: 4,
    title: "Ванная",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/bathroom.jpg",
    orientation: "vertical",
  },
  {
    id: 5,
    title: "Гостинная",
    description: "Натяжной потолок пвх матовый белый",
    image: "/img/slider/livingroom.jpg",
    orientation: "horizontal",
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

  // Сброс состояния перехода после завершения CSS-анимации
  useEffect(() => {
    if (exiting !== null) {
      const timer = setTimeout(() => {
        setExiting(null);
        setIsTransitioning(false);
      }, 800); // Должно совпадать с длительностью анимации в CSS (0.8s)
      return () => clearTimeout(timer);
    }
  }, [exiting]);

  // Автопроигрывание слайдов
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
        const exitClass = isExiting
          ? isHorizontal
            ? styles.slideExitingHorizontal
            : styles.slideExitingVertical
          : "";

        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""} ${exitClass}`}
          >
            {/* Рендерим 2 части фона для 3D сплит-эффекта */}
            <div
              className={`${styles.bgSlice} ${isHorizontal ? styles.sliceTop : styles.sliceLeft}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div
              className={`${styles.bgSlice} ${isHorizontal ? styles.sliceBottom : styles.sliceRight}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <div className={styles.buttonPrice} />
            </div>
          </div>
        );
      })}

      {/* Кнопки переключения */}
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
