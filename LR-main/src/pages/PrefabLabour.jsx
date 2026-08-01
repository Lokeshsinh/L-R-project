import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabLabour.module.css";
import {
  ArrowRight, Plus, X, ArrowUpRight, Hammer,
  Truck,
  ShieldCheck,
  MoveUpRight,
  Settings,
  Snowflake,
  Building,

} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import labour1 from '../assets/PREFAB/labour/labour1.png'
import labour2 from '../assets/PREFAB/labour/labour2.png'
import design from '../assets/PREFAB/labour/design.png'
import design1 from '../assets/PREFAB/labour/design1.png'
const PrefabLabour = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate = useNavigate();



  const features = [
    {
      icon: Hammer,
      title: "Modular & Fast Installation",
      description:
        "Pre-engineered components allow quick assembly with minimal site disruption.",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery & Installation",
      description:
        "Pre-engineered components allow quick assembly with minimal site disruption.",
      active: true,
    },
    {
      icon: ShieldCheck,
      title: "Designed for Structural Stability",
      description:
        "Pre-engineered components allow quick assembly with minimal site disruption.",
    },
    {
      icon: Hammer,
      title: "Cost-Effective & Scalable",
      description:
        "Economical solutions that expand with workforce strength and project phases.",
    },
    {
      icon: Building,
      title: "Fully Equipped Living Units",
      description:
        "Sleeping areas, washroom blocks, dining, drinking water, electrical fittings & ventilation.",
    },
    {
      icon: MoveUpRight,
      title: "Easy Relocation",
      description:
        "Dismantle and shift to new project locations — long-term asset value retained.",
    },
    {
      icon: Settings,
      title: "Customizable Layouts",
      description:
        "Pre-engineered components allow quick assembly with minimal site disruption.",
    },
    {
      icon: Snowflake,
      title: "Thermal Comfort & Insulation",
      description:
        "Economical solutions that expand with workforce strength and project phases.",
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
            Prefab labour accommodation<br />
            <span>& Worker Accommodation
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Modular labour colonies engineered for rapid deployment, structural stability,
            and worker dignity — delivered and installed across India.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>



      {/* ── Intro ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Prefab Labour Accommodation<br />
            <span>& Workforce Housing</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>

          <div className={styles.introImage}>
            <img src={labour2} alt="error" />
          </div>
          <div className={styles.introText}>
            <p>
              Prefab Labour Accommodation by L&R Green India Pvt Ltd provides fast, modular, and ready-to-install
              housing solutions for project workers. These units are designed for quick setup, making them ideal
              for construction, industrial, and remote-site projects where speed and efficiency are important.
            </p>
            <p>
              Built with strong and durable materials, the accommodation ensures safe and comfortable living spaces
              including sleeping, dining, and basic utility facilities. The design focuses on hygiene, stability,
              and worker comfort even in challenging site conditions.
            </p>
            <p>
              These structures are fully scalable, cost-effective, and easily relocatable, allowing them to be
              reused across multiple project sites. They help improve workforce management, reduce setup time,
              and support smooth project execution.
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




      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresInner}>
          <div className={styles.featureText}>
            <h2 >
              Key Features of <br />
              <span>Labour Camps</span>
            </h2>
            <div className={styles.featuresDivider} />
          </div>
          <p>
            Every L&R Labour Camp is engineered with structural strength, rapid
            deployment, and worker comfort as core priorities.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`${styles.featureCard} ${feature.active ? styles.active : ""
                  }`}
              >
                <div className={styles.iconBoxs}>
                  <Icon size={38} strokeWidth={1.7} />
                </div>

                <h3 className={styles.title}>{feature.title}</h3>

                <p className={styles.description}>
                  {feature.description}
                </p>

                {/* Hover Overlay */}
                <span className={styles.hoverBg}></span>
              </div>
            );
          })}
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
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>Prefab labour accommodation</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Enhancing Worker <br />
              Welfare & Productivity
            </h2>
            <p>
              Well-planned labour accommodation plays a vital role in improving worker satisfaction and overall
              project efficiency. By providing organized, hygienic, and secure living spaces, our labour camps
              help reduce travel time, boost morale, enhance productivity, and ensure better supervision,
              coordination, and compliance with safety standards—all while prioritizing workforce comfort,
              dignity, and practical site operations.
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
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Essential answers to common questions about clean room design, functionality, and benefits.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={labour1} alt="warehouse" />
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







      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2>Build smarter workforce facilities with L&R Green India Pvt Ltd</h2>
        <p>
          Connect with us to explore scalable, durable workforce housing solutions tailored
          to your project — safe, cost-efficient and aligned with modern construction standards.

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

export default PrefabLabour;