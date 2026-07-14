import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopResidential.module.css";

const RooftopResidential = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What are prefabricated rooftop residential flats?",
      a: "They are modern, modular living units constructed on the roofs of existing buildings using lightweight steel frames and insulated panels.",
    },
    {
      id: 1,
      q: "Are rooftop prefab flats safe for existing buildings?",
      a: "Yes, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does installation take?",
      a: "Installation typically takes a few weeks, depending on the scale and custom elements of the rooftop flat layout.",
    },
    {
      id: 3,
      q: "Can these units be customized?",
      a: "Yes, you can fully customize the modular flat layouts, kitchen/bathroom configuration, balconies, and choose glass façade designs.",
    },
    {
      id: 4,
      q: "Are prefabricated rooftop flats permanent?",
      a: "They are highly durable and long-lasting, designed to endure severe weather, but they can be fully dismantled, modified, or relocated if needed.",
    },
  ];

  const categories = [
    {
      title: "Modular Flat Layouts",
      desc: "Flexible floor plans designed to match different space requirements, allowing efficient use of rooftop areas for compact or spacious residential units.",
      img: "/Images/life1.jpg",
    },
    {
      title: "Balcony or Terrace Integration",
      desc: "Option to add private balconies or open terrace spaces, enhancing comfort, ventilation, and lifestyle experience.",
      img: "/Images/life2.png",
    },
    {
      title: "Kitchen & Bathroom Setup",
      desc: "Fully planned plumbing and utility connections for functional kitchens and modern bathroom installations.",
      img: "/Images/life3.png",
    },
    {
      title: "Glass Façade Design",
      desc: "Modern glass façade options that enhance natural light, improve aesthetics, and give the rooftop unit a premium architectural look while maintaining strength and durability.",
      img: "/Images/life4.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/flat.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            ROOFTOP PREFABRICATED <br />
            ROOMS FOR RESIDENTIAL FLATS
          </h1>
          <p className={styles.subtitle}>
            Transform unused rooftops into modern residential spaces with
            lightweight, durable, and fully engineered prefab structures
            designed for safety, comfort, and speed.
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

      {/* ── SECTION 1: MAXIMIZE YOUR BUILDING POTENTIAL ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Maximize Your <br />
              <span>Building Potential</span>
            </h2>
            <div className={styles.divider} />

            <div className={styles.modernImageWrap}>
              <div
                className={styles.mainModernImg}
                style={{
                  backgroundImage: "url('/Images/building.jpg')",
                }}
              />

              <div
                className={styles.floatingImg}
                style={{
                  backgroundImage: "url('/Images/building2.jpg')",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              As urban land becomes increasingly limited, making efficient use
              of existing structures has become essential. Rooftop expansion
              offers a practical and intelligent solution to create additional
              residential flats without the need for relocation or full-scale
              reconstruction. It allows property owners to utilize unused
              rooftop space and convert it into fully functional living units,
              adding both value and usability to the building.
            </p>
            <p>
              L&R Green India Pvt Ltd provides advanced prefabricated rooftop
              structures designed with a strong focus on safety, speed, and
              long-term durability. These systems are engineered to integrate
              smoothly with existing buildings while requiring minimal
              structural modifications. With lightweight construction and
              precision engineering, they ensure stable performance, modern
              aesthetics, and comfortable residential spaces built for urban
              living.
            </p>
            <button
              className={styles.btnSecondary}
              style={{ marginTop: "16px" }}
            >
              Contact Us &nbsp;→
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHERE ROOFTOP RESIDENTIAL UNITS CAN BE USED ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Where Rooftop Residential <br />
              <span>Units Can Be Used</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Rooftop residential units turn unused roof space into modern,
              functional living areas. They are quick to install,
              space-efficient, and ideal for expanding homes or buildings
              without major construction.
            </p>

            <div className={styles.numList}>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Additional residential flats
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Rental apartments
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Guest accommodation units
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Studio living spaces
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Penthouse-style extensions
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Staff housing units
                </div>
              </div>
              <div className={styles.numItem}>
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
                <div
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Temporary or permanent housing solutions
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/unit1.jpg"
                  alt="Where Rooftop Residential Units Can Be Used"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image */}
              <div className={styles.smallImg}>
                <img
                  src="/Images/unit2.jpg"
                  alt="Modern Prefab Unit"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DESIGNED AROUND YOUR LIFESTYLE ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle}>
                Designed Around <br />
                <span>Your Lifestyle</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p
              className={styles.thicknessSubtitle}
              style={{
                maxWidth: "480px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "38px",
              }}
            >
              Each rooftop residential unit is fully customizable to match your
              requirements, whether for personal living or rental purposes.
            </p>
          </div>
          <div className={styles.thicknessGrid}>
            {categories.map((cat, i) => (
              <div key={i} className={styles.thicknessCard}>
                <div className={styles.thicknessCardImageWrap}>
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className={styles.thicknessCardImage}
                  />
                </div>
                <div className={styles.thicknessCardContent}>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENGINEERED FOR SAFE URBAN LIVING ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          L &amp; R ROOF TOP RESIDENTIAL FLAT
        </div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Engineered for <br />
              <span style={{ fontWeight: "600" }}>Safe Urban Living</span>
            </h2>
            <div
              className={styles.divider}
              style={{
                background: "#fff",
                width: "50px",
                height: "4px",
                margin: "15px 0",
              }}
            />
            <p>
              Our rooftop units are built with lightweight steel framing, PUF
              insulated panels, and weather-resistant roofing for strength,
              comfort, and durability. Designed to reduce load on existing
              buildings, they include earthquake and wind resistance along with
              proper structural safety assessment for reliable urban expansion.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div style={{ width: "100%", height: "420px", overflow: "hidden" }}>
              <img
                src="/Images/safeurban.png"
                alt="Safe Urban Living Prefab Villa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ADVANTAGES OF PREFAB RESIDENTIAL FLATS ── */}
      <section
        className={styles.splitSec}
        style={{ background: "#ffffff", padding: "80px 8%" }}
      >
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>
              Advantages of Prefab <br />
              <span>Residential Flats</span>
            </h2>
            <div className={styles.divider} />
          </div>

          <div
            className={styles.splitContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "70px",
              alignItems: "center",
            }}
          >
            <div className={styles.imgCol}>
              <div className={styles.multiImgWrap}>
                {/* Main Large Image */}
                <div className={styles.mainImg}>
                  <img
                    src="/Images/advflatbig.jpg"
                    alt="Advantages of Prefab Residential Flats"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "14px",
                      display: "block",
                    }}
                  />
                </div>

                {/* Small Floating Image */}
                <div className={styles.smallImg}>
                  <img
                    src="/Images/advflatsnall.png"
                    alt="Prefab Residential Terrace"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.textCol}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#64748b",
                  marginBottom: "30px",
                }}
              >
                Prefabricated rooftop flats are a quick, cost-effective way to
                expand space with minimal load on existing buildings. They are
                energy-efficient, flexible, modern in design, and cause very
                little disruption during installation.
              </p>

              <div
                className={styles.numList}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Minimal load on existing structure
                  </div>
                </div>
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Fast installation within weeks
                  </div>
                </div>
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Cost-effective compared to new construction
                  </div>
                </div>
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Fully removable or relocatable units
                  </div>
                </div>
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Energy-efficient interiors
                  </div>
                </div>
                <div className={styles.numItem}>
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
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#334155",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    Modern architectural look
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP PREFAB ROOMS ── */}
      <section
        className={styles.splitSecAlt}
        style={{ padding: "80px 8% 100px 8%", background: "#f8fafc" }}
      >
        <div
          className={styles.splitContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          <div className={styles.textCol} style={{ paddingTop: "0px" }}>
            <h2 className={styles.secTitle}>
              Why Choose Roof <br />
              <span>Top Residential Flat</span>
            </h2>
            <div className={styles.divider} />
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#475569",
                marginBottom: "22px",
              }}
            >
              At L&amp;R Green India Pvt Ltd, we specialize in delivering safe,
              durable, and high-performance rooftop residential structures using
              advanced steel engineering and prefabrication technology. Our
              focus is on creating reliable solutions that ensure strength,
              efficiency, and long-term value for urban living spaces.
            </p>
            <p
              style={{ fontSize: "16px", lineHeight: "1.8", color: "#475569" }}
            >
              With a strong commitment to quality and precision, we provide
              complete turnkey solutions from design to execution. Our expert
              team ensures fast project delivery, safe installation over
              existing buildings, and the use of high-quality materials and
              insulation systems for superior results.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/topflat1.png"
                  alt="Why Choose L&R Green Prefab Rooftop Rooms"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image */}
              <div className={styles.smallImg}>
                <img
                  src="/Images/topflat2.jpg"
                  alt="Premium Rooftop Louvered Terrace"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section
        className={styles.faqSec}
        style={{ background: "#ffffff", padding: "100px 8%" }}
      >
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FQS</span>
          <div
            className={styles.faqHeaderRow}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "50px",
            }}
          >
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p
              className={styles.faqDesc}
              style={{
                maxWidth: "480px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Find answers to common questions about prefabricated rooftop
              residential flats, including installation, safety, customization,
              and suitability for different building types.
            </p>
          </div>
          <div
            className={styles.faqContent}
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1.3fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
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
                src="/Images/freqflat.jpg"
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
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/ctaflat.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Residential Flat Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop prefab room solutions tailored to your site
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

export default RooftopResidential;
