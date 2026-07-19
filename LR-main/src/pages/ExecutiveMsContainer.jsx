import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ExecutiveMsContainer.module.css";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ChevronLeft, ChevronRight, Box } from "lucide-react";
import { Plus, X } from "lucide-react";
import container2 from '../assets/conatiners/ExecutiveContainer/contact.png'
import card1 from '../assets/conatiners/ExecutiveContainer/card1.png';
import card2 from '../assets/conatiners/ExecutiveContainer/card2.png';
import card3 from '../assets/conatiners/ExecutiveContainer/card3.png';
import card4 from '../assets/conatiners/ExecutiveContainer/card4.png';
import container1 from '../assets/conatiners/ExecutiveContainer/container1.png'
import container3 from '../assets/conatiners/ExecutiveContainer/container2.png'
import design from '../assets/conatiners/ExecutiveContainer/design1.png';
import design1 from '../assets/conatiners/ExecutiveContainer/design2.png';
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "40×10×8.5 / 40×8×8.5",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "20×10×8.5 / 20×8×8.5",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "10×10×8",
    dark: false,
    list: [
      "Staff Offices Containers",
      "Engineer's Accommodation Containers",
      "Worker Accommodation Containers",
      "Dining Hall Containers",
      "Battery Storage Containers",
      "Gym Hall Containers",
      "Cafe Containers",
      "Store Hall Containers",
      "Cement Store Containers",
      "Tube Well Pump Farm Accommodation Containers",
      "Coffee Shop Containers",
      "Baby Play Area Containers",
      "Toilet Block Containers",
      "Wash Room Block Containers",
      "Class Room Containers",
      "General Residential Containers",
    ],
  },
  {
    title: "6x6x8",
    dark: false,
    list: [
      "Toilet Cabin Containers",
      "Guard Cabin Block Containers",
      "Tube Well Residence  Containers",
      "cement store Containers",
      "Tube well  Pump Farm Store Containers",
      "coffee Shop Containers",
      "Wash Room Block Containers",
      "Cafe Containers  Hall Containers",

    ],
  },
  {
    title: "4x4x8 ",
    dark: false,
    list: [
      "Toilet Cabin Containers",
      "Guard Cabin Block Containers",
      "Farming Store  Containers",
      "Material store Containers",
      "coffee Shop Containers",
      "Wash Room Block Containers",
      "Cafe Containers  Hall Containers",

    ],
  },
];

const ExecutiveMsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate()

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };


  const industryProjects = [
    {
      title: "Staff Office Containers",
      desc: "Modern office containers designed for comfortable and productive workspaces. Ideal for construction sites, industrial projects, and temporary offices.",
      img: card1,
    },
    {
      title: "Worker Accommodation Containers",
      desc: "Comfortable accommodation units built for workers and site teams. Designed for efficient space, durability, and everyday convenience.",
      img: card2,
    },
    {
      title: "Site Office / Storage Containers",
      desc: "Versatile containers for office operations and secure material storage. Built to maximize space while ensuring durability and functionality.",
      img: card3,
    },
    {
      title: "Guard Cabin / Toilet Unit",
      desc: "Compact guard cabins with integrated toilet facilities for convenience. Ideal for security personnel at construction, industrial, and commercial sites.",
      img: card4,
    },
  ];



  const faqs = [
    {
      q: "What is an Executive MS Container?",
      a: "An Executive MS Container is a premium modular structure made from mild steel, designed to serve as offices, accommodation, storage, or any functional space on construction and industrial sites.",
    },
    {
      q: "What are Executive MS Containers used for?",
      a: "They are used for staff offices, worker accommodation, guard cabins, dining spaces, storage units, washrooms, and site utility rooms.",
    },
    {
      q: "Are Executive MS Containers durable?",
      a: "Yes, Executive MS Containers are built with high-grade mild steel and industrial coatings to withstand harsh weather, heavy use, and demanding site conditions for years.",
    },
    {
      q: "Can Executive MS Containers be customized?",
      a: "Absolutely. Layouts, partitions, electrical fittings, HVAC, insulation, and finishes can all be tailored to match your project's specific requirements.",
    },
    {
      q: "Where are Executive MS Containers commonly used?",
      a: "They are widely used on construction sites, industrial plants, mining operations, remote project locations, and anywhere a durable, rapidly deployable modular space is needed.",
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
            EXECUTIVE MS <br />
            <span>CONTAINERS</span>
          </h1>
          <p className={styles.heroDesc}>
            Strong and durable Executive MS Containers designed for offices,
            accommodation, storage, and all site-based modular space needs.
          </p>
          <button className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>


      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.imageWrapper}>

            {/* Main Image */}
            <div className={styles.mainImage}>
              <img src={container1} alt="Main Building" />
            </div>

            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={container3} alt="Interior" />
            </div>

          </div>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2>
                Executive <span>Ms Container</span>
              </h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&R Green India Pvt Ltd&amp;R Containers are durable modular
              structures made using mild steel (MS), designed to deliver strong,
              reliable, and ready-to-use spaces. They are built for quick
              installation, easy relocation, and long service life, making them
              suitable for both temporary and permanent site requirements.
            </p>
            <p>
              These containers are widely used as executive cabins, staff
              accommodation units, offices, dining halls, washrooms, storerooms,
              storage spaces, and other functional setups. With a strong steel
              frame, insulation, electrical fittings, and proper ventilation,
              they ensure comfort, safety, and efficiency, making them ideal for
              construction sites, industries, and remote project locations.
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



      {/* ── Sizes ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.sizesTopRow}>
            <div className={styles.sizesLeft}>
              <h2 >
                The Types of Executive <br />
                <span>MS Container Sizes</span>
              </h2>
              <div className={styles.secHeadLine}></div>
            </div>
            <p className={styles.sizesDesc}>
              Every Executive MS Container is offered in multiple core sizes,
              with flexible interior layouts ranging from offices and
              accommodation to dining, sanitary, and storage spaces.
            </p>
          </div>

          <div className={styles.controls}>
            <button onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <button onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>

          <div className={styles.sliderWrapper}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${current * 33.333}%)`,
              }}
            >
              {[...cards, ...cards.slice(0, 3)].map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${card.dark ? styles.darkCard : ""
                    }`}
                >
                  <Box
                    size={48}
                    strokeWidth={1.5}
                    className={styles.icon}
                  />

                  <h2>{card.title}</h2>

                  <div className={styles.line}></div>

                  <ul>
                    {card.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section >



      {/* ── Quality Standards ── */}
      < section className={styles.qualitySec} >
        <div className={styles.qualityText}>
          <h2 className={styles.secTitle}>
            Executive MS Container <br />
            <span>Quality Standards</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.qualityGrid}>
          <div className={styles.qualityContent}>
            <p>
              The Executive MS Container is built using high-quality mild steel,
              ensuring strong structural stability, long life, and excellent
              resistance to tough site conditions. Each unit is manufactured with
              precision to maintain durability, safety, and consistent performance
              across all models including 40×10, 20×10, 10×10, 6×8, and 4×4
              containers.
            </p>
            <p>
              It features premium finishing, proper insulation, and reliable
              fittings that enhance comfort and usability. Designed for heavy-duty
              applications such as staff offices, engineer cabins, worker
              accommodation, dining halls, storage units, washrooms, and guard
              cabins, it delivers a high standard of quality suitable for
              construction, industrial, and remote site projects.
            </p>
          </div>
          <div className={styles.galleryWrap}>

            {/* Main Image */}
            <div className={styles.primaryFrame}>
              <img src={container1} alt="Main Building" />
            </div>

            {/* Floating Image */}
            <div className={styles.secondaryFrame}>
              <img src={container3} alt="Interior View" />
            </div>

          </div>
        </div>
      </section >



      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Executive ConTAINER </h1>
            <h1>L&R Executive ConTAINER </h1>
            <h1>L&R Executive ConTAINER </h1>
            <h1>L&R Executive ConTAINER </h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Manufacturing Strength of <br />
              Executive MS Containers
            </h2>

            <p>
             Executive MS Containers are manufactured using high-grade mild steel 
             with precision welding and strong structural design to ensure maximum
              strength and stability. Each unit is built under
              strict quality standards, making it durable, safe, and suitable for
               heavy-duty construction and industrial site applications.
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



      {/* ── Products ── */}
      < section className={styles.productsSec} >
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div className={styles.productText}>
              <h2 className={styles.secTitle}>
                Executive MS <br />
                <span>Container Products</span>
              </h2>
              <div className={styles.productsDivider}></div>
            </div>
            <p className={styles.productsSubtext}>
              A complete range of durable and customizable modular steel
              containers designed for offices, accommodation, storage, and
              site-based infrastructure solutions.
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
      </section >



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

        <div className={styles.faqBody}>
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
            <img src={container2} alt="container" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Executive Ms Containers?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive MS containers tailored to your storage needs.
        </p>


        <button className={styles.contactBtn}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBox}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>

      <Footer />
    </div >
  );
};

export default ExecutiveMsContainer;