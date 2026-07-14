import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabLabour.module.css";

const PrefabLabour = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const keyFeatures = [
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect x="2" y="8" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="6" y="12" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <rect x="16" y="12" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="2" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Modular & Fast Installation",
      desc: "Rapidly deployable modular units assembled on-site using standard components.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 3L3 12v19h28V12L17 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="12" y="20" width="10" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "On-site Shelter & Adaptation",
      desc: "Designed for structural integrity in diverse on-site environments and conditions.",
      highlight: true,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="17" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M17 9v8l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Designed for Structural Integrity",
      desc: "Engineered containers ensure optimum structural strength for all environments.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M5 17h24M17 5l12 12-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Cost-Effective & Scalable",
      desc: "Optimised manufacturing and scalable deployment reduce costs significantly.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect x="3" y="10" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M10 10V7M24 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Fully Equipped Living Units",
      desc: "Sleeping areas, washrooms, kitchens, and recreational facilities integrated.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="10" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M6 24H4V14l6-8h16l4 8v10h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="14" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Easy Relocation",
      desc: "Containers shift with project phases, reducing capital outlay and asset waste.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 3l2.5 8h8.5l-6.8 5 2.5 8L17 19l-6.7 5 2.5-8L6 11h8.5L17 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "Certification Backed",
      desc: "All engineered containers meet safety and international field standards.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 3C10 3 5 9 5 17c0 5 3 9 7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M17 3c7 0 12 6 12 14 0 5-3 9-7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <line x1="17" y1="3" x2="17" y2="31" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="5" y1="17" x2="29" y2="17" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Thermal Comfort & Insulation",
      desc: "Thermally regulated modules ensure worker comfort in all weather conditions.",
      highlight: false,
    },
  ];

  const facilitiesIncluded = [
    "Sleeping Dorms",
    "Wash Rooms",
    "Prayer Rooms",
    "Dining Rooms",
    "Common Areas",
    "Sports Terrace",
  ];

  const materialOptions = [
    "28mm EPS Sandwich Panel",
    "42mm EPS Sandwich Panel",
    "50mm EPS Sandwich Panel",
    "75mm EPS Sandwich Panel",
    "100mm EPS Sandwich Panel",
    "Rock Wool Sandwich Panel",
    "PUF Sandwich Panel",
  ];

  const mobilityImages = [
    {
      label: "Modular Panels",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    },
    {
      label: "Relocated Efficiently",
      img: "https://images.unsplash.com/photo-1590516408010-c6d81cf8c15b?auto=format&fit=crop&w=400&q=80",
    },
    {
      label: "Recent Sunrise Projects",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    },
    {
      label: "Workforce Ac. Properties",
      img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const advantages = [
    {
      num: "01",
      title: "Faster Project Setup",
      desc: "Modular units reduce site establishment timelines for workforce accommodation.",
    },
    {
      num: "02",
      title: "Lower Overall Cost",
      desc: "Maximised efficiency through smarter procurement and construction techniques.",
    },
    {
      num: "03",
      title: "Reusable Investment",
      desc: "Assets are relocated to multiple sites, delivering long-term value.",
    },
    {
      num: "04",
      title: "Enhanced Safety & Compliance",
      desc: "Structural reliability meets regulatory requirements across all environments.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is prefabricated labour accommodation?",
      a: "Prefabricated labour accommodation refers to modular, factory-built housing units that are transported and assembled on-site to provide comfortable and compliant living quarters for construction and industrial workers.",
    },
    {
      id: 1,
      q: "How quickly can labour camps be installed?",
      a: "L&R prefabricated labour camps can be installed significantly faster than traditional construction — typically within days to a few weeks depending on the scale, thanks to pre-engineered modular components.",
    },
    {
      id: 2,
      q: "Can labour accommodation be relocated?",
      a: "Yes. One of the key advantages of L&R modular labour camps is that they can be dismantled and relocated to new project sites, making them a reusable and cost-effective long-term asset.",
    },
    {
      id: 3,
      q: "What facilities do labour accommodation units offer?",
      a: "Our units include sleeping dorms, washrooms, dining areas, prayer rooms, recreational spaces, and sports terraces — all designed to meet workforce welfare standards.",
    },
    {
      id: 4,
      q: "Are prefabricated labour camps suitable for all climates?",
      a: "Yes. With options including EPS, rock wool, and PUF sandwich panels, L&R labour camps are engineered for thermal efficiency and structural integrity across all climatic conditions.",
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
            PREFAB LABOUR ACCOMMODATION <br />
            <span>&amp; WORKER ACCOMMODATION</span>
          </h1>
          <p className={styles.heroSub}>
            Modular labour solutions engineered for rapid deployment, structural
            stability, and workforce dignity — adaptable across industrial and remote fields.
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
                  "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div
              className={styles.imgSub}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=400&q=80')",
              }}
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.secTitle}>
              Prefab Labour Accommodation <br />
              <span>&amp; Workforce Housing</span>
            </h2>
            <p>
              Prefab Labour Accommodation by L&R Green India Pvt Ltd provides versatile,
              pre-engineered modular units that deliver rapid deployment, structural
              stability, and worker comfort across diverse industrial and site environments.
            </p>
            <p>
              These structures are fully scalable, cost-effective, and thermally insulated
              — offering smart management, reduced lead times, and assured smooth project
              implementation.
            </p>
            <p>
              These units are fully scalable, cost-effective, and thermally insulated —
              offering smart management, reduced lead times, and assured smooth project
              implementation.
            </p>
            <button className={styles.btnSecondary}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of <br />
                <span>Labour Camps</span>
              </h2>
              <div className={styles.featuresDivider} />
            </div>
            <p className={styles.featuresDesc}>
              Every L&R Labour Camp is engineered with structural strength, rapid
              deployment, and worker comfort as core priorities.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {keyFeatures.map((feat, i) => (
              <div
                key={i}
                className={`${styles.featureCard} ${
                  feat.highlight ? styles.featureCardActive : ""
                }`}
              >
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities & Construction ── */}
      <section className={styles.facilitiesSec}>
        <div className={styles.facilitiesGrid}>
          <div className={styles.facilitiesImgCol}>
            <div
              className={styles.facilitiesImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')",
              }}
            />
          </div>
          <div className={styles.facilitiesContent}>
            <h2 className={styles.secTitle}>
              Facilities, Construction <br />
              <span>&amp; Material Options</span>
            </h2>
            <div className={styles.facilitiesDivider} />
            <p>
              Our prefabricated labour accommodation units are designed to deliver safe,
              comfortable, and efficient living for workers. Each unit comes with a range
              of standard facilities and is available across different construction and
              material specifications to suit your climate and budget.
            </p>
            <div className={styles.facilitiesListsRow}>
              <div>
                <h5 className={styles.listHeading}>Key Facilities Included</h5>
                <ul className={styles.facilityList}>
                  {facilitiesIncluded.map((f, i) => (
                    <li key={i}>
                      <span className={styles.listBullet}>✔</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className={styles.listHeading}>Material / Construction Options</h5>
                <ul className={styles.facilityList}>
                  {materialOptions.map((m, i) => (
                    <li key={i}>
                      <span className={styles.listBullet}>✔</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enhancing Worker Welfare ── */}
      <section className={styles.welfareBand}>
        <div className={styles.welfareContainer}>
          <div className={styles.welfareText}>
            <h2>
              Enhancing Worker <br />
              Welfare &amp; Productivity
            </h2>
            <p>
              L&R Labour Accommodation goes beyond shelter — it plays a vital role in
              improving worker wellbeing, motivation, and on-site productivity. By
              providing hygienic, comfortable, and well-equipped living quarters, we help
              companies maintain workforce standards and comply with labour welfare
              regulations. Modern facilities and thoughtful design ensure workers are rested
              and ready for peak performance each day.
            </p>
          </div>
          <div className={styles.welfareImgCol}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Worker Welfare"
            />
            <div className={styles.welfareWatermark}>ACCOM</div>
          </div>
        </div>
      </section>

      {/* ── Mobility & Rapid Deployment ── */}
      <section className={styles.mobilitySec}>
        <div className={styles.mobilityInner}>
          <h2 className={styles.secTitle}>
            Mobility &amp; Rapid <br />
            <span>Deployment Advantage</span>
          </h2>
          <div className={styles.mobilityDivider} />
          <div className={styles.mobilityGrid}>
            {mobilityImages.map((item, i) => (
              <div key={i} className={styles.mobilityCard}>
                <img src={item.img} alt={item.label} />
                <div className={styles.mobilityLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className={styles.advantagesSec}>
        <div className={styles.advantagesInner}>
          <div className={styles.advantagesTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Advantages of Modular <br />
                <span>Labour Colonies</span>
              </h2>
              <div className={styles.advantagesDivider} />
            </div>
            <div className={styles.advantagesNavRow}>
              <button className={styles.navBtn}>‹</button>
              <button className={`${styles.navBtn} ${styles.navBtnActive}`}>›</button>
            </div>
          </div>
          <div className={styles.advantagesGrid}>
            {advantages.map((adv, i) => (
              <div key={i} className={styles.advantageCard}>
                <span className={styles.advantageNum}>{adv.num}</span>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className={styles.applicationsSec}>
        <div className={styles.applicationsGrid}>
          <div className={styles.applicationsImgCol}>
            <img
              src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=800&q=80"
              alt="Applications"
            />
          </div>
          <div className={styles.applicationsContent}>
            <span className={styles.applicationsLabel}>L&R</span>
            <h2 className={styles.secTitle}>
              Applications Where <br />
              <span>our camps deliver.</span>
            </h2>
            <div className={styles.applicationsDivider} />
            <p>
              L&R Modular Labour Camps are designed to support large-scale workforce
              housing on oil fields, construction sites, mining zones, and renewable energy
              projects. Our camps provide structured, compliant workforce accommodation
              rapidly deployed to meet your operational timeline.
            </p>
            <p>
              These units deliver the most reliable, modular labour camp experience for
              international deployments, remote work sites, and government infrastructure
              and corporate needs.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <div
              className={styles.faqSideImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80')",
              }}
            />
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqTopRow}>
              <div>
                <span className={styles.faqBreadcrumb}>• FAQ</span>
                <h2 className={styles.secTitle}>
                  Frequently Asked <br />
                  <span>Questions</span>
                </h2>
                <div className={styles.faqDivider} />
              </div>
              <p className={styles.faqSubtext}>
                Quick answers to common queries about labour camp design, usage,
                durability, and deployment for workforce accommodation.
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
          <h2>Build smarter workforce facilities with L&amp;R Green India Pvt Ltd</h2>
          <p>
            Connect with us to explore custom, scalable modular labour accommodation solutions
            with safe, cost-efficient, and modern workforce accommodation solutions.
          </p>
          <button className={styles.btnCTA}>Contact Us &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrefabLabour;