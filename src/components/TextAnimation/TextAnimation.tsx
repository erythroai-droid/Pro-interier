"use client";

import styles from "./TextAnimation.module.css";

interface TextAnimationProps {
  text: string;
}

export default function TextAnimation({ text }: TextAnimationProps) {
  // Разделяем строку на отдельные символы
  const chars = text.split("");

  return (
    <span className={styles.textContainer}>
      {chars.map((char, index) => {
        // Если символ - пробел, рендерим специальный класс, сохраняющий ширину
        if (char === " ") {
          return <span key={index} className={styles.letterSpace} />;
        }

        const delay = `${0.5 + index * 0.03}s`;

        return (
          <span
            key={index}
            className={styles.letter}
            style={{ animationDelay: delay }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
