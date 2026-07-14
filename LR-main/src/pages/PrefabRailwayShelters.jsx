import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabRailwayShelters.module.css";

const PrefabRailwayShelters = () => {
  const [openFaq, setOpenFaq] = useState(1);

  /* ── Data ── */
  const purposePoints = [
    "Passenger waiting areas",
    "Platform shade structures",
    "Ticket counter shelters",
    "Equipment protection sheds",
    "Maintenance bay shelters",
    "Railway yard structures",
  ];

  const structFeatures = [
    {
      title: "Heavy-duty steel framework",
      desc: "Engineered structural members for high load capacity.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Corrosion-resistant coatings",
      desc: "Wipe-clean surfaces and durable finishes simplify daily upkeep.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Pre-engineered roofing",
      desc: "Metal sheets, insulated sandwich panels or polycarbonate.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "High wind-load resistant",
      desc: "Scale your canteen up or down as project headcount changes.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      ),
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
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/train.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1>
            Prefab Railway &amp; <br />
            Telecom Shelters
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Green India Pvt Ltd engineers robust, weather-proof
            prefabricated shelters for railway stations, trackside
            installations, and telecom BTS sites — built for speed, reliability,
            and compliance.
          </p>
          <button className={styles.btnPrimary}>
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Reliable Prefabricated Shelter Solutions ── */}
      <section className={styles.reliableSec}>
        <div className={styles.reliableContainer}>
          <div className={styles.reliableHeader}>
            <h2 className={styles.secTitle}>
              Reliable Prefabricated <br />
              <span>Shelter Solutions</span>
            </h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.reliableContentGrid}>
            <div className={styles.reliableImgOuter}>
              <div className={styles.reliableImgCard} />
              <div
                className={styles.reliableImgWrap}
                style={{
                  backgroundImage: "url('/Images/sheltersolution.jpg')",
                }}
              />
            </div>
            <div className={styles.reliableText}>
              <p>
                Our prefabricated shelters are expertly designed to meet the
                demands of railway platforms, telecom sites, and various
                operational zones. Built using high-quality materials and
                modular construction techniques, these structures provide
                dependable protection against harsh weather conditions while
                ensuring structural stability in high-usage environments.
              </p>
              <p>
                Engineered for efficiency and durability, these shelters allow
                for quick installation with minimal site disruption. Their
                long-lasting performance, low maintenance requirements, and
                adaptable design make them an ideal solution for projects that
                require both speed and reliability in challenging conditions.
              </p>
              <button
                className={styles.btnPrimary}
                style={{ marginTop: "16px" }}
              >
                Get Contact
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
          </div>
        </div>
      </section>

      {/* ── Purpose & Application ── */}
      <section className={styles.purposeSec}>
        <div className={styles.purposeContainer}>
          <div className={styles.purposeText}>
            <h2 className={styles.secTitle}>
              Prefab Railway Shelters <br />
              <span>Purpose &amp; Application</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Railway shelters provide essential protection for passengers,
              staff, and equipment against harsh weather conditions. They
              support multiple operational needs across platforms and railway
              environments.
            </p>
            <div className={styles.purposeList}>
              {purposePoints.map((point, i) => (
                <div key={i} className={styles.purposeItem}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "20px" }}>
              Our prefabricated railway shelters are designed for rapid
              installation, structural stability, and long service life. They
              ensure reliable performance while minimizing maintenance.
            </p>
          </div>
          <div className={styles.purposeImgOuter}>
            <div className={styles.purposeImgCard} />
            <div
              className={styles.purposeImgWrap}
              style={{
                backgroundImage: "url('/Images/purpose.jpg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── How We Create (Blue Banner) ── */}
      <section className={styles.mfgSec}>
        <div className={styles.mfgWatermark}>
          L&amp;R PREFABRICATED STRUCTURES
        </div>
        <img
          src="/Images/stationleft.png"
          alt="Station Left"
          className={styles.mfgLeftBg}
        />
        <div className={styles.mfgContainer}>
          <div className={styles.mfgContent}>
            <h2>
              How We Create <br />
              Prefabricated Staff Canteens
            </h2>
            <p>
              At L&amp;R Enterprises, we design and build prefabricated staff
              canteens tailored to site requirements, from planning efficient
              layouts to manufacturing and on- site installation. Our process
              ensures fast delivery, quality construction, and ready-to-use
              dining spaces.
            </p>
          </div>
          <div
            className={styles.mfgVisuals}
            style={{
              backgroundImage: "url('/Images/station.png')",
            }}
          />
        </div>
      </section>

      {/* ── Structural Features ── */}
      <section className={styles.structSec}>
        <div className={styles.structContainer}>
          <div className={styles.structHeader}>
            <div className={styles.structHeaderLeft}>
              <h2 className={styles.secTitle}>
                Railway Shelters <br />
                <span>Structural Features</span>
              </h2>
              <div className={styles.divider} style={{ marginBottom: 0 }} />
            </div>
            <p className={styles.structDesc}>
              The roofing options include metal sheets, insulated sandwich
              panels, or polycarbonate sheets depending on project requirements.
            </p>
          </div>
          <div className={styles.structGrid}>
            {structFeatures.map((feat, i) => (
              <div key={i} className={styles.structCard}>
                <div className={styles.structIconWrap}>{feat.icon}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className={styles.advantageSec}>
        <div className={styles.advantageContainer}>
          <div className={styles.advantageImgOuter}>
            <div className={styles.advantageImgCard} />
            <div
              className={styles.advantageImgWrap}
              style={{
                backgroundImage: "url('/Images/adv.jpg')",
              }}
            />
          </div>
          <div className={styles.advantageText}>
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
            <div className={styles.advantageList}>
              {advantages.map((adv, i) => (
                <div key={i} className={styles.advantageItem}>
                  <span className={styles.advantageNum}>{i + 1}</span>
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <span className={styles.faqBreadcrumb}>• FQS</span>
              <h2 className={styles.secTitle} style={{ marginBottom: "14px" }}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} style={{ marginBottom: 0 }} />
            </div>
            <p className={styles.faqDesc}>
              Quick answers to common queries about our durable and modular
              shelter solutions.
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
                  backgroundImage: "url('/Images/faqrailway.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Prefab Railway &amp; Telecom Shelters?</h2>
          <p>
            Connect with our team to design your custom modular railway shelter,
            offering a robust, durable, and compliant shelter solution built to
            your exact specifications.
          </p>
          <button className={styles.btnSecondary}>
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
    </>
  );
};

export default PrefabRailwayShelters;
