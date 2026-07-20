import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabRailwayShelters.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Hammer, Shield, Layers, Wind
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import railway1 from '../assets/PREFAB/railway/railway1.png'
import railway2 from '../assets/PREFAB/railway/railway2.jpg'
import railway3 from '../assets/PREFAB/railway/railway3.jpg'
import design from '../assets/PREFAB/railway/design.png'
import design1 from '../assets/PREFAB/railway/design1.png'

const PrefabRailwayShelters = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const cardsData = [
    {
      id: 1,
      Icon: Hammer,
      title: 'Heavy-duty steel framework',
      description: 'Engineered structural members for high load capacity.',
      isActive: false,
    },
    {
      id: 2,
      Icon: Shield,
      title: 'Corrosion-resistant coatings',
      description: 'Wipe-clean surfaces and durable finishes simplify daily upkeep.',
      isActive: true,
    },
    {
      id: 3,
      Icon: Layers,
      title: 'Pre-engineered roofing',
      description: 'Metal sheets, insulated sandwich panels or polycarbonate.',
      isActive: false,
    },
    {
      id: 4,
      Icon: Wind,
      title: 'High wind-load resistant',
      description: 'Scale your canteen up or down as project headcount changes.',
      isActive: false,
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are prefab railway & telecom shelters used for",
      a: "These modular shelters are used to house critical telecom equipment, signaling systems, power generators, or act as passenger waiting shelters on railway platforms.",
    },
    {
      id: 1,
      q: "How durable are these shelters?",
      a: "They are built with heavy-duty steel structures and corrosion-resistant materials, ensuring long-term durability in harsh weather conditions.",
    },
    {
      id: 2,
      q: "Can the shelters be customized?",
      a: "Absolutely. We manufacture shelters in standard sizes and offer fully custom dimensions. Interior fit-outs for cable management, air conditioning, and battery racks can be specified.",
    },
    {
      id: 3,
      q: "How long does installation take?",
      a: "Because all components are pre-fabricated and pre-drilled at our facility, a standard telecom shelter cabin can be installed in as little as 1-2 days, while larger railway platform shelters typically take 3-7 days.",
    },
    {
      id: 4,
      q: "Are these shelters suitable for remote locations?",
      a: "Yes. Their prefabricated, lightweight components are easily transported and assembled on-site with minimal equipment, making them ideal for remote or difficult terrains.",
    },
  ];

  return (

    <>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Prefab Railway &  <br />
            <span>Prefab Railway & Telecom Shelters
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Durable & weather-resistant railway infrastructure solutions — engineered for safety,
            longevity and rapid deployment across platforms, yards and operational zones.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>

      {/* ── Reliable Prefabricated Shelter Solutions ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Reliable Prefabricated  <br />
            <span>Canteen Infrastructure</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introGrid}>
          <div className={styles.cardContainer}>
            {/* Decorative background shape */}
            <div className={styles.bgDecoration}></div>

            {/* Main image wrapper */}
            <div className={styles.imageWrapper}>
              <img
                src={railway2}
                alt={"Railway Station Platform"}
                className={styles.cardImage}
              />
            </div>
          </div>
          <div className={styles.introContent}>
            <p>
              Our prefabricated shelters are expertly designed to meet the demands of railway platforms,
              telecom sites, and various operational zones. Built using high-quality materials and modular
              construction techniques, these structures provide dependable protection against harsh weather
              conditions while ensuring structural stability in high-usage environments.
            </p>
            <p>
              Engineered for efficiency and durability, these shelters allow for quick installation with minimal
              site disruption. Their long-lasting performance, low maintenance requirements, and adaptable design
              make them an ideal solution for projects that require both speed and reliability in challenging conditions.
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




      {/* ── Purpose & Application ── */}
      <section className={styles.canteenSection}>
        <div className={styles.canteenSectionHeader}>
          <h2>
            Reliable Prefabricated  <br />
            <span>Canteen Infrastructure</span>
          </h2>
          <div className={styles.canteenSectionDivider} />
        </div>

        <div className={styles.canteenSectionGrid}>
          <div className={styles.canteenSectionBody}>
            <p>
              Railway shelters provide essential protection for passengers, staff, and equipment against harsh
              weather conditions. They support multiple operational needs across platforms and railway environments.
            </p>
            <ul>
              <li>Passenger waiting areas</li>
              <li>Platform shade structures</li>
              <li>Ticket counter shelters</li>
              <li>Equipment protection sheds</li>
              <li>Maintenance bay shelters</li>
              <li>Railway yard structures</li>
            </ul>
            <p>
              Our prefabricated railway shelters are designed for rapid installation, structural stability,
              and long service life. They ensure reliable performance while minimizing maintenance.
            </p>
          </div>

          <div className={styles.canteenSectionCardWrapper}>
            <div className={styles.canteenSectionCardBg}></div>
            <div className={styles.canteenSectionCardFrame}>
              <img
                src={railway2}
                alt={"Railway Station Platform"}
                className={styles.canteenSectionCardImg}
              />
            </div>
          </div>
        </div>
      </section>



      {/* ── How We Create (Blue Banner) ── */}
      {/* ── Core Benefits Banner ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Prefabricated Staff Canteen</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              How We Create  & <br />
              Prefabricated Staff Canteens
            </h2>
            <p>
              At L&R Enterprises, we design and build prefabricated staff canteens tailored to
              site requirements, from planning efficient layouts to manufacturing and on-site
              installation. Our process ensures fast delivery, quality construction, and ready-to-use dining spaces.
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




      {/* ── Structural Features ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Railway Shelters  <br />
              <span>Structural Features</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            The roofing options include metal sheets, insulated sandwich panels,
            or polycarbonate sheets depending on project requirements.
          </p>
        </div>
        <div className={styles.canteenFeatureGrid}>
          {cardsData.map(({ id, Icon, title, description, isActive }) => (
            <div
              key={id}
              className={`
            ${styles.canteenFeatureCard} 
            ${isActive ? styles.canteenFeatureCardActive : styles.canteenFeatureCardStandard} 
            ${id === 2 ? styles.canteenFeatureCardDelayed : ''}
          `}
            >
              <div className={styles.canteenFeatureIconBox}>
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.canteenFeatureTitle}>{title}</h3>
              <p className={styles.canteenFeatureDescription}>{description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── Advantages ── */}
      <section className={styles.structSec}>
        <div className={styles.structTitleArea}>
          <h2>
            Advantages of Prefabricated  <br />
            <span>Railway & Telecom Shelters</span>
          </h2>
          <div className={styles.secHeadLine} />
        </div>
        <div className={styles.secStructFlex}>

          <div className={styles.HomeContainerPara}>
            <p>Our shelters are designed as per safety and structural guidelines, ensuring reliability in public
              infrastructure projects. They deliver consistent performance and long-term durability across demanding site conditions.</p>
            <div className={styles.featureListWrap}>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Quick installation with minimal site disruption</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Long-lasting steel structure</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Low maintenance requirements</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Customizable design and span</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Expandable modular system</p>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Suitable for remote and high-traffic zones</p>
              </div>

            </div>
          </div>

          <div className={styles.card}>
            {/* Decorative background shape */}
            <div className={styles.cardBackground}></div>

            {/* Main image container */}
            <div className={styles.cardFrame}>
              <img
                src={railway3}
                alt={"Railway Station Platform"}
                className={styles.cardImg}
              />
            </div>
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
          <p>Quick answers to common queries about modular
            staff canteen design, installation, and usage.</p>
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
            <img src={railway1} alt="warehouse" />
          </div>
        </div>
      </section>





      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Prefab Railway & Telecom Shelters?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Clean Room tailored to your storage needs.
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

export default PrefabRailwayShelters;
