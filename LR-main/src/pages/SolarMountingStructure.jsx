import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarMountingStructure.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import solarmodule1 from '../assets/solar/solarModule/solarmodule.png'
import solarmodule2 from '../assets/solar/solarModule/solarmodule2.png'
import solarmodule3 from '../assets/solar/solarModule/solarmodule3.png'
import solarmodule4 from '../assets/solar/solarModule/solarmodule4.png'
import user1 from '../assets/solar/solarModule/user1.png'
import user2 from '../assets/solar/solarModule/user5.png'
import user3 from '../assets/solar/solarModule/user3.png'
import user4 from '../assets/solar/solarModule/user4.png'
import design from '../assets/solar/solarModule/design.png'
import design1 from '../assets/solar/solarModule/design1.png'


const SolarMountingStructure = () => {
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
      title: "Rails & Frames",
      description:
        "Provide the main structural base for secure panel alignment and stable system support.",
    },
    {
      id: 2,
      image: user2,
      title: "Electrical System Design",
      description:
        "Hold solar panels firmly in place while maintaining proper spacing and positioning.",
    },
    {
      id: 3,
      image: user3,
      title: "Fasteners & Screws",
      description:
        "Ensure strong, tight connections between all mounting parts for long-lasting stability.",
    },
    {
      id: 4,
      image: user4,
      title: "Heavy-Duty Mounts",
      description:
        "Deliver strong anchoring support for durable and reliable solar structure performance.",
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What is a solar module mounting structure?",
      a: "A solar module mounting structure is the engineered framework that holds solar panels securely at the optimum tilt angle and height to maximize energy generation.",
    },
    {
      id: 1,
      q: "Why are mounting structures important in solar systems?",
      a: "They provide strength, safety, and correct tilt angle, which helps improve solar panel performance and system lifespan.",
    },
    {
      id: 2,
      q: "What materials are used in mounting structures?",
      a: "We use hot-dip galvanized steel, anodized aluminum, and stainless steel fasteners to ensure 25+ years of corrosion-free performance.",
    },
    {
      id: 3,
      q: "Can mounting structures withstand harsh weather?",
      a: "Yes, our structures are custom-designed to withstand extreme wind speeds up to 170 km/h, heavy snow loads, and seismic activities based on site locations.",
    },
    {
      id: 4,
      q: "Which type of mounting structure should I choose?",
      a: "It depends on your installation space. We offer rooftop mounting systems for space-efficiency, ground-mounted systems for large open areas, and carport or floating structures for specialized needs.",
    },
  ];


  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ════ SECTION 1 · HERO ════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            solar Module   <br />
            <span>mounting structure
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd delivers advanced mounting solutions
            designed for maximum efficiency, safety, and long-term performance.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>









      {/* ════ SECTION 2 · WHAT IS A SOLAR MODULE MOUNTING STRUCTURE ════ */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What is a Solar Module  <br />
            <span>Mounting Structure</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.structureCard}>

            <div className={styles.structureSidePanel}></div>

            <div className={styles.structureImageWrapper}>
              <img
                src={solarmodule1}
                alt="Solar Structure"
                className={styles.structureImage}
              />
            </div>

          </div>
          <div className={styles.introText}>
            <p>
              A solar mounting structure is the essential support framework that holds
              solar panels securely in place. It ensures proper tilt, alignment, and
              stability so the panels can receive maximum sunlight and generate efficient
              energy output. This structure also protects the system from wind, weather,
              and other external conditions, making the entire solar installation safe and long-lasting.
            </p>
            <p>
              At L&R Green Pvt Ltd, we design strong and reliable solar mounting structures for all
              types of installations including rooftop, ground, and large-scale solar projects.
              Our solutions are built with high-quality materials and smart engineering to
              ensure durability, safety, and maximum performance in every project.
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






      {/* ════ SECTION 3 · PRECISION ENGINEERED COMPONENTS ════ */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Precision Engineered  <br />
              <span>Solar Mounting Components</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            At L&R Green Pvt Ltd, we provide high-quality solar mounting components designed
            for strength, accuracy, and long-term reliability in all installation conditions.
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






      {/* ════ SECTION 4 · BENEFITS & MATERIALS (dark navy banner) ════ */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Module mounting structure</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Benefits & Materials of <br />
              Solar Mounting Structures
            </h2>
            <p>
              Solar mounting structures are designed for long-lasting reliability,
              maximum energy output, and safe installation across all solar projects.
              At L&R Green Pvt Ltd, every system is custom-designed for efficiency and
              durability using premium materials like lightweight, corrosion-resistant
              aluminum for rooftops and high-strength galvanized steel for large-scale
              installations, ensuring a perfect balance of strength, safety, and long-term performance.
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






      {/* ════ SECTION 5 · TYPES OF SOLAR MODULE MOUNTING SYSTEMS ════ */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Types of Solar Module <br />
            <span>Mounting Systems</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Solar module mounting structures provide strong support, stability, and proper
                alignment for maximum solar efficiency. At L&R Green Pvt Ltd, we offer durable
                solutions for all types of solar projects.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rooftop Mounting Systems</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Ground Mounting Systems</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Pole Mount Structures</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Solar Tracking Systems</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Floating Solar Structures</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.solarFrameContainer}>
            <div className={styles.solarSideAccent}></div>
            <div className={styles.solarFrameImageBox}>
              <img
                src={solarmodule2}
                alt="Solar Structure"
                className={styles.solarFrameImage}
              />
            </div>

          </div>
        </div>
      </section>







      {/* ════ SECTION 6 · WHY CHOOSE SOLAR EPC SERVICES ════ */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.structureDisplayContainer}>
            <div className={styles.leftDecorPanel}></div>
            <div className={styles.structureImageContainer}>
              <img
                src={solarmodule3}
                alt="Solar Structure"
                className={styles.structureDisplayImage}
              />
            </div>
          </div>
          <div className={styles.solartext}>
            <p>Choosing a Solar EPC service from L&R Green Pvt Ltd ensures a complete,
              hassle-free execution of your solar project under a single responsibility
              model. From design and engineering to procurement, construction, and commissioning,
              everything is managed by one expert team, eliminating coordination issues between
              multiple vendors. This integrated approach improves project efficiency, reduces delays,
              and ensures consistent quality throughout the execution process.</p>
            <p>With strong technical expertise and industry experience, L&R Green Pvt Ltd
              delivers solar plants that are optimized for long-term performance and reliability.
              Our EPC approach focuses on maximizing energy output, ensuring safety compliance,
              and providing end-to-end accountability, making solar investment more secure, predictable,
              and cost-effective for clients.</p>
          </div>
          {/* <div className={styles.solarDisplayContainer}>
            <div className={styles.solarBackgroundShape}></div>
            <div className={styles.solarImageHolder}>
              <img
                src={solarepic4}
                alt="Solar Mounting Structure"
                className={styles.solarDisplayImage}
              />
            </div>
          </div> */}
        </div>
      </section>




      {/* ════ SECTION 7 · FAQ ════ */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>A Solar EPC company like L&R Green Pvt Ltd manages the full solar project lifecycle,
            including design, procurement, construction, testing, and commissioning of the plant.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={solarmodule4} alt="warehouse" />
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



      {/* ════ SECTION 8 · CTA BANNER ════ */}
      <section className={styles.cta}>
        <h2>Ready for Your Module mounting structure?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          insulated  Solar Module mounting structure solutions tailored to your site needs.
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

export default SolarMountingStructure;
