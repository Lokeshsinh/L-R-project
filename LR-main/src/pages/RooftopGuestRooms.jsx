import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopGuestRooms.module.css";

const RooftopGuestRooms = () => {
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What is a rooftop guest room?",
      a: "It is a luxury, pre-engineered room constructed on your existing rooftop using lightweight steel framing and high-quality insulation panels.",
    },
    {
      id: 1,
      q: "Will building a rooftop room damage my house structure?",
      a: "No, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does the installation take?",
      a: "A standard rooftop guest room can be fully assembled and finished on-site in a few weeks.",
    },
    {
      id: 3,
      q: "Are rooftop guest rooms heat resistant?",
      a: "Yes, we use advanced PUF/EPS insulated panels for the walls and ceiling, providing excellent thermal insulation all year round.",
    },
    {
      id: 4,
      q: "Can I add an attached bathroom to the room?",
      a: "Yes, our designs support fully customized layouts, including premium attached bathrooms and pantry sections.",
    },
  ];

  const strengthCards = [
    {
      title: "Interior View",
      desc: "Clean and cozy setup with bed, lighting, and minimal furniture, designed for maximum comfort and efficient space use",
      img: "/Images/guesttype1.jpg",
    },
    {
      title: "Exterior Rooftop View",
      desc: "Modern prefab structure placed on the terrace, showcasing a lightweight build with a sleek and stylish appearance.",
      img: "/Images/guesttype2.jpg",
    },
    {
      title: "Natural Light & Windows",
      desc: "Large windows or glass panels allow ample sunlight, creating a bright, open, and refreshing indoor environment.",
      img: "/Images/guesttype3.jpg",
    },
    {
      title: "Balcony / Terrace",
      desc: "Compact outdoor space with seating, offering a relaxing and premium rooftop living experience.",
      img: "/Images/guesttype4.jpg",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage: "url('/Images/guest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            ROOFTOP GUEST <br />
            ROOMS
          </h1>
          <p className={styles.subtitle}>
            Transform unused rooftops into fully functional living, working, or
            hospitality spaces using lightweight, durable prefabricated
            structures designed for safety, speed, and style.
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

      {/* ── SECTION 2: ROOF TOP GUEST ROOM ──
          Layout: Title top-left → Text LEFT | Double-image RIGHT
      */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          {/* Title — full width top */}
          <h2 className={styles.secTitle}>
            Roof Top <br />
            <span className={styles.accentText}>Guest Room</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Text */}
            <div className={styles.textCol}>
              <p style={{ fontWeight: "600", color: "#334155" }}>
                L&amp;R Enterprises offers innovative rooftop structures
                designed to transform unused terrace spaces into fully
                functional residential and commercial units. These lightweight
                and durable structures are engineered using advanced steel
                framing and insulated panel systems, ensuring safety, stability,
                and long-lasting performance. Ideal for urban environments where
                space is limited, our rooftop solutions provide a smart way to
                expand vertically without the need for large-scale construction
                or land acquisition.
              </p>
              <p>
                Our rooftop systems are suitable for guest rooms, office
                extensions, studio spaces, and other functional setups. Designed
                for quick installation with minimal disruption, they combine
                modern aesthetics with practical engineering. Each structure is
                customizable to meet specific requirements, making it an
                efficient and cost-effective solution for both residential and
                commercial property development.
              </p>
              <button className={styles.btnPill} style={{ marginTop: "10px" }}>
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

            {/* RIGHT: Overlapping double image */}
            <div className={styles.imgCol}>
              <div className={styles.multiImgWrap}>
                <div className={styles.mainImg}>
                  <img
                    src="/Images/guest1.jpg"
                    alt="Modern Rooftop Guest Room Design"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "14px",
                      display: "block",
                    }}
                  />
                </div>
                <div className={styles.smallImg}>
                  <img
                    src="Images/guest1small.jpg"
                    alt="Luxury Penthouse Guest Room"
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
        </div>
      </section>

      {/* ── SECTION 3: MAXIMIZE YOUR ROOFTOP SPACE ──
          Layout: Title top-left → Double-image LEFT | Bullets RIGHT
      */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          {/* Title — full width top */}
          <h2 className={styles.secTitle}>
            Maximize Your <br />
            <span className={styles.accentText}>Rooftop Space</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Double overlapping images */}
            <div className={styles.imgCol}>
              <div className={styles.multiImgWrap}>
                <div className={styles.mainImg}>
                  <img
                    src="/Images/guest2big.png"
                    alt="Maximize Your Rooftop Space"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "14px",
                      display: "block",
                    }}
                  />
                </div>
                <div className={styles.smallImg}>
                  <img
                    src="/Images/guest2small.jpg"
                    alt="Modular Guest Room Deck"
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

            {/* RIGHT: Text + bullet list */}
            <div className={styles.textCol}>
              <p style={{ color: "#64748b" }}>
                As cities become denser, rooftops offer valuable unused space.
                L&amp;R Enterprises converts these areas into functional rooms
                without disturbing existing building operations.
              </p>
              <div className={styles.bulletList}>
                {[
                  "Rooftop Guest Rooms",
                  "Additional Residential Units",
                  "Office Extensions",
                  "Studio Apartments",
                  "Rooftop Cafeterias",
                  "Lounge Areas",
                ].map((item) => (
                  <div className={styles.bulletItem} key={item}>
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

      {/* ── SECTION 4: ENGINEERED FOR STRENGTH & SAFETY ──
          Layout: Title left + desc right → 4-card grid
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
              Every rooftop structure is designed with precision engineering to
              ensure safety, durability, and minimal load impact on existing
              buildings.
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

      {/* ── SECTION 5: SUSTAINABLE DESIGN & CUSTOMIZATION (Blue Banner) ──
          Layout: Text LEFT | Image RIGHT with watermark
      */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>L&amp;R GUEST</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2 className={styles.secTitleLight}>
              Sustainable Design <br />
              <strong>&amp; Customization</strong>
            </h2>
            <div className={styles.dividerWhite} />
            <p>
              L&amp;R Green India Pvt Ltd provides fully customizable rooftop
              structures designed to suit various functional and architectural
              requirements, allowing flexible layouts, modern design options,
              and complete service integration. These rooftop solutions are
              ideal for residential, commercial, and institutional use, offering
              efficient space expansion for apartments, offices, schools,
              hotels, co-working spaces, and industrial campuses with a focus on
              speed, durability, and structural safety.
            </p>
          </div>
          <div className={styles.bannerImgCol}>
            <img
              src="/Images/guestcustom.png"
              alt="Sustainable Design & Customization"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE ROOFTOP GUEST ROOM STRUCTURES? ──
          Layout: Title top-left → Text LEFT | Double-image RIGHT
      */}
      <section className={styles.splitSec} style={{ background: "#ffffff" }}>
        <div className={styles.containerMax}>
          {/* Title — full width top */}
          <h2 className={styles.secTitle}>
            Why Choose Rooftop <br />
            <span className={styles.accentText}>Guest Room Structures?</span>
          </h2>
          <div className={styles.divider} />

          {/* Two-column below title */}
          <div className={styles.twoColRow}>
            {/* LEFT: Text */}
            <div className={styles.textCol}>
              <p style={{ color: "#475569" }}>
                Prefabricated guest rooms are a quick, cost-effective way to
                expand space with minimal load on existing buildings. They are
                energy-efficient, flexible, modern in design, and cause very
                minimal disruption to your daily life during installation.
              </p>
              <p>
                With a strong commitment to quality and precision, we provide
                complete turnkey solutions from design to execution. Our expert
                team ensures fast project delivery, safe installation over
                existing buildings, and the use of high-quality materials and
                insulation systems for superior results.
              </p>
            </div>

            {/* RIGHT: Double overlapping images */}
            <div className={styles.imgCol}>
              <div className={styles.multiImgWrap}>
                <div className={styles.mainImg}>
                  <img
                    src="/Images/gueststrbig.png"
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
                <div className={styles.smallImg}>
                  <img
                    src="/Images/gueststrsmall.jpg"
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
        </div>
      </section>

      {/* ── SECTION 7: FAQ ──
          Layout: Title left + desc right → FAQ list LEFT | Image RIGHT
      */}
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
            {/* LEFT: FAQ list */}
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

            {/* RIGHT: Image */}
            <div className={styles.faqImgOuter}>
              <img
                src="/Images/feqguest.jpg"
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
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Images/catguest.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Guest Rooms Solutions?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized rooftop guest room solutions tailored to your site
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

export default RooftopGuestRooms;
