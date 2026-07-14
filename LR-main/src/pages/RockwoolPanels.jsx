import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RockwoolPanels.module.css";

const RockwoolPanels = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What makes Rockwool panels highly fire-resistant?",
      a: "Rockwool is made from natural volcanic rock (basalt) that has a melting point above 1000°C, making it non-combustible and excellent for fire barriers.",
    },
    {
      id: 1,
      q: "Are Rockwool panels good for soundproofing?",
      a: "Yes, due to their high density and fibrous structure, they absorb sound waves and are widely used in acoustic rooms and noisy industrial zones.",
    },
    {
      id: 2,
      q: "What thicknesses do you offer?",
      a: "We manufacture Rockwool panels in thicknesses ranging from 50mm up to 200mm, depending on fire rating and thermal specifications.",
    },
    {
      id: 3,
      q: "Do rock wool panels absorb moisture?",
      a: "No, the rock wool core is specially treated to be hydrophobic, meaning it repels water and prevents dampness or moisture buildup.",
    },
    {
      id: 4,
      q: "Are these panels environmentally friendly?",
      a: "Yes, rock wool is a natural material derived from basalt rock, which is highly sustainable, fully recyclable, and free from toxic emissions.",
    },
  ];

  const benefits = [
    {
      title: "Fire Safety",
      desc: "Withstands temperatures above 1000°C without spreading flames or emitting toxic smoke.",
    },
    {
      title: "Acoustic Performance",
      desc: "Reduces noise levels and improves sound comfort in enclosed spaces.",
    },
    {
      title: "Thermal Efficiency",
      desc: "Maintains stable indoor temperatures and reduces energy costs.",
    },
    {
      title: "Durability & Sustainability",
      desc: "Moisture-resistant, corrosion-resistant, and recyclable material for long-term use.",
    },
  ];

  const specs = [
    { label: "Core Material", value: "Rockwool (Stone Wool)" },
    { label: "Thickness", value: "50 mm - 150 mm" },
    { label: "Panel Width", value: "1000 - 1150 mm" },
    { label: "Facing Material", value: "PPGI / PPGL / Galvalume" },
    { label: "Thermal Conductivity", value: "0.024 - 0.080 W/m·K" },
    { label: "Fire Rating", value: "Class A1 / A2" },
    { label: "Surface Finish", value: "Ribbed / Micro Rib / Smooth" },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/woolpanel1.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            RESISTANT ROCK <br />
            WOOL PANELS
          </h1>
          <p className={styles.subtitle}>
            At L&amp;R Green Pvt Ltd, our Rockwool panels are engineered to
            deliver superior fire safety, high-performance thermal insulation,
            and exceptional acoustic control.
          </p>
          <button
            className={styles.btnPrimary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact us &nbsp;
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

      {/* ── SECTION 1: WHAT ARE ROCKWOOL PANELS? ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              What Are <br />
              <span>Rockwool Panels?</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Rockwool (stone wool) sandwich panels are high-density,
              fire-resistant construction panels composed of a non-combustible
              rock wool core bonded between two robust metal sheets (such as
              PPGI or stainless steel). This natural basalt stone fiber core
              provides unmatched fire protection and sound absorption.
            </p>
            <p>
              Widely used for fire-rated walls, acoustic enclosures, boiler
              rooms, industrial warehouses, and high-temperature partitions,
              Rockwool panels offer a reliable, eco-friendly solution for
              commercial buildings where fire safety and acoustic control are
              top priorities.
            </p>
            <button
              className={styles.btnSecondary}
              style={{ marginTop: "16px" }}
            >
              Contact Us &nbsp;→
            </button>
          </div>
          <div className={styles.imgCol}>
            <div
              className={styles.imgWrap}
              style={{ position: "relative", height: "400px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  width: "80%",
                  height: "90%",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundImage: "url('/Images/woolpanelbig.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
              <div
                className={styles.placeholderImg}
                style={{
                  width: "220px",
                  height: "160px",
                  minHeight: "unset",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  backgroundImage: "url('/Images/woolpanelsmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ADVANCED FEATURES & PERFORMANCE HIGHLIGHTS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Advanced Features &amp; <br />
              <span>Performance Highlights</span>
            </h2>
            <div className={styles.divider} />
            <div
              className={styles.imgWrap}
              style={{
                position: "relative",
                height: "400px",
                marginTop: "30px",
              }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  width: "80%",
                  height: "90%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundImage: "url('/Images/wooladvbig.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
              <div
                className={styles.placeholderImg}
                style={{
                  width: "220px",
                  height: "160px",
                  minHeight: "unset",
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  backgroundImage: "url('/Images/wooladvsmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              One of the major advantages of Rockwool panels is their superior
              fire resistance and acoustic performance. The stone wool core:
            </p>
            <ul
              className={styles.featureList}
              style={{ listStyle: "disc", paddingLeft: "20px" }}
            >
              <li className={styles.featureItem}>
                <strong>Non-Combustible Core:</strong> Stone wool core ensures
                high fire resistance and safety
              </li>
              <li className={styles.featureItem}>
                <strong>Thermal Insulation:</strong> K-value range: 0.024–0.080
                W/m·K
              </li>
              <li className={styles.featureItem}>
                <strong>Acoustic Insulation:</strong> Excellent noise reduction
                and sound absorption
              </li>
              <li className={styles.featureItem}>
                <strong>Durable Metal Surface:</strong> PPGI / PPGL / Galvalume
                coated sheets
              </li>
              <li className={styles.featureItem}>
                <strong>Moisture Resistance:</strong> Resistant to water ingress
                and harsh weather
              </li>
              <li className={styles.featureItem}>
                <strong>Quick Installation:</strong> Lightweight and
                easy-to-install modular design
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ROCKWOOL TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Rockwool Panels <br />
              <span>Technical Specifications</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.compareGrid}>
              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>Specification</div>
                <div className={styles.compareValue}>Val / Options</div>
              </div>
              {specs.map((spec, i) => (
                <div key={i} className={styles.compareRow}>
                  <div className={styles.compareLabel}>{spec.label}</div>
                  <div className={styles.compareValue}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div
              className={styles.imgWrap}
              style={{ position: "relative", height: "400px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  width: "80%",
                  height: "90%",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundImage: "url('/Images/techwoolbig.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
              <div
                className={styles.placeholderImg}
                style={{
                  width: "220px",
                  height: "160px",
                  minHeight: "unset",
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  backgroundImage: "url('/Images/techwoolsmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: QUALITY & MANUFACTURING EXCELLENCE ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Quality &amp; Manufacturing <br />
              Excellence
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#fff", width: "50px", height: "4px" }}
            />
            <p>
              At L&amp;R Green Pvt Ltd, Rockwool panels are manufactured under
              strict quality checks, including density testing, thickness
              accuracy, bonding strength, and coating inspection. This ensures
              consistent performance, durability, and safety in every panel
              delivered.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div
                className={styles.placeholderImgTransparent}
                style={{
                  backgroundImage: "url('/Images/woolquality.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: APPLICATIONS OF ROCKWOOL PANELS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Applications of <br />
              <span>Rockwool Panels</span>
            </h2>
            <div className={styles.divider} />
            <div
              className={styles.imgWrap}
              style={{
                position: "relative",
                height: "400px",
                marginTop: "30px",
              }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  width: "80%",
                  height: "90%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundImage: "url('/Images/appwoolbig.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
              <div
                className={styles.placeholderImg}
                style={{
                  width: "220px",
                  height: "160px",
                  minHeight: "unset",
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  backgroundImage: "url('/Images/appwoolsmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Rockwool panels from L&amp;R Green Pvt Ltd are used across
              industrial and commercial spaces for fire safety, insulation, and
              sound control.
            </p>
            <ul
              className={styles.featureList}
              style={{ listStyle: "disc", paddingLeft: "20px" }}
            >
              <li className={styles.featureItem}>
                Fire-rated industrial buildings
              </li>
              <li className={styles.featureItem}>
                Control rooms &amp; generator enclosures
              </li>
              <li className={styles.featureItem}>
                Acoustic rooms &amp; auditoriums
              </li>
              <li className={styles.featureItem}>
                HVAC duct enclosures
              </li>
              <li className={styles.featureItem}>
                Cold storage facilities
              </li>
              <li className={styles.featureItem}>
                Cleanrooms and laboratories
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BENEFITS OF ROCKWOOL PANELS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle}>
                Benefits of <br />
                <span>Rockwool Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
          </div>
          <div className={styles.thicknessGrid}>
            {benefits.map((benefit, i) => (
              <div key={i} className={styles.thicknessCard}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CHOOSE L&R GREEN PVT LTD ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose <br />
              <span>L&amp;R Green Pvt Ltd</span>
            </h2>
            <div className={styles.divider} />
            <p>
              At L&amp;R Green Pvt Ltd, we focus on delivering high-quality
              Rockwool panel solutions with precision manufacturing, reliable
              supply, and customer-focused support to meet diverse project
              requirements.
            </p>
            <div className={styles.numList}>
              {[
                "High-quality raw materials",
                "Advanced manufacturing process",
                "Custom sizes and specifications",
                "Reliable supply and fast delivery",
                "Expert support and consultation",
              ].map((text, i) => (
                <div key={i} className={styles.numItem}>
                  <div className={styles.numBadge}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <div>{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div
              className={styles.imgWrap}
              style={{ position: "relative", height: "400px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  width: "80%",
                  height: "90%",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundImage: "url('/Images/greenbig.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
              <div
                className={styles.placeholderImg}
                style={{
                  width: "220px",
                  height: "160px",
                  minHeight: "unset",
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  backgroundImage: "url('/Images/greensmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  border: "6px solid #fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Quick answers about stone wool core safety standards, sound
              absorption levels, and installation details.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "▼" : "▶"}
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
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/frebigsmall.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/catwool.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Rockwool Panels Solution?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized Rockwool panel solutions tailored to your site
            needs.
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

export default RockwoolPanels;
