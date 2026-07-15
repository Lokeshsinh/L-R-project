import React, { useState, useEffect } from "react";
import {
  Plus, X
} from "lucide-react";
import {useNavigate} from 'react-router-dom'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "../styles/PremiumMsContainer.module.css";
import room1 from '../assets/conatiners/premiumContainer/room1.png';
import room2 from '../assets/conatiners/premiumContainer/room2.png'
import room3 from '../assets/conatiners/premiumContainer/room3.png'
import card1 from '../assets/conatiners/premiumContainer/can.png';
import card2 from '../assets/conatiners/premiumContainer/can3.png';
import card3 from '../assets/conatiners/premiumContainer/can2.png';
import card4 from '../assets/conatiners/premiumContainer/can4.png';
import container2 from '../assets/msConatiner/conatiner2.png'


const PremiumMsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerSizes = [
    {
      size: "40×10×8.5 / 40×8×8.5",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation",
        "Worker Accommodation",
        "Dining Hall Containers",
        "Battery Storage",
        "Gym Hall Containers",
        "Cafe & Hall Units",
        "Store Hall Containers",
      ],
      highlight: false,
    },
    {
      size: "20×10×8.5 / 20×8×8.5",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation",
        "Worker Accommodation",
        "Dining Hall Containers",
        "Battery Storage",
        "Gym Hall Containers",
        "Cafe & Hall Units",
        "Store Hall Containers",
      ],
      highlight: true,
    },
    {
      size: "10×10×8",
      features: [
        "Staff offices Containers",
        "Engineer's Accommodation",
        "Worker Accommodation",
        "Dining Hall Containers",
        "Battery Storage",
        "Gym Hall Containers",
        "Cafe & Hall Units",
        "Store Hall Containers",
      ],
      highlight: false,
    },
  ];

  const industryProjects = [
    {
      title: "Staff Office Containers",
      desc: "Modern, fully furnished office containers built for comfortable workspaces. Ideal for construction sites, industrial projects, and temporary offices.",
      img: card1,
    },
    {
      title: "Dining Hall Containers",
      desc: "Spacious and hygienic dining containers designed for workers and staff. Built for comfort, durability, and easy maintenance.",
      img: card2,
    },
    {
      title: "Gym Hall Containers",
      desc: "Modular gym containers that promote employee fitness and wellness. Durable, secure, and suitable for industrial and commercial sites.",
      img: card3,
    },
    {
      title: "Toilet Block Containers",
      desc: "Portable toilet containers with modern sanitary facilities. Designed for hygiene, convenience, and long-lasting performance.",
      img: card4,
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are Premium Containers used for?",
      a: "They are premium modular solutions designed for corporate site offices, high-end staff housing, dining halls, gyms, and specialized technical control rooms across industrial and commercial projects.",
    },
    {
      id: 1,
      q: "Are Premium Containers durable?",
      a: "Yes, they are built with strong MS-steel and designed to handle harsh industrial and weather conditions. Industrial-grade coatings ensure long-lasting performance.",
    },
    {
      id: 2,
      q: "Can Premium Containers be customized?",
      a: "Absolutely. Interior layouts, electrical points, HVAC systems, flooring, and partition designs can all be tailored to your specific project requirements.",
    },
    {
      id: 3,
      q: "How fast can Premium Containers be installed?",
      a: "Most units can be delivered and installed within 7–15 working days depending on size, customization level, and site location.",
    },
    {
      id: 4,
      q: "Are Premium Containers movable?",
      a: "Yes. Our containers are designed for easy relocation using standard cranes or flatbed trucks, making them ideal for projects that require phased deployment.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            PREMIUM MS <br />
            <span>CONTAINERS</span>
          </h1>
          <p className={styles.heroDesc}>
            Premium MS Containers delivering durable, flexible, and fast-deploy
            modular solutions for industrial, commercial, and site-based
            applications.
          </p>
          <button className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h2>
            Premium Ms <span>Container</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.introGrid}>
          <div className={styles.introVisuals}>
            <div className={styles.imgMain}>
              <img src={room1} alt="room" />
            </div>
            <div
              className={styles.imgSub}>
              <img src={room2} alt="room" />
            </div>
          </div>
          <div className={styles.introContent}>
            <p>
              L&R Premium Series containers are high-quality, durable modular structures built with strong
              mild steel frameworks, designed to perform efficiently in demanding industrial and commercial
              environments. These containers are ideal for heavy-duty storage, secure site offices, and comfortable accommodation,
              offering a reliable and professional solution for both temporary and long-term applications.
            </p>
            <p>
              VThey are equipped with advanced insulation, corrosion-resistant coatings, and well-finished interiors
              that include electrical fittings and customizable layouts. Built for strength, comfort, and flexibility,
              these containers provide a
              modern, portable solution that ensures safety, efficiency, and quick deployment across various project sites.
            </p>
            <button className={styles.btnOutline}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>


      {/* ── Why Choose ── */}
      <section className={styles.whySec}>
        <div className={styles.whyText}>
          <h2>
            Why Choose <br />
            <span>Premium Ms Containers</span>
          </h2>
          <div className={styles.WhyLine}></div>
        </div>
        <div className={styles.whyGrid}>
          <div className={styles.whyContent}>
            <p>
              Premium Ms Containers are designed for superior quality, strength,
              and modern functionality, making them ideal for high-end industrial
              and commercial applications. Built with robust MS steel structure
              and premium finishes, they ensure durability, safety, and comfort
              even in extreme working conditions.
            </p>
            <p>
              They offer complete flexibility with customizable layouts for
              offices, accommodation, and specialized spaces. With fast
              installation, easy mobility, and long service life, Premium Series
              Containers provide a reliable and efficient solution for demanding
              project requirements.
            </p>
          </div>
          <div className={styles.whyImagesCol}>
            <div className={styles.whyImgTop}>
              <img src={room3} alt="room" />
            </div>
            <div className={styles.whyImgBottom}>
              <img src={room2} alt="room" />
            </div>
          </div>
        </div>
      </section>


      {/* ── Sizes Grid ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.secHeaderCenter}>
            <h2 className={styles.secTitle}>
              The Types of Premium <br />
              <span>MS Container Sizes</span>
            </h2>
            <p>
              Five core footprints, available in dozens of interior layouts from
              executive offices to dining halls.
            </p>
          </div>
          <div className={styles.sizesGrid}>
            {containerSizes.map((item, index) => (
              <div
                key={index}
                className={`${styles.sizeCard} ${item.highlight ? styles.activeCard : ""
                  }`}
              >
                <div className={styles.cardIcon}>📦</div>
                <h3>{item.size}</h3>
                <ul className={styles.featureList}>
                  {item.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Engineering Banner ── */}
      <section className={styles.engineeringBand}>
        <div className={styles.bandContainer}>
          <div className={styles.bandText}>
            <h2>
              High Strength Engineering <br />& Premium Ms Container
            </h2>
            <p>
              Built with heavy-duty MS steel and precision fabrication, these
              containers deliver superior strength, stability, and long-lasting
              performance in tough working conditions. They are manufactured
              under strict quality control to ensure durability, safety, and
              reliable use across industrial and commercial applications.
            </p>
          </div>
          <div className={styles.bandImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=800&q=80"
              alt="Premium MS Container"
            />
          </div>
        </div>
      </section>


      {/* ── Applications ── */}
      <section className={styles.appsSec}>
        <div className={styles.appsInner}>
          <div className={styles.appsHeader}>
            <div className={styles.appsText}>
              <h2 className={styles.secTitle}>
                Premium Ms Container <br />
                <span>Applications Projects</span>
              </h2>
              <div className={styles.appsLine}></div>
            </div>
            <p>
              High-quality MS container solutions designed for efficient, durable,
              and flexible use across industrial and commercial project
              environments.
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {industryProjects.map((item, index) => (
              <div className={styles.expCard} key={index}>
                <img src={item.img} alt={item.title} className={styles.expImg} />

                <div className={styles.expLabel}>
                  <h4>{item.title}</h4>

                  <div className={styles.desc}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQ</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>
              Frequently Asked
              <br />
              <span>Questions</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>
            Find answers to common questions about our container solutions,
            design process, and performance benefits.
          </p>
        </div>

        {/*  */}
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={container2} alt="container" />
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


      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready to Build Your Premium Containers?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized Premium containers tailored to your storage needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default PremiumMsContainer;