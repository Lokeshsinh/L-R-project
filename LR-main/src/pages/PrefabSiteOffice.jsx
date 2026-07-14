import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSiteOffice.module.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const keyFeatures = [
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="3" y="10" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 10V7M24 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="20" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="20" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Rapid Site Deployment",
    desc: "Pre-manufactured off-site and installed within days — no delays to your project schedule.",
    highlight: false,
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 3L3 12v19h28V12L17 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="12" y="20" width="10" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Weatherproof & Durable",
    desc: "Built to withstand extreme weather, dust, and harsh site conditions without compromise.",
    highlight: true,
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 17l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Customizable Interiors",
    desc: "Tailored layouts, insulation, electrical fittings, and finishes per project requirements.",
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
    title: "Fully Relocatable",
    desc: "Dismantle and shift to the next project site with zero structural wastage.",
    highlight: false,
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="2" y="8" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="6" y="12" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="12" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="2" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Modular & Scalable",
    desc: "Connect multiple units to build large office complexes as your project scales up.",
    highlight: false,
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 3l2.5 8h8.5l-6.8 5 2.5 8L17 19l-6.7 5 2.5-8L6 11h8.5L17 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Quality Certified",
    desc: "Every unit meets stringent manufacturing and safety standards before delivery.",
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
    title: "Eco-Friendly Materials",
    desc: "Sustainable sandwich panel systems reduce environmental impact and energy costs.",
    highlight: false,
  },
  {
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="3" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M10 8V5M24 8V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="14" x2="31" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="17" y1="14" x2="17" y2="28" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: "After-Sales Support",
    desc: "Dedicated support team ensures cabins stay in peak condition throughout the project.",
    highlight: false,
  },
];

const applications = [
  "Construction Site Offices",
  "Mining Site Cabins",
  "Industrial Site Offices",
  "Security Cabins",
  "Labour Accommodation",
  "Temporary Classrooms",
  "Storage Units",
  "Portable Toilets / Washrooms",
  "Guard Rooms",
  "Solar Office Cabins",
];

const advantages = [
  {
    num: "01",
    title: "Time Efficiency",
    desc: "Fast delivery and installation significantly reduce project downtime and site setup costs.",
  },
  {
    num: "02",
    title: "Cost Optimization",
    desc: "Affordable pricing with minimal maintenance costs over the entire project lifecycle.",
  },
  {
    num: "03",
    title: "Reusable Asset",
    desc: "Relocate across multiple project sites — your investment works for every assignment.",
  },
  {
    num: "04",
    title: "Eco-Friendly Build",
    desc: "Sustainable materials and reusable structure reduce environmental impact significantly.",
  },
];

const faqs = [
  {
    id: 0,
    q: "What is a prefab site office cabin?",
    a: "A prefab site office cabin is a modular, ready-to-use workspace manufactured off-site and delivered to your project location for quick setup with minimal disruption.",
  },
  {
    id: 1,
    q: "How quickly can a prefab site office be delivered and installed?",
    a: "Depending on size and customization, most cabins can be delivered and installed within 7–15 working days from order confirmation.",
  },
  {
    id: 2,
    q: "Are mobile site offices available?",
    a: "Yes, we offer fully mobile site office cabins that can be transported and reinstalled at different locations as your project moves forward.",
  },
  {
    id: 3,
    q: "Can the cabins be customized for specific needs?",
    a: "Absolutely. We offer custom layouts, insulation types, electrical fittings, partition walls, and interior finishes tailored to your exact project requirements.",
  },
  {
    id: 4,
    q: "Where are L&R cabins commonly used?",
    a: "Our cabins are deployed at construction sites, industrial facilities, mining operations, border areas, and remote infrastructure projects across India.",
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const PrefabSiteOffice = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            SMART PREFABRICATED<br />
            <span>SITE OFFICE CABINS</span>
          </h1>
          <p className={styles.heroSub}>
            Durable, movable, and efficiently engineered modular cabins — the perfect
            solution for site operations across construction, civil, and industrial projects.
          </p>
          <button className={styles.btnHero}>Contact Us &nbsp;→</button>
        </div>
      </section>

      {/* ── What Are Prefab ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.introVisuals}>
            <div
              className={styles.imgMain}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366754035-f200968a6e23?w=800&q=80')",
              }}
            />
            <div
              className={styles.imgSub}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=400&q=80')",
              }}
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.secTitle}>
              What Are Prefabricated<br />
              <span>Site Office Cabins?</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Prefabricated site office cabins are modular, ready-to-use workspace solutions
              manufactured off-site and transported to the project location. Designed to be
              durable, weatherproof, and fully functional, these cabins provide a professional
              working environment even in remote or rugged terrains.
            </p>
            <p>
              Ideal for construction companies, infrastructure firms, mining operations, and
              large-scale project sites that require temporary yet effective office setups.
              With options for insulation, electrical fittings, and customized interiors,
              these cabins offer convenience without compromising quality.
            </p>
            <button className={styles.btnSecondary}>Read More &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of Our<br />
                <span>Prefab Site Cabins</span>
              </h2>
              <div className={styles.featuresDivider} />
            </div>
            <p className={styles.featuresDesc}>
              Every L&amp;R cabin is engineered with structural strength, rapid deployment,
              and on-site comfort as core priorities.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {keyFeatures.map((feat, i) => (
              <div
                key={i}
                className={`${styles.featureCard} ${feat.highlight ? styles.featureCardActive : ""}`}
              >
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Designed for Mobility ── */}
      <section className={styles.mobilitySec}>
        <div className={styles.mobilityGrid}>
          <div className={styles.mobilityImgCol}>
            <div
              className={styles.mobilityImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80')",
              }}
            />
          </div>
          <div className={styles.mobilityContent}>
            <h2 className={styles.secTitle}>
              Designed for Mobility<br />
              <span>&amp; Strength</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Our prefab site office cabins are built with high-quality steel frames and
              sandwich panel walls that ensure superior strength while keeping the overall
              structure lightweight and easy to transport.
            </p>
            <ul className={styles.featureList}>
              {[
                "Lightweight yet Sturdy Steel Frame Construction",
                "Quick Assembly and Dismantling",
                "Portable and Easily Relocatable",
                "Suitable for All Weather Conditions",
                "Customizable Interiors and Layouts",
              ].map((f, i) => (
                <li key={i}>
                  <span className={styles.checkIcon}>✔</span> {f}
                </li>
              ))}
            </ul>
            <p>
              Engineered for rapid deployment and long-term performance, making them the
              trusted choice for leading project management teams across India.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className={styles.whyChooseSec}>
        <div className={styles.welfareContainer}>
          <div className={styles.welfareText}>
            <h2>
              Why Choose L&amp;R<br />
              Green India Pvt Ltd
            </h2>
            <p>
              At L&amp;R Green India Pvt Ltd, we bring years of expertise in prefabricated
              construction with a commitment to delivering world-class quality products. Our
              state-of-the-art manufacturing facility ensures every cabin meets stringent
              quality standards.
            </p>
            <p>
              We work closely with project managers, site engineers, and procurement teams
              to deliver tailored solutions aligned with project timelines and budgets. From
              design to delivery, we ensure a seamless experience for every client.
            </p>
            <button className={styles.btnSecondaryWhite}>Get a Quote &nbsp;→</button>
          </div>
          <div className={styles.welfareImgCol}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Why Choose L&R"
            />
            <div className={styles.welfareWatermark}>OFFICE</div>
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className={styles.advantagesSec}>
        <div className={styles.advantagesInner}>
          <div className={styles.advantagesTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Advantages of Prefabricated<br />
                <span>&amp; Modular Construction</span>
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
          <div className={styles.badgesRow}>
            {[
              { icon: "🔧", label: "Custom Built" },
              { icon: "🌿", label: "Sustainable Build" },
              { icon: "🌦", label: "Weather & Fire Resistant" },
              { icon: "🏆", label: "Quality Certified" },
            ].map((b, i) => (
              <div key={i} className={styles.badge}>
                <span>{b.icon}</span>
                <span>{b.label}</span>
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Applications"
            />
          </div>
          <div className={styles.applicationsContent}>
            <span className={styles.applicationsLabel}>L&amp;R</span>
            <h2 className={styles.secTitle}>
              Prefab Site Office<br />
              <span>Applications</span>
            </h2>
            <div className={styles.applicationsDivider} />
            <p>
              Our prefabricated cabins serve a wide range of industries and sectors —
              delivering real value wherever a professional workspace is needed on the ground.
            </p>
            <div className={styles.appsGrid}>
              {applications.map((a, i) => (
                <div key={i} className={styles.appItem}>
                  <span className={styles.appDot}>●</span> {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Built for Growing Demands ── */}
      <section className={styles.builtForSec}>
        <div className={styles.builtForInner}>
          <div className={styles.builtForText}>
            <h2>
              Built for Growing<br />
              Project Demands
            </h2>
            <p>
              As your project scales, our modular cabin systems scale with you. Connect
              multiple units to create larger office complexes, conference rooms, or
              multi-functional spaces — without any permanent construction.
            </p>
            <p>
              Available in a range of sizes and configurations to accommodate growing teams.
              Whether you need a single-room office or a multi-unit complex, L&amp;R Green
              India Pvt Ltd has the right solution for you.
            </p>
          </div>
          <div className={styles.builtForImgCol}>
            <img
              src="https://images.unsplash.com/photo-1590516408010-c6d81cf8c15b?w=800&q=80"
              alt="Scalable Modular Cabins"
            />
            <div className={styles.builtForWatermark}>SITE OFFICE</div>
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
                  "url('https://images.unsplash.com/photo-1497366754035-f200968a6e23?w=600&q=80')",
              }}
            />
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqTopRow}>
              <div>
                <span className={styles.faqBreadcrumb}>• FAQ</span>
                <h2 className={styles.secTitle}>
                  Frequently Asked<br />
                  <span>Questions</span>
                </h2>
                <div className={styles.faqDivider} />
              </div>
              <p className={styles.faqSubtext}>
                Quick answers about our prefab cabins, delivery timelines, customization,
                and after-sales support.
              </p>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqOpen : ""}`}
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "↓" : "↑"}</span>
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

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your Prefab Site Office?</h2>
          <p>
            Get in touch with our team today and receive a detailed, site-specific quote.
            Fast turnaround, competitive pricing, and unmatched quality guaranteed.
          </p>
          <button className={styles.btnCTA}>Contact Us &nbsp;→</button>
        </div>
      </section>

      {/* ── Let's Connect ── */}
      <div className={styles.letsConnect}>
        <div className={styles.letsConnectInner}>
          <h2>LET'S CONNECT — L&amp;R GREEN INDIA</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrefabSiteOffice;