"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./ccards.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Ccards() {
  const images = [
    { src: "/images/FSSAI.png", alt: "FSSAI Logo", title: "FSSAI Certified" },
    { src: "/images/APEDA.png", alt: "APEDA Logo", title: "APEDA Registered" },
    { src: "/images/IEC.png", alt: "IEC Logo", title: "IEC Licensed" },
    { src: "/images/GST.png", alt: "GST Logo", title: "GST Registered" },
  ];

  const outerRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!outerRef.current || !containerRef.current || !wrapperRef.current) return;

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
    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={outerRef} className={styles.outerContainer}>
      <h2 className={styles.sectionTitle}>Our Certificates</h2>
      <div ref={containerRef} className={styles.container}>
        <div ref={wrapperRef} className={styles.cardsWrapper}>
          {images.map((image, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
