"use client";

import { useState } from "react";
import Link from "next/link";
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

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const setSlide = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div className={styles.slideshowContainer}>
      {testimonials.map((item, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={item.id}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
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

      {/* Prev/Next buttons */}
      <button className={styles.prev} onClick={prevSlide} aria-label="Previous review" />
      <button className={styles.next} onClick={nextSlide} aria-label="Next review" />

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
