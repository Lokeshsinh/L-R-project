import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabResidentialHouse.module.css";

const PrefabResidentialHouse = () => {
  const [openFaq, setOpenFaq] = useState(1); // Second item open by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is LGSF construction?",
      a: "Light Gauge Steel Framing (LGSF) is a modern construction method using high-strength galvanized steel sections to build strong, lightweight, and fast multi-story buildings.",
    },
    {
      id: 1,
      q: "Is it suitable for G+2 houses?",
      a: "Yes, LGSF is engineered for multi-story buildings like G+1 and G+2 with excellent structural stability. It provides safety and flexibility for modern residential designs.",
    },
    {
      id: 2,
      q: "How fast is construction?",
      a: "LGSF construction is 50-60% faster than traditional concrete builds, as framing and panels are manufactured off-site and quickly assembled on-site.",
    },
    {
      id: 3,
      q: "Is it durable?",
      a: "Yes, LGSF structures are highly durable, resistant to moisture, corrosion, termites, and earthquakes, ensuring a lifespan of over 50 years.",
    },
    {
      id: 4,
      q: "Is it eco-friendly?",
      a: "Yes, LGSF uses over 90% recyclable steel and generates minimal construction waste, making it a highly sustainable and green building solution.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: `url("/Images/g1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            LGSF PREFAB RESIDENTIAL <br />
            HOUSES (G+1 / G+2)
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Green Pvt Ltd delivers high-quality prefab homes designed
            for speed, durability, and flexibility—perfect for modern living.
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

      {/* ── SECTION 2: PREFAB RESIDENTIAL HOUSES (G+1 / G+2) ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/g2.png"
                alt="Prefab Residential Houses"
                className={styles.decorImage}
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Prefab Residential <br />
              <span>Houses (G+1 / G+2)</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              Light Gauge Steel Framing (LGSF) prefab houses are modern
              residential structures built using cold-formed galvanized steel
              components that are manufactured in a controlled factory
              environment and assembled on-site. This method ensures high
              precision, consistent quality, and significantly reduces
              construction time compared to traditional RCC methods, making it
              an efficient solution for contemporary housing needs.
            </p>
            <p>
              These homes are especially suitable for G+1 and G+2 residential
              buildings, offering a strong yet lightweight structure with
              excellent durability. LGSF prefab houses are designed for faster
              project completion while maintaining structural integrity, making
              them ideal for urban homes, villas, and other residential
              applications.
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
        </div>
      </section>

      {/* ── SECTION 3: APPLICATIONS OF PREFAB RESIDENTIAL HOUSES ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          {/* LEFT: Content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Applications of Prefab <br />
              <span>Residential Houses (G+1 / G+2)</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              LGSF homes offer unmatched speed, strength, and sustainability,
              making them a future-ready construction solution. Their
              lightweight yet durable structure ensures faster construction,
              reduced costs, and long-term performance with minimal maintenance.
            </p>

            <div className={styles.bulletList}>
              {[
                "Individual Villas & Bungalows",
                "Urban Residential Housing",
                "Farmhouses & Holiday Homes",
                "Staff Quarters & Worker Housing",
                "Disaster Relief Housing",
              ].map((item, idx) => (
                <div className={styles.bulletItem} key={idx}>
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

          {/* RIGHT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/g3.jpg"
                alt="Applications of Prefab"
                className={styles.decorImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: G+1 / G+2 LGSF HOMES - FLEXIBLE DESIGNS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R PREFAB RESIDENTIAL</div>
        <div className={styles.blueBannerContainer}>
          {/* LEFT: Text */}
          <div className={styles.blueBannerText}>
            <h2>
              G+1 / G+2 LGSF <br />
              <strong>Homes Flexible Designs</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p style={{ marginTop: "30px" }}>
              LGSF prefab homes for G+1 and G+2 configurations offer flexible
              modern designs with spacious layouts, balconies, and open living
              areas, while delivering key advantages like faster construction,
              lightweight structure, durability, low maintenance, and
              eco-friendly performance. These homes provide a perfect balance of
              style, efficiency, and long-term reliability for modern
              residential living.
            </p>
          </div>
          {/* RIGHT: Image */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/g4.png"
              alt="LGSF Homes Flexible Designs"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: KEY FEATURES OF LGSF PREFAB RESIDENTIAL HOUSES ── */}
      <section
        className={styles.splitSec}
        style={{ padding: "100px 8% 120px 8%" }}
      >
        <div className={styles.containerMax}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of LGSF Prefab <br />
                <span>Residential Houses (G+1 / G+2)</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.sectionDescText}>
              LGSF prefab homes (G+1 / G+2) deliver fast, strong, and
              sustainable modern living with precise, durable construction.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {/* Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconWrap}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.cardIcon}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Fast Construction</h3>
              <p>
                Built 50-60% faster using factory-made, pre-engineered
                components.
              </p>
            </div>

            {/* Card 2 (Active/Dark Background) */}
            <div
              className={`${styles.featureCard} ${styles.featureCardActive}`}
            >
              <div className={styles.cardIconWrap}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.cardIcon}
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9" y2="16" />
                  <line x1="15" y1="22" x2="15" y2="16" />
                  <line x1="9" y1="16" x2="15" y2="16" />
                  <path d="M8 6h3v3H8zm5 0h3v3h-3zm-5 5h3v3H8zm5 0h3v3h-3z" />
                </svg>
              </div>
              <h3>Structural Strength</h3>
              <p>
                High strength-to-weight ratio ensures stability for G+1 and G+2
                homes.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconWrap}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.cardIcon}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Durability &amp; Safety</h3>
              <p>Resistant to earthquakes, fire, termites, and corrosion.</p>
            </div>

            {/* Card 4 */}
            <div className={styles.featureCard}>
              <div className={styles.cardIconWrap}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.cardIcon}
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 9.5a7 7 0 0 1-8 8.5z" />
                  <path d="M19 2L11 10" />
                </svg>
              </div>
              <h3>Sustainable Design</h3>
              <p>
                Uses over 90% recyclable materials with minimal environmental
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE L&R & OUR CONSTRUCTION PROCESS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          {/* LEFT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/g5.jpg"
                alt="Why Choose L&R"
                className={styles.decorImage}
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose L&amp;R &amp; <br />
              <span>Our Construction Process</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              At L&amp;R Green Pvt Ltd, we combine innovation, precision
              engineering, and sustainable practices to deliver high-performance
              LGSF prefab homes tailored to your needs. With a skilled design
              team, premium galvanized steel materials, cost-effective
              solutions, and reliable on-time delivery, we ensure a seamless and
              efficient building experience from start to finish.
            </p>
            <p>
              Our construction process is streamlined for speed and accuracy,
              starting with off-site fabrication of precision steel components,
              followed by lightweight foundation preparation. The structure is
              then assembled using advanced fastening systems, completed with
              high-quality cladding, insulation, and customized interior and
              exterior finishes to create durable and comfortable living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
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
              Find quick answers to common questions about LGSF prefab
              residential houses (G+1 / G+2), including construction,
              durability, and benefits. Understand why they are a fast,
              reliable, and modern housing solution.
            </p>
          </div>
          <div className={styles.faqContent}>
            {/* LEFT: FAQ list */}
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

            {/* RIGHT: Rounded image */}
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/g6.png"
                alt="Frequently Asked Questions"
                className={styles.faqImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(/Images/catg1.jpg)`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Residential Houses (G+1 / G+2)?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated Prefab Residential Houses (G+1 / G+2)
            solutions tailored to your site needs.
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

export default PrefabResidentialHouse;
