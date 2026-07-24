import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabResidentialHouse.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
  Clock3,
  Building2,
  Shield,
  Leaf,

} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import reshouse1 from '../assets/PREFAB/prefabresi/reshouse1.png'
import reshouse2 from '../assets/PREFAB/prefabresi/reshouse2.jpg'
import reshouse3 from '../assets/PREFAB/prefabresi/reshouse3.png'
import reshouse4 from '../assets/PREFAB/prefabresi/reshouse4.png'
import design from '../assets/PREFAB/prefabresi/design.png'
import design1 from '../assets/PREFAB/prefabresi/design1.png'

const PrefabResidentialHouse = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is LGSF construction?",
      a: "Light Gauge Steel Framing (LGSF) is a modern construction method using high-strength galvanized steel sections to build strong, lightweight, and fast multi-story buildings.",
    },
    {
      id: 1,
      q: "Is it suitable for G+2 houses?",
      a: "Yes, LGSF is engineered for multi-story buildings like G+1 and G+2 with excellent structural stability. It provides safety and flexibility for modern residential designs.",
    },
    {
      id: 2,
      q: "How fast is construction?",
      a: "LGSF construction is 50-60% faster than traditional concrete builds, as framing and panels are manufactured off-site and quickly assembled on-site.",
    },
    {
      id: 3,
      q: "Is it durable?",
      a: "Yes, LGSF structures are highly durable, resistant to moisture, corrosion, termites, and earthquakes, ensuring a lifespan of over 50 years.",
    },
    {
      id: 4,
      q: "Is it eco-friendly?",
      a: "Yes, LGSF uses over 90% recyclable steel and generates minimal construction waste, making it a highly sustainable and green building solution.",
    },
  ];

  const features = [
    {
      icon: <Clock3 size={58} strokeWidth={1.5} />,
      title: "Fast Construction",
      description:
        "Built 50–60% faster using factory-made, pre-engineered components.",
    },
    {
      icon: <Building2 size={58} strokeWidth={1.5} />,
      title: "Structural Strength",
      description:
        "High strength-to-weight ratio ensures stability for G+1 and G+2 homes.",
      active: true,
    },
    {
      icon: <Shield size={58} strokeWidth={1.5} />,
      title: "Durability & Safety",
      description:
        "Resistant to earthquakes, fire, termites, and corrosion.",
    },
    {
      icon: <Leaf size={58} strokeWidth={1.5} />,
      title: "Sustainable Design",
      description:
        "Uses over 90% recyclable materials with minimal environmental impact.",
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
            LGSF Prefab Residential<br />
            <span>Houses (G+1 / G+2)
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd delivers high-quality prefab homes designed
            for speed, durability, and flexibility—perfect for modern living.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* ── SECTION 2: PREFAB RESIDENTIAL HOUSES (G+1 / G+2) ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Prefab Residential<br />
            <span>Houses (G+1 / G+2)</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.structureCard}>

            <div className={styles.structureSidePanel}></div>

            <div className={styles.structureImageWrapper}>
              <img
                src={reshouse1}
                alt="Solar Structure"
                className={styles.structureImage}
              />
            </div>

          </div>

          <div className={styles.introText}>
            <p>
              Light Gauge Steel Framing (LGSF) prefab houses are modern residential structures built using cold-formed
              galvanized steel components that are manufactured in a controlled factory environment and assembled on-site.
              This method ensures high precision, consistent quality, and significantly reduces construction time compared
              to traditional RCC methods, making it an efficient solution for contemporary housing needs.
            </p>
            <p>
              These homes are especially suitable for G+1 and G+2 residential buildings, offering a strong yet lightweight
              structure with excellent durability. LGSF prefab houses are designed for faster project completion while maintaining
              structural integrity, making them ideal for urban homes, villas, and other residential applications.
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








      {/* ── SECTION 3: APPLICATIONS OF PREFAB RESIDENTIAL HOUSES ── */}


      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Applications of Prefab<br />
            <span>Residential Houses (G+1 / G+2)</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                LGSF homes offer unmatched speed, strength, and sustainability, making them a future-ready
                construction solution. Their lightweight yet durable structure ensures faster construction,
                reduced costs, and long-term performance with minimal maintenance.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Individual Villas & Bungalows</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Urban Residential Housing</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Farmhouses & Holiday Homes</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Staff Quarters & Worker Housing</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Disaster Relief Housing</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.residenceImageCard}>

            <div className={styles.residenceSideAccent}></div>

            <div className={styles.residenceImageFrame}>
              <img
                src={reshouse2}
                alt="Solar Structure"
                className={styles.residenceImage}
              />
            </div>

          </div>
        </div>
      </section>



      {/* ── SECTION 4: G+1 / G+2 LGSF HOMES - FLEXIBLE DESIGNS ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Prefab Residential Houses</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              G+1 / G+2 LGSF<br />
              Homes  Flexible Designs
            </h2>
            <p>
              LGSF prefab homes for G+1 and G+2 configurations offer flexible modern designs with spacious layouts,
              balconies, and open living areas, while delivering key advantages like faster construction, lightweight
              structure, durability, low maintenance, and eco-friendly performance. These homes provide a perfect balance
              of style, efficiency, and long-term reliability for modern residential living.
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




      {/* ── SECTION 5: KEY FEATURES OF LGSF PREFAB RESIDENTIAL HOUSES ── */}
      <div className={styles.containerhouse}>
        <div className={styles.containerHouseFlex}>
          <div className={styles.containerText}>
            <h2>Key Features of LGSF Prefab <br /> <span>Residential Houses (G+1 / G+2)</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>LGSF prefab homes (G+1 / G+2) deliver fast, strong, and sustainable
            modern living with precise, durable construction.</p>
        </div>
        <div className={styles.residentialFeatureGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={`${styles.residentialFeatureCard} ${item.active ? styles.activeCard : ""
                }`}
            >
              {/* Side Hover Layer */}
              <span className={styles.sideHover}></span>

              <div className={styles.cardInner}>
                <div className={styles.featureIcon}>
                  {item.icon}
                </div>

                <h3 className={styles.featureTitle}>
                  {item.title}
                </h3>

                <p className={styles.featureDescription}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* ── SECTION 6: WHY CHOOSE L&R & OUR CONSTRUCTION PROCESS ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose L&R & <br /><span>Our Construction Process</span></h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.houseImageContainer}>
            <div className={styles.houseAccentBar}></div>
            <div className={styles.houseImageWrapper}>
              <img
                src={reshouse3}
                alt="Solar Structure"
                className={styles.houseImage}
              />
            </div>

          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>At L&R Green Pvt Ltd, we combine innovation, precision engineering, and sustainable practices
              to deliver high-performance LGSF prefab homes tailored to your needs. With a skilled design team,
              premium galvanized steel materials, cost-effective solutions, and reliable on-time delivery, we
              ensure a seamless and efficient building experience from start to finish.</p>
            <p>Our construction process is streamlined for speed and accuracy, starting with off-site fabrication
              of precision steel components, followed by lightweight foundation preparation. The structure is then
              assembled using advanced fastening systems, completed with high-quality cladding, insulation, and
              customized interior and exterior finishes to create durable and comfortable living spaces.</p>
          </div>
        </div>
      </section>





      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Find quick answers to common questions about LGSF prefab residential houses (G+1 / G+2),
            including construction, durability, and benefits. Understand why they are a fast, reliable, and modern housing solution.</p>
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
            <img src={reshouse4} alt="warehouse" />
          </div>
        </div>
      </section>




      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your  Prefab Residential  Houses (G+1 / G+2)?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized insulated
          Prefab Residential Houses (G+1 / G+2) solutions tailored to your site needs.
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

export default PrefabResidentialHouse;
