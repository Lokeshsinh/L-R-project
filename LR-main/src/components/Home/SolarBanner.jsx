import React from 'react';
import styles from '../../styles/SolarBanner.module.css';
import solar1 from '../../assets/Home/solar1.png'
import solar3 from '../../assets/Home/solar3.png'
const SolarBanner = ({
  heading,
  description,
  imgSrc,
  imgAlt,
  watermark,
}) => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerSectionHidden}>
        <h1>L & R GREEN INDIA</h1>
        <h1>L & R GREEN INDIA</h1>
        <h1>L & R GREEN INDIA</h1>
        <h1>L & R GREEN INDIA</h1>
        <h1>L & R GREEN INDIA</h1>
      </div>
      <div className={styles.solarBannerFlex}>
        {/* Text */}
        <div className={styles.SolarBannerText}>
          <h1>High-Performance Solar
            <br />Fasteners and Component supplier</h1>
          <p>L&R Green India Pvt Ltd manufactures high-quality solar fasteners and components for residential, commercial, and utility-scale projects, including roof-mounted and ground-mounted systems, using durable stainless steel and coated alloy steel for long-lasting performance and reliability.</p>

          <div className={styles.bannerSloarBottom}>
            <img src={solar3} alt='error' />
          </div>
        </div>

        {/* image */}
        <div className={styles.SolarBannerImage}>
          <div className={styles.SolarBannerImg}>
            <img src={solar1} alt='solar' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarBanner;
