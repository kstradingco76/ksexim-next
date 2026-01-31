"use client";

import { useState } from "react";
import styles from "./page.module.css";

const certificates = [
  {
    id: 1,
    name: "APEDA",
    year: "Agricultural & Processed Food Products Export Development Authority",
    img: "/images/APEDA_Certificate.jpg",
  },
  {
    id: 2,
    name: "FSSAI",
    year: "Food Safety and Standards Authority of India",
    img: "/images/FSSAI_Certificate.jpg",
  },
  {
    id: 3,
    name: "IEC",
    year: "International Export Certification",
    img: "/images/IEC_Certificate.jpg",
  },
  {
    id: 4,
    name: "MSME",
    year: "Micro, Small & Medium Enterprises",
    img: "/images/MSME_Certificate.jpg",
  },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Certificates</h1>
      <p className={styles.subtitle}>Quality Certifications & Awards</p>

      <div className={styles.certificatesGrid}>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={styles.certificateCard}
            onClick={() => openModal(cert)}
          >
            <img src={cert.img} alt={cert.name} />
            <div className={styles.cardInfo}>
              <h3>{cert.name}</h3>
              <p>{cert.year}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className={styles.modal} onClick={handleBackdropClick}>
          <div className={styles.modalContent}>
            <span className={styles.closeBtn} onClick={closeModal}>
              ×
            </span>
            <img src={selectedCert.img} alt={selectedCert.name} />
          </div>
        </div>
      )}
    </div>
  );
}
