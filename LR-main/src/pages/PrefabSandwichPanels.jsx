import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSandwichPanels.module.css";

const PrefabSandwichPanels = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rangePanels = [
    {
      title: "PUF / PIR Panels",
      img: "/Images/range1.jpg",
    },
    {
      title: "EPS Panels",
      // desc: "Cost-effective insulated panels offering thermal insulation, installation, and durable performance for industrial and commercial applications.",
      img: "/Images/range2.jpg",
    },
    {
      title: "Rockwool Panels",
      img: "/Images/range3.jpg",
    },
    {
      title: "Glasswool Panels",
      img: "/Images/range4.jpg",
    },
  ];

  const techAdvantages = [
    {
      title: "Thermal Insulation",
      desc: "Outstanding thermal efficiency, minimizing heat transfer and significantly reducing energy costs.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      ),
    },
    {
      title: "Acoustic Insulation",
      desc: "Sound-absorbing properties ensure quiet indoors, ideal for commercial and industrial zones.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      ),
    },
    {
      title: "Fire Resistance",
      desc: "Available with fire-retardant cores that prevent rapid fire spread and enhance safety.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
      ),
    },
    {
      title: "Lightweight Construction",
      desc: "Robust yet lightweight, allowing for faster installation and reduced structural load.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
    {
      title: "Durability",
      desc: "Resistant to moisture, corrosion, and weather variations, ensuring a long lifespan.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "Energy Efficiency",
      desc: "Long-term cost savings through reduced reliance on heating and cooling systems.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
  ];

  const applications = [
    {
      title: "Industrial & Commercial",
      desc: "Suitable for warehouses, manufacturing units, industrial sheds, office buildings, retail spaces, and commercial infrastructure projects.",
      img: "/Images/app1.jpg",
    },
    {
      title: "Cold Storage & Clean Room",
      desc: "Ideal for cold storage units, food processing plants, pharmaceutical facilities, and temperature-controlled clean room environments.",
      img: "/Images/app2.jpg",
    },
    {
      title: "Prefabricated & Modular",
      desc: "Used in prefab buildings, portable cabins, modular housing units, worker accommodations, and site office solutions.",
      img: "/Images/app.jpg",
    },
    {
      title: "Institutional & Infrastructure",
      desc: "Perfect for hospitals, educational institutions, temporary structures, and modern infrastructure development projects.",
      img: "/Images/app4.jpg",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are sandwich panels used for?",
      a: "Sandwich panels are used for roofing, wall cladding, cold storage, clean rooms, and prefabricated buildings, providing excellent thermal and acoustic insulation.",
    },
    {
      id: 1,
      q: "Which insulation core materials are available?",
      a: "We offer PUF/PIR, EPS, Rockwool, and Glasswool insulated sandwich panels based on project requirements.",
    },
    {
      id: 2,
      q: "Are sandwich panels energy efficient?",
      a: "Yes, their high thermal resistance reduces heat transfer, which significantly lowers heating and cooling costs.",
    },
    {
      id: 3,
      q: "Are sandwich panels fire resistant?",
      a: "Yes, panels with Rockwool or specialized PUF cores offer excellent fire resistance and safety.",
    },
    {
      id: 4,
      q: "Can sandwich panels be customized?",
      a: "Yes, sandwich panels can be customized in terms of thickness, length, profile design, and core material to meet specific project guidelines.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            ADVANCED SANDWICH <br />
            PANEL SOLUTIONS
          </h1>
          <p className={styles.heroSub}>
            Energy-efficient, insulated panels engineered for superior thermal
            control, durability, and fire safety. Ideal for cold storage,
            commercial buildings, and industrial applications.
          </p>
          <button className={styles.btnHero}>
            Contact Us &nbsp;<span>→</span>
          </button>
        </div>
      </section>

      {/* ── WHAT ARE SANDWICH PANELS ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <h2 className={styles.secTitle}>
              What Are <br />
              <span>Sandwich Panels?</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Sandwich panels are modern construction materials made of two
              robust outer layers and an insulating core material in between.
              They provide exceptional thermal insulation, soundproofing, and
              structural strength while remaining incredibly lightweight. They
              are the go-to solution for energy-efficient walls, roofs, and cold
              room enclosures.
            </p>
            <p>
              With a range of core materials such as PUF, EPS, Glass Wool, and
              Rockwool, these panels cater to diverse requirements. L&amp;R
              Green India Pvt Ltd delivers precision-engineered panels that
              reduce construction time, lower operational costs, and offer
              long-lasting performance across diverse commercial and industrial
              environments.
            </p>
            <button className={styles.btnSecondary}>Contact Us &nbsp;→</button>
          </div>
          <div className={styles.introVisuals}>
            <div
              className={styles.introImgMain}
              style={{ backgroundImage: "url('/Images/sandwich1.jpg')" }}
            />
            <div
              className={styles.introImgSub}
              style={{ backgroundImage: "url('/Images/sandwich2.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── EXPLORE OUR RANGE ── */}
      <section className={styles.rangeSec}>
        <div className={styles.rangeContainer}>
          <div className={styles.rangeHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Explore Our Range <br />
                <span>of Sandwich Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.rangeDesc}>
              High-performance insulated panels for complete energy and thermal
              control across multiple applications.
            </p>
          </div>
          <div className={styles.rangeGrid}>
            {rangePanels.map((panel, i) => (
              <div key={i} className={styles.rangeCard}>
                <div
                  className={styles.rangeImg}
                  style={{ backgroundImage: `url('${panel.img}')` }}
                />
                <div className={styles.rangeCardTitle}>{panel.title}</div>
                {panel.desc && (
                  <div className={styles.rangeCardText}>{panel.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ADVANTAGES ── */}
      <section className={styles.techSec}>
        <div className={styles.techContainer}>
          <div className={styles.rangeHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Technical Advantages <br />
                <span>of Sandwich Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.rangeDesc}>
              L&amp;R Green India Pvt Ltd engineered panels are built to
              maximize durability, thermal efficiency, and long-term structural
              value.
            </p>
          </div>
          <div className={styles.techGrid}>
            {techAdvantages.map((tech, i) => (
              <div
                key={i}
                className={`${styles.techCard} ${
                  tech.active ? styles.techCardActive : ""
                }`}
              >
                <div className={styles.techIconWrap}>{tech.icon}</div>
                <h4>{tech.title}</h4>
                <p>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGH PERFORMANCE BANNER ── */}
      <section className={styles.bannerSec}>
        <div className={styles.bannerWatermark}>SANDWICH PANEL</div>
        <div className={styles.bannerContainer}>
          <h2>
            High-Performance Sandwich <br />
            Panels For Modern Construction
          </h2>
          <p>
            L&amp;R Green India Pvt Ltd provides state-of-the-art sandwich
            panels designed to meet the rigorous demands of modern
            infrastructure. Our panels offer unparalleled thermal performance,
            energy efficiency, and cost savings. Built with precision and
            utilizing top-tier materials, our sandwich panels ensure superior
            structural stability and exceptional insulation for commercial,
            industrial, and residential projects.
          </p>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className={styles.appSec}>
        <div className={styles.appContainer}>
          <div className={styles.rangeHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Applications of <br />
                <span>Sandwich Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.rangeDesc}>
              Our sandwich panels are suitable for a wide range of modern
              construction and infrastructure projects.
            </p>
          </div>
          <div className={styles.appGrid}>
            {applications.map((app, i) => (
              <div key={i} className={styles.appCard}>
                <div
                  className={styles.appImg}
                  style={{ backgroundImage: `url('${app.img}')` }}
                />
                <div className={styles.appCardTitle}>{app.title}</div>
                <div className={styles.appCardText}>{app.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <h2 className={styles.secTitle}>
            Why Choose Sandwich <br />
            <span>Panels Section</span>
          </h2>
          <div className={styles.divider} />
          <div className={styles.whyGrid}>
            <div className={styles.whyVisuals}>
              <div
                className={styles.whyImgMain}
                style={{ backgroundImage: "url('/Images/sandwichpanel1.jpg')" }}
              />
              <div
                className={styles.whyImgSub}
                style={{
                  backgroundImage: "url('/Images/sandwichpannel2.jpg')",
                }}
              />
            </div>
            <div className={styles.whyText}>
              <p>
                Sandwich panels are engineered with a high-quality insulated
                core bonded between durable metal facings, delivering
                exceptional structural strength, thermal insulation, acoustic
                performance, and long-term durability. Their advanced
                construction helps maintain stable indoor temperatures while
                reducing heat transfer, making them highly energy- efficient for
                modern industrial, commercial, and prefabricated buildings.
              </p>
              <p>
                Designed for fast and efficient installation, sandwich panels
                offer lightweight handling, moisture and corrosion resistance,
                low maintenance requirements, and extended service life. Their
                durable yet lightweight structure makes them a cost-effective
                and reliable alternative to traditional construction materials
                for infrastructure and modular construction projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.rangeHeaderRow}>
            <div>
              <div className={styles.faqBreadcrumb}>• FQS</div>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.rangeDesc}>
              Find answers to common questions about sandwich panels, insulation
              performance, applications, installation, and building solutions.
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
            <div className={styles.faqImgOuter}>
              <div
                className={styles.faqImg}
                style={{ backgroundImage: "url('/Images/feq4.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Build Smarter With High-Performance Sandwich Panels</h2>
          <p>
            Partner with L&amp;R Green India Pvt Ltd for premium quality
            insulated sandwich panels customized for your commercial, and
            industrial infrastructure projects.
          </p>
          <button className={styles.btnCTA}>Contact Us &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrefabSandwichPanels;
