import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabMushroom.module.css";

const PrefabMushroom = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const keyFeatures = [
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      ),
      title: "Superior Insulation",
      desc: "Prefab insulated structures maintain stable temperature and high humidity for mushroom growth.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
        </svg>
      ),
      title: "Advanced Climate Control",
      desc: "Integrated systems control temperature, humidity, CO₂, and airflow for optimal cultivation.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
          <path d="M21 5V8"></path>
          <path d="M21 12L18 17H22L19 22"></path>
          <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
        </svg>
      ),
      title: "Energy Efficient",
      desc: "Prefab design reduces energy loss and ensures low power consumption during operation.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      title: "Quick Installation",
      desc: "Pre-engineered prefab units allow fast setup of complete mushroom growing chambers.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      title: "Pest & Contamination Free",
      desc: "Sealed prefab rooms protect crops from pests, bacteria, and external contamination.",
      highlight: false,
    },
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 22l8-8"></path>
        </svg>
      ),
      title: "Pest & Contamination Free",
      desc: "Controlled prefab environment supports continuous mushroom farming in all seasons.",
      highlight: false,
    },
  ];

  const coreComponents = [
    {
      title: "Prefab Structure",
      desc: "Insulated panels with cam-lock joints ensure airtight and stable growing conditions.",
      img: "/Images/core1.jpg",
    },
    {
      title: "Climate System",
      desc: "Advanced units regulate temperature, humidity, and airflow for optimal growth.",
      img: "/Images/core2.jpg",
    },
    {
      title: "Internal Setup",
      desc: "Racks, shelving, and LED lighting support organized and efficient cultivation.",
      img: "/Images/core3.jpg",
    },
    {
      title: "Automation System",
      desc: "Smart controls manage environmental conditions and monitor farm performance.",
      img: "/Images/core4.jpg",
    },
  ];

  const advantagesList = [
    "Corrosion-resistant structure",
    "Maintains 90%+ humidity",
    "Optimal temperature (13-18°C)",
    "Low maintenance cost",
    "Faster ROI compared to traditional farms",
  ];

  const faqs = [
    {
      id: 0,
      q: "What is a prefab mushroom farm?",
      a: "A prefabricated mushroom farm is a modular, insulated structure specifically designed and equipped with climate control systems to create the perfect environment for year-round mushroom cultivation.",
    },
    {
      id: 1,
      q: "Can I grow mushrooms year-round?",
      a: "Yes, the controlled indoor environment allows continuous mushroom production regardless of external weather conditions.",
    },
    {
      id: 2,
      q: "Is it suitable for beginners?",
      a: "Absolutely. Our automated systems make it easier for beginners to manage complex climate requirements without extensive prior experience.",
    },
    {
      id: 3,
      q: "Does it require high maintenance?",
      a: "No, our structures are designed with durable, corrosion-resistant materials that require minimal maintenance compared to traditional setups.",
    },
    {
      id: 4,
      q: "What is the ideal temperature?",
      a: "The ideal temperature depends on the mushroom variety, but our systems typically maintain a stable range between 13°C and 18°C as required.",
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
            PREFABRICATED <br />
            MUSHROOM FARMS
          </h1>
          <p className={styles.heroSub}>
            Modern modular mushroom growing solutions designed for efficient, climate-controlled,
            and year-round production.
          </p>
          <button className={styles.btnHero}>
            Contact us &nbsp;<span>→</span>
          </button>
        </div>
      </section>

      {/* ── What is... ── */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.secTitle}>
            What is a Prefabricated <br />
            <span>Mushroom Farm</span>
          </h2>
          <div className={styles.divider} />
          <p>
            Prefabricated mushroom farms by L&R Green Pvt Ltd are designed to deliver precise environmental control, ensuring optimal temperature, humidity, and airflow required for healthy mushroom growth. Built with high-quality insulated panels, these structures maintain stable internal conditions regardless of external weather, allowing farmers to achieve consistent and reliable yields throughout the year.
          </p>
          <p>
            These advanced systems from L&R Green Pvt Ltd also reduce manual effort through automation, managing key parameters like humidity, CO₂ levels, and ventilation. As a result, farmers benefit from improved productivity, lower energy consumption, and superior crop quality, making prefab mushroom farms a cost-effective and efficient solution for modern agriculture.
          </p>
          <button className={styles.btnSecondary}>
            Get Contact
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
        <div className={styles.introVisuals}>
          <div
            className={styles.imgMain}
            style={{
              backgroundImage:
                "url('/Images/mushroomfarmbig.jpg')",
            }}
          />
          <div
            className={styles.imgSub}
            style={{
              backgroundImage:
                "url('/Images/Mushroomfarmsmall.jpg')",
            }}
          />
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Key Features <br />
                <span>&amp; Benefits</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.featuresDesc}>
              Efficient prefab systems designed for controlled mushroom growth, high yield, and consistent production.
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

      {/* ── Core Components ── */}
      <section className={styles.componentsSec}>
        <div className={styles.componentsInner}>
          <div className={styles.componentsTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Core Components <br />
                <span>of Mushroom Farm</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.componentsDesc}>
              Essential systems and structures designed to create a controlled, efficient, and high-performance mushroom growing environment.
            </p>
          </div>
          <div className={styles.componentsGrid}>
            {coreComponents.map((comp, i) => (
              <div key={i} className={styles.componentCard}>
                <div
                  className={styles.componentImg}
                  style={{ backgroundImage: `url('${comp.img}')` }}
                />
                <div className={styles.componentContent}>
                  <h4>{comp.title}</h4>
                  <p>{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Farm Layout & Sizes ── */}
      <section className={styles.layoutBanner}>
        <div className={styles.layoutInner}>
          <h2>
            Farm Layout <br />
            &amp; Sizes
          </h2>
          <p>
            Prefab mushroom farms are designed with dedicated functional areas such as substrate preparation, germination, growing, and packing to ensure a smooth and efficient workflow. They offer flexible solutions including container units, modular buildings, and beginner setups suitable for different scales of farming. This integrated approach supports better productivity, organized operations, and easy scalability from small to large commercial mushroom farms.
          </p>
        </div>
        <div className={styles.layoutWatermark}>L&R PREFAB MUSHROOM</div>
      </section>

      {/* ── Advantages ── */}
      <section className={styles.advantagesSec}>
        <div className={styles.advantagesInner}>
          <div className={styles.advantagesLeft}>
            <h2 className={styles.secTitle}>
              Advantages of Prefab <br />
              <span>Mushroom Farms</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.advantagesVisuals}>
              <div
                className={styles.advImgMain}
                style={{
                  backgroundImage:
                    "url('/Images/advanatagebig.jpg')",
                }}
              />
              <div
                className={styles.advImgSub}
                style={{
                  backgroundImage:
                    "url('/Images/advanatagesmall.jpg')",
                }}
              />
            </div>
          </div>
          <div className={styles.advContent}>
            <p>
              Efficient prefab solutions designed for reliable performance, consistent yield, and cost-effective mushroom farming. Built for durability and optimized conditions, they simplify operations and enhance overall productivity.
            </p>
            <ul className={styles.advList}>
              {advantagesList.map((item, i) => (
                <li key={i}>
                  <svg className={styles.advIcon} width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#3b5a82" />
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Choose L&R ── */}
      <section className={styles.whyChooseSec}>
        <div className={styles.whyChooseInner}>
          <div className={styles.whyContent}>
            <h2 className={styles.secTitle}>
              Why Choose L&R <br />
              <span>&amp; How It Works</span>
            </h2>
            <div className={styles.divider} />
            <p>
              L&R Green Pvt Ltd delivers high-quality prefabricated mushroom farms built with advanced technology and precision engineering to ensure durability, energy efficiency, and maximum yield. Our solutions are designed to provide consistent production through controlled environments, helping farmers achieve reliable and profitable results. From planning to installation, we offer complete turnkey support tailored to your requirements, budget, and location.
            </p>
            <p>
              Our streamlined process covers every stage of mushroom cultivation, including substrate preparation, controlled incubation, optimized growth conditions, and hygienic harvesting. With automated systems and expert guidance, we ensure smooth operations, efficient workflow, and long-term success for both small-scale and commercial mushroom farming setups.
            </p>
          </div>
          <div className={styles.whyVisuals}>
            <div
              className={styles.whyImgMain}
              style={{
                backgroundImage:
                  "url('/Images/whybig.jpg')",
              }}
            />
            <div
              className={styles.whyImgSub}
              style={{
                backgroundImage:
                  "url('/Images/whysmall.jpg')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          {/* Top row: Title + Description */}
          <div className={styles.faqTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Quick answers to common queries about prefabricated mushroom farms and their usage. Helps you understand setup, operation, and benefits with ease.
            </p>
          </div>

          {/* Bottom row: Image + Questions side by side */}
          <div className={styles.faqContent}>
            <div
              className={styles.faqImg}
              style={{
                backgroundImage: "url('/Images/question.jpg')",
              }}
            />
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

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Prefab Mashroom?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully customized
            Executive prefab Mashroom tailored to your storage needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrefabMushroom;
