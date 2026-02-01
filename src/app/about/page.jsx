"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    // GSAP animation for section fade-in
    gsap.fromTo(
      ".about-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animation for text content
    gsap.fromTo(
      ".text-content",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animation for image
    gsap.fromTo(
      ".image-content",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".image-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className={styles.hero}>
          <Image
            src="/images/about-us.jpg"
            alt="Header Image"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroTitle}>ABOUT</div>
        </div>
        <h1 className={styles.title}>KAYESS TRADING COMPANY</h1>
        <div className={styles.content}>
          <div className={`text-content ${styles.left}`}>
            <p className={styles.text}>
              The history of KS trading co. dates back to 2018 when the promoter
              of this company Mr. Akhil Gupta with his son Mr. Archit gupta
              enter in the Guar Gum Industry at Jalandhar ,Punjab.
            </p>
            <p className={styles.text}>
              In the year 2018 the first line for supply for Food Grade Guar Gum
              Powder was brought up in a completely new premises,under the
              guidance of well qualified , highly qualified partners under whom
              the entire working of the supply Unit and qualified team to watch
              Manufacturing process is constantly, vigil and care being
              exercised so as to regularly maintain the quality of the products.
              Since then the supply, quality control, warehousing have been
              improved from time to time.
            </p>
            <p className={styles.text}>
              <b>
                <i> KS Trading co </i>
              </b>
              and its flagship brand KAYESS command a high reputation worldwide
              for quality products, efficient services and level of reliability
              as a stable supplier of quality products. The company lays special
              emphasis on maintaining quality standards parallel to the highest
              in the industry. It is always busy developing new and improved
              products for various applications.
            </p>
            <p className={styles.text}>
              We are the leading{" "}
              <b>
                {" "}
                suppliers of Guar Gum powder and Guar Gum Refined Splits in
                Jalandhar,Punjab, India{" "}
              </b>
              . We here at KS Trading co give great importance to Quality.
              Packaging of Guar Gum is done in such a way that it preserves the
              highly delicate product in good condition for a long time.
            </p>
          </div>
          <div className={`image-content ${styles.right}`}>
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
