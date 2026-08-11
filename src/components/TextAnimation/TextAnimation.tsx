"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./TextAnimation.module.css";

interface TextAnimationProps {
  text: string;
}

export default function TextAnimation({ text }: TextAnimationProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const letters = containerRef.current?.querySelectorAll(`.${styles.letter}`);
      if (!letters || !letters.length) return;

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

      tl.fromTo(
        letters,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.02,
        }
      ).to(
        letters,
        {
          opacity: 0,
          x: -18,
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.015,
        },
        "+=3.5" // Hold fully visible for 3.5 seconds
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={styles.textContainer}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className={styles.letter}>
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className={styles.space}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
