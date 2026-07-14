import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabDryWall.module.css";

const PrefabDryWall = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const keyFeatures = [
    {
      title: "Fast Installation",
      desc: "Enables quick on-site installation, reducing overall construction time and improving project speed.",
      highlight: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
        </svg>
      ),
    },
    {
      title: "Factory-Made Precision",
      desc: "Built in advanced facilities using strict quality control to ensure durability, safety, and long service life.",
      highlight: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20V8h3l4 4v-4l4 4v-4l4 4v8H3z"></path>
          <circle cx="8" cy="15" r="0.5" fill="currentColor"></circle>
          <circle cx="12" cy="15" r="0.5" fill="currentColor"></circle>
          <circle cx="16" cy="15" r="0.5" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      title: "Lightweight & Durable",
      desc: "Easy to handle and install while maintaining strong structural strength and long-lasting performance.",
      highlight: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7 12 2"></polygon>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Minimal Construction Waste",
      desc: "Reduces material wastage through prefabrication, supporting sustainable and eco-friendly construction.",
      highlight: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      ),
    },
  ];

  const appItems = [
    "Office & Commercial Spaces",
    "Retail Shops and Outlets",
    "Hospitals & Healthcare Facilities",
    "Educational Institutions",
    "Industrial & Factory Divisions",
  ];

  const faqs = [
    {
      id: 0,
      q: "What is prefab drywall?",
      a: "A prefabricated drywall is a factory-manufactured wall panel system designed for rapid on-site assembly, serving as an efficient and clean alternative to traditional brick or plaster partitions.",
    },
    {
      id: 1,
      q: "Where is it used?",
      a: "It is used in offices, homes, hospitals, and commercial buildings for creating modern and flexible interior spaces.",
    },
    {
      id: 2,
      q: "Is it better than traditional walls?",
      a: "Yes, prefab drywall eliminates wet construction, installs significantly faster, offers superior finish quality, and provides excellent thermal and acoustic insulation.",
    },
    {
      id: 3,
      q: "Does it reduce construction time?",
      a: "Absolutely. Since panels are pre-engineered to precise dimensions, on-site installation is extremely fast, reducing partition wall construction time by up to 70%.",
    },
    {
      id: 4,
      q: "Is it durable?",
      a: "Yes, our drywall systems are constructed with robust core materials and heavy-duty facing panels, ensuring high structural integrity and long-term durability.",
    },
  ];

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section
        className={styles.hero}
        style={{
        backgroundColor:"black",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>L&R Green India Pvt Ltd</span>
          <h1>PREFAB DRYWALL SOLUTIONS FOR FAST & EFFICIENT CONSTRUCTION</h1>
          <p>
            At L&R Green Pvt Ltd, we provide advanced prefabricated drywall systems designed for quick installation, clean finishing, and modern construction needs, replacing traditional slow and messy building methods.
          </p>
          <button className={styles.btnPrimary}>
            Conatct us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          <div className={styles.introTop}>
            <h2 className={styles.secTitle}>
              Prefabricated <br />
              <span>Particular Dry Wall</span>
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.introGrid}>
            <div className={styles.introVisuals}>
              <div
                className={styles.imgMain}
                style={{
                  backgroundImage: "url('/Images/drywall.jpg')",
                }}
              />
            </div>
            <div className={styles.introText}>
              <p>
                Prefabricated dry wall systems by L&R Green Pvt Ltd are factory-made wall panels designed for fast and precise interior space division. These panels are engineered under controlled conditions to ensure uniform quality, accurate dimensions, and a smooth finish, making them ideal for modern interior construction.
              </p>
              <p>
                Unlike traditional brick or plaster walls, prefabricated partitioning walls are installed without wet construction processes, allowing quicker assembly, cleaner installation, and reduced project time. They are widely used for creating flexible, lightweight, and efficient interior partitions in commercial, residential, and industrial spaces.
              </p>
              <button className={styles.btnPrimary}>
                Buy Drywall
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresHeader}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features of <br />
                <span>Prefabricated Dry Wall</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.featuresDesc}>
              Prefabricated dry wall systems by L&R Green Pvt Ltd <br />
              enable fast, clean, and precise interior wall construction <br />
              with strong durability and modern performance.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`${styles.featureCard} ${
                  feat.highlight ? styles.featureCardHighlight : ""
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

      {/* ── Core Benefits Banner ── */}
      <section className={styles.mfgBanner}>
        <div className={styles.mfgWatermark}>L&R PREFABRICATED DRY WALL</div>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgContent}>
            <h2>Core Benefits & Manufacturing Technology</h2>
            <p>
              Prefab drywall systems by L&R Green Pvt Ltd improve construction efficiency through faster installation, consistent factory-controlled quality, reduced labor dependency, and lower overall project costs, while ensuring high design accuracy and premium finish. These panels are manufactured using precision engineering in controlled environments to achieve uniform quality, accurate dimensions, and strong structural performance for easy and reliable on-site assembly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className={styles.appsSec}>
        <div className={styles.appsContainer}>
          <div className={styles.appsTop}>
            <h2 className={styles.secTitle}>
              Applications of <br />
              <span>Prefabricated Dry Wall</span>
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.appsGrid}>
            <div className={styles.appsLeft}>
              <p className={styles.appsDesc}>
                Prefabricated dry wall systems by L&R Green Pvt Ltd are widely used across various sectors for fast, clean, and efficient interior space division and modern construction needs. They provide a flexible and reliable solution for creating high-quality interior environments with minimal construction time.
              </p>
              <ul className={styles.appsList}>
                {appItems.map((item, index) => (
                  <li key={index}>
                    <div className={styles.checkCircle}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.appsVisuals}>
              <div
                className={styles.imgMain}
                style={{
                  backgroundImage: "url('/Images/application.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose L&R ── */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <div className={styles.whyTop}>
            <h2 className={styles.secTitle}>
              Why Choose L&R <br />
              <span>Prefabricated Dry Wall</span>
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyVisuals}>
              <div
                className={styles.imgMain}
                style={{
                  backgroundImage: "url('/Images/application2.jpg')",
                }}
              />
            </div>
            <div className={styles.whyText}>
              <p>
                At L&R Green Pvt Ltd, we specialize in delivering advanced prefabricated dry wall solutions designed to meet modern construction demands with speed, precision, and reliability. Our systems are engineered using high-quality materials and controlled manufacturing processes to ensure consistent performance and superior finishing in every project.
              </p>
              <p>
                We focus on providing efficient and cost-effective construction solutions that reduce project timelines while maintaining high structural quality. With our expertise in prefab technology, we ensure faster installation, accurate panel design, and dependable results, making us a trusted partner for modern interior building requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqTopRow}>
            <div>
              <span className={styles.faqTag}>
                <span className={styles.dot}>•</span> FQS
              </span>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Quick answers from L&R Green Pvt Ltd about prefabricated <br />
              dry wall systems, covering key benefits, usage, and <br />
              performance in modern interior construction.
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
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                      )}
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
            <div className={styles.faqVisuals}>
              <div
                className={styles.faqImg}
                style={{
                  backgroundImage: "url('/Images/question3.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Prefabricated Dry Wall ?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully customized <br />
            Executive Prefabricated Dry Wall tailored to your storage needs.
          </p>
          <button className={styles.btnSecondary}>
            Contact US
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrefabDryWall;
