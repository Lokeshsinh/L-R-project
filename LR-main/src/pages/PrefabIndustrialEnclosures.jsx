import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabIndustrialEnclosures.module.css";

const PrefabIndustrialEnclosures = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const typesList = [
    { title: "Equipment Enclosures", desc: "Protect generators, compressors, and control panels" },
    { title: "Soundproof Enclosures", desc: "Reduce noise and meet safety regulations" },
    { title: "Data Center Enclosures", desc: "Secure and temperature-controlled environments" },
    { title: "Pump Houses", desc: "Reliable housing for water and industrial pump systems" },
    { title: "Telecom Enclosures", desc: "Protection for communication systems and base stations" },
    { title: "Control Rooms", desc: "Safe operator spaces for monitoring operations" },
  ];

  const keyFeatures = [
    "Excellent thermal and acoustic insulation",
    "Fire-resistant and weatherproof construction",
    "Corrosion-resistant and durable materials",
    "Modular design for quick installation",
    "Low maintenance with long service life",
  ];

  const whyCards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Custom Engineering",
      desc: "Tailored enclosure designs matching your exact operational process and spatial requirements.",
      highlight: false,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      title: "Quality Manufacturing",
      desc: "Built to industrial standards using heavy-duty panels for long-lasting structural integrity.",
      highlight: false,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Fast Installation",
      desc: "Modular structure allows quick assembly on site, minimizing downtime for your facility.",
      highlight: false,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: "End-to-End Support",
      desc: "From design and manufacturing to delivery and installation, we handle the entire project.",
      highlight: false,
    },
  ];

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

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: "url('/Images/emclosure.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroSubTitle}>L&R Green India Pvt Ltd</p>
          <h1>PREFAB INDUSTRIAL<br />ENCLOSURES</h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd offers durable prefab industrial enclosures with insulated panels for quick installation and efficient protection.
          </p>
          <button className={styles.btnHero}>
            Contact us &nbsp;
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          {/* Top Title */}
          <div className={styles.introTop}>
            <h2 className={styles.secTitle}>
              Smart Enclosure Solutions <br />
              <span>for Industrial Needs</span>
            </h2>
            <div className={styles.divider} />
          </div>

          {/* Bottom Grid: Images Left, Text Right */}
          <div className={styles.introGrid}>
            <div className={styles.introVisuals}>
              <div
                className={styles.imgMain}
                style={{
                  backgroundImage: "url('/Images/encbig.png')",
                }}
              />
              <div
                className={styles.imgSub}
                style={{
                  backgroundImage: "url('/Images/encsmall.jpg')",
                }}
              />
            </div>
            <div className={styles.introText}>
              <p>
                Prefab industrial enclosures are pre-engineered, factory-built structures designed to create safe, enclosed, and controlled environments for industrial equipment, processes, and storage. Manufactured off-site under strict quality standards and assembled quickly at the project location, these enclosures ensure precision, consistency, and high structural performance. They are ideal for industries that require reliable protection from dust, weather, noise, and other external factors.
              </p>
              <p>
                At L&R Green Pvt Ltd, we develop advanced enclosure solutions tailored to meet diverse industrial requirements. Our enclosures are built using high-quality insulated panels that provide excellent thermal efficiency, acoustic control, and durability. Designed to perform in demanding environments, they offer long-lasting strength, minimal maintenance, and flexibility for various applications across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types & Applications ── */}
      <section className={styles.typesSec}>
        <div className={styles.typesContainer}>
          <div className={styles.typesTop}>
            <h2 className={styles.secTitle}>
              Industrial Enclosures <br />
              <span>Types & Applications</span>
            </h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.typesGrid}>
            <div className={styles.typesContent}>
              <p className={styles.typesDesc}>
                L&R Green Pvt Ltd offers versatile prefab industrial enclosures designed for various industrial needs. Each unit ensures durability, safety, and reliable performance for equipment and operations.
              </p>
              <ul className={styles.typesList}>
                {typesList.map((item, i) => (
                  <li key={i}>
                    <span className={styles.bullet}>•</span>
                    <div>
                      <strong>{item.title}</strong> {item.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.typesVisuals}>
              <div
                className={styles.typesImgMain}
                style={{
                  backgroundImage: "url('/Images/type1.jpg')",
                }}
              />
              <div
                className={styles.typesImgSub}
                style={{
                  backgroundImage: "url('/Images/type2.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Manufacturing Strength Banner ── */}
      <section className={styles.mfgBanner}>
        <div className={styles.mfgWatermark}>PREFAB INDUSTRIAL ENCLOSURES</div>
        <div
          className={styles.mfgBgImg}
          style={{
            backgroundImage: "url('/Images/type1.jpg')",
          }}
        />
        <div className={styles.mfgContainer}>
          <div className={styles.mfgContent}>
            <h2>Our Manufacturing <br />Strength</h2>
            <p>
              At L&R Green Pvt Ltd, our prefab industrial enclosures are built in advanced facilities using precision engineering and strict quality control. We use high-quality insulated panels like PUF, Rockwool, and Glasswool to ensure excellent thermal insulation, fire resistance, and durability. Each unit is tested for strength, accuracy, and performance to meet modern industrial needs.
            </p>
          </div>
          <div className={styles.mfgVisuals}>
            <img src="/Images/menufacture.png" alt="Manufacturing Strength" className={styles.mfgImg} />
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresTop}>
            <h2 className={styles.secTitle}>
              Key Features & Advantages <br />
              <span>For Industrial Enclosures</span>
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featuresVisuals}>
              <div
                className={styles.featuresImgMain}
                style={{
                  backgroundImage: "url('/Images/keybig.jpg')",
                }}
              />
              <div
                className={styles.featuresImgSub}
                style={{
                  backgroundImage: "url('/Images/keysmall.jpg')",
                }}
              />
            </div>

            <div className={styles.featuresRight}>
              <p className={styles.featuresDesc}>
                L&R Green Pvt Ltd offers high-performance prefab industrial enclosures built for reliability, safety, and long-term efficiency. Our solutions use advanced insulation and strong construction to meet demanding industrial needs.
              </p>
              <div className={styles.numList}>
                {keyFeatures.map((feat, index) => (
                  <div key={index} className={styles.numItem}>
                    <div className={styles.checkCircle}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>
                    </div>
                    <div className={styles.numText}>{feat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose L&R ── */}
      <section className={styles.whySec}>
        <div className={styles.whyHeader}>
          <div>
            <h2 className={styles.secTitle}>
              Why Choose L&R For <br />
              <span>Industrial Enclosures</span>
            </h2>
            <div className={styles.divider} />
          </div>
          <p className={styles.whyDesc}>
            With years of expertise in prefab engineering, L&R Green Pvt Ltd is your trusted partner for high-performance industrial infrastructure.
          </p>
        </div>
        
        <div className={styles.whyCards}>
          {whyCards.map((card, i) => (
            <div
              key={i}
              className={`${styles.whyCard} ${
                card.highlight ? styles.whyCardHighlight : ""
              }`}
            >
              <div className={styles.whyIcon}>{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Get quick answers to common queries about L&R Green Pvt Ltd prefab industrial enclosures, including durability, installation, materials, and applications.
            </p>
          </div>

          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${
                    openFaq === faq.id ? styles.faqItemActive : ""
                  }`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "↓" : "↑"}
                    </span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqBody}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={styles.faqImg}
              style={{
                backgroundImage: "url('/Images/question2.jpg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/Images/lastimage.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Industrial Enclosures ?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully customized<br />Executive Industrial Enclosures tailored to your storage needs.
          </p>
          <button className={styles.btnSecondary}>
            Contact US
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrefabIndustrialEnclosures;
