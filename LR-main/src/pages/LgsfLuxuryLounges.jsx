import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/LgsfLuxuryLounges.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import luxury1 from '../assets/LGFS/Luxury/luxury1.png'
import luxury2 from '../assets/LGFS/Luxury/luxury2.png'
import luxury3 from '../assets/LGFS/Luxury/luxury3.png'
import luxury4 from '../assets/LGFS/Luxury/luxury4.png'
import design from '../assets/LGFS/Luxury/design.png'
import design1 from '../assets/LGFS/Luxury/design2.png'
import user1 from '../assets/LGFS/Luxury/user1.png'
import user2 from '../assets/LGFS/Luxury/user2.png'
import user3 from '../assets/LGFS/Luxury/user3.png'
import user4 from '../assets/LGFS/Luxury/user4.png'
// const BLANK =
//   "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const LgsfLuxuryLounges = () => {
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
      q: "What is an LGSF Luxury Lounge?",
      a: "An LGSF Luxury Lounge is a high-end modular structure built using lightweight steel framing technology, enabling sophisticated architectural designs with faster construction than traditional methods.",
    },
    {
      id: 1,
      q: "How long does it take to construct an LGSF lounge?",
      a: "Most LGSF luxury lounges can be completed within 3–4 weeks, depending on size, design complexity, and site conditions.",
    },
    {
      id: 2,
      q: "Is LGSF construction durable and safe?",
      a: "Yes, our light-gauge steel frames are engineered to withstand extreme winds, seismic forces, and adverse weather conditions, ensuring long-term safety and structural durability.",
    },
    {
      id: 3,
      q: "Can the design be customized?",
      a: "Absolutely. We offer complete architectural flexibility, allowing you to customize layout plans, finishes, cladding materials, and lighting to match your aesthetic requirements.",
    },
    {
      id: 4,
      q: "Where can LGSF luxury lounges be used?",
      a: "They are perfect for VIP meeting rooms, airport lounges, exclusive hotel recreation zones, executive cabins, private villas, and high-end residential rooftop additions.",
    },
  ];

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "High-performance insulation",
      description:
        "Ensures excellent thermal control and energy efficiency, maintaining a comfortable indoor environment in all conditions.",
    },
    {
      id: 2,
      image: user2,
      title: "Elegant Interior Finishes",
      description:
        "Premium-quality interior designs that enhance aesthetics and deliver a luxurious look and feel.",
    },
    {
      id: 3,
      image: user3,
      title: "Acoustic & Thermal Comfort",
      description:
        "Provides superior sound insulation and temperature regulation for a calm and comfortable space experience.",
    },
    {
      id: 4,
      image: user4,
      title: "Strong & Lightweight Steel Structure",
      description:
        "Built using advanced LGSF technology, offering high strength, safety, and long-lasting durability with reduced weight.",
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
            LGSF Luxury<br />
            <span>Lounges
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Experience modern luxury with L&R Green Pvt Ltd’s LGSF prefab lounges offering elegant
            design, fast construction, and lasting durability for residential and commercial spaces.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── SECTION 2: INTRODUCTION TO LGSF LUXURY LOUNGES ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Introduction to LGSF<br />
            <span>Luxury Lounges</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              An LGSF Luxury Lounge is a high-end modular structure built using lightweight steel framing technology,
              enabling sophisticated architectural designs with faster construction than traditional methods. It ensures
              superior quality, strength, and long-term durability. This makes it a smart choice for modern construction needs.
            </p>
            <p>
              These lounges are ideal for premium environments where aesthetics, speed, and performance matter most.
              They offer a perfect blend of modern design, efficient construction, and reliable solutions for residential
              and commercial spaces. Their versatility makes them suitable for a wide range of luxury applications.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.modernImageFrame}>

            {/* Corner Decorations */}
            <span className={`${styles.corner} ${styles.topLeft}`}></span>
            <span className={`${styles.corner} ${styles.topRight}`}></span>
            <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
            <span className={`${styles.corner} ${styles.bottomRight}`}></span>

            <div className={styles.modernImageWrapper}>
              <img
                src={luxury1}
                alt="Modern Living Room"
                className={styles.modernImage}
              />
            </div>

          </div>
        </div>
      </section>




      {/* ── SECTION 3: WHERE YOU CAN USE LGSF LUXURY LOUNGES ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Where You Can Use<br />
            <span>LGSF Luxury Lounges</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.livingFrameContainer}>

            {/* Corner Decorations */}
            <span className={`${styles.frameCorner} ${styles.cornerTopLeft}`}></span>
            <span className={`${styles.frameCorner} ${styles.cornerTopRight}`}></span>
            <span className={`${styles.frameCorner} ${styles.cornerBottomLeft}`}></span>
            <span className={`${styles.frameCorner} ${styles.cornerBottomRight}`}></span>

            <div className={styles.livingImageContainer}>
              <img
                src={luxury2}
                alt="Modern Living Room"
                className={styles.livingRoomImage}
              />
            </div>

          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                LGSF homes offer unmatched speed, strength, and sustainability, making them a future-ready
                construction solution. Their lightweight yet durable structure ensures faster construction,
                reduced costs, and long-term performance with minimal maintenance.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>VIP Meeting Areas</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Airport Lounges</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Exclusive Event Spaces</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Premium Residential Extensions</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Resorts & Retreats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* ── SECTION 4: BUILD THE FUTURE OF LUXURY SPACES ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Prefab Residential Houses</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Build the Future<br />
              of Luxury Spaces
            </h2>
            <p>
              From concept to completion, L&R Green Pvt Ltd delivers premium prefabricated lounge
              solutions that redefine comfort, durability, and modern architecture. We focus on
              innovative engineering and precision craftsmanship to ensure every structure meets
              global quality standards, combining speed, sustainability, and long-lasting
              performance for modern infrastructure needs.
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




      {/* ── SECTION 5: LUXURY MEETS ENGINEERING ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Luxury Meets<br />
              <span>Engineering</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            At L&R Green Pvt Ltd, we combine advanced engineering with premium architectural
            design to create luxury lounge spaces that deliver comfort, performance, and long-lasting value.
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



      {/* ── SECTION 6: WHY CHOOSE LGSF LUXURY LOUNGES ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose LGSF<br /><span>Luxury Lounges</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>At L&R Green Pvt Ltd, we specialize in delivering next-generation LGSF luxury lounge
              solutions that combine precision engineering with modern architectural design. Our approach
              focuses on creating innovative, durable, and visually refined structures that meet the evolving
              demands of premium infrastructure.</p>
            <p>We ensure high-quality steel framing systems, fast and efficient project execution, fully
              customized architectural designs, and sustainable construction practices. With complete
              end-to-end project management, we handle every stage seamlessly to deliver reliable,
              future-ready luxury lounge solutions.</p>
          </div>
          <div className={styles.interiorFrame}>
            <span className={`${styles.frameEdge} ${styles.edgeTopLeft}`}></span>
            <span className={`${styles.frameEdge} ${styles.edgeTopRight}`}></span>
            <span className={`${styles.frameEdge} ${styles.edgeBottomLeft}`}></span>
            <span className={`${styles.frameEdge} ${styles.edgeBottomRight}`}></span>

            <div className={styles.interiorImageWrapper}>
              <img
                src={luxury3}
                alt="Modern Living Room"
                className={styles.interiorImage}
              />
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
          <p>Find quick answers to common questions about LGSF luxury lounges and
            L&R Green Pvt Ltd’s prefabricated construction solutions.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={luxury4} alt="warehouse" />
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
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/Images/frelux.jpg")`,
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your LGSF Luxury Lounges?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized insulated LGSF Luxury Lounges solutions tailored to
            your site needs.
          </p>
          <button className={styles.btnSecondary}>
            Contact US &nbsp;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LgsfLuxuryLounges;
