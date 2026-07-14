import React, { useState } from "react";
import styles from "../../styles/Why.module.css";
import {
  Goal,
  Flag,
  Users,
  Eye,
  Factory,
  ArrowUpRight,
} from "lucide-react";


import welding from "../../assets/Home/robot.png";
import robot from "../../assets/Home/welding.png";
import steel from "../../assets/Home/steel.png";
import solar from "../../assets/Home/solar.png";
const GoalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <line x1="12" y1="12" x2="12" y2="4" />
    <polygon points="12,4 17,6.5 12,9" fill="currentColor" strokeWidth="1" />
  </svg>
);

const MissionIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <line x1="4" y1="16" x2="20" y2="16" />
    <line x1="12" y1="16" x2="12" y2="21" />
    <line x1="8" y1="5" x2="11" y2="16" />
    <line x1="12" y1="5" x2="15" y2="16" />
    <line x1="16" y1="5" x2="19" y2="16" />
  </svg>
);

const ClientIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const VisionIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

const WhyPartner = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = [
    {
      num: "01",
      title: "Our Goals",
      text: "Our goal is to provide excellent quality products, which satisfy every need of our clients adequately and serve them well.",
      icon: <Goal size={30} strokeWidth={2} />,
    },
    {
      num: "02",
      title: "Our Mission",
      text: "Our mission is to work hard to take care of whatever our clients want now and in the future and prosper doing so.",
      icon: <Flag size={30} strokeWidth={2} />,
    },
    {
      num: "03",
      title: "Our Client",
      text: "Our aim is to keep thriving tirelessly to reach the core of the satisfaction of our clients with our amazing services. We make client happy.",
      icon: <Users size={30} strokeWidth={2} />,
    },
    {
      num: "04",
      title: "Our Vision",
      text: "Big or small we have delivered every project on time and to customers satisfaction.",
      icon: <Eye size={30} strokeWidth={2} />,
    },
  ];

  return (
    <section className={styles["why-section"]}>
      <div
        className={styles.bgOverlay}
      />
      <div className={styles["section-head"]}>
        <span className={styles.tag}>• Why   <label style={{ color: "#293F67" }}>Choose us</label></span>
        <div className={styles.center}>
          <h2>
            Why Partner with <span>L & R GREEN INDIA?</span>
          </h2>
          <p className={styles.subtitle}>
            Since its inception and till date – metalsquare has a 100% success
            rate. Reputation in
            <br />
            market & credit worthiness amongst vendors
          </p>
          <div className={styles.divider} />
        </div>
      </div>

      <div
        className={styles.whyGrid}
        onMouseLeave={() => setActiveIndex(1)}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className={`${styles.whyCard} ${activeIndex === index ? styles.active : ""
              }`}
          >
            <div className={styles.topArea}>
              <div className={styles.iconBox}>
                {item.icon}
              </div>

              <span className={styles.number}>
                {item.num}
              </span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <span className={styles.bottomLine}></span>
          </div>
        ))}
      </div>


      {/* down */}


      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={`${styles.card} ${styles.blueCard}`}>

          <div className={styles.iconCircle}>
            <Factory size={38} strokeWidth={2} />
          </div>
          <h2>
            TECHNICAL
            <br />
            EXCELLENCE
          </h2>
        </div>

        {/* Card 2 */}

        <div className={`${styles.card} ${styles.imageCard}`}>
          <img src={welding} alt="" />
          <div className={styles.overlay}></div>
        </div>

        {/* Card 3 */}

        <div className={`${styles.card} ${styles.whiteCard}`}>
          <h3>
            ADVANCED FABRICATION
            <br />
            TECHNOLOGY
          </h3>
          <img src={robot} alt="" />
        </div>

        {/* Card 4 */}

        <div className={`${styles.card} ${styles.imageCard}`}>
          <img src={steel} alt="" />
          <div className={styles.overlay}></div>
        </div>

        {/* Card 5 */}

        <div className={`${styles.card} ${styles.blueCard}`}>
          <div className={styles.buildBox}>
            BUILD
            <br />
            FAST
          </div>
        </div>

        {/* Card 6 */}
        <div className={`${styles.card} ${styles.imageCard}`}>
          <img src={solar} alt="" />
          <div className={styles.overlay}></div>
        </div>
      </div>

    </section>
  );
};

export default WhyPartner;
