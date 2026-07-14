import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSalesOffice.module.css";

const PrefabSalesOffice = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      title: "Project Sales Offices",
      desc: "Used by real estate developers as on-site offices to present projects, handle client meetings, and support marketing activities in a professional setup.",
      img: "/Images/salestype1.jpg",
    },
    {
      title: "Construction Site Offices",
      desc: "Provides quick-to-install workspace for engineers and project teams, ensuring smooth site management and supervision at construction locations.",
      img: "/Images/salestype2.jpg",
    },
    {
      title: "Event & Exhibition Units",
      desc: "Ideal for exhibitions, trade fairs, and promotional setups, offering fast installation with flexible layouts and branding options.",
      img: "/Images/salestype3.jpg",
    },
    {
      title: "Mobile & Retail Units",
      desc: "Used for temporary corporate spaces, kiosks, and small retail outlets with easy relocation and minimal setup time.",
      img: "/Images/salestype4.jpg",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF sales office?",
      a: "An LGSF sales office is a factory-built, modular commercial structure constructed using Light Gauge Steel Framing (LGSF) technology and insulated sandwich panels, offering speed, durability, and premium design features.",
    },
    {
      id: 1,
      q: "How fast can an LGSF office be constructed?",
      a: "It can be installed much faster than conventional buildings due to prefabricated components and modular assembly.",
    },
    {
      id: 2,
      q: "3. Is an LGSF office durable?",
      a: "Yes, LGSF structures are highly durable, corrosion-resistant, and engineered to withstand extreme weather conditions, including high winds and seismic activity.",
    },
    {
      id: 3,
      q: "Can LGSF offices be customized?",
      a: "Yes, they can be fully customized in terms of layouts, interior finishes, glass facades, electrical fittings, and branding requirements.",
    },
    {
      id: 4,
      q: "Are LGSF offices suitable for temporary use?",
      a: "Yes, they are highly suitable for temporary use as they can be easily dismantled, transported, and re-erected at a new site with minimal waste.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            MODERN LGSF PREFABRICATED
            <br /> SALES OFFICES
          </h1>
          <p className={styles.subtitle}>
            Fast, durable, and sustainable workspace solutions for commercial
            projects. Built using <br />
            Light Gauge Steel Framing technology for rapid deployment and
            premium aesthetics.
          </p>
          <button className={styles.btnPrimary}>
            Contact us &nbsp;
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              LGSF Prefabricated <br />
              <span>Sales Offices</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF (Light Gauge Steel Frame) prefabricated sales offices are
              modern, rapidly assembled commercial spaces designed using
              lightweight yet high-strength steel sections. These structures are
              ideal for both temporary and permanent use, offering faster
              construction, better durability, and high design flexibility
              compared to conventional building methods. This enables modern,
              scalable and efficient workspace solutions tailored for
              fast-growing commercial needs.
            </p>
            <p>
              On average, LGSF construction is significantly faster than
              traditional methods, making it highly suitable for real estate
              developers, exhibitions, and on-site project offices. This
              significantly improves project timelines and overall operational
              efficiency, ensuring quicker project delivery and improved
              workflow efficiency.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/sales1.jpg"
                  alt="LGSF Prefab Sales Office exterior"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2 className={styles.secTitle}>
                Applications of LGSF <br />
                <span>Prefab Office Structures</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p
              style={{
                maxWidth: "480px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              LGSF office structures are versatile and widely used in modern
              construction and commercial environments. Their modular design
              allows them to be adapted quickly for different functional
              requirements.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {applications.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}>
                  <img
                    className={styles.cardImage}
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle}>
            Advantages of LGSF <br />
            <span>Prefab Office Structures</span>
          </h2>
          <div className={styles.divider} />
          <div className={styles.splitContainer} style={{ marginTop: "40px" }}>
            <div className={styles.imgCol}>
              <div
                style={{
                  width: "100%",
                  height: "380px",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/Images/sales2.png"
                  alt="Advantages of LGSF Sales Office"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <div className={styles.textCol}>
              <p style={{ marginBottom: "28px" }}>
                LGSF homes offer unmatched speed, strength, and sustainability,
                making them a future-ready construction solution. Their
                lightweight yet durable structure ensures faster construction,
                reduced costs, and long-term performance with minimal
                maintenance.
              </p>
              <div className={styles.bulletList}>
                {[
                  "Rapid Deployment",
                  "Professional Aesthetics",
                  "Design Flexibility",
                  "Durability & Safety",
                  "Sustainable & Modular Benefits",
                ].map((item, i) => (
                  <div key={i} className={styles.bulletItem}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="#233a5e"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="4" fill="#233a5e" />
                    </svg>
                    <span className={styles.bulletLabel}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING & SERVICE PROVIDERS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L &amp; R LGSF PREFABRICATED</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Manufacturing &amp; <br />
              <strong>Service Providers</strong>
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#ffffff", marginBottom: "30px" }}
            />
            <p>
              LGSF sales office systems are delivered by specialized
              prefabrication companies that manage the entire lifecycle of the
              project, including structural design and engineering, factory
              fabrication of steel frames, paneling and interior finishing,
              on-site assembly and installation, and complete turnkey project
              delivery to ensure high-quality execution and ready-to-use office
              spaces.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/salesblue.png"
              alt="Manufacturing & Service Providers"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "14px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── DESIGN & PROJECT WORKFLOW ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div className={styles.workflowHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Design &amp; Project <br />
                <span>Workflow</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.workflowDesc}>
              The LGSF design and execution process follows a structured
              workflow that ensures precision, quality, and fast project
              delivery from concept to completion.
            </p>
          </div>
          <div className={styles.workflowCardGrid}>
            {[
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                label: "Requirement Analysis",
                desc: "Understanding client needs, space planning, and site conditions to define project scope and functionality.",
                active: false,
              },
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                  </svg>
                ),
                label: "Structural Engineering",
                desc: "Designing safe and efficient steel frameworks that ensure strength, stability, and compliance with standards.",
                active: true,
              },
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
                    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v0a2 2 0 0 1-4 0v0a2 2 0 0 1-4 0v0a2 2 0 0 0-4 0z" />
                  </svg>
                ),
                label: "On-Site Installation",
                desc: "Quick assembly of prefabricated modules, panels, and finishes at the project location for fast execution.",
                active: false,
              },
              {
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                ),
                label: "Final Handover",
                desc: "Quality inspection, finishing works, and delivery of a fully ready-to-use LGSF office space.",
                active: false,
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${styles.workflowCard} ${card.active ? styles.workflowCardActive : ""}`}
              >
                <div className={styles.workflowCardIcon}>{card.icon}</div>
                <h3 className={styles.workflowCardLabel}>{card.label}</h3>
                <p className={styles.workflowCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose LGSF <br />
              <span>Prefab Sale Office ?</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF construction offers a perfect balance of speed, strength, and
              sustainability. It reduces project delays, minimizes material
              wastage, and provides a modern architectural appearance suitable
              for premium commercial branding. It also ensures a professional
              and future-ready workspace environment for modern businesses.
            </p>
            <p>
              This makes it especially suitable for fast-track commercial and
              project- based office requirements where efficiency, quality, and
              rapid execution are essential for timely project delivery. LGSF
              prefabricated sales offices are the future of fast-track
              commercial construction. With flexibility, durability, and cost
              efficiency, they provide an ideal solution for modern business
              environments requiring quick deployment and high-quality
              infrastructure.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/sales3.jpg"
                  alt="Why Choose L&R Sales Office"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              LGSF prefabricated sales offices are fast, modern workspace
              structures offering flexibility, durability, and quick execution.
              Below are FAQs.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div
              className={styles.faqImgOuter}
              style={{
                width: "100%",
                height: "480px",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <img
                src="/Images/salesfre.jpg"
                alt="Frequently Asked Questions"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(faq.id === openFaq ? -1 : faq.id)}
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
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Images/ctaoffice.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Prefab Sales Offices Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated <br /> Prefab Sales Offices solutions
            tailored to your site needs.
          </p>
          <button className={styles.btnSecondary}>
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

export default PrefabSalesOffice;
