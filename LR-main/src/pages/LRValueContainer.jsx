import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LRValueContainer.module.css";
import { ArrowRight, ArrowUpRight, Plus, X, ChevronLeft, ChevronRight, Box } from "lucide-react";
import { useNavigate } from 'react-router-dom'
import container1 from '../assets/conatiners/L&RContainer/container1.jpg'
import container2 from '../assets/conatiners/L&RContainer/container2.jpg'
import card1 from '../assets/conatiners/L&RContainer/card1.jpg';
import card2 from '../assets/conatiners/L&RContainer/card2.jpg';
import card3 from '../assets/conatiners/L&RContainer/card3.jpg';
import card4 from '../assets/conatiners/L&RContainer/card4.jpg';
import png from '../assets/conatiners/L&RContainer/png.png';
import png1 from '../assets/conatiners/L&RContainer/png1.png';




const cards = [
  {
    title: "40×10×8.5 / 40×8×8.5",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "20×10×8.5 / 20×8×8.5",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "10×10×8",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "6x6x8",
    dark: false,
    list: [
      "Toilet Cabin Containers",
      "Guard Cabin Block Containers",
      "Tube Well Residence  Containers",
      "cement store Containers",
      "Tube well  Pump Farm Store Containers",
      "coffee Shop Containers",
      "Wash Room Block Containers",
      "Cafe Containers  Hall Containers",

    ],
  },
  {
    title: "4x4x8 ",
    dark: false,
    list: [
      "Toilet Cabin Containers",
      "Guard Cabin Block Containers",
      "Farming Store  Containers",
      "Material store Containers",
      "coffee Shop Containers",
      "Wash Room Block Containers",
      "Cafe Containers  Hall Containers",

    ],
  },
];


const LRValueContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };



  const industryProjects = [
    {
      title: "Coffee Shop Container",
      desc: "Stylish modular coffee shop containers with a modern and inviting design. Perfect for cafés, kiosks, and commercial food outlets.",
      img: card1,
    },
    {
      title: "Baby Play Area Container",
      desc: "Safe and engaging play area containers designed for children's recreation. Built with secure, spacious interiors for fun and learning.",
      img: card2,
    },
    {
      title: "Pump Farm Store Container",
      desc: "Durable storage containers for pumps, equipment, and farm essentials. Designed for organized storage and reliable protection.",
      img: card3,
    },
    {
      title: "Material Store Container",
      desc: "Secure material storage containers for tools, equipment, and supplies. Built for durability, easy access, and efficient space utilization.",
      img: card4,
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What are L&R Value Granted MS Containers used for?",
      a: "They are used for staff offices, worker accommodation, guard cabins, dining spaces, storage units, pump farms, coffee shops, play areas, and various site utility applications.",
    },
    {
      id: 1,
      q: "What sizes are available in L&R MS Containers?",
      a: "They are available in multiple sizes such as 40×10×8.5 ft, 20×10×8.5 ft, 10×10×8.5 ft, 6×8 ft, and 4×4 ft.",
    },
    {
      id: 2,
      q: "Are these containers suitable for harsh environments?",
      a: "Yes. L&R MS Containers are built with high-grade steel and protective coatings, making them durable and reliable even in extreme weather and demanding site conditions.",
    },
    {
      id: 3,
      q: "Can L&R MS Containers be relocated?",
      a: "Absolutely. These containers are designed for easy relocation using standard lifting equipment or flatbed trucks, making them ideal for phased or temporary deployments.",
    },
    {
      id: 4,
      q: "Do these containers support custom layouts?",
      a: "Yes. Interior partitions, electrical fittings, HVAC, flooring, and finishes can all be customized to meet your specific project or operational requirements.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Portable Modular Solutions</span>
          <h1 className={styles.mainTitle}>
            L&R VALUE GRANTED <br />
            <span>MS CONTAINER</span>
          </h1>
          <p className={styles.heroDesc}>
            Premium MS Containers delivering durable, flexible, and fast-deploy
            modular solutions for industrial, commercial, and site-based
            applications.
          </p>
          <button className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.frameWrap}>
            <span className={styles.cornerTop}></span>
            <span className={styles.cornerBottoms}></span>

            <div className={styles.photoFrame}>
              <img src={container2} alt="Container" />
            </div>
          </div>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2 >
                L&R Value Granted <br />
                <span>MS Containers</span>
              </h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&R Value Granted Containers represent a versatile range of portable MS
              modular units designed to meet diverse industrial, commercial, and site
              infrastructure needs. Available in multiple sizes from compact 4×4 units
              to large 40-foot containers, these solutions are engineered for durability,
              mobility, and functional adaptability across applications such as offices,
              accommodation, storage, sanitation, and specialized utility spaces.
            </p>
            <p>
              Built with robust steel structures and customizable layouts, L&R
              containers are ideal for rapid deployment in demanding environments.
              Whether for construction sites, remote project locations, or facilities,
              these modular units offer cost-effective, low-maintenance, and scalable
              solutions that ensure operational efficiency, user comfort, and long-term
              performance.
            </p>

            <button className={styles.btnOutline}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.secHeaderCenter}>
            <div className={styles.secHeadText}>
              <h2 >
                The Types of L&R  <br />
                <span styles={{ color: "#293F67" }}>Value Granted Sizes</span>
              </h2>
              <div className={styles.secHeadLine}></div>
            </div>
            <p>
              Every L&R Value Granted Container is offered in multiple core sizes,
              with flexible interior layouts ranging from offices and
              accommodation to dining, sanitary, and storage spaces.
            </p>
          </div>

          <div className={styles.controls}>
            <button onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <button onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>
          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${current * 33.333}%)`,
              }}
            >
              {[...cards, ...cards.slice(0, 3)].map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${card.dark ? styles.darkCard : ""
                    }`}
                >
                  <Box
                    size={48}
                    strokeWidth={1.5}
                    className={styles.icon}
                  />

                  <h2>{card.title}</h2>

                  <div className={styles.line}></div>

                  <ul>
                    {card.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ── Why Choose ── */}
      <section className={styles.whySec}>
        <div className={styles.whyGrid}>
          <div className={styles.whyContent}>
            <div className={styles.WhyText}>
              <h2 >
                Why Choose L&R Value <br />
                <span>Granted MS Containers</span>
              </h2>
              <div className={styles.whyDivider}></div>
            </div>
            <p>
              L&R Value Granted MS Containers offer reliable, cost-effective
              modular solutions for diverse applications. Built with strong steel
              structures, they ensure durability, safety, and long-term performance
              in demanding conditions.
            </p>
            <p>
              With multiple size options and highly flexible layouts, L&R containers
              can be easily adapted for offices, accommodation, storage, and utility
              spaces. Their quick installation, low-maintenance requirements, and
              easy relocation make them an ideal choice for projects that demand
              speed, mobility, and operational efficiency.
            </p>
          </div>
          <div className={styles.wrapperss}>
            <span className={styles.topCorners}></span>
            <span className={styles.bottomCorners}></span>
            <div className={styles.imageBoxs}>
              <img src={container1} alt="Container" />
            </div>

          </div>
        </div>
      </section>



      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R VALUES CONTAINERS</h1>
            <h1>L&R VALUES CONTAINERS</h1>
            <h1>L&R VALUES CONTAINERS</h1>
            <h1>L&R VALUES CONTAINERS</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength &amp; <br />
              Manufacturing Excellence
            </h2>

            <p>
              L&R MS Containers are built with high-grade steel and precision
              engineering to ensure strong structural stability and long-lasting
              performance. Designed for tough industrial conditions, they offer
              durability, safety, and reliable usage across all site applications.
            </p>

            <div className={styles.LastImage}>
              <img src={png1} alt="png" />
              </div>
          </div>

          <div className={styles.mfgImgWrapper}>
            <img
              src={png}
              alt="Manufacturing"
            />
          </div>
        </div>

      </section>



      {/* ── Products ── */}
      <section className={styles.productsSec}>
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div className={styles.ProductFlex}>
              <h2 className={styles.secTitle}>
                L&R Value Granted MS <br />
                <span>Containers Products</span>
              </h2>
              <div className={styles.productsDivider}></div>
            </div>
            <p className={styles.productsSubtext}>
              Purpose-built modular container solutions designed for commercial,
              utility, and recreational applications with durable construction and
              flexible deployment options.
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {industryProjects.map((item, index) => (
              <div className={styles.expCard} key={index}>
                <img src={item.img} alt={item.title} className={styles.expImg} />

                <div className={styles.expLabel}>
                  <h4>{item.title}</h4>

                  <div className={styles.desc}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQ</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>
              Frequently Asked
              <br />
              <span>Questions</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>
            Find answers to common questions about our container solutions,
            design process, and performance benefits.
          </p>
        </div>

        {/*  */}
        <div className={styles.faqBody}>
          <div className={styles.wrappers}>
            <span className={styles.topCorner}></span>
            <span className={styles.bottomCorner}></span>
            <div className={styles.imageBox}>
              <img src={container1} alt="Container" />
            </div>

          </div>
          {/*  */}

          <div className={styles.container}>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                  }`}
              >
                <div
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.q}</h3>

                  <span className={styles.icon}>
                    {activeIndex === index ? (
                      <X size={28} strokeWidth={2} />
                    ) : (
                      <Plus size={28} strokeWidth={2} />
                    )}
                  </span>
                </div>

                <div
                  className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ""
                    }`}
                >
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your L&R Value Granted MS Containers ?</h2>
          <p>
            Connect with our team to design and deliver compact, durable, and
            fully L&R Value Granted MS Containers tailored to your site needs.
          </p>
          <button className={styles.contactBtn}>
            <span className={styles.contactText}>Contact Us</span>

            <span className={styles.iconBox}>
              <ArrowRight className={styles.iconOne} size={18} />
              <ArrowRight className={styles.iconTwo} size={18} />
            </span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LRValueContainer;