import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfLuxuryLounges.module.css";

// const BLANK =
//   "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const LgsfLuxuryLounges = () => {
  const [openFaq, setOpenFaq] = useState(1); // Second item open by default (Index 1)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF Luxury Lounge?",
      a: "An LGSF Luxury Lounge is a high-end modular structure built using lightweight steel framing technology, enabling sophisticated architectural designs with faster construction than traditional methods.",
    },
    {
      id: 1,
      q: "How long does it take to construct an LGSF lounge?",
      a: "Most LGSF luxury lounges can be completed within 3–4 weeks, depending on size, design complexity, and site conditions.",
    },
    {
      id: 2,
      q: "Is LGSF construction durable and safe?",
      a: "Yes, our light-gauge steel frames are engineered to withstand extreme winds, seismic forces, and adverse weather conditions, ensuring long-term safety and structural durability.",
    },
    {
      id: 3,
      q: "Can the design be customized?",
      a: "Absolutely. We offer complete architectural flexibility, allowing you to customize layout plans, finishes, cladding materials, and lighting to match your aesthetic requirements.",
    },
    {
      id: 4,
      q: "Where can LGSF luxury lounges be used?",
      a: "They are perfect for VIP meeting rooms, airport lounges, exclusive hotel recreation zones, executive cabins, private villas, and high-end residential rooftop additions.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: `url("/Images/lux1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            LGSF LUXURY <br />
            LOUNGES
          </h1>
          <p className={styles.subtitle}>
            Experience modern luxury with L&amp;R Green Pvt Ltd’s LGSF prefab
            lounges offering elegant design, fast construction, and lasting
            durability for residential and commercial spaces.
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

      {/* ── SECTION 2: INTRODUCTION TO LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          {/* LEFT: Content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Introduction to LGSF <br />
              <span>Luxury Lounges</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              An LGSF Luxury Lounge is a high-end modular structure built using
              lightweight steel framing technology, enabling sophisticated
              architectural designs with faster construction than traditional
              methods. It ensures superior quality, strength, and long-term
              durability. This makes it a smart choice for modern construction
              needs.
            </p>
            <p>
              These lounges are ideal for premium environments where aesthetics,
              speed, and performance matter most. They offer a perfect blend of
              modern design, efficient construction, and reliable solutions for
              residential and commercial spaces. Their versatility makes them
              suitable for a wide range of luxury applications.
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

          {/* RIGHT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/lux2.jpg"
                alt="LGSF Luxury Lounge"
                className={styles.decorImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHERE YOU CAN USE LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.splitContainer}>
          {/* LEFT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/lux2.jpg"
                alt="Where you can use LGSF Luxury Lounges"
                className={styles.decorImage}
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Where You Can Use <br />
              <span>LGSF Luxury Lounges</span>
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
                "VIP Meeting Areas",
                "Airport Lounges",
                "Exclusive Event Spaces",
                "Premium Residential Extensions",
                "Resorts & Retreats",
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
      </section>

      {/* ── SECTION 4: BUILD THE FUTURE OF LUXURY SPACES ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R PREFAB RESIDENTIAL</div>
        <div className={styles.blueBannerContainer}>
          {/* LEFT: Text */}
          <div className={styles.blueBannerText}>
            <h2>
              Build the Future <br />
              <strong>of Luxury Spaces</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p style={{ marginTop: "30px" }}>
              From concept to completion, L&amp;R Green Pvt Ltd delivers premium
              prefabricated lounge solutions that redefine comfort, durability,
              and modern architecture. We focus on innovative engineering and
              precision craftsmanship to ensure every structure meets global
              quality standards, combining speed, sustainability, and
              long-lasting performance for modern infrastructure needs.
            </p>
          </div>
          {/* RIGHT: Image */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/Images/lux4.png"
              alt="Luxury LGSF 3D Render"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LUXURY MEETS ENGINEERING ── */}
      <section
        className={styles.splitSec}
        style={{ padding: "100px 8% 120px 8%" }}
      >
        <div className={styles.containerMax}>
          <div className={styles.sectionHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Luxury Meets <br />
                <span>Engineering</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.sectionDescText}>
              At L&amp;R Green Pvt Ltd, we combine advanced engineering with
              premium architectural design to create luxury lounge spaces that
              deliver comfort, performance, and long-lasting value.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {/* Card 1 */}
            <div className={styles.strengthCard}>
              <div className={styles.cardImageWrap}>
                <img
                  className={styles.cardImage}
                  src="/Images/luxtype1.jpg"
                  alt="High-performance insulation"
                />
              </div>
              <div className={styles.cardContent}>
                <h3>High-performance insulation</h3>
                <p>
                  Ensures excellent thermal control and energy efficiency,
                  maintaining a comfortable indoor environment in all
                  conditions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.strengthCard}>
              <div className={styles.cardImageWrap}>
                <img
                  className={styles.cardImage}
                  src="/Images/luxtype2.jpg"
                  alt="Elegant Interior Finishes"
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Elegant Interior Finishes</h3>
                <p>
                  Premium-quality interior designs that enhance aesthetics and
                  deliver a luxurious look and feel.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.strengthCard}>
              <div className={styles.cardImageWrap}>
                <img
                  className={styles.cardImage}
                  src="/Images/luxtype3.jpg"
                  alt="Acoustic &amp; Thermal Comfort"
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Acoustic &amp; Thermal Comfort</h3>
                <p>
                  Provides superior sound insulation and temperature regulation
                  for a calm and comfortable space experience.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.strengthCard}>
              <div className={styles.cardImageWrap}>
                <img
                  className={styles.cardImage}
                  src="/Images/luxtype4.jpg"
                  alt="Strong &amp; Lightweight Steel Structure"
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Strong &amp; Lightweight Steel Structure</h3>
                <p>
                  Built using advanced LGSF technology, offering high strength,
                  safety, and long-lasting durability with reduced weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE LGSF LUXURY LOUNGES ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          {/* LEFT: Content */}
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose LGSF <br />
              <span>Luxury Lounges</span>
            </h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>
              At L&amp;R Green Pvt Ltd, we specialize in delivering
              next-generation LGSF luxury lounge solutions that combine
              precision engineering with modern architectural design. Our
              approach focuses on creating innovative, durable, and visually
              refined structures that meet the evolving demands of premium
              infrastructure.
            </p>
            <p>
              We ensure high-quality steel framing systems, fast and efficient
              project execution, fully customized architectural designs, and
              sustainable construction practices. With complete end-to-end
              project management, we handle every stage seamlessly to deliver
              reliable, future-ready luxury lounge solutions.
            </p>
          </div>

          {/* RIGHT: Image with decoration box on left */}
          <div className={styles.imgCol}>
            <div className={styles.imageDecorWrap}>
              <div className={styles.decorBox} />
              <img
                src="/Images/luxtype5.jpg"
                alt="Why Choose L&R LGSF"
                className={styles.decorImage}
              />
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
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Find quick answers to common questions about LGSF luxury lounges
              and L&amp;R Green Pvt Ltd's prefabricated construction solutions.
            </p>
          </div>
          <div className={styles.faqContent}>
            {/* LEFT: Rounded image */}
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/frelux.jpg"
                alt="Frequently Asked Questions"
                className={styles.faqImg}
              />
            </div>

            {/* RIGHT: FAQ list */}
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/Images/frelux.jpg")`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Luxury Lounges?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated LGSF Luxury Lounges solutions tailored to
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

export default LgsfLuxuryLounges;
