"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./slider.module.css";
const slides = [
  {
    id: 1,
    title: "Guar Gum",
    description:
      "Guar gum is a natural, edible thickening agent that comes from the seeds of the guar plant, a member of the legume family.",
    img: "/images/slide1.jpg",
    url: "/",
  },
  {
    id: 2,
    title: "Xanthan Gum",
    description:
      "Xanthan gum is a nontoxic, biodegradable, and hydrophilic polymer that is made by fermenting simple sugars with the bacterium Xanthomonas campestris. It is soluble in both cold and hot water, and is stable over a wide range of pH values.",
    img: "/images/slide2.jpg",
    url: "/",
  },
  {
    id: 3,
    title: "Tragacanth Gum",
    description:
      "A viscous polysaccharide mixture that's slightly acidic and exists as calcium, magnesium, and sodium salts.",
    img: "/images/slide3.jpg",
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={styles.slide}
        >
          <div className={styles.content}>
            <div className={styles.textContainer}>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={styles.slideTitle}
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={styles.slideDescription}
              >
                {slides[current].description}
              </motion.p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={slides[current].img}
                alt={slides[current].title}
                className={styles.slideImage}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={goToPrevious}>
          &#8249;
        </button>
        <button className={styles.nextButton} onClick={goToNext}>
          &#8250;
        </button>
      </div>

      <div className={styles.dotIndicators}>
        {slides.map((_, index) => (
          <div
            className={`${styles.dotIndicator} ${
              current === index ? styles.activeDot : ""
            }`}
            key={index}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
