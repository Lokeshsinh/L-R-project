import React, { useState, useEffect } from "react";
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
  Building, Check, ChevronLeft, ChevronRight

} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import labour1 from '../assets/PREFAB/labour/labour1.png'
import labour2 from '../assets/PREFAB/labour/labour2.png'
import labour3 from '../assets/PREFAB/labour/labour3.png'
import labour4 from '../assets/PREFAB/labour/labour4.png'
import design from '../assets/PREFAB/labour/design.png'
import design1 from '../assets/PREFAB/labour/design1.png'
import user1 from '../assets/PREFAB/labour/user1.png'
import user2 from '../assets/PREFAB/labour/user2.png'
import user3 from '../assets/PREFAB/labour/user3.png'
import user4 from '../assets/PREFAB/labour/user4.png'


const benefits = [
  {
    id: 1,
    number: "01",
    title: "Faster Project Setup",
    desc: "Reduces time required to establish worker accommodation quickly and efficiently.",
  },
  {
    id: 2,
    number: "02",
    title: "Lower Overall Cost",
    desc: "Minimizes labor-intensive on-site construction activities and expenses.",
  },
  {
    id: 3,
    number: "03",
    title: "Reusable Investment",
    desc: "Units can be dismantled and reused at multiple project locations.",
  },
  {
    id: 4,
    number: "04",
    title: "Environmentally Responsible",
    desc: "Reduced material waste compared to traditional construction methods.",
  },
  {
    id: 5,
    number: "05",
    title: "Structured Planning",
    desc: "Optimized layouts for accommodation, sanitation, and utilities.",
  },
  {
    id: 6,
    number: "06",
    title: "Long Service Life",
    desc: "Strong steel frameworks ensure durability for extended usage.",
  },
];
const PrefabLabour = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate = useNavigate();
  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const resize = () => {
      setVisibleCards(getVisibleCards());
      setIndex(0);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(0, benefits.length - visibleCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
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

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Installed Rapidly",
      description:
        "Pre-engineered components reduce on-site time dramatically.",
    },
    {
      id: 2,
      image: user2,
      title: "Relocated Efficiently",
      description:
        "Dismantle, transport and reassemble at the next site.",
    },
    {
      id: 3,
      image: user3,
      title: "Reused Across Projects",
      description:
        "Dismantle, transport and reassemble at the next site.",
    },
    {
      id: 4,
      image: user4,
      title: "Modified or Expanded",
      description:
        "Add blocks and reconfigure as workforce grows.",
    },
  ];


  const keyFacilities = [
    'Sleeping Areas',
    'Washroom Blocks',
    'Dining Areas',
    'Drinking Water',
    'Electrical Fittings',
    'Ventilation Systems',
  ];

  const materialOptions = [
    'PUF (Polyurethane Foam) Insulated Panels',
    'Pre-Painted Galvanized Sheets (PPGI)',
    'Cement-Based Panels',
    'Composite Boards',
    'PVC-Based Partitions',
    'Aerated Lightweight Panels',
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
          <span className={styles.topLabel}>L&R PREFAB SOLAR INDIA PVT LTD</span>
          <h1 className={styles.mainTitle}>
            Prefab labour accommodation<br />
            <span>& Worker Accommodation
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Modular labour colonies engineered for rapid deployment, structural stability,
            and worker dignity  delivered and installed across India.
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
              Prefab Labour Accommodation by L&R Prefab Solar India Pvt Ltd provides fast, modular, and ready-to-install
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
            Every unit combines structural engineering with on-site practicality
            for fast install, long service life and easy relocation.

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
      <section className={styles.workforceSection}>
        <div className={styles.workforceHeader}>
          <h2>
            Facilities, Construction <br />
            <span>& Material Options</span>
          </h2>
          <div className={styles.workforceDivider} />
        </div>

        <div className={styles.workforceGrid}>


          <div className={styles.workforceText}>
            <p>
              Our prefabricated labour colonies are designed to deliver safe, comfortable, and efficient
              living spaces for workers at project sites, with durable, project-specific materials ensuring
              strength, insulation, and long-term performance in all conditions.
            </p>
            <div className={styles.facilitiesContainer}>
              {/* Column 1: Key Facilities */}
              <div className={styles.facilityColumn}>
                <h3 className={styles.columnTitle}>Key Facilities Included:</h3>
                <ul className={styles.facilityList}>
                  {keyFacilities.map((item, index) => (
                    <li key={index} className={styles.facilityItem}>
                      <Check className={styles.checkIcon} size={18} strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Material Construction Options */}
              <div className={styles.facilityColumn}>
                <h3 className={styles.columnTitle}>Material Construction Options:</h3>
                <ul className={styles.facilityList}>
                  {materialOptions.map((item, index) => (
                    <li key={index} className={styles.facilityItem}>
                      <Check className={styles.checkIcon} size={18} strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
          <div className={styles.workforceVisual}>
            <img src={labour4} alt="Prefab labour accommodation facility" className={styles.workforceImg} />
          </div>
        </div>
      </section>




      {/* ── Enhancing Worker Welfare ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>

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
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Mobility & Rapid <br />
              <span>Deployment Advantage</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Unlike traditional brick-and-mortar construction, our
            modular labour camps move with your projects.
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




      {/* ── Advantages ── */}
      <section className={styles.advantagesSec}>
        <div className={styles.advantagesInner}>
          <h2 >
            Advantages of Modular <br />
            <span>Labour Colonies</span>
          </h2>
          <div className={styles.advantagesDivider} />
        </div>

        <div className={styles.topBar}>
          <button className={styles.navBtn} onClick={prevSlide}>
            <ChevronLeft size={28} />
          </button>

          <button className={`${styles.navBtn} ${styles.active}`} onClick={nextSlide}>
            <ChevronRight size={28} />
          </button>
        </div>

        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {benefits.map((item) => (
              <div className={styles.card} key={item.id} style={{
                flex: `0 0 ${100 / visibleCards}%`,
                maxWidth: `${100 / visibleCards}%`,
              }}>
                <span className={styles.number}>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ── Applications ── */}
      <section className={styles.housingOverview}>
        <div className={styles.housingOverviewHeader}>
          <h2>
            Prefab Labour Accommodation<br />
            <span>& Workforce Housing</span>
          </h2>
          <div className={styles.housingOverviewDivider} />
        </div>

        <div className={styles.housingOverviewBody}>
          <div className={styles.housingOverviewMedia}>
            <img src={labour3} alt="Prefab labour accommodation facility" className={styles.housingOverviewImage} />
          </div>
          <div className={styles.housingOverviewContent}>
            <p>
              Prefab labour accommodation provides comfortable, durable, and cost-effective housing
              solutions for workers at construction, industrial, infrastructure, and remote project sites.
              These modular units are designed for quick installation with essential facilities and efficient
              space utilization.
            </p>
            <p>

              Built with strong steel structures and insulated panels, prefab workforce
              housing offers reliable protection, ventilation, and thermal comfort in
              demanding environments. The layouts can be customized with bedrooms, washrooms,
              dining areas, kitchens, and other facilities based on project requirements.
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
          <p>Quick answers covering design, usage, durability, customization, and
            advantages of Prefab Labour Accommodation and commercial applications.</p>
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
            <img src={labour1} alt="warehouse" />
          </div>
        </div>
      </section>







      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2>Smarter Workforce Facilities with L&R Prefab Solar India Pvt Ltd</h2>
        <p>
          Connect with us to explore scalable, durable workforce housing solutions tailored
          to your project — safe, cost-efficient and aligned with modern construction standards.

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

export default PrefabLabour;