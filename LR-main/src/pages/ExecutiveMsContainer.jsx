import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ExecutiveMsContainer.module.css";

const ExecutiveMsContainer = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const containerSizes = [
    {
      size: "40×10×8.5 / 40×8×8.5",
      features: [
        "Tent Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dining Hall Containers",
        "Battery Storage Containers",
        "Gym Hall Containers",
        "Cafe Containers Hall Compbex",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well- Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Relay Flat Area Containers",
        "Toilet block Containers",
        "Multi Store Block Containers",
        "Copy Room  Containers",
        "General Residential Containers",
      ],
      highlight: false,
    },
    {
      size: "20×10×8.5 / 20×8×8.5",
      features: [
        "Tent Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dining Hall Containers",
        "Battery Storage Containers",
        "Gym Hall Containers",
        "Cafe Containers Hall Compbex",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well- Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Relay Flat Area Containers",
        "Toilet block Containers",
        "Multi Store Block Containers",
        "Copy Room  Containers",
        "General Residential Containers",
      ],
      highlight: true,
    },
    {
      size: "10×10×8",
      features: [
        "Tent Staff offices Containers",
        "Engineer's Accommodation Containers",
        "Worker Accommodation Containers",
        "Dining Hall Containers",
        "Battery Storage Containers",
        "Gym Hall Containers",
        "Cafe Containers Hall Compbex",
        "Store Hall Containers",
        "cement store Containers",
        "Tube well- Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Relay Flat Area Containers",
        "Toilet block Containers",
        "Multi Store Block Containers",
        "Copy Room  Containers",
        "General Residential Containers",
      ],
      highlight: false,
    },
  ];

  const products = [
    {
      title: "Staff Office Containers",
      description: "",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Worker Accommodation Container",
      description:
        "Comfortable and practical housing unit designed for workers and site teams with efficient space utilization.",
      img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Site Office / Storage Container",
      description: "",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Guard Cabin / Toilet Unit",
      description: "",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is an Executive MS Container?",
      a: "An Executive MS Container is a premium modular structure made from mild steel, designed to serve as offices, accommodation, storage, or any functional space on construction and industrial sites.",
    },
    {
      id: 1,
      q: "What are Executive MS Containers used for?",
      a: "They are used for staff offices, worker accommodation, guard cabins, dining spaces, storage units, washrooms, and site utility rooms.",
    },
    {
      id: 2,
      q: "Are Executive MS Containers durable?",
      a: "Yes, Executive MS Containers are built with high-grade mild steel and industrial coatings to withstand harsh weather, heavy use, and demanding site conditions for years.",
    },
    {
      id: 3,
      q: "Can Executive MS Containers be customized?",
      a: "Absolutely. Layouts, partitions, electrical fittings, HVAC, insulation, and finishes can all be tailored to match your project's specific requirements.",
    },
    {
      id: 4,
      q: "Where are Executive MS Containers commonly used?",
      a: "They are widely used on construction sites, industrial plants, mining operations, remote project locations, and anywhere a durable, rapidly deployable modular space is needed.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            EXECUTIVE MS <br />
            <span>CONTAINERS</span>
          </h1>
          <p className={styles.heroDesc}>
            Strong and durable Executive MS Containers designed for offices,
            accommodation, storage, and all site-based modular space needs.
          </p>
          <button className={styles.btnHero}>
            Contact us &nbsp;<span>→</span>
          </button>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.introVisuals}>
            <div
              className={styles.imgMain}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div
              className={styles.imgSub}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80')",
              }}
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.secTitle}>
              Executive <span>Ms Container</span>
            </h2>
            <p>
              L&R Green India Pvt Ltd&amp;R Containers are durable modular
              structures made using mild steel (MS), designed to deliver strong,
              reliable, and ready-to-use spaces. They are built for quick
              installation, easy relocation, and long service life, making them
              suitable for both temporary and permanent site requirements.
            </p>
            <p>
              These containers are widely used as executive cabins, staff
              accommodation units, offices, dining halls, washrooms, storerooms,
              storage spaces, and other functional setups. With a strong steel
              frame, insulation, electrical fittings, and proper ventilation,
              they ensure comfort, safety, and efficiency, making them ideal for
              construction sites, industries, and remote project locations.
            </p>
            <button className={styles.btnSecondary}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.sizesTopRow}>
            <div className={styles.sizesLeft}>
              <h2 className={styles.secTitle}>
                The Types of Executive <br />
                <span>MS Container Sizes</span>
              </h2>
              <div className={styles.sizesDivider} />
            </div>
            <p className={styles.sizesDesc}>
              Every Executive MS Container is offered in multiple core sizes,
              with flexible interior layouts ranging from offices and
              accommodation to dining, sanitary, and storage spaces.
            </p>
          </div>
          <div className={styles.sizesNavRow}>
            <button className={styles.navBtn}>‹</button>
            <button className={styles.navBtn}>›</button>
          </div>
          <div className={styles.sizesGrid}>
            {containerSizes.map((item, index) => (
              <div
                key={index}
                className={`${styles.sizeCard} ${
                  item.highlight ? styles.activeCard : ""
                }`}
              >
                <div className={styles.cardIcon}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="2" y="10" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <rect x="6" y="14" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="16" y="14" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <line x1="2" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="28" x2="8" y2="32" stroke="currentColor" strokeWidth="2"/>
                    <line x1="28" y1="28" x2="28" y2="32" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>{item.size}</h3>
                <ul className={styles.featureList}>
                  {item.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Standards ── */}
      <section className={styles.qualitySec}>
        <div className={styles.qualityGrid}>
          <div className={styles.qualityContent}>
            <h2 className={styles.secTitle}>
              Executive MS Container <br />
              <span>Quality Standards</span>
            </h2>
            <div className={styles.qualityDivider} />
            <p>
              The Executive MS Container is built using high-quality mild steel,
              ensuring strong structural stability, long life, and excellent
              resistance to tough site conditions. Each unit is manufactured with
              precision to maintain durability, safety, and consistent performance
              across all models including 40×10, 20×10, 10×10, 6×8, and 4×4
              containers.
            </p>
            <p>
              It features premium finishing, proper insulation, and reliable
              fittings that enhance comfort and usability. Designed for heavy-duty
              applications such as staff offices, engineer cabins, worker
              accommodation, dining halls, storage units, washrooms, and guard
              cabins, it delivers a high standard of quality suitable for
              construction, industrial, and remote site projects.
            </p>
          </div>
          <div className={styles.qualityImgCol}>
            <div
              className={styles.qualityImgTop}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80')",
              }}
            />
            <div
              className={styles.qualityImgBottom}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=700&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Manufacturing Strength of <br />
              Executive MS Containers
            </h2>
            <p>
              Executive MS Containers are manufactured using high-grade mild steel
              with precision welding and strong structural design to ensure maximum
              strength and stability. Each unit is built under strict quality
              standards, making it durable, safe, and suitable for heavy-duty
              construction and industrial-site applications.
            </p>
          </div>
          <div className={styles.mfgImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Executive MS Container"
            />
            <div className={styles.mfgWatermark}>CONTAINER</div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.productsSec}>
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div>
              <h2 className={styles.secTitle}>
                Executive MS <br />
                <span>Container Products</span>
              </h2>
              <div className={styles.productsDivider} />
            </div>
            <p className={styles.productsSubtext}>
              A complete range of durable and customizable modular steel
              containers designed for offices, accommodation, storage, and
              site-based infrastructure solutions.
            </p>
          </div>
          <div className={styles.productsGrid}>
            {products.map((prod, i) => (
              <div key={i} className={styles.productCard}>
                <img src={prod.img} alt={prod.title} />
                <div className={styles.productOverlay}>
                  <h4>{prod.title}</h4>
                  {prod.description && <p>{prod.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <span className={styles.faqBreadcrumb}>• FQS</span>
            <h2 className={styles.secTitle}>
              Frequently Asked <br />
              <span>Questions</span>
            </h2>
            <div className={styles.faqDivider} />
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${
                    openFaq === faq.id ? styles.faqOpen : ""
                  }`}
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "↓" : "↑"}
                    </span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.faqRightCol}>
            <p className={styles.faqSubtext}>
              Common questions and answers about Executive MS Containers,
              covering their usage, features, and benefits for better
              understanding.
            </p>
            <div
              className={styles.faqSideImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Executive Ms Containers?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized Executive MS containers tailored to your storage
            needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveMsContainer;