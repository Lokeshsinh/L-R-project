import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarEPC.module.css";

const SolarEPC = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const engineeringCards = [
    {
      title: "Site Survey & Feasibility Analysis",
      desc: "A neatly designed sleeping area that ensures comfort and privacy within a space-efficient layout suitable for essential living needs.",
      img: "/Images/worktype1.jpg",
    },
    {
      title: "Electrical System Design",
      desc: "Designing DC and AC systems including string layouts, inverter placement, cable routing, and grid interconnection planning for maximum efficiency.",
      img: "/Images/worktype2.jpg",
    },
    {
      title: "Structural Engineering Design",
      desc: "Creating strong mounting structures based on wind load, soil type, and terrain conditions to ensure durability and safety for long-term performance.",
      img: "/Images/worktype3.jpg",
    },
    {
      title: "Technology Selection & Optimization",
      desc: "Selecting advanced technologies like N-type TOPCon modules, bifacial panels, and solar trackers to increase energy output and improve plant performance.",
      img: "/Images/worktype4.jpg",
    },
  ];

  const procurementItems = [
    "Procurement of modules, inverters, transformers, cables",
    "Vendor selection and technical evaluation",
    "Factory inspections and quality checks",
    "Compliance verification with project specifications",
  ];

  const faqs = [
    {
      id: 0,
      q: "What is Solar EPC?",
      a: "Solar EPC stands for Engineering, Procurement, and Construction — a turnkey service where we manage the complete solar power plant development from design to commissioning.",
    },
    {
      id: 1,
      q: "Why choose L&R Green India for Solar EPC?",
      a: "We bring over a decade of experience in renewable energy, delivering high-performance solar installations for industrial, commercial, and residential clients across India.",
    },
    {
      id: 2,
      q: "What types of solar projects do you handle?",
      a: "We handle rooftop solar, ground-mounted solar farms, carport solar, and hybrid solar+battery storage systems for capacities from 10 kW to 50 MW and above.",
    },
    {
      id: 3,
      q: "How long does a solar EPC project take?",
      a: "Depending on capacity, rooftop projects are typically completed in 2–6 weeks, while larger ground-mounted projects may take 3–6 months.",
    },
    {
      id: 4,
      q: "Do you provide after-installation maintenance?",
      a: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC) including preventive maintenance, performance monitoring, and emergency support.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: `url("/Images/work1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            SOLAR EPC <br />
            WORK SOLUTIONS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Green Pvt Ltd offers complete Solar EPC services, managing
            design, procurement, construction, and commissioning for efficient,
            hassle-free solar project delivery under one roof.
          </p>
          <button className={styles.btnPrimary}>
            Conatct us &nbsp;
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

      {/* ── SECTION 2: WHAT IS SOLAR EPC WORK? ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT: Text */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              What is Solar <br />
              <span className={styles.accentText}>EPC work?</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.highlightPara} style={{ marginTop: "30px" }}>
              Solar EPC stands for Engineering, Procurement, and Construction,
              which is a complete project execution model for solar power
              plants. In this system, a single company takes full responsibility
              for designing the system, sourcing all required equipment,
              managing on-site installation, and completing final testing and
              commissioning. This integrated approach ensures that the entire
              solar project is executed in a structured, efficient, and
              coordinated manner without involving multiple contractors.
            </p>
            <p className={styles.normalPara}>
              With L&amp;R Green Pvt Ltd, the Solar EPC process becomes simple
              and seamless for project owners and investors. We manage every
              stage of the project—from initial planning and technical design to
              procurement of high-quality components and final grid connection.
              This eliminates coordination challenges, reduces project risks,
              and ensures smooth execution with reliable long-term performance
              of the solar plant.
            </p>
            <button className={styles.btnPill}>
              Get Contact &nbsp;
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

          {/* RIGHT: Image with decor box */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/work2.jpg"
                alt="Solar EPC Work"
                className={styles.decorImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ENGINEERING & SYSTEM DESIGN ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.secTitle}>
                Engineering &amp; <br />
                <span className={styles.accentText}>System Design</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.headerRight}>
              <p className={styles.sectionDescText}>
                Engineering is the foundation of a solar project. Our experts
                design optimized systems that maximize output and reduce losses.
              </p>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {engineeringCards.map((card, idx) => (
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

      {/* ── SECTION 4: FINAL TESTING & COMMISSIONING ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>SOLAR WORK EPC</div>
        <div className={styles.blueBannerInner}>
          <div className={styles.blueBannerText}>
            <h2>
              Final Testing <br />
              <strong>&amp; Commissioning</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              At L&amp;R Green Pvt Ltd, the final EPC stage ensures complete
              testing, validation, and safety checks before commissioning. It
              includes string-level and inverter testing, system inspections,
              and verification of performance and compliance. All required
              approvals and clearances are secured, along with DISCOM
              coordination for final synchronization, ensuring smooth and
              reliable plant operation.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROCUREMENT & QUALITY ASSURANCE ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle}>
            Procurement &amp; <br />
            <span className={styles.accentText}>Quality Assurance</span>
          </h2>
          <div className={styles.divider} />

          <div className={styles.twoColRow}>
            {/* LEFT: Image with decor box */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/work3.jpg"
                  alt="Procurement & Quality Assurance"
                  className={styles.decorImage}
                />
              </div>
            </div>

            {/* RIGHT: Text + Bullets */}
            <div className={styles.textCol}>
              <p className={styles.normalPara}>
                Our rooftop servant rooms are compact and comfortable units for
                staff accommodation, ensuring privacy and proper living while
                efficiently using rooftop space.
              </p>
              <div className={styles.bulletListSingle}>
                {procurementItems.map((item, i) => (
                  <div key={i} className={styles.bulletItem}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="12" cy="12" r="10" fill="#233a5e" />
                      <path
                        d="M8 12.5L10.5 15L16 9"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={styles.bulletLabel}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span className={styles.accentText}>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Common questions about our Solar EPC services — project scope,
              timelines, and maintenance.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/work4.jpg"
                alt="FAQ solar EPC"
                className={styles.faqImg}
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/workcat.jpg')`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Solar EPC Work Solutions?</h2>
          <p>
            Connect with our team to design and deliver your complete solar
            power plant — from engineering to commissioning.
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

export default SolarEPC;
