"use client";

import styles from "./TextAnimation.module.css";

interface TextAnimationProps {
  text: string;
}

export default function TextAnimation({ text }: TextAnimationProps) {
  // Split the string into individual characters
  const chars = text.split("");

  return (
    <span className={styles.textContainer}>
      {chars.map((char, index) => {
        // If character is a space, render a special class that preserves width
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
