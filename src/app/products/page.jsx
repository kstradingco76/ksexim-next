"use client";
// Products.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";


const Products = () => {
  // Dummy product data with generated product IDs
  const products = [
    {
      id: "prod_001",
      name: "Guar Gum",
      image: "/images/guargum-powder.jpg",
    },
    {
      id: "prod_002",
      name: "Xanthan Gum",
      image: "/images/xanthan-gum.png",
    },
    {
      id: "prod_003",
      name: "Tragacanth Gum",
      image: "/images/Tragacanth-gum.png",
    },
    {
      id: "prod_004",
      name: "Guar Meal",
      image: "/images/Guar-Meal.jpg",
    },
    {
      id: "prod_005",
      name: "Roasted Guar",
      image: "/images/Rosted-guar.png",
    },
    {
      id: "prod_006",
      name: "Gum Arabica",
      image: "/images/Gum-arabic.png",
    },
  ];

  const router = useRouter();

  return (
    <div className={styles["products-container"]}>
      <main className={styles["products-main"]}>
        <div className={styles["products-hero"]}>
          <h2>OUR PRODUCTS</h2>
        </div>

        <section className={styles["products-grid"]}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles["product-card"]}
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/products/${product.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(`/products/${product.id}`);
                }
              }}
            >
              <Link
                href={`/products/${product.id}`}
                className={styles.cardLink}
              >
                <div className={styles["product-image"]}>
                  {/* Use Next.js Image with fill for optimized images and a small fallback handler */}
                  <ProductImage src={product.image} alt={product.name} />
                </div>
                <div className={styles["product-info"]}>
                  <h3 className={styles["product-name"]}>{product.name}</h3>
                  <div className={styles["product-cta"]}>
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Products;

// Small ProductImage helper: uses next/image and falls back to a placeholder on error
function ProductImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      style={{ objectFit: "cover" }}
      priority={false}
      unoptimized
    />
  );
}
