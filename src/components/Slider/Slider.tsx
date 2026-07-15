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
    title: "Apartment",
    description: "Studio stretch ceiling white matte PVC",
    image: "/img/slider/room.jpg",
    price: "from $23,800",
    slug: "v-kvartire",
    orientation: "horizontal",
    slice1Rotation: -25,
    slice2Rotation: -25,
    slice1Scale: 2,
    slice2Scale: 2,
  },
  {
    id: 2,
    title: "Kitchen",
    description: "Stretch ceiling PVC matte white",
    image: "/img/slider/kitchen.jpg",
    price: "from $9,600",
    slug: "v-kuhne",
    orientation: "vertical",
    slice1Rotation: 10,
    slice2Rotation: -15,
    slice1Scale: 1.5,
    slice2Scale: 1.5,
  },
  {
    id: 3,
    title: "Bedroom",
    description: "Stretch ceiling fabric Descor white",
    image: "/img/slider/badroom.jpg",
    price: "from $16,400",
    slug: "tkanevye-potolki",
    orientation: "horizontal",
    slice1Rotation: 3,
    slice2Rotation: 3,
    slice1Scale: 2,
    slice2Scale: 1,
  },
  {
    id: 4,
    title: "Bathroom",
    description: "Stretch ceiling PVC matte white",
    image: "/img/slider/bathroom.jpg",
    price: "from $7,800",
    slug: "v-vanne",
    orientation: "vertical",
    slice1Rotation: -5,
    slice2Rotation: 25,
    slice1Scale: 2,
    slice2Scale: 1,
  },
  {
    id: 5,
    title: "Living Room",
    description: "Stretch ceiling PVC matte white",
    image: "/img/slider/livingroom.jpg",
    price: "from $13,700",
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
      }, 800); // Matches CSS transition speed (0.8s)
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

        // Calculate 3D transitions for exiting slide
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
            className={`${styles.slide} ${isActive ? styles.slideActive : ""} ${isExiting ? styles.slideExiting : ""}`}
          >
            {/* 3D split of background image */}
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

            {/* Slide content */}
            <div className={styles.slideContent}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              
              {/* Central price button */}
              <Link href={`/ceilings/${slide.slug}`} className={styles.priceBtn}>
                <span className={styles.priceText}>{slide.price}</span>
                <span className={styles.hoverText}>DETAILS</span>
              </Link>
            </div>
          </div>
        );
      })}

      {/* Nav arrows bottom-right */}
      <div className={styles.navArrows}>
        <button
          className={styles.arrowPrev}
          onClick={handlePrevClick}
          aria-label="Previous slide"
        />
        <button
          className={styles.arrowNext}
          onClick={handleNextClick}
          aria-label="Next slide"
        />
      </div>
    </div>
  );
}
