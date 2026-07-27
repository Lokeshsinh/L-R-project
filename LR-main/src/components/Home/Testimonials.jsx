import React, { useEffect, useState } from "react";
import styles from "../../styles/Testimonials.module.css";
import { Quote, PenTool } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "AMIT SHARMA",
    designation: "Warehouse Project - Customer",
    text: "The precision L&R brought to our warehouse project was exceptional. Their adherence to the 100% success mandate meant we faced zero delays during the structural phase.",
  },
  {
    id: 2,
    name: "RAJESH GUPTA",
    designation: "PEB Structure - Customer",
    text: "Building a multi-span PEB structure requires technical mastery. L&R Enterprises delivered exactly that. Their reputation for a 100% success rate is well-earned.",
  },
  {
    id: 3,
    name: "SNEHA REDDY",
    designation: "Heavy-Machinery Plant - Hyderabad",
    text: "Partnering with L&R has been a strategic advantage, with their industrial-grade engineering, solar fastener manufacturing expertise, and consistent on-time delivery setting them apart in the industry.",
  },
  {
    id: 4,
    name: "RAVI KUMAR",
    designation: "Industrial Shed - Customer",
    text: "The quality of fabrication and installation exceeded our expectations. The team completed the project before schedule.",
  },
  {
    id: 5,
    name: "PRIYA NAIR",
    designation: "Solar Project - Customer",
    text: "Excellent workmanship and outstanding customer support throughout the project. Highly recommended.",
  },
  {
    id: 6,
    name: "VIKAS SINGH",
    designation: "Cold Storage - Customer",
    text: "Professional team, premium quality materials and timely execution. Looking forward to future collaborations.",
  },
];



const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = testimonials.length - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  const indicatorWidth = 180 / (maxSlide + 1);

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.bgOverlay}></div>

      <div className={styles.headerContainer}>
        <span className={styles.tag}>
          • What Our <span style={{ color: "#293F67" }}>Client Says</span>
        </span>

        <h2>
          Industrial Excellence Through <br />
          <span className={styles.blueText}>
            the Eyes of Our Partners
          </span>
        </h2>

        <div className={styles.underline}></div>
      </div>

      {/* Slider */}

      <div className={styles.cardSlider}>
        <div
          className={styles.cardTrack}
          style={{
            transform: `translateX(calc(-${currentSlide} * (100% / ${visibleCards})))`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${hoveredIndex === index ? styles.activeCard : ""
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={styles.quote}>
                <Quote size={55} strokeWidth={2.8} />
              </div>

              <p className={styles.quoteText}>
                "{item.text}"
              </p>

              <div className={styles.authorBlock}>
                <div className={styles.iconBox}>
                  <PenTool size={24} />
                </div>

                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>
                    {item.name}
                  </h4>

                  <p className={styles.authorRole}>
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}

      <div className={styles.scrollbarContainer}>
        <div className={styles.scrollTrack}>
          <div
            className={styles.scrollIndicator}
            style={{
              width: `${indicatorWidth}px`,
              transform: `translateX(${currentSlide * indicatorWidth
                }px)`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;