import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../../styles/Products.module.css";
import preEng from "../../assets/Home/preEng.jpg";
import office from "../../assets/Home/office.jpg";
import msContainer from "../../assets/Home/mscontainer.png";
import labour from "../../assets/Home/labour.jpg";
import panelImg from "../../assets/About/user4.jpg";
import warehouseImg from "../../assets/Home/warehouseImg.png";
import cleanRoomImg from "../../assets/Home/cleanRoomImg.png";
import solarImg from "../../assets/Home/solarImg.png";
import { useNavigate } from "react-router-dom";




const ProductCategory = () => {
  const navigate = useNavigate();



  const products = [
    {
      title: "Pre-Engineered Buildings",
      img: preEng,
      desc: "Pre-Engineered Buildings are durable, flexible, and cost-efficient steel structures built for faster construction.",
      path: "/pre-building",
    },
    {
      title: "Pre-Fab Site Office",
      img: office,
      desc: "Prefabricated site offices for workspaces. Built for quick installation at construction and industrial sites.",
      path: "/prefab-modular",
    },
    {
      title: "MS Container",
      img: msContainer,
      desc: "Compact, secure storage and office solutions. Manufactured with Mild Steel for uncompromising security in the field.",
      path: "/ms-containers",
    },
    {
      title: "Labour Accommodation",
      img: labour,
      desc: "Labour accommodation for safe living. Built with durable materials for construction and industrial sites.",
      path: "/lgsf-modular",
    },
    {
      title: "Sandwich Panels",
      img: panelImg,
      desc: "High-performance insulated sandwich panels for modern construction. Provide excellent thermal efficiency, durability, and energy savings.",
      path: "/pre-building",
    },
    {
      title: "Pre-Engineered Warehouses",
      img: warehouseImg,
      desc: "Strong and spacious warehouse structures engineered for industrial storage, manufacturing, and large-scale operations.",
      path: "/warehouse",
    },
    {
      title: "Clean Rooms",
      img: cleanRoomImg,
      desc: "Specialized clean room solutions designed for controlled environments with high standards of hygiene, insulation, and precision.",
      path: "/clean-rooms",
    },
    {
      title: "Solar Mounting Structures",
      img: solarImg,
      desc: "Durable solar mounting structures engineered to provide reliable support, stability, and long-term performance for solar installations.",
      path: "/solar-mounting-structure",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [slideWidth, setSlideWidth] = useState(345);

  useEffect(() => {
    const updateSlider = () => {
      if (window.innerWidth <= 320) {
        setVisibleCards(1);
        setSlideWidth(308);
      } else if (window.innerWidth <= 360) {
        setVisibleCards(1);
        setSlideWidth(308);
      } else if (window.innerWidth <= 390) {
        setVisibleCards(1);
        setSlideWidth(310);
      } else if (window.innerWidth <= 430) {
        setVisibleCards(1);
        setSlideWidth(312);
      } else if (window.innerWidth <= 480) {
        setVisibleCards(1);
        setSlideWidth(314);
      } else if (window.innerWidth <= 578) {
        setVisibleCards(1);
        setSlideWidth(300);
      } else if (window.innerWidth <= 768) {
        setVisibleCards(2);
        setSlideWidth(310);
      } else if (window.innerWidth <= 992) {
        setVisibleCards(2);
        setSlideWidth(280);
      } else if (window.innerWidth <= 1050) {
        setVisibleCards(3);
        setSlideWidth(350);
      } else if (window.innerWidth <= 1200) {
        setVisibleCards(3);
        setSlideWidth(300);
      } else {
        setVisibleCards(4);
        setSlideWidth(345);
      }
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, []);


  useEffect(() => {
    const maxSlide = products.length - visibleCards;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleCards, products.length]);

  const handlePrev = () => {
    const maxSlide = products.length - visibleCards;

    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return maxSlide;
      }

      return prev - 1;
    });
  };

  const handleNext = () => {
    const maxSlide = products.length - visibleCards;

    setCurrentSlide((prev) => {
      if (prev >= maxSlide) {
        return 0; // directly back to FIRST card
      }

      return prev + 1;
    });
  };
  return (
    <section className={styles["products-section"]}>
      <div className={styles["section-head"]}>
        <div>
          <div className={styles.tag}>
            <p>
              • Our <span>Products</span>
            </p>
          </div>

          <h2>
            Industrial Precision &
            <br />
            <span>Modular Innovation</span>
          </h2>
        </div>

        <div className={styles["right-head"]}>
          <p className={styles["head-desc"]}>
            10 Years of Quality Products. Leading manufacturer of prefabricated
            structures in New Delhi.
          </p>
        </div>
      </div>

      {/* PREV / NEXT BUTTONS */}
      <div className={styles.sliderControls}>
        <button
          type="button"
          className={styles.sliderArrows}
          onClick={handlePrev}
          aria-label="Previous products"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <button
          type="button"
          className={styles.sliderArrow}
          onClick={handleNext}
          aria-label="Next products"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>

      <div className={styles.productSlider}>
        <div
          className={styles.productGrid}
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`,
          }}
        >
          {products.map((item, i) => (
            <div
              className={styles.productCard}
              key={i}
              onClick={() => {
                navigate(item.path);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <div className={styles.cardHeader}>
                <h3>{item.title}</h3>
              </div>

              <div
                className={styles.productImg}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;