import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/WallPufPanels.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import wallpuf1 from '../assets/panel/wallpuf/wallpuf1.png'
import wallpuf2 from '../assets/panel/wallpuf/WALLPUF2.png'
import wallpuf3 from '../assets/panel/wallpuf/wallpuf3.png'
import wallpuf4 from '../assets/panel/wallpuf/wallpuf4.png'
import wallpuf5 from '../assets/panel/wallpuf/wallpuf5.png'
import wallpuf6 from '../assets/panel/wallpuf/wallpuf6.png'
import wallpuf7 from '../assets/panel/wallpuf/wallpuf7.png'
import design from '../assets/panel/wallpuf/design.png'
import design1 from '../assets/panel/wallpuf/design1.png'

export const WallPufPanels = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const specifications = [
    {
      title: "Thickness",
      value: "30mm to 150mm",
    },
    {
      title: "Density of PUF core",
      value: "38–42 kg/m³",
    },
    {
      title: "Outer sheet thickness",
      value: "0.4mm to 0.6mm",
    },
    {
      title: "Effective width",
      value: "Approx. 1000mm",
    },
    {
      title: "Length",
      value: "As per project requirement",
    },
  ];
  const applications = [
    { title: "Pre-engineered buildings (PEB)", active: true },
    { title: "Modular site offices" },
    { title: "Industrial sheds" },
    { title: "Clean rooms", active: true },
    { title: "Cold rooms" },
    { title: "Portable cabins" },
    { title: "Labour accommodation", active: true },
    { title: "Warehouses" },
    { title: "Food processing units" },
  ];


  const faqs = [
    {
      id: 0,
      q: "What are PUF panels used for?",
      a: "Wall PUF panels are widely used for vertical wall cladding, partitions, clean rooms, cold storages, telecom shelters, and modular cabins to offer high durability and insulation.",
    },
    {
      id: 1,
      q: "Are Wall PUF panels energy-efficient?",
      a: "Yes, due to their excellent thermal insulation properties, they minimize heat transfer and can reduce heating or cooling costs by up to 40%.",
    },
    {
      id: 2,
      q: "Are Wall PUF panels fire-retardant?",
      a: "Yes, we manufacture fire-retardant Wall PUF panels that comply with industry safety standards to protect your buildings and assets.",
    },
    {
      id: 3,
      q: "Can they be used as partitions?",
      a: "Yes, they are ideal for internal partition walls in warehouses, factories, clean rooms, and commercial offices, offering quick installation and clean aesthetics.",
    },
    {
      id: 4,
      q: "What is the life of Wall PUF panels?",
      a: "Wall PUF panels are highly durable, rust-proof, and designed to last for several decades with minimal maintenance.",
    },
  ];
  const features = [
    {
      title: "Reduces heat transfer",
      description:
        "Withstands heavy loads without deformation, ensuring structural reliability.",
    },
    {
      title: "Maintains indoor temperature",
      description:
        "Maintains shape and size over time, even under temperature variations.",
    },
    {
      title: "Improves energy efficiency",
      description:
        "Offers durability against external forces and mechanical stress.",
    },
    {
      title: "Strong load-bearing capacity",
      description:
        "Supports structural loads effectively when integrated with frameworks.",
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
            High-Performance<br />
            <span>Wall PUF Panels
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Enterprises manufactures premium Wall PUF Panels designed for superior thermal
            insulation, structural strength, and long-lasting performance across industrial and modular construction.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>



      {/* ── WHAT ARE WALL PUF PANELS ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What Are Wall  <br />
            <span>WALL PUF Panels</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
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
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.metalPanelWrapper}>
            <div className={styles.metalPanelBackground}></div>

            <div className={styles.metalPanelImageBox}>
              <img
                src={wallpuf1}
                alt="Metal Panel"
                className={styles.metalPanelImage}
              />
            </div>
          </div>
        </div>
      </section>




      {/* ── KEY FEATURES ── */}

      <section className={styles.roofApplicationSection}>
        <div className={styles.roofApplicationHeading}>
          <h2>Key Features of<br /><span>Wall PUF Panels</span></h2>
          <div className={styles.roofApplicationLine}></div>
        </div>
        <div className={styles.hvacContentWrapper}>
          <div className={styles.container}>
            <img src={wallpuf2} alt="Roof Panel" className={styles.media} />
            <div className={styles.shade} />
          </div>

          <div className={styles.hvacTextContainer}>
            <div className={styles.hvacContent}>
              <p>
                Designed with advanced components like insulated panels, fire-resistant materials, temperature control
                systems, cable management support, ventilation integration, and anti-static flooring to ensure safety,
                efficiency, and reliable performance in critical environments
              </p>

              <div className={styles.hvacFeatureList}>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Excellent thermal insulation</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Lightweight yet structurally strong</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Quick installation with interlocking joints</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Fire-retardant options available</p>
                </div>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Corrosion-resistant outer surface</p>
                </div>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Smooth and aesthetically finished surface</p>
                </div>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>High durability and long service life</p>
                </div>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Low maintenance requirement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.WallPufTech}>
        <div className={styles.wallPufTechFlex}>
          <div className={styles.wallPufTectpara}>
            <div className={styles.wallPufTechText}>
              <h2>Technical Specifications<br /> <span>Wall PUF Panels</span></h2>
              <div className={styles.wallPufTechLine}></div>
            </div>
            <p>Wall PUF panels are available in a range of customizable specifications to
              suit different project requirements. They are designed to deliver consistent
              performance with optimal thickness, density, and structural balance.</p>
            <p>These panels also come in various color-coated finishes, allowing flexibility
              in design while maintaining durability and aesthetic appeal for modern construction.</p>
          </div>
          {/* table */}
          <div className={styles.specificationCard}>
            {specifications.map((item, index) => (
              <div key={index} className={styles.specificationRow}>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── APPLICATIONS ── */}
      <section className={styles.ApplicationWallPuf}>
        <div className={styles.ApplicationWallText}>
          <h2>Applications of Wall <br /> <span>PUF Panels</span></h2>
          <div className={styles.ApplicationWallLine}></div>
        </div>
        <div className={styles.ApplicationWallFlex}>
          <div className={styles.ApplicationWallPara}>
            <p>Wall PUF panels are widely used across multiple industries due to their versatility,
              insulation efficiency, and quick installation capabilities. They are ideal for both
              temporary setups and permanent structures, providing reliable performance
              in diverse environments.</p>
            <div className={styles.applicationWrapper}>
              {applications.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.applicationTag} ${item.active ? styles.active : ""
                    }`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className={styles.applicationsContainer}>
            <img src={wallpuf6} alt="Roof Panel" className={styles.applicationsMedia} />
            <div className={styles.applicationsShade} />
          </div>
        </div>
      </section>



      {/* ── SUSTAINABILITY BANNER ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Sustainability, Energy Efficiency<br />
              & Structural Strength
            </h2>
            <p>
              Wall PUF panels promote sustainable construction by reducing energy use, minimizing waste,
              and lowering carbon footprint through efficient insulation. Despite being lightweight, they
              offer strong structural performance with high strength, stability, and impact resistance,
              ensuring durability and cost-effective building performance.
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


      {/* ── THERMAL INSULATION ── */}
      <section className={styles.ThermalWall}>
        <div className={styles.ThermalWallText}>
          <h2>Thermal Insulation <br /> <span>Performance</span></h2>
          <div className={styles.ThermalLine}></div>
        </div>

        <div className={styles.ThermalWallFlex}>
          <div className={styles.applicationsCard}>
            <img src={wallpuf7} alt="Roof Panel" className={styles.applicationsCard__media} />
            <div className={styles.applicationsCard__overlay} />
          </div>
          {/*  */}
          <div className={styles.ThermalWallPara}>
            <p>One of the major advantages of wall PUF panels is their superior insulation
              capability. The closed-cell polyurethane foam:</p>
            <div className={styles.featuresWrapper}>
              {features.map((item, index) => (
                <div className={styles.featureItem} key={index}>
                  <div className={styles.leftBar}></div>

                  <div className={styles.featureContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ── EFFICIENT INSTALLATION ── */}
      {/* ── APPLICATIONS OF ROOF PUF PANELS (GRID) ── */}
      <section className={styles.roofPanelSection}>
        <div className={styles.roofPanelHeading}>
          <h2>
            Efficient Installation &
            <br />
            <span>Fire Safety Compliance</span>
          </h2>
          <div className={styles.AvableLine}></div>
        </div>

        <div className={styles.roofPanelContent}>

          <div className={styles.roofPanelText}>
            <p>
              Wall PUF panels are designed for fast and efficient installation, featuring a tongue-and-groove
              locking system that minimizes on-site work, reduces labor requirements, and ensures quicker project
              completion with a clean, dry construction process. Their prefabricated design significantly cuts
              down overall construction timelines.
            </p>

            <p>
              In addition to installation benefits, these panels are available in fire-retardant grades with
              fire-resistant cores and smoke-resistant properties. They comply with industrial safety standards,
              making them a safe and reliable choice for both industrial and commercial applications.
            </p>
          </div>
          <div className={styles.roofPanelImageCard}>
            <img src={wallpuf3} alt="Roof Panel" />
          </div>
        </div>
      </section>




      {/* ── ADVANTAGES ── */}
      <section className={styles.wallFeatureSection}>
        <div className={styles.wallFeatureHeading}>
          <h2>Advantages of Prefabricated <br /><span>Railway & Telecom Shelters</span></h2>
          <div className={styles.wallFeatureLine}></div>
        </div>

        <div className={styles.wallFeatureWrapper}>
          <div className={styles.wallFeatureImageContainer}>
            <img src={wallpuf4} alt="Roof Panel" className={styles.wallFeatureImage} />
            <div className={styles.wallFeatureOverlay} />
          </div>
          <div className={styles.wallFeatureTextContainer}>
            <div className={styles.wallFeatureContent}>
              <p>
                Wall PUF panels resist moisture, rust, and harsh conditions
                with anti-corrosion coatings, and are customizable to suit project needs.
              </p>

              <div className={styles.wallFeatureList}>
                <div className={styles.wallFeatureItem}>
                  <div className={styles.wallFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallFeatureText}>Moisture & corrosion resistance</p>
                </div>

                <div className={styles.wallFeatureItem}>
                  <div className={styles.wallFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallFeatureText}> Customizable design & specification</p>
                </div>

                <div className={styles.wallFeatureItem}>
                  <div className={styles.wallFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallFeatureText}>High thermal and structural performance</p>
                </div>

                <div className={styles.wallFeatureItem}>
                  <div className={styles.wallFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallFeatureText}>Pan-India supply & timely delivery</p>
                </div>

                <div className={styles.wallFeatureItem}>
                  <div className={styles.wallFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallFeatureText}>Cost-effective and long-lasting solution</p>
                </div>
              </div>
              <p>
                L&R Green India delivers durable, efficient panels with
                reliable quality and quick installation for modern construction.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ── FAQ SECTION ── */}

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
          <div className={styles.faqImg}>
            <img src={wallpuf5} alt="warehouse" />
          </div>        </div>
      </section>

      {/* ── CTA BANNER ── */}

      <section className={styles.cta}>
        <h2>Ready for Your Sandwich Wall Puf Panels Solution?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized sandwich wall puf panel solutions tailored to your site needs.
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
  )

};

export default WallPufPanels;
