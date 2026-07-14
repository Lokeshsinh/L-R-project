import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Brochure.module.css";

const Brochure = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/brochurehero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>COMPANY <br /><span>BROCHURE</span></h1>
          <p className={styles.subtitle}>Efficient, durable, and fully equipped modular office solutions designed to support seamless operations at solar power project sites.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSec}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>About <span>L&amp;R Enterprises</span></h2>
          <div className={styles.divider} />
          <div className={styles.aboutTextBlock}>
            <p>L&amp;R Enterprises delivers high-quality prefabricated and pre-engineered building solutions across diverse industries, including solar infrastructure projects. Our expertise, innovative approach, and strong execution capabilities make us a trusted partner for modern infrastructure and solar power developments.</p>
            <p>Our brochure provides detailed insights into our products, project experience, and industry-specific solutions. It highlights our work across infrastructure, industrial, solar, and modular construction projects along with our design, manufacturing, and turnkey capabilities.</p>
            <p>Get a complete overview of our services, solutions, and project portfolio. Click below to download the PDF brochure and discover how L&amp;R Enterprises can support your next project.</p>
          </div>
          <a
            href="/LR-Green-India-Brochure.pdf"
            download
            className={styles.downloadBtn}
          >
            Download Now
          </a>
        </div>
      </section>

      {/* DOWNLOAD CTA BANNER */}
      <section className={styles.downloadBanner}>
        <div className={styles.downloadBannerInner}>
          <h2>Download Company Profile Now</h2>
          <p>Connect with our team to explore our brochure and discover durable, efficient, and fully customized solutions tailored to your project needs.</p>
          <Link to="/contact" className={styles.contactBtn}>Contact US &nbsp;→</Link>
        </div>
      </section>

      {/* CONNECT BANNER */}
      <section className={styles.connectBanner}>
        <div className={styles.connectInner}>
          <h2>LET'S CONNECT L&amp;R GREEN INDIA</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brochure;
