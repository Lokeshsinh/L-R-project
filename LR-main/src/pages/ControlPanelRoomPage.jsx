import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ControlPanelRoom.module.css";
import {
  ArrowRight, Plus, X, ArrowUpRight
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import control1 from '../assets/PREFAB/controllRoom/control1.png'
import control2 from '../assets/PREFAB/controllRoom/control2.png'
import control3 from '../assets/PREFAB/controllRoom/control3.png'
// ─── DATA ────────────────────────────────────────────────────────────────────

const functions = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M15 3l-9 5v8c0 5.25 3.84 10.15 9 11.35C20.16 26.15 24 21.25 24 16V8l-9-5z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <path d="M10 15l3.5 3.5L20 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Power Plants",
    desc: "Centralised control housing for generation and distribution assets.",
    highlight: false,
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M15 2v4M15 24v4M2 15h4M24 15h4M5.5 5.5l2.8 2.8M21.7 21.7l2.8 2.8M5.5 24.5l2.8-2.8M21.7 8.3l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Solar Parks",
    desc: "Field-deployed enclosures resilient to heat, dust, and UV exposure.",
    highlight: true,
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="3" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M10 8V5M20 8V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="14" x2="27" y2="14" stroke="currentColor" strokeWidth="1.4" />
        <rect x="8" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <rect x="16" y="17" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none" />
      </svg>
    ),
    title: "Industrial Facilities",
    desc: "Process automation rooms integrated with existing plant layouts.",
    highlight: false,
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="3" y="10" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M15 10V5M9 10V7M21 10V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Infrastructure Projects",
    desc: "Process automation rooms integrated with existing plant layouts.",
    highlight: false,
  },
];


const benefits = [
  {
    id: 0,
    title: "Rapid Deployment",
    desc: "Pre-engineered units shipped factory-tested for fast on-site installation.",
  },
  {
    id: 1,
    title: "Enhanced Equipment Protection",
    desc: "Sealed enclosure shields electronics from environmental stress.",
  },
  {
    id: 2,
    title: "Easy Maintenance Access",
    desc: "Designed clearances and access doors simplify routine service.",
  },
  {
    id: 3,
    title: "Weatherproof & Dustproof Structure",
    desc: "Protects dust and moisture, ensuring consistent internal performance.",
  },
  {
    id: 4,
    title: "Rapid Deployment",
    desc: "Can be moved and reused across different project location needs.",
  },
];

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

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const ControlPanelRoomPage = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [activeBenefit, setActiveBenefit] = useState(1);
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
        <div className={styles.functionInner}>
          <div className={styles.functionTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Function &amp; <span>Importance</span>
              </h2>
              <div className={styles.featuresDivider} />
            </div>
            <p className={styles.functionDesc}>
              Control panel rooms protect electrical systems, ensuring reliable operations.
            </p>
          </div>
          <div className={styles.functionGrid}>
            {functions.map((item, i) => (
              <div
                key={i}
                className={`${styles.functionCard} ${item.highlight ? styles.functionCardActive : ""}`}
              >
                <div className={styles.functionIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
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
      <section className={styles.structuralSec}>
        <div className={styles.structuralInner}>
          <div className={styles.structuralText}>
            <h2>
              Structural Strength<br />
              &amp; Safety
            </h2>
            <div className={styles.structuralDivider} />
            <p>
              Engineered with strong steel frames and high-quality insulated panels, these
              control panel rooms ensure structural stability while maintaining optimal
              internal conditions for safe and reliable operation of electrical equipment.
            </p>
          </div>
          <div className={styles.structuralImgCol}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Structural Control Panel Room"
            />
            <div className={styles.structuralWatermark}>CONTROL PANEL</div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className={styles.benefitsSec}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Benefits of<br />
                <span>Control Panel</span>
              </h2>
              <div className={styles.featuresDivider} />
              <p className={styles.benefitsSubText}>
                Built with advanced engineering elements to deliver high safety, optimised
                performance, and dependable protection for critical electrical systems in
                demanding environments.
              </p>
            </div>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitsList}>
              {benefits.map((b) => (
                <div
                  key={b.id}
                  className={`${styles.benefitItem} ${activeBenefit === b.id ? styles.benefitItemActive : ""}`}
                  onClick={() => setActiveBenefit(b.id)}
                >
                  <div className={styles.benefitQuestion}>
                    <span>{b.title}</span>
                    <span className={styles.benefitArrow}>{activeBenefit === b.id ? "−" : "+"}</span>
                  </div>
                  {activeBenefit === b.id && (
                    <div className={styles.benefitAnswer}>{b.desc}</div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.benefitsImgCol}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
                alt="Control Panel Benefits"
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