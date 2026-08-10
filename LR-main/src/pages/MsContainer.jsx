import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "../styles/MsContainer.module.css";
import home from '../assets/msConatiner/home.png'
import {
  Plus, X, CalendarClock,
  Box,
  HousePlug,
  ShieldCheck,
} from "lucide-react";
import container2 from '../assets/msConatiner/conatiner2.png'
import container3 from '../assets/msConatiner/conatiner3.png'
import container5 from '../assets/msConatiner/container4.jpg'
import container6 from '../assets/msConatiner/container5.jpg'
import card1 from '../assets/msConatiner/card1.png';
import card2 from '../assets/msConatiner/card2.png';
import card3 from '../assets/msConatiner/card3.png';
import card4 from '../assets/msConatiner/card4.png';
import read1 from '../assets/msConatiner/read1.png';
import read2 from '../assets/msConatiner/read2.png';
import read3 from '../assets/msConatiner/read3.png';
import design from '../assets/msConatiner/design.png'
import design1 from '../assets/msConatiner/design1.png'


const containerTypes = [
  {
    title: "Premium Series Containers",
    desc: "High-end modular MS containers built for durability, portability, and customization ideal for luxury offices, accommodation, control rooms, and secure storage, with strong steel frames, insulation, and premium finishes.",
    img: read1,
    path: "/premium-ms-containers",
  },
  {
    title: "Executive Series Containers",
    desc: "Efficient prefabricated containers designed for offices, cabins, and site operations. Built with durable MS structures, they offer strength, weather resistance, and a practical, cost-effective workspace solution.",
    img: read2,
    path: "/executive-containers",
  },
  {
    title: "L&R Value Series Containers",
    desc: "Economical container solutions in all sizes, built for strength and flexibility—ideal for budget-friendly, durable, and quick-deployment projects across various industries and site conditions.",
    img: read3,
    path: "/lr-value-containers",
  },
];


const industryProjects = [
  {
    title: "Oil & Gas Projects",
    desc: "High-quality modular buildings and container solutions designed for oil & gas exploration sites, ensuring durability, safety, and rapid deployment in demanding environments.",
    img: card1,
  },
  {
    title: "Energy Sector Solutions",
    desc: "Reliable container units for renewable energy projects, substations, and power facilities, supporting operational efficiency and temporary workforce accommodation.",
    img: card2,
  },
  {
    title: "Industrial Site Buildings",
    desc: "Custom-engineered prefab buildings for industrial facilities, manufacturing units, warehouses, and project offices with quick installation and long-term performance.",
    img: card4,
  },
  {
    title: "Portable Modular Systems",
    desc: "Modern portable cabins and modular structures providing flexible workspace, accommodation, healthcare, education, and commercial infrastructure solutions.",
    img: card3,
  },
];

const deliveryFeatures = [
  {
    icon: <HousePlug size={48} strokeWidth={1.6} />,
    title: "Quality Construction",
    desc: "Built using premium materials and modern techniques to ensure durability, safety, and long-term structural performance.",
  },
  {
    icon: <Box size={48} strokeWidth={1.6} />,
    title: "Skilled Engineering",
    desc: "Experienced engineers and project experts deliver precise planning, efficient execution, and superior construction quality.",
  },
  {
    icon: <CalendarClock size={48} strokeWidth={1.6} />,
    title: "Timely Project Delivery",
    desc: "Well-planned workflows and advanced construction methods ensure projects are completed on schedule without compromising quality.",
  },


  {
    icon: <ShieldCheck size={48} strokeWidth={1.6} />,
    title: "Customer Satisfaction",
    desc: "Providing customized construction solutions with reliable support, transparent communication, and complete client satisfaction.",
  },
];


const faqs = [
  {
    id: 0,
    q: "What is prefab drywall?",
    a: "Prefab drywall is a lightweight partition system made from gypsum boards and steel framing for fast, clean, and efficient interior construction.",
  },
  {
    id: 1,
    q: "Where is it used?",
    a: "It is widely used in offices, homes, hospitals, hotels, schools, and commercial buildings to create modern interior spaces.",
  },
  {
    id: 2,
    q: "Is it better than traditional walls?",
    a: "Yes, prefab drywall offers faster installation, reduced construction waste, better finishing, and greater design flexibility than conventional masonry walls.",
  },
  {
    id: 3,
    q: "Does it reduce construction time?",
    a: "Yes, its prefabricated design enables quick installation, significantly reducing overall construction time and labor costs.",
  },
  {
    id: 4,
    q: "Is prefab drywall durable?",
    a: "Yes, it is built with high-quality materials that provide excellent strength, durability, and long-lasting performance for interior applications.",
  },
];

const MsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R PREFAB SOLAR INDIA PVT LTD</span>
          <h1 className={styles.mainTitle}>
            MS Container <br />
            <span>Solutions
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Portable Modular Steel Containers engineered for the Oil & Gas, Construction,
            Railways, Refineries, Highways, and Cement industries — delivered under a Design & Build model.

          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>


      {/* INTRO */}

      <section className={styles.intro}>
        <div className={styles.introTop}>
          <div className={styles.introFlex}>
            <h2>
              MS <span>Container</span>
            </h2>
            <div className={styles.introLine}></div>
          </div>
          <div className={styles.introThumb}>
            <img src={home} alt="home" />
          </div>
        </div>

        <div className={styles.introBody}>
          {/* Left Image */}
          <div className={styles.introImg}>
            <img src={container5} alt="container" />
          </div>

          {/* Right Content */}
          <div className={styles.introText}>
            <p>
              MS Containers (Mild Steel Containers) are portable and modular
              structures designed for durable and flexible space solutions.
              Built with
              strong steel, they are widely used in industrial, oil &amp; gas,
              construction, renewable energy, and infrastructure projects
              where quick
              setup and versatility are important.
            </p>

            <p>
              These containers feature a skid-mounted design, allowing easy

              installation without foundations and simple relocation using
              cranes or  forklifts. Suitable for offices, accommodation,
              and storage, MS Containers provide a cost-effective,
              low-maintenance, and practical  solution for modern project
              needs.
            </p>

            <p>
              With strong build quality and smart design, MS Containers ensure
              stability, efficiency, and long-lasting use.
            </p>

            <button className={styles.btnOutline} onClick={() => {
              navigate("/contact");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}>
              <span>Get Contact</span>

              <span className={styles.iconWrap}>
                <ArrowUpRight className={styles.icon1} size={18} />
                <ArrowUpRight className={styles.icon2} size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>



      {/* TYPES */}
      <section className={styles.typesSec}>
        <div className={styles.typesHeader}>
          <div className={styles.typesText}>
            <h2>
              Types of Modular
              <br />
              <span>MS Containers</span>
            </h2>
            <div className={styles.typeLine}></div>
          </div>

          <p>
            Discover a versatile range of modular MS containers built
            for industrial and commercial use offering durable, mobile,
            and flexible solutions for offices, accommodation, storage,
            and site operations.
          </p>
        </div>

        <div className={styles.typesGrid}>
          {containerTypes.map((item, index) => (
            <div className={styles.typeCard} key={index}>
              <div className={styles.imageBox}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.typeImg}
                />
              </div>

              <div className={styles.typeBody}>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button
                  className={styles.btnKnow}
                  onClick={() => navigate(item.path)}
                >
                  <span>Know More</span>

                  <span className={styles.iconWrap}>
                    <ArrowRight className={styles.iconOne} size={18} />
                    <ArrowRight className={styles.iconTwo} size={18} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* HIGH MOBILITY */}
      <section className={styles.mobilitySec}>
        <div className={styles.mobilityFlexs}>
          <div className={styles.monilityText}>
            <h2 className={styles.secTitle}>
              High Mobility &amp; Flexible <br />
              <span>Modular Container Solutions</span>
            </h2>
            <div className={styles.mobilityLine}></div>
          </div>
          <div className={styles.mobilitySmall}>
            <img src={container3} alt="container3" />
          </div>
        </div>
        <div className={styles.mobilityGrid}>
          <div className={styles.mobilityContent}>
            {/* <div className={styles.mobilityDivider} /> */}
            <p>
              Skid-mounted MS containers are designed for quick and safe
              placement
              without the need for foundations. Their strong steel structure
              allows easy transportation and relocation using cranes or
              forklifts.
            </p>
            <p>
              These containers are ideal for remote and challenging environments
              such as oil & gas sites, energy projects, and temporary
              settlements where
              mobility and fast setup are essential.
            </p>
            <p>
              Built for both accommodation and office use, the units offer
              efficient
              layouts, user comfort, and durable, low-maintenance construction
              for
              long-term performance.
            </p>
          </div>
          {/* image  */}
          <div className={styles.imageWrapper}>

            <div className={styles.blueShape}></div>

            <img
              src={container6}
              alt="Container"
              className={styles.containerImg}
            />

          </div>
        </div>
      </section>



      {/* STRUCTURAL STRENGTH BAND */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>

        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              What is Modular<br />
              Construction?
            </h2>
            <p>
              Modular construction is an advanced form of prefabrication where complete
              building modules are manufactured off-site with finished interiors, electrical
              systems, plumbing, insulation, and structural components already integrated.The
              modules are transported to the site and assembled into a complete building,
              significantly reducing project completion time and site disruption.
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





      {/* EXPERTISE / INDUSTRY */}
      <section className={styles.expertise}>
        <div className={styles.expertiseHeader}>
          <div className={styles.expertiseText}>
            <h2>
              Expertise Across Energy
              <br />
              <span>&amp; Industrial Projects</span>
            </h2>

            <div className={styles.expertiseLine}></div>
          </div>
          <p>
            L&amp;R delivers advanced modular container solutions for oil &amp;
            gas, energy, and construction sectors, combining strong engineering,
            flexible design, and fast project execution for demanding
            environments.
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

      {/* FAST DELIVERY */}
      <section className={styles.delivery}>
        <div className={styles.deliveryHeader}>
          <div className={styles.deliverytext}>
            <h2>
              Reliable Construction
              <br />
              <span>Solutions</span>
            </h2>
            <div className={styles.deliveryLine}></div>
          </div>
          <p>
            Delivering innovative construction solutions with quality engineering, efficient execution,
            and timely project completion for residential, commercial, and industrial developments.
          </p>
        </div>
        <div className={styles.deliveryGrid}>
          {deliveryFeatures.map((item, index) => (
            <div className={styles.delivCard} key={index}>
              <div className={styles.delivIcon}>
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}


      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQ</span>
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
            Quick answers from L&R Green Pvt Ltd about prefabricated dry wall systems,
            covering key benefits, usage, and performance in modern interior construction.
          </p>
        </div>

        <div className={styles.faqBody}>
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
            <img src={container2} alt="container" />
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Ms Containers?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully customized
          ms containers tailored to your storage needs.
        </p>
        <button className={styles.contactBtn} onClick={() => {
          navigate("/contact");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}>
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

export default MsContainer;
