import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/GlasswoolPanels.module.css";
import {
  ArrowRight, ArrowUpRight, Plus, X, School, Factory, Rows4, Flame
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import glass1 from '../assets/panel/glasswall/glass1.png'
import glass2 from '../assets/panel/glasswall/glass2.png'
import glass3 from '../assets/panel/glasswall/glass3.png'
import glass4 from '../assets/panel/glasswall/glass4.png'
import glass5 from '../assets/panel/glasswall/glass5.png'
import design from '../assets/panel/glasswall/design.png'
import design1 from '../assets/panel/glasswall/design1.png'


const GlasswoolPanels = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "Are glass wool panels fire-resistant?",
      a: "Yes, glass wool is naturally non-combustible and holds Class A/Class 0 fire ratings, preventing the spread of flames.",
    },
    {
      id: 1,
      q: "How does glass wool compare with rock wool?",
      a: "Glass wool is lighter and has slightly better thermal efficiency at lower thicknesses, while rock wool is denser and offers higher fire rating duration.",
    },
    {
      id: 2,
      q: "What thicknesses do you offer?",
      a: "We offer Glass Wool panels in thickness options from 50mm up to 150mm depending on thermal and insulation specifications.",
    },
    {
      id: 3,
      q: "Do glass wool panels sag over time?",
      a: "No, our advanced thermosetting resin bonding ensures that glass fibers remain stiff and do not sag, maintaining uniform insulation.",
    },
    {
      id: 4,
      q: "Is glass wool safe and eco-friendly?",
      a: "Yes, glass wool is made from natural silica sand and recycled glass. It is completely non-toxic, eco-friendly, and fully recyclable.",
    },
  ];




  const hardwareFeatures = [
    {
      icon: <Flame />,
      title: "Fire-Rated Partitions & Walls",
      description:
        "Used in commercial buildings, hospitals, and high-occupancy spaces to enhance fire safety and structural protection.",
    },
    {
      icon: <School />,
      title: "Acoustic Enclosures",
      description:
        "Ideal for DG sets, machinery rooms, studios, and auditoriums where effective noise reduction is essential.",
    },
    {
      icon: <Factory />,
      title: "Clean Rooms & Industrial Spaces",
      description:
        "Suitable for pharma units, factories, and warehouses requiring controlled environments, insulation, and hygiene.",
    },
    {
      icon: <Rows4 />,
      title: "Roofing & HVAC Insulation",
      description:
        "Applied in industrial roofing, cladding, and HVAC ducting to improve thermal efficiency and energy savings.",
    },
  ];


  const specifications = [
    { feature: "Core Material", value: "High-Density Glass Wool" },
    { feature: "Thermal Conductivity", value: "0.028 – 0.045 W/mK" },
    { feature: "Width", value: "1000–1200mm" },
    { feature: "Fire Rating", value: "Class A1 (Non-Combustible)" },
    { feature: "Facing", value: "PPGI / PPGL Sheets" },
    { feature: "Thickness", value: "50mm – 150mm" },
    { feature: "Density", value: "64 kg/m³" },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />


      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Glass Wool<br />
            <span>Sandwich Panels
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Advanced insulation solutions by L&R Green Pvt Ltd for superior thermal
            efficiency, acoustic comfort, and fire safety.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── SECTION 1: WHAT ARE GLASS WOOL PANELS? ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What are Glass<br />
            <span>Wool Panels?</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.panelWrapper}>
            <div className={styles.sideAccent}></div>
            <div className={styles.photoFrame}>
              <img
                src={glass1}
                alt="Sandwich Panel"
                className={styles.panelPhoto}
              />
            </div>
          </div>
          <div className={styles.introText}>
            <p>
              Glass wool panels are advanced insulation materials manufactured from fine strands of molten glass spun
              into a soft, wool-like texture. This unique structure traps air within its fibers, providing excellent
              thermal insulation while also minimizing sound transmission. These panels are widely used in modern
              construction due to their lightweight nature, ease of installation, and reliable performance across
              a variety of environments.
            </p>
            <p>
              At L&R Green Pvt Ltd, our glass wool panels are designed to meet high industry standards for safety,
              efficiency, and durability. They offer superior fire resistance, effective acoustic control, and long-lasting
              insulation performance, making them an ideal choice for industrial, commercial, and specialized applications
              where comfort and safety are essential.
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






      {/* ── SECTION 2: CORE BENEFITS & FEATURES ── */}
      <section className={styles.rockwoolSection}>
        <div className={styles.rockwoolHeading}>
          <h2>
            Core Benefits<br />
            <span>& Features</span>
          </h2>
          <div className={styles.rockwoolDivider}></div>
        </div>

        <div className={styles.rockwoolContentWrapper}>
          <div className={styles.rockwoolContent}>
            <p>
              One of the major advantages of wall PUF panels is their superior
              insulation capability. The closed-cell polyurethane foam:
            </p>

            <ul>
              <li><strong>Thermal Efficiency:</strong> <span>Reduces heat transfer by trapping air pockets, helping maintain indoor temperature and lowering energy costs</span></li>
              <li><strong>Acoustic Performance:</strong> <span> High NRC (0.90–1.00) ensures superior sound absorption and reduced noise levels.</span></li>
              <li><strong>Fire Resistance:</strong> <span>Non-combustible material that withstands high temperatures without emitting toxic fumes.</span></li>
              <li><strong>Moisture Resistance:</strong> <span> Prevents mold, mildew, and corrosion for long-lasting durability.</span></li>
              <li><strong>Eco-Friendly:</strong> <span> Made from recycled glass and supports sustainable construction practices.</span></li>

            </ul>
          </div>
          <div className={styles.solarFrameContainer}>
            <div className={styles.solarSideAccent}></div>
            <div className={styles.solarFrameImageBox}>
              <img
                src={glass2}
                alt="Solar Structure"
                className={styles.solarFrameImage}
              />
            </div>

          </div>
        </div>
      </section>







      {/* ── SECTION 3: TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.TechUser}>
        <div className={styles.TechText}>
          <h2>EPS Panels <br /><span>Technical Specifications</span></h2>
          <div className={styles.TechLine}></div>
        </div>
        <div className={styles.TechFlex}>
          <div className={styles.epcImageWrapper}>
            <div className={styles.epcSideAccent}></div>

            <div className={styles.epcImageFrame}>
              <img
                src={glass5}
                alt="Solar Structure"
                className={styles.epcMainImage}
              />
            </div>
          </div>
          <div className={styles.specificationTable}>
            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
              <div className={styles.tableCell}>Feature</div>
              <div className={styles.tableCell}>Specification</div>
            </div>

            {specifications.map((item, index) => (
              <div className={styles.tableRow} key={index}>
                <div className={styles.tableCell}>{item.feature}</div>
                <div className={styles.tableCell}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ── SECTION 4: SUSTAINABLE STRENGTH & DURABILITY ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>

        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Sustainable Strength<br />
              & Durability
            </h2>
            <p>
              Glass wool panels from L&R Green Pvt Ltd are made using up to 80% recycled glass,
              making them an eco-friendly solution that supports green building certifications
              like LEED and GRIHA. Along with sustainability, they offer excellent durability—resistant
              to moisture, mold, and corrosion—ensuring long-lasting structural integrity and reliable performance for years.
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




      {/* ── SECTION 5: APPLICATIONS OF GLASS WOOL PANELS ── */}
      {/* OUR CORE SERVICES */}
      <section className={styles.CoreService}>
        <div className={styles.CoreServiceFlex}>
          <div className={styles.coreServiceText}>
            <h2>Applications of <br /><span>Glass Wool Panels</span></h2>
            <div className={styles.divider}></div>
          </div>
          <p>Glass wool panels from L&R Green Pvt Ltd are designed for versatile use across industrial,
            commercial, and specialized environments, delivering insulation, safety, and acoustic performance.</p>
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








      {/* ── SECTION 6: WHY CHOOSE GLASS WOOL PANELS ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose<br /><span>Glass Wool Panels</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>Glass wool panels from L&R Green Pvt Ltd offer an ideal combination of thermal insulation,
              fire safety, and acoustic performance, making them suitable for a wide range of industrial
              and commercial applications. Their lightweight structure allows for easy handling and faster
              installation, reducing construction time while maintaining high efficiency and performance standards.</p>
            <p>Designed for long-term reliability, L&R Green Pvt Ltd panels are resistant to moisture, corrosion,
              and environmental stress. They help maintain consistent indoor temperatures, reduce noise levels,
              and lower energy consumption, ensuring cost-effective and durable solutions for modern construction projects.</p>
          </div>
            <div className={styles.GlassConatinerImage}>
              <img
                src={glass3}
                alt="Solar Structure"
                
              />
            </div>
        </div>
      </section>








      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Find clear and concise answers to the most commonly
            asked questions about glass wool panels.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={glass4} alt="warehouse" />
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
        <h2>Ready for Your Glass wool Panels Solution?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated Glass wool Panels solutions tailored to your site needs.
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

export default GlasswoolPanels;
