import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabIndustrialEnclosures.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Settings,
  Factory,
  Hexagon,
  Headphones,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import indu1 from '../assets/PREFAB/Indus/indu1.png'
import indu2 from '../assets/PREFAB/Indus/indus2.png'
import indu3 from '../assets/PREFAB/Indus/indu3.png'
import indu4 from '../assets/PREFAB/Indus/indu4.png'
import indu5 from '../assets/PREFAB/Indus/indu5.png'
import indu6 from '../assets/PREFAB/Indus/inde6.png'
import indu7 from '../assets/PREFAB/Indus/indu7.png'
import design from '../assets/PREFAB/Indus/design.png'
import design1 from '../assets/PREFAB/Indus/design1.png'


const PrefabIndustrialEnclosures = () => {

  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const faqs = [
    {
      id: 0,
      q: "Are prefab enclosures suitable for harsh environments?",
      a: "Yes, our enclosures are built with high-grade insulated panels and robust frames designed to withstand extreme industrial environments, dust, weather, and heavy wear.",
    },
    {
      id: 1,
      q: "Can enclosures be relocated?",
      a: "Yes, modular design allows easy relocation and future expansion with minimal effort.",
    },
    {
      id: 2,
      q: "Do they provide sound insulation?",
      a: "Absolutely. We use specialized acoustic panels (like Rockwool or Glasswool) to significantly reduce noise levels from heavy machinery and compressors.",
    },
    {
      id: 3,
      q: "What materials are used?",
      a: "Our enclosures are constructed using premium insulated panels including PUF, Rockwool, and Glasswool, combined with heavy-duty structural steel frames.",
    },
    {
      id: 4,
      q: "How long does installation take?",
      a: "Modular construction allows for rapid on-site assembly, typically completed within a few days to minimize any operational downtime for your facility.",
    },
  ];


  const enclosureFeatures = [
    {
      icon: <Settings size={42} strokeWidth={1.7} />,
      title: "Custom Engineering",
      description:
        "Custom enclosure designs built as per project needs and industry standards for high efficiency and performance.",
    },
    {
      icon: <Factory size={42} strokeWidth={1.7} />,
      title: "Quality Manufacturing",
      description:
        "Built in advanced facilities using strict quality control to ensure durability, safety, and long service life.",
      active: true,
    },
    {
      icon: <Hexagon size={42} strokeWidth={1.7} />,
      title: "Fast Installation",
      description:
        "Modular design allows quick assembly on-site, reducing project time and operational delays.",
    },
    {
      icon: <Headphones size={42} strokeWidth={1.7} />,
      title: "End-to-End Support",
      description:
        "Complete support from design to installation ensuring smooth execution and reliable results.",
    },
  ];

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Prefab Industrial<br />
            <span>Enclosures
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd offers durable prefab industrial enclosures with insulated
            panels for quick installation and efficient protection.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>



      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Smart Enclosure Solutions<br />
            <span>for Industrial Needs</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.imageWrapper}>

            {/* Main Image */}
            <div className={styles.mainImage}>
              <img src={indu1} alt="Main Building" />
            </div>

            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={indu2} alt="Interior" />
            </div>

          </div>
          <div className={styles.introText}>
            <p>
              Prefab industrial enclosures are pre-engineered, factory-built structures designed to create safe,
              enclosed, and controlled environments for industrial equipment, processes, and storage. Manufactured
              off-site under strict quality standards and assembled quickly at the project location, these enclosures
              ensure precision, consistency, and high structural performance. They are ideal for industries that require
              reliable protection from dust, weather, noise, and other external factors.
            </p>
            <p>
              At L&R Green Pvt Ltd, we develop advanced enclosure solutions tailored to meet diverse industrial
              requirements. Our enclosures are built using high-quality insulated panels that provide excellent
              thermal efficiency, acoustic control, and durability. Designed to perform in demanding environments,
              they offer long-lasting strength, minimal maintenance, and flexibility for various applications
              across multiple industries.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>



      {/* ── Types & Applications ── */}
      <section className={styles.typesSec}>
        <div className={styles.typesTop}>
          <h2>
            Industrial Enclosures <br />
            <span>Types & Applications</span>
          </h2>
          <div className={styles.introLine} ></div>
        </div>
        <div className={styles.typesGrid}>
          <div className={styles.typesContent}>
            <p >
              L&R Green Pvt Ltd offers versatile prefab industrial enclosures designed forvarious
              industrial needs. Each unit ensures durability, safety, and reliable performance for equipment and operations.
            </p>
            <ul>
              <li><strong>Equipment Enclosures</strong> Protect generators, compressors, and control panels</li>
              <li><strong>Soundproof Enclosures</strong> Reduce noise and meet safety regulations</li>
              <li><strong>Data Center Enclosures</strong> Protect generators, compressors, and control panels</li>
              <li><strong>Pump Houses</strong> Reliable housing for water and industrial pump systems</li>
              <li><strong>Telecom Enclosures</strong> Protection for communication systems and base stations</li>
              <li><strong>Control Rooms</strong> Safe operator spaces for monitoring operations</li>
            </ul>
          </div>
          <div className={styles.imageGalleryWrapper}>
            <div className={styles.primaryImageCard}>
              <img src={indu3} alt="Main Building" />
            </div>
            <div className={styles.floatingImageCard}>
              <img src={indu4} alt="Interior" />
            </div>

          </div>
        </div>
      </section>





      {/* ── Manufacturing Strength Banner ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Industrial Enclosures</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Manufacturing<br />
              Strength
            </h2>
            <p>
              At L&R Green Pvt Ltd, our prefab industrial enclosures are built in advanced facilities
              using precision engineering and strict quality control. We use high-quality insulated
              panels like PUF, Rockwool, and Glasswool to ensure excellent thermal insulation, fire
              resistance, and durability. Each unit is tested for strength, accuracy, and performance
              to meet modern industrial needs.
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




      {/* ── Key Features ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Key Features & Advantages<br />
            <span>For Industrial Enclosures</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.showcaseImageContainer}>

            {/* Main Image */}
            <div className={styles.showcaseMainImage}>
              <img src={indu5} alt="Main Building" />
            </div>

            {/* Floating Image */}
            <div className={styles.showcaseTopImage}>
              <img src={indu6} alt="Interior" />
            </div>

          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                L&R Green Pvt Ltd offers high-performance prefab industrial enclosures built for
                reliability, safety, and long-term efficiency. Our solutions use advanced insulation
                and strong construction to meet demanding industrial needs.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Excellent thermal and acoustic insulation</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Fire-resistant and weatherproof construction</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Corrosion-resistant and durable materials</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Modular design for quick installation</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Low maintenance with long service life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ── Why Choose L&R ── */}
      <section className={styles.whySec}>
        <div className={styles.whyHeader}>
          <div className={styles.whyuser}>
            <h2>
              Why Choose L&R For <br />
              <span>Industrial Enclosures</span>
            </h2>
            <div className={styles.divider} ></div>
          </div>
          <p className={styles.whyDesc}>
            Get quick answers to common queries about L&R Green Pvt Ltd prefab
            industrial enclosures, including durability, installation, materials, and applications.
          </p>
        </div>
        <div className={styles.enclosureGrid}>
          {enclosureFeatures.map((item, index) => (
            <div
              key={index}
              className={`${styles.enclosureCard} ${item.active ? styles.enclosureCardActive : ""
                }`}
            >
              <span className={styles.enclosureOverlay}></span>

              <div className={styles.enclosureIcon}>
                {item.icon}
              </div>

              <div className={styles.enclosureContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
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
            <img src={indu7} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Industrial Enclosures ?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Industrial Enclosures tailored to your storage needs.
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
    </>
  );
};

export default PrefabIndustrialEnclosures;
