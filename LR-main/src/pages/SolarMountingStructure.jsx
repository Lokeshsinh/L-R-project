import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarMountingStructure.module.css";

const SolarMountingStructure = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const components = [
    {
      title: "Rails & Frames",
      desc: "Provide the main structural base for secure panel alignment and stable system support.",
      img: "/Images/mountype1.jpg",
    },
    {
      title: "Electrical System Design",
      desc: "Hold solar panels firmly in place while maintaining proper spacing and positioning.",
      img: "/Images/mounttype2.jpg",
    },
    {
      title: "Fasteners & Screws",
      desc: "Ensure strong, tight connections between all mounting parts for long-lasting stability.",
      img: "/Images/mounttype3.jpg",
    },
    {
      title: "Heavy-Duty Mounts",
      desc: "Deliver strong anchoring support for durable and reliable solar structure performance.",
      img: "/Images/mounttype4.jpg",
    },
  ];

  const typesList = [
    "Rooftop Mounting Systems",
    "Ground Mounting Systems",
    "Pole Mount Structures",
    "Solar Tracking Systems",
    "Floating Solar Structures",
  ];

  const faqs = [
    {
      id: 0,
      q: "What is a solar module mounting structure?",
      a: "A solar module mounting structure is the engineered framework that holds solar panels securely at the optimum tilt angle and height to maximize energy generation.",
    },
    {
      id: 1,
      q: "Why are mounting structures important in solar systems?",
      a: "They provide strength, safety, and correct tilt angle, which helps improve solar panel performance and system lifespan.",
    },
    {
      id: 2,
      q: "What materials are used in mounting structures?",
      a: "We use hot-dip galvanized steel, anodized aluminum, and stainless steel fasteners to ensure 25+ years of corrosion-free performance.",
    },
    {
      id: 3,
      q: "Can mounting structures withstand harsh weather?",
      a: "Yes, our structures are custom-designed to withstand extreme wind speeds up to 170 km/h, heavy snow loads, and seismic activities based on site locations.",
    },
    {
      id: 4,
      q: "Which type of mounting structure should I choose?",
      a: "It depends on your installation space. We offer rooftop mounting systems for space-efficiency, ground-mounted systems for large open areas, and carport or floating structures for specialized needs.",
    },
  ];

  // Renders a real image or a styled placeholder
  const Placeholder = ({ height = 340 }) => (
    <div className={styles.imagePlaceholder} style={{ height }}>
      <div className={styles.placeholderOverlay}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span>Image Area</span>
      </div>
    </div>
  );

  const Img = ({ url, alt, height = 340 }) =>
    url ? (
      <img
        src={url}
        alt={alt}
        className={styles.decorImage}
        style={{ height }}
      />
    ) : (
      <Placeholder height={height} />
    );

  const CardImg = ({ url, alt }) =>
    url ? (
      <img src={url} alt={alt} className={styles.cardImage} />
    ) : (
      <div className={styles.cardPlaceholder}>
        <div className={styles.cardPlaceholderOverlay}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ════ SECTION 1 · HERO ════ */}
      <section
        className={styles.heroSec}
        style={{ backgroundImage: `url("/Images/mounting1.jpg")` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            SOLAR MODULE <br />
            <span>MOUNTING STRUCTURE</span>
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Green Pvt Ltd delivers advanced mounting solutions designed
            for maximum efficiency, safety, and long-term performance.
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

      {/* ════ SECTION 2 · WHAT IS A SOLAR MODULE MOUNTING STRUCTURE ════ */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT · heading on top, image below */}
          <div>
            <h2 className={styles.secTitle}>
              What is a Solar Module <br />
              <span className={styles.accentText}>Mounting Structure</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgDecorWrap}>
              <div className={styles.verticalBar} />
              <Img
                url="/Images/mountingstructure.jpg"
                alt="Solar Module Mounting Structure"
                height={340}
              />
            </div>
          </div>

          {/* RIGHT · paragraphs + button */}
          <div className={styles.textCol}>
            <p className={styles.highlightPara} style={{ marginTop: "10px" }}>
              A solar mounting structure is the essential support framework that
              holds solar panels securely in place. It ensures proper tilt,
              alignment, and stability so the panels can receive maximum
              sunlight and generate efficient energy output. This structure also
              protects the system from wind, weather, and other external
              conditions, making the entire solar installation safe and
              long-lasting.
            </p>
            <p className={styles.normalPara}>
              At L&amp;R Green Pvt Ltd, we design strong and reliable solar
              mounting structures for all types of installations including
              rooftop, ground, and large-scale solar projects. Our solutions are
              built with high-quality materials and smart engineering to ensure
              durability, safety, and maximum performance in every project.
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

      {/* ════ SECTION 3 · PRECISION ENGINEERED COMPONENTS ════ */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          {/* Header row: title left, desc right */}
          <div className={styles.sectionHeaderRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.secTitle}>
                Precision Engineered <br />
                <span className={styles.accentText}>
                  Solar Mounting Components
                </span>
              </h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.headerRight}>
              <p className={styles.sectionDescText}>
                At L&amp;R Green Pvt Ltd, we provide high-quality solar mounting
                components designed for strength, accuracy, and long-term
                reliability in all installation conditions.
              </p>
            </div>
          </div>

          {/* 4 cards */}
          <div className={styles.cardGrid}>
            {components.map((card, idx) => (
              <div key={idx} className={styles.strengthCard}>
                <div className={styles.cardImageWrap}>
                  <CardImg url={card.img} alt={card.title} />
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

      {/* ════ SECTION 4 · BENEFITS & MATERIALS (dark navy banner) ════ */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>
          L &amp; R MODULE MOUNTING STRUCTURE
        </div>
        <div className={styles.blueBannerInner}>
          <div className={styles.blueBannerText}>
            <h2>
              Benefits &amp; Materials of <br />
              <strong>Solar Mounting Structures</strong>
            </h2>
            <div
              className={styles.dividerWhite}
              style={{ margin: "15px 0 25px 0" }}
            />
            <p>
              Solar mounting structures are designed for long-lasting
              reliability, maximum energy output, and safe installation across
              all solar projects. At L&amp;R Green Pvt Ltd, every system is
              custom-designed for efficiency and durability using premium
              materials like lightweight, corrosion-resistant aluminum for
              rooftops and high-strength galvanized steel for large-scale
              installations, ensuring a perfect balance of strength, safety, and
              long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 · TYPES OF SOLAR MODULE MOUNTING SYSTEMS ════ */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT · text + bullet list */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Types of Solar Module <br />
              <span className={styles.accentText}>Mounting Systems</span>
            </h2>
            <div className={styles.divider} />
            <p className={styles.normalPara} style={{ marginTop: "30px" }}>
              Solar module mounting structures provide strong support,
              stability, and proper alignment for maximum solar efficiency. At
              L&amp;R Green Pvt Ltd, we offer durable solutions for all types of
              solar projects.
            </p>
            <div className={styles.bulletListSingle}>
              {typesList.map((item, i) => (
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

          {/* RIGHT · image with vertical bar */}
          <div className={styles.imgDecorWrap}>
            <div className={styles.verticalBar} />
            <Img
              url="/Images/typesmounting.jpg"
              alt="Types of Mounting Systems"
              height={380}
            />
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 · WHY CHOOSE SOLAR EPC SERVICES ════ */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          {/* LEFT · heading on top, image below */}
          <div>
            <h2 className={styles.secTitle}>
              Why Choose Solar <br />
              <span className={styles.accentText}>EPC Services</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgDecorWrap}>
              <div className={styles.verticalBar} />
              <Img
                url="/Images/epc.jpg"
                alt="Why Choose Solar EPC Services"
                height={340}
              />
            </div>
          </div>

          {/* RIGHT · paragraphs */}
          <div className={styles.textCol}>
            <p
              className={styles.highlightPara}
              style={{ marginTop: "10px", fontWeight: "400" }}
            >
              Solar module mounting structures are essential for ensuring the
              safety, stability, and efficiency of any solar power system. They
              provide a strong foundation that keeps panels securely fixed and
              properly aligned for maximum energy generation. At L&amp;R Green
              Pvt Ltd, we design advanced mounting systems that enhance
              performance, durability, and long-term reliability while ensuring
              proper tilt and orientation for maximum sunlight capture
              throughout the day.
            </p>
            <p className={styles.normalPara}>
              These structures are built to withstand harsh weather conditions
              like strong winds, heavy rain, and extreme heat, ensuring
              uninterrupted performance for years. Made using high-quality
              materials such as aluminum and galvanized steel, they offer
              excellent corrosion resistance and low maintenance requirements.
              Choosing the right mounting structure ensures better energy
              output, longer system life, and safe installation for residential,
              commercial, and industrial solar projects.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 7 · FAQ ════ */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqContent}>
            {/* LEFT · tag + heading + divider + accordion */}
            <div>
              <span className={styles.faqTag}>• FAQS</span>
              <h2 className={styles.secTitle} style={{ marginTop: "10px" }}>
                Frequently Asked <br />
                <span className={styles.accentText}>Questions</span>
              </h2>
              <div className={styles.divider} />

              <div className={styles.faqList} style={{ marginTop: "40px" }}>
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                  >
                    <div
                      className={styles.faqHeader}
                      onClick={() =>
                        setOpenFaq(faq.id === openFaq ? -1 : faq.id)
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
            </div>

            {/* RIGHT · description + image */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  color: "#64748b",
                }}
              >
                Solar module mounting structures ensure strong support, safety,
                and efficient solar energy generation. At L&amp;R Green Pvt Ltd,
                we provide durable and weather-resistant mounting solutions for
                all installations.
              </p>
              <div className={styles.faqImgOuter}>
                <img
                  src="/Images/freqmount.jpg"
                  alt="FAQ"
                  className={styles.faqImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 8 · CTA BANNER ════ */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("/Images/mountcat.jpg")',
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Module mounting structure?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated Solar Module mounting structure solutions
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

export default SolarMountingStructure;
