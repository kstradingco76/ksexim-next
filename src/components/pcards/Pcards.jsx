"use client"; // Required for client-side features in Next.js App Router

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import styles from "./pcards.module.css";

gsap.registerPlugin(ScrollTrigger);

const sampleCards = [
  {
    id: "prod_001",
    title: "Guar Gum",
    description: "High-quality guar gum powder for food and industrial use.",
    image: "/images/Guar-gum.png",
  },
  {
    id: "prod_002",
    title: "Xanthan Gum",
    description: "Versatile thickening agent for various applications.",
    image: "/images/xanthan-gum.png",
  },
  {
    id: "prod_003",
    title: "Tragacanth Gum",
    description: "Natural gum with excellent stabilizing properties.",
    image: "/images/Tragacanth-gum.png",
  },
  {
    id: "prod_004",
    title: "Guar Meal",
    description: "Nutrient-rich guar meal suitable for feed.",
    image: "/images/Guar-Meal-Korma.png",
  },
  {
    id: "prod_005",
    title: "Roasted Guar",
    description: "Roasted guar products with enhanced properties.",
    image: "/images/Rosted-guar.png",
  },
  //   {
  //     id: 6,
  //     title: "Gum Arabica",
  //     description: "Premium gum arabica for food and pharma.",
  //     slug: "gum-arabica",
  //     image: "/images/gum-arabica.png",
  //   },
];

const Pcards = () => {
  const outerRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      if (!outerRef.current || !containerRef.current || !wrapperRef.current)
        return;

      const cards = wrapperRef.current.children;
      const totalWidth = Array.from(cards).reduce(
        (sum, card) => sum + card.offsetWidth,
        0
      );
      const visibleWidth = containerRef.current.offsetWidth;
      const maxX = Math.max(0, totalWidth - visibleWidth);

      gsap.to(wrapperRef.current, {
        x: -maxX,
        ease: "none",
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: () => `+=${maxX}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Cleanup mm
    return () => mm.revert();
  }, []);

  return (
    <div ref={outerRef} className={styles.outerContainer}>
      <h2 className={styles.sectionTitle}>Our Products</h2>
      <div ref={containerRef} className={styles.container}>
        <div ref={wrapperRef} className={styles.cardsWrapper}>
          {sampleCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={200}
                      className={styles.cardImage}
                    />
                  )}
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Link
                    href={`/products/${card.id}`}
                    className={styles.cardLink}
                  >
                    View product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pcards;
