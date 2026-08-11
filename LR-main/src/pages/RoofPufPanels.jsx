import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RoofPufPanels.module.css";
import {
  ArrowRight, ArrowUpRight, Paperclip, Plus, X, CheckCircle2,
} from "lucide-react";
import roof1 from '../assets/panel/rufpanel/roof1.png'
import roof2 from '../assets/panel/rufpanel/roof2.png'
import roof4 from '../assets/panel/rufpanel/roof4.png'
import roof5 from '../assets/panel/roof/roof5.png'
import roof6 from '../assets/panel/rufpanel/roof6.png'
import roof7 from '../assets/panel/rufpanel/roof7.png'
import roof8 from '../assets/panel/rufpanel/roof8.png'

import design from '../assets/panel/rufpanel/design.png'
import design1 from '../assets/panel/rufpanel/design1.png'
import { useNavigate } from 'react-router-dom'
const RoofPufPanels = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      number: "01",
      title: "Industrial Sheds",
      desc: "Manufacturing and production units demanding stable thermal envelopes.",
    },
    {
      number: "02",
      title: "Warehouses & Logistics",
      desc: "Temperature stability for stored goods and high-throughput hubs.",
      active: true,
    },
    {
      number: "03",
      title: "Cold Storage",
      desc: "Insulation-critical buildings for controlled-temperature environments.",
    },
    {
      number: "04",
      title: "Pre-Engineered Buildings",
      desc: "Integrated roofing for modular and PEB construction systems.",
    },
    {
      number: "05",
      title: "Commercial Complexes",
      desc: "Lightweight insulated solutions for retail, office and mixed-use.",
    },
    {
      number: "06",
      title: "Agricultural Storage",
      desc: "Protection from heat and moisture for produce and equipment.",
    },
  ];



  const cards = [
    {
      title: "30 + 30 mm",
      thickness: "Total thickness: 60 mm",
      description:
        "Suitable for moderate insulation requirements and light industrial structures.",
    },
    {
      title: "50 + 30 mm",
      thickness: "Total thickness: 80 mm",
      description:
        "Wipe-clean surfaces and durable finishes simplify daily upkeep.",
      active: true,
    },
    {
      title: "80 + 30 mm",
      thickness: "Total thickness: 110 mm",
      description:
        "Designed for high thermal insulation needs in hot or cold climates.",
    },
    {
      title: "100 + 30 mm",
      thickness: "Total thickness: 130 mm",
      description:
        "Recommended for temperature-sensitive environments and high-performance roofing.",
    },
  ];

  const specifications = [
    {
      feature: "Conventional Roofing",
      value: "Roof PUF Panels",
    },
    {
      feature: "Longer installation time",
      value: "Rapid installation",
    },
    {
      feature: "Heavy structure",
      value: "Lightweight system",
    },
    {
      feature: "Higher maintenance",
      value: "Low maintenance",
    },
    {
      feature: "Poor energy efficiency",
      value: "Energy-saving solution",
    },
  ];
  const faqs = [
    {
      id: 0,
      q: "What are Roof PUF panels used for?",
      a: "Roof PUF panels are used for warehouses, industrial units, cold storage, food processing facilities, PEBs, and commercial buildings.",
    },
    {
      id: 1,
      q: "How do Roof PUF panels save energy?",
      a: "Their thermal insulation reduces heat transfer, lowering cooling requirements and improving energy efficiency.",
    },
    {
      id: 2,
      q: "Are Roof PUF panels fire-retardant?",
      a: "Yes, fire-retardant options are available to provide enhanced safety and protection.",
    },
    {
      id: 3,
      q: "What thickness options are available?",
      a: "Panels are available in various thicknesses based on thermal insulation and project requirements.",
    },
    {
      id: 4,
      q: "Do you provide customized lengths?",
      a: "Yes, Roof PUF panels can be manufactured in customized lengths to suit specific project requirements.",
    },
  ];


  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R PREFAB SOLAR INDIA PVT LTD</span>
          <h1 className={styles.mainTitle}>
            High-Performance<br />
            <span>Insulated Roofing Systems
            </span>
          </h1>
          <p className={styles.heroDesc}>
            High-performance insulated sandwich roofing made with
            PPGI sheets and a high-density polyurethane core.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>






      {/* ── ADVANCED INSULATED SOLUTIONS ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Advanced Insulated <br />
            <span>Solutions</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.metalPanelWrapper}>
            <div className={styles.metalPanelBackground}></div>

            <div className={styles.metalPanelImageBox}>
              <img
                src={roof1}
                alt="Metal Panel"
                className={styles.metalPanelImage}
              />
            </div>
          </div>
          <div className={styles.introText}>
            <p>
              Wall PUF panels are advanced insulated sandwich panels designed for modern construction needs.
              They consist of strong metal facings bonded with a high-density polyurethane foam core, creating
              a rigid structure that delivers excellent thermal insulation and overall stability. These panels
              help maintain consistent indoor temperatures while enhancing the durability of industrial and commercial buildings.
            </p>
            <p>
              The construction of Wall PUF panels includes inner and outer metal sheets—typically made from PPGI or
              GI—combined with a high-performance polyurethane foam core. A tongue-and-groove interlocking system
              ensures tight panel joints, allowing quick installation, improved airtightness, and a seamless finished appearance.
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



      {/* ── COMPOSITION & APPLICATIONS ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Roof PUF Panels<br />
            <span>Composition & Applications</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Roof PUF panels are insulated sandwich panels consisting of external pre-painted galvanized
                iron (PPGI) sheet, high-density polyurethane foam core, internal PPGI sheet, and an interlocking
                joint system. The polyurethane core acts as a high-performance insulation layer that minimizes
                heat transfer while maintaining structural rigidity.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} color="white" />
                  </div>
                  <p className={styles.featureText}>Pre-engineered buildings (PEB)</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Industrial sheds</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Warehouses</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Cold rooms</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Modular cabins</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Commercial buildings</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Clean room facilities</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.RoofImage}>
            <img src={roof2} alt="error" />
          </div>
        </div>
      </section>



      <section className={styles.AvableSection}>
        <div className={styles.AvableFlex}>
          <div className={styles.AvableText}>
            <h2>Available Thickness <br /> <span>Combinations</span></h2>
            <div className={styles.AvableLine}></div>
          </div>
          <p>The +30 mm layer ensures structural rigidity while maintaining
            insulation stability across the panel.</p>
        </div>

        <div className={styles.thicknessSection}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.thicknessCard} ${card.active ? styles.activeCard : ""
                }`}
            >
              <h2>{card.title}</h2>
              <h4>{card.thickness}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>





      {/* ── AVAILABLE THICKNESS COMBINATIONS ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Features, Performance<br /><span>& Safety</span></h2>
          <div className={styles.AvableLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.safetyImage}>
            <img src={roof4} alt="error" />
          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>Roof PUF panels are designed for high performance, combining thermal insulation,
              structural strength, and long-lasting durability. The high-density PUF core reduces
              heat transfer, while the strong panel structure withstands wind loads and environmental
              stress. A secure interlocking system ensures effective waterproofing and leak protection.</p>
            <p>These panels also offer enhanced safety with fire-retardant options, along with corrosion
              and UV resistance for extended service life. Their low-maintenance design and excellent
              insulation performance help improve energy efficiency, indoor comfort, and HVAC effectiveness.</p>
          </div>

        </div>
      </section>



      {/* ── FEATURES, PERFORMANCE & SAFETY ── */}


      {/* ── WEATHERPROOF BANNER ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Weatherproof Performance<br />
              & Fast Installation Benefits
            </h2>
            <p>
              Roof PUF panels provide strong protection against rain, wind, UV exposure, corrosion,
              and moisture, with an advanced interlocking system that ensures a leak-proof and durable
              roofing solution. They are also factory-made for precision, allowing fast installation
              with minimal labor, reduced on-site work, and quicker project completion.
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

      {/* -----cards--------------- */}
      <section className={styles.roofPuf}>
        <div className={styles.roofPufText}>
          <h2>Applications of  <br /><span>Roof PUF Panels</span></h2>
          <div className={styles.AvableLine}></div>
        </div>

        <div className={styles.applicationGrid}>
          {applications.map((item, index) => (
            <div
              key={index}
              className={`${styles.applicationCard} ${item.active ? styles.activeCard : ""
                }`}
            >
              <span className={styles.cardNumber}>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>






      {/* ── APPLICATIONS OF ROOF PUF PANELS (GRID) ── */}
      <section className={styles.roofPanelSection}>
        <div className={styles.roofPanelHeading}>
          <h2>
            Sustainable Performance
            <br />
            <span>& Customization Options</span>
          </h2>
          <div className={styles.AvableLine}></div>
        </div>

        <div className={styles.roofPanelContent}>

          <div className={styles.roofPanelText}>
            <p>
              Roof PUF panels support sustainable construction by reducing energy consumption,
              improving thermal efficiency, lowering operational costs, and minimizing carbon
              footprint. Their energy-efficient design helps maintain stable indoor conditions,
              making buildings more eco-friendly and cost-effective. The use of recyclable steel
              components further promotes environmentally responsible construction practices.
            </p>

            <p>
              L&R Prefab Solar India also provides complete customization to meet different project needs, including
              thickness configuration (30+30, 50+30, 80+30, 100+30 mm), PPGI sheet thickness options ranging
              from 0.3 to 0.8 mm, color selection, panel length as per project requirements, roof profile design,
              and insulation density adjustments. Each roofing system is carefully tailored based on location,
              climate conditions, and structural requirements to ensure maximum performance and efficiency.
            </p>
          </div>
          <div className={styles.roofPanelImageCards}>
            <img src={roof5} alt="Roof Panel" />
          </div>
        </div>
      </section>







      {/* ── ADVANTAGES OVER CONVENTIONAL ROOFING ── */}
      <section className={styles.TechUser}>
        <div className={styles.TechText}>
          <h2>Advantages Over <br /><span>Conventional Roofing</span></h2>
          <div className={styles.TechLine}></div>
        </div>
        <div className={styles.TechFlex}>
          <div className={styles.roofCard}>
            <img src={roof8} alt="Roof Panel" className={styles.roofCard__img} />
            <div className={styles.roofCard__dimmer} />
          </div>
          <div className={styles.specificationTable}>
            {specifications.map((item, index) => (
              <div className={styles.tableRow} key={index}>
                <div className={styles.featureColumn}>
                  {item.feature}
                </div>

                <div className={styles.valueColumn}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── QUALITY ASSURANCE ── */}
      <section className={styles.roofApplicationSection}>
        <div className={styles.roofApplicationHeading}>
          <h2>Quality Assurance & Why <br /> <span>Choose L&R Green</span></h2>
          <div className={styles.roofApplicationLine}></div>
        </div>
        <div className={styles.hvacContentWrapper}>
          <div className={styles.hvacTextContainer}>
            <div className={styles.hvacContent}>
              <p>
                At L&R Prefab Solar India, Roof PUF panels undergo strict quality checks including material inspection, density
                testing, thickness verification, coating inspection, and dimensional accuracy, ensuring durable, reliable,
                and consistent performance.
              </p>

              <div className={styles.hvacFeatureList}>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Strict quality control with raw material inspection and testing checks</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Advanced manufacturing facility ensuring precision and consistent output</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Custom engineering support with ISO-aligned quality standards</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Pan-India supply with competitive pricing and timely delivery</p>
                </div>
              </div>
              <p>L&R Prefab Solar India India delivers durable, efficient panels with reliable
                quality and quick installation for modern construction.</p>
            </div>
          </div>
          <div className={styles.container}>
            <img src={roof7} alt="Roof Panel" className={styles.media} />
            <div className={styles.shade} />
          </div>

        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      {/* ── SECTION 8: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Get quick answers to common questions about Roof PUF Panels, including their
            applications, insulation, durability, customization, and performance.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={roof6} alt="warehouse" />
          </div>
          {/*  */}
          <div className={styles.containers}>
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
        <h2>Ready for Your Roof PUF Panels Solution?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated Roof PUF Panels solutions tailored to your site needs.
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

export default RoofPufPanels;
