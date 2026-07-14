import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfShowroom.module.css";

const LgsfShowroom = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF showroom?",
      a: "It is a modern commercial showroom building constructed using light-gauge galvanized steel frame sections and premium insulated panels.",
    },
    {
      id: 1,
      q: "Can we have large glass display windows in LGSF showrooms?",
      a: "Yes, our engineering allows for seamless integration of heavy structural glazing, large glass storefronts, and elegant curtain walls.",
    },
    {
      id: 2,
      q: "How fast can an LGSF showroom be constructed?",
      a: "Depending on the total area, LGSF showrooms can be fully erected and finished on-site within 6 to 10 weeks, saving months compared to concrete.",
    },
    {
      id: 3,
      q: "What is the height limit for LGSF commercial showrooms?",
      a: "We can easily build LGSF showrooms with double-height ceilings or multi-story structures up to 3 floors with proper structural engineering.",
    },
    {
      id: 4,
      q: "Are LGSF showrooms energy efficient?",
      a: "Yes, the advanced insulated core panels provide exceptional thermal resistance, reducing HVAC energy costs by up to 35%.",
    },
  ];

  const features = [
    {
      title: "Fast Construction",
      desc: "Enables up to 3x faster building completion compared to traditional showroom construction methods.",
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
    },
    {
      title: "Open Space Design",
      desc: "Provides large column-free interiors, making it ideal for product display, branding, and customer movement.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="4" rx="1.5" />
          <rect x="3" y="11" width="18" height="4" rx="1.5" />
          <rect x="3" y="18" width="18" height="4" rx="1.5" />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Flexible Architecture",
      desc: "Supports innovative designs including curved walls, modern facades, and customized layouts.",
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
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 14.5 3.5 16.5 5 18C5.5 18.5 5.5 19.5 5.5 20C5.5 21 6.5 22 7.5 22H12Z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Lightweight Structure",
      desc: "Reduces overall structural load, resulting in lower foundation costs and quicker installation.",
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
          <rect x="3" y="3" width="18" height="6" rx="1" />
          <rect x="3" y="14" width="8" height="7" rx="1" />
          <rect x="13" y="14" width="8" height="7" rx="1" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundColor: "#black",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            LGSF SHOWROOM <br />
            SOLUTIONS
          </h1>
          <p className={styles.subtitle}>
            We design and build high-performance LGSF showrooms that showcase
            innovation, speed, and architectural flexibility for modern
            businesses.
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

      {/* ── SECTION 2: LGSF SHOWROOM INTRODUCTION ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT: Image Container (Big Left, Small Right) */}
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image (Left-aligned) */}
              <div className={styles.mainImgLeft}>
                <img
                  src="/Images/showbig.jpg"
                  alt="Modern LGSF Showroom Structure"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image (Right-aligned) */}
              <div className={styles.smallImgRight}>
                <img
                  src="/Images/showsmall.jpg"
                  alt="Glass curtain wall showroom facade"
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

          {/* RIGHT: Text content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              LGSF <span className={styles.accentText}>Showroom</span>
            </h2>
            <div className={styles.divider} style={{ width: "110px" }} />
            <p
              style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}
            >
              An LGSF showroom is a prefabricated exhibition space constructed
              using cold-formed galvanized steel framing, designed to deliver
              modern, fast, and efficient building solutions. It showcases
              advanced construction technology that combines strength, speed,
              and architectural flexibility, making it a preferred choice over
              traditional building methods.
            </p>
            <p>
              It is built using a prefabricated steel frame system that allows
              quick installation and easy relocation when required. These
              showrooms are ideal for modern commercial display spaces, offering
              open, customizable layouts that support branding, product
              showcasing, and contemporary design requirements.
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHERE LGSF SHOWROOMS ARE USED ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          {/* LEFT: Text content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Where LGSF <br />
              <span className={styles.accentText}>Showrooms Are Used</span>
            </h2>
            <div className={styles.divider} style={{ width: "130px" }} />
            <p style={{ marginTop: "30px" }}>
              LGSF showrooms are widely used across commercial and industrial
              sectors due to their fast construction, flexibility, and modern
              design capabilities, making them suitable for various display and
              business applications.
            </p>

            <div className={styles.bulletList}>
              {[
                "Automobile Showrooms",
                "Furniture Display Centers",
                "Retail Exhibition Spaces",
                "Sales & Marketing Offices",
                "Temporary & Relocatable Showrooms",
                "Industrial Product Display Units",
              ].map((bullet, idx) => (
                <div key={idx} className={styles.bulletItem}>
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
                  <span className={styles.bulletLabel}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image Container (Big Left, Small Right) */}
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              {/* Main Large Image (Left-aligned) */}
              <div className={styles.mainImg}>
                <img
                  src="/Images/show2.png"
                  alt="Where LGSF Showrooms Are Used"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "14px",
                    display: "block",
                  }}
                />
              </div>

              {/* Small Floating Image (Right-aligned) */}
              <div className={styles.smallImg}>
                <img
                  src="/Images/show2small.jpg"
                  alt="Interior mezzanine stairs"
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

      {/* ── SECTION 4: DURABILITY & SUSTAINABILITY OF LGSF SHOWROOMS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R LGSF SHOWROOM</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2 className={styles.secTitleLight}>
              Durability &amp; Sustainability <br />
              <strong>of LGSF Showrooms</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              Our LGSF showrooms are designed for high strength, safety, and
              long-term performance while also following eco-friendly
              construction practices. Built with galvanized steel technology,
              they offer resistance to earthquakes, fire, termites, and
              corrosion, ensuring reliable structural durability. At the same
              time, they promote sustainability through recyclable materials,
              reduced construction waste, lower carbon footprint, and
              energy-efficient building systems.
            </p>
          </div>
          <div className={styles.bannerImgCol}>
            <img
              src="/Images/showblue.png"
              alt="Commercial Showroom 3D Isometric render"
              className={styles.bannerImg}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: KEY FEATURES OF LGSF SHOWROOMS ── */}
      <section
        className={styles.splitSec}
        style={{ padding: "100px 8% 120px 8%" }}
      >
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
                Key Features of <br />
                <span className={styles.accentText}>LGSF Showrooms</span>
              </h2>
              <div className={styles.divider} style={{ width: "140px" }} />
            </div>
            <p
              style={{
                maxWidth: "480px",
                color: "#64748b",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              LGSF showrooms are modern, efficient structures that combine
              speed, flexibility, and smart engineering to deliver
              cost-effective and fast-built commercial display spaces.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {features.map((card, idx) => (
              <div
                key={idx}
                className={
                  card.highlight ? styles.featureCardActive : styles.featureCard
                }
              >
                <div className={styles.iconWrap}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PRECISION ENGINEERING & WHY CHOOSE L&R ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle} style={{ marginBottom: "15px" }}>
            Precision Engineering <br />
            <span className={styles.accentText}>&amp; Why Choose L&amp;R</span>
          </h2>
          <div
            className={styles.divider}
            style={{ width: "120px", marginBottom: "40px" }}
          />

          <div
            className={styles.splitContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "70px",
              alignItems: "start",
            }}
          >
            <div className={styles.imgCol}>
              <div className={styles.multiImgWrap}>
                {/* Main Large Image (Left-aligned) */}
                <div className={styles.mainImgLeft}>
                  <img
                    src="/Images/show6big.jpg"
                    alt="Why Choose L&R LGSF Showrooms"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "14px",
                      display: "block",
                    }}
                  />
                </div>

                {/* Small Floating Image (Right-aligned) */}
                <div className={styles.smallImgRight}>
                  <img
                    src="/Images/show6small.png"
                    alt="Modern showroom commercial glazing"
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

            <div className={styles.textCol} style={{ paddingTop: "0px" }}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "22px",
                }}
              >
                L&amp;R Green Pvt Ltd delivers advanced LGSF showroom solutions
                through a precise and systematic manufacturing process, ensuring
                high-quality results from design to final assembly. Every
                project begins with custom design engineering, followed by
                high-precision steel fabrication, off-site panel preparation,
                strict quality inspections, and efficient on-site dispatch and
                assembly for smooth execution.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                We are chosen for our expert engineering team, fast project
                delivery, and flexible custom design capabilities that meet
                diverse client needs. With high-quality manufacturing standards
                and complete end-to-end project support, we ensure reliable,
                durable, and modern showroom structures built with efficiency
                and excellence.
              </p>
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
              <div className={styles.divider} style={{ width: "100px" }} />
            </div>
            <p
              className={styles.faqDesc}
              style={{ fontSize: "15px", lineHeight: "1.7" }}
            >
              Delivered using heavy-duty steel framing and lightweight
              structures, they can withstand winds and heavy rain while offering
              excellent soundproofing and high temperature resistance.
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

            <div className={styles.faqImgOuter}>
              <img
                src="/Images/show5.png"
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
          backgroundColor: "#black",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Showroom Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized LGSF showroom solutions tailored to your site
            needs.
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

export default LgsfShowroom;
