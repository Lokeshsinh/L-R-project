import { useState, useEffect } from "react";
import styles from "../../styles/Slider.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from '../../assets/Home/img1.png';
import img2 from '../../assets/Home/img2.png';
import img3 from '../../assets/Home/img3.png';
import img4 from '../../assets/Home/img4.png';
import img5 from '../../assets/Home/img5.jpg';
import img6 from '../../assets/Home/img6.jpg'
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Multi Storey Building",
    desc: "Our multi-storey pre-engineered buildings are designed to maximize vertical space while ensuring exceptional strength and stability. Built with high-quality steel structures, they are ideal for commercial complexes, office buildings, industrial facilities, educational institutions, and residential projects, offering faster construction, cost efficiency, and long-lasting performance.",
    img: img1,
    path: "/lgsf-modular",
  },
  {
    title: "Factory Building",
    desc: "Our factory buildings are designed to provide strong, spacious, and efficient environments for modern manufacturing and industrial operations. Built with high-quality steel structures, they offer excellent durability, clear-span spaces, faster construction, and flexible layouts, making them ideal for manufacturing units, production facilities, warehouses, and various industrial applications.",
    img: img2,
    path: "/factory-building",
  },
  {
    label: "Railway Shelters",
    title: "Railway Shelters",
    desc: "Our railway shelters are designed to provide safe, durable, and weather-resistant spaces for passengers and railway personnel. Built with high-quality steel structures, they offer excellent strength, low maintenance, and long-lasting performance, making them ideal for railway platforms, waiting areas, passenger shelters, and other railway infrastructure requirements.",
    img: img3,
    path: "/prefab-railway-shelters",
  },

  {
    label: "Industrial Enclosures",
    title: "Industrial Enclosures",
    desc: "Our prefab industrial enclosures are designed to provide durable, secure, and efficient spaces for industrial applications. Built with high-quality steel structures and insulated panels, they offer excellent strength, weather resistance, thermal insulation, and fast installation, making them ideal for machinery enclosures, equipment housing, utility areas, production spaces.",
    img: img4,
    path: "/prefab-industrial-enclosures",
  },
  {
    label: "Premium MS Container",
    title: "Premium MS Container",
    desc: "Our premium MS containers are manufactured using high-quality mild steel to deliver exceptional strength, security, durability, and weather resistance. Ideal for storage, portable offices, site accommodation, equipment housing, and customized industrial applications, they provide a reliable, low-maintenance solution with flexible design options to meet diverse project requirements.",
    img: img5,
    path: "/premium-ms-containers",
  },
  {
    label: "Sandwich Panel",
    title: "Sandwich Panel",
    desc: "Our sandwich panels are manufactured with high-quality insulated cores and durable steel sheets to provide outstanding thermal insulation, fire resistance, and structural strength. Ideal for warehouses, cold storage facilities, clean rooms, industrial buildings, and prefab structures, they ensure energy efficiency, quick installation, and long-lasting performance in all weather conditions.",
    img: img6,
    path: "/sandwich-panel",
  },
];
const InnovationSlider = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1200) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hanlderRight = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };
  const handlerLeft = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  return (
    <section className={styles["innovation-section"]}>
      {/* Header */}
      <div className={styles["section-head"]}>
        <div className={styles["head-left"]}>
          <span className={styles.tag}>• Our Works</span>
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
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
          }}
        >
          {slides.concat(slides.slice(0, 2)).map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.img} alt="" />
              <div className={styles.overlay}>
                <div className={styles.line}></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button onClick={() => {
                  navigate(item.path);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}>Read More →</button>
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