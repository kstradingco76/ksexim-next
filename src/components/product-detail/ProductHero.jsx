import Image from "next/image";

export default function ProductHero({ product, description, styles }) {
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={420}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className={styles.summary}>
        <h1 className={styles.title}>{product.name}</h1>
        <div
          className={styles.htmlContent}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
