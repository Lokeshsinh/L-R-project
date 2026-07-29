import React, { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Brochure.module.css";
import {
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Brochure = () => {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Company<br />
            <span>Brochure
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Efficient, durable, and fully equipped modular office solutions designed
            to support seamless operations at solar power project sites.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ABOUT SECTION */}
      <section className={styles.aboutSec}>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutContainer}>
            <h2 >About L&R <span>Enterprises</span></h2>
            <div className={styles.divider} />
          </div>
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
      <section className={styles.cta}>
        <h2>Download Company Profile Now</h2>
        <p>
          Connect with our team to explore our brochure and discover durable, efficient, and
          fully customized solutions tailored to your project needs.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBoxs}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>


      <Footer />
    </div>
  );
};

export default Brochure;
