import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabStaffCanteens.module.css";

const PrefabStaffCanteens = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const siteData = [
    {
      img: "/Images/built1.jpg",
      title: "Worker Dining Halls",
      desc: "Designed for high capacity and heavy foot traffic with easy-to-clean surfaces.",
    },
    {
      img: "/Images/built2.png",
      title: "Executive Kitchens",
      desc: "Premium finishes and modern amenities for corporate staff and management.",
    },
    {
      img: "/Images/built3.png",
      title: "Offshore Blocks",
      desc: "Corrosion-resistant modular structures built to withstand harsh marine environments.",
    },
    {
      img: "/Images/built4.png",
      title: "Temporary Staff Canteens",
      desc: "Rapidly deployable, modular dining halls ideal for short-term project camps.",
    },
  ];

  const structFeatures = [
    "Hygienic wall panels",
    "Ventilated kitchen zones",
    "Washable surfaces",
    "Durable flooring",
    "Plumbing & drainage provisions",
  ];

  const whyData = [
    {
      title: "Fast Installation",
      desc: "Modular units deployed and operational in days, not months.",
      highlight: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Easy Maintenance",
      desc: "Wipe-clean surfaces and durable finishes simplify daily upkeep.",
      highlight: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.912 5.813a2 2 0 0 0 1.272 1.272L21 12l-5.816 1.912a2 2 0 0 0-1.272 1.272L12 21l-1.912-5.816a2 2 0 0 0-1.272-1.272L3 12l5.816-1.916a2 2 0 0 0 1.272-1.272z"></path>
        </svg>
      ),
    },
    {
      title: "Comfortable Seating",
      desc: "Thoughtful dining layouts that maximize comfort and capacity.",
      highlight: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"></path>
          <path d="M4 16c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2"></path>
          <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"></path>
        </svg>
      ),
    },
    {
      title: "Expandable Modules",
      desc: "Scale your canteen up or down as project headcount changes.",
      highlight: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6"></path>
          <path d="M9 21H3v-6"></path>
          <path d="M21 3l-7 7"></path>
          <path d="M3 21l7-7"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is a prefabricated staff canteen?",
      a: "A prefabricated staff canteen is a factory-built modular structure designed to serve as a dining and recreation area for workers and employees.",
    },
    {
      id: 1,
      q: "How long does installation take?",
      a: "Installation is fast and typically completed within a few days, depending on size and site conditions.",
    },
    {
      id: 2,
      q: "Are these canteens suitable for industrial sites?",
      a: "Yes, our canteens are built with durable materials that can withstand harsh industrial environments while maintaining comfort and hygiene.",
    },
    {
      id: 3,
      q: "Can the canteen size be customized?",
      a: "Absolutely! We offer flexible, modular designs to accommodate any capacity, from small teams to massive worker halls.",
    },
    {
      id: 4,
      q: "Is maintenance difficult?",
      a: "No, they are built with wipe-clean surfaces and durable finishes that simplify daily upkeep and ensure long-term usability.",
    },
  ];

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section
        className={styles.heroSec}
        style={{ backgroundImage: "url('/Images/canteen.jpg')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1>
            PREFABRICATED STAFF <br />
            CANTEENS & RECREATION ROOM
          </h1>
          <p className={styles.subtitle}>
            L&R Green India Pvt Ltd designs hygienic, expandable dining halls
            and industrial kitchens — engineered for fast deployment at
            construction and industrial locations.
          </p>
          <button className={styles.btnPrimary}>
            Conatct us
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <h2 className={styles.secTitle}>
              Smart Modular <br />
              Canteen Infrastructure
            </h2>
            <div className={styles.divider} />
            <p>
              L&R Green India Pvt Ltd designs prefabricated staff canteens that
              provide efficient and hygienic dining solutions for industrial
              facilities and project sites. Built using modular construction
              techniques, these canteens are quick to install and optimized for
              smooth meal service, helping maintain productivity and workforce
              satisfaction.
            </p>
            <p>
              Engineered with durable materials and practical layouts, our
              canteen structures support organized dining, proper ventilation,
              and easy maintenance. Whether for temporary projects or long-term
              operations, they create a comfortable and scalable environment for
              workforce meal management.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "16px" }}>
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
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
          <div className={styles.introImages}>
            <div
              className={styles.introImgMain}
              style={{
                backgroundImage: "url('/Images/smart1.jpg')",
              }}
            />
            <div
              className={styles.introImgInset}
              style={{
                backgroundImage: "url('/Images/smart2.jpg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Built for every site Grid ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteContainer}>
          <div className={styles.siteHeader}>
            <h2 className={styles.secTitle} style={{ marginBottom: 0 }}>
              Built for every <br />
              <span>site, every shift</span>
            </h2>
            <p className={styles.siteDesc}>
              Tailored modular canteens from L&R Green Pvt Ltd designed to serve
              thousands of workers or small executive teams across various
              industries.
            </p>
          </div>
          <div className={styles.siteGrid}>
            {siteData.map((item, i) => (
              <div key={i} className={styles.siteCard}>
                <div
                  className={styles.siteCardImg}
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className={styles.siteCardBody}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Create ── */}
      <section className={styles.mfgSec}>
        <img
          src="/Images/create.png"
          className={styles.mfgLeftBg}
          alt="Create Decor"
        />
        <div className={styles.mfgWatermark}>L&R PREFABRICATED STAFF</div>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgContent}>
            <h2>
              How We Create <br />
              Prefabricated Staff Canteens
            </h2>
            <p>
              At L&R Enterprises, we design and build prefabricated staff
              canteens tailored to site requirements, from planning efficient
              layouts to manufacturing and on-site installation. Our process
              ensures fast delivery, quality construction, and ready-to-use
              dining spaces.
            </p>
          </div>
          <div
            className={styles.mfgVisuals}
            style={{ backgroundImage: "url('/Images/staff canteen.png')" }}
          />
        </div>
      </section>

      {/* ── Structural Features ── */}
      <section className={styles.structSec}>
        <div className={styles.structContainer}>
          <div className={styles.structTitleArea}>
            <h2 className={styles.secTitle} style={{ color: "#111827" }}>
              Structural Features <br />
              Section
            </h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.structImages}>
            <div
              className={styles.structImgMain}
              style={{ backgroundImage: "url('/Images/section1.jpg')" }}
            />
            <div
              className={styles.structImgInset}
              style={{ backgroundImage: "url('/Images/section2.jpg')" }}
            />
          </div>
          <div className={styles.structText}>
            <p>
              Designed with advanced components like insulated panels,
              fire-resistant materials, temperature control systems, cable
              management support, ventilation integration, and anti-static
              flooring to ensure safety, efficiency, and reliable performance in
              critical environments
            </p>
            <div className={styles.featureList}>
              {structFeatures.map((feat, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Our Canteens ── */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <div className={styles.siteHeader} style={{ alignItems: "flex-start" }}>
            <div>
              <h2 className={styles.secTitle} style={{ marginBottom: '12px' }}>
                Why Choose <br />
                <span>Our Canteens</span>
              </h2>
              <div className={styles.divider} style={{ margin: 0 }} />
            </div>
            <p className={styles.siteDesc} style={{ textAlign: "right", maxWidth: "500px" }}>
              Efficient, hygienic, and flexible canteen solutions designed <br />
              for quick setup and long-term usability.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyData.map((card, i) => (
              <div
                key={i}
                className={`${styles.whyCard} ${card.highlight ? styles.whyCardHighlight : ""}`}
              >
                <div className={styles.whyIconWrap}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.siteHeader} style={{ alignItems: "flex-start" }}>
            <div>
              <h2 className={styles.secTitle} style={{ marginBottom: '12px' }}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} style={{ margin: 0 }} />
            </div>
            <p className={styles.siteDesc} style={{ textAlign: "right", maxWidth: "500px" }}>
              Quick answers to common queries about modular <br />
              staff canteen design, installation, and usage.
            </p>
          </div>

          <div className={styles.faqContent}>
            <div className={styles.faqVisuals}>
              <div
                className={styles.faqImg}
                style={{
                  backgroundImage: "url('/Images/question4.jpg')",
                }}
              />
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
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <polyline points="19 12 12 19 5 12"></polyline>
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
                          <line x1="12" y1="19" x2="12" y2="5"></line>
                          <polyline points="5 12 12 5 19 12"></polyline>
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

      {/* ── CTA Banner ── */}
      <section 
        className={styles.ctaBanner}
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/Images/last23.jpg')" }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Prefabricated Staff Canteen?</h2>
          <p>
            Connect with our team to design your custom modular staff canteen,
            offering a comfortable, <br />
            hygienic, and safe dining environment for your workforce.
          </p>
          <button className={styles.btnSecondary}>
            Contact US
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

export default PrefabStaffCanteens;
