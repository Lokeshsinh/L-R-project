import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/FarmhouseCottage.module.css";

const FarmhouseCottage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuralFeatures = [
    {
      title: "LGSF Steel Framing",
      desc: "Lightweight yet high-strength steel framework for durable long-lasting structures.",
      img: "/Images/farm1.jpg",
    },
    {
      title: "Insulated Wall Panels",
      desc: "PUF/EPS core sandwich panels providing superior thermal and acoustic comfort.",
      img: "/Images/farm2.jpg",
    },
    {
      title: "Sloped Roofing Systems",
      desc: "Elegant sloped roofs with weatherproof coatings ideal for farmhouse aesthetics.",
      img: "/Images/farm3.jpg",
    },
    {
      title: "Wooden Finish Cladding",
      desc: "External cladding options that replicate natural wood or stone for rustic charm.",
      img: "/Images/farm4.jpg",
    },
  ];

  const applications = [
    {
      title: "Weekend Farmhouses",
      desc: "Serene getaway homes built rapidly on agricultural land with natural aesthetics.",
    },
    {
      title: "Holiday Cottages",
      desc: "Vacation cottages at hill stations, forests, and coastal areas with premium comfort.",
    },
    {
      title: "Resort Accommodation",
      desc: "Prefab cottage units for eco-resorts, wildlife lodges, and glamping destinations.",
    },
    {
      title: "Rural Homestays",
      desc: "Comfortable and attractive homestay units for agritourism and rural hospitality.",
    },
    {
      title: "Guest Houses",
      desc: "Additional guest accommodation on farmland properties with full amenities.",
    },
    {
      title: "Eco-Retreat Centers",
      desc: "Sustainable living spaces for yoga retreats, wellness centers, and nature camps.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is a prefab farmhouse or cottage?",
      a: "A prefab farmhouse or cottage is a factory-built modular structure using LGSF or PUF panels, erected on-site rapidly without traditional brick-and-mortar construction.",
    },
    {
      id: 1,
      q: "How long does construction take?",
      a: "Depending on size, a prefab farmhouse or cottage can be fully completed within 3 to 8 weeks, compared to months for conventional construction.",
    },
    {
      id: 2,
      q: "Can the design look like a traditional farmhouse?",
      a: "Yes, we offer external cladding, pitched roofs, wooden finish facades, and custom interiors that replicate traditional farmhouse and cottage aesthetics beautifully.",
    },
    {
      id: 3,
      q: "Are these structures permitted on agricultural land?",
      a: "Prefab farmhouses are generally permissible on agricultural land in India, subject to local regulations. We advise consulting your local authority before proceeding.",
    },
    {
      id: 4,
      q: "What is the cost compared to conventional construction?",
      a: "Prefab farmhouses are typically 20–40% more cost-effective than conventional construction, with faster completion and lower maintenance costs over time.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/farmhouse.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            MODERN PREFAB <br />
            <span>FARMHOUSES &amp; COTTAGES</span>
          </h1>
          <p className={styles.subtitle}>
            Beautifully designed, rapidly built prefabricated farmhouses and
            cottages — combining natural aesthetics with the speed and quality
            of modern construction technology.
          </p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/farmhouse1.jpg"
                  alt="Prefab Farmhouse"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/farmhouse2.jpg"
                  alt="Prefab Cottage"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Prefabricated Cottages <br />
              <span>&amp; Farm Houses</span>
            </h2>
            <div className={styles.divider} />
            <p
              style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}
            >
              L&amp;R Green India Pvt Ltd brings your dream farmhouse or
              countryside cottage to life with factory-precision prefabrication
              technology, delivering structures that are strong, beautiful, and
              sustainable.
            </p>
            <p>
              Our prefab farmhouses and cottages are designed with sloped roofs,
              natural finish cladding, large windows, and premium interiors —
              built to blend seamlessly into their natural surroundings while
              providing all modern comforts.
            </p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>
              Read more &nbsp;→
            </button>
          </div>
        </div>
      </section>

      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>
              Structural Features of <br />
              <span>Prefab Farmhouse &amp; Cottage</span>
            </h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.cardGrid}>
            {structuralFeatures.map((card, idx) => (
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

      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Applications of Prefabricated <br />
              <span>Cottages &amp; Farm Houses</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Our prefab farmhouses and cottages are versatile enough for a wide
              range of residential, hospitality, and agritourism applications
              across diverse terrains.
            </p>
            <div className={styles.appsGrid}>
              {applications.map((app, i) => (
                <div key={i} className={styles.appCard}>
                  <strong>{app.title}</strong>
                  <p>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.imgCol}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/Images/farmapplication.jpg"
              alt="Farmhouse Applications"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>FARMHOUSE</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Energy Efficiency, Sustainability <br />
              <strong>&amp; Customization Options</strong>
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#ffffff", marginBottom: "30px" }}
            />
            <p>
              Our prefabricated farmhouses use PUF insulated panels that
              dramatically reduce energy consumption for heating and cooling.
              The eco-friendly construction process minimizes site waste, and
              all materials are sustainably sourced. Choose from a wide range of
              exterior finishes, interior layouts, roof styles, and add-on
              features to create your perfect countryside retreat.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/farmenergy.jpg"
              alt="Energy Efficient Farmhouse"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}>
                <img
                  src="/Images/whyfarm1.jpg"
                  alt="Why Choose prefab farmhouse"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />
              </div>
              <div className={styles.smallImg}>
                <img
                  src="/Images/whyfarm2.jpg"
                  alt="Farmhouse interior"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Advantages of Prefabricated <br />
              <span>Farm Houses</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.bulletList} style={{ marginTop: "30px" }}>
              {[
                "3–8x faster construction than conventional methods",
                "20–40% cost savings over traditional builds",
                "Fully customizable floor plans and facades",
                "Superior thermal insulation for year-round comfort",
                "Earthquake and wind resistant steel frame structure",
                "Low maintenance and long service life (30+ years)",
              ].map((item, i) => (
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
      </section>

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
              Common questions about our prefab farmhouses and cottages —
              construction, customization, and more.
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
                src="/Images/faqfarm.jpg"
                alt="FAQ farmhouse"
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

      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('/Images/ctafarm.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Farm Houses &amp; Cottages Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, beautiful, and
            fully customized prefab farmhouse and cottage solutions.
          </p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FarmhouseCottage;
