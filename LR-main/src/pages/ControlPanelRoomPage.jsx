import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ControlPanelRoom.module.css";
import {
  ArrowRight, Plus, X, ArrowUpRight, Zap,
  Sun,
  Wrench,
  Building2,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import control1 from '../assets/PREFAB/controllRoom/control1.png'
import control2 from '../assets/PREFAB/controllRoom/control2.png'
import control3 from '../assets/PREFAB/controllRoom/control3.png'
import control4 from '../assets/PREFAB/controllRoom/control4.png'
import design from '../assets/PREFAB/controllRoom/design.png'
import design1 from '../assets/PREFAB/controllRoom/design1.png'
// ─── DATA ────────────────────────────────────────────────────────────────────





const faqs = [
  {
    id: 0,
    q: "What is a control panel room?",
    a: "A control panel room is a prefabricated modular enclosure designed to house electrical panels, switchgear, automation systems, and other critical control equipment in a safe and secure environment.",
  },
  {
    id: 1,
    q: "Where are control panel rooms used?",
    a: "They are used in power plants, solar projects, industries, and infrastructure facilities.",
  },
  {
    id: 2,
    q: "Are these rooms weatherproof?",
    a: "Yes. L&R control panel rooms are built with sandwich panels and sealed enclosures that provide dust-proof and moisture-resistant protection for all climatic conditions.",
  },
  {
    id: 3,
    q: "Can control panel rooms be customized?",
    a: "Absolutely. We offer full customization including room size, insulation type, ventilation, cable management systems, flooring, and internal layout based on your project requirements.",
  },
  {
    id: 4,
    q: "Are they easy to install and relocate?",
    a: "Yes. Our control panel rooms are pre-engineered and factory-tested for fast on-site installation. They can also be dismantled and relocated to different project sites when needed.",
  },
];

const features = [
  {
    title: "Rapid Deployment:",
    description:
      "Pre-engineered units shipped factory-tested for fast on-site installation.",
  },
  {
    title: "Enhanced Equipment Protection:",
    description:
      "Sealed envelope safeguards electronics from environmental stress.",
    active: true,
  },
  {
    title: "Easy Maintenance Access:",
    description:
      "Designed clearances and access doors simplify routine service.",
  },
  {
    title: "Weatherproof & Dustproof Structure:",
    description:
      "Prevents dust and moisture, ensuring consistent internal performance.",
  },
  {
    title: "Rapid Deployment:",
    description:
      "Can be moved and reused across different project locations easily.",
  },
];

const cards = [
  {
    icon: <Zap size={44} strokeWidth={1.5} />,
    title: "Power Plants",
    description:
      "Centralized control housing for generation and distribution assets.",
  },
  {
    icon: <Sun size={44} strokeWidth={1.5} />,
    title: "Solar Parks",
    description:
      "Field-deployed enclosures resilient to heat, dust and UV exposure.",
    active: true,
  },
  {
    icon: <Wrench size={44} strokeWidth={1.5} />,
    title: "Industrial Facilities",
    description:
      "Process automation rooms integrated with existing plant layouts.",
  },
  {
    icon: <Building2 size={44} strokeWidth={1.5} />,
    title: "Infrastructure Projects",
    description:
      "Process automation rooms integrated with existing plant layouts.",
  },
];


// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const ControlPanelRoomPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Control Panel<br />
            <span>Rooms
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Secure & engineered modular enclosures for critical
            electrical systems.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>


      {/* ── Prefabricated Control Panel Rooms ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Prefabricated Control <br />
            <span>Panel Rooms</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              L&R Enterprises manufactures prefabricated control panel rooms designed to safely house electrical
              panels, switchgear, and automation systems across industries like power, solar, and manufacturing.
              These modular units ensure reliable performance by protecting critical equipment in demanding environments.
            </p>
            <p>
              Built with strong steel frames and insulated panels, they offer protection against dust, moisture,
              and temperature changes. With quick installation, easy maintenance, and flexible design, they provide
              a durable and efficient solution for modern projects.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <img
                src={control2}
                alt="Prefab Building"
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.bluePanel}></div>
            </div>
          </div>
        </div>
      </section>





      {/* ── Function & Importance ── */}
      <section className={styles.functionSec}>
        <div className={styles.functionTopRow}>
          <div className={styles.functionText}>
            <h2>
              Function & <span>Importance</span>
            </h2>
            <div className={styles.funtcionsLine} />
          </div>
          <p>
            Control panel rooms protect electrical systems, ensuring reliable operations.
          </p>
        </div>
        <div className={styles.cardsSection}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${card.active ? styles.activeCard : ""
                }`}
            >
              <div className={styles.icon}>
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>




      {/* ── Key Features ── */}
      <section className={styles.epsSection}>
        <div className={styles.epsHeading}>
          <h2>
            Applications of<br />
            <span>Rockwool Panels</span>
          </h2>
          <div className={styles.headingDivider}></div>
        </div>

        <div className={styles.epsContentWrapper}>
          <div className={styles.prefabCard}>
            <div className={styles.prefabWrapper}>
              <img
                src={control3}
                alt="Prefab Building"
                className={styles.prefabImage}
              />
              <div className={styles.prefabOverlay}></div>
              <div className={styles.prefabAccentPanel}></div>
            </div>
          </div>

          <div className={styles.epsContent}>
            <p>
              Designed with insulated panels, fire-resistant materials, temperature control systems,
              cable management support, ventilation integration, and anti-static flooring for safe,
              efficient, and reliable performance in critical environments.
            </p>
            <ul>
              <li>Insulated Wall Panels</li>
              <li>Fire-resistant construction options</li>
              <li>Temperature control provisions</li>
              <li> Cable tray support systems</li>
              <li>Ventilation & air conditioning integration</li>
              <li>Anti-static flooring options</li>
            </ul>
            <p>Built with advanced engineering elements to deliver high safety, optimized performance,
              and dependable protection for critical electrical systems in demanding environments.</p>
          </div>
        </div>
      </section>





      {/* ── Structural Strength & Safety ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Control panel Room</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Structural Strength <br />
              & Safety
            </h2>
            <p>
              Engineered with strong steel frames and high-quality insulated panels,
              these control panel rooms ensure structural stability while maintaining
              optimal internal conditions for safe and reliable operation of electrical equipment.
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





      {/* ── Benefits ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.BenfitControlFlex}>
          <div className={styles.solarEpicTitle}>
            <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Built with advanced engineering elements to deliver high safety, optimized performance,
            and dependable protection for critical electrical systems in demanding environments.</p>
        </div>
        <div className={styles.SolarEpicFLex}>

          <div className={styles.benefitCards}>
            {features.map((item, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${item.active ? styles.benefitCardActive : ""
                  }`}
              >
                <div className={styles.benefitDot}></div>

                <div className={styles.benefitContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/*  */}
          <div className={styles.applicationsCard}>
            <div className={styles.applicationsFrame}>
              <img
                src={control4}
                alt="Prefab Building"
                className={styles.applicationsMedia}
              />
              <div className={styles.applicationsOverlay}></div>
              <div className={styles.applicationsSidePanel}></div>
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
          <p>Essential answers to common questions about clean room design, functionality, and benefits.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={control1} alt="warehouse" />
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


      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Control Panel Room?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Control Panel Room tailored to your storage needs.
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

export default ControlPanelRoomPage;