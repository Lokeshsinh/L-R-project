import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopServantRooms.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, 
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import servent1 from '../assets/rooftop/servent/servent1.png'
import servent2 from '../assets/rooftop/servent/servent2.png'
import servent3 from '../assets/rooftop/servent/servent3.png'
import servent4 from '../assets/rooftop/servent/servent4.png'
import user1 from '../assets/rooftop/servent/user1.png'
import user2 from '../assets/rooftop/servent/user2.png'
import user3 from '../assets/rooftop/servent/user3.png'
import user4 from '../assets/rooftop/servent/user4.png'
import design from '../assets/rooftop/servent/deisgn.png'
import design1 from '../assets/rooftop/servent/design1.png'


const RooftopServantRooms = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  const faqs = [
    {
      id: 0,
      q: "What is a rooftop servant room?",
      a: "It is a highly durable, lightweight room built on the roof of an existing building to house domestic help or security staff.",
    },
    {
      id: 1,
      q: "Is a rooftop servant room safe for my building structure?",
      a: "Yes, these rooms are designed using lightweight steel and engineered materials, ensuring minimal load impact on the existing building after proper structural assessment.",
    },
    {
      id: 2,
      q: "How long does it take to install a rooftop servant room?",
      a: "The off-site prefabrication and on-site assembly can be completed in just 2 to 3 weeks.",
    },
    {
      id: 3,
      q: "What facilities are included in a rooftop servant room?",
      a: "All our servant room layouts can be configured with compact bedrooms, ventilation openings, and attached modern washrooms and toilets.",
    },
    {
      id: 4,
      q: "Can the design of servant rooms be customized?",
      a: "Yes, the design, dimensions, interior partitions, and finishes can be customized to match your building space and requirements.",
    },
  ];


  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Compact Bedroom Space",
      description:
        "A neatly designed sleeping area that ensures comfort and privacy within a space-efficient layout suitable for essential living needs.",
    },
    {
      id: 2,
      image: user2,
      title: "Bathroom Facility",
      description:
        "Clean and functional bathroom options provided either as attached or common use, ensuring hygiene and convenience.",
    },
    {
      id: 3,
      image: user3,
      title: "Proper Ventilation System",
      description:
        "Well-planned airflow design with windows and openings to maintain fresh air circulation and a healthy indoor environment.",
    },
    {
      id: 4,
      image: user4,
      title: "Heat Insulated Interior",
      description:
        "Advanced insulation panels help maintain comfortable indoor temperatures by reducing heat and improving energy efficiency.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION (Image 1) ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Modern Rooftop  <br />
            <span>Servant Rooms
            </span>
          </h1>
          <p className={styles.heroDesc}>
            L&R Green India Pvt Ltd designs and installs lightweight rooftop servant rooms that
            transform unused terrace space into fully functional living units with privacy, comfort, and durability.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>







      {/* ── SECTION 2: SMART LIVING SPACE FOR DOMESTIC STAFF ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Smart Living Space<br />
            <span>for Domestic Staff</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.prefabImageContainer}>
            <div className={styles.prefabImageFrame}>
              <img
                src={servent1}
                alt="Prefab Cabin"
                className={styles.prefabImage}
              />
            </div>
            <div className={styles.prefabAccent}></div>
          </div>

          <div className={styles.introText}>
            <p>
              Rooftop servant rooms are modern compact housing units designed to be built on top of existing buildings,
              making efficient use of unused terrace space. They offer safe, comfortable, and private accommodation
              for domestic staff while maintaining functionality and convenience in urban living environments.
              These units are designed to maximize space utility while ensuring everyday comfort and privacy.
            </p>
            <p>
              L&R Green India Pvt Ltd provides expertly engineered solutions that require minimal structural modifications
              to the existing building. These rooftop units are designed for durability, long-term performance, and
              efficient space utilization, ensuring a practical and reliable living solution for staff accommodation.
              They are built with precision to ensure safety, strength, and long-lasting usability in all conditions.
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




      {/* ── SECTION 3: WHAT'S INSIDE A ROOFTOP SERVANT ROOM ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              What’s Inside a <br />
              <span>Rooftop Servant Room</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            A rooftop servant room is thoughtfully designed to provide all essential living comforts
            within a compact and efficient layout. It ensures a balance of privacy, functionality,
            and modern comfort for domestic staff.
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






      {/* ── SECTION 4: FULLY CUSTOMIZABLE ROOFTOP SERVANT ROOM SOLUTIONS ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R servant room</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Fully Customizable Rooftop<br />
              Servant Room Solutions
            </h2>
            <p>
              Our rooftop servant room solutions are fully customizable and designed to adapt to various
              building layouts, space conditions, and comfort requirements, providing safe, functional,
              and modern living spaces for domestic staff while efficiently utilizing available rooftop
              areas; these designs combine smart planning, durable materials, and flexible configurations
              to ensure maximum comfort, usability, and long-term performance in urban environments, delivering
              a practical and reliable rooftop living solution.
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




      {/* ── SECTION 5: ROOFTOP SERVANT ROOMS ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Rooftop <br />
            <span>Servant Rooms</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Our rooftop servant rooms are compact and comfortable units for staff accommodation,
                ensuring privacy and proper living while efficiently using rooftop space.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Compact bedroom layout</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Attached toilet & bathroom option</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Ventilation & natural lighting</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Thermal insulated panels</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Basic interior finishing</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Optional kitchenette space</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cabinShowcaseContainer}>
            <div className={styles.cabinShowcaseFrame}>
              <img
                src={servent2}
                alt="Prefab Cabin"
                className={styles.cabinShowcaseImage}
              />
            </div>
            <div className={styles.cabinBottomAccent}></div>
          </div>
        </div>
      </section>



      {/* ── SECTION 6: WHY CHOOSE ROOFTOP GUEST ROOM STRUCTURES? ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar <br /><span>EPC Services</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.prefabDisplayContainer}>
            <div className={styles.prefabDisplayFrame}>
              <img
                src={servent3}
                alt="Prefab Cabin"
                className={styles.prefabDisplayImage}
              />
            </div>
            <div className={styles.prefabCornerAccent}></div>

          </div>
          <div className={styles.solartext}>
            <p>L&R Green India Pvt Ltd is a trusted name in rooftop construction, delivering safe,
              durable, and cost-effective servant room solutions designed for modern urban needs.
              With an expert engineering team, high-quality prefabrication materials, fast execution,
              safe rooftop installation practices, and end-to-end project management, we ensure every
              project is completed with precision, reliability, and long-lasting performance.</p>
            <p>Rooftop servant rooms are designed to provide practical and private living spaces
              for domestic staff, making efficient use of unused terrace areas in apartments, villas,
              and commercial buildings. They are ideal for private staff accommodation, housekeeping
              and domestic worker housing, cook or helper living space, security guard rooms on terraces,
              maintenance staff accommodation, and staff rooms in residential and institutional properties.</p>
          </div>
        </div>
      </section>





      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Prefabricated rooftop servant rooms are compact, safe living units built on existing
            buildings for domestic staff. Below are common FAQs about their features and benefits.</p>
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
            <img src={servent4} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your Prefab Servant Room Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized insulated
          Prefab Servant Room solutions tailored to your site needs.
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

export default RooftopServantRooms;
