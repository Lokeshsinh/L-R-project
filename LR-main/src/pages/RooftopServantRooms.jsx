import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopServantRooms.module.css";

const RooftopServantRooms = () => {
  const [openFaq, setOpenFaq] = useState(1); // Second item open by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a rooftop servant room?",
      a: "It is a highly durable, lightweight room built on the roof of an existing building to house domestic help or security staff.",
    },
    {
      id: 1,
      q: "Is a rooftop servant room safe for my building structure?",
      a: "Yes, these rooms are designed using lightweight steel and engineered materials, ensuring minimal load impact on the existing building after proper structural assessment.",
    },
    {
      id: 2,
      q: "How long does it take to install a rooftop servant room?",
      a: "The off-site prefabrication and on-site assembly can be completed in just 2 to 3 weeks.",
    },
    {
      id: 3,
      q: "What facilities are included in a rooftop servant room?",
      a: "All our servant room layouts can be configured with compact bedrooms, ventilation openings, and attached modern washrooms and toilets.",
    },
    {
      id: 4,
      q: "Can the design of servant rooms be customized?",
      a: "Yes, the design, dimensions, interior partitions, and finishes can be customized to match your building space and requirements.",
    },
  ];

  const strengthCards = [
    {
      title: "Compact Bedroom Space",
      desc: "A neatly designed sleeping area that ensures comfort and privacy within a space-efficient layout suitable for essential living needs.",
      img: "/Images/serv1.png",
    },
    {
      title: "Bathroom Facility",
      desc: "Clean and functional bathroom options provided either as attached or common use, ensuring hygiene and convenience.",
      img: "/Images/serv2.jpg",
    },
    {
      title: "Proper Ventilation System",
      desc: "Well-planned airflow design with windows and openings to maintain fresh air circulation and a healthy indoor environment.",
      img: "/Images/serv3.jpg",
    },
    {
      title: "Heat Insulated Interior",
      desc: "Advanced insulation panels help maintain comfortable indoor temperatures by reducing heat and improving energy efficiency.",
      img: "/Images/serv4.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION (Image 1) ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: `url("/Images/servantroomm.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            MODERN ROOFTOP <br />
            SERVANT ROOMS
          </h1>
          <p className={styles.subtitle}>
            L&amp;R Green India Pvt Ltd designs and installs lightweight rooftop
            servant rooms that transform unused terrace space into fully
            functional living units with privacy, comfort, and durability.
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

      {/* ── SECTION 2: SMART LIVING SPACE FOR DOMESTIC STAFF ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle}>
            Smart Living Space <br />
            <span className={styles.accentText}>for Domestic Staff</span>
          </h2>
          <div className={styles.divider} />

          <div className={styles.twoColRow}>
            {/* LEFT: Content (Text & copy) */}
            <div className={styles.textCol}>
              <p className={styles.highlightPara}>
                Rooftop servant rooms are modern compact housing units designed
                to be built on top of existing buildings, making efficient use
                of unused terrace space. They offer safe, comfortable, and
                private accommodation for domestic staff while maintaining
                functionality and convenience in urban living environments.
                These units are designed to maximize space utility while
                ensuring everyday comfort and privacy.
              </p>

              <p className={styles.normalPara}>
                L&amp;R Green India Pvt Ltd provides expertly engineered
                solutions that require minimal structural modifications to the
                existing building. These rooftop units are designed for
                durability, long-term performance, and efficient space
                utilization, ensuring a practical and reliable living solution
                for staff accommodation. They are built with precision to ensure
                safety, strength, and long-lasting usability in all conditions.
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

            {/* RIGHT: Image with background decor box */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/servantroom1.jpg"
                  alt="Smart Living Space for Domestic Staff"
                  className={styles.decorImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT'S INSIDE A ROOFTOP SERVANT ROOM ── */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.secTitle}>
                What's Inside a <br />
                <span className={styles.accentText}>Rooftop Servant Room</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <div className={styles.headerRight}>
              <p className={styles.sectionDescText}>
                A rooftop servant room is thoughtfully designed to provide all
                essential living comforts within a compact and efficient layout.
                It ensures a balance of privacy, functionality, and modern
                comfort for domestic staff.
              </p>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {strengthCards.map((card, idx) => (
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

      {/* ── SECTION 4: FULLY CUSTOMIZABLE ROOFTOP SERVANT ROOM SOLUTIONS ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R SERVANT</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Fully Customizable Rooftop <br />
              <strong>Servant Room Solutions</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              Our rooftop servant room solutions are fully customizable and
              designed to adapt to various building layouts, space conditions,
              and comfort requirements, providing safe, functional, and modern
              living spaces for domestic staff while efficiently utilizing
              available rooftop areas; these designs combine smart planning,
              durable materials, and flexible configurations to ensure maximum
              comfort, usability, and long-term performance in urban
              environments, delivering a practical and reliable rooftop living
              solution.
            </p>
          </div>
          <div className={styles.bannerImgCol}>
            <img
              src="/Images/servant5.png"
              alt="3D Isometric Layout Render"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ROOFTOP SERVANT ROOMS ── */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle}>
            Rooftop <br />
            <span className={styles.accentText}>Servant Rooms</span>
          </h2>
          <div className={styles.divider} />

          <div className={styles.twoColRow}>
            {/* LEFT: Image with background decor box */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/servant7.png"
                  alt="Rooftop Servant Room Features"
                  className={styles.decorImage}
                />
              </div>
            </div>

            {/* RIGHT: Text & Bullets */}
            <div className={styles.textCol}>
              <p className={styles.normalPara}>
                Our rooftop servant rooms are compact and comfortable units for
                staff accommodation, ensuring privacy and proper living while
                efficiently using rooftop space.
              </p>

              <div className={styles.bulletListGrid}>
                {[
                  "Compact bedroom layout",
                  "Ventilation & natural lighting",
                  "Basic interior finishing",
                  "Attached toilet & bathroom option",
                  "Thermal insulated panels",
                  "Optional kitchenette space",
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
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP GUEST ROOM STRUCTURES? ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.containerMax}>
          <h2 className={styles.secTitle}>
            Why Choose Rooftop <br />
            <span className={styles.accentText}>Guest Room Structures?</span>
          </h2>
          <div className={styles.divider} />

          <div className={styles.twoColRow}>
            {/* LEFT: Text content */}
            <div className={styles.textCol}>
              <p
                className={styles.normalPara}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "#475569",
                  marginBottom: "24px",
                }}
              >
                L&amp;R Green India Pvt Ltd is a trusted name in rooftop
                construction, delivering safe, durable, and cost-effective
                servant room solutions designed for modern urban needs. With an
                expert engineering team, high-quality prefabrication materials,
                fast execution, safe rooftop installation practices, and
                end-to-end project management, we ensure every project is
                completed with precision, reliability, and long-lasting
                performance.
              </p>
              <p
                className={styles.normalPara}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                Rooftop servant rooms are designed to provide practical and
                private living spaces for domestic staff, making efficient use
                of unused terrace areas in apartments, villas, and commercial
                buildings. They are ideal for private staff accommodation,
                housekeeping and domestic worker housing, cook or helper living
                space, security guard rooms on terraces, maintenance staff
                accommodation, and staff rooms in residential and institutional
                properties.
              </p>
            </div>

            {/* RIGHT: Image with background decor box */}
            <div className={styles.imgCol}>
              <div className={styles.imageDecorWrap}>
                <div className={styles.decorBox} />
                <img
                  src="/Images/servant8.jpg"
                  alt="Why Choose Rooftop Guest Room Structures"
                  className={styles.decorImage}
                />
              </div>
            </div>
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
                <span className={styles.accentText}>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Prefabricated rooftop servant rooms are compact, safe living units
              built on existing buildings for domestic staff. Below are common
              FAQs about their features and benefits.
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
                src="/Images/catservant.jpg"
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/Images/catservant.jpg")`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Servant Room Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated Prefab Servant Room solutions tailored to
            your site needs.
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

export default RooftopServantRooms;
