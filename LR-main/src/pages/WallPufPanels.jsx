import React, {  useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/WallPufPanels.module.css";
import {
  ArrowRight, ArrowUpRight,  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import wallpuf1 from '../assets/panel/wallpuf/wallpuf1.png'
import wallpuf2 from '../assets/panel/wallpuf/WALLPUF2.png'
import wallpuf3 from '../assets/panel/wallpuf/wallpuf3.png'
import design from '../assets/panel/wallpuf/design.png'
import design1 from '../assets/panel/wallpuf/design1.png'

export const WallPufPanels = () => {
  // const [openFaq, setOpenFaq] = useState(1);
  const navigate = useNavigate()
  // const [activeIndex, setActiveIndex] = useState(1);
  // const toggleFAQ = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  



  // const faqs = [
  //   {
  //     id: 0,
  //     q: "What are PUF panels used for?",
  //     a: "Wall PUF panels are widely used for vertical wall cladding, partitions, clean rooms, cold storages, telecom shelters, and modular cabins to offer high durability and insulation.",
  //   },
  //   {
  //     id: 1,
  //     q: "Are Wall PUF panels energy-efficient?",
  //     a: "Yes, due to their excellent thermal insulation properties, they minimize heat transfer and can reduce heating or cooling costs by up to 40%.",
  //   },
  //   {
  //     id: 2,
  //     q: "Are Wall PUF panels fire-retardant?",
  //     a: "Yes, we manufacture fire-retardant Wall PUF panels that comply with industry safety standards to protect your buildings and assets.",
  //   },
  //   {
  //     id: 3,
  //     q: "Can they be used as partitions?",
  //     a: "Yes, they are ideal for internal partition walls in warehouses, factories, clean rooms, and commercial offices, offering quick installation and clean aesthetics.",
  //   },
  //   {
  //     id: 4,
  //     q: "What is the life of Wall PUF panels?",
  //     a: "Wall PUF panels are highly durable, rust-proof, and designed to last for several decades with minimal maintenance.",
  //   },
  // ];

;

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
          <h2>Key Features of<br />Wall PUF Panels</h2>
          <div className={styles.roofApplicationLine}></div>
        </div>
        <div className={styles.hvacContentWrapper}>
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
          <div className={styles.container}>
            <img src={wallpuf2} alt="Roof Panel" className={styles.media} />
            <div className={styles.shade} />
          </div>

        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}

      {/* ── APPLICATIONS ── */}
    


      {/* ── SUSTAINABILITY BANNER ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L & R Wall puf pannel</h1>
          </div>
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
      {/* <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Thermal Insulation <br />
              <span>Performance</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeLeft}></div>
        
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/thermal.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              The high density PUF core provides excellent thermal insulation,
              which significantly reduces the energy required for cooling and
              heating. It acts as a strong barrier against heat transfer.
            </p>
            <div className={styles.featureListBordered}>
              {thermalInsulationList.map((item, i) => (
                <div key={i} className={styles.featureItemBordered}>
                  <div className={styles.bulletDot}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

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
      {/* <section className={styles.wallPufSection}>
        <div className={styles.wallPufHeading}>
          <h2>
            Advantages of Prefabricated
            <br />
            <span>Railway & Telecom Shelters</span>
          </h2>
          <div className={styles.wallPufLine}></div>
        </div>

        <div className={styles.wallPufWrapper}>
          <div className={styles.wallPufImageContainer}>
            <img
              src={wallpuf2}
              alt="Wall PUF Panel"
              className={styles.wallPufImage}
            />
            <div className={styles.wallPufOverlay} />
          </div>
          <div className={styles.wallPufTextContainer}>
            <div className={styles.wallPufContent}>
              <p>
                Wall PUF panels resist moisture, rust, and harsh conditions with
                anti-corrosion coatings, and are customizable to suit project needs.
              </p>

              <div className={styles.wallPufFeatureList}>
                <div className={styles.wallPufFeatureItem}>
                  <div className={styles.wallPufFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallPufFeatureText}>
                    Moisture & corrosion resistance
                  </p>
                </div>

                <div className={styles.wallPufFeatureItem}>
                  <div className={styles.wallPufFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallPufFeatureText}>
                    Customizable design & specification
                  </p>
                </div>

                <div className={styles.wallPufFeatureItem}>
                  <div className={styles.wallPufFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallPufFeatureText}>
                    High thermal and structural performance
                  </p>
                </div>

                <div className={styles.wallPufFeatureItem}>
                  <div className={styles.wallPufFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallPufFeatureText}>
                    Pan-India supply & timely delivery
                  </p>
                </div>

                <div className={styles.wallPufFeatureItem}>
                  <div className={styles.wallPufFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.wallPufFeatureText}>
                    Cost-effective and long-lasting solution
                  </p>
                </div>
              </div>
              <p>L&R Green India delivers durable, efficient panels with reliable quality
                and quick installation for modern construction.</p>
            </div>

          </div>
        </div>
      </section> */}

      {/* ── FAQ SECTION ── */}



      {/* ── CTA BANNER ── */}

      <Footer />
    </div>
  )

};

export default WallPufPanels;
