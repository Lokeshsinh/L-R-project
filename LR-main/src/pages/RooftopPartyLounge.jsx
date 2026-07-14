import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopPartyLounge.module.css";

const RooftopPartyLounge = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a prefabricated rooftop party lounge?",
      a: "It is a modern, modular entertainment space constructed on the roof of an existing building using lightweight steel frames and insulated panels.",
    },
    {
      id: 1,
      q: "Is it safe to construct on an existing building?",
      a: "Yes, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does construction take?",
      a: "Our modular prefabrication system allows us to complete the on-site assembly within a few weeks.",
    },
    {
      id: 3,
      q: "Can the lounge be customized?",
      a: "Yes, you can fully customize the layout, lounge seating, bar counters, lighting, and glass facades.",
    },
    {
      id: 4,
      q: "What are the acoustic benefits of the lounge?",
      a: "Our high-density insulation panels provide excellent soundproofing, minimizing sound transmission to the outside.",
    },
  ];

  const strengthCards = [
    {
      title: "Ambient LED lighting setups",
      desc: "Creates a vibrant and stylish mood with customizable lighting effects for day and night events.",
      img: "/Images/party1.jpg",
    },
    {
      title: "Open seating arrangements",
      desc: "Offers comfortable and flexible seating layouts that enhance social interaction and rooftop views.",
      img: "/Images/party2.jpg",
    },
    {
      title: "Music & sound system",
      desc: "Supports high-quality audio systems to set the perfect vibe for parties and gatherings.",
      img: "/Images/party3.jpg",
    },
    {
      title: "Glass railing & modern",
      desc: "Ensures safety while adding a sleek, contemporary look to the rooftop space.",
      img: "/Images/party4.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/party.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            ROOFTOP PARTY LOUNGE <br />
            ELEVATE YOUR CELEBRATIONS
          </h1>
          <p className={styles.subtitle}>
            Turn unused rooftop space into a stylish party lounge for
            celebrations and gatherings. Our prefabricated rooftop lounges are
            lightweight, safe, and designed for modern comfort and premium urban
            living.
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

      {/* ── SECTION 2: MODERN ROOFTOP PARTY LIVING CONCEPT ──
          Layout (per mockup):
            - Title + divider span full width at top-left
            - Below: [Image LEFT] | [Text RIGHT]
      */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          {/* Title row — full width, top-left */}
          <h2 className={styles.secTitle}>
            Modern Rooftop <br />
            <span className={styles.accentText}>Party Living Concept</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column row below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Image with corner brackets */}
            <div className={styles.imgCol}>
              <div className={styles.imageFrame}>
                <span className={`${styles.corner} ${styles.topLeft}`}></span>
                <span className={`${styles.corner} ${styles.topRight}`}></span>
                <span
                  className={`${styles.corner} ${styles.bottomLeft}`}
                ></span>
                <span
                  className={`${styles.corner} ${styles.bottomRight}`}
                ></span>
                <img
                  src="/Images/partyliving.png"
                  alt="Modern Rooftop Party Living Concept"
                  className={styles.frameImg}
                />
              </div>
            </div>

            {/* RIGHT: Text + button */}
            <div className={styles.textCol}>
              <p>
                Our prefabricated rooftop party lounges are thoughtfully
                designed to introduce a modern lifestyle upgrade to urban
                environments. These spaces transform ordinary rooftops into
                vibrant, functional, and aesthetically appealing lounges
                suitable for a wide range of experiences. From private
                celebrations and intimate family gatherings to stylish weekend
                hangouts and professional commercial lounge setups, every design
                focuses on maximizing comfort, usability, and visual appeal
                while making the best use of available rooftop space.
              </p>
              <p>
                These rooftop lounges redefine the way unused terrace areas are
                utilized by combining smart engineering with contemporary
                design. Built for flexibility and convenience, they allow
                property owners to create a premium social environment without
                the complexities of traditional construction. With quick
                installation and minimal structural changes, your rooftop can be
                converted into a lively destination that enhances both lifestyle
                value and property potential.
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
        </div>
      </section>

      {/* ── SECTION 3: SMART & SAFE ROOFTOP ENGINEERING ──
          Layout (per mockup):
            - Title + divider span full width at top-left
            - Below: [Text + bullets LEFT] | [Image RIGHT]
      */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          {/* Title row — full width, top-left */}
          <h2 className={styles.secTitle}>
            Smart &amp; Safe <br />
            <span className={styles.accentText}>Rooftop Engineering</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column row below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Text + bullet list */}
            <div className={styles.textCol}>
              <p style={{ color: "#64748b" }}>
                Built with advanced prefabrication technology, our rooftop
                lounges ensure durability and safety while maintaining a modern
                aesthetic.
              </p>
              <div className={styles.bulletList}>
                {[
                  "Lightweight steel framework",
                  "PUF insulated panels for comfort",
                  "Weather-resistant roofing system",
                  "Strong load distribution design",
                  "Minimal impact on existing building",
                ].map((item) => (
                  <div className={styles.bulletItem} key={item}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={styles.checkIcon}
                    >
                      <circle cx="12" cy="12" r="10" fill="#233a5e" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#ffffff"
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

            {/* RIGHT: Image with corner brackets */}
            <div className={styles.imgCol}>
              <div className={styles.imageFrame}>
                <span className={`${styles.corner} ${styles.topLeft}`}></span>
                <span className={`${styles.corner} ${styles.topRight}`}></span>
                <span
                  className={`${styles.corner} ${styles.bottomLeft}`}
                ></span>
                <span
                  className={`${styles.corner} ${styles.bottomRight}`}
                ></span>
                <img
                  src="/Images/rooftopparty.jpg"
                  alt="Smart &amp; Safe Rooftop Engineering"
                  className={styles.frameImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: URBAN & COMMERCIAL ROOFTOP LOUNGE DESIGN ──
          Layout (per mockup):
            - Text (title + divider + para) on LEFT
            - Image on RIGHT
      */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R PARTY LOUNGE</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2 className={styles.secTitleLight}>
              Urban &amp; Commercial <br />
              <strong>Rooftop Lounge Design</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              Our prefabricated rooftop party lounges are ideal for residential,
              commercial, and hospitality spaces like apartments, hotels, cafés,
              corporate buildings, event venues, and co-working terraces. Fully
              customizable, they offer options such as themed interiors,
              flexible seating, glass or open designs, bar counters, HVAC
              systems, and lighting setups for a stylish and personalized
              rooftop experience.
            </p>
          </div>
          <div className={styles.bannerImgCol}>
            <img
              src="/Images/loungedesign.png"
              alt="Urban &amp; Commercial Rooftop Lounge Design"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ENGINEERED FOR STRENGTH & SAFETY ──
          Layout (per mockup):
            - Header row: Title (bottom-left) + Description (right)
            - 4-card grid below
      */}
      <section className={styles.strengthSec}>
        <div className={styles.containerMax}>
          <div className={styles.strengthHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Engineered for <br />
                <span className={styles.accentText}>Strength &amp; Safety</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.strengthDesc}>
              Experience a premium rooftop lifestyle with elegant interiors,
              ambient lighting, and open-air comfort designed for unforgettable
              moments.
            </p>
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

      {/* ── SECTION 6: WHY CHOOSE L&R ROOFTOP PARTY LOUNGE ──
          Layout: Text LEFT | Image RIGHT
      */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          {/* Title row — full width, top-left */}
          <h2 className={styles.secTitle}>
            Why Choose L&amp;R Rooftop <br />
            <span className={styles.accentText}>Party Lounge Uses</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column row below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Image with corner brackets */}
            <div className={styles.imgCol}>
              <div className={styles.imageFrame}>
                <span className={`${styles.corner} ${styles.topLeft}`}></span>
                <span className={`${styles.corner} ${styles.topRight}`}></span>
                <span
                  className={`${styles.corner} ${styles.bottomLeft}`}
                ></span>
                <span
                  className={`${styles.corner} ${styles.bottomRight}`}
                ></span>
                <img
                  src="/Images/partyuses.jpg"
                  alt="Why Choose L&amp;R Prefab Rooftop"
                  className={styles.frameImg}
                />
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className={styles.textCol}>
              <p style={{ color: "#475569" }}>
                At L&amp;R Green India Pvt Ltd, we specialize in delivering
                safe, durable, and high-performance rooftop structures using
                advanced steel engineering and prefabrication technology. Our
                focus is on creating reliable solutions that ensure strength,
                efficiency, and long-term value for modern urban living spaces.
              </p>
              <p>
                With a strong commitment to quality and precision, we provide
                complete turnkey solutions from design to execution. Our expert
                team ensures fast project delivery, safe installation over
                existing buildings, and the use of high-quality materials and
                insulation systems for superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span className={styles.accentText}>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
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
                  className={`${styles.faqItem} ${
                    openFaq === faq.id ? styles.faqItemActive : ""
                  }`}
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
                src="/Images/feqparty.jpg"
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Party Lounge Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop party lounge solutions tailored to your
            site needs.
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

export default RooftopPartyLounge;
