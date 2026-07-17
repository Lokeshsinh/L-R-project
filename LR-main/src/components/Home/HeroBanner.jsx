import React from "react";
import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import homeBanner1 from '../../assets/Home/homeBanner1.png'
import buildingImg from '../../assets/Home/buildImg.png'
import banner from '../../assets/Home/banner1.png'
import product from '../../assets/Home/product.png'
import heroBg from '../../assets/conatiners/HomeConatiner/banner2.png'
import houseImg from '../../assets/Home/banner3.png'
import previewImg from '../../assets/conatiners/HomeConatiner/bannercard.png'
import user from '../../assets/conatiners/HomeConatiner/user.png'
function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

      <div
        className={`${styles.heroPanel} ${current === 2 ? styles.active : ""
          }`}
      >
        {/* Background */}
        <img
          src={banner}
          alt="Solar Fastener"
          className={styles.heroBg}
        />
        <div className={styles.overlay}></div>

        <div className={styles.heroHeading}>
          <h3>L&amp;R GREEN INDIA PVT LTD</h3>

          <h1>
            SOLAR FASTENER AND COMPONENT
            MANUFACTURE AND SUPPLIER
          </h1>
        </div>

        {/* down */}
        <div className={styles.heroContent}>
          <p>
            We manufacture high-quality solar fasteners and related
            components for durable, efficient solar installations.
            Established in 2015 in New Delhi, delivering reliable
            solutions.
          </p>

          <button className={styles.heroBtn}>
            <span>All Category</span>
            <ArrowRight className={styles.heroArrow} size={20} />
          </button>
        </div>
        {/* downImage */}
        <div className={styles.productImage}>
          <img
            src={product}
            alt="Solar Components"
          />
        </div>
        {/* downRight */}
        <div className={styles.heroStatsCard}>
          <div className={styles.heroStatItem}>
            <h2>500+</h2>
            <p>Completed Projects</p>
          </div>

          <div className={styles.heroStatItem}>
            <h2>25+</h2>
            <p>Years Of Experience</p>
          </div>

          <div className={styles.heroStatItem}>
            <h2>900+</h2>
            <p>Happy Clients</p>
          </div>

          <div className={styles.heroStatItem}>
            <h2>150+</h2>
            <p>Team Workers</p>
          </div>
        </div>


      </div>

      {/* ================= Slide 3 ================= */}

      <div
        className={`${styles.HomeSlider} ${current === 0 ? styles.active : ""
          }`}
      >
        <div className={styles.heroShape}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContents}>
            <h1 className={styles.heroTitle}>
              PRECISION FABRICATION
            </h1>

            <h2 className={styles.heroSubTitle}>
              Pre-Engineered Buildings Segment
            </h2>

            <p className={styles.heroDescription}>
              Manufacturer of prefabricated structures, mild steel containers &
              prefabricated cabins and solar. Established in 2015, New Delhi.
            </p>

            <button className={styles.heroButton}>
              <span>All Category</span>
              <ArrowRight size={20} />
            </button>

            <div className={styles.heroStats}>
              <div className={styles.heroThumb}>
                <img src={previewImg} alt="" />
              </div>

              <div className={styles.heroStat}>
                <h3>500+</h3>
                <p>Completed Projects</p>
              </div>

              <div className={styles.heroStat}>
                <h3>25+</h3>
                <p>Years Of Experience</p>
              </div>

              <div className={styles.heroStat}>
                <h3>900+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={user} alt="Building" />
          </div>
        </div>

      </div>

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