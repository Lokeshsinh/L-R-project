import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Warehouse.module.css";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import warehouse1 from '../assets/Pre-Build/warehouse/warehouse.png'
import card1 from '../assets/Pre-Build/warehouse/card1.png';
import card2 from '../assets/Pre-Build/warehouse/card2.png';
import card3 from '../assets/Pre-Build/warehouse/card3.png';
import card4 from '../assets/Pre-Build/warehouse/card4.png';
import warehouse2 from '../assets/Pre-Build/warehouse/warehouse1.png'
import warehouse3 from '../assets/Pre-Build/warehouse/warehouse3.png'
import design from '../assets/Pre-Build/warehouse/design.png'
import design1 from '../assets/Pre-Build/warehouse/design1.png'





const faqs = [
  { q: "What are pre-engineered warehouses?", a: "Pre-engineered warehouses are factory-fabricated steel structures designed for rapid on-site assembly, offering significant cost and time savings over conventional construction." },
  { q: "Can warehouse size and layout be customized?", a: "Yes, every dimension, layout, height, span, and feature including mezzanines, loading docks, and ventilation can be fully customized to your operational needs." },
  { q: "Are prefab warehouses durable in harsh conditions?", a: "Yes. Built with high-grade steel and engineered to IS standards, our warehouses withstand wind, seismic, and heavy load conditions reliably." },
  { q: "How long does warehouse construction take?", a: "Typically 4–8 weeks from design approval depending on scale, site conditions, and complexity of the structure." },
  { q: "Can the warehouse be expanded later?", a: "Absolutely. Our modular pre-engineered systems are designed for easy future expansion both horizontally and vertically." },
];

const Warehouse = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate()

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const processData = [
    {
      title: "Design & Planning",
      description:
        "Customized warehouse layouts are developed based on storage capacity, site conditions, and operational requirements.",
      image: "/Images/process1.jpg",
    },
    {
      title: "Manufacturing",
      description:
        "Precision fabrication using high-quality steel, advanced machinery, and controlled factory processes.",
      image: "/Images/process2.jpg",
    },
    {
      title: "Quality & Integration",
      description:
        "Comprehensive quality checks, structural validation, and integration of insulation, ventilation, and accessories.",
      image: "/Images/process3.jpg",
    },
    {
      title: "Installation & Handover",
      description:
        "On-site erection, alignment, and final finishing with timely project delivery and handover.",
      image: "/Images/process4.jpg",
    },
  ];
  const industryProjects = [
    {
      title: "Industrial Warehouses",
      desc: "Modern warehouse buildings designed for secure storage and efficient operations. Built with spacious layouts for smooth inventory management.",
      img: card1,
    },
    {
      title: "Logistics & Distribution Warehouses",
      desc: "Warehouses optimized for fast distribution and supply chain operations. Designed with large spans for efficient loading and storage.",
      img: card2,
    },
    {
      title: "Cold Storage Warehouses",
      desc: "Temperature-controlled warehouses for preserving perishable goods and products. Ideal for food, pharmaceuticals, and cold chain storage.",
      img: card3,
    },
    {
      title: "Agricultural Storage Warehouses",
      desc: "Durable warehouses for storing grains, seeds, and agricultural products. Designed to protect inventory and maintain product quality.",
      img: card4,
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Strong & Scalable  <br />
            <span>Warehousing Solutions</span>
          </h1>
          <p className={styles.heroDesc}>Accelerate your storage and logistics operations with
            L&R Enterprises’ Pre-Engineered Warehouse Solutions, built for durability and rapid deployment.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introFlex}>
          <div className={styles.introImg}>
            <img src={warehouse1} alt="warehouse" />
          </div>
          <div className={styles.introText}>
            <span className={styles.introLabel}>• About L&amp;R</span>
            <div className={styles.introTitle}>
              <h2>L&amp;R<br /><span>Warehouse</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>L&amp;R Green India Pvt Ltd specialises in designing and manufacturing high-performance pre-engineered warehouses that meet the evolving needs of modern industries. With advanced engineering practices and dedicated expertise, our warehouse solutions deliver durability, flexibility, and optimal space utilization.</p>
            <p>Our warehouses are built using high-grade steel structures and modular construction techniques, enabling reduced costs. From planning to installation, we provide end-to-end solutions tailored to your storage, logistics, and industrial space requirements.</p>
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






      {/* PRODUCTS */}
      <section className={styles.productsSec}>
        <div className={styles.secTitle}>
          <div className={styles.secText}>
            <h2>Our<br /><span>Warehouse Products</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p>Our Warehouse solutions are engineered to deliver strength, space, and efficiency
            for diverse storage and industrial needs.</p>
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
      </section>




      {/* ADVANTAGE */}
      <section className={styles.advantage}>
        <div className={styles.advantageFlex}>
          <div className={styles.advText}>
            <div className={styles.advantageText}>
              <h2>L&amp;R Advantage<br /><span>Warehouse</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>L&R Green India Pvt Ltd   delivers warehouses that combine advanced engineering with practical functionality.
              Our pre-engineered structures are designed to provide large column-free spaces, ensuring maximum storage
              capacity and operational flexibility. With precision manufacturing and modular components, we significantly
              reduce construction timelines.</p>
            <p>We focus on quality, durability, and cost-efficiency. Our warehouses are built to withstand environmental
              conditions while maintaining low maintenance requirements. With customizable designs and scalable structures,
              we ensure your facility grows along with your business needs.</p>
          </div>
          <div className={styles.advImg}>
            <img src={warehouse2} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* STRENGTH BAND */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L & R WAREHOUSE </h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength &<br />
              Manufacturing Excellence
            </h2>
            <p>
              We utilize state-of-the-art manufacturing processes, high-grade raw materials, and strict quality
              control standards to deliver reliable and long-lasting warehouse structures. Our expertise in PEB
              systems ensures precision, consistency, and superior performance in every project.
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



      {/* PROCESS */}
      <section className={styles.processSec}>
        <div className={styles.processHeader}>
          <div className={styles.processText}>
            <h2>Warehouse Construction<br /><span>Process by L&amp;R</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p>Our structured process ensures efficient execution from design and engineering to quality assurance and final handover.</p>
        </div>
        <div className={styles.processSection}>
          {/* LEFT IMAGE */}
          <div className={styles.leftSide}>
           
          </div>

          <div className={styles.rightPanel}>
            {processData.map((item, index) => (
              <div
                key={item.id}
                className={styles.processItem}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Timeline */}
                <div className={styles.timeline}>
                  <div
                    className={`${styles.circle} ${activeStep === index ? styles.circleActive : ""
                      }`}
                  >
                    <span className={styles.innerCircle}></span>
                  </div>

                  {index !== processData.length - 1 && (
                    <div
                      className={`${styles.line} ${activeStep >= index ? styles.lineActive : ""
                        }`}
                    ></div>
                  )}
                </div>

                {/* Text */}
                <div className={styles.content}>
                  <h3
                    className={
                      activeStep === index ? styles.titleActive : ""
                    }
                  >
                    {item.title}
                  </h3>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
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
          <p>Find answers to common questions about our warehouse solutions, design process, and performance benefits.</p>
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
            <img src={warehouse3} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* CTA */}

      <section className={styles.cta}>
        <h2>Ready for Your Prefabricated Warehouse?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized prefabricated warehouse solutions tailored to your site needs.
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
    </>
  );
};

export default Warehouse;