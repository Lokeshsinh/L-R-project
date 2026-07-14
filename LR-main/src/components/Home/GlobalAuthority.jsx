import React from "react";
import styles from "../../styles/GlobalAuthority.module.css";
import building from '../../assets/Home/building.png'
import buildingSide from '../../assets/Home/buildingSide.png'
const GlobalAuthority = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.watermarkWrapper}>
        <div className={styles.watermarkTrack}>
          <span className={styles.watermark}>PRE-ENGINEERED</span>
          <span className={styles.watermark}>PRE-ENGINEERED</span>
          <span className={styles.watermark}>PRE-ENGINEERED</span>
          <span className={styles.watermark}>PRE-ENGINEERED</span>
        </div>
      </div>

      <div className={styles.leftContent}>
        <h2>
          Global Authority in Advanced
          <br />cf
          Pre-Engineered Systems
        </h2>
        <p>
          Delivering advanced solutions for diverse infrastructure, our PEB
          systems set industry standards. From multi-storey buildings and
          Pre-Engineered structures to metro stations, data centers, cold
          storage, and stadiums, our expertise ensures strength, efficiency, and
          future-ready construction.
        </p>

        <div className={styles.LetImage}>
          <img  src={buildingSide} alt="error" />
        </div>
      </div>

      <div className={styles.rightPadding}>
        <div className={styles.rightContent}>
          <img
            src={building}
            alt="Pre-Engineered Building"
            className={styles.buildingImg}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Images/building.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalAuthority;
