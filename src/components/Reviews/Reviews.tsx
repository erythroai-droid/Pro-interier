"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Reviews.module.css";

interface Testimonial {
  id: number;
  image: string;
  text: string;
  nameFirst: string;
  nameLast: string;
  nameFirst2?: string;
  nameLast2?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/img/testimonials/Kai.png",
    text: "Thank you to the studio for the excellent work. Recommended!",
    nameFirst: "Kai",
    nameLast: "Metov",
  },
  {
    id: 2,
    image: "/img/testimonials/Konchlovsky.png",
    text: "It turned out cozy and bright! Thank you for your work!",
    nameFirst: "Andrey",
    nameLast: "Konchalovsky",
    nameFirst2: "Yulia",
    nameLast2: "Vysotskaya",
  },
  {
    id: 3,
    image: "/img/testimonials/Nikolaev.png",
    text: "Thank you for the high-quality work, liked everything!",
    nameFirst: "Valery",
    nameLast: "Nikolaev",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeSlide = containerRef.current.querySelector(`.${styles.slideActive}`);
    if (activeSlide) {
      const avatar = activeSlide.querySelector(`.${styles.avatarWrapper}`);
      const quote = activeSlide.querySelector(`.${styles.testimonial}`);
      const name = activeSlide.querySelector(`.${styles.name}`);

      const tl = gsap.timeline();
      if (avatar) {
        tl.fromTo(
          avatar,
          { opacity: 0, scale: 0.85, x: direction === "next" ? 30 : -30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: "back.out(1.5)" }
        );
      }
      if (quote) {
        tl.fromTo(
          quote,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      }
      if (name) {
        tl.fromTo(
          name,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }
    }
  }, [current, direction]);

  const nextSlide = useCallback(() => {
    setDirection("next");
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const setSlide = (idx: number) => {
    if (idx === current) return;
    setDirection(idx > current ? "next" : "prev");
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={styles.slideshowContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slidesWrapper}>
        {testimonials.map((item, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={item.id}
              className={`${styles.slide} ${
                isActive ? styles.slideActive : ""
              } ${direction === "next" ? styles.slideNext : styles.slidePrev}`}
              aria-hidden={!isActive}
            >
              <div className={styles.inner}>
                {/* Photo */}
                <div className={styles.avatarWrapper}>
                  <img src={item.image} alt={`${item.nameFirst} ${item.nameLast}`} />
                </div>
                {/* Testimonial Text */}
                <div className={styles.textBlock}>
                  <p className={styles.testimonial}>{item.text}</p>
                  <p className={styles.name}>
                    {item.nameFirst} <span>{item.nameLast}</span>
                    {item.nameFirst2 && (
                      <>
                        <br />
                        and {item.nameFirst2} <span>{item.nameLast2}</span>
                      </>
                    )}
                  </p>
                  <p className={`${styles.alignRight} bottom_50`}>
                    <Link href="/reviews" className="underline">
                      details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev/Next buttons */}
      <button
        className={styles.prev}
        onClick={prevSlide}
        aria-label="Previous review"
      />
      <button
        className={styles.next}
        onClick={nextSlide}
        aria-label="Next review"
      />

      {/* Indicators (dots) */}
      <div className={styles.dotsContainer}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ""}`}
            onClick={() => setSlide(idx)}
            aria-label={`Go to review ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
