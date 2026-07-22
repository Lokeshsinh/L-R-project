import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabSalesOffice.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Zap,
  Sparkles,
  Armchair,
  Expand,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import site1 from '../assets/LGFS/prefabsite/site1.png'
import site2 from '../assets/LGFS/prefabsite/site2.png'
import site3 from '../assets/LGFS/prefabsite/site3.png'
import site4 from '../assets/LGFS/prefabsite/site4.png'
import user1 from '../assets/LGFS/prefabsite/user1.png'
import user2 from '../assets/LGFS/prefabsite/user2.png'
import user3 from '../assets/LGFS/prefabsite/user3.png'
import user4 from '../assets/LGFS/prefabsite/user4.png'
import design from '../assets/LGFS/prefabsite/design.png'
import design1 from '../assets/LGFS/prefabsite/design1.png'

const PrefabSalesOffice = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Project Sales Offices",
      description:
        "Used by real estate developers as on-site offices to present projects, handle client meetings, and support marketing activities in a professional setup.",
    },
    {
      id: 2,
      image: user2,
      title: "Construction Site Offices",
      description:
        "Provides quick-to-install workspace for engineers and project teams, ensuring smooth site management and supervision at construction locations.",
    },
    {
      id: 3,
      image: user3,
      title: "Event & Exhibition Units",
      description:
        "Ideal for exhibitions, trade fairs, and promotional setups, offering fast installation with flexible layouts and branding options.",
    },
    {
      id: 4,
      image: user4,
      title: "Mobile & Retail Units",
      description:
        "Used for temporary corporate spaces, kiosks, and small retail outlets with easy relocation and minimal setup time.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is an LGSF sales office?",
      a: "An LGSF sales office is a factory-built, modular commercial structure constructed using Light Gauge Steel Framing (LGSF) technology and insulated sandwich panels, offering speed, durability, and premium design features.",
    },
    {
      id: 1,
      q: "How fast can an LGSF office be constructed?",
      a: "It can be installed much faster than conventional buildings due to prefabricated components and modular assembly.",
    },
    {
      id: 2,
      q: "3. Is an LGSF office durable?",
      a: "Yes, LGSF structures are highly durable, corrosion-resistant, and engineered to withstand extreme weather conditions, including high winds and seismic activity.",
    },
    {
      id: 3,
      q: "Can LGSF offices be customized?",
      a: "Yes, they can be fully customized in terms of layouts, interior finishes, glass facades, electrical fittings, and branding requirements.",
    },
    {
      id: 4,
      q: "Are LGSF offices suitable for temporary use?",
      a: "Yes, they are highly suitable for temporary use as they can be easily dismantled, transported, and re-erected at a new site with minimal waste.",
    },
  ];


  const processCards = [
    {
      icon: <Zap size={42} strokeWidth={1.7} />,
      title: "Requirement Analysis",
      description:
        "Understanding client needs, space planning, and site conditions to define project scope and functionality.",
    },
    {
      icon: <Sparkles size={42} strokeWidth={1.7} />,
      title: "Structural Engineering",
      description:
        "Designing safe and efficient steel frameworks that ensure strength, stability, and compliance with standards.",
      active: true,
    },
    {
      icon: <Armchair size={42} strokeWidth={1.7} />,
      title: "On-Site Installation",
      description:
        "Quick assembly of prefabricated modules, panels, and finishes at the project location for fast execution.",
    },
    {
      icon: <Expand size={42} strokeWidth={1.7} />,
      title: "Final Handover",
      description:
        "Quality inspection, finishing works, and delivery of a fully ready-to-use LGSF office space.",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Modern LGSF Prefabricated  <br />
            <span>Sales Offices
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Fast, durable, and sustainable workspace solutions for commercial projects.
            Built using Light Gauge Steel Framing technology for rapid deployment and premium aesthetics.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>







      {/* ── INTRO ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            LGSF Prefabricated<br />
            <span>Sales Offices</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              LGSF (Light Gauge Steel Frame) prefabricated sales offices are modern, rapidly assembled commercial
              spaces designed using lightweight yet high-strength steel sections. These structures are ideal for
              both temporary and permanent use, offering faster construction, better durability, and high design
              flexibility compared to conventional building methods. This enables modern, scalable and efficient
              workspace solutions tailored for fast-growing commercial needs.
            </p>
            <p>
              On average, LGSF construction is significantly faster than traditional methods, making it highly
              suitable for real estate developers, exhibitions, and on-site project offices. This significantly
              improves project timelines and overall operational efficiency, ensuring quicker project delivery and
              improved workflow efficiency.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.interiorCard}>
            <div className={styles.leftAccent}></div>

            <div className={styles.imageBox}>
              <img
                src={site2}
                alt="Interior"
                className={styles.cardImage}
              />
            </div>

          </div>
        </div>
      </section>



      {/* ── APPLICATIONS ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Applications of LGSF<br />
              <span>Prefab Office Structures</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            LGSF office structures are versatile and widely used in modern construction
            and commercial environments. Their modular design allows them to be adapted
            quickly for different functional requirements.
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




      {/* --------prefab office site ----------------- */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Advantages of LGSF<br />
            <span>Prefab Office Structures</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.interiorImageWrapper}>
            <div className={styles.interiorSideStrip}></div>
            <div className={styles.interiorImageContainer}>
              <img
                src={site3}
                alt="Interior"
                className={styles.interiorImage}
              />
            </div>
          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                LGSF homes offer unmatched speed, strength, and sustainability, making them a
                future-ready construction solution. Their lightweight yet durable structure
                ensures faster construction, reduced costs, and long-term performance with minimal maintenance.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rapid Deployment</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Professional Aesthetics</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Design Flexibility</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Durability & Safety</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Sustainable & Modular Benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R LGSF Prefabricated Sales Offices  </h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Manufacturing &<br />
              Service Providers
            </h2>
            <p>
              LGSF sales office systems are delivered by specialized prefabrication companies
              that manage the entire lifecycle of the project, including structural design and
              engineering, factory fabrication of steel frames, paneling and interior finishing,
              on-site assembly and installation, and complete turnkey project delivery to ensure
              high-quality execution and ready-to-use office spaces.
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



      {/* ── DESIGN & PROJECT WORKFLOW ── */}
      <section className={styles.sieWorkFlow}>
        <div className={styles.siteWorkFlex}>
          <div className={styles.siteWorkTitle}>
            <h2>Design & Project <br /><span>Workflow</span></h2>
            <div className={styles.siteLine}></div>
          </div>
          <p>The LGSF design and execution process follows a structured workflow that
            ensures precision, quality, and fast project delivery from concept to completion.</p>
        </div>
        <div className={styles.processCardsGrid}>
          {processCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.processItemCard} ${card.active ? styles.processCardActive : ""
                }`}
            >
              <span className={styles.processHoverBackground}></span>
              <div className={styles.processIconWrapper}>
                {card.icon}
              </div>
              <div className={styles.processTextContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ── WHY CHOOSE ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose LGSF <br /><span>Prefab Sale Office ?</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>LGSF construction offers a perfect balance of speed, strength, and sustainability.
              It reduces project delays, minimizes material wastage, and provides a modern architectural
              appearance suitable for premium commercial branding. It also ensures a professional
              and future-ready workspace environment for modern businesses.</p>
            <p>This makes it especially suitable for fast-track commercial and project-based office
              requirements where efficiency, quality, and rapid execution are essential for timely
              project delivery. LGSF prefabricated sales offices are the future of fast-track commercial
              construction. With flexibility, durability, and cost efficiency, they provide an ideal
              solution for modern business environments requiring quick deployment and high-quality infrastructure.</p>
          </div>
          <div className={styles.showcaseFrame}>
            <div className={styles.showcaseRibbon}></div>
            <div className={styles.showcaseImageWrapper}>
              <img
                src={site4}
                alt="Interior"
                className={styles.showcaseImage}
              />
            </div>
          </div>
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
          <p>LGSF prefabricated sales offices are fast, modern workspace structures
            offering flexibility, durability, and quick execution. Below are FAQs.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={site1} alt="warehouse" />
          </div>
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
        </div>
      </section>




      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your LGSF Prefab Sales Offices Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized insulated
          Prefab Sales Offices solutions tailored to your site needs.
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

export default PrefabSalesOffice;
