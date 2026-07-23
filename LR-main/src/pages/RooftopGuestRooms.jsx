import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/RooftopGuestRooms.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import guest1 from '../assets/rooftop/guest/guest1.png'
import guest2 from '../assets/rooftop/guest/guest2.png'
import guest3 from '../assets/rooftop/guest/guest3.png'
import guest4 from '../assets/rooftop/guest/guest4.png'
import guest5 from '../assets/rooftop/guest/guest5.png'
import guest6 from '../assets/rooftop/guest/guest6.png'
import guest7 from '../assets/rooftop/guest/guest7.png'
// import guest8 from '../assets/rooftop/guest/guest8.png'
import guest9 from '../assets/rooftop/guest/guest9.png'
import user1 from '../assets/rooftop/guest/user1.png'
import user2 from '../assets/rooftop/guest/user2.png'
import user3 from '../assets/rooftop/guest/user3.png'
import user4 from '../assets/rooftop/guest/user4.png'
import design from '../assets/rooftop/guest/design.png'
import design1 from '../assets/rooftop/guest/design1.png'

const RooftopGuestRooms = () => {
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
      q: "What is a rooftop guest room?",
      a: "It is a luxury, pre-engineered room constructed on your existing rooftop using lightweight steel framing and high-quality insulation panels.",
    },
    {
      id: 1,
      q: "Will building a rooftop room damage my house structure?",
      a: "No, they are designed with lightweight steel structures and proper engineering checks to ensure minimal load and complete safety.",
    },
    {
      id: 2,
      q: "How long does the installation take?",
      a: "A standard rooftop guest room can be fully assembled and finished on-site in a few weeks.",
    },
    {
      id: 3,
      q: "Are rooftop guest rooms heat resistant?",
      a: "Yes, we use advanced PUF/EPS insulated panels for the walls and ceiling, providing excellent thermal insulation all year round.",
    },
    {
      id: 4,
      q: "Can I add an attached bathroom to the room?",
      a: "Yes, our designs support fully customized layouts, including premium attached bathrooms and pantry sections.",
    },
  ];


  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Interior View",
      description:
        "Clean and cozy setup with bed, lighting, and minimal furniture, designed for maximum comfort and efficient space use",
    },
    {
      id: 2,
      image: user2,
      title: "Exterior Rooftop View",
      description:
        "Modern prefab structure placed on the terrace, showcasing a lightweight build with a sleek and stylish appearance.",
    },
    {
      id: 3,
      image: user3,
      title: "Natural Light & Windows",
      description:
        "Large windows or glass panels allow ample sunlight, creating a bright, open, and refreshing indoor environment.",
    },
    {
      id: 4,
      image: user4,
      title: "Balcony / Terrace",
      description:
        "Compact outdoor space with seating, offering a relaxing and premium rooftop living experience.",
    },
  ];


  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Rooftop Guest<br />
            <span>Rooms
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Transform unused rooftops into fully functional living, working, or hospitality spaces using lightweight,
            durable prefabricated structures designed for safety, speed, and style.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── SECTION 2: ROOF TOP GUEST ROOM ──
          Layout: Title top-left → Text LEFT | Double-image RIGHT
      */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Maximize Your<br />
            <span>Building Potential</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              As urban land becomes increasingly limited, making efficient use of existing structures has become essential.
              Rooftop expansion offers a practical and intelligent solution to create additional residential flats without
              the need for relocation or full-scale reconstruction. It allows property owners to utilize unused rooftop
              space and convert it into fully functional living units, adding both value and usability to the building.
            </p>
            <p>
              L&R Green India Pvt Ltd provides advanced prefabricated rooftop structures designed with a strong focus
              on safety, speed, and long-term durability. These systems are engineered to integrate smoothly with existing
              buildings while requiring minimal structural modifications. With lightweight construction and precision
              engineering, they ensure stable performance, modern aesthetics, and comfortable residential spaces built for urban living.
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
              <img src={guest1} alt="Main Building" />
            </div>
            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={guest2} alt="Interior" />
            </div>
          </div>
        </div>
      </section>



      {/* ── SECTION 3: MAXIMIZE YOUR ROOFTOP SPACE ──
          Layout: Title top-left → Double-image LEFT | Bullets RIGHT
      */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Maximize Your<br />
            <span>Rooftop Space</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.imageGalleryWrapper}>
            <div className={styles.primaryImageCard}>
              <img src={guest3} alt="Main Building" />
            </div>
            <div className={styles.floatingImageCard}>
              <img src={guest4} alt="Interior" />
            </div>

          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                As cities become denser, rooftops offer valuable unused space. L&R Enterprises
                converts these areas into functional rooms without disturbing existing building operations.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rooftop Guest Rooms</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Additional Residential Units</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Office Extensions</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Studio Apartments</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Rooftop Cafeterias</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Lounge Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ── SECTION 4: ENGINEERED FOR STRENGTH & SAFETY ──
          Layout: Title left + desc right → 4-card grid
      */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Engineered for<br />
              <span>Strength & Safety</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Every rooftop structure is designed with precision engineering to ensure safety,
            durability, and minimal load impact on existing buildings.
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




      {/* ── SECTION 5: SUSTAINABLE DESIGN & CUSTOMIZATION (Blue Banner) ──
          Layout: Text LEFT | Image RIGHT with watermark
      */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Guest Room</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Sustainable Design<br />
              & Customization
            </h2>
            <p>
              L&R Green India Pvt Ltd provides fully customizable  rooftop structures designed to suit
              various functional and architectural requirements, allowing flexible layouts, modern design
              options, and complete service integration. These rooftop solutions are ideal for residential,
              commercial, and institutional use, offering efficient space expansion for apartments, offices,
              schools, hotels, co-working spaces, and industrial campuses with a focus on speed, durability,
              and structural safety.
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




      {/* ── SECTION 6: WHY CHOOSE ROOFTOP GUEST ROOM STRUCTURES? ──
          Layout: Title top-left → Text LEFT | Double-image RIGHT
      */}
      <section className={styles.conatineUser}>
        <div className={styles.containerMaxs}>
          <h2>
            Comfortable Rooftop<br />
            <span>Guest Rooms</span>
          </h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.containerText}>
            <p>Our rooftop guest rooms are designed to provide private, comfortable, and fully
              functional living spaces. Ideal for visitors, family stays, or rental purposes,
              these units ensure modern comfort with structural safety.</p>
            <div className={styles.applicationFeatureList}>
              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Fully insulated interiors</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Compact & functional layouts</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Private entry options</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Natural lighting integration</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Ready-to-use interiors</p>
              </div>
            </div>
          </div>
          <div className={styles.mushroomImageLayout}>
            <div className={styles.mushroomMainImage}>
              <img src={guest5} alt="Main Building" />
            </div>

            <div className={styles.mushroomFloatingImage}>
              <img src={guest6} alt="Interior" />
            </div>
          </div>
        </div>
      </section>


      {/* -------why guest---------- */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Rooftop<br /><span>Guest Room Structures?</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.guestImageLayout}>
            <div className={styles.guestMainImage}>
              <img src={guest6} alt="Main Building" />
            </div>

            <div className={styles.guestFloatingImage}>
              <img src={guest7} alt="Interior" />
            </div>
          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>Prefabricated rooftop  Guest Room structures offer a smart and efficient way to expand
              usable space without putting excessive load on the existing building. Designed with lightweight
              materials and modern engineering, these units ensure minimal structural impact while providing
              strong, durable, and long-lasting performance. The fast installation process and low noise
              construction make them ideal for projects in occupied buildings where disturbance must be kept to a minimum.</p>
            <p>These solutions are also highly cost-effective and flexible, making them suitable for both residential
              and commercial applications. With energy-efficient design, modern architectural appeal, and the added
              benefit of being fully removable and relocatable, rooftop prefab structures provide a future-ready
              approach to urban space expansion that combines functionality, sustainability, and style.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ──
          Layout: Title left + desc right → FAQ list LEFT | Image RIGHT
      */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p> rooftop guest rooms are compact, lightweight units built
            on rooftops to create private and comfortable living spaces.</p>
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
            <img src={guest9} alt="warehouse" />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.cta}>
        <h2>Ready for Your Guest Rooms Solutions?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and
          fully customized insulated  Prefab Guest Rooms solutions tailored to your site needs.
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

export default RooftopGuestRooms;
