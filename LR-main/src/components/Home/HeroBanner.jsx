import React from "react";
import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import buildingImg from '../../assets/Home/buildImg.png'
import product from '../../assets/Home/product.png'
import previewImg from '../../assets/conatiners/HomeConatiner/bannercard.png'
import user from '../../assets/conatiners/HomeConatiner/user.png'
import container from '../../assets/banner3.png'
function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const totalSlides = 4;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % totalSlides);
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, []);

  // Next Slide
  const nextSlide = () => {
    if (current === 3) {
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


      {/* ================= Slide 2 ================= */}
      {/* <div
        className={`${styles.slide} ${current === 1 ? styles.active : ""
          }`}
      >
        <img src={homeBanner1} alt="Hero" className={styles.bgImage} />

    
        <div className={styles.overlay}></div>

        <div className={styles.watermark}>
          <h1>PRE-ENGINEERED BUILD AND SOLAR</h1>
        </div>

        <div className={styles.container}>

  
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

          <div className={styles.centerImage}>
            <img src={buildingImg} alt="Building" />
          </div>

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
      </div> */}


      <div
        className={`${styles.slide} ${current === 1 ? styles.active : ""}`}
      >
        {/* <img
          src={homeBanner1}
          alt="L&R Green India"
          className={styles.bgImage}
        /> */}

        {/* Light overlay */}
        <div className={styles.overlay}></div>

        {/* Top Brand Area */}
        <div className={styles.topBrand}>
          <h1>L&R PREFAB SOLAR INDIA PVT LTD</h1>
          <div className={styles.brandLine}>
            <span></span>
            <p>PRECISION FABRICATION</p>
            <span></span>
          </div>
        </div>

        {/* Main Banner Content */}
        <div className={styles.container}>

          {/* Left Description */}
          <div className={styles.leftContent}>
            <h2>Smart Structures. Precision Fabrication.</h2>
            <p className={styles.description}>
              Manufacturer of prefabricated structures,
              mild steel containers & prefabricated
              cabins and solar.
              <br />
              Established in 2015,
              <br />
              New Delhi.
            </p>

            <button className={styles.heroBtn}>
              <span>All Category</span>
              <ArrowRight className={styles.heroArrow} size={20} />
            </button>
          </div>

          {/* Center Building */}
          <div className={styles.centerImage}>
            <img
              src={buildingImg}
              alt="Prefabricated Structure"
            />
          </div>

          {/* Right Statistics */}
          <div className={styles.statsCard}>

            <div className={styles.statBox}>
              <h2>500+</h2>
              <p>
                Completed
                <br />
                Projects
              </p>
            </div>

            <div className={styles.statBox}>
              <h2>25+</h2>
              <p>
                Years Of
                <br />
                Experience
              </p>
            </div>

            <div className={styles.statBox}>
              <h2>900+</h2>
              <p>
                Happy
                <br />
                Clients
              </p>
            </div>

            <div className={styles.statBox}>
              <h2>150+</h2>
              <p>
                Team
                <br />
                Workers
              </p>
            </div>

          </div>

        </div>
      </div>



      {/* ================= Slide 3 ================= */}
      {/* <div
        className={`${styles.heroPanel} ${current === 2 ? styles.active : ""
          }`}
      >
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
        <div className={styles.productImage}>
          <img
            src={product}
            alt="Solar Components"
          />
        </div>
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


      </div> */}


      <div className={`${styles.heroPanel} ${current === 2 ? styles.active : ""
        }`}>
        {/* <img
          src={banner}
          alt="Solar Fastener"
          className={styles.heroBg}
        /> */}

        {/* Do NOT use dark overlay */}
        <div className={styles.overlay}></div>
        <div className={styles.heroHeading}>
          <h3>L&amp;R PREFAB SOLAR INDIA PVT LTD</h3>

          <p className={styles.heroSubHeading}>
            SOLAR FASTENER AND COMPONENT MANUFACTURE AND SUPPLIER
          </p>

          <div className={styles.backgroundTitle}>
            L&amp;R FASTENER
          </div>
        </div>

        <div className={styles.heroFlexUser}>
          <div className={styles.heroContent}>
            <p>
              We manufacture high-quality solar fasteners and related
              components for durable, efficient solar installations.
              Established in 2015 in New Delhi, delivering reliable
              solutions.
            </p>
            <button className={styles.heroBtn}>
              <span>All Category</span>

              <ArrowRight
                className={styles.heroArrow}
                size={20}
              />
            </button>
          </div>
          <div className={styles.productImage}>
            <img
              src={product}
              alt="Solar Components"
            />
          </div>

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
      </div>


      {/* ===============slide4====================== */}

      {/* ================= Slide 4 ================= */}

      {/* <div
        className={`${styles.containerHeroPanel} ${current === 3 ? styles.active : ""
          }`}
      >
        <img
          src={banner1}
          alt="Solar Fastener"
          className={styles.containerHeroBg}
        />

        <div className={styles.containerOverlay}></div>
        <div className={styles.containerHeading}>
          <h3>L&amp;R GREEN INDIA PVT LTD</h3>

          <h1>
            ENGINEERED FOR STRENGTH. BUILT FOR MOBILITY.
          </h1>
        </div>
        <div className={styles.containerContent}>
          <p>
            High-quality modular steel containers for construction, oil & gas,
            renewable energy, industrial projects, railways, and infrastructure. <br />
            Built for durability, rapid deployment, and performance across India.
          </p>
          <button className={styles.containerBtn}>
            <span>All Category</span>
            <ArrowRight
              className={styles.containerArrow}
              size={20}
            />
          </button>
        </div>
        <div className={styles.containerProductImage}>
          <img
            src={container}
            alt="Solar Components"
          />
        </div>

        <div className={styles.containerStatsCard}>
          <div className={styles.containerStatItem}>
            <h2>500+</h2>
            <p>Completed Projects</p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>25+</h2>
            <p>Years Of Experience</p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>900+</h2>
            <p>Happy Clients</p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>150+</h2>
            <p>Team Workers</p>
          </div>
        </div>
      </div> */}


      <div
        className={`${styles.containerHeroPanel} ${current === 3 ? styles.active : ""
          }`}
      >
        {/* Existing background */}
        {/* <img
          src={banner1}
          alt="L&R Green India"
          className={styles.containerHeroBg}
        /> */}
        <div className={styles.containerOverlay}></div>
        <div className={styles.containerCircle}></div>
        <div className={styles.containerDots}></div>
        <div className={styles.containerShape}></div>
        <div className={styles.containerHeading}>
          <h3>L&amp;R PREFAB SOLAR INDIA PVT LTD</h3>
          <h1>
            ENGINEERED FOR STRENGTH.
            <br />
            BUILT FOR MOBILITY.
          </h1>
        </div>
        <div className={styles.containerContent}>
          <p>
            Durable modular steel containers built for strength,
            mobility, and rapid deployment across India.
          </p>
          <button className={styles.containerBtn}>
            <span>All Category</span>
            <ArrowRight
              className={styles.containerArrow}
              size={21}
            />
          </button>
        </div>
        <div className={styles.containerProductImage}>
          <img
            src={container}
            alt="Modular Steel Container"
          />
        </div>
        <div className={styles.containerStatsCard}>
          <div className={styles.containerStatItem}>
            <h2>500+</h2>
            <p>
              Completed
              <br />
              Projects
            </p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>25+</h2>
            <p>
              Years Of
              <br />
              Experience
            </p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>900+</h2>
            <p>
              Happy
              <br />
              Clients
            </p>
          </div>
          <div className={styles.containerStatItem}>
            <h2>150+</h2>
            <p>
              Team
              <br />
              Workers
            </p>
          </div>
        </div>
      </div>




      {/* arrow */}
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