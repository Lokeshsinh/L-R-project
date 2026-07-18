import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/FactoryBuilding.module.css";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import container1 from '../assets/Pre-Build/Factory/container.png'
import container2 from '../assets/Pre-Build/Factory/container2.png'
import container3 from '../assets/Pre-Build/Factory/container3.png'
import card1 from '../assets/Pre-Build/Factory/card1.png';
import card2 from '../assets/Pre-Build/Factory/card2.png';
import card3 from '../assets/Pre-Build/Factory/card3.png';
import card4 from '../assets/Pre-Build/Factory/card4.png';


const processSteps = [
  {
    title: "Design & Planning",
    desc: "Detailed factory layout planning based on production workflow, machinery requirements, and future scalability.",
  },
  {
    title: "Manufacturing",
    desc: "Fabrication of steel panels and building components using high-quality materials and advanced technology.",
  },
  {
    title: "Quality & Integration",
    desc: "Comprehensive quality checks, structural validation, and integration of roofing, insulation, and utility systems.",
  },
  {
    title: "Installation & Commissioning",
    desc: "On-site erection, structural alignment, and final commissioning for every factory building.",
  },
];


const FactoryBuilding = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate = useNavigate()

  const faqs = [
    {
      q: "What are prefabricated factory buildings?",
      a: "Prefabricated factory buildings are pre-engineered steel structures manufactured off-site and assembled on location, offering faster construction timelines and cost efficiency.",
    },
    {
      q: "Can factory buildings be customized?",
      a: "Yes, layouts, dimensions, crane systems, insulation, and utilities can be fully customized to meet your specific production and operational needs.",
    },
    {
      q: "Are prefab factory buildings durable?",
      a: "Yes. Built with high-grade steel and engineered to IS/BIS standards, they are designed for long-term structural performance in demanding industrial environments.",
    },
    {
      q: "How long does it take to construct a factory building?",
      a: "Typically 4–10 weeks from design approval to handover, depending on the size and complexity of the project.",
    },
    {
      q: "Can the building be expanded in the future?",
      a: "Yes. Our modular design approach allows for easy horizontal or vertical expansion as your production needs grow.",
    },
  ];


  const industryProjects = [
    {
      title: "Manufacturing Plant Buildings",
      desc: "Modern steel buildings designed for efficient manufacturing operations. Built for durability, large workspaces, and long-term performance.",
      img: card1,
    },
    {
      title: "Heavy Engineering Factory Units",
      desc: "Robust factory buildings engineered for heavy industrial machinery and equipment. Designed to handle demanding operations with maximum strength.",
      img: card2,
    },
    {
      title: "Assembly Line Factory Buildings",
      desc: "Efficient factory structures optimized for streamlined assembly line production. Spacious layouts ensure smooth workflow and higher productivity.",
      img: card3,
    },
    {
      title: "Processing & Production Units",
      desc: "Industrial buildings designed for processing and large-scale production activities. Built for safety, efficiency, and reliable operational performance.",
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
            Advanced Factory  <br />
            <span>Building Solutions</span>
          </h1>
          <p className={styles.heroDesc}>Engineered for efficiency, strength, and scalability — L&R Enterprises
            delivers high-performance factory buildings for modern manufacturing and industrial operations.</p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className={styles.intro}>
        <span className={styles.introSpan}>• About L&amp;R</span>
        <div className={styles.introText}>
          <h2>L&amp;R Factory<br /><span>Building Solutions</span></h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p>
              L&R Green India Pvt Ltd specializes in designing and manufacturing prefabricated
              factory buildings that support efficient production, streamlined operations, and
              long-term industrial performance. Our factory structures are built using high-grade steel
              frameworks and precision engineering to ensure durability, safety, and adaptability across various manufacturing sectors.
            </p>
            <p>
              With a focus on customized solutions, we deliver factory buildings tailored to specific production requirements,
              workflow layouts, and equipment integration. From small-scale units to large manufacturing
              plants, L&R ensures faster construction, optimized space utilization, and reliable structural performance.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>

          <div className={styles.introImgs}>
            <input src={container2} alt="container" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projectsSec}>
        <div className={styles.secHeader}>
          <div className={styles.productText}>
            <h2>Factory Development<br /><span>Projects</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p>
            High-strength, customizable prefab factory buildings designed
            for efficient manufacturing and industrial productivity.
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
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsFlex}>
          <div className={styles.benefitsImg}>
            <img src={container3} alt="container" />
          </div>
          <div className={styles.benefitsText}>
            <div className={styles.benefitsTitle}>
              <h2>L&amp;R Factory<br /><span>Building Benefits</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&amp;R Factory Buildings Are Engineered To Deliver Superior Structural
              Strength, Large Clear Spans, And Flexibility To Accommodate Modern
              Manufacturing Processes. Our Prefab Solutions Significantly Reduce
              Construction Time While Maintaining High Standards Of Quality And Safety.
            </p>
            <p>
              We Provide Fully Customizable Factory Designs With Options For Crane
              Integration, Mezzanine Floors, Ventilation Systems, And Insulation. Our
              Modular Approach Allows Industries Of All Sizes And Interests To Expand
              Operations Efficiently As Production Demands Grow.
            </p>
          </div>
        </div>
      </section>

      {/* STRENGTH BAND */}
      <section className={styles.strength}>
        <div className={styles.strengthWatermark}>FACTORY</div>
        <div>
          <h2>Factory Building<br />Strength &amp; Excellence</h2>
        </div>
        <div>
          <p>
            L&amp;R Enterprises Utilizes Advanced Fabrication Facilities Equipped With
            CNC Machinery, Automated Welding Systems, And Precision Engineering
            Processes To Construct Industrial Sheds That Meet High Standards Of
            Strength, Accuracy, And Performance.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSec}>
        <div className={styles.processHeader}>
          <h2>Factory Construction<br /><span>Process by L&amp;R</span></h2>
          <p>
            The Warehouse Process ensures efficient execution from design and
            fabrication to quality assurance and final project handover.
          </p>
        </div>
        <div className={styles.processBody}>
          <div className={styles.processImg} />
          <div className={styles.processSteps}>
            {processSteps.map((step) => (
              <div key={step.title} className={styles.pStep}>
                <div className={styles.pStepDot} />
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
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
            <h2>
              Frequently Asked
              <br />
              <span>Questions</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>
            A complete end-to-end factory building solution, from design and
            manufacturing to quality integration and final installation.
          </p>
        </div>

        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={container1} alt="container" />
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


      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready for Your Pre-Engineered Factory Building?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized prefabricated building solutions tailored to your site needs.
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

export default FactoryBuilding;