import React, { useState, useEffect } from "react";
import styles from "../../styles/Hero.module.css";

const slides = [
  {
    subtitle: "L&R GREEN INDIA PVT LTD",
    title: "PRECISION FABRICATION",
    watermark: "PRE-ENGINEERED BUILD AND SOLAR",
    description:
      "Manufacturer of prefabricated structures, mild steel containers & prefabricated cabins and solar. Established in 2015, New Delhi.",
    bgImage: "/Images/hero1.jpg",
    productImg: "/Images/herohome.png",
    btnText: "All Category",
    link: "/prefab-residential-house",
  },
  {
    subtitle: "L&R GREEN INDIA PVT LTD",
    title: "SOLAR FASTENER SOLUTIONS",
    watermark: "SOLAR FASTENER AND COMPONENT SUPPLIERS",
    description:
      "Manufacturer of prefabricated structures, mild steel containers & prefabricated cabins and solar. Established in 2015, New Delhi.",
    bgImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80",
    productImg: "/Images/safeurban.png",
    btnText: "All Category",
    link: "/prefab-residential-house",
  },
  {
    subtitle: "L&R GREEN INDIA PVT LTD",
    title: "SOLAR FASTENER AND COMPONENT MANUFACTURE AND SUPPLIER",
    watermark: "SOLAR FASTENER AND COMPONENT SUPPLIERS",
    description:
      "We manufacture high-quality solar fasteners and related components for durable, efficient solar installations. Established in 2015 in New Delhi, delivering reliable solutions.",
    bgImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80",
    productImg: "/Images/solar fastner.png",
    btnText: "All Category",
    link: "/prefab-residential-house",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles["hero-container"]}>
      {slides.map((item, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`${styles["hero-slide"]} ${isActive ? styles["active"] : ""}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.75) 100%), url(${item.bgImage})`,
            }}
          >
            <div className={styles["watermark"]}>{item.watermark}</div>

            <div className={styles["hero-inner"]}>
              {/* Headings */}
              <div className={styles["headings-container"]}>
                <span className={styles["slide-subtitle"]}>
                  {item.subtitle}
                </span>
                <h1 className={styles["slide-title"]}>{item.title}</h1>
              </div>

              {/* Bottom Section */}
              <div className={styles["bottom-row"]}>
                {/* Left Description */}
                <div className={styles["left-col"]}>
                  <p className={styles["slide-description"]}>
                    {item.description}
                  </p>
                  <button
                    className={styles["primary-btn"]}
                    onClick={() => {
                      if (item.link) {
                        window.location.href = item.link;
                      }
                    }}
                  >
                    {item.btnText}{" "}
                    <span className={styles["arrow-icon"]}>→</span>
                  </button>
                </div>

                {/* Center Image */}
                <div className={styles["center-col"]}>
                  <div className={styles["product-image-container"]}>
                    <img
                      src={item.productImg}
                      alt={item.title}
                      className={styles["product-image"]}
                    />
                  </div>
                </div>

                {/* Right Stats */}
                <div className={styles["right-col"]}>
                  <div className={styles["stats-card"]}>
                    <div className={styles["stats-cell"]}>
                      <h3>500+</h3>
                      <p>Completed Projects</p>
                    </div>
                    <div className={styles["stats-cell"]}>
                      <h3>25+</h3>
                      <p>Years Of Experience</p>
                    </div>
                    <div className={styles["stats-cell"]}>
                      <h3>900+</h3>
                      <p>Happy Clients</p>
                    </div>
                    <div className={styles["stats-cell"]}>
                      <h3>150+</h3>
                      <p>Team Workers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <button
        className={`${styles["arrow-btn"]} ${styles["left-arrow"]}`}
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className={`${styles["arrow-btn"]} ${styles["right-arrow"]}`}
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Indicators */}
      <div className={styles["dots-container"]}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles["dot"]} ${index === current ? styles["active-dot"] : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
