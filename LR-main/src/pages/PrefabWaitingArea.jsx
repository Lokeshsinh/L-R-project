import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabWaitingArea.module.css";
import {
  ArrowRight, ArrowUpRight, Plus, X, Hammer,
  DollarSign,
  Shield,
  Leaf,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import wating1 from '../assets/LGFS/wating/wating.png'
import wating2 from '../assets/LGFS/wating/waiting1.png'
import wating3 from '../assets/LGFS/wating/wating2.png'
import user1 from '../assets/LGFS/wating/user1.png'
import user2 from '../assets/LGFS/wating/user2.png'
import user3 from '../assets/LGFS/wating/user3.png'
import user4 from '../assets/LGFS/wating/user4.png'
import design from '../assets/LGFS/wating/design.png'
import design1 from '../assets/LGFS/wating/design1.png'


const PrefabWaitingArea = () => {
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
      title: "Healthcare & Hospitals",
      description:
        "Hygienic and comfortable waiting spaces designed to manage patient flow efficiently while maintaining a calm environment.",
    },
    {
      id: 2,
      image: user2,
      title: "Corporate Offices",
      description:
        "Professional waiting lounges that enhance visitor experience and reflect a modern, premium brand image.",
    },
    {
      id: 3,
      image: user3,
      title: "Retail & Commercial Spaces",
      description:
        "Attractive waiting zones that improve customer comfort and enhance the overall shopping experience in busy environments.",
    },
    {
      id: 4,
      image: user4,
      title: "Transport & Public Hubs",
      description:
        "Durable and high-capacity waiting areas built for airports, bus stations, and other crowded public transport zones",
    },
  ];

  const featureData = [
    {
      icon: <Hammer size={42} strokeWidth={1.7} />,
      title: "Fast Installation",
      description:
        "Quick deployment with minimal disruption, allowing faster setup of waiting spaces and reducing overall project completion time efficiently.",
    },
    {
      icon: <DollarSign size={42} strokeWidth={1.7} />,
      title: "Cost-Effective",
      description:
        "Budget-friendly construction method that reduces labor costs and material wastage while maintaining strong quality and modern design standards.",
      active: true,
    },
    {
      icon: <Shield size={42} strokeWidth={1.7} />,
      title: "High Durability",
      description:
        "Built to resist termites, rust, and heavy public usage, ensuring long-lasting structural strength and reliable performance over time.",
    },
    {
      icon: <Leaf size={42} strokeWidth={1.7} />,
      title: "Eco-Friendly",
      description:
        "Sustainable construction approach that minimizes environmental impact through efficient material usage and responsible building practices.",
    },
  ];



  const faqs = [
    {
      id: 0,
      q: "What is an LGSF prefabricated waiting area?",
      a: "It is a factory-built, modular waiting space constructed using Light Gauge Steel Framing and insulated sandwich panels, designed for rapid deployment at any facility.",
    },
    {
      id: 1,
      q: "How long does installation take?",
      a: "Installation is much faster than traditional construction, often completed within a short time depending on project size, with minimal on-site disruption.",
    },
    {
      id: 2,
      q: "Are prefab waiting areas durable?",
      a: "Yes, they are built to resist termites, rust, and heavy public usage, ensuring long-lasting structural strength and reliable performance over time.",
    },
    {
      id: 3,
      q: "Can the design be customized?",
      a: "Yes, we provide fully customized waiting areas with air conditioning, LED lighting, seating fixtures, branded interiors, and all required electrical fittings.",
    },
    {
      id: 4,
      q: "Where can these waiting areas be used?",
      a: "These prefabricated waiting spaces are ideal for airports, hospitals, offices, and public transport hubs where speed and efficiency are critical.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            LGSF Prefabricated   <br />
            <span>Waiting Areas
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Step into the future of efficient and stylish waiting solutions with
            advanced LGSF technology. Built for speed, strength, and modern aesthetics.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>







      {/* Intro Section */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Next-Generation  <br />
            <span>Prefabricated Waiting Spaces</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              LGSF prefabricated waiting areas by L&R Green Pvt Ltd are built using cold-formed galvanized
              steel for strong structural stability and long-lasting durability. These modern units are
              designed to handle continuous public usage in busy environments. They offer high resistance
              to corrosion, termites, and weather impact. The lightweight steel framing ensures faster construction
              without compromising strength. Overall, they provide a reliable and efficient solution for modern waiting spaces.
            </p>
            <p>
              These prefabricated waiting spaces are ideal for airports, hospitals, offices, and public transport
              hubs where speed and efficiency are critical. The modular design allows quick installation with
              minimal on-site disruption. They combine modern aesthetics with functional layouts for better
              user comfort. Flexible design options make them suitable for different space requirements.
              This makes them a smart choice for future-ready infrastructure development.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.hospitalImageContainer}>
            <div className={styles.bottomAccent}></div>
            <div className={styles.hospitalImageWrapper}>
              <img
                src={wating2}
                alt="Hospital Interior"
                className={styles.hospitalImage}
              />
            </div>

          </div>
        </div>
      </section>




      {/* Advantages Section - Pixel-perfect Card Grid with Active Navy Card */}
      <section className={styles.Advantage}>
        <div className={styles.Advantageflex}>
          <div className={styles.AdvantageText}>
            <h2>Advantages of LGSF <br /><span>Prefabricated Waiting Areas</span></h2>
            <div className={styles.advLine}></div>
          </div>
          <p>Our prefabricated waiting areas offer speed, strength, and sustainability.
            Built by L&R Green Pvt Ltd, they ensure fast construction, lasting durability, and modern design.</p>
        </div>
        <div className={styles.featureGrid}>
          {featureData.map((item, index) => (
            <article
              key={index}
              className={`${styles.featureCard} ${item.active ? styles.activeCard : ""
                }`}
            >
              <span className={styles.cardBg}></span>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Smart Prefab Solutions Banner */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R LGSF Prefabricated Waiting Areas  </h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Smart Prefab  <br />
              Solutions
            </h2>
            <p>
              L&R Green Pvt Ltd delivers eco-friendly, high-strength, and fully customizable
              prefabricated waiting areas built with advanced LGSF technology. Our solutions
              ensure sustainable construction with reduced waste and energy usage, while providing
              strong structural performance and modern architectural appeal. Each design is
              tailored to client needs, offering flexible layouts, seating options, finishes,
              and branding to create functional and visually refined waiting spaces.
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



      {/* Applications Section */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Applications of   <br />
              <span>Prefab Waiting Areas</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            L&R Green Pvt Ltd prefabricated waiting areas are designed for versatile use across
            high-traffic public and commercial spaces, ensuring comfort, durability, and modern functionality.
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

      {/* Why Choose Section */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Prefab <br /><span>Waiting Areas</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.medicalImageContainer}>

            {/* Bottom Decorative Bar */}
            <div className={styles.medicalBottomBar}></div>

            {/* Image */}
            <div className={styles.medicalImageFrame}>
              <img
                src={wating3}
                alt="Hospital Interior"
                className={styles.medicalDisplayImage}
              />
            </div>

          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>Prefabricated waiting areas by L&R Green Pvt Ltd are designed using advanced LGSF
              (Light Gauge Steel Framing) technology to deliver speed, strength, and modern
              architectural design. They are ideal for fast-moving infrastructure projects
              where quick execution and long-term durability are essential.</p>
            <p>These structures reduce construction time significantly while maintaining
              high engineering quality and cost efficiency. They provide a smart,
              future-ready solution for hospitals, offices, transport hubs, and public
              spaces with a professional and modern appearance.</p>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Find quick answers about LGSF prefab waiting areas by L&R Green Pvt Ltd,
            covering design, durability, installation, and usage to help you
            understand our modern construction solutions better.</p>
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
            <img src={wating1} alt="warehouse" />
          </div>
        </div>
      </section>







      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready for Your LGSF Prefab Waiting Area Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized insulated  Prefab Waiting Area solutions tailored to your site needs.
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

export default PrefabWaitingArea;
