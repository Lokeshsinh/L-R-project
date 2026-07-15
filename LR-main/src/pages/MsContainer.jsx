import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "../styles/MsContainer.module.css";
import home from '../assets/msConatiner/home.png'
import container from '../assets/msConatiner/container.png'
import {
  Plus, X, CalendarClock,
  Box,
  HousePlug,
  ShieldCheck,
} from "lucide-react";
import container2 from '../assets/msConatiner/conatiner2.png'
import container3 from '../assets/msConatiner/conatiner3.png'
import card1 from '../assets/msConatiner/card1.png';
import card2 from '../assets/msConatiner/card2.png';
import card3 from '../assets/msConatiner/card3.png';
import card4 from '../assets/msConatiner/card4.png';
import container4 from '../assets/msConatiner/container4.png';
import read1 from '../assets/msConatiner/read1.png';
import read2 from '../assets/msConatiner/read2.png';
import read3 from '../assets/msConatiner/read3.png';


const containerTypes = [
  {
    title: "Premium Series Containers",
    desc: "High-end modular MS containers built for durability, portability, and customization ideal for luxury offices, accommodation, control rooms, and secure storage, with strong steel frames, insulation, and premium finishes.",
    img: read1,
    path: "/puf-containers",
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
    img:  read3,
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
    icon: <CalendarClock size={48} strokeWidth={1.6} />,
    title: "End-to-End Execution",
    desc: "Complete project handling from design and engineering to manufacturing and final installation, ensuring a smooth and coordinated workflow.",
  },
  {
    icon: <Box size={48} strokeWidth={1.6} />,
    title: "In-House Manufacturing",
    desc: "All container units are produced within dedicated facilities, maintaining strict quality control and faster production timelines.",
  },
  {
    icon: <HousePlug size={48} strokeWidth={1.6} />,
    title: "Plug-and-Play Units",
    desc: "Pre-fabricated skid-mounted containers delivered ready-to-use, reducing on-site work and enabling quick setup.",
  },
  {
    icon: <ShieldCheck size={48} strokeWidth={1.6} />,
    title: "Rapid Project Completion",
    desc: "Efficient processes and minimal on-site labour ensure faster commissioning and timely project delivery.",
  },
];

const faqs = [
  {
    q: "What are Pre-Engineered Buildings (PEB)?",
    a: "Pre-Engineered Buildings (PEB) are steel structures designed and fabricated at the factory, then shipped and assembled on-site. They offer superior speed, durability, and cost-effectiveness compared to traditional construction.",
  },
  {
    q: "What are Pre-Engineered Buildings (PEB)?",
    a: "Light Gauge Steel Framing is a sustainable, earthquake-resistant construction method for modern infra, utilizing cold-formed steel profiles to build lightweight yet incredibly strong structures.",
  },
  {
    q: "What container sizes are available?",
    a: "We provide containers in standard 20ft and 40ft sizes, as well as customized dimensions designed and manufactured to meet specific site office, storage, or accommodation requirements.",
  },
  {
    q: "Do you provide installation in New Delhi?",
    a: "Yes, we provide end-to-end installation, shipping, and fabrication support throughout New Delhi, the NCR region, and across major industrial zones in India.",
  },
  {
    q: "Does L&R Green India provide solutions for solar projects?",
    a: "Yes, we design and manufacture high-performance solar mounting structures, fasteners, and specialized components for residential, commercial, and utility-scale solar installations.",
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
        <h3>L&R Green India Pvt Ltd </h3>
        <h1>MS CONTAINERS</h1>
        <p>
          Portable Modular Steel Containers engineering for the Oil &amp; Gas,
          Renewable, Construction,
          <br /> Railways, Refineries, Highways, Food and Cement industries —
          delivered Pan-India under a <br /> Design &amp; Build model.
        </p>
        <button className={styles.btnWhite}>
          <span>Contact Us</span>
          <ArrowRight className={styles.arrow} size={18} />
        </button>
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
            <img src={container} alt="container" />
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

            <button className={styles.btnOutline}>
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
              src={container4}
              alt="Container"
              className={styles.containerImg}
            />

          </div>
        </div>
      </section>



      {/* STRUCTURAL STRENGTH BAND */}
      <section className={styles.structural}>
        <div className={styles.structuralWatermark}> L&R MS CONTAINER</div>
        <div className={styles.structuralContent}>
          <div className={styles.structuralText}>
            <h2>
              Structural Strength for Harsh
              <br />
              Environmental &amp; Climatic Conditions
            </h2>
            <p>
              The skid-mounted containers produced within this project were
              designed to <br /> withstand harsh climatic conditions, industrial
              environments, and intensive <br /> usage scenarios. The steel
              structural system provides high structural strength
              <br /> while the modular construction approach allows customised
              solutions in line <br /> with project requirements.
            </p>
          </div>
          <div className={styles.structuralImg} />
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
              Fast &amp; Integrated
              <br />
              <span>Project Delivery</span>
            </h2>
            <div className={styles.deliveryLine}></div>
          </div>
          <p>
            Seamless execution from design to installation, ensuring quick
            deployment and timely completion.
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
            Find answers to common questions about our container solutions,
            design process, and performance benefits.
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
          Connect with our team to design and deliver durable, efficient, and
          fully customised ms containers tailored to your storage needs.
        </p>


        <button className={styles.contactBtn}>
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
