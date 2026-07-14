import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/pufsandwich.module.css";

const PufSandwich = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const typesOfPanels = [
    {
      title: "Roof PUF Panels",
      desc: "Thermally efficient and durable panels designed for strong roofing applications with excellent insulation performance.",
      img: "/Images/pufpanel1.jpg",
    },
    {
      title: "Wall PUF Panels",
      desc: "Used for vertical wall cladding and internal partitions, providing strong insulation and clean finishing.",
      img: "/Images/pufpannel2.jpg",
    },
    {
      title: "Rock Wool Panels",
      desc: "Fire-resistant insulation panels made with rock wool core, offering excellent thermal and acoustic performance.",
      img: "/Images/pufpanel3.jpg",
    },
    {
      title: "Glass Wool Panels",
      desc: "Lightweight insulation panels with glass wool core, providing effective thermal insulation and noise reduction.",
      img: "/Images/pufpanel4.jpg",
    },
  ];

  const advantages = [
    "Rapid factory fabrication cuts installation time",
    "Weatherproof, insulated and fire-retardant",
    "Customizable sizes, layouts and HVAC integrations",
    "Durable and low maintenance structure",
    "Easy to relocate and reuse across sites",
    "Compliant with industry safety and building standards",
  ];

  const faqs = [
    {
      id: 0,
      q: "What are prefab railway & telecom shelters used for?",
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

  const CheckIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#2b3a55" />
      <path
        d="M8 12L11 15L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/pufimage.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            HIGH-PERFORMANCE <br />
            PUF SANDWICH PANEL
          </h1>
          <p className={styles.subtitle}>
            Durable &amp; weather-resistant railway infrastructure solutions —
            engineered for safety, longevity and rapid deployment across
            platforms, yards and operational zones.
          </p>
          <button className={styles.btnPrimary}>
            Contact us &nbsp;
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── PUF SANDWICH PANELS INTRO ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          <div className={styles.introVisuals}>
            <div className={styles.introBgShape}></div>
            <div className={styles.introImgMain}>
              <img src="/Images/sandwichpanel3.jpg" alt="PUF Sandwich Panel" />
            </div>
          </div>
          <div className={styles.introText}>
            <h2 className={styles.secTitle}>
              PUF Sandwich <span>Panels</span>
            </h2>
            <div className={styles.divider} />
            <p>
              PUF (Polyurethane Foam) Sandwich Panels by L&amp;R Green Pvt Ltd
              are prefabricated construction materials made with a rigid
              polyurethane foam core placed between durable metal facings such
              as pre-painted galvanized iron (PPGI), galvanized steel, or
              aluminum. This engineered structure offers an ideal combination of
              strength, insulation, and long- term durability, making it highly
              suitable for modern construction requirements.
            </p>
            <p>
              These panels are widely used in industrial, commercial, and
              residential projects due to their excellent thermal insulation,
              lightweight nature, and fast installation process. They help
              reduce energy consumption, enhance indoor comfort, and
              significantly shorten construction timelines, making them a
              reliable and cost-effective solution for sustainable building
              systems.
            </p>
            <button
              className={styles.btnSecondary}
              style={{ marginTop: "16px" }}
            >
              Get Contact &nbsp;
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── KEY SPECIFICATIONS & COMPOSITION ── */}
      <section className={styles.specsSec}>
        <div className={styles.specsContainer}>
          <div className={styles.specsText}>
            <h2 className={styles.secTitle}>
              Key Specifications <br />
              <span>&amp; Composition</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.specsDesc}>
              PUF Sandwich Panels by L&amp;R Green Pvt Ltd feature a rigid
              polyurethane foam core between durable metal facings, ensuring
              strong insulation and structural performance.
            </p>
            <div className={styles.specsList}>
              <div className={styles.specsItem}>
                <div className={styles.specsIcon}>
                  <CheckIcon />
                </div>
                <span>
                  <strong>Core Material:</strong> Rigid Polyurethane Foam (PUF)
                  with low thermal conductivity
                </span>
              </div>
              <div className={styles.specsItem}>
                <div className={styles.specsIcon}>
                  <CheckIcon />
                </div>
                <span>
                  <strong>Facing Materials:</strong> 0.3mm – 0.6mm Pre-Painted
                  Galvanized Iron Stainless Steel
                </span>
              </div>
              <div className={styles.specsItem}>
                <div className={styles.specsIcon}>
                  <CheckIcon />
                </div>
                <span>
                  <strong>Panel Thickness:</strong> 30mm – 150mm (based on
                  insulation requirements)
                </span>
              </div>
              <div className={styles.specsItem}>
                <div className={styles.specsIcon}>
                  <CheckIcon />
                </div>
                <span>
                  <strong>Standard Width:</strong> 1000mm – 1150mm
                </span>
              </div>
              <div className={styles.specsItem}>
                <div className={styles.specsIcon}>
                  <CheckIcon />
                </div>
                <span>
                  <strong>Density:</strong> 38–42 kg/m³ (typical PUF core)
                </span>
              </div>
            </div>
          </div>
          <div className={styles.specsVisuals}>
            <div className={styles.specsBgShape}></div>
            <div
              className={styles.specsImgMain}
              style={{ backgroundImage: "url('/Images/keyimage.jpg')" }}
            ></div>
          </div>
        </div>
      </section>

      {/* ── ADVANCED MANUFACTURING TECHNOLOGY ── */}
      <section className={styles.mfgSec}>
        <div className={styles.mfgWatermark}>L&amp;R PUF SANDWICH PANELS</div>
        <img
          src="/Images/tech2.png"
          alt="Manufacturing equipment"
          className={styles.mfgTech2}
        />
        <div className={styles.mfgContainer}>
          <div className={styles.mfgContent}>
            <h2>
              Advanced Manufacturing <br />
              Technology for PUF Sandwich Panels
            </h2>
            <p>
              At L&amp;R Green Pvt Ltd, PUF Sandwich Panels are manufactured
              using advanced continuous production lines that ensure uniform
              foam expansion, precise density control, and strong bonding
              between metal facings and the polyurethane core, along with
              precision cutting, edge finishing, and strict quality testing for
              insulation and structural strength, resulting in high- performance
              panels that deliver durability, efficiency, and long-lasting
              reliability.
            </p>
          </div>
          <div className={styles.mfgVisuals}>
            <img src="/Images/tech1.png" alt="Stacked PUF panels" />
          </div>
        </div>
      </section>

      {/* ── TYPES OF PUF PANELS ── */}
      <section className={styles.typesSec}>
        <div className={styles.typesContainer}>
          <div className={styles.typesHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Types of <br />
                <span>PUF Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.typesDesc}>
              At L&amp;R Green Pvt Ltd, we offer a wide range of PUF Sandwich
              Panels for insulation, roofing, wall systems, and cold storage,
              ensuring durability, performance, and energy efficiency for all
              applications.
            </p>
          </div>
          <div className={styles.typesGrid}>
            {typesOfPanels.map((panel, i) => (
              <div key={i} className={styles.typeCard}>
                <div
                  className={styles.typeImg}
                  style={{ backgroundImage: `url('${panel.img}')` }}
                />
                <div className={styles.typeCardContent}>
                  <h4>{panel.title}</h4>
                  <p>{panel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES SECTION ── */}
      <section className={styles.advSec}>
        <div className={styles.advContainer}>
          <div className={styles.advImgOuter}>
            <div className={styles.advImgCard} />
            <div
              className={styles.advImgWrap}
              style={{
                backgroundImage: "url('/Images/railandtele.jpg')",
              }}
            />
          </div>
          <div className={styles.advText}>
            <h2 className={styles.secTitle}>
              Advantages of Prefabricated <br />
              <span>Railway &amp; Telecom Shelters</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Choosing a factory-built modular shelter over conventional
              brick-and-mortar construction delivers measurable project and
              lifecycle benefits:
            </p>
            <div className={styles.advList}>
              {advantages.map((adv, i) => (
                <div key={i} className={styles.advItem}>
                  <span className={styles.advNum}>{i + 1}</span>
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <span className={styles.faqBreadcrumb}>• FAQ</span>
              <h2 className={styles.secTitle} style={{ marginBottom: "14px" }}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} style={{ marginBottom: 0 }} />
            </div>
            <p className={styles.faqDesc}>
              Find answers to common questions about sandwich panels, insulation
              performance, applications, and building solutions.
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
                    onClick={() =>
                      setOpenFaq(openFaq === faq.id ? null : faq.id)
                    }
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <polyline points="19 12 12 19 5 12" />
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      )}
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
            <div className={styles.faqImgOuter}>
              <div
                className={styles.faqImg}
                style={{
                  backgroundImage: "url('/Images/feqsheet.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/Images/last26.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Prefab Railway &amp; Telecom Shelters?</h2>
          <p>
            Connect with our team to design your custom modular railway shelter,
            offering a robust, durable, and compliant shelter solution built to
            your exact specifications.
          </p>
          <button
            className={styles.btnSecondary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PufSandwich;
