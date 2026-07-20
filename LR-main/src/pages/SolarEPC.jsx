import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarEPC.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import solarepic1 from '../assets/solar/solarepic/solarepic1.png'
import solarepic2 from '../assets/solar/solarepic/solarepic2.png'
import solarepic3 from '../assets/solar/solarepic/solarepic3.png'
import solarepic4 from '../assets/solar/solarepic/solarepic4.png'
import user1 from '../assets/solar/solarepic/user1.png'
import user2 from '../assets/solar/solarepic/user2.png'
import user3 from '../assets/solar/solarepic/user3.png'
import user4 from '../assets/solar/solarepic/user4.png'
import design from '../assets/solar/solarepic/design.png'
import design1 from '../assets/solar/solarepic/design1.png'

const SolarEPC = () => {

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
      title: "Site Survey & Feasibility Analysis",
      description:
        "A neatly designed sleeping area that ensures comfort and privacy within a space-efficient layout suitable for essential living needs.",
    },
    {
      id: 2,
      image: user2,
      title: "Electrical System Design",
      description:
        "Designing DC and AC systems including string layouts, inverter placement, cable routing, and grid interconnection planning for maximum efficiency.",
    },
    {
      id: 3,
      image: user3,
      title: "Structural Engineering Design",
      description:
        "Creating strong mounting structures based on wind load, soil type, and terrain conditions to ensure durability and safety for long-term performance.",
    },
    {
      id: 4,
      image: user4,
      title: "Technology Selection & Optimization",
      description:
        "Selecting advanced technologies like N-type TOPCon modules, bifacial panels, and solar trackers to increase energy output and improve plant performance.",
    },
  ];



  const faqs = [
    {
      id: 0,
      q: "What is Solar EPC?",
      a: "Solar EPC stands for Engineering, Procurement, and Construction — a turnkey service where we manage the complete solar power plant development from design to commissioning.",
    },
    {
      id: 1,
      q: "Why choose L&R Green India for Solar EPC?",
      a: "We bring over a decade of experience in renewable energy, delivering high-performance solar installations for industrial, commercial, and residential clients across India.",
    },
    {
      id: 2,
      q: "What types of solar projects do you handle?",
      a: "We handle rooftop solar, ground-mounted solar farms, carport solar, and hybrid solar+battery storage systems for capacities from 10 kW to 50 MW and above.",
    },
    {
      id: 3,
      q: "How long does a solar EPC project take?",
      a: "Depending on capacity, rooftop projects are typically completed in 2–6 weeks, while larger ground-mounted projects may take 3–6 months.",
    },
    {
      id: 4,
      q: "Do you provide after-installation maintenance?",
      a: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC) including preventive maintenance, performance monitoring, and emergency support.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Solar EPC  <br />
            <span>work Solutions
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green Pvt Ltd offers complete Solar EPC services, managing design, procurement, construction,
            and commissioning for efficient, hassle-free solar project delivery under one roof.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>

      {/* ── SECTION 2: WHAT IS SOLAR EPC WORK? ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What is Solar   <br />
            <span>EPC work?</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              Solar EPC stands for Engineering, Procurement, and Construction,
              which is a complete project execution model for solar power plants.
              In this system, a single company takes full responsibility for designing
              the system, sourcing all required equipment, managing on-site installation,
              and completing final testing and commissioning. This integrated approach ensures
              that the entire solar project is executed in a structured, efficient, and
              coordinated manner without involving multiple contractors.
            </p>
            <p>
              With L&R Green Pvt Ltd, the Solar EPC process becomes simple and seamless
              for project owners and investors. We manage every stage of the project—from
              initial planning and technical design to procurement of high-quality components
              and final grid connection. This eliminates coordination challenges, reduces project
              risks, and ensures smooth execution with reliable long-term performance of the solar plant.
            </p>
            <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>

          <div className={styles.solarImageCard}>
            <div className={styles.solarBackground}></div>
            {/* Image */}
            <div className={styles.solarImageWrapper}>
              <img
                src={solarepic1}
                alt="Solar Mounting Structure"
                className={styles.solarImage}
              />
            </div>

          </div>
        </div>
      </section>







      {/* ── SECTION 3: ENGINEERING & SYSTEM DESIGN ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Engineering &  <br />
              <span>System Design</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Engineering is the foundation of a solar project. Our experts
            design optimized systems that maximize output and reduce losses.
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








      {/* ── SECTION 4: FINAL TESTING & COMMISSIONING ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R solar work epc</h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Final Testing  <br />
              & Commissioning
            </h2>
            <p>
              At L&R Green Pvt Ltd, the final EPC stage ensures complete testing, validation,
              and safety checks before commissioning. It includes string-level and inverter testing,
              system inspections, and verification of performance and compliance. All required approvals
              and clearances are secured, along with DISCOM coordination for final synchronization,
              ensuring smooth and reliable plant operation.
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





      {/* ── SECTION 5: PROCUREMENT & QUALITY ASSURANCE ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Advantages of Prefabricated <br />
            <span>Railway &amp; Telecom Shelters</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.energyImageContainer}>
            <div className={styles.energyBackdrop}></div>
            <div className={styles.energyImageFrame}>
              <img
                src={solarepic2}
                alt="Solar Mounting Structure"
                className={styles.energyImage}
              />
            </div>
          </div>

          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                At L&R Green Pvt Ltd, we are committed to delivering high-quality PUF
                Sandwich Panel solutions that combine advanced technology, superior materials,
                and reliable service to meet the evolving needs of modern construction projects.
              </p>
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
        </div>
      </section>

      {/* _______section: 6 EPC Services_______ */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.solartext}>
            <p>Choosing a Solar EPC service from L&R Green Pvt Ltd ensures a complete,
              hassle-free execution of your solar project under a single responsibility
              model. From design and engineering to procurement, construction, and commissioning,
              everything is managed by one expert team, eliminating coordination issues between
              multiple vendors. This integrated approach improves project efficiency, reduces delays,
              and ensures consistent quality throughout the execution process.</p>
            <p>With strong technical expertise and industry experience, L&R Green Pvt Ltd
              delivers solar plants that are optimized for long-term performance and reliability.
              Our EPC approach focuses on maximizing energy output, ensuring safety compliance,
              and providing end-to-end accountability, making solar investment more secure, predictable,
              and cost-effective for clients.</p>
          </div>
          <div className={styles.solarDisplayContainer}>
            <div className={styles.solarBackgroundShape}></div>
            <div className={styles.solarImageHolder}>
              <img
                src={solarepic4}
                alt="Solar Mounting Structure"
                className={styles.solarDisplayImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>A Solar EPC company like L&R Green Pvt Ltd manages the full solar project lifecycle,
            including design, procurement, construction, testing, and commissioning of the plant.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={solarepic3} alt="warehouse" />
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




      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your Solar EPC Work Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and
          fully customized insulated  Solar EPC Work solutions tailored to your site needs.
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

export default SolarEPC;
