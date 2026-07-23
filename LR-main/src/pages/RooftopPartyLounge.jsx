import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopPartyLounge.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import party1 from '../assets/rooftop/party/party1.png'
import party2 from '../assets/rooftop/party/party2.png'
import party3 from '../assets/rooftop/party/party3.png'
import party4 from '../assets/rooftop/party/party4.png'
import design from '../assets/rooftop/party/design.png'
import design1 from '../assets/rooftop/party/design1.png'
import user1 from '../assets/rooftop/party/user1.png'
import user2 from '../assets/rooftop/party/user2.png'
import user3 from '../assets/rooftop/party/user3.png'
import user4 from '../assets/rooftop/party/user4.png'

const RooftopPartyLounge = () => {
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
      q: "What is a prefabricated rooftop party lounge?",
      a: "It is a modern, modular entertainment space constructed on the roof of an existing building using lightweight steel frames and insulated panels.",
    },
    {
      id: 1,
      q: "Is it safe to construct on an existing building?",
      a: "Yes, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does construction take?",
      a: "Our modular prefabrication system allows us to complete the on-site assembly within a few weeks.",
    },
    {
      id: 3,
      q: "Can the lounge be customized?",
      a: "Yes, you can fully customize the layout, lounge seating, bar counters, lighting, and glass facades.",
    },
    {
      id: 4,
      q: "What are the acoustic benefits of the lounge?",
      a: "Our high-density insulation panels provide excellent soundproofing, minimizing sound transmission to the outside.",
    },
  ];

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Ambient LED lighting setups",
      description:
        "Creates a vibrant and stylish mood with customizable lighting effects for day and night events.",
    },
    {
      id: 2,
      image: user2,
      title: "Open seating arrangements",
      description:
        "Offers comfortable and flexible seating layouts that enhance social interaction and rooftop views.",
    },
    {
      id: 3,
      image: user3,
      title: "Music & sound system",
      description:
        "Supports high-quality audio systems to set the perfect vibe for parties and gatherings.",
    },
    {
      id: 4,
      image: user4,
      title: "Glass railing & modern",
      description:
        "Ensures safety while adding a sleek, contemporary look to the rooftop space.",
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
            Rooftop Party Lounge<br />
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



      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Modern Rooftop<br />
            <span>Party Living Concept</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.imageCard}>
            <img src={party1} alt="Terrace" />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.introText}>
            <p>
              Our prefabricated rooftop party lounges are thoughtfully designed to introduce a modern lifestyle upgrade
              to urban environments. These spaces transform ordinary rooftops into vibrant, functional, and aesthetically
              appealing lounges suitable for a wide range of experiences. From private celebrations and intimate family
              gatherings to stylish weekend hangouts and professional commercial lounge setups, every design focuses on
              maximizing comfort, usability, and visual appeal while making the best use of available rooftop space.
            </p>
            <p>
              These rooftop lounges redefine the way unused terrace areas are utilized by combining smart engineering with
              contemporary design. Built for flexibility and convenience, they allow property owners to create a premium
              social environment without the complexities of traditional construction. With quick installation and minimal
              structural changes, your rooftop can be converted into a lively destination that enhances both lifestyle value
              and property potential.
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


      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Smart & Safe<br />
            <span>Rooftop Engineering</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Built with advanced prefabrication technology, our rooftop lounges ensure
                durability and safety while maintaining a modern aesthetic.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Lightweight steel framework</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>PUF insulated panels for comfort</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Weather-resistant roofing system</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Strong load distribution design</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Minimal impact on existing building</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryImageContainer}>
            <img
              src={party2}
              alt="Terrace"
              className={styles.galleryImage}
            />

            <div className={styles.galleryOverlay}></div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: URBAN & COMMERCIAL ROOFTOP LOUNGE DESIGN ──
          Layout (per mockup):
            - Text (title + divider + para) on LEFT
            - Image on RIGHT
      */}



      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R party lou nge</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Urban & Commercial<br />
              Rooftop Lounge Design
            </h2>
            <p>
              Our prefabricated rooftop party lounges are ideal for residential, commercial, and
              hospitality spaces like apartments, hotels, cafés, corporate buildings, event venues,
              and co-working terraces. Fully customizable, they offer options such as themed interiors,
              flexible seating, glass or open designs, bar counters, HVAC systems, and lighting setups
              for a stylish and personalized rooftop experience.
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



      {/* ── SECTION 5: ENGINEERED FOR STRENGTH & SAFETY ──
          Layout (per mockup):
            - Header row: Title (bottom-left) + Description (right)
            - 4-card grid below
      */}


      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Engineered for<br />
              <span>Strength & Safety</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Experience a premium rooftop lifestyle with elegant interiors, ambient
            lighting, and open-air comfort designed for unforgettable moments.
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





      {/* ── SECTION 6: WHY CHOOSE L&R ROOFTOP PARTY LOUNGE ──
          Layout: Text LEFT | Image RIGHT
      */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.hoverImageContainer}>
            <img
              src={party3}
              alt="Terrace"
              className={styles.hoverImage}
            />

            <div className={styles.hoverImageOverlay}></div>
          </div>
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
        </div>
      </section>



      {/* ── SECTION 7: FAQ ── */}
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
            <img src={party4} alt="warehouse" />
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
        <h2>Ready for Your Prefab Party Lounge Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          insulated  Prefab Party Lounge solutions tailored to your site needs.
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

export default RooftopPartyLounge;
