import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/PrefabMushroom.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
  Layers3,
  Thermometer,
  DatabaseZap,
  Settings,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import mashroom1 from '../assets/PREFAB/mashroom/mashroom1.jpg'
import mashroom2 from '../assets/PREFAB/mashroom/mashroom2.jpg'
import mashroom3 from '../assets/PREFAB/mashroom/mashroom3.png'
import mashroom4 from '../assets/PREFAB/mashroom/mashroom4.png'
import mashroom5 from '../assets/PREFAB/mashroom/mashroom5.png'
import mashroom6 from '../assets/PREFAB/mashroom/mashroom6.png'
import mashroom7 from '../assets/PREFAB/mashroom/mashroom8.png'
import user1 from '../assets/PREFAB/mashroom/user1.png'
import user2 from '../assets/PREFAB/mashroom/user2.png'
import user3 from '../assets/PREFAB/mashroom/user3.png'
import user4 from '../assets/PREFAB/mashroom/user4.png'
import design from '../assets/PREFAB/mashroom/design.png'
import design1 from '../assets/PREFAB/mashroom/design1.png'

const PrefabMushroom = () => {

  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const faqs = [
    {
      id: 0,
      q: "What is a prefab mushroom farm?",
      a: "A prefabricated mushroom farm is a modular, insulated structure specifically designed and equipped with climate control systems to create the perfect environment for year-round mushroom cultivation.",
    },
    {
      id: 1,
      q: "Can I grow mushrooms year-round?",
      a: "Yes, the controlled indoor environment allows continuous mushroom production regardless of external weather conditions.",
    },
    {
      id: 2,
      q: "Is it suitable for beginners?",
      a: "Absolutely. Our automated systems make it easier for beginners to manage complex climate requirements without extensive prior experience.",
    },
    {
      id: 3,
      q: "Does it require high maintenance?",
      a: "No, our structures are designed with durable, corrosion-resistant materials that require minimal maintenance compared to traditional setups.",
    },
    {
      id: 4,
      q: "What is the ideal temperature?",
      a: "The ideal temperature depends on the mushroom variety, but our systems typically maintain a stable range between 13°C and 18°C as required.",
    },
  ];

  const features = [
    {
      icon: <Layers3 size={48} strokeWidth={1.6} />,
      title: "Superior Insulation",
      description:
        "Prefab insulated structures maintain stable temperature and high humidity for mushroom growth.",
    },
    {
      icon: <Thermometer size={48} strokeWidth={1.6} />,
      title: "Advanced Climate Control",
      description:
        "Integrated systems control temperature, humidity, CO₂, and airflow for optimal cultivation.",
      active: true,
    },
    {
      icon: <DatabaseZap size={48} strokeWidth={1.6} />,
      title: "Energy Efficient",
      description:
        "Prefab design reduces energy loss and ensures low power consumption during operation.",
    },
    {
      icon: <Settings size={48} strokeWidth={1.6} />,
      title: "Quick Installation",
      description:
        "Pre-engineered prefab units allow fast setup of complete mushroom growing chambers.",
    },
    {
      icon: <ShieldCheck size={48} strokeWidth={1.6} />,
      title: "Pest & Contamination Free",
      description:
        "Sealed prefab rooms protect crops from pests, bacteria, and external contamination.",
    },
    {
      icon: <Leaf size={48} strokeWidth={1.6} />,
      title: "Year-Round Farming",
      description:
        "Controlled prefab environment supports continuous mushroom farming in all seasons.",
    },
  ];

  const galleryCards = [
    {
      id: 1,
      image: user1,
      title: "Prefab Structure",
      description:
        "Insulated panels with cam-lock joints ensure airtight and stable growing conditions.",
    },
    {
      id: 2,
      image: user2,
      title: "Climate System",
      description:
        "Advanced units regulate temperature, humidity, and airflow for optimal growth.",
    },
    {
      id: 3,
      image: user3,
      title: "Internal Setup",
      description:
        "Racks, shelving, and LED lighting support organized and efficient cultivation.",
    },
    {
      id: 4,
      image: user4,
      title: "Automation System",
      description:
        "Smart controls manage environmental conditions and monitor farm performance.",
    },
  ];


  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Prefabricated<br />
            <span>Mushroom Farms
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Modern modular mushroom growing solutions designed for efficient,
            climate-controlled, and year-round production.


          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* ── What is... ── */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            What is a Prefabricated<br />
            <span>Mushroom Farm</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p>
              Prefabricated mushroom farms by L&R Green Pvt Ltd are designed to deliver precise environmental control, ensuring
              optimal temperature, humidity, and airflow required for healthy mushroom growth. Built with high-quality insulated
              panels, these structures maintain stable internal conditions regardless of external weather, allowing farmers to
              achieve consistent and reliable yields throughout the year.
            </p>
            <p>
              These advanced systems from L&R Green Pvt Ltd also reduce manual effort through automation, managing key parameters
              like humidity, CO₂ levels, and ventilation. As a result, farmers benefit from improved productivity, lower energy
              consumption, and superior crop quality, making prefab mushroom farms a cost-effective and efficient solution for
              modern agriculture.
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
              <img src={mashroom1} alt="Main Building" />
            </div>

            {/* Small Image */}
            <div className={styles.smallImage}>
              <img src={mashroom2} alt="Interior" />
            </div>

          </div>
        </div>
      </section>


      <section className={styles.componentsSec}>
        <div className={styles.componentsTopRow}>
          <div className={styles.componentsFlex}>
            <h2>
              Key Features<br />
              <span>& Benefits</span>
            </h2>
            <div className={styles.FaqsLine} ></div>
          </div>
          <p>
            Efficient prefab systems designed for controlled
            mushroom growth, high yield, and consistent production.
          </p>
        </div>
        <div className={styles.mushroomFeatureGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={`${styles.mushroomFeatureCard} ${item.active ? styles.mushroomFeatureCardActive : ""
                }`}
            >
              <span className={styles.mushroomCardOverlay}></span>

              <div className={styles.mushroomFeatureIcon}>
                {item.icon}
              </div>

              <div className={styles.mushroomFeatureContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── Key Features ── */}
      <section className={styles.siteSec}>
        <div className={styles.siteHeader}>
          <div className={styles.siteText}>
            <h2>
              Core Components<br />
              <span>of Mushroom Farm</span>
            </h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p >
            Essential systems and structures designed to create a
            controlled, efficient, and high-performance mushroom growing environment.
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



      {/* ── Core Components ── */}



      {/* ── Farm Layout & Sizes ── */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Prefab Mashroom</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Farm Layout <br />
              & Sizes
            </h2>
            <p>
              Prefab mushroom farms are designed with dedicated functional areas such as substrate preparation, germination,
              growing, and packing to ensure a smooth and efficient workflow. They offer flexible solutions including
              container units, modular buildings, and beginner setups suitable for different scales of farming. This
              integrated approach supports better productivity, organized operations, and easy scalability from small
              to large commercial mushroom farms.
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











      {/* ── Advantages ── */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Advantages of Prefab<br />
            <span>Mushroom Farms</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.imageGalleryWrapper}>
            <div className={styles.primaryImageCard}>
              <img src={mashroom3} alt="Main Building" />
            </div>
            <div className={styles.floatingImageCard}>
              <img src={mashroom4} alt="Interior" />
            </div>

          </div>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Efficient prefab solutions designed for reliable performance, consistent yield,
                and cost-effective mushroom farming. Built for durability and optimized conditions,
                they simplify operations and enhance overall productivity.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Corrosion-resistant structure</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Maintains 90%+ humidity</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Optimal temperature (13–16°C)</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Low maintenance cost</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Faster ROI compared to traditional farms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* ── Why Choose L&R ── */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose L&R<br /><span>& How It Works</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          {/*  */}
          <div className={styles.solartext}>
            <p>L&R Green Pvt Ltd delivers high-quality prefabricated mushroom farms built with advanced
              technology and precision engineering to ensure durability, energy efficiency, and maximum
              yield. Our solutions are designed to provide consistent production through controlled environments,
              helping farmers achieve reliable and profitable results. From planning to installation, we offer
              complete turnkey support tailored to your requirements, budget, and location.</p>
            <p>Our streamlined process covers every stage of mushroom cultivation, including substrate preparation,
              controlled incubation, optimized growth conditions, and hygienic harvesting. With automated systems and
              expert guidance, we ensure smooth operations, efficient workflow, and long-term success for both small-scale
              and commercial mushroom farming setups.</p>
          </div>
          <div className={styles.mushroomImageLayout}>
            <div className={styles.mushroomMainImage}>
              <img src={mashroom5} alt="Main Building" />
            </div>

            <div className={styles.mushroomFloatingImage}>
              <img src={mashroom6} alt="Interior" />
            </div>
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
          <p>Quick answers to common queries about prefabricated mushroom farms and their usage.
            Helps you understand setup, operation, and benefits with ease.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={mashroom7} alt="warehouse" />
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


      {/* ── CTA Banner ── */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Prefab Mashroom?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          Executive prefab Mashroom tailored to your storage needs.
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

export default PrefabMushroom;
