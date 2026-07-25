import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RockwoolPanels.module.css";
import {
  ArrowRight, ArrowUpRight, Paperclip, Plus, X, Flame,BriefcaseBusiness, Layers,Fan,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import rock1 from '../assets/panel/rookwall/roock1.png'
import rock2 from '../assets/panel/rookwall/rock2.png'
import rock3 from '../assets/panel/rookwall/rock3.png'
import rock4 from '../assets/panel/rookwall/rock4.png'
import rock5 from '../assets/panel/rookwall/rock5.png'
import rock6 from '../assets/panel/rookwall/rock6.png'
import rock7 from '../assets/panel/rookwall/rock7.png'

import design from '../assets/panel/rookwall/design.png'
import design1 from '../assets/panel/rookwall/design1.png'

const RockwoolPanels = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const hardwareFeatures = [
    {
      icon: <Flame />,
      title: "Fire Safety",
      description:
        "Withstands temperatures above 1000°C without spreading flames or emitting toxic smoke.",
    },
    {
      icon: <Layers />,
      title: "Acoustic Performance",
      description:
        "Reduces noise levels and improves sound comfort in enclosed spaces.",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Thermal Efficiency",
      description:
        "Maintains stable indoor temperatures and reduces energy costs.",
    },
    {
      icon: <Fan />,
      title: "Durability & Sustainability",
      description:
        "Moisture-resistant, corrosion-resistant, and recyclable material for long-term use.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "What makes Rockwool panels highly fire-resistant?",
      a: "Rockwool is made from natural volcanic rock (basalt) that has a melting point above 1000°C, making it non-combustible and excellent for fire barriers.",
    },
    {
      id: 1,
      q: "Are Rockwool panels good for soundproofing?",
      a: "Yes, due to their high density and fibrous structure, they absorb sound waves and are widely used in acoustic rooms and noisy industrial zones.",
    },
    {
      id: 2,
      q: "What thicknesses do you offer?",
      a: "We manufacture Rockwool panels in thicknesses ranging from 50mm up to 200mm, depending on fire rating and thermal specifications.",
    },
    {
      id: 3,
      q: "Do rock wool panels absorb moisture?",
      a: "No, the rock wool core is specially treated to be hydrophobic, meaning it repels water and prevents dampness or moisture buildup.",
    },
    {
      id: 4,
      q: "Are these panels environmentally friendly?",
      a: "Yes, rock wool is a natural material derived from basalt rock, which is highly sustainable, fully recyclable, and free from toxic emissions.",
    },
  ];

  const specifications = [
    {
      feature: "Core Material",
      value: "Rockwool (Stone Wool)",
    },
    {
      feature: "Thickness",
      value: "50 mm – 150 mm",
    },
    {
      feature: "Panel Width",
      value: "1000 – 1150 mm",
    },
    {
      feature: "Facing Material",
      value: "PPGI / PPGL / Galvalume",
    },
    {
      feature: "Thermal Conductivity",
      value: "0.024 – 0.080 W/m·K",
    },
    {
      feature: "Fire Rating",
      value: "Class A1 / A2",
    },
    {
      feature: "Surface Finish",
      value: "Ribbed / Micro Rib / Smooth",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Resistant Rock<br />
            <span>wool  Panels
            </span>
          </h1>
          <p className={styles.heroDesc}>
            At L&R Green Pvt Ltd, we deliver high-performance Rockwool panels designed for demanding
            industrial, commercial, and specialized environments.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>






      {/* ── SECTION 1: WHAT ARE ROCKWOOL PANELS? ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What Are<br />
            <span>Rockwool Panels</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              Rockwool panels are advanced sandwich panels engineered with a dense, non-combustible stone wool (basalt)
              core placed between two durable metal sheets such as PPGI or Galvalume. This unique composition provides
              excellent fire resistance (Class A1/A2) and reliable thermal insulation by reducing heat transfer, helping
              maintain stable indoor temperatures.
            </p>
            <p>
              At L&R Green Pvt Ltd, our Rockwool panels are designed to deliver superior acoustic insulation along with
              durability and moisture resistance. The fibrous structure effectively absorbs sound, making them ideal for
              walls, roofs, and cleanroom applications across industrial and commercial environments.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.mainImage}>
              <img src={rock1} alt="Main Building" />
            </div>
            <div className={styles.smallImage}>
              <img src={rock2} alt="Interior" />
            </div>

          </div>
        </div>
      </section>







      {/* ── SECTION 2: ADVANCED FEATURES & PERFORMANCE HIGHLIGHTS ── */}
      <section className={styles.rockwoolSection}>
        <div className={styles.rockwoolHeading}>
          <h2>
            Advanced Features &<br />
            <span>Performance Highlights</span>
          </h2>
          <div className={styles.rockwoolDivider}></div>
        </div>

        <div className={styles.rockwoolContentWrapper}>
          <div className={styles.rockwoolGalleryWrapper}>
            <div className={styles.rockwoolPrimaryImage}>
              <img src={rock3} alt="Main Building" />
            </div>

            <div className={styles.rockwoolSecondaryImage}>
              <img src={rock4} alt="Interior" />
            </div>
          </div>

          <div className={styles.rockwoolContent}>
            <p>
              One of the major advantages of wall PUF panels is their superior
              insulation capability. The closed-cell polyurethane foam:
            </p>

            <ul>
              <li><strong>Non-Combustible Core:</strong> <span>Stone wool core ensures highfire resistance and safety</span></li>
              <li><strong>Thermal Insulation:</strong> <span>K-value range: 0.024–0.080 W/m·K</span></li>
              <li><strong>Acoustic Insulation:</strong> <span>Excellent noise reduction and sound absorption</span></li>
              <li><strong>Durable Metal Surface:</strong> <span>PPGI / PPGL / Galvalume coated sheets</span></li>
              <li><strong>Moisture Resistance:</strong> <span>Resistant to water ingress and harsh weather</span></li>
              <li><strong>Quick Installation:</strong> <span> Lightweight and easy-to-install modular design</span></li>

            </ul>
          </div>
        </div>
      </section>



      {/* ── SECTION 3: ROCKWOOL TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.TechUser}>
        <div className={styles.TechText}>
          <h2>EPS Panels <br /><span>Technical Specifications</span></h2>
          <div className={styles.TechLine}></div>
        </div>
        <div className={styles.TechFlex}>
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
          <div className={styles.rockwoolImageWrapper}>
            <div className={styles.rockwoolMainImage}>
              <img src={rock1} alt="Main Building" />
            </div>

            <div className={styles.rockwoolFloatingImage}>
              <img src={rock2} alt="Interior" />
            </div>
          </div>
        </div>
      </section>



      {/* ── SECTION 4: QUALITY & MANUFACTURING EXCELLENCE ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Rockwool Panels</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Quality & Manufacturing<br />
              Excellence
            </h2>
            <p>
              At L&R Green Pvt Ltd, Rockwool panels are manufactured under strict quality checks,
              including density testing, thickness accuracy, bonding strength, and coating inspection.
              This ensures consistent performance, durability, and safety in every panel delivered.
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





      {/* ── SECTION 5: APPLICATIONS OF ROCKWOOL PANELS ── */}
      <section className={styles.epsSection}>
        <div className={styles.epsHeading}>
          <h2>
            Applications of<br />
            <span>Rockwool Panels</span>
          </h2>
          <div className={styles.headingDivider}></div>
        </div>

        <div className={styles.epsContentWrapper}>
          <div className={styles.stoneWoolImageWrapper}>
            <div className={styles.stoneWoolMainImage}>
              <img src={rock3} alt="Main Building" />
            </div>

            <div className={styles.stoneWoolPreviewImage}>
              <img src={rock4} alt="Interior" />
            </div>
          </div>

          <div className={styles.epsContent}>
            <p>
              Rockwool panels from L&R Green Pvt Ltd are used across industrial and commercial
              spaces for fire safety, insulation, and sound control.
            </p>
            <ul>
              <li>Fire-rated industrial buildings</li>
              <li>Control rooms & generator enclosures</li>
              <li>Acoustic rooms & auditoriums</li>
              <li>HVAC duct enclosures</li>
              <li>Cold storage facilities</li>
              <li>Cleanrooms and laboratories</li>
            </ul>
          </div>
        </div>
      </section>



      {/* ── SECTION 6: BENEFITS OF ROCKWOOL PANELS ── */}

      {/* OUR CORE SERVICES */}
      <section className={styles.CoreService}>
        <div className={styles.CoreServiceFlex}>
          <div className={styles.coreServiceText}>
            <h2>Benefits of<br /><span>Rockwool Panels</span></h2>
            <div className={styles.divider}></div>
          </div>
        </div>
        <div className={styles.hardwareFeatureGrid}>
          {hardwareFeatures.map((item, index) => (
            <div key={index} className={styles.hardwareFeatureCard}>
              <div className={styles.hardwareIcon}>
                {item.icon}
              </div>

              <div className={styles.hardwareContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── SECTION 7: WHY CHOOSE L&R GREEN PVT LTD ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Why Choose<br />
            <span>L&R Green Pvt Ltd</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                At L&R Green Pvt Ltd, we focus on delivering high-quality Rockwool panel solutions with precision manufacturing,
                reliable supply, and customer-focused support to meet diverse project requirements.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} color="white" />
                  </div>
                  <p className={styles.featureText}>High-quality raw materials</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Advanced manufacturing process</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Custom sizes and specifications</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Reliable supply and fast delivery</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <Paperclip size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Expert support and consultation</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rockPanelImageWrapper}>
            <div className={styles.rockPanelMainImage}>
              <img src={rock6} alt="Main Building" />
            </div>

            <div className={styles.rockPanelFloatingImage}>
              <img src={rock5} alt="Interior" />
            </div>
          </div>
        </div>
      </section>





      {/* ── SECTION 8: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Find answers to common questions about prefabricated rooftop residential flats, including
            installation, safety, customization, and suitability for different building types.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={rock7} alt="warehouse" />
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
        <h2>Ready for Your Rockwool Panels Solution?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated Rockwool Panels solutions tailored to your site needs.
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

export default RockwoolPanels;
