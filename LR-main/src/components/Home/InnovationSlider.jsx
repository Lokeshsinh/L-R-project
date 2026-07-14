import { useState, useEffect } from "react";
import styles from "../../styles/Slider.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from '../../assets/Home/img1.png';
import img2 from '../../assets/Home/img2.png';
import img3 from '../../assets/Home/img3.png';
import img4 from '../../assets/Home/img4.png';
import img5 from '../../assets/Home/img5.jpg';
import img6 from '../../assets/Home/img6.jpg'

const slides = [
  {
    title: "Multi Storey Building",
    desc: "Our multi-storey pre-engineered buildings are designed to maximize vertical space while ensuring exceptional strength and stability. Built with high-quality steel structures, they are ideal for commercial complexes, office buildings, industrial facilities, educational institutions, and residential projects, offering faster construction, cost efficiency, and long-lasting performance.",
    img: img1,
  },
  {
    title: "Pre-Engineered Building",
    desc: "Optimized steel structures are engineered to deliver superior strength, speed, and efficiency in modern construction. Designed for rapid assembly, these systems reduce build time while maintaining high precision and quality. Their clear-span capability maximizes usable space by eliminating unnecessary supports, allowing for flexible and open layouts.",
    img: img2,
  },
  {
    label: "Multi-Storey Building",
    title: "Multi-Storey Building",
    desc: "Our multi-storey pre-engineered buildings are designed to maximize vertical space while ensuring exceptional strength and stability. Built with high-quality steel structures, they are ideal for commercial complexes, office buildings, industrial facilities, educational institutions, and residential projects, offering faster construction, cost efficiency, and long-lasting performance.",
    img: img3,
  },


  {
    label: "Prefab Building",
    title: "Prefab Building",
    desc: "Our prefab buildings are engineered for fast installation, durability, and cost-effective construction. Designed using high-quality steel structures and insulated panels, they provide reliable solutions for offices, accommodations, commercial spaces, schools, healthcare facilities, and industrial projects while ensuring superior strength and long-term performance.",
    img: img4,
  },
  {
    label: "MS Container",
    title: "MS Container",
    desc: "Our MS containers are manufactured using premium mild steel to deliver exceptional strength, security, and weather resistance. Ideal for storage, portable offices, site accommodation, equipment housing, and customized industrial applications, they offer a durable, low-maintenance solution with flexible design options to meet diverse project requirements.",
    img: img5,
  },
  {
    label: "Sandwich Panel",
    title: "Sandwich Panel",
    desc: "Our sandwich panels are manufactured with high-quality insulated cores and durable steel sheets to provide outstanding thermal insulation, fire resistance, and structural strength. Ideal for warehouses, cold storage facilities, clean rooms, industrial buildings, and prefab structures, they ensure energy efficiency, quick installation, and long-lasting performance in all weather conditions.",
    img: img6,
  },
];

const InnovationSlider = () => {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlerLeft = () => {
    setCurrent(prev => (prev + 1) % slides.length)
  }
  const hanlderRight = () => {
    setCurrent(prev => (prev - 1 ) % slides.length)
  }
  return (
    <section className={styles["innovation-section"]}>
      {/* Header */}
      <div className={styles["section-head"]}>
        <div className={styles["head-left"]}>
          <span className={styles.tag}>• Why Choose us</span>
          <h2>
            Powering Sustainable<br />
            <span>Innovation</span>
          </h2>
          <div className={styles.divider} />
        </div>
        <p className={styles["head-desc"]}>
          Engineering the next generation of structural systems
          with a focus on longevity, efficiency, and industrial
          precision.
        </p>
      </div>

      {/* 3-Card Layout */}
      <div className={styles.sliderViewport}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateX(-${current * 33.333}%)`,
          }}
        >
          {slides.concat(slides.slice(0, 2)).map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.img} alt="" />
              <div className={styles.overlay}>
                <div className={styles.line}></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button>Read More →</button>
              </div>
              <div className={styles.bottomTitle}>
                <div className={styles.smallLine}></div>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows bottom right */}
      <div className={styles["slider-controls"]}>
        <button aria-label="Previous" onClick={hanlderRight} ><ChevronLeft /></button>
        <button aria-label="Next" onClick={handlerLeft}>  <ChevronRight /></button>
      </div>
    </section>
  );
};

export default InnovationSlider;