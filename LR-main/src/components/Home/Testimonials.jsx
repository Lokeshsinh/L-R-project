import React, { useState } from "react";
import styles from "../../styles/Testimonials.module.css";
import { Quote, PenTool } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "AMIT SHARMA",
    designation: "Warehouse Project - Customer",
    text: `"The precision L&R brought to our warehouse project was exceptional. Their adherence to the 100% success mandate meant we faced zero delays during the structural phase."`,
    dark: false,
  },
  {
    id: 2,
    name: "RAJESH GUPTA",
    designation: "PEB Structure - Customer",
    text: `"Building a multi-span PEB structure requires technical mastery. L&R Enterprises delivered exactly that. Their reputation for a 100% success rate is well-earned."`,
    dark: true,
  },
  {
    id: 3,
    name: "SNEHA REDDY",
    designation: "Heavy-Machinery Plant - Hyderabad",
    text: `"Partnering with L&R has been a strategic advantage, with their industrial-grade engineering, solar fastener manufacturing expertise, and consistent on-time delivery setting them apart in the industry."`,
    dark: false,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className={styles.testimonialSection}>
      <div
        className={styles.bgOverlay}
      />
      <div className={styles.headerContainer}>
        <span className={styles.tag}>• What Our <lable style={{ color: "#293F67" }}> Client Says</lable></span>
        <h2>
          Industrial Excellence Through <br />
          <span className={styles.blueText}>the Eyes of Our Partners</span>
        </h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cardContainer}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === hoveredIndex ? styles.activeCard : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.quote}><Quote className={styles.lightCard} size={55} strokeWidth={2.8} /></div>
            <p className={styles.quoteText}>"{item.text}"</p>

            <div className={styles.authorBlock}>
              <div
                className={`${styles.iconBox} ${item.dark ? styles.iconWhite : ""
                  }`}
              >
                <PenTool size={28} />
              </div>

              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{item.name}</h4>
                <p className={styles.authorRole}>{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scrollbarContainer}>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollIndicator}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
