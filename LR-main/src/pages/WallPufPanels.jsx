import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/WallPufPanels.module.css";

const WallPufPanels = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyFeatures = [
    "Excellent thermal insulation",
    "High structural strength & durability",
    "Fast and simple installation process",
    "Fire retardant options available",
    "Smooth finishes & aesthetic appeal",
    "Energy saving & cost efficient",
    "Low maintenance required",
  ];

  const thermalInsulationList = [
    "Retains internal temperature effectively",
    "Protects goods against extreme weather conditions",
    "Enhances indoor air quality",
    "Energy saving up to 40%",
    "Reduces carbon footprint of the building",
  ];

  const advantages = [
    "Rapid installation with pre-engineered components",
    "Weather-proof, insulated, and fire retardant",
    "Sturdy steel frames built for high wind loads",
    "Integrated electrical wiring, cooling & cable entry ports",
    "Rust-proof and vermin-resistant cabins",
    "Compliant with industry safety and building standards",
  ];

  const applications = [
    "Commercial Buildings",
    "Industrial Warehouses",
    "Cold Storages",
    "Factories",
    "Clean Rooms",
    "Telecom Shelters",
    "Educational Institutions",
    "Hospitals",
    "Food Processing Units",
  ];

  const faqs = [
    {
      id: 0,
      q: "What are PUF panels used for?",
      a: "Wall PUF panels are widely used for vertical wall cladding, partitions, clean rooms, cold storages, telecom shelters, and modular cabins to offer high durability and insulation.",
    },
    {
      id: 1,
      q: "Are Wall PUF panels energy-efficient?",
      a: "Yes, due to their excellent thermal insulation properties, they minimize heat transfer and can reduce heating or cooling costs by up to 40%.",
    },
    {
      id: 2,
      q: "Are Wall PUF panels fire-retardant?",
      a: "Yes, we manufacture fire-retardant Wall PUF panels that comply with industry safety standards to protect your buildings and assets.",
    },
    {
      id: 3,
      q: "Can they be used as partitions?",
      a: "Yes, they are ideal for internal partition walls in warehouses, factories, clean rooms, and commercial offices, offering quick installation and clean aesthetics.",
    },
    {
      id: 4,
      q: "What is the life of Wall PUF panels?",
      a: "Wall PUF panels are highly durable, rust-proof, and designed to last for several decades with minimal maintenance.",
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
        style={{ backgroundImage: "url('/Images/wallpuf.jpg')" }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            HIGH-PERFORMANCE <br />
            WALL PUF PANELS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Enterprises has been updated Wall PUF Panels which play a
            key role in providing insulation solutions that highlight strong
            structure and excellent thermal resistance for modern construction.
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

      {/* ── WHAT ARE WALL PUF PANELS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              What Are Wall <br />
              <span>PUF Panels</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Wall PUF Panels are made of two pre-painted galvanized iron (PPGI)
              sheets with a rigid polyurethane foam (PUF) core in between. This
              structure provides excellent thermal insulation, high structural
              strength, and long-term durability. These panels are extensively
              used for exterior walls, interior partitions, and enclosures in
              various commercial, industrial, and residential applications.
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
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/wallapanel.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Key Features of <br />
              <span>Wall PUF Panels</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/pufpanel5.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Wall PUF Panels by L&amp;R Enterprises are engineered with
              precision to provide superior performance. They are an ideal
              choice for a wide range of applications due to their exceptional
              properties:
            </p>
            <div className={styles.featureList}>
              {keyFeatures.map((feat, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckIcon />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Technical Specifications <br />
              <span>Wall PUF Panels</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Our PUF panels are available in customized thicknesses and
              dimensions to suit different project requirements. They are
              manufactured using state-of-the-art technology to ensure
              precision, reliability, and longevity.
            </p>
          </div>
          <div className={styles.gridCol}>
            <div className={styles.specGrid}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Thickness</span>
                <span className={styles.specValue}>50mm to 150mm</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Density of PUF core</span>
                <span className={styles.specValue}>38-42 kg/m³</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Outer sheet thickness</span>
                <span className={styles.specValue}>0.4mm to 0.6mm</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Effective width</span>
                <span className={styles.specValue}>Approx. 1000mm</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>Length</span>
                <span className={styles.specValue}>
                  As per project requirement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Applications of Wall <br />
              <span>PUF Panels</span>
            </h2>
            <div className={styles.divider} />
            <p>
              L&amp;R Enterprises Wall PUF Panels are ideal for a wide range of
              industrial and commercial applications due to their high
              structural strength and thermal insulation.
            </p>
            <div className={styles.tagsGrid}>
              {applications.map((app, i) => (
                <span key={i} className={styles.tagItem}>
                  {app}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/applicationpufpanel.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY BANNER ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Sustainability, Energy Efficiency <br />
              &amp; Structural Strength
            </h2>
            <p>
              L&amp;R Enterprises provides environmentally friendly building
              materials that reduce carbon footprint. The polyurethane foam used
              in our panels is free from CFCs and HCFCs. By improving thermal
              insulation, they significantly reduce the energy required for
              cooling and heating, resulting in long-term cost savings.
            </p>
          </div>
          <div className={styles.blueBannerImg}>
            {/* Add image later */}
            <div
              className={styles.placeholderImgTransparent}
              style={{
                backgroundImage: "url('/Images/energy.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* ── THERMAL INSULATION ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Thermal Insulation <br />
              <span>Performance</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/thermal.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              The high density PUF core provides excellent thermal insulation,
              which significantly reduces the energy required for cooling and
              heating. It acts as a strong barrier against heat transfer.
            </p>
            <div className={styles.featureListBordered}>
              {thermalInsulationList.map((item, i) => (
                <div key={i} className={styles.featureItemBordered}>
                  <div className={styles.bulletDot}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EFFICIENT INSTALLATION ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Efficient Installation &amp; <br />
              <span>Fire Safety Compliance</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Our PUF Panels are designed with an easy tongue-and-groove
              jointing system, making installation quick, seamless, and secure.
              This significantly reduces construction time and labor costs.
            </p>
            <p>
              In addition to performance, safety is our top priority. We offer
              fire-retardant PUF panels that comply with industry fire safety
              standards, providing an extra layer of protection for your
              infrastructure and assets.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight}></div>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/firesafety.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Advantages of Prefabricated <br />
              <span>Railway &amp; Telecom Shelters</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/advtele.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Choosing a factory-built modular shelter over conventional
              brick-and-mortar construction delivers measurable project and
              lifecycle benefits:
            </p>
            <div className={styles.numList}>
              {advantages.map((adv, i) => (
                <div key={i} className={styles.numItem}>
                  <span className={styles.numBadge}>{i + 1}</span>
                  <span>{adv}</span>
                </div>
              ))}
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
              Find answers to common questions about sandwich panels, insulation
              performance, applications, and building solutions.
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
              {/* Add image later */}
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/faqquestion.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/cat.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Sandwich Wall Puf Panels Solution?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized sandwich wall PUF panel solutions tailored to your
            site needs.
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

export default WallPufPanels;
