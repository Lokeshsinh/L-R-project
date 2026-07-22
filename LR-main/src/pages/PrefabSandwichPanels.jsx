import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSandwichPanels.module.css";
import {
  ArrowRight, ArrowUpRight, Plus, X, ThermometerSnowflake,
  VolumeX,
  Shield,
  Cloud,
  Hammer,
  Zap,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import sand1 from '../assets/panel/sandwichpanel/sand1.png'
import sand2 from '../assets/panel/sandwichpanel/sand2.png'
import sand3 from '../assets/panel/sandwichpanel/sand3.png'
import sand4 from '../assets/panel/sandwichpanel/sand4.png'
import sand5 from '../assets/panel/sandwichpanel/sand5.png'
import card1 from '../assets/panel/sandwichpanel/card1.png';
import card2 from '../assets/panel/sandwichpanel/card2.png';
import card3 from '../assets/panel/sandwichpanel/card3.png';
import card4 from '../assets/panel/sandwichpanel/card4.png';
import design from '../assets/panel/sandwichpanel/design.png'
import design1 from '../assets/panel/sandwichpanel/design1.png'
import user1 from '../assets/panel/sandwichpanel/user1.png'
import user2 from '../assets/panel/sandwichpanel/user2.png'
import user3 from '../assets/panel/sandwichpanel/user3.png'
import user4 from '../assets/panel/sandwichpanel/user4.png'


const PrefabSandwichPanels = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <ThermometerSnowflake size={42} strokeWidth={1.7} />,
      title: "Thermal Insulation",
      description:
        "Designed to minimize heat transfer and maintain stable indoor temperatures for maximum energy efficiency.",
    },
    {
      icon: <VolumeX size={42} strokeWidth={1.7} />,
      title: "Acoustic Insulation",
      description:
        "Provides excellent sound absorption and noise reduction for industrial and commercial environments.",
      active: true,
    },
    {
      icon: <Shield size={42} strokeWidth={1.7} />,
      title: "Fire Resistance",
      description:
        "Available with fire-resistant core materials for enhanced building safety and compliance.",
    },
    {
      icon: <Cloud size={42} strokeWidth={1.7} />,
      title: "Lightweight Construction",
      description:
        "Easy to transport, handle, and install, reducing structural load and construction time.",
    },
    {
      icon: <Hammer size={42} strokeWidth={1.7} />,
      title: "Durability",
      description:
        "Resistant to corrosion, moisture, weather conditions, and environmental damage.",
    },
    {
      icon: <Zap size={42} strokeWidth={1.7} />,
      title: "Energy Efficiency",
      description:
        "Low thermal conductivity helps reduce cooling and heating costs significantly.",
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What are sandwich panels used for?",
      a: "Sandwich panels are used for roofing, wall cladding, cold storage, clean rooms, and prefabricated buildings, providing excellent thermal and acoustic insulation.",
    },
    {
      id: 1,
      q: "Which insulation core materials are available?",
      a: "We offer PUF/PIR, EPS, Rockwool, and Glasswool insulated sandwich panels based on project requirements.",
    },
    {
      id: 2,
      q: "Are sandwich panels energy efficient?",
      a: "Yes, their high thermal resistance reduces heat transfer, which significantly lowers heating and cooling costs.",
    },
    {
      id: 3,
      q: "Are sandwich panels fire resistant?",
      a: "Yes, panels with Rockwool or specialized PUF cores offer excellent fire resistance and safety.",
    },
    {
      id: 4,
      q: "Can sandwich panels be customized?",
      a: "Yes, sandwich panels can be customized in terms of thickness, length, profile design, and core material to meet specific project guidelines.",
    },
  ];
  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Industrial & Commercial ",
      description:
        "Suitable for warehouses, manufacturing units, industrial sheds, office buildings, retail spaces, and commercial infrastructure projects.",
    },
    {
      id: 2,
      image: user2,
      title: "Cold Storage & Clean Room ",
      description:
        "Ideal for cold storage units, food processing plants, pharmaceutical facilities, and temperature-controlled clean room environments.",
    },
    {
      id: 3,
      image: user3,
      title: "Prefabricated & Modular ",
      description:
        "Used in prefab buildings, portable cabins, modular housing units, worker accommodations, and site office solutions.",
    },
    {
      id: 4,
      image: user4,
      title: "Institutional & Infrastructure",
      description:
        "Perfect for hospitals, educational institutions, temporary structures, and modern infrastructure development projects.",
    },
  ];


  const industryProjects = [
    {
      title: "PUF / PIR Panels",
      desc: "High-performance insulated panels with excellent thermal efficiency. Ideal for cold storage, clean rooms, and industrial buildings.",
      img: card1,
    },
    {
      title: "EPS Panels",
      desc: "Lightweight insulated panels offering reliable thermal insulation and durability. Suitable for commercial, industrial, and prefabricated structures.",
      img: card2,
    },
    {
      title: "Rockwool Panels",
      desc: "Fire-resistant insulated panels with superior sound and thermal insulation. Perfect for factories, warehouses, and high-temperature applications.",
      img: card3,
    },
    {
      title: "Glasswool Panels",
      desc: "Energy-efficient insulation panels designed for excellent thermal and acoustic performance. Ideal for industrial, commercial, and HVAC applications.",
      img: card4,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Advanced Sandwich<br />
            <span>Panel Solutions
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Energy-efficient insulated panels engineered for thermal performance, durability, fire resistance,
            and rapid installation across industrial, commercial, and prefabricated construction projects.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>






      {/* ── WHAT ARE SANDWICH PANELS ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What Are<br />
            <span>Sandwich Panels?</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              Sandwich panels are advanced composite building materials made with durable outer metal sheets
              and insulated cores like PUF/PIR, EPS, Rockwool, or Glasswool. They provide excellent thermal
              insulation, soundproofing, structural strength, moisture resistance, and lightweight performance,
              making them ideal for industrial, commercial, and prefabricated construction projects.
            </p>
            <p>
              Widely used in roofing, wall cladding, cold storage facilities, modular buildings, clean rooms,
              industrial sheds, and warehouses, sandwich panels help reduce energy consumption and improve building
              efficiency. Their low maintenance, long service life, and versatile applications make them a preferred
              alternative for fast-track infrastructure development.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.imageWrapper}>

            {/* Main Image */}
            <div className={styles.mainImage}>
              <img src={sand2} alt="Main Building" />
            </div>

            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={sand1} alt="Interior" />
            </div>

          </div>
        </div>
      </section>




      {/* ── EXPLORE OUR RANGE ── */}
      < section className={styles.productsSec} >
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div className={styles.productText}>
              <h2>
                Explore Our Range<br />
                <span>of Sandwich Panels</span>
              </h2>
              <div className={styles.productsDivider}></div>
            </div>
            <p className={styles.productsSubtext}>
              High-performance insulated panels for durable, energy-efficient, and modern construction applications.
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
      </section >





      {/* ── TECHNICAL ADVANTAGES ── */}
      <section className={styles.techSec}>
        <div className={styles.techContainer}>
          <div className={styles.techText}>
            <h2>
              Technical Advantages <br />
              <span>of Sandwich Panels</span>
            </h2>
            <div className={styles.divider} ></div>
          </div>
          <p className={styles.rangeDesc}>
            L&amp;R Green India Pvt Ltd engineered panels are built to
            maximize durability, thermal efficiency, and long-term structural
            value.
          </p>
        </div>
        <div className={styles.panelFeaturesGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={`${styles.panelFeatureCard} ${item.active ? styles.panelFeatureActive : ""
                }`}
            >
              <span className={styles.panelCardOverlay}></span>

              <div className={styles.panelFeatureIcon}>
                {item.icon}
              </div>

              <div className={styles.panelFeatureContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── HIGH PERFORMANCE BANNER ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R  Sandwich Panel</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              High-Performance Sandwich<br />
              Panels For Modern Construction
            </h2>
            <p>
              L&R Green Private Limited provides advanced sandwich panel solutions engineered
              for superior thermal insulation, structural durability, acoustic performance, energy efficiency,
              and fast installation. Our insulated panels are ideal for warehouses, cold storage units, clean rooms,
              prefab buildings, modular structures, industrial facilities, and commercial infrastructure projects.
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





      {/* ── APPLICATIONS ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              What’s Inside a <br />
              <span>Rooftop Servant Room</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            A rooftop servant room is thoughtfully designed to provide all essential living comforts
            within a compact and efficient layout. It ensures a balance of privacy, functionality,
            and modern comfort for domestic staff.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryCards.map((card) => (
            <div key={card.id} className={styles.galleryCard}>
              <div className={styles.galleryImageWrapper}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.galleryImage}
                />
              </div>

              <div className={styles.galleryContent}>
                <h3 className={styles.galleryTitle}>
                  {card.title}
                </h3>

                <p className={styles.galleryDescription}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── WHY CHOOSE ── */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <h2>
            Why Choose Sandwich <br />
            <span>Panels Section</span>
          </h2>
          <div className={styles.divider} ></div>
        </div>
        <div className={styles.whyGrid}>
          <div className={styles.galleryWrap}>

            {/* Main Image */}
            <div className={styles.primaryFrame}>
              <img src={sand4} alt="Main Building" />
            </div>

            {/* Floating Image */}
            <div className={styles.secondaryFrame}>
              <img src={sand5} alt="Interior View" />
            </div>

          </div>
          <div className={styles.whyText}>
            <p>
              Sandwich panels are engineered with a high-quality insulated
              core bonded between durable metal facings, delivering
              exceptional structural strength, thermal insulation, acoustic
              performance, and long-term durability. Their advanced
              construction helps maintain stable indoor temperatures while
              reducing heat transfer, making them highly energy- efficient for
              modern industrial, commercial, and prefabricated buildings.
            </p>
            <p>
              Designed for fast and efficient installation, sandwich panels
              offer lightweight handling, moisture and corrosion resistance,
              low maintenance requirements, and extended service life. Their
              durable yet lightweight structure makes them a cost-effective
              and reliable alternative to traditional construction materials
              for infrastructure and modular construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}



      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Prefabricated rooftop servant rooms are compact, safe living units built on existing
            buildings for domestic staff. Below are common FAQs about their features and benefits.</p>
        </div>
        <div className={styles.faqBody}>
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
          <div className={styles.faqImg}>
            <img src={sand3} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Build Smarter With High-Performance Sandwich Panels</h2>
        <p>
          L&R Green Private Limited provides durable, energy-efficient, and cost-effective sandwich panel
          solutions for industrial, commercial, and prefabricated construction projects across India.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
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

export default PrefabSandwichPanels;
