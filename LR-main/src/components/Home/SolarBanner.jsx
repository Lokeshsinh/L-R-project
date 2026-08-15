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
    <section className={styles.mfgBand}>
      <div className={styles.scrollWrap}>
      </div>

      <div className={styles.mfgContainer}>
        <div className={styles.mfgText}>
          <h2>
           High-Performance Solar<br />
           Fasteners and Component supplier

          </h2>
          <p>
          L&R PREFAB SOLAR INDIA PVT LDT manufactures high-quality solar fasteners and components 
          for residential, commercial, and utility-scale projects, including roof-mounted and ground-mounted 
          systems, using durable stainless steel and coated alloy steel for long-lasting performance and reliability.

          </p>
          <div className={styles.LastImage}>
            <img src={solar3} alt="png" />
          </div>
        </div>
        <div className={styles.mfgImgWrapper}>
          <img
            src={solar1}
            alt="Manufacturing"
          />
        </div>
      </div>
    </section>
  );
};

export default SolarBanner;
