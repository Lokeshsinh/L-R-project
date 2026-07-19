import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from 'react-router-dom'
import styles from "../styles/PrefabStaffCanteens.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Zap,
  Sparkles,
  Armchair,
  Expand,
} from "lucide-react";
import canteen1 from '../assets/Pre-Build/canteen/canteen1.png'
import canteen2 from '../assets/Pre-Build/canteen/canteen2.png'
import canteen3 from '../assets/Pre-Build/canteen/canteen3.png'
import canteen4 from '../assets/Pre-Build/canteen/canteen4.png'
import canteen5 from '../assets/Pre-Build/canteen/canteen5.png'
import user1 from '../assets/Pre-Build/canteen/user1.png'
import user2 from '../assets/Pre-Build/canteen/user2.png'
import user3 from '../assets/Pre-Build/canteen/user3.png'
import user4 from '../assets/Pre-Build/canteen/user4.png'
import design from '../assets/Pre-Build/canteen/design.png'
import design1 from '../assets/Pre-Build/canteen/design1.png'


const PrefabStaffCanteens = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Worker Dining Halls",
      description:
        "Spacious, comfortable seating for site labor and staff meals.",
    },
    {
      id: 2,
      image: user2,
      title: "Industrial Kitchens",
      description:
        "Fully ventilated cooking zones built for high-volume catering.",
    },
    {
      id: 3,
      image: user3,
      title: "Cafeteria Blocks",
      description:
        "Organized cafeteria layouts for offices and project facilities.",
    },
    {
      id: 4,
      image: user4,
      title: "Temporary Meal Facilities",
      description:
        "Quick-deploy meal infrastructure for short-term project needs.",
    },
  ];


  const diningFeatures = [
    {
      id: 1,
      icon: <Zap size={34} strokeWidth={1.8} />,
      title: "Fast Installation",
      description:
        "Modular units deployed and operational in days, not months.",
    },
    {
      id: 2,
      icon: <Sparkles size={34} strokeWidth={1.8} />,
      title: "Easy Maintenance",
      description:
        "Wipe-clean surfaces and durable finishes simplify daily upkeep.",
      featured: true,
    },
    {
      id: 3,
      icon: <Armchair size={34} strokeWidth={1.8} />,
      title: "Comfortable Seating",
      description:
        "Thoughtful dining layouts that maximize comfort and capacity.",
    },
    {
      id: 4,
      icon: <Expand size={34} strokeWidth={1.8} />,
      title: "Expandable Modules",
      description:
        "Scale your canteen up or down as project headcount changes.",
    },
  ];

  const faqs = [
    {
      id: 0,
      q: "What is a prefabricated staff canteen?",
      a: "A prefabricated staff canteen is a factory-built modular structure designed to serve as a dining and recreation area for workers and employees.",
    },
    {
      id: 1,
      q: "How long does installation take?",
      a: "Installation is fast and typically completed within a few days, depending on size and site conditions.",
    },
    {
      id: 2,
      q: "Are these canteens suitable for industrial sites?",
      a: "Yes, our canteens are built with durable materials that can withstand harsh industrial environments while maintaining comfort and hygiene.",
    },
    {
      id: 3,
      q: "Can the canteen size be customized?",
      a: "Absolutely! We offer flexible, modular designs to accommodate any capacity, from small teams to massive worker halls.",
    },
    {
      id: 4,
      q: "Is maintenance difficult?",
      a: "No, they are built with wipe-clean surfaces and durable finishes that simplify daily upkeep and ensure long-term usability.",
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
            Prefabricated Staff <br />
            <span>Canteens & REcreation Room</span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green India Pvt Ltd designs hygienic, expandable dining halls and industrial kitchens — engineered
            for fast deployment at construction and industrial locations.

          </p>
          <button className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>






      {/* ── Intro Section ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Smart Modular <br />
            <span>Canteen Infrastructure</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <p>
              L&R Green India Pvt Ltd designs prefabricated staff canteens that provide efficient
              and hygienic dining solutions for industrial facilities and project sites. Built
              using modular construction techniques, these canteens are quick to install and
              optimized for smooth meal service, helping maintain productivity and workforce satisfaction.
            </p>
            <p>
              Engineered with durable materials and practical layouts, our canteen structures support
              organized dining, proper ventilation, and easy maintenance. Whether for temporary projects
              or long-term operations, they create a comfortable and scalable environment for workforce meal management.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
          <div className={styles.imageWrapper}>

            {/* Main Image */}
            <div className={styles.mainImage}>
              <img src={canteen1} alt="Main Building" />
            </div>

            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={canteen2} alt="Interior" />
            </div>

          </div>
        </div>
      </section>






      {/* ── Built for every site Grid ── */}
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



      {/* ── How We Create ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Prefabricated Staff Canteen</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              How We Create  <br />
              Prefabricated Staff Canteens
            </h2>
            <p>
              At L&R Enterprises, we design and build prefabricated staff
              tailored to site requirements, from planning efficient
              to manufacturing and on-site installation. Our process ensures
              fast delivery, quality construction, and ready-to-use dining spaces.
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





      {/* ── Structural Features ── */}
      <section className={styles.structSec}>
        <div className={styles.structTitleArea}>
          <h2>
            Structural Features <br />
            <span>Section</span>
          </h2>
          <div className={styles.secHeadLine} />
        </div>
        <div className={styles.secStructFlex}>
          <div className={styles.projectImageLayout}>
            <div className={styles.primaryImageCard}>
              <img src={canteen3} alt="Main Building" />
            </div>
            <div className={styles.secondaryImageCard}>
              <img src={canteen4} alt="Interior" />
            </div>

          </div>

          <div className={styles.HomeContainerPara}>
            <p>At L&R Green Private Limited, our Modular MS Container Homes are built with premium mild steel for
              durability, safety, and long-lasting performance. Designed with modern interiors, insulation, and weather-resistant
              construction, they provide comfortable and low-maintenance living solutions for all applications.</p>
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
      </section>






      {/* ── Why Choose Our Canteens ── */}
      <section className={styles.whySec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Why Choose <br />
              <span>Our Canteens</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Efficient, hygienic, and flexible canteen solutions
            designed for quick setup and long-term usability..
          </p>
        </div>

        <div className={styles.diningFeatureGrid}>
          {diningFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`${styles.diningFeatureCard} ${feature.featured ? styles.activeDiningCard : ""
                }`}
            >
              <div
                className={`${styles.diningFeatureIcon} ${feature.featured ? styles.activeDiningIcon : ""
                  }`}
              >
                {feature.icon}
              </div>

              <h3 className={styles.diningFeatureTitle}>
                {feature.title}
              </h3>

              <p className={styles.diningFeatureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* ── FAQ Section ── */}
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
            <img src={canteen5} alt="warehouse" />
          </div>
        </div>
      </section>




      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Prefabricated Staff Canteen?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive Clean Room tailored to your storage needs.
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

export default PrefabStaffCanteens;
