import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/pufsandwich.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import pufpanel1 from '../assets/panel/pufPanel/pufpanel1.png'
import pufpanel2 from '../assets/panel/pufPanel/pufpanel2.png'
import pufpanel3 from '../assets/panel/pufPanel/pufpanel3.png'
import pufpanel5 from '../assets/panel/pufPanel/pufpanel5.png'
import design from '../assets/panel/pufPanel/design.png'
import design1 from '../assets/panel/pufPanel/design1.png'
import user1 from '../assets/panel/pufPanel/user1.png'
import user2 from '../assets/panel/pufPanel/user2.png'
import user3 from '../assets/panel/pufPanel/user3.png'
import user4 from '../assets/panel/pufPanel/user4.png'



const PufSandwich = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Roof PUF Panels",
      description:
        "Thermally efficient and durable panels designed for strong roofing applications with excellent insulation performance.",
    },
    {
      id: 2,
      image: user2,
      title: "Wall PUF Panels",
      description:
        "Used for vertical wall cladding and internal partitions, providing strong insulation and clean finishing.",
    },
    {
      id: 3,
      image: user3,
      title: "Rock Wool Panels",
      description:
        "Fire-resistant insulation panels made with rock wool core, offering excellent thermal and acoustic performance.",
    },
    {
      id: 4,
      image: user4,
      title: "Glass Wool Panels",
      description:
        "Lightweight insulation panels with glass wool core, providing effective thermal insulation and noise reduction.",
    },
  ];


  const faqs = [
    {
      id: 0,
      q: "What are prefab railway & telecom shelters used for?",
      a: "These modular shelters are used to house critical telecom equipment, signaling systems, power generators, or act as passenger waiting shelters on railway platforms.",
    },
    {
      id: 1,
      q: "How durable are these shelters?",
      a: "They are built with heavy-duty steel structures and corrosion-resistant materials, ensuring long-term durability in harsh weather conditions.",
    },
    {
      id: 2,
      q: "Can the shelters be customized?",
      a: "Absolutely. We manufacture shelters in standard sizes and offer fully custom dimensions. Interior fit-outs for cable management, air conditioning, and battery racks can be specified.",
    },
    {
      id: 3,
      q: "How long does installation take?",
      a: "Because all components are pre-fabricated and pre-drilled at our facility, a standard telecom shelter cabin can be installed in as little as 1-2 days, while larger railway platform shelters typically take 3-7 days.",
    },
    {
      id: 4,
      q: "Are these shelters suitable for remote locations?",
      a: "Yes. Their prefabricated, lightweight components are easily transported and assembled on-site with minimal equipment, making them ideal for remote or difficult terrains.",
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
            High-Performance   <br />
            <span>puf sandwich panel
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Durable & weather-resistant railway infrastructure solutions — engineered for safety,
            longevity and rapid deployment across platforms, yards and operational zones.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>







      {/* ── PUF SANDWICH PANELS INTRO ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Reliable Prefabricated  <br />
            <span>Canteen Infrastructure</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.panelCard}>

            <div className={styles.panelImageBox}>
              <img
                src={pufpanel1}
                alt="Sandwich Panel"
                className={styles.panelImage}
              />
            </div>

            <div className={styles.panelAccent}></div>

          </div>
          <div className={styles.introText}>
            <p>
              PUF (Polyurethane Foam) Sandwich Panels by L&amp;R Green Pvt Ltd
              are prefabricated construction materials made with a rigid
              polyurethane foam core placed between durable metal facings such
              as pre-painted galvanized iron (PPGI), galvanized steel, or
              aluminum. This engineered structure offers an ideal combination of
              strength, insulation, and long- term durability, making it highly
              suitable for modern construction requirements.
            </p>
            <p>
              These panels are widely used in industrial, commercial, and
              residential projects due to their excellent thermal insulation,
              lightweight nature, and fast installation process. They help
              reduce energy consumption, enhance indoor comfort, and
              significantly shorten construction timelines, making them a
              reliable and cost-effective solution for sustainable building
              systems.
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




      {/* ── KEY SPECIFICATIONS & COMPOSITION ── */}
      <section className={styles.specsSec}>
        <div className={styles.specTitle}>
          <h2>
            Key Specifications <br />
            <span>&amp; Composition</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.specsContainer}>
          <div className={styles.specsText}>
            <p>
              PUF Sandwich Panels by L&amp;R Green Pvt Ltd feature a rigid
              polyurethane foam core between durable metal facings, ensuring
              strong insulation and structural performance.
            </p>
            <div className={styles.featureListWrap}>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}><strong>Core Material:</strong> Rigid Polyurethane Foam (PUF) with low thermal conductivity</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}><strong>Facing Materials: </strong>0.3mm – 0.6mm Pre-Painted Galvanized Iron Stainless Steel</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}><strong>Panel Thickness:</strong> 30mm – 150mm (based on insulation requirements)</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}><strong>Standard Width:</strong> 1000mm – 1150mm</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}><strong>Density:</strong> 38–42 kg/m³ (typical PUF core)</p>
              </div>

            </div>
          </div>
          {/* image */}
          <div className={styles.panelShowcaseCard}>

            <div className={styles.panelShowcaseImageWrapper}>
              <img
                src={pufpanel2}
                alt="Sandwich Panel"
                className={styles.panelShowcaseImage}
              />
            </div>

            <div className={styles.panelSideRibbon}></div>

          </div>
        </div>
      </section>




      {/* ── ADVANCED MANUFACTURING TECHNOLOGY ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R PUF Sandwich Panels</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Advanced Manufacturing  <br />
              Technology for PUF Sandwich Panels
            </h2>
            <p>
              At L&R Green Pvt Ltd, PUF Sandwich Panels are manufactured using advanced continuous
              production lines that ensure uniform foam expansion, precise density control, and strong
              bonding between metal facings and the polyurethane core, along with precision cutting, edge
              finishing, and strict quality testing for insulation and structural strength, resulting in
              high-performance panels that deliver durability, efficiency, and long-lasting reliability.
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



      {/* ── TYPES OF PUF PANELS ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Built for every  <br />
              <span>site, every shift</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Versatile modular canteens engineered for the diverse needs
            of industrial and construction projects.
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






      {/* ── ADVANTAGES SECTION ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Advantages of Prefabricated <br />
            <span>Railway &amp; Telecom Shelters</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.imageDisplayCard}>
            <div className={styles.imageDisplayWrapper}>
              <img
                src={pufpanel3}
                alt="Sandwich Panel"
                className={styles.imageDisplay}
              />
            </div>
            <div className={styles.rightHighlightBar}></div>
          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                At L&R Green Pvt Ltd, we are committed to delivering high-quality PUF
                Sandwich Panel solutions that combine advanced technology, superior materials,
                and reliable service to meet the evolving needs of modern construction projects.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Premium MS Steel Structure</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Fast Installation & Delivery</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Weather Resistant Design</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Custom Layout Solutions</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Complete After Sales Support</p>
                </div>
              </div>
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
          <p>Quick answers to common queries about modular
            staff canteen design, installation, and usage.</p>
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
            <img src={pufpanel5} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Puf Sandwich Panels?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Puf Sandwich Panels tailored to your storage needs.
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

export default PufSandwich;
