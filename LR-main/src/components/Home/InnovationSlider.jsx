import { useState } from "react";
import styles from "../../styles/Slider.module.css";

const slides = [
  {
    label: "Multi Storey Building",
    title: "Multi Storey Building",
    desc: "Multi-storey pre-engineered buildings are designed for maximum vertical utilization. Our steel-frame systems provide robust, scalable solutions for commercial complexes, residential towers, and industrial facilities requiring multiple levels with open floor plans.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Pre-Engineered Building",
    title: "Pre-Engineered Building",
    desc: "Optimized steel structures are engineered to deliver superior strength, speed, and efficiency in modern construction. Designed for rapid assembly, these systems reduce build time while maintaining high precision and quality. Their clear-span capability maximizes usable space by eliminating unnecessary supports, allowing for flexible and open layouts.",
    img: "/Images/catlux.jpg",
  },
  {
    label: "Metro Station",
    title: "Metro Station",
    desc: "Our pre-engineered structures are ideal for large-scale transit infrastructure. Engineered for high foot traffic, long spans, and seismic resilience, our metro station structures deliver both functional efficiency and architectural elegance for modern urban transport hubs.",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80",
  },
];

const InnovationSlider = () => {
  const [active, setActive] = useState(1); // start at index 1 so index 0 is left and 2 is right

  const prevSlide = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const nextSlide = () => setActive((p) => (p + 1) % slides.length);

  const leftSlide  = slides[(active - 1 + slides.length) % slides.length];
  const centerSlide = slides[active];
  const rightSlide = slides[(active + 1) % slides.length];

  return (
    <section className={styles["innovation-section"]}>
      {/* Header */}
      <div className={styles["section-head"]}>
        <div className={styles["head-left"]}>
          <span className={styles.tag}>• Why Choose us</span>
          <h2>
            Powering Sustainable<br />
            <span>Innovation</span>
          </h2>
          <div className={styles.divider} />
        </div>
        <p className={styles["head-desc"]}>
          Engineering the next generation of structural systems
          with a focus on longevity, efficiency, and industrial
          precision.
        </p>
      </div>

      {/* 3-Card Layout */}
      <div className={styles["slider-wrap"]}>
        {/* Left image card */}
        <div className={styles["img-card"]}>
          <img src={leftSlide.img} alt={leftSlide.label} />
          <div className={styles["img-label"]}>
            <div className={styles["label-bar"]} />
            <span>{leftSlide.label}</span>
          </div>
        </div>

        {/* Center featured navy card */}
        <div className={styles["featured-card"]}>
          <div className={styles["feat-bar"]} />
          <h3>{centerSlide.title}</h3>
          <p>{centerSlide.desc}</p>
          <button className={styles["read-more"]}>Read More &nbsp;→</button>
        </div>

        {/* Right image card */}
        <div className={styles["img-card"]}>
          <img src={rightSlide.img} alt={rightSlide.label} />
          <div className={styles["img-label"]}>
            <div className={styles["label-bar"]} />
            <span>{rightSlide.label}</span>
          </div>
        </div>
      </div>

      {/* Navigation arrows bottom right */}
      <div className={styles["slider-controls"]}>
        <button type="button" onClick={prevSlide} aria-label="Previous">&#8592;</button>
        <button type="button" onClick={nextSlide} aria-label="Next">&#8594;</button>
      </div>
    </section>
  );
};

export default InnovationSlider;