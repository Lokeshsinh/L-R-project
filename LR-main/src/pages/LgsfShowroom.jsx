import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfShowroom.module.css";
import {
  ArrowRight, ArrowUpRight, Plus, X, Zap,
  Rows3,
  Palette,
  LayoutGrid,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import showroom1 from '../assets/LGFS/showroom/showroom1.png'
import showroom2 from '../assets/LGFS/showroom/showroom2.png'
import showroom3 from '../assets/LGFS/showroom/showroom3.png'
import showroom4 from '../assets/LGFS/showroom/showroom4.jpg'
import showroom5 from '../assets/LGFS/showroom/showroom5.png'
import showroom6 from '../assets/LGFS/showroom/showroom6.png'
import showroom7 from '../assets/LGFS/showroom/showroom7.png'
import design from '../assets/LGFS/showroom/design.png'
import design1 from '../assets/LGFS/showroom/design1.png'


const LgsfShowroom = () => {
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
      q: "What is an LGSF showroom?",
      a: "It is a modern commercial showroom building constructed using light-gauge galvanized steel frame sections and premium insulated panels.",
    },
    {
      id: 1,
      q: "Can we have large glass display windows in LGSF showrooms?",
      a: "Yes, our engineering allows for seamless integration of heavy structural glazing, large glass storefronts, and elegant curtain walls.",
    },
    {
      id: 2,
      q: "How fast can an LGSF showroom be constructed?",
      a: "Depending on the total area, LGSF showrooms can be fully erected and finished on-site within 6 to 10 weeks, saving months compared to concrete.",
    },
    {
      id: 3,
      q: "What is the height limit for LGSF commercial showrooms?",
      a: "We can easily build LGSF showrooms with double-height ceilings or multi-story structures up to 3 floors with proper structural engineering.",
    },
    {
      id: 4,
      q: "Are LGSF showrooms energy efficient?",
      a: "Yes, the advanced insulated core panels provide exceptional thermal resistance, reducing HVAC energy costs by up to 35%.",
    },
  ];



  const cards = [
    {
      icon: <Zap size={48} strokeWidth={1.7} />,
      title: "Fast Construction",
      description:
        "Enables up to 3x faster building completion compared to traditional showroom construction methods.",
    },
    {
      icon: <Rows3 size={48} strokeWidth={1.7} />,
      title: "Open Space Design",
      description:
        "Provides large column-free interiors, making it ideal for product display, branding, and customer movement.",
      active: true,
    },
    {
      icon: <Palette size={48} strokeWidth={1.7} />,
      title: "Flexible Architecture",
      description:
        "Supports innovative designs including curved walls, modern facades, and customized layouts.",
    },
    {
      icon: <LayoutGrid size={48} strokeWidth={1.7} />,
      title: "Lightweight Structure",
      description:
        "Reduces overall structural load, resulting in lower foundation costs and quicker installation.",
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
            LGSF Showroom<br />
            <span>Solutions
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





      {/* ── SECTION 2: LGSF SHOWROOM INTRODUCTION ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            LGSF
            <span>Showroom</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.mainImage}>
              <img src={showroom1} alt="Main Building" />
            </div>
            <div className={styles.smallImage}>
              <img src={showroom2} alt="Interior" />
            </div>

          </div>

          <div className={styles.introText}>
            <p>
              An LGSF showroom is a prefabricated exhibition space constructed using cold-formed galvanized steel
              framing, designed to deliver modern, fast, and efficient building solutions. It showcases advanced
              construction technology that combines strength, speed, and architectural flexibility, making it a
              preferred choice over traditional building methods.
            </p>
            <p>
              It is built using a prefabricated steel frame system that allows quick installation and easy relocation
              when required. These showrooms are ideal for modern commercial display spaces, offering open, customizable
              layouts that support branding, product showcasing, and contemporary design requirements.
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





      {/* ── SECTION 3: WHERE LGSF SHOWROOMS ARE USED ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Where LGSF<br />
            <span>Showrooms Are Used</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                LGSF showrooms are widely used across commercial and industrial sectors due to their
                fast construction, flexibility, and modern design capabilities, making them suitable
                for various display and business applications.
              </p>
              <ul>
                <li>Automobile Showrooms</li>
                <li>Furniture Display Centers</li>
                <li>Retail Exhibition Spaces</li>
                <li>Sales & Marketing Offices</li>
                <li>Temporary & Relocatable Showrooms</li>
                <li>Industrial Product Display Units</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageGalleryWrapper}>
            <div className={styles.primaryImageCard}>
              <img src={showroom3} alt="Main Building" />
            </div>
            <div className={styles.floatingImageCard}>
              <img src={showroom4} alt="Interior" />
            </div>
          </div>
        </div>
      </section>



      {/* ── SECTION 4: DURABILITY & SUSTAINABILITY OF LGSF SHOWROOMS ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R LGSF Showrooms  </h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Durability & Sustainability<br />
              of LGSF Showrooms
            </h2>
            <p>
              Our LGSF showrooms are designed for high strength, safety, and long-term performance
              while also following eco-friendly construction practices. Built with galvanized steel
              technology, they offer resistance to earthquakes, fire, termites, and corrosion, ensuring
              reliable structural durability. At the same time, they promote sustainability through
              recyclable materials, reduced construction waste, lower carbon footprint, and energy
              -efficient building systems.
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

      {/* ── SECTION 5: KEY FEATURES OF LGSF SHOWROOMS ── */}
      <section className={styles.featureShowroom}>
        <div className={styles.featureShowFlex}>
          <div className={styles.featureShowUser}>
            <h2>Key Features of <br /><span>LGSF Showrooms</span></h2>
            <div className={styles.FaqsLine}></div>

          </div>
          <p>LGSF showrooms are modern, efficient structures that combine speed, flexibility,
            and smart engineering to deliver cost-effective and fast-built commercial display spaces.</p>
        </div>
        <div className={styles.showroomGrid}>
          {cards.map((item, index) => (
            <div
              key={index}
              className={`${styles.showroomCard} ${item.active ? styles.activeCard : ""
                }`}
            >
              <span className={styles.hoverLayer}></span>

              <div className={styles.showroomIcon}>
                {item.icon}
              </div>

              <div className={styles.showroomContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: PRECISION ENGINEERING & WHY CHOOSE L&R ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Precision Engineering<br /><span>& Why Choose L&R</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.mushroomImageLayout}>
            <div className={styles.mushroomMainImage}>
              <img src={showroom5} alt="Main Building" />
            </div>

            <div className={styles.mushroomFloatingImage}>
              <img src={showroom6} alt="Interior" />
            </div>
          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>L&R Green Pvt Ltd delivers advanced LGSF showroom solutions through a precise and systematic
              manufacturing process, ensuring high-quality results from design to final assembly. Every
              project begins with custom design engineering, followed by high-precision steel fabrication,
              off-site panel preparation, strict quality inspections, and efficient on-site dispatch and
              assembly for smooth execution.</p>
            <p>We are chosen for our expert engineering team, fast project delivery, and flexible custom
              design capabilities that meet diverse client needs. With high-quality manufacturing standards
              and complete end-to-end project support, we ensure reliable, durable, and modern showroom
              structures built with efficiency and excellence.</p>
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
          <p>LGSF showrooms are modern prefabricated steel structures that offer fast construction,
            high durability, and flexible design options for commercial display spaces. Below are some
            frequently asked questions about LGSF showroom systems.</p>
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
            <img src={showroom7} alt="warehouse" />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your LGSF Showroom Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and
          fully customized insulated  LGSF Showroom  solutions tailored to your site needs.
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

export default LgsfShowroom;
