import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/FarmhouseCottage.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import farm1 from '../assets/LGFS/FramHouse/farm1.png'
import farm2 from '../assets/LGFS/FramHouse/farm2.png'
import farm3 from '../assets/LGFS/FramHouse/farm3.png'
import farm4 from '../assets/LGFS/FramHouse/farm4.png'
import farm5 from '../assets/LGFS/FramHouse/farm5.png'
import { useNavigate } from 'react-router-dom'
import user1 from '../assets/LGFS/FramHouse/user1.png'
import user2 from '../assets/LGFS/FramHouse/user2.png'
import user3 from '../assets/LGFS/FramHouse/user3.png'
import user4 from '../assets/LGFS/FramHouse/user4.png'
import design from '../assets/LGFS/FramHouse/design.png'
import design1 from '../assets/LGFS/FramHouse/design1.png'
const FarmhouseCottage = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Engineered Steel Framework",
      description:
        "Built with high-strength galvanized steel, the framework ensures strong load capacity, corrosion resistance, and long-lasting stability in all conditions.",
    },
    {
      id: 2,
      image: user2,
      title: "Insulated Wall & Roof Panels",
      description:
        "PUF insulated panels for walls and roofing ensure thermal balance, reduce heat transfer, and maintain comfortable indoor temperatures all year.",
    },
    {
      id: 3,
      image: user3,
      title: "Roofing Systems",
      description:
        "We offer roofing solutions like insulated metal sheets, shingles, and custom designs, ensuring durability, weather resistance, and aesthetic appeal.",
    },
    {
      id: 4,
      image: user4,
      title: "Flooring Solutions",
      description:
        "Flexible flooring options are available based on usage and design preference, ensuring durability, easy maintenance, and elegant interior finish.",
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What is a prefab farmhouse or cottage?",
      a: "A prefab farmhouse or cottage is a factory-built modular structure using LGSF or PUF panels, erected on-site rapidly without traditional brick-and-mortar construction.",
    },
    {
      id: 1,
      q: "How long does construction take?",
      a: "Depending on size, a prefab farmhouse or cottage can be fully completed within 3 to 8 weeks, compared to months for conventional construction.",
    },
    {
      id: 2,
      q: "Can the design look like a traditional farmhouse?",
      a: "Yes, we offer external cladding, pitched roofs, wooden finish facades, and custom interiors that replicate traditional farmhouse and cottage aesthetics beautifully.",
    },
    {
      id: 3,
      q: "Are these structures permitted on agricultural land?",
      a: "Prefab farmhouses are generally permissible on agricultural land in India, subject to local regulations. We advise consulting your local authority before proceeding.",
    },
    {
      id: 4,
      q: "What is the cost compared to conventional construction?",
      a: "Prefab farmhouses are typically 20–40% more cost-effective than conventional construction, with faster completion and lower maintenance costs over time.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Modern Prefab<br />
            <span>Farmhouses & Cottages
            </span>
          </h1>
          <p className={styles.heroDesc}>
            We build modern LGSF farmhouses that deliver fast construction, high
            durability, and superior comfort—ideal for weekend retreats, agricultural
            homes, and luxury countryside living.</p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>


      {/* ----------intro---------------- */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Prefabricated Cottages<br />
            <span>& Farm Houses</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              At L&R Enterprises, we specialize in designing and manufacturing high-quality prefabricated cottages and
              farm houses that blend modern aesthetics with strong structural durability and advanced rapid construction
              techniques. Our modular living solutions are crafted to deliver maximum comfort, practical functionality,
              and refined architectural elegance while significantly reducing overall construction time and project costs.
            </p>
            <p>
              With the growing demand for weekend homes, eco-friendly retreats, farmhouse developments, and resort-style
              accommodations, prefabricated cottages have become a smart and efficient alternative to conventional construction
              methods. Our solutions provide excellent thermal insulation, flexible design options, and long-lasting performance,
              making them suitable for both personal living spaces and commercial hospitality projects.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.prefabImageContainer}>
            <div className={styles.prefabImageFrame}>
              <img
                src={farm1}
                alt="Prefab Cabin"
                className={styles.prefabImage}
              />
            </div>
            <div className={styles.prefabAccent}></div>
          </div>
        </div>
      </section>



      {/* -------------image cards -------------- */}

      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Structural Features of<br />
              <span>Prefab farmhouse & Cottage</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Our prefabricated cottages and farm houses use high-quality materials and modern
            systems to ensure strength, durability, comfort, and energy efficiency with a premium finish.
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

      {/* -------------Applications of Prefabricated----------------- */}

      <section className={styles.FarmHouse}>
        <div className={styles.farmHouseTitle}>
          <h2> Applications of Prefabricated<br /><span>Cottages & Farm Houses</span></h2>
          <div className={styles.farmLine}></div>
        </div>
        <div className={styles.farmFlex}>
          <div className={styles.cabinPreviewContainer}>
            <div className={styles.cabinPreviewFrame}>
              <img
                src={farm5}
                alt="Prefab Cabin"
                className={styles.cabinPreviewImage}
              />
            </div>
            {/* Bottom Right Accent */}
            <div className={styles.cabinAccentBlock}></div>
          </div>
          {/*  */}
          <div className={styles.farmText}>
            <p>Prefabricated cottages and farm houses are versatile modular
              structures designed for multiple residential and commercial
              uses. They provide quick, efficient, and comfortable living
              solutions across different environments.</p>
            <ul>
              <li><strong>Farm houses</strong></li>
              <li><strong>Resort accommodations</strong></li>
              <li><strong>Weekend homes</strong></li>
              <li><strong>Eco-tourism projects</strong></li>
              <li><strong>Staff housing</strong></li>
              <li><strong>Guest houses</strong></li>
              <li><strong>Rural development housing</strong></li>
              <li><strong>Holiday villas</strong></li>

            </ul>
          </div>

        </div>
      </section>

      {/* -------------Energy Efficiency-------------------- */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R  LGSF Modern LGSF Farmhouses & Cottages  </h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Energy Efficiency, Sustainability<br />
              & Customization Options
            </h2>
            <p>
              Our cottages are designed for sustainability and flexibility, featuring PUF insulation,
              recyclable steel structures, minimal waste construction, and solar-ready roofing systems,
              along with fully customizable layouts, roofing styles, interior designs, and utility
              integrations to match every lifestyle need. This ensures eco-friendly performance with
              complete design freedom for every project.
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

      {/* -------------------------------------------------- */}





      {/* ── SECTION 5: farmhouse ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Advantages of Prefabricated<br />
            <span>Farm Houses</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Prefabricated farm houses provide fast, efficient, and sustainable living
                solutions with strong structural performance and modern design flexibility.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rapid construction (weeks instead of months)</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Energy-efficient insulation</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Cost-effective compared to RCC buildings</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Fully customizable layouts</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Earthquake-resistant structure</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Eco-friendly construction approach</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cabinShowcaseContainer}>
            <div className={styles.cabinShowcaseFrame}>
              <img
                src={farm2}
                alt="Prefab Cabin"
                className={styles.cabinShowcaseImage}
              />
            </div>
            <div className={styles.cabinBottomAccent}></div>
          </div>
        </div>
      </section>



      {/* -------------why farm house ----------------------------- */}

      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Prefab<br /><span>Farm Houses & Cottages</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.prefabDisplayContainer}>
            <div className={styles.prefabDisplayFrame}>
              <img
                src={farm3}
                alt="Prefab Cabin"
                className={styles.prefabDisplayImage}
              />
            </div>
            <div className={styles.prefabCornerAccent}></div>

          </div>
          <div className={styles.solartext}>
            <p>At L&R Enterprises, we bring strong expertise in modular and PEB construction,
              ensuring every project is executed with precision, durability, and modern engineering
              standards. We use only high-quality materials and follow strict engineering practices
              to deliver reliable and long-lasting structures.</p>
            <p>We also provide complete end-to-end turnkey solutions with a strong commitment to
              on-time delivery and pan-India project execution. Every project we complete reflects
              architectural excellence, quality craftsmanship, and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* ------------------faqs--------------------------------------- */}

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
            <img src={farm4} alt="warehouse" />
          </div>
        </div>
      </section>


      {/* -----------------cta ---------------- */}
      <section className={styles.cta}>
        <h2>Ready for Your Prefab Farm Houses & CottagesSolutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated  PrefabFarm Houses & Cottages solutions tailored to your site needs..
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

export default FarmhouseCottage;
