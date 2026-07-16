import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PUFContainer.module.css";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Box } from "lucide-react";
import can1 from '../assets/conatiners/pufContainer/can1.png'


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
const PUFContainer = () => {
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
  const [openFaq, setOpenFaq] = useState(1);



  const products = [
    {
      title: "Coffee Shop Container",
      description: "",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Baby Play Area Container",
      description:
        "Safe and engaging modular space designed for children's recreational activities.",
      img: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Pump Farm Store Container",
      description: "",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Material Store Container",
      description: "",
      img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What are L&R Value Granted MS Containers used for?",
      a: "They are used for staff offices, worker accommodation, guard cabins, dining spaces, storage units, pump farms, coffee shops, play areas, and various site utility applications.",
    },
    {
      id: 1,
      q: "What sizes are available in L&R MS Containers?",
      a: "They are available in multiple sizes such as 40×10×8.5 ft, 20×10×8.5 ft, 10×10×8.5 ft, 6×8 ft, and 4×4 ft.",
    },
    {
      id: 2,
      q: "Are these containers suitable for harsh environments?",
      a: "Yes. L&R MS Containers are built with high-grade steel and protective coatings, making them durable and reliable even in extreme weather and demanding site conditions.",
    },
    {
      id: 3,
      q: "Can L&R MS Containers be relocated?",
      a: "Absolutely. These containers are designed for easy relocation using standard lifting equipment or flatbed trucks, making them ideal for phased or temporary deployments.",
    },
    {
      id: 4,
      q: "Do these containers support custom layouts?",
      a: "Yes. Interior partitions, electrical fittings, HVAC, flooring, and finishes can all be customized to meet your specific project or operational requirements.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Portable Modular Solutions</span>
          <h1 className={styles.mainTitle}>
            PUF Container <br />
            <span>Solutions</span>
          </h1>
          <p className={styles.heroDesc}>Insulated PUF Containers by LRR Green PVT LTD offering energy-efficient, durable, and
            flexible modular solutions for offices, accommodation, and industrial site applications.</p>
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
            PUF Containers<br />
            <span>Solutions</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p>
              PUF Containers represent a versatile range of portable MS
              modular units designed to meet diverse industrial, commercial, and site
              infrastructure needs. Available in multiple sizes from compact 4×4 units
              to large 40-foot containers, these solutions are engineered for durability,
              mobility, and functional adaptability across applications such as offices,
              accommodation, storage, sanitation, and specialized utility spaces.
            </p>
            <p>
              Built with robust steel structures and customizable layouts, PUF
              containers are ideal for rapid deployment in demanding environments.
              Whether for construction sites, remote project locations, or facilities,
              these modular units offer cost-effective, low-maintenance, and scalable
              solutions that ensure operational efficiency, user comfort, and long-term
              performance.
            </p>
            <button className={styles.btnOutline}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.introVisuals}>
            <img src={can1} alt="can" />
          </div>
        </div>
      </section>

      {/* ── Sizes ── */}
      <section className={styles.sizesSec}>
        <div className={styles.sizesInner}>
          <div className={styles.sizesTopRow}>
            <div className={styles.sizesLeft}>
              <h2 >
                The Types of L&R <br />
                <span>Value Granted Sizes</span>
              </h2>
              <div className={styles.secHeadLine}></div>
            </div>
            <p className={styles.sizesDesc}>
              Every L&R Value Container is offered in multiple core sizes, with
              flexible interior layouts ranging from offices and accommodation to
              dining, sanitary, and storage spaces.
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
      </section>

      {/* ── Why Choose ── */}
      <section className={styles.whySec}>
        <div className={styles.whyGrid}>
          <div className={styles.whyContent}>
            <h2 className={styles.secTitle}>
              Why Choose L&R Value <br />
              <span>Granted MS Containers</span>
            </h2>
            <div className={styles.whyDivider} />
            <p>
              L&R Value Granted MS Containers offer reliable, cost-effective
              modular solutions for diverse applications. Built with strong steel
              structures, they ensure durability, safety, and long-term performance
              in demanding conditions.
            </p>
            <p>
              With multiple size options and highly flexible layouts, L&R containers
              can be easily adapted for offices, accommodation, storage, and utility
              spaces. Their quick installation, low-maintenance requirements, and
              easy relocation make them an ideal choice for projects that demand
              speed, mobility, and operational efficiency.
            </p>
          </div>
          <div className={styles.whyImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="L&R Value Container"
            />
          </div>
        </div>
      </section>

      {/* ── Manufacturing Strength ── */}
      <section className={styles.mfgBand}>
        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength &amp; <br />
              Manufacturing Excellence
            </h2>
            <p>
              L&R MS Containers are built with high-grade steel and precision engineering to
              ensure strong structural stability and long-lasting performance. Designed for
              tough industrial conditions, they offer durability, safety, and reliable usage
              across all site applications.
            </p>
            <div className={styles.mfgTag}>ENERGY STORAGE</div>
          </div>
          <div className={styles.mfgImgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1590986327572-887498c40713?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Strength"
            />
            <div className={styles.mfgWatermark}>CONTA</div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.productsSec}>
        <div className={styles.productsInner}>
          <div className={styles.productsHeader}>
            <div>
              <h2 className={styles.secTitle}>
                L&R Value Granted MS <br />
                <span>Containers Products</span>
              </h2>
              <div className={styles.productsDivider} />
            </div>
            <p className={styles.productsSubtext}>
              Purpose-built modular container solutions designed for commercial,
              utility, and recreational applications with durable construction and
              flexible deployment options.
            </p>
          </div>
          <div className={styles.productsGrid}>
            {products.map((prod, i) => (
              <div key={i} className={styles.productCard}>
                <img src={prod.img} alt={prod.title} />
                <div className={styles.productOverlay}>
                  <h4>{prod.title}</h4>
                  {prod.description && <p>{prod.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <div className={styles.faqSideImg}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80')",
              }}
            />
          </div>
          <div className={styles.faqRight}>
            <div className={styles.faqTopRow}>
              <div>
                <span className={styles.faqBreadcrumb}>• FQS</span>
                <h2 className={styles.secTitle}>
                  Frequently Asked <br />
                  <span>Questions</span>
                </h2>
                <div className={styles.faqDivider} />
              </div>
              <p className={styles.faqSubtext}>
                Quick answers to common queries about our 20×10 MS containers,
                covering features, customization, durability, and deployment.
              </p>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqOpen : ""
                    }`}
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "↓" : "↑"}
                    </span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Ready for Your L&R Value Granted MS Containers ?</h2>
          <p>
            Connect with our team to design and deliver compact, durable, and
            fully L&R Value Granted MS Containers tailored to your site needs.
          </p>
          <button className={styles.btnCTA}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PUFContainer;