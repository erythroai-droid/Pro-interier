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
    text: "Спасибо студии за отличную работу. Рекомендую!",
    nameFirst: "Кай",
    nameLast: "Метов",
  },
  {
    id: 2,
    image: "/img/testimonials/Konchlovsky.png",
    text: "Получилось уютно и светло! Спасибо за труд!",
    nameFirst: "Андрей",
    nameLast: "Кончаловский",
    nameFirst2: "Юлия",
    nameLast2: "Высоцкая",
  },
  {
    id: 3,
    image: "/img/testimonials/Nikolaev.png",
    text: "Благодарю за качественную работу, все понравилось!",
    nameFirst: "Валерий",
    nameLast: "Николаев",
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
              {/* Фото */}
              <div className={styles.avatarWrapper}>
                <img src={item.image} alt={`${item.nameFirst} ${item.nameLast}`} />
              </div>
              {/* Текст отзыва */}
              <div className={styles.textBlock}>
                <p className={styles.testimonial}>{item.text}</p>
                <p className={styles.name}>
                  {item.nameFirst} <span>{item.nameLast}</span>
                  {item.nameFirst2 && (
                    <>
                      <br />
                      и {item.nameFirst2} <span>{item.nameLast2}</span>
                    </>
                  )}
                </p>
                <p className={`${styles.alignRight} bottom_50`}>
                  <Link href="/reviews" className="underline">
                    подробнее
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Кнопки влево/вправо */}
      <button className={styles.prev} onClick={prevSlide} aria-label="Предыдущий отзыв" />
      <button className={styles.next} onClick={nextSlide} aria-label="Следующий отзыв" />

      {/* Индикаторы (dots) */}
      <div className={styles.dotsContainer}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ""}`}
            onClick={() => setSlide(idx)}
            aria-label={`Перейти к отзыву ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
