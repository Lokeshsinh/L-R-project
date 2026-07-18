import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/FactoryBuilding.module.css";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Box, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Manufacturing Plant Buildings",
    desc: "Robust steel structures designed to support heavy machinery, crane loads, and high-volume industrial operations.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Heavy Engineering Factory Units",
    desc: "Prefab factory structures designed to support heavy machinery, crane systems and high-value industrial operations.",
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Assembly Line Factory Buildings",
    desc: "Optimized layouts for smooth assembly line operations and production efficiency.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Processing & Production Units",
    desc: "Durable processing units built for high-output industrial and manufacturing environments.",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
  },
];

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

const FactoryBuilding = () => {
  const navigate = useNavigate()
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
        <div className={styles.introImg} />
        <div className={styles.introText}>
          <span className={styles.introLabel}>About L&amp;R</span>
          <h2>L&amp;R Factory<br /><span>Building Solutions</span></h2>
          <p>
            L&amp;R Green India Pvt Ltd specialises in designing and manufacturing
            prefabricated factory buildings that support efficient production,
            streamlined operations, and long-term industrial performance. Our factory
            structures are built using high-grade steel frameworks and precision
            engineering to ensure durability, safety, and adaptability across various
            manufacturing sectors.
          </p>
          <p>
            With a focus on customized solutions, we deliver factory buildings tailored
            to specific production requirements, workflow layouts, and equipment
            integration. From small-scale units to large manufacturing plants, L&amp;R
            ensures faster construction, optimized space utilization, and reliable
            structural performance.
          </p>
          <button className={styles.btnOutlineDark}>Get Contact &nbsp;↗</button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projectsSec}>
        <div className={styles.secHeader}>
          <div>
            <h2>Factory Development<br /><span>Projects</span></h2>
          </div>
          <p>
            High-strength, customizable prefab factory buildings designed for efficient
            manufacturing and industrial productivity.
          </p>
        </div>
        <div className={styles.projGrid}>
          {projects.map((proj) => (
            <div key={proj.title} className={styles.projCard}>
              <div
                className={styles.projImg}
                style={{ backgroundImage: `url('${proj.img}')` }}
              />
              <div className={styles.projLabel}>
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.benefitsImg} />
        <div className={styles.benefitsText}>
          <h2>L&amp;R Factory<br /><span>Building Benefits</span></h2>
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
        <span className={styles.introLabel}>FAQ</span>
        <div className={styles.faqHeader}>
          <h2>Frequently Asked<br /><span>Questions</span></h2>
          <p>
            A complete end-to-end factory building solution, from design and
            manufacturing to quality integration and final installation.
          </p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg} />
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaStrip}>
        <h2>Ready for Your Pre-Engineered Factory Building?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized prefabricated building solutions tailored to your site needs.
        </p>
        <button className={styles.btnBlue}>Contact US &nbsp;→</button>
      </section>

      <Footer />
    </>
  );
};

export default FactoryBuilding;