import React from "react";
import { useState } from "react";
import styles from "./HeroBanner.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import homeBanner1 from '../../assets/Home/homeBanner1.png'
import buildingImg from '../../assets/Home/buildImg.png'

function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  //     }, 5000);

  //     return () => clearInterval(timer);
  //   }, []);

  // Next Slide
  const nextSlide = () => {
    if (current === 2) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  // Previous Slide
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <section className={styles.hero}>
      {/* ================= Slide 1 ================= */}
      
      <div
        className={`${styles.slide} ${current === 1 ? styles.active : ""
          }`}
      >
      <img src={homeBanner1} alt="Hero" className={styles.bgImage} />

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Watermark Text */}
      <div className={styles.watermark}>
        <h1>PRE-ENGINEERED BUILD AND SOLAR</h1>
      </div>

      {/* Hero Content */}
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.leftContent}>


          <h1 className={styles.title}>
            L&R GREEN INDIA PVT LTD <br />PRECISION FABRICATION
          </h1>

          <p className={styles.description}>
            Manufacturer of prefabricated structures, mild steel
            containers & prefabricated cabins and solar.
            <br />
            Established in 2015, New Delhi.
          </p>

          <button className={styles.heroBtn}>
            <span>All Category</span>
          </button>

        </div>

        {/* Building Image */}
        <div className={styles.centerImage}>
          <img src={buildingImg} alt="Building" />
        </div>

        {/* Right Statistics */}
        <div className={styles.statsCard}>
          <div className={styles.statBox}>
            <h2>500+</h2>
            <p>Completed Projects</p>
          </div>

          <div className={styles.statBox}>
            <h2>25+</h2>
            <p>Years Of Experience</p>
          </div>

          <div className={styles.statBox}>
            <h2>900+</h2>
            <p>Happy Clients</p>
          </div>

          <div className={styles.statBox}>
            <h2>150+</h2>
            <p>Team Workers</p>
          </div>
        </div>

      </div>
      </div>

      {/* ================= Slide 2 ================= */}

      {/* <div
        className={`${styles.slide} ${current === 1 ? styles.active : ""
          }`}
      >
        <img
          src="/Images/hero2.jpg"
          alt="Hero 2"
          className={styles.bgImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <span className={styles.subtitle}>
            QUALITY • INNOVATION • TRUST
          </span>

          <h1 className={styles.title}>
            PRE-ENGINEERED
            <br />
            BUILDINGS
          </h1>

          <p className={styles.description}>
            Durable steel structures designed for industries,
            commercial projects, warehouses and customized
            infrastructure requirements.
          </p>

          <button className={styles.button}>
            View Projects
          </button>
        </div>
      </div> */}

      {/* ================= Slide 3 ================= */}

      {/* <div
        className={`${styles.slide} ${current === 2 ? styles.active : ""
          }`}
      >
        <img
          src="/Images/hero3.jpg"
          alt="Hero 3"
          className={styles.bgImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <span className={styles.subtitle}>
            BUILDING TOMORROW
          </span>

          <h1 className={styles.title}>
            SMART MODULAR
            <br />
            SOLUTIONS
          </h1>

          <p className={styles.description}>
            We deliver innovative prefabricated solutions that
            combine modern design, strength and long-lasting
            performance for every project.
          </p>

          <button className={styles.button}>
            Contact Us
          </button>
        </div>
      </div> */}

      {/* ================= Arrows ================= */}

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
      >
        <ChevronLeft size={28} strokeWidth={2.5} />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
      >
        <ChevronRight size={28} strokeWidth={2.5} />
      </button>
    </section>
  );
}

export default HeroBanner;