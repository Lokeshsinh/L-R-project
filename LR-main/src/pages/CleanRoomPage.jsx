import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/CleanRoom.module.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const applications = [
  "Pharmaceutical manufacturing",
  "Medical device production",
  "Electronics assembly",
  "Laboratories",
  "Food processing",
];

const coreFeatures = [
  {
    title: "PUF Insulated Panels",
    desc: "Provides insulation, maintains temperature, improves efficiency, ensures durability.",
  },
  {
    title: "Seamless Internal Finishing",
    desc: "Smooth surfaces prevent dust, enable cleaning, reduce hygiene standards.",
  },
  {
    title: "HEPA Filtration Compatibility",
    desc: "Supports HEPA filters, removes particles, ensures clean air quality.",
  },
  {
    title: "Controlled Airflow Systems",
    desc: "Maintains airflow, reduces contamination risk, ensures consistent environment control.",
  },
  {
    title: "Anti-Bacterial Wall Panels",
    desc: "Prevents microbes, improves hygiene, supports sterile clean room conditions.",
  },
  {
    title: "Hygiene Flooring Systems",
    desc: "Durable hygienic flooring, easy cleaning, resists dust, maintains hygiene.",
  },
];

const benefitCards = [
  {
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    title: "Air Quality Standards",
    desc: "Maintains clean, particle-controlled air using advanced filtration systems to ensure a contamination-free environment.",
    highlight: false,
  },
  {
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80",
    title: "Temperature Control",
    desc: "Ensures consistent temperature levels to support sensitive processes and maintain product integrity.",
    highlight: true,
  },
  {
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80",
    title: "Humidity Regulation",
    desc: "Precise humidity controls to prevent damage to sensitive materials, support positive operational conditions.",
    highlight: false,
  },
  {
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80",
    title: "Contamination Prevention",
    desc: "Minimises the risk of pollutants and microbes through sealed structures and controlled airflow systems.",
    highlight: false,
  },
];

const faqs = [
  {
    id: 0,
    q: "What is a clean room?",
    a: "A clean room is a controlled environment where airborne particles, contaminants, temperature, humidity, and pressure are regulated to meet specific industry standards for sensitive manufacturing and research.",
  },
  {
    id: 1,
    q: "Which industries use clean rooms?",
    a: "Clean rooms are used in pharmaceutical manufacturing, medical device production, electronics assembly, biotechnology, and food processing industries.",
  },
  {
    id: 2,
    q: "How is air quality maintained in a clean room?",
    a: "Air quality is maintained using HEPA filtration systems, controlled airflow designs (laminar or turbulent), positive pressure environments, and regular particle monitoring protocols.",
  },
  {
    id: 3,
    q: "Why is temperature and humidity control important?",
    a: "Temperature and humidity control ensures product integrity, prevents static build-up, and maintains the stability of sensitive materials and processes in clean room environments.",
  },
  {
    id: 4,
    q: "Are prefabricated clean rooms customizable?",
    a: "Yes. L&R prefabricated clean rooms are fully customizable in terms of size, ISO classification, insulation type, flooring, filtration systems, and internal layouts to match your operational needs.",
  },
];

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const CleanRoomPage = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            PRECISION-CONTROLLED PREFABRICATED<br />
            <span>CLEAN ROOM SOLUTIONS</span>
          </h1>
          <p className={styles.heroSub}>
            L&amp;R Green India Pvt Ltd delivers advanced prefabricated clean rooms, designed
            for industries that demand controlled, contamination-free environments.
          </p>
          <button className={styles.btnHero}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* ── Our Clean Room Solutions ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <h2 className={styles.secTitle}>
              Our Clean<br />
              <span>Room Solutions</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.introImgCol}>
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80"
                alt="Clean Room Interior"
              />
            </div>
          </div>
          <div className={styles.introContent}>
            <p>
              L&amp;R Green India Pvt Ltd delivers high-performance prefabricated clean rooms
              designed for industries that demand precise environmental control and
              contamination-free conditions. Built using advanced modular construction
              techniques, our clean rooms are engineered to maintain strict standards of air
              quality, temperature, and hygiene, making them ideal for critical applications
              across various sectors.
            </p>
            <p>
              Our solutions combine durability, flexibility, and efficiency, allowing for
              quick installation and easy scalability based on project requirements. With a
              focus on compliance and operational reliability, we ensure that every clean room
              meets industry regulations while providing a safe, controlled, and productive
              working environment.
            </p>
            <button className={styles.btnSecondary}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>

      {/* ── Clean Room Applications ── */}
      <section className={styles.applicationsSec}>
        <div className={styles.applicationsInner}>
          <div className={styles.applicationsLeft}>
            <h2 className={styles.secTitle}>
              Clean Room<br />
              <span>Applications</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Our prefabricated clean room solutions are designed to support a wide range
              of industries that require controlled, sterile, and contamination-free
              environments. With adaptable modular designs and precision engineering, these
              clean rooms ensure optimal performance across critical operations, helping
              maintain quality, safety, and compliance in every application.
            </p>
            <ul className={styles.appList}>
              {applications.map((a, i) => (
                <li key={i}>
                  <span className={styles.appBullet}>•</span> {a}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.applicationsImgCol}>
            <img
              src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=700&q=80"
              alt="Clean Room Applications"
            />
          </div>
        </div>
      </section>

      {/* ── Precision Clean Environments ── */}
      <section className={styles.precisionSec}>
        <div className={styles.precisionInner}>
          <div className={styles.precisionText}>
            <h2>
              Precision Clean<br />
              Environments
            </h2>
            <p>
              Clean rooms create controlled environments where even the smallest particles
              are managed with precision. Designed for critical operations, they ensure
              consistent air quality, temperature, humidity, and pressure — upholding strict
              standards of cleanliness, stability, and operational reliability across
              high-performance industries.
            </p>
          </div>
          <div className={styles.precisionImgCol}>
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=80"
              alt="Precision Clean Room"
            />
            <div className={styles.precisionWatermark}>CLEAN</div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Core Features of<br />
                <span>Clean Room Solutions</span>
              </h2>
              <div className={styles.featuresDivider} />
            </div>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featuresImgCol}>
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&q=80"
                alt="Clean Room Features"
              />
            </div>
            <div className={styles.featuresContent}>
              <p className={styles.featuresIntro}>
                Engineered components ensuring hygiene, precision, and reliable performance
                in controlled environments.
              </p>
              <ul className={styles.featureList}>
                {coreFeatures.map((f, i) => (
                  <li key={i}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{f.title}:</strong> {f.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Controlled Environment Benefits ── */}
      <section className={styles.benefitsSec}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsTopRow}>
            <div>
              <h2 className={styles.secTitle}>
                Controlled Environment<br />
                <span>Benefits</span>
              </h2>
              <div className={styles.featuresDivider} />
            </div>
            <p className={styles.benefitsDesc}>
              Our clean rooms ensure stable, controlled conditions for critical operations
              while meeting hygiene and compliance standards.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefitCards.map((card, i) => (
              <div
                key={i}
                className={`${styles.benefitCard} ${card.highlight ? styles.benefitCardActive : ""}`}
              >
                <div className={styles.benefitImgWrap}>
                  <img src={card.img} alt={card.title} />
                </div>
                <div className={styles.benefitCardBody}>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqInner}>
          <div className={styles.faqTopRow}>
            <div className={styles.faqLeft}>
              <span className={styles.faqBreadcrumb}>• Fqs</span>
              <h2 className={styles.secTitle}>
                Frequently Asked<br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqSubtext}>
              Essential answers to common questions about clean room design, functionality,
              and requirements.
            </p>
          </div>
          <div className={styles.faqContentRow}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqOpen : ""}`}
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "↑" : "↓"}</span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.faqImgCol}>
              <img
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80"
                alt="FAQ Clean Room"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Clean Room?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and fully customised
            Executive Clean Room tailored to your storage needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      {/* ── Let's Connect ── */}
      <div className={styles.letsConnect}>
        <div className={styles.letsConnectInner}>
          <h2>LET'S CONNECT L&amp;R GREEN INDIA</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CleanRoomPage;