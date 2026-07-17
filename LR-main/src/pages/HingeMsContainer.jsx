import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/HingeMsContainer.module.css";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Box, Plus, X } from "lucide-react";
import container1 from '../assets/conatiners/HigneContainer/container1.png'
import container2 from '../assets/conatiners/HigneContainer/container2.png'
import card1 from '../assets/conatiners/HigneContainer/card2.png';
import card2 from '../assets/conatiners/HigneContainer/card1.png';
import card3 from '../assets/conatiners/pufContainer/card3.png';
import card4 from '../assets/conatiners/HigneContainer/card4.png';
import design from '../assets/conatiners/HigneContainer/design.png';
import design1 from '../assets/conatiners/HigneContainer/design1.png';
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
const HingeMsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      title: "Portable Office Containers",
      desc: "Modern portable office containers designed for productive workspaces. Ideal for construction sites, industrial projects, and temporary offices.",
      img: card1,
    },
    {
      title: "Project Management Office Containers",
      desc: "Fully equipped office containers for efficient project planning and coordination. Built for smooth operations and maximum productivity.",
      img: card2,
    },
    {
      title: "Dining Hall & Café Containers",
      desc: "Comfortable dining and café containers with spacious modern interiors. Perfect for project sites, campuses, and commercial facilities.",
      img: card3,
    },
    {
      title: "Portable Cabin Containers",
      desc: "Compact modular cabins designed for offices, security, or accommodation. Durable, easy to install, and suitable for temporary or permanent use.",
      img: card4,
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What are Hinge MS Containers?",
      a: "Hinge MS Containers are modular mild steel containers with foldable or hinged designs, offering durable, portable, and space-efficient solutions for offices, storage, accommodation, and industrial applications.",
    },
    {
      id: 1,
      q: "What sizes are available?",
      a: "We offer standard sizes including 40×10×8.5 ft, 20×10×8.5 ft, and 10×10×8 ft. Custom dimensions are also available to suit your project requirements.",
    },
    {
      id: 2,
      q: "Are these containers movable?",
      a: "Yes. Hinge MS Containers are designed for easy transportation and relocation, making them ideal for temporary and changing project sites.",
    },
    {
      id: 3,
      q: "Can the interiors be customized?",
      a: "Yes. We provide customized interiors with options such as insulation, electrical fittings, flooring, partitions, furniture, air conditioning, and plumbing based on your needs.",
    },
    {
      id: 4,
      q: "Where can these containers be used?",
      a: "These containers are widely used at construction sites, industrial facilities, commercial projects, mining locations, infrastructure developments, educational campuses, and remote work locations.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}> Skid-Mounted Series</span>
          <h1 className={styles.mainTitle}>
            HINGE MS <br />
            <span>CONTAINER</span>
          </h1>
          <p className={styles.heroDesc}>Hinge MS Containers specializes in durable and high-quality mild steel
            container solutions designed for industrial, storage, transport, and customized business needs.</p>
          <button className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h2 >
            Heavy-Duty Hinge<br />
            <span>MS Containers</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p>
              Hinge MS Containers are high-strength modular steel units designed for durability,
              flexibility, and long-term performance across industrial, commercial, and infrastructure
              applications. Built using premium mild steel and heavy-duty hinge systems,
              these containers ensure smooth operation, strong structural integrity, and resistance
              to harsh environmental conditions.
            </p>
            <p>
              Manufactured by L&R Green Pvt Ltd, these containers are engineered for easy transportation,
              quick installation, and multiple usage options such as site offices, accommodation units,
              storage spaces, and utility cabins.
              Their robust construction and customizable design make them a reliable solution for modern
              project site requirements.
            </p>
            <button className={styles.btnOutline}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.introVisuals}>
            <img src={container1} alt="container" />
          </div>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.sizesTopRow}>
            <div className={styles.sizesLeft}>
              <h2 >
                The Types of L&R <br />
                <span>Value Granted Sizes</span>
              </h2>
              <div className={styles.secHeadLine}></div>
            </div>
            <p className={styles.sizesDesc}>
              Every Hinge MS Container from L&R Green Pvt Ltd is available in multiple core sizes, with flexible
              interior layouts designed for offices, accommodation, dining, sanitary, and storage applications.
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
        <div className={styles.WhyText}>
          <h2>
            Why Choose L&R Value <br />
            <span>Granted MS Containers</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.whyGrid}>
          <div className={styles.whyImgWrapper}>
            <img
              src={container2}
              alt="L&R Value Container"
            />
          </div>
          <div className={styles.whyContent}>
            <p>
              L&R Hinge MS Containers are engineered for strength, durability, and long-term
              performance, making them a reliable choice for industrial, commercial, and site-based
              applications. Built with high-quality mild steel and precision hinge
              systems, these containers ensure smooth operation, excellent load-bearing capacity,
              and resistance to harsh environmental conditions.
            </p>
            <p>
              At L&R Green Pvt Ltd, we focus on delivering fully customizable and ready-to-use
              container solutions that are easy to transport, install, and relocate. With flexible designs for offices, accommodation,
              storage, and utility spaces, our Hinge MS Containers provide a cost-effective and
              efficient solution for modern infrastructure needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>Hinge  MS Container</h1>
            <h1>Hinge  MS Container</h1>
            <h1>Hinge  MS Container</h1>
            <h1>Hinge  MS Container</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength &amp; <br />
              Manufacturing Excellence
            </h2>

            <p>
              At L&R Green Pvt Ltd, we deliver high-quality Hinge MS Containers built with
              strong engineering standards, precision
              fabrication, and durable mild steel construction, ensuring reliable performance
              and long service life for every project.
            </p>

            <div className={styles.LastImage}>
              <img src={design1} alt="png" />
            </div>
          </div>

          <div className={styles.mfgImgWrapper}>
            <img
              src={design}
              alt="Manufacturing"
            />
          </div>
        </div>

      </section>


      {/* ── Products ── */}
      <section className={styles.productsSec}>
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div className={styles.productText}>
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
            Get quick answers to the most common queries about our portable, durable,
            and fully customizable Hinge MS Container solutions.
          </p>
        </div>

        <div className={styles.faqBody}>
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

          <div className={styles.faqImg}>
            <img src={container1} alt="container" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}

      <section className={styles.cta}>
        <h2>Ready for Your Hinge MS Container Solution?</h2>
        <p>
          Connect with our team to design and deliver compact, durable, and
          fully Hinge MS Container solutions tailored to your site needs.
        </p>


        <button className={styles.contactBtn}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBox}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default HingeMsContainer;