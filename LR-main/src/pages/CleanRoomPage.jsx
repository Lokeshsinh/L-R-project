import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/CleanRoom.module.css";
import {
  ArrowRight, Plus, X, ArrowUpRight,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import clean1 from '../assets/PREFAB/cleanroom/clean1.png'
import clean2 from '../assets/PREFAB/cleanroom/clean2.png'
import clean3 from '../assets/PREFAB/cleanroom/clean3.png'
import clean4 from '../assets/PREFAB/cleanroom/clean4.png'
import design from '../assets/PREFAB/cleanroom/design.png'
import design1 from '../assets/PREFAB/cleanroom/design1.png'
import user1 from '../assets/PREFAB/cleanroom/user1.png'
import user2 from '../assets/PREFAB/cleanroom/user2.png'
import user3 from '../assets/PREFAB/cleanroom/user3.png'
import user4 from '../assets/PREFAB/cleanroom/user4.png'
// ─── DATA ────────────────────────────────────────────────────────────────────




const faqs = [
  {
    id: 1,
    q: "What is a clean room?",
    a:
      "A clean room is a controlled environment designed to minimize airborne particles, contaminants, temperature, and humidity, ensuring safe and precise manufacturing processes.",
  },
  {
    id: 2,
    q: "Which industries use clean rooms?",
    a:
      "Clean rooms are widely used in pharmaceutical manufacturing, medical device production, electronics, biotechnology, laboratories, food processing, and semiconductor industries.",
  },
  {
    id: 3,
    q: "How is air quality maintained in a clean room?",
    a:
      "Air quality is maintained using HEPA or ULPA filtration systems, controlled airflow, positive air pressure, and regular monitoring to prevent contamination.",
  },
  {
    id: 4,
    q: "Why is temperature and humidity control important?",
    a:
      "Maintaining stable temperature and humidity helps protect sensitive products, improves manufacturing accuracy, and ensures compliance with industry standards.",
  },
  {
    id: 5,
    q: "Are prefabricated clean rooms customizable?",
    a:
      "Yes, prefabricated clean rooms can be customized with different layouts, wall panels, filtration systems, lighting, doors, and utilities to meet specific operational requirements.",
  },
];



const galleryCards = [
  {
    id: 1,
    image: user1,
    title: "Air Quality Standards",
    description:
      "Maintains clean, particle-controlled air using advanced filtration systems to ensure a contamination-free environment.",
  },
  {
    id: 2,
    image: user2,
    title: "Temperature Control",
    description:
      "Ensures consistent temperature levels to support sensitive processes and maintain product integrity.",
  },
  {
    id: 3,
    image: user3,
    title: "Humidity Regulation",
    description:
      "Controls moisture levels to prevent damage, improve stability, and support precise operational conditions.",
  },
  {
    id: 4,
    image: user4,
    title: "Contamination Prevention",
    description:
      "Minimizes the risk of pollutants and microbes through sealed structures and controlled airflow systems.",
  },
];
// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const CleanRoomPage = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Precision-Controlled Prefabricated<br />
            <span>Clean Room Solutions
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green India Pvt Ltd delivers advanced prefabricated clean rooms designed for
            industries that demand controlled, contamination-free environments.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* ── Our Clean Room Solutions ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Our Clean <br /><span>Room Solutions</span>

          </h2>
          <div className={styles.introLine} />
        </div>
        <div className={styles.introContainer}>
          <div className={styles.cleanContainer}>
            <div className={styles.backgroundShape}></div>
            <div className={styles.imageCard}>
              <img src={clean2} alt="error" />
            </div>

          </div>
          <div className={styles.introText}>
            <p>
              L&R Green India Pvt Ltd delivers high-performance prefabricated clean rooms designed for industries
              that demand precise environmental control and contamination-free conditions. Built using advanced modular
              construction techniques, our clean rooms are engineered to maintain strict standards of air quality,
              temperature, and hygiene, making them ideal for critical applications across various sectors.
            </p>
            <p>
              Our solutions combine durability, flexibility, and efficiency, allowing for quick installation and
              easy scalability based on project requirements. With a focus on compliance and operational reliability,
              we ensure that every clean room meets industry regulations while providing a safe, controlled,
              and productive working environment.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>

        </div>
      </section>







      {/* ── Clean Room Applications ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Clean Room <br /> <span>Applications</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>Our prefabricated clean room solutions are designed to support a wide range of industries
              that require controlled, sterile, and contamination-free environments. With adaptable modular
              designs and precision engineering, these clean rooms ensure optimal performance across critical
              operations, helping maintain quality, safety, and compliance in every application.</p>
            <ul>
              <li>Pharmaceutical manufacturing</li>
              <li>Medical device production</li>
              <li>Electronics assembly</li>
              <li>Laboratories</li>
              <li>Food processing</li>
            </ul>
          </div>
          <div className={styles.showcase}>
            <div className={styles.backdrop}></div>
            <div className={styles.frame}>
              <img src={clean3} alt="Clean preview" className={styles.asset} />
            </div>
          </div>
        </div>
      </section>








      {/* ── Precision Clean Environments ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Clean Room</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Precision Clean<br />
              Environments
            </h2>
            <p>
              Clean rooms create controlled environments where even the smallest particles are
              managed with precision. Designed for critical operations, they ensure consistency,
              protect sensitive processes, and maintain uncompromised standards of cleanliness,
              stability, and operational reliability across high-performance industries.
            </p>
            <div className={styles.LastImage}>
              <img src={design1} alt="png" />
            </div>
          </div>
          <div className={styles.mfgImgWrapper}>
            <img
              src={design}
              alt="Manufacturing"
            />
          </div>
        </div>
      </section>





      {/* ── Core Features ── */}
      <section className={styles.cleanroomSection}>
        <div className={styles.headerGroup}>
          <h2>Core Features of <br /> <span>Clean Room Solutions</span></h2>
          <div className={styles.dividerLine}></div>
        </div>

        <div className={styles.contentLayout}>
          <div className={styles.imageContainer}>
            <div className={styles.accentBackdrop}></div>
            <div className={styles.imageFrame}>
              <img src={clean4} alt="Clean room application preview" className={styles.previewImage} />
            </div>
          </div>
          <div className={styles.textContent}>
            <p>
              Engineered components ensuring hygiene, precision, and reliable performance in controlled environments.
            </p>
            <ul className={styles.featureList}>
              <li><strong>PUF Insulated Panels:</strong>Provides insulation, maintains temperature,
                improves efficiency, ensures durability.</li>
              <li><strong>Seamless Internal Finishing:</strong>Smooth surfaces prevent dust, enable
                cleaning, ensure hygiene standards.</li>
              <li><strong>HEPA Filtration Compatibility:</strong> Supports HEPA filters, removes particles,
                ensures clean air quality.</li>
              <li><strong>Controlled Airflow Systems: </strong>Maintains airflow, reduces contamination,
                ensures consistent environment control.</li>
              <li><strong>Anti-Bacterial Wall Panels:</strong>Prevents microbes, improves hygiene,
                supports sterile clean room conditions.</li>
              <li><strong>Hygienic Flooring Systems:</strong>Durable flooring, easy cleaning,
                resists dust, maintains hygiene.</li>

            </ul>
          </div>
        </div>
      </section>






      {/* ── Controlled Environment Benefits ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Controlled Environment  <br />
              <span>Benefits</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Our clean rooms ensure stable, controlled conditions for critical
            operations while meeting hygiene and compliance standards.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryCards.map((card) => (
            <div key={card.id} className={styles.galleryCard}>
              <div className={styles.galleryImageWrapper}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.galleryImage}
                />
              </div>

              <div className={styles.galleryContent}>
                <h3 className={styles.galleryTitle}>
                  {card.title}
                </h3>

                <p className={styles.galleryDescription}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Get answers to common questions about L&R industrial sheds, including design, durability, and installation.</p>
        </div>
        <div className={styles.faqBody}>
          {/*  */}
          <div className={styles.container}>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                  }`}
              >
                <div
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.q}</h3>

                  <span className={styles.icon}>
                    {activeIndex === index ? (
                      <X size={28} strokeWidth={2} />
                    ) : (
                      <Plus size={28} strokeWidth={2} />
                    )}
                  </span>
                </div>

                <div
                  className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ""
                    }`}
                >
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.faqImg}>
            <img src={clean1} alt="warehouse" />
          </div>
        </div>
      </section>






      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Clean Room?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Clean Room tailored to your storage needs.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBox}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default CleanRoomPage;