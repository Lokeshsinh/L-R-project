import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/HVACSolutions.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Wind,
  Leaf,
  AirVent,
  Fan,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import hvm1 from '../assets/hvm/hvm1.png'
import hvm2 from '../assets/hvm/hvm2.png'
import hvm3 from '../assets/hvm/hvm3.png'
import hvm4 from '../assets/hvm/hvm4.png'
import hvm5 from '../assets/hvm/hvm5.png'
import hvm6 from '../assets/hvm/hvm6.png'
import hvm7 from '../assets/hvm/hvm7.png'
import hvm8 from '../assets/hvm/hvm8.png'
import hvm9 from '../assets/hvm/hvm9.png'
import user1 from '../assets/hvm/user1.png'
import user2 from '../assets/hvm/user2.png'
import user3 from '../assets/hvm/user3.png'
import user4 from '../assets/hvm/user4.png'
import design from '../assets/hvm/design.png'
import design1 from '../assets/rooftop/resident/design1.png'

const HVACSolutions = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const hardwareFeatures = [
    {
      icon: <Wind />,
      title: "Supply Air Duct Installation",
      description:
        "We design and install ducts that efficiently distribute conditioned air, ensuring balanced airflow and consistent temperature.",
    },
    {
      icon: <Leaf />,
      title: "Fresh Air Duct Installation",
      description:
        "Our fresh air duct systems bring in clean outdoor air to improve ventilation and maintain healthy indoor air quality.",
    },
    {
      icon: <AirVent />,
      title: "Supply Air Diffuser Installation",
      description:
        "Supports innovative designs including curved walls, modern facades, and customized layouts.",
    },
    {
      icon: <Fan />,
      title: "Toilet Exhaust Duct Installation",
      description:
        "Our exhaust duct systems remove moisture, odors, and stale air, ensuring proper ventilation and a hygienic environment.",
    },
  ];

  const faqs = [
    { id: 0, q: "What types of HVAC systems do you install?", a: "We design, supply, and install a wide range of HVAC systems including central AC, VRF/VRV, ductable splits, cassette units, precision cooling, and industrial ventilation systems." },
    { id: 1, q: "Do you provide HVAC solutions for prefab buildings?", a: "Yes, we specialize in integrating HVAC systems into prefabricated and modular structures, ensuring efficient and concealed installation within the building envelope." },
    { id: 2, q: "Which brands do you work with?", a: "We work with leading HVAC brands including Daikin, Voltas, Blue Star, Carrier, LG, and Hitachi — selecting the best fit for each project's requirements and budget." },
    { id: 3, q: "Do you offer Annual Maintenance Contracts (AMC)?", a: "Yes, we offer comprehensive AMC plans covering preventive maintenance visits, emergency breakdown support, and parts replacement at competitive annual rates." },
    { id: 4, q: "What is the typical timeline for HVAC installation?", a: "Small to medium projects (up to 50 TR) are typically completed within 2–4 weeks. Large industrial or commercial projects may take 6–12 weeks depending on complexity." },
  ];

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Rails & Frames",
      description:
        "Efficient and quiet systems designed to provide maximum comfort and clean air for homes.",
    },
    {
      id: 2,
      image: user2,
      title: "Electrical System Design",
      description:
        "Reliable systems tailored for offices, malls, and commercial spaces to maintain consistent temperature and air quality.",
    },
    {
      id: 3,
      image: user3,
      title: "Fasteners & Screws",
      description:
        "Robust solutions for factories and warehouses, ensuring proper ventilation, temperature control, and safe working conditions.",
    },
    {
      id: 4,
      image: user4,
      title: "Heavy-Duty Mounts",
      description:
        "Specialized HVAC solutions for hospitals, schools, and public buildings, ensuring clean air, controlled environments, and consistent climate.",
    },
  ];


  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            HVAC Solutions<br />
            <span>by Application
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd provides application-specific HVAC solutions for optimal comfort, efficient
            airflow, and reliable, energy-efficient performance across all sectors.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* COMPLETE HVAC SYSTEM SOLUTIONS */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Complete HVAC<br />
            <span>System Solutions</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              HVAC (Heating, Ventilation, and Air Conditioning) systems play a critical role in creating comfortable,
              healthy, and controlled indoor environments across residential, commercial, and industrial spaces.
              At L&R Green Pvt Ltd, we deliver comprehensive HVAC solutions covering every stage—from design and
              engineering to installation and maintenance—ensuring consistent performance, durability, and long-term reliability.
            </p>
            <p>
              Our HVAC solutions are built using advanced, energy-efficient technologies that optimize airflow, maintain precise
              temperature control, and regulate humidity for enhanced indoor comfort. We integrate smart designs and high-quality
              components to improve air quality while reducing energy consumption and supporting sustainable, cost-effective environments.
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
              <img src={hvm1} alt="Main Building" />
            </div>
            <div className={styles.smallImage}>
              <img src={hvm2} alt="Interior" />
            </div>
          </div>
        </div>
      </section>






      {/* HVAC BY APPLICATION */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Designed Around<br />
              <span>Your Lifestyle</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Each rooftop residential unit is fully customizable to match
            your requirements, whether for personal living or rental purposes.
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





      {/* IMPORTANCE */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Importance of<br />
            <span>HVAC Systems</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.residentialImageWrapper}>
            <div className={styles.residentialMainImage}>
              <img src={hvm3} alt="Main Building" />
            </div>

            <div className={styles.residentialFloatingImage}>
              <img src={hvm4} alt="Interior" />
            </div>
          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Solar module mounting structures provide strong support, stability, and proper
                alignment for maximum solar efficiency. At L&R Green Pvt Ltd, we offer durable
                solutions for all types of solar projects.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Comfortable indoor temperature</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Improved air quality</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Humidity control</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Enhanced productivity</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Energy efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* DARK BANNER — ADVANCED COMPONENTS */}

      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R  hvac solutions</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Advanced HVAC Components<br />
              & System Importance
            </h2>
            <p>
              HVAC systems play a vital role in maintaining comfortable indoor temperatures, improving air
              quality, controlling humidity, and reducing energy consumption through efficient operation.
              At L&R Green Pvt Ltd, we integrate advanced components such as VRV/VRF systems for precise
              multi-zone temperature control and high-quality copper piping for durability and efficient
              heat transfer. Together, these technologies ensure reliable performance and long-lasting comfort
              across residential, commercial, and industrial spaces.
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






      {/* OUR CORE SERVICES */}
      <section className={styles.CoreService}>
        <div className={styles.CoreServiceFlex}>
          <div className={styles.coreServiceText}>
            <h2>Our Core <br /><span>HVAC Services</span></h2>
            <div className={styles.divider}></div>
          </div>
          <p>Essential HVAC services focused on efficient airflow, ventilation, and indoor comfort
            using high-quality installation and system design.</p>
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

      {/* MAINTENANCE */}
      <section className={styles.hvacSection}>
        <div className={styles.hvacSectionTitle}>
          <h2>
            Keep Your HVAC System<br />
            <span>Running Efficiently</span>
          </h2>
          <div className={styles.hvacIntroLine}></div>
        </div>

        <div className={styles.hvacContentWrapper}>
          <div className={styles.hvacTextContainer}>
            <div className={styles.hvacContent}>
              <p>
                Regular maintenance ensures optimal performance, energy efficiency, and long system life.
                It also helps prevent unexpected breakdowns and costly repairs. Our maintenance services include:
              </p>

              <div className={styles.hvacFeatureList}>
                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Filter replacement and cleaning</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>System inspection and diagnostics</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Coil cleaning and servicing</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Refrigerant level checks</p>
                </div>

                <div className={styles.hvacFeatureItem}>
                  <div className={styles.hvacFeatureIcon}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.hvacFeatureText}>Duct cleaning and sealing</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hvacImageWrapper}>
            <div className={styles.hvacMainImage}>
              <img src={hvm8} alt="Main Building" />
            </div>

            <div className={styles.hvacFloatingImage}>
              <img src={hvm9} alt="Interior" />
            </div>
          </div>
        </div>
      </section>



      {/* WHY CHOOSE */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose<br /><span>HVAC Solutions</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.stackedImageLayout}>
            <div className={styles.heroImageFrame}>
              <img src={hvm5} alt="Main Building" />
            </div>

            <div className={styles.overlayImageFrame}>
              <img src={hvm6} alt="Interior" />
            </div>
          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>Choosing the right HVAC solution is essential for creating a comfortable, healthy, and
              energy-efficient indoor environment. A well-designed system ensures consistent temperature
              control, proper ventilation, and improved air quality by reducing pollutants and allergens.
              It also helps maintain balanced humidity levels, which is important for both occupant comfort
              and the longevity of building interiors and equipment.</p>
            <p>Modern HVAC solutions are built with advanced, energy-efficient technologies that reduce power
              consumption and operational costs over time. With reliable performance, smart controls, and low
              maintenance requirements, these systems provide long-term value for residential, commercial, and
              industrial spaces while supporting sustainable and eco-friendly operations.</p>
          </div>
        </div>
      </section>



      {/* FAQ */}
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
            <img src={hvm7} alt="warehouse" />
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


      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready for Your HVAC Solutions ?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated  HVAC Solutions  solutions tailored to your site needs.
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

export default HVACSolutions;
