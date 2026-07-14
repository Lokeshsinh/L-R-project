import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/HingeMsContainer.module.css";

const HingeMsContainer = () => {
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
        "Copy Room Containers",
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
        "OPS Containers- Net Containers",
        "cement store Containers",
        "Tube well- Pump Farm accommodation Containers",
        "coffee Shop Containers",
        "Relay Flat Area Containers",
        "Toilet block Containers",
        "Multi Store Block Containers",
        "Copy Room Containers",
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
        "Copy Room Containers",
        "General Residential Containers",
      ],
      highlight: false,
    },
  ];

  const products = [
    {
      title: "Coffee Shop Container",
      description: "",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Baby Play Area Container",
      description:
        "Safe and engaging modular space designed for children's recreational activities.",
      img: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pump Farm Store Container",
      description: "",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Material Store Container",
      description: "",
      img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are L&R Value Granted MS Containers used for?",
      a: "They are used for staff offices, worker accommodation, guard cabins, dining spaces, storage units, pump farms, coffee shops, play areas, and various site utility applications.",
    },
    {
      id: 1,
      q: "What sizes are available in L&R MS Containers?",
      a: "They are available in multiple sizes such as 40×10×8.5 ft, 20×10×8.5 ft, 10×10×8.5 ft, 6×8 ft, and 4×4 ft.",
    },
    {
      id: 2,
      q: "Are these containers suitable for harsh environments?",
      a: "Yes. L&R MS Containers are built with high-grade steel and protective coatings, making them durable and reliable even in extreme weather and demanding site conditions.",
    },
    {
      id: 3,
      q: "Can L&R MS Containers be relocated?",
      a: "Absolutely. These containers are designed for easy relocation using standard lifting equipment or flatbed trucks, making them ideal for phased or temporary deployments.",
    },
    {
      id: 4,
      q: "Do these containers support custom layouts?",
      a: "Yes. Interior partitions, electrical fittings, HVAC, flooring, and finishes can all be customized to meet your specific project or operational requirements.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Portable Modular Solutions</span>
          <h1 className={styles.mainTitle}>
            HINGE MS <br />
            <span>CONTAINER</span>
          </h1>
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
                  "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div
              className={styles.imgSub}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=400&q=80')",
              }}
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.secTitle}>
              Hinge <br />
              <span>MS Containers</span>
            </h2>
            <p>
              L&R Value Granted Containers represent a versatile range of portable MS
              modular units designed to meet diverse industrial, commercial, and site
              infrastructure needs. Available in multiple sizes from compact 4×4 units
              to large 40-foot containers, these solutions are engineered for durability,
              mobility, and functional adaptability across applications such as offices,
              accommodation, storage, sanitation, and specialized utility spaces.
            </p>
            <p>
              Built with robust steel structures and customizable layouts, L&R
              containers are ideal for rapid deployment in demanding environments.
              Whether for construction sites, remote project locations, or facilities,
              these modular units offer cost-effective, low-maintenance, and scalable
              solutions that ensure operational efficiency, user comfort, and long-term
              performance.
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
                The Types of L&R <br />
                <span>Value Granted Sizes</span>
              </h2>
              <div className={styles.sizesDivider} />
            </div>
            <p className={styles.sizesDesc}>
              Every L&R Value Container is offered in multiple core sizes, with
              flexible interior layouts ranging from offices and accommodation to
              dining, sanitary, and storage spaces.
            </p>
          </div>
          <div className={styles.sizesNavRow}>
            <button className={styles.navBtn}>‹</button>
            <button className={styles.navBtn + " " + styles.navBtnActive}>›</button>
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

      {/* ── Why Choose ── */}
      <section className={styles.whySec}>
        <div className={styles.whyGrid}>
          <div className={styles.whyContent}>
            <h2 className={styles.secTitle}>
              Why Choose L&R Value <br />
              <span>Granted MS Containers</span>
            </h2>
            <div className={styles.whyDivider} />
            <p>
              L&R Value Granted MS Containers offer reliable, cost-effective
              modular solutions for diverse applications. Built with strong steel
              structures, they ensure durability, safety, and long-term performance
              in demanding conditions.
            </p>
            <p>
              With multiple size options and highly flexible layouts, L&R containers
              can be easily adapted for offices, accommodation, storage, and utility
              spaces. Their quick installation, low-maintenance requirements, and
              easy relocation make them an ideal choice for projects that demand
              speed, mobility, and operational efficiency.
            </p>
          </div>
          <div className={styles.whyImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="L&R Value Container"
            />
          </div>
        </div>
      </section>

      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength &amp; <br />
              Manufacturing Excellence
            </h2>
            <p>
              L&R MS Containers are built with high-grade steel and precision engineering to
              ensure strong structural stability and long-lasting performance. Designed for
              tough industrial conditions, they offer durability, safety, and reliable usage
              across all site applications.
            </p>
            <div className={styles.mfgTag}>ENERGY STORAGE</div>
          </div>
          <div className={styles.mfgImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Strength"
            />
            <div className={styles.mfgWatermark}>CONTA</div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.productsSec}>
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div>
              <h2 className={styles.secTitle}>
                L&R Value Granted MS <br />
                <span>Containers Products</span>
              </h2>
              <div className={styles.productsDivider} />
            </div>
            <p className={styles.productsSubtext}>
              Purpose-built modular container solutions designed for commercial,
              utility, and recreational applications with durable construction and
              flexible deployment options.
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
            <div className={styles.faqSideImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80')",
              }}
            />
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqTopRow}>
              <div>
                <span className={styles.faqBreadcrumb}>• FQS</span>
                <h2 className={styles.secTitle}>
                  Frequently Asked <br />
                  <span>Questions</span>
                </h2>
                <div className={styles.faqDivider} />
              </div>
              <p className={styles.faqSubtext}>
                Quick answers to common queries about our 20×10 MS containers,
                covering features, customization, durability, and deployment.
              </p>
            </div>
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your L&R Value Granted MS Containers ?</h2>
          <p>
            Connect with our team to design and deliver compact, durable, and
            fully L&R Value Granted MS Containers tailored to your site needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HingeMsContainer;