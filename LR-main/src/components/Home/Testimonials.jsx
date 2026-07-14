import React, { useState } from "react";
import styles from "../../styles/Testimonials.module.css";

const testimonialsData = [
  {
    quote:
      "The precision L&R brought to our warehouse project was exceptional. Their adherence to the 100% success mandate meant we faced zero delays during the structural phase.",
    name: "AMIT SHARMA",
    role: "Warehouse Project - Customer",
    active: false,
  },
  {
    quote:
      "Building a multi-span PEB structure requires technical mastery. L&R Enterprises delivered exactly that. Their reputation for a 100% success rate is well-earned.",
    name: "RAJESH GUPTA",
    role: "PEB Structure - customer",
    active: true,
  },
  {
    quote:
      "Partnering with L&R has been a strategic advantage, with their industrial-grade engineering, solar fastener manufacturing expertise, and consistent on-time delivery setting them apart in the industry.",
    name: "SNEHA REDDY",
    role: "Heavy-Machinery Plant - Hyderabad",
    active: false,
  },
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className={styles.testimonialSection}>
      <div
        className={styles.bgOverlay}
        style={{ backgroundImage: "url('/Images/built2.png')" }}
      />
      <div className={styles.headerContainer}>
        <span className={styles.tag}>• What Our Client Says</span>
        <h2>
          Industrial Excellence Through <br />
          <span className={styles.blueText}>the Eyes of Our Partners</span>
        </h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cardContainer}>
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === hoveredIndex ? styles.activeCard : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.quoteIcon}>“</div>
            <p className={styles.quoteText}>"{item.quote}"</p>

            <div className={styles.authorBlock}>
              <div className={styles.iconBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil-line-icon lucide-pencil-line"
                >
                  <path d="M13 21h8" />
                  <path d="m15 5 4 4" />
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                </svg>
              </div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{item.name}</h4>
                <p className={styles.authorRole}>{item.role}</p>
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
