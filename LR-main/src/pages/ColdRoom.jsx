import Header from "../components/common/Header";
import { useState } from "react";
import Footer from "../components/common/Footer";
import styles from "../styles/ColdRoom.module.css";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cold from '../assets/Pre-Build/ColdRoom/cold.png'
import cold2 from '../assets/Pre-Build/ColdRoom/cold1.png'
import card1 from '../assets/Pre-Build/ColdRoom/card1.png';
import card2 from '../assets/Pre-Build/ColdRoom/card2.png';
import card3 from '../assets/Pre-Build/ColdRoom/card3.png';
import card4 from '../assets/Pre-Build/ColdRoom/card4.png';
import design from '../assets/Pre-Build/ColdRoom/design.png'
import design1 from '../assets/Pre-Build/ColdRoom/design1.png'
import cold3 from '../assets/Pre-Build/ColdRoom/cold3.png'
import cold4 from '../assets/Pre-Build/ColdRoom/cold4.png'



const faqs = [
  {
    q: "What is a prefabricated cold room?",
    a: "A prefabricated cold room is a factory-built insulated structure with integrated refrigeration systems, designed for rapid on-site assembly and precise temperature-controlled storage.",
  },
  {
    q: "What temperature range can your cold rooms maintain?",
    a: "Our cold rooms can be engineered to maintain temperatures from +18°C down to -40°C, covering everything from fresh produce storage to deep freeze applications.",
  },
  {
    q: "Is cold storage always affected?",
    a: "No. Our systems are designed with redundant refrigeration and high-performance insulation panels to ensure consistent temperatures even in extreme ambient conditions.",
  },
  {
    q: "Can the cold room size be customised?",
    a: "Absolutely. Every dimension, layout, panel thickness, and refrigeration capacity can be fully customised to your storage volume and temperature requirements.",
  },
  {
    q: "How long does installation take?",
    a: "Typically 2–5 weeks from design approval depending on room size, site conditions, and complexity of the refrigeration system.",
  },
];





const ColdRoom = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const industryProjects = [
    {
      title: "Modular Cold Rooms",
      desc: "Modular cold rooms designed for reliable temperature-controlled storage. Ideal for food, dairy, pharmaceuticals, and perishables.",
      img: card1,
    },
    {
      title: "Industrial Cold Storage",
      desc: "High-performance cold storage facilities for industrial applications. Built for efficient cooling, durability, and product preservation.",
      img: card2,
    },
    {
      title: "Pharmaceutical Cold Rooms",
      desc: "Precision cold rooms designed for safe pharmaceutical storage. Maintains stable temperatures to protect sensitive medical products.",
      img: card3,
    },
    {
      title: "Food & Agriculture Cold Rooms",
      desc: "Temperature-controlled cold rooms for fresh produce and food storage. Designed to preserve quality, freshness, and shelf life.",
      img: card4,
    },
  ];


  const processData = [
    {
      title: "Design & Planning",
      description:
        "Customized cold room design based on temperature requirements, storage capacity, and site conditions.",
      image: "/Images/process1.jpg",
    },
    {
      title: "Manufacturing",
      description:
        "Fabrication using high-density PUF insulated panels, vapor barriers, and durable structural components.",
      image: "/Images/process2.jpg",
    },
    {
      title: "Quality & Integration",
      description:
        "Installation of refrigeration systems, temperature controls, and electrical components with rigorous testing.",
      image: "/Images/process3.jpg",
    },
    {
      title: "Installation & Commissioning",
      description:
        "On-site assembly, system calibration, and final commissioning for ready-to-use cold storage solutions.",
      image: "/Images/process4.jpg",
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
            L&R Cold    <br />
            <span>Room Solutions</span>
          </h1>
          <p className={styles.heroDesc}>L&R Cold Room Solutions deliver efficient, energy-saving,
            and fully customizable cold storage systems for reliable temperature-controlled performance.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* INTRO */}
      <section className={styles.splitSection}>
        <div className={styles.splitFlex}>
          <div className={styles.imageWrapper}>
            <img
              src={cold}
              alt="Construction"
              className={styles.image}
            />
          </div>
          <div className={styles.textSide}>
            <div className={styles.splitText}>
              <h2>L&R Cold <br /><span>Room Solutions</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&R Green India Pvt Ltd specializes in manufacturing high-performance prefabricated cold rooms designed
              for temperature-sensitive storage across industries such as food processing, pharmaceuticals, agriculture,
              and logistics. Our cold room solutions are engineered to maintain precise temperature control,
              product quality, safety, and extended shelf life.
            </p>
            <p>
              Built using advanced insulation technology and durable materials, our cold rooms offer energy efficiency,
              structural reliability, and long-term performance. Whether for small-scale storage or large industrial
              applications, we deliver customized cold storage solutions tailored to meet specific operational and
              environmental requirements.
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






      {/* PRODUCTS */}
      <section className={styles.showcase}>
        <div className={styles.secHeader}>
          <div className={styles.secText}>
            <h2>Industrial Shed<br /><span>Project Showcase</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p className={styles.secDesc}>Strong, scalable, and customizable industrial sheds built for heavy-duty performance and long-term reliability.</p>
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
              <h2>L&amp;R Advantage<br /><span>Cold Room</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>At L&R, we combine advanced refrigeration technology with modular construction to deliver cold rooms that
              ensure consistent temperature control and operational efficiency. Our solutions are designed to minimize
              energy consumption while maintaining optimal storage conditions.</p>
            <p>With complete in-house manufacturing and turnkey project execution, we ensure quality, reliability,
              and timely delivery. Our cold rooms are customizable, expandable, and designed for long-term use
              across diverse industries and challenging environments.</p>
          </div>
          <div className={styles.advImg}>
            <img src={cold2} alt="warehouse" />
          </div>
        </div>
      </section>




      {/* STRENGTH BAND */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Cold Room</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Our Strength & <br />
              Manufacturing Excellence
            </h2>
            <p>
              L&R Green India Pvt Ltd  operates modern manufacturing facilities equipped with precision engineering tools,
              advanced panel fabrication systems, and strict quality control processes, ensuring every cold room delivers
              superior insulation performance, durability, and energy efficiency.
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
            <h2>The L&R Cold <br /><span>Room Process</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p>A precise and efficient process ensuring optimized design, advanced insulation manufacturing,
            system integration, and reliable cold storage performance.</p>
        </div>
        <div className={styles.processSection}>
          {/* LEFT IMAGE */}
          <div className={styles.leftSide}>
            <img src={cold3} alt="error" />
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
            <img src={cold4} alt="warehouse" />
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Cold Storage?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          cold room solutions tailored to your storage needs.
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

export default ColdRoom;