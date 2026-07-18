import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useState } from "react";
import styles from "../styles/IndustrialShed.module.css";
import {
  ArrowRight, ArrowUpRight, Plus, X, DraftingCompass,
  Factory,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import shed1 from '../assets/Pre-Build/industrylSheld/shed.png'
import shed2 from '../assets/Pre-Build/industrylSheld/shed1.png'
import shed3 from '../assets/Pre-Build/industrylSheld/shed2.png'
import card1 from '../assets/Pre-Build/industrylSheld/card1.png';
import card2 from '../assets/Pre-Build/industrylSheld/card2.png';
import card3 from '../assets/Pre-Build/industrylSheld/card3.png';
import card4 from '../assets/Pre-Build/industrylSheld/card4.png';
import design from '../assets/Pre-Build/industrylSheld/design.png'
import design1 from '../assets/Pre-Build/industrylSheld/design1.png'



const faqs = [
  {
    q: "What are industrial sheds used for?",
    a: "Industrial sheds are used for manufacturing units, warehouses, workshops, and large-scale storage facilities.",
  },
  {
    q: "Are industrial sheds customizable?",
    a: "Yes, they can be designed based on size, load requirements, insulation, and specific operational needs.",
  },
  {
    q: "How durable are prefab industrial sheds?",
    a: "Our sheds are engineered with high-grade steel to withstand extreme weather and long-term industrial wear.",
  },
  {
    q: "How long does installation take?",
    a: "Depending on complexity, installation can take anywhere from a few weeks to a couple of months.",
  },
  {
    q: "Can the shed be expanded in the future?",
    a: "Yes, our PEB designs allow for easy expansion in length or adding mezzanine floors later.",
  },
];

const industryProjects = [
  {
    title: "Manufacturing Sheds",
    desc: "Modern steel sheds designed for efficient manufacturing operations. Built for durability, spacious layouts, and long-term performance.",
    img: card1,
  },
  {
    title: "Fabrication Sheds",
    desc: "Heavy-duty fabrication sheds for machinery and industrial processing. Engineered for strength, safety, and operational efficiency.",
    img: card2,
  },
  {
    title: "Automotive Workshop Sheds",
    desc: "Spacious workshop sheds designed for vehicle servicing and repairs. Built to support smooth workflow and equipment handling.",
    img: card3,
  },
  {
    title: "Storage & Utility Sheds",
    desc: "Secure utility sheds for storing tools, equipment, and materials. Designed for durability, easy access, and organized storage.",
    img: card4,
  },
];


const processData = [
  {
    id: 1,
    title: "Design & Planning",
    description:
      "Customized structural design based on load requirements, operational needs, and site conditions.",
    icon: <DraftingCompass size={22} strokeWidth={2} />,
  },
  {
    id: 2,
    title: "Manufacturing",
    description:
      "Precision fabrication of steel components and roofing systems using advanced machinery and quality materials.",
    icon: <Factory size={22} strokeWidth={2} />,
  },
  {
    id: 3,
    title: "Quality & Integration",
    description:
      "Comprehensive quality checks, surface treatment, and integration of structural and insulation components.",
    icon: <ShieldCheck size={22} strokeWidth={2} />,
  },
  {
    id: 4,
    title: "Installation & Commissioning",
    description:
      "On-site erection, structural alignment, and final handover ensuring ready-to-use industrial sheds.",
    icon: <Building2 size={22} strokeWidth={2} />,
  },
];


const IndustrialSheds = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate()

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      {/* 1. HERO SECTION (image_bd3717_2.jpg top) */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Performance Industrial   <br />
            <span>Shed Solutions</span>
          </h1>
          <p className={styles.heroDesc}>Engineered for strength, efficiency, and durability — L&R Enterprises delivers robust
            prefabricated industrial sheds for modern manufacturing and industrial operations.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* 2. INTRO SECTION (L&R Advanced...) */}
      <section className={styles.splitSection}>
        <div className={styles.splitFlex}>
          <div className={styles.textSide}>
            <span className={styles.labelTag}>• About L&R</span>
            <div className={styles.splitText}>
              <h2>L&R Advanced<br /><span>Industrial Shed Systems</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&R Green India Pvt Ltd is a trusted manufacturer of pre-engineered industrial sheds
              designed to support diverse industrial and manufacturing operations. Our sheds are
              built using high-grade steel structures and advanced engineering techniques to ensure
              durability, structural stability, and long-term performance even in demanding environments.
            </p>
            <p>
              With a strong focus on efficiency and customization, we deliver industrial shed solutions
              tailored to specific operational needs, including production facilities, storage units,
              and workshop spaces.
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
            <div className={styles.backCard}></div>

            <img
              src={shed1}
              alt="Construction"
              className={styles.image}
            />
          </div>
        </div>
      </section>



      {/* 3. PROJECT SHOWCASE (Grid Section) */}
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



      {/* 4. ADVANTAGE SECTION (L&R Industrial Shed Advantage) */}
      <section className={styles.splitSections}>
        <div className={styles.SplitFlex}>
          <div className={styles.imageCardContainer}>
            <div className={styles.imageCardBackground}></div>

            <img
              src={shed1}
              alt="Construction"
              className={styles.imageCardPhoto}
            />
          </div>
          {/* para */}
          <div className={styles.textSide}>
            <div className={styles.SplitText}>
              <h2>L&R Industrial<br /><span>Shed Advantage</span></h2>
              <div className={styles.introLine}></div>
            </div>
            <p>
              L&R Industrial Sheds are engineered using high-strength steel frameworks that ensure superior durability
              and resistance to environmental factors such as wind, heat, and corrosion.
              Our modular construction approach significantly reduces project timelines while maintaining
              consistent quality and structural integrity.
            </p>
            <p>
              We offer complete customization in design, dimensions, insulation, and structural features such as crane provisions
              and ventilation systems.
              Our sheds are designed for scalability, allowing easy expansion as business needs grow, making them a
              cost-effective long-term solution.
            </p>
          </div>
        </div>
      </section>

      {/* 5. STRENGTH BAND (image_bd3717_2.jpg bottom) */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R Industrial Sheds </h1>

          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Industrial Shed Strength <br />
              & Engineering Excellence
            </h2>
            <p>
              L&R Enterprises utilizes advanced fabrication facilities equipped with
              CNC machinery, automated welding systems,
              and precision engineering processes to manufacture industrial sheds that
              meet high standards of strength, accuracy, and performance.
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



      {/* 6. MANUFACTURING PROCESS (image_bd36f0_2.png top) */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.processText}>
            <h2>Sandwich Panel<br /><span>Manufacturing Process</span></h2>
            <div className={styles.productsDivider}></div>
          </div>
          <p>Our industrial sheds are designed to deliver strength, durability, and efficient workspace solutions.</p>
        </div>
        <div className={styles.processContent}>
          <div className={styles.processImage}>
            <img src={shed2} alt="processImg" />
          </div>
          <div className={styles.processSections}>
            {processData.map((item) => (
              <div key={item.id} className={styles.processCard}>
                <div className={styles.processIconBox}>
                  {item.icon}
                </div>

                <div className={styles.processContents}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. FAQ SECTION (image_bd36f0_2.png middle) */}
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
            <img src={shed3} alt="warehouse" />
          </div>
        </div>
      </section>



      {/* 8. READY TO CTA */}
      <section className={styles.cta}>
        <h2>Ready for Your Industrial Sheds Solution?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized industrial shed solutions tailored to your site needs.
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

export default IndustrialSheds;