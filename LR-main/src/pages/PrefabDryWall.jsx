import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabDryWall.module.css";
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Plus, X, CheckCircle2, Settings,
  Factory,
  Hexagon,
  Headphones,
} from "lucide-react";
import prefab from '../assets/PREFAB/prefab.png'
import prefab1 from '../assets/PREFAB/prefabdray1.png'
import prefab2 from '../assets/PREFAB/prefab1.png'
import prefab3 from '../assets/PREFAB/prefab2.png'
import design from '../assets/PREFAB/design.png'
import design1 from '../assets/PREFAB/design1.png'


const PrefabDryWall = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const features = [
    {
      id: 1,
      icon: <Settings size={34} strokeWidth={1.8} />,
      title: "Fast Installation",
      description:
        "Enables quick on-site installation, reducing overall construction time and improving project speed.",
    },
    {
      id: 2,
      icon: <Factory size={34} strokeWidth={1.8} />,
      title: "Factory-Made Precision",
      description:
        "Built in advanced facilities using strict quality control to ensure durability, safety, and long service life.",
      featured: true,
    },
    {
      id: 3,
      icon: <Hexagon size={34} strokeWidth={1.8} />,
      title: "Lightweight & Durable",
      description:
        "Easy to handle and install while maintaining strong structural strength and long-lasting performance.",
    },
    {
      id: 4,
      icon: <Headphones size={34} strokeWidth={1.8} />,
      title: "Minimal Construction Waste",
      description:
        "Reduces material wastage through prefabrication, supporting sustainable and eco-friendly construction.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is prefab drywall?",
      a: "A prefabricated drywall is a factory-manufactured wall panel system designed for rapid on-site assembly, serving as an efficient and clean alternative to traditional brick or plaster partitions.",
    },
    {
      id: 1,
      q: "Where is it used?",
      a: "It is used in offices, homes, hospitals, and commercial buildings for creating modern and flexible interior spaces.",
    },
    {
      id: 2,
      q: "Is it better than traditional walls?",
      a: "Yes, prefab drywall eliminates wet construction, installs significantly faster, offers superior finish quality, and provides excellent thermal and acoustic insulation.",
    },
    {
      id: 3,
      q: "Does it reduce construction time?",
      a: "Absolutely. Since panels are pre-engineered to precise dimensions, on-site installation is extremely fast, reducing partition wall construction time by up to 70%.",
    },
    {
      id: 4,
      q: "Is it durable?",
      a: "Yes, our drywall systems are constructed with robust core materials and heavy-duty facing panels, ensuring high structural integrity and long-term durability.",
    },
  ];

  return (
    <>
      <Header />

      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Prefab Drywall Solutions <br />
            <span>for Fast & Efficient Construction</span>
          </h1>
          <p className={styles.heroDesc}>At L&R Green Pvt Ltd, we provide advanced prefabricated drywall systems designed for
            quick installation, clean finishing, and modern construction needs, replacing traditional slow and messy building methods.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.introContainer}>
          <div className={styles.introTop}>
            <h2 >
              Prefabricated <br />
              <span>Particular Dry Wall</span>
            </h2>
            <div className={styles.introLine} />
          </div>

          <div className={styles.introGrid}>
            <div className={styles.interiorCard}>
              <div className={styles.leftAccent}></div>

              <div className={styles.imageBox}>
                <img
                  src={prefab}
                  alt="Interior"
                  className={styles.cardImage}
                />
              </div>

            </div>
            <div className={styles.introText}>
              <p>
                Prefabricated dry wall systems by L&R Green Pvt Ltd are factory-made wall panels designed for fast
                and precise interior space division. These panels are engineered under controlled conditions to ensure
                uniform quality, accurate dimensions, and a smooth finish, making them ideal for modern interior construction.
              </p>
              <p>
                Unlike traditional brick or plaster walls, prefabricated partitioning walls are installed without wet
                construction processes, allowing quicker assembly, cleaner installation, and reduced project time.
                They are widely used for creating flexible, lightweight, and efficient interior partitions in commercial,
                residential, and industrial spaces.
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
        </div>
      </section>





      {/* ── Key Features ── */}
      <section className={styles.featuresSec}>
        <div className={styles.featuresHeader}>
          <div className={styles.featureText}>
            <h2>
              Key Features of <br />
              <span>Prefabricated Dry Wall</span>
            </h2>
            <div className={styles.FaqsLine} />
          </div>
          <p className={styles.featuresDesc}>
            Prefabricated dry wall systems by L&R Green Pvt Ltd <br />
            enable fast, clean, and precise interior wall construction <br />
            with strong durability and modern performance.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((item) => (
            <div
              key={item.id}
              className={`${styles.featureCard} ${item.featured ? styles.activeCard : ""
                }`}
            >
              <div
                className={`${styles.featureIcon} ${item.featured ? styles.activeIcon : ""
                  }`}
              >
                {item.icon}
              </div>
              <h3 className={styles.featureTitle}>
                {item.title}
              </h3>
              <p className={styles.featureDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>





      {/* ── Core Benefits Banner ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R  Prefabricated Dry Wall</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Core Benefits & <br />
              Manufacturing Technology
            </h2>
            <p>
              Prefab drywall systems by L&R Green Pvt Ltd improve construction efficiency through faster installation,
              consistent factory-controlled quality, reduced labor dependency, and lower overall project costs, while
              ensuring high design accuracy and premium finish; these panels are manufactured using precision engineering
              in controlled environments to achieve uniform quality, accurate dimensions, and strong structural performance
              for easy and reliable on-site assembly.
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




      {/* ── Applications ── */}
      <section className={styles.appsSec}>
        <div className={styles.appsTop}>
          <h2>
            Applications of <br />
            <span>Prefabricated Dry Wall</span>
          </h2>
          <div className={styles.productsDivider} />
        </div>

        <div className={styles.appsGrid}>
          <div className={styles.appsLeft}>
            <p className={styles.appsDesc}>
              Prefabricated dry wall systems by L&R Green Pvt Ltd are widely used across various sectors for
              fast, clean, and efficient interior space division and modern construction needs. They provide a
              flexible and reliable solution for creating high-quality interior environments with minimal construction time.
            </p>
            <div className={styles.featureListWrap}>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Faster Construction</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Cost Efficient</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Flexible Design</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>High Durability</p>
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureIconBox}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.featureText}>Future Expansion Ready</p>
              </div>

            </div>
          </div>
          <div className={styles.interiorImageWrapper}>
            <div className={styles.interiorSideStrip}></div>
            <div className={styles.interiorImageContainer}>
              <img
                src={prefab1}
                alt="Interior"
                className={styles.interiorImage}
              />
            </div>
          </div>
        </div>
      </section>





      {/* ── Why Choose L&R ── */}
      <section className={styles.whySec}>
        <div className={styles.introTop}>
          <h2 >
            Why Choose L&R  <br />
            <span>Particular Dry Wall</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.whyGrid}>
          <div className={styles.showcaseFrame}>
            <div className={styles.showcaseRibbon}></div>
            <div className={styles.showcaseImageWrapper}>
              <img
                src={prefab2}
                alt="Interior"
                className={styles.showcaseImage}
              />
            </div>
          </div>
          <div className={styles.whyText}>
            <p>
              At L&R Green Pvt Ltd, we specialize in delivering advanced prefabricated dry wall solutions designed to meet modern construction demands with speed, precision, and reliability. Our systems are engineered using high-quality materials and controlled manufacturing processes to ensure consistent performance and superior finishing in every project.
            </p>
            <p>
              We focus on providing efficient and cost-effective construction solutions that reduce project timelines while maintaining high structural quality. With our expertise in prefab technology, we ensure faster installation, accurate panel design, and dependable results, making us a trusted partner for modern interior building requirements.
            </p>
          </div>
        </div>
      </section>



      {/* ── FAQ ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Quick answers from L&R Green Pvt Ltd about prefabricated dry wall systems,
            covering key benefits, usage, and performance in modern interior construction.</p>
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
            <img src={prefab3} alt="warehouse" />
          </div>
        </div>
      </section>


      

      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Prefabricated Dry Wall ?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Prefabricated Dry Wall tailored to your storage needs.
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

export default PrefabDryWall;
