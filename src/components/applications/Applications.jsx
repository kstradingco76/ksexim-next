import React from "react";

const Applications = () => {
  // You can replace these with your actual image paths
  const images = [
    "/images/applications/app1.jpg", // Placeholder
    "/images/applications/app2.jpg", // Placeholder
    "/images/applications/app3.jpg", // Placeholder
    "/images/applications/app4.jpg", // Placeholder
    "/images/applications/app5.jpg", // Placeholder
    "/images/applications/app6.jpg", // Placeholder
    "/images/applications/app7.jpg", // Placeholder
    "/images/applications/app8.jpg", // Placeholder
    "/images/applications/app9.jpg", // Placeholder
  ];

  return (
    <div className="container">
      <h1 className="title">Applications</h1>
      <div className="collage">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img src={src} alt={`Application ${index + 1}`} className="image" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          text-align: center;
        }
        .title {
          margin-bottom: 2rem;
          font-size: 2.5rem;
          font-weight: bold;
        }
        .collage {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .image-wrapper {
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .image-wrapper:hover .image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Applications;
