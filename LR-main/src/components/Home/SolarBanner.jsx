import React from 'react';
import styles from '../../styles/SolarBanner.module.css';

const SolarBanner = ({
  heading,
  description,
  imgSrc,
  imgAlt,
  watermark,
}) => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.watermark}>{watermark || 'IN INDIA'}</div>

      <div className={styles.leftContent}>
        <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        <p>{description}</p>
      </div>

      <div className={styles.rightContent}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className={styles.solarImg}
        />
      </div>
    </section>
  );
};

export default SolarBanner;
