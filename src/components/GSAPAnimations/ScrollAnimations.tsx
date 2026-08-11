"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const cleanupFns: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // 1. Number Headers Animation (.number_header)
      const numberHeaders = document.querySelectorAll(".number_header");
      numberHeaders.forEach((header) => {
        const number = header.querySelector("span.number");
        const title = header.querySelector("h3");

        if (number) {
          gsap.fromTo(
            number,
            { opacity: 0, x: -30, filter: "blur(4px)" },
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30, letterSpacing: "2px" },
            {
              opacity: 1,
              y: 0,
              letterSpacing: "0px",
              duration: 0.9,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // 2. Block 01 - Stretch Ceilings
      const block01 = document.querySelector(".block_01");
      if (block01) {
        const pageImg = block01.querySelector(".page_image");
        const pageText = block01.querySelector(".page_content p");

        if (pageImg) {
          gsap.fromTo(
            pageImg,
            { opacity: 0, scale: 0.9, y: 40 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block01,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (pageText) {
          gsap.fromTo(
            pageText,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block01,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // 3. Block 02 - Promo Curtain Niche
      const block02 = document.querySelector(".block_02");
      if (block02) {
        const containerSmall = block02.querySelector(".container_small");
        const images = block02.querySelectorAll(".img");

        if (containerSmall) {
          gsap.fromTo(
            containerSmall,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block02,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (images.length > 0) {
          gsap.fromTo(
            images,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: block02,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // 4. Block 03 - Product Catalog Cards
      const productsContainer = document.querySelector(".block_03 .products");
      const productCards = gsap.utils.toArray<HTMLElement>(".block_03 .productCard");
      if (productsContainer && productCards.length > 0) {
        gsap.fromTo(
          productCards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: {
              each: 0.08,
              from: "start",
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: productsContainer,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Interactive 3D tilt effect on hover for each product card
        productCards.forEach((card) => {
          const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            gsap.to(card, {
              rotateX: rotateX,
              rotateY: rotateY,
              transformPerspective: 1000,
              scale: 1.02,
              duration: 0.3,
              ease: "power1.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.6,
              ease: "elastic.out(1, 0.5)",
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);
          cleanupFns.push(() => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
          });
        });
      }

      // Block 03 - Adv Banner
      const advBanner = document.querySelector(".block_03 .adv");
      if (advBanner) {
        gsap.fromTo(
          advBanner,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: advBanner,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 5. Block 04 - Studio Section with Parallax Effect
      const block04 = document.querySelector(".block_04");
      if (block04) {
        const studioText = block04.querySelector(".page_content p");
        const studioImages = block04.querySelectorAll(".studio_image");

        if (studioText) {
          gsap.fromTo(
            studioText,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block04,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (studioImages.length > 0) {
          gsap.fromTo(
            studioImages,
            { opacity: 0, x: 50, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block04,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Subtle parallax on scroll for studio images
          studioImages.forEach((img, i) => {
            gsap.to(img, {
              y: i % 2 === 0 ? -25 : 25,
              ease: "none",
              scrollTrigger: {
                trigger: block04,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          });
        }
      }

      // 6. Block 05 - Testimonials / Reviews Section
      const block05 = document.querySelector(".block_05");
      if (block05) {
        gsap.fromTo(
          block05,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block05,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // 7. Block 06 - Footer Entrance
      const footer = document.querySelector("footer.block_06");
      if (footer) {
        const cashback = footer.querySelector(".cashback");
        const footerCols = footer.querySelectorAll(".container2 ul");

        if (cashback) {
          gsap.fromTo(
            cashback,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: footer,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (footerCols.length > 0) {
          gsap.fromTo(
            footerCols,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footer,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // 8. Ceilings Subpages Animations (Inner page header & sidebar)
      const innerHeader = document.querySelector(".inner_header");
      const sidebar = document.querySelector(".sidebar");
      const pageBanner = document.querySelector(".block_07");

      if (pageBanner) {
        gsap.fromTo(
          pageBanner,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
        );
      }

      if (innerHeader) {
        gsap.fromTo(
          innerHeader,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (sidebar) {
        const sidebarItems = sidebar.querySelectorAll("li");
        gsap.fromTo(
          sidebarItems,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.04, ease: "power2.out" }
        );
      }
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
