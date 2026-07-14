import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RoofPufPanels.module.css";

const RoofPufPanels = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applicationsList = [
    "Industrial Manufacturing Units",
    "Warehouses",
    "Cold Storages",
    "Food Processing Facilities",
    "Pharmaceutical Facilities",
    "Commercial Buildings",
  ];

  const thicknessCards = [
    {
      title: "30 + 30 mm",
      desc: "Ideal for general roof insulation where moderate thermal control is required.",
      active: false,
    },
    {
      title: "40 + 30 mm",
      desc: "Offers balanced insulation for warehouses and industrial sheds.",
      active: true, // Dark blue background
    },
    {
      title: "50 + 30 mm",
      desc: "Excellent thermal resistance for cold storages and food processing units.",
      active: false,
    },
    {
      title: "100 + 30 mm",
      desc: "Maximum insulation for extreme temperature control requirements.",
      active: false,
    },
  ];

  const gridApplications = [
    {
      num: "01",
      title: "Industrial Sheds",
      desc: "Ideal for large span roofing that requires superior thermal insulation.",
    },
    {
      num: "02",
      title: "Warehouses & Logistics",
      desc: "Maintains optimal indoor temperature for storage of goods.",
    },
    {
      num: "03",
      title: "Cold Storages",
      desc: "Prevents heat transfer and reduces cooling costs significantly.",
    },
    {
      num: "04",
      title: "Pre-Engineered Buildings",
      desc: "Seamless integration with PEB structures for fast installation.",
    },
    {
      num: "05",
      title: "Commercial Complexes",
      desc: "Enhances energy efficiency and provides acoustic insulation.",
    },
    {
      num: "06",
      title: "Agricultural Storage",
      desc: "Protects agricultural produce from extreme weather variations.",
    },
  ];

  const qualityList = [
    "ISO certified manufacturing processes",
    "Premium quality raw materials",
    "Advanced continuous panel presses",
    "Strict quality control procedures",
    "Prompt delivery and customer support",
  ];

  const faqs = [
    {
      id: 0,
      q: "What are Roof PUF panels used for?",
      a: "Roof PUF panels are widely used for industrial manufacturing units, warehouses, cold storages, food processing facilities, PEBs, and commercial buildings to provide high-performance insulated roofing.",
    },
    {
      id: 1,
      q: "How do Roof PUF panels save energy?",
      a: "Roof PUF panels provide excellent thermal insulation, which prevents external heat from entering the building. This reduces the load on air conditioning systems, saving up to 40% on energy costs.",
    },
    {
      id: 2,
      q: "Are Roof PUF panels fire-retardant?",
      a: "Yes, we offer fire-retardant PUF panels that comply with industry safety and fire protection standards, providing a secure roofing solution for your infrastructure.",
    },
    {
      id: 3,
      q: "What thickness options do you offer?",
      a: "We offer various panel thickness options such as 30+30mm, 40+30mm, 50+30mm, and 100+30mm depending on your specific thermal insulation and project requirements.",
    },
    {
      id: 4,
      q: "Do you provide customized lengths?",
      a: "Yes, we manufacture Roof PUF Panels in customized lengths tailored precisely to your building's architectural design and project specifications.",
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
          backgroundImage: "url('/Images/insulatedroof.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            HIGH-PERFORMANCE <br />
            INSULATED ROOFING SYSTEMS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Enterprises has been updated roofing systems providing high
            thermal insulation with strong structure and excellent thermal
            resistance for modern construction.
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

      {/* ── ADVANCED INSULATED SOLUTIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Advanced Insulated <br />
              <span>Solutions</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/inslulatedsolution.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Roof PUF panels are one of the most advanced roofing systems used
              in modern construction. They offer a winning combination of
              structural strength and exceptional thermal insulation. The top
              sheet has a trapezoidal profile, while the bottom sheet can be
              profile or plain, depending on the requirement.
            </p>
            <p>
              Our Roof PUF panels are manufactured using state-of-the-art
              continuous sandwich panel presses, ensuring uniform foam density
              and strong adhesion between the foam core and the metal facings.
              This results in superior thermal performance and long-term
              durability.
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

      {/* ── COMPOSITION & APPLICATIONS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Roof PUF Panels <br />
              <span>Composition &amp; Applications</span>
            </h2>
            <div className={styles.divider} />
            <p>
              L&amp;R Green India Pvt Ltd offers high-quality Roof PUF Panels
              designed to meet the demands of various industrial and commercial
              roofing projects. Our panels are widely recognized for their
              excellent insulation, structural rigidity, and easy installation.
            </p>
            <div className={styles.featureList}>
              {applicationsList.map((app, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckIcon />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/roofpuf.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVAILABLE THICKNESS COMBINATIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle} style={{ marginBottom: "14px" }}>
                Available Thickness <br />
                <span>Combinations</span>
              </h2>
              <div className={styles.divider} style={{ marginBottom: 0 }} />
            </div>
            <p className={styles.thicknessDesc}>
              Our Roof PUF Panels are available in various thickness
              combinations to suit different requirements:
            </p>
          </div>
          <div className={styles.thicknessGrid}>
            {thicknessCards.map((card, i) => (
              <div
                key={i}
                className={`${styles.thicknessCard} ${card.active ? styles.thicknessCardActive : ""}`}
              >
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES, PERFORMANCE & SAFETY ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Features, Performance <br />
              <span>&amp; Safety</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/safetyroof.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Roof PUF panels offer a range of features that enhance roofing
              performance. They provide excellent thermal insulation, which
              helps in maintaining the desired indoor temperature and
              significantly reduces energy consumption for heating and cooling.
            </p>
            <p>
              These panels are also lightweight, making them easy to handle and
              install. The rigid polyurethane foam core provides high structural
              strength, ensuring the stability and durability of the roofing
              system even under harsh weather conditions.
            </p>
          </div>
        </div>
      </section>

      {/* ── WEATHERPROOF BANNER ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Weatherproof Performance <br />
              &amp; Fast Installation Benefits
            </h2>
            <p>
              Our Roof PUF panels are designed to withstand extreme weather
              conditions. The robust metal facings and the tightly sealed joints
              ensure excellent weather resistance, preventing water ingress and
              protecting the interior space.
            </p>
          </div>
          <div className={styles.blueBannerImg}>
            <div
              className={styles.placeholderImgTransparent}
              style={{
                backgroundImage: "url('/Images/weatherproof.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS OF ROOF PUF PANELS (GRID) ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <div
            className={styles.thicknessHeaderRow}
            style={{ marginBottom: "40px" }}
          >
            <div>
              <h2 className={styles.secTitle}>
                Applications of <br />
                <span>Roof PUF Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.appGrid3x2}>
            {gridApplications.map((app, i) => (
              <div key={i} className={styles.appGridCard}>
                <div className={styles.appGridNum}>{app.num}</div>
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE PERFORMANCE ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Sustainable Performance <br />
              <span>&amp; Customization Options</span>
            </h2>
            <div className={styles.divider} />
            <p>
              L&amp;R Enterprises is committed to providing sustainable building
              solutions. The polyurethane foam used in our Roof PUF Panels is
              free from CFCs and HCFCs, making it an environmentally friendly
              choice that helps reduce the carbon footprint of your building.
            </p>
            <p>
              We offer a wide range of customization options to meet specific
              project requirements. You can choose from various panel
              thicknesses, profile designs, and color options for the metal
              facings. This allows you to achieve the desired aesthetic appeal
              while ensuring optimal thermal performance and structural
              integrity.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/customroof.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES OVER CONVENTIONAL ROOFING ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Advantages Over <br />
              <span>Conventional Roofing</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/advroof.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <div className={styles.compareGrid}>
              <div className={styles.compareRow}>
                <span className={styles.compareLabel}>
                  Conventional Roofing
                </span>
                <span className={styles.compareValue}>Roof PUF Panels</span>
              </div>
              <div className={styles.compareRow}>
                <span className={styles.compareLabel}>
                  High Installation Time
                </span>
                <span className={styles.compareValue}>Fast &amp; Simple</span>
              </div>
              <div className={styles.compareRow}>
                <span className={styles.compareLabel}>
                  Poor Thermal Insulation
                </span>
                <span className={styles.compareValue}>Excellent</span>
              </div>
              <div className={styles.compareRow}>
                <span className={styles.compareLabel}>
                  Low Water Resistance
                </span>
                <span className={styles.compareValue}>Low Maintenance</span>
              </div>
              <div className={styles.compareRow}>
                <span className={styles.compareLabel}>
                  High Energy Consumption
                </span>
                <span className={styles.compareValue}>
                  Energy Saving (up to 40%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALITY ASSURANCE ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Quality Assurance &amp; Why <br />
              <span>Choose L&amp;R Green</span>
            </h2>
            <div className={styles.divider} />
            <p>
              At L&amp;R Green India Pvt Ltd, quality is our top priority. Our
              Roof PUF Panels undergo rigorous quality control checks at every
              stage of the manufacturing process to ensure they meet the highest
              industry standards.
            </p>
            <div className={styles.numList}>
              {qualityList.map((q, i) => (
                <div key={i} className={styles.numItem}>
                  <span className={styles.numBadge}>{i + 1}</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/greenroof.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle} style={{ marginBottom: "14px" }}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} style={{ marginBottom: 0 }} />
            </div>
            <p className={styles.faqDesc}>
              Find answers to common questions about insulated roofing systems,
              thermal performance, and installation.
            </p>
          </div>

          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter}>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/feqroof.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
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
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/catroof.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Insulated PUF Panels Solution?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully
            customized insulated PUF panel solutions tailored to your site needs.
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
            Contact US &nbsp;
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

      <Footer />
    </div>
  );
};

export default RoofPufPanels;
