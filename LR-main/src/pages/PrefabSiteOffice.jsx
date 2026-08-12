import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSiteOffice.module.css";
import {
  ArrowRight, Plus, X, ArrowUpRight, CheckCircle2, TimerReset,
  Wrench,
  Truck,
  Workflow,
  Store,
  Flame,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import site1 from '../assets/PREFAB/sitOffice/site1.png'
import site2 from '../assets/PREFAB/sitOffice/site2.png'
import site3 from '../assets/PREFAB/sitOffice/site3.png'
import site4 from '../assets/PREFAB/sitOffice/site4.png'
import site5 from '../assets/PREFAB/sitOffice/site5.jpg'
import design from '../assets/PREFAB/sitOffice/design.png'
import design1 from '../assets/PREFAB/sitOffice/design1.png'

// ─── DATA ────────────────────────────────────────────────────────────────────






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

const features = [
  {
    icon: <TimerReset size={52} strokeWidth={1.6} />,
    title: "Time Efficiency",
    description:
      "Factory-built modules reduce on-site construction time, allowing quick deployment.",
  },
  {
    icon: <Wrench size={52} strokeWidth={1.6} />,
    title: "Cost Optimization",
    description:
      "Lower labor demand and minimal wastage keep budgets in check.",
    active: true,
  },
  {
    icon: <Truck size={52} strokeWidth={1.6} />,
    title: "Easy Relocation",
    description:
      "Dismantle, transport and reuse across multiple project sites.",
  },
  {
    icon: <Workflow size={52} strokeWidth={1.6} />,
    title: "Custom-Built",
    description:
      "AC, washrooms, partitions and specialized fittings on demand.",
  },
  {
    icon: <Store size={52} strokeWidth={1.6} />,
    title: "Sustainable Build",
    description:
      "Minimal waste and efficient material usage by design.",
  },
  {
    icon: <Flame size={52} strokeWidth={1.6} />,
    title: "Weather & Fire Resistant",
    description:
      "Treated steel and durable panels for extreme conditions.",
  },
];
// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

const PrefabSiteOffice = () => {
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
          <span className={styles.topLabel}>L&R PREFAB SOLAR INDIA PVT LTD</span>
          <h1 className={styles.mainTitle}>
            Smart Prefabricated Site <br />
            <span>Office
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Durable, secure, and intelligently engineered modular cabins that power seamless
            on-site operations for infrastructure, solar, and industrial projects.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>






      {/* ── What Are Prefab ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What Are Prefabricated<br />
            <span>Site Office?</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              Prefabricated site office cabins are modular workspace units manufactured off-site
              in a controlled factory environment and then quickly installed at project locations.
              These cabins act as temporary administrative hubs for engineering, planning, coordination,
              and documentation work, helping ensure smooth and efficient project execution without delays.
            </p>
            <p>
              They are designed for fast installation and easy relocation, making them highly suitable for
              dynamic project sites. Built with factory-precision quality, these cabins offer reliable performance
              and are widely used across infrastructure and industrial projects where flexibility, speed, and
              organized workspace solutions are essential.
            </p>
            <button className={styles.btnOutline} onClick={() => {
              navigate("/contact");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          {/*  */}
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <img
                src={site2}
                alt="Interior"
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.bottomAccent}></div>
            </div>
          </div>
        </div>
      </section>





      {/* ── Key Features ── */}





      {/* ── Designed for Mobility ── */}
      <section className={styles.epsSection}>
        <div className={styles.epsHeading}>
          <h2>
            Designed for<br />
            <span>Mobility & Strength</span>
          </h2>
          <div className={styles.headingDivider}></div>
        </div>

        <div className={styles.epsContentWrapper}>
          <div className={styles.interiorCard}>
            <div className={styles.interiorWrapper}>
              <img
                src={site5}
                alt="Interior"
                className={styles.interiorMedia}
              />
              <div className={styles.interiorOverlay}></div>
              <div className={styles.interiorFooterAccent}></div>
            </div>
          </div>
          {/*  */}
          <div className={styles.epsContent}>
            <p>
              Our portable office cabins are built using high-grade steel frameworks for structural
              stability and durability. The exterior is engineered for weather resistance, while
              interiors are optimized for professional functionality.
            </p>
            <p><strong>Key structural features:</strong></p>
            <ul>

              <li>Heavy-duty steel base frame</li>
              <li>Corrosion-resistant treatment</li>
              <li>Insulated wall and roof panels</li>
              <li>Optimized interior finishing</li>
              <li>Stackable and relocatable design</li>
              <li>Safe access systems</li>
            </ul>
            <p>These cabins are engineered to withstand challenging site
              conditions while maintaining internal comfort.</p>
          </div>
        </div>
      </section>




      {/* ── Why Choose ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose L&R  <br /><span>Green India Pvt Ltd</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>L&R Green India Pvt Ltd is a trusted provider of high-quality prefabricated site office
              cabins built with premium materials and advanced engineering. We focus on strong structural
              design, safety, and long-lasting performance to ensure reliable use in demanding project
              environments, with consistent quality across all modular solutions.</p>
            <p>We also offer fully customizable designs, fast production, and timely delivery to match
              project schedules. Supported by advanced fabrication, seismic-resistant engineering, and
              dedicated customer service, we provide a smooth process from design to installation,
              making us a dependable partner for infrastructure and industrial needs.</p>
          </div>
          {/*  */}
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseCard__frame}>
              <img
                src={site3}
                alt="Interior"
                className={styles.showcaseCard__image}
              />
              <div className={styles.showcaseCard__shade}></div>
              <div className={styles.showcaseCard__bar}></div>
            </div>
          </div>
        </div>
      </section>







      {/* ── Advantages ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Built for Growing <br />
              Project Demands
            </h2>
            <p>
              As projects expand and timelines get shorter, the need for fast and reliable site infrastructure
              is increasing. Our modular site office cabins provide comfortable, organized, and efficient
              workspaces at project sites, offering durability and reusability that make them a smart long-term
              solution for contractors and developers.
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


      {/* ── Applications ── */}
      <section className={styles.applicationsSec}>
        <div className={styles.applicationsImgCol}>
          <div className={styles.applicationsContent}>
            <h2 >
              Prefab Site Office<br />
              <span>Applications</span>
            </h2>
            <div className={styles.applicationsDivider} />
          </div>
          <p>
            The Prefab Site Office Process ensures efficient workspace delivery through
            smart design, precision panel manufacturing, quality assembly, and quick on-site installation.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={`${styles.featureCards} ${item.active ? styles.activeCard : ""
                }`}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>


      </section>




      <section className={styles.conatineUser}>
        <div className={styles.containerMax}>
          <h2>
            Prefab Site Office <br />
            <span>Applications</span>
          </h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.applicationsCard}>
            <div className={styles.applicationsViewport}>
              <img
                src={site4}
                alt="Interior"
                className={styles.applicationsImage}
              />
              <div className={styles.applicationsOverlay}></div>
              <div className={styles.applicationsBottomBar}></div>
            </div>
          </div>
          <div className={styles.containerText}>
            <p>L&R Green India Pvt Ltd prefabricated site office cabins provide
              fast and reliable workspace solutions for a wide range of industries at project sites.</p>
            <div className={styles.applicationFeatureList}>
              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Infrastructure & highway projects
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Labour accommodation units
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Industrial construction sites
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Project control rooms
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Commercial development projects
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Solar power plants
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Multi-story modular office buildings
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Temporary event offices
                </p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                </div>
                <p className={styles.applicationFeatureText}>
                  Sales & marketing offices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* ── Built for Growing Demands ── */}





      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Prefab site office cabins are modern modular workspace solutions designed for quick installation,
            flexibility, and efficient on-site project management across industries.</p>
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
            <img src={site1} alt="warehouse" />
          </div>
        </div>
      </section>







      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready for Your Prefab Site Office ?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized Prefab Site office solutions tailored to your site needs.
        </p>
        <button className={styles.contactBtn} onClick={() => {
          navigate("/contact");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}>
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

export default PrefabSiteOffice;