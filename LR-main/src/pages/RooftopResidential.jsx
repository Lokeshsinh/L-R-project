import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopResidential.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import resident1 from '../assets/rooftop/resident/resident1.png'
import resident2 from '../assets/rooftop/resident/resident2.png'
import resident3 from '../assets/rooftop/resident/resident3.png'
import resident4 from '../assets/rooftop/resident/resident4.png'
import resident5 from '../assets/rooftop/resident/resident5.png'
import resident6 from '../assets/rooftop/resident/resident6.png'
import resident7 from '../assets/rooftop/resident/resident7.png'
import resident8 from '../assets/rooftop/resident/resident8.png'
import resident9 from '../assets/rooftop/resident/resident9.png'
import user1 from '../assets/rooftop/resident/user1.png'
import user2 from '../assets/rooftop/resident/user2.png'
import user3 from '../assets/rooftop/resident/user3.png'
import user4 from '../assets/rooftop/resident/user4.png'
import design from '../assets/rooftop/resident/design.png'
import design1 from '../assets/rooftop/resident/design1.png'
const RooftopResidential = () => {
  const [openFaq, setOpenFaq] = useState(0)
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
      q: "What are prefabricated rooftop residential flats?",
      a: "They are modern, modular living units constructed on the roofs of existing buildings using lightweight steel frames and insulated panels.",
    },
    {
      id: 1,
      q: "Are rooftop prefab flats safe for existing buildings?",
      a: "Yes, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does installation take?",
      a: "Installation typically takes a few weeks, depending on the scale and custom elements of the rooftop flat layout.",
    },
    {
      id: 3,
      q: "Can these units be customized?",
      a: "Yes, you can fully customize the modular flat layouts, kitchen/bathroom configuration, balconies, and choose glass façade designs.",
    },
    {
      id: 4,
      q: "Are prefabricated rooftop flats permanent?",
      a: "They are highly durable and long-lasting, designed to endure severe weather, but they can be fully dismantled, modified, or relocated if needed.",
    },
  ];

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Modular Flat Layouts",
      description:
        "Flexible floor plans designed to match different space requirements, allowing efficient use of rooftop areas for compact or spacious residential units.",
    },
    {
      id: 2,
      image: user2,
      title: "Balcony or Terrace Integration",
      description:
        "Option to add private balconies or open terrace spaces, enhancing comfort, ventilation, and lifestyle experience.",
    },
    {
      id: 3,
      image: user3,
      title: "Kitchen & Bathroom Setup",
      description:
        "Fully planned plumbing and utility connections for functional kitchens and modern bathroom installations.",
    },
    {
      id: 4,
      image: user4,
      title: "Glass Façade Design",
      description:
        "Modern glass façade options that enhance natural light, improve aesthetics, and give the rooftop unit a premium architectural look while maintaining strength and durability.",
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
            Rooftop Prefabricated<br />
            <span>Rooms for Residential Flats
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Transform unused rooftops into modern residential spaces with lightweight, durable,
            and fully engineered prefab structures designed for safety, comfort, and speed.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>


      {/* ── SECTION 1: MAXIMIZE YOUR BUILDING POTENTIAL ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Maximize Your<br />
            <span>Building Potential</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.mainImage}>
              <img src={resident2} alt="Main Building" />
            </div>
            <div className={styles.smallImage}>
              <img src={resident3} alt="Interior" />
            </div>
          </div>

          <div className={styles.introText}>
            <p>
              As urban land becomes increasingly limited, making efficient use of existing structures has become essential.
              Rooftop expansion offers a practical and intelligent solution to create additional residential flats without
              the need for relocation or full-scale reconstruction. It allows property owners to utilize unused rooftop
              space and convert it into fully functional living units, adding both value and usability to the building.
            </p>
            <p>
              L&R Green India Pvt Ltd provides advanced prefabricated rooftop structures designed with a strong focus
              on safety, speed, and long-term durability. These systems are engineered to integrate smoothly with existing
              buildings while requiring minimal structural modifications. With lightweight construction and precision
              engineering, they ensure stable performance, modern aesthetics, and comfortable residential spaces built for urban living.
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




      {/* ── SECTION 2: WHERE ROOFTOP RESIDENTIAL UNITS CAN BE USED ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Where Rooftop Residential<br />
            <span>Units Can Be Used</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Rooftop residential units turn unused roof space into modern, functional living areas.
                They are quick to install, space-efficient, and ideal for expanding homes or
                buildings without major construction.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Additional residential flats</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rental apartments</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Guest accommodation units</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Studio living spaces</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Penthouse-style extensions</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Staff housing units</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Temporary or permanent housing solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.residentialImageWrapper}>
            <div className={styles.residentialMainImage}>
              <img src={resident4} alt="Main Building" />
            </div>

            <div className={styles.residentialFloatingImage}>
              <img src={resident5} alt="Interior" />
            </div>
          </div>
        </div>
      </section>



      {/* ── SECTION 3: DESIGNED AROUND YOUR LIFESTYLE ── */}
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




      {/* ── SECTION 4: ENGINEERED FOR SAFE URBAN LIVING ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Roof top residential flat </h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Engineered for <br />
              Safe Urban Living
            </h2>
            <p>
              Our rooftop units are built with lightweight steel framing, PUF insulated panels,
              and weather-resistant roofing for strength, comfort, and durability. Designed to
              reduce load on existing buildings, they include earthquake and wind resistance along
              with proper structural safety assessment for reliable urban expansion.
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




      {/* ── SECTION 5: ADVANTAGES OF PREFAB RESIDENTIAL FLATS ── */}
      <section className={styles.conatineUser}>
        <div className={styles.containerMax}>
          <h2>
            Advantages of Prefab <br />
            <span>Residential Flats</span>
          </h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.dualImageContainer}>
            <div className={styles.primaryDisplayImage}>
              <img src={resident6} alt="Main Building" />
            </div>

            <div className={styles.secondaryDisplayImage}>
              <img src={resident7} alt="Interior" />
            </div>
          </div>
          <div className={styles.containerText}>
            <p>Prefabricated rooftop flats are a quick, cost-effective way to expand space with minimal
              load on existing buildings. They are energy-efficient, flexible, modern in design, and cause
              very little disruption during installation.</p>
            <div className={styles.applicationFeatureList}>
              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Minimal load on existing structure</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Fast installation within weeks</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Cost-effective compared to new construction</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Fully removable or relocatable units</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Energy-efficient interiors</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Modern architectural look</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ── SECTION 6: WHY CHOOSE ROOFTOP PREFAB ROOMS ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>At L&R Green India Pvt Ltd, we specialize in delivering safe, durable, and high-performance
              rooftop residential structures using advanced steel engineering and modern prefabrication
              technology. Our focus is on creating reliable solutions that ensure strength, efficiency,
              and long-term value for urban living spaces.</p>
            <p>With a strong commitment to quality and precision, we provide complete turnkey solutions
              from design to execution. Our expert team ensures fast project delivery, safe installation
              over existing buildings, and the use of high-quality materials and insulation systems for superior results.</p>
          </div>
          <div className={styles.stackedImageLayout}>
            <div className={styles.heroImageFrame}>
              <img src={resident8} alt="Main Building" />
            </div>

            <div className={styles.overlayImageFrame}>
              <img src={resident9} alt="Interior" />
            </div>
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
          <p>Find answers to common questions about prefabricated rooftop residential flats, including
            installation, safety, customization, and suitability for different building types.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={resident1} alt="warehouse" />
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
        <h2>Ready for Your Prefab Servant Room Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized insulated
          Prefab Servant Room solutions tailored to your site needs.
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

export default RooftopResidential;
