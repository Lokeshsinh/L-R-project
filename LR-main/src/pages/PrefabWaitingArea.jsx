import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabWaitingArea.module.css";

const PrefabWaitingArea = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      title: "Healthcare & Hospitals",
      desc: "Hygienic and comfortable waiting spaces designed to manage patient flow efficiently while maintaining a calm environment.",
      img: "/Images/wait1.jpg",
    },
    {
      title: "Corporate Offices",
      desc: "Professional waiting lounges that enhance visitor experience and reflect a modern, premium brand image.",
      img: "/Images/wait2.jpg",
    },
    {
      title: "Retail & Commercial Spaces",
      desc: "Attractive waiting zones that improve customer comfort and enhance the overall shopping experience in busy environments.",
      img: "/Images/wait3.jpg",
    },
    {
      title: "Transport & Public Hubs",
      desc: "Durable and high-capacity waiting areas built for airports, bus stations, and other crowded public transport zones",
      img: "/Images/wait4.jpg",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF prefabricated waiting area?",
      a: "It is a factory-built, modular waiting space constructed using Light Gauge Steel Framing and insulated sandwich panels, designed for rapid deployment at any facility.",
    },
    {
      id: 1,
      q: "How long does installation take?",
      a: "Installation is much faster than traditional construction, often completed within a short time depending on project size, with minimal on-site disruption.",
    },
    {
      id: 2,
      q: "Are prefab waiting areas durable?",
      a: "Yes, they are built to resist termites, rust, and heavy public usage, ensuring long-lasting structural strength and reliable performance over time.",
    },
    {
      id: 3,
      q: "Can the design be customized?",
      a: "Yes, we provide fully customized waiting areas with air conditioning, LED lighting, seating fixtures, branded interiors, and all required electrical fittings.",
    },
    {
      id: 4,
      q: "Where can these waiting areas be used?",
      a: "These prefabricated waiting spaces are ideal for airports, hospitals, offices, and public transport hubs where speed and efficiency are critical.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Hero Section */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/waitingarea.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            LGSF PREFABRICATED <br />
            <span>WAITING AREAS</span>
          </h1>
          <p className={styles.subtitle}>
            Step into the future of efficient and stylish waiting solutions with
            advanced LGSF <br />
            technology. Built for speed, strength, and modern aesthetics.
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

      {/* Intro Section */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Next-Generation <br />
              <span>Prefabricated Waiting Spaces</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF prefabricated waiting areas by L&amp;R Green Pvt Ltd are
              built using cold-formed galvanized steel for strong structural
              stability and long- lasting durability. These modern units are
              designed to handle continuous public usage in busy environments.
              They offer high resistance to corrosion, termites, and weather
              impact. The lightweight steel framing ensures faster construction
              without compromising strength. Overall, they provide a reliable
              and efficient solution for modern waiting spaces.
            </p>
            <p>
              These prefabricated waiting spaces are ideal for airports,
              hospitals, offices, and public transport hubs where speed and
              efficiency are critical. The modular design allows quick
              installation with minimal on-site disruption. They combine modern
              aesthetics with functional layouts for better user comfort.
              Flexible design options make them suitable for different space
              requirements. This makes them a smart choice for future- ready
              infrastructure development.
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
            <div
              style={{
                width: "100%",
                height: "460px",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <img
                src="/Images/waitarea1.jpg"
                alt="LGSF Prefab Waiting Area"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        className={styles.splitSec}
        style={{ padding: "100px 8% 120px 8%", background: "#f8fafc" }}
      >
        <div className={styles.containerMax}>
          <div className={styles.headerRow}>
            <div>
              <h2 className={styles.secTitle}>
                Advantage of LGSF
                <br />
                <span> Prefabricated Waiting Areas </span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.descText}>
              L&amp;R Green Pvt Ltd prefabricated waiting areas are designed for
              versatile use across high-traffic public and commercial spaces,
              ensuring comfort, durability, and modern functionality.
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

      {/* Smart Prefab Solutions Banner */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          L &amp; R LGSF PREFABRICATED WAITING AREA
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Smart Prefab <br />
              <strong>Solutions</strong>
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#ffffff", marginBottom: "30px" }}
            />
            <p>
              L&amp;R Green Pvt Ltd delivers eco-friendly, high-strength, and
              fully customizable prefabricated waiting areas built with advanced
              LGSF technology. Our solutions ensure sustainable construction
              with reduced waste and energy usage, while providing strong
              structural performance and modern architectural appeal. Each
              design is tailored to client needs, offering flexible layouts,
              seating options, finishes, and branding to create functional and
              visually refined waiting spaces.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/smartwait.jpg"
              alt="Smart Prefab Waiting Area"
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

      {/* Advantages Section - Pixel-perfect Card Grid with Active Navy Card */}
      <section
        className={styles.splitSec}
        style={{ background: "#ffffff", padding: "100px 8%" }}
      >
        <div className={styles.containerMax}>
          <div className={styles.headerRow}>
            <div>
              <h2 className={styles.secTitle}>
                Advantages of <br />
                <span>Prefab Waiting Areas</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.descText}>
              Our prefabricated waiting areas offer speed, strength, and
              sustainability. Built by L&amp;R Green Pvt Ltd, they ensure fast
              construction, lasting durability, and modern design.
            </p>
          </div>

          <div className={styles.advantageCardsGrid}>
            {[
              {
                icon: (
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e3a63"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                    <path d="M17.64 15 22 10.64" />
                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H11L8.67 5.33c-.73.73-1.15 1.71-1.15 2.75V11l4 4h2.95c1.04 0 2.02-.42 2.75-1.15l2.69-2.69Z" />
                  </svg>
                ),
                title: "Fast Installation",
                desc: "Quick deployment with minimal disruption, allowing faster setup of waiting spaces and reducing overall project completion time efficiently.",
              },
              {
                icon: (
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                ),
                title: "Cost-Effective",
                desc: "Budget-friendly construction method that reduces labor costs and material wastage while maintaining strong quality and modern design standards.",
                isActive: true,
              },
              {
                icon: (
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e3a63"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                ),
                title: "High Durability",
                desc: "Built to resist termites, rust, and heavy public usage, ensuring long-lasting structural strength and reliable performance over time.",
              },
              {
                icon: (
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e3a63"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                ),
                title: "Eco-Friendly",
                desc: "Sustainable construction approach by L&R Green Pvt Ltd that minimizes environmental impact through efficient and responsible material usage.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${styles.advantageCard} ${card.isActive ? styles.advantageCardActive : ""}`}
              >
                <div className={styles.advantageCardIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.splitSec} style={{ background: "#ffffff", padding: "100px 8%" }}>
        <div className={styles.containerMax}>
          <div className={styles.headerRow} style={{ alignItems: "flex-start", marginBottom: "60px" }}>
            <div>
              <h2 className={styles.secTitle} style={{ textAlign: "left" }}>
                Why Choose Prefab <br />
                <span>Waiting Areas</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <div style={{ maxWidth: "560px", color: "#475569", lineHeight: "1.75", fontSize: "15px" }}>
              <p style={{ marginBottom: "20px" }}>
                Prefabricated waiting areas by L&amp;R Green Pvt Ltd are designed
                using advanced LGSF (Light Gauge Steel Framing) technology to
                deliver speed, strength, and modern architectural design. They are
                ideal for fast-moving infrastructure projects where quick
                execution and long-term durability are essential.
              </p>
              <p>
                These structures reduce construction time significantly while
                maintaining high engineering quality and cost efficiency. They
                provide a smart, future-ready solution for hospitals, offices,
                transport hubs, and public spaces with a professional and modern
                appearance.
              </p>
            </div>
          </div>
          
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <div className={styles.decoImageWrap}>
              <img
                src="/Images/whywait.jpg"
                alt="Why Choose Prefab Waiting Areas"
                className={styles.decoImage}
              />
              <div className={styles.decoBlueBar} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSec} style={{ background: "#ffffff" }}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FQS</span>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Find quick answers about LGSF prefab waiting areas by L&amp;R
              Green Pvt Ltd, covering design, durability, installation, and
              usage to help you understand our modern construction solutions
              better.
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
                src="/Images/faqwait.jpg"
                alt="FAQ"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/ctawait.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Prefab Waiting Area Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated
            <br />
            Prefab Waiting Area solutions tailored to your site needs.
          </p>
          <button className={styles.btnSecondary}>
            Contact US &nbsp;
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrefabWaitingArea;
