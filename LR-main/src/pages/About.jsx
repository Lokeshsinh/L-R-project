import { useState, useEffect } from "react";
import styles from "../styles/AboutPage.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {
  Building2, Factory, House, BadgeCheck,
  Box,
} from "lucide-react";
import {
  ArrowRight, ArrowUpRight, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import about1 from '../assets/About/about1.png'
import about2 from '../assets/About/about2.jpg'
import officeImage from '../assets/About/officeImage.png'
import officeImg from "../assets/About/user1.jpg";
import labourImg from "../assets/About/user2.jpg";
import containerImg from "../assets/About/user3.jpg";
import panelImg from "../assets/About/user4.jpg";
import design from '../assets/About/design.png'
import design1 from '../assets/About/design1.png'
import design3 from '../assets/About/design3.png'
import design4 from '../assets/About/design4.png'
import img2 from '../assets/About/img2.jpg'
import img1 from '../assets/About/img1.png'
import img3 from '../assets/About/img3.jpg'
import img4 from '../assets/About/img4.jpg'
import img5 from '../assets/About/img5.jpg'
import img6 from '../assets/About/img6.jpg'
import workerImage from '../assets/About/workImage.png'


const About = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };




  const chooseData = [
    {
      image: img1,
      title: "10+ Years Experience",
      description:
        "Delivering trusted prefabricated and modular construction solutions.",
    },
    {
      image: img2,
      title: "Turnkey Solutions",
      description:
        "Complete design, manufacturing, installation and project delivery.",
    },
    {
      image: img3,
      title: "Engineering Team",
      description:
        "Experienced engineers ensuring precision and superior quality.",
    },
    {
      image: img4,
      title: "PAN India Network",
      description:
        "Serving projects across India with timely delivery and support.",
    },
    {
      image: img5,
      title: "Modern Facility",
      description:
        "Advanced manufacturing for durable and high-performance structures.",
    },
    {
      image: img6,
      title: "Quality & Safety",
      description:
        "Strict quality control with international safety standards.",
    },
  ];

  const sliderItems = [...chooseData, ...chooseData];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [pauseSlider, setPauseSlider] = useState(false);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    if (pauseSlider) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setTransition(true);
    }, 4000);

    return () => clearInterval(timer);
  }, [pauseSlider]);

  useEffect(() => {
    if (currentSlide === chooseData.length) {
      const reset = setTimeout(() => {
        setTransition(false);
        setCurrentSlide(0);
      }, 3000);

      return () => clearTimeout(reset);
    }
  }, [currentSlide, chooseData.length]);




  const cards = [
    {
      id: 1,
      image: officeImg,
      title: "Prefabricated Site Office",
      description:
        "Modern site offices designed for efficient workspaces and quick installation. Built with durable materials for lasting performance.",
    },
    {
      id: 2,
      image: labourImg,
      title: "Labour Accommodation",
      description:
        "Comfortable accommodation units for workers at project sites. Designed for safety, durability, and convenient living.",
    },
    {
      id: 3,
      image: containerImg,
      title: "Modular MS Containers",
      description:
        "Versatile modular containers for commercial and industrial applications. Engineered for strength, portability, and flexible use.",
    },
    {
      id: 4,
      image: panelImg,
      title: "Sandwich Panels",
      description:
        "High-performance insulated sandwich panels for modern construction. Provide excellent thermal efficiency, durability, and energy savings.",
    },
  ];

  const features = [
    {
      id: 1,
      icon: <House size={44} strokeWidth={1.6} />,
      title: "Diverse Prefabricated Solutions",
      desc: "Our mild steel containers are engineered to provide adaptable workspace and storage solutions for various applications.",
    },
    {
      id: 2,
      icon: <Factory size={44} strokeWidth={1.6} />,
      title: "Advanced Manufacturing Approach",
      desc: "We combine modern fabrication techniques with high-quality materials to deliver superior structural performance.",
    },
    {
      id: 3,
      icon: <BadgeCheck size={44} strokeWidth={1.6} />,
      title: "Commitment to Client Success",
      desc: "We believe strong relationships are built on trust, consistency, and dependable service. Through timely delivery and customized solutions, we continue to support businesses with structures built for the future.",
    },
  ];





  const faqs = [
    {
      id: 1,
      q: "What products does L & R Enterprises manufacture?",
      a:
        "We manufacture prefabricated buildings, PEB structures, MS containers, sandwich panels, warehouses, industrial sheds, and modular construction solutions.",
    },
    {
      id: 2,
      q: "Are your prefabricated structures customizable?",
      a:
        "Yes, all our structures can be customized in size, layout, insulation, interiors, doors, windows, and finishes to meet project requirements.",
    },
    {
      id: 3,
      q: "How durable are your mild steel containers?",
      a:
        "Our MS containers are built using high-quality steel with protective coatings, ensuring excellent strength, durability, and weather resistance.",
    },
    {
      id: 4,
      q: "Do you provide installation services?",
      a:
        "Yes, we offer complete transportation, on-site installation, and after-sales support for all our prefabricated and modular solutions.",
    },
    {
      id: 5,
      q: "What industries do you serve?",
      a:
        "We serve construction, industrial, commercial, infrastructure, warehousing, healthcare, education, and government sectors across India.",
    },
  ];

  return (
    <>
      <Header />

      <main>




        {/* <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p>About Our Company</p>
            <h1>
              BUILDING THE FUTURE WITH <br />
              L&R GREEN INDIA PVT LTD
            </h1>
            <h4>
              Leading Manufacturer Of Prefabricated Structures, Mild Steel
              Containers & Prefabricated Cabins From New Delhi, India.
            </h4>
            <button>
              Contact us <span>→</span>
            </button>
          </div>

          <div className={styles.heroMiniCard}>
            <div>
              <p>Modular Office</p>
              <span>→</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=500&q=80"
              alt="Modular Office"
            />
          </div>
        </section> */}


        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>

          <div className={styles.heroContent}>
            <span className={styles.topLabel}>About Our Company</span>

            <h1 className={styles.mainTitle}>
              Building the Future with  <br />
              <span>L&R Green India Pvt Ltd</span>
            </h1>

            <p className={styles.heroDesc}>
              Leading manufacturer of prefabricated structures, mild steel
              containers & prefabricated cabins from New Delhi, India.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className={styles.btnWhite}
            >
              <span>Contact Us</span>
              <ArrowRight className={styles.arrow} size={18} />
            </button>
          </div>

          {/* Floating Product Card */}
          <div className={styles.heroProductCard}>
            <div className={styles.cardHeader}>
              <h4>Modular Office</h4>
              <ArrowRight size={22} />
            </div>

            <div className={styles.cardImage}>
              <img src={officeImage} alt="Modular Office" />
            </div>
          </div>
        </section>






        {/* <section className={styles.aboutIntro}>
          <div className={styles.introImages}>
            <img
              className={styles.imgBack}
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
              alt="Factory"
            />
            <img
              className={styles.imgFront}
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
              alt="Prefab"
            />
          </div>

          <div className={styles.introText}>
            <span className={styles.badge}>• About us</span>
            <h2>
              10 Years of <span>Structural</span>
            </h2>
            <p>
              L&R Green India Pvt Ltd is a New Delhi-based manufacturer
              <br />
              specializing in prefabricated structures, mild steel containers,
              <br />
              and prefabricated cabins. Established in 2015, we have built a
              <br />
              strong reputation for delivering high-quality, cost-effective
              <br />
              building solutions across India.
            </p>

            <p>
              Our extensive product range includes Prefab Site Office
              <br />
              Structures, Pre Engineered Building Structures, Poultry Farm
              <br />
              Sheds, Prefabricated Warehouse Sheds, Prefabricated Farm Houses,
              <br />
              and Prefabricated Control Rooms — all manufactured with precision
              <br />
              engineering and the finest materials.
            </p>
            <button>
              Get Contact <span>↗</span>
            </button>
          </div>
        </section> */}



        {/* <section className={styles.journey}>
          <h2>
            Our <span>Journey</span>
          </h2>

          <div className={styles.timeline}>
            {journey.map((item, index) => (
              <div
                className={`${styles.timelineItem} ${item.side === "left" ? styles.left : styles.right
                  }`}
                key={item.year}
              >
                <div className={styles.yearBox}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.year}</h3>
                </div>

                <div className={styles.journeyCard}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <button>↗</button>
                </div>
              </div>
            ))}
          </div>
        </section> */}


        <section className={styles.teamSection}>
          <div className={styles.Teamuser}>
            <span className={styles.TeamBoder}>Our Team</span>
          </div>
          <div className={styles.TeamText}>
            <h2>
              Meet Our <br />
              <span>Expert Team</span>
            </h2>
            <div className={styles.teamLine}></div>
          </div>

          <div className={styles.ourTeamFlex}>
            <div className={styles.ourTeamPara}>
              <p>Our team is made up of experienced engineers, architects, project managers, and skilled
                technicians who are passionate about delivering high-quality prefabricated and modular
                building solutions. With extensive industry knowledge and technical expertise, we ensure
                every project is executed with precision, efficiency, and attention to detail.</p>
              <p>Working collaboratively from design to installation, our professionals focus on
                innovation, safety, and customer satisfaction at every stage. By combining advanced
                engineering with modern manufacturing practices, we deliver reliable, durable, and
                customized solutions that meet the unique requirements of every client.</p>
            </div>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>

                <div className={styles.yellowShape}></div>

                <div className={styles.imageCard}>
                  <img
                    src={workerImage}
                    alt="Worker"
                    className={styles.workerImage}
                  />
                </div>

                <div className={styles.dotPattern}></div>

              </div>
            </div>

          </div>
        </section>



        <section className={styles.mfgBand}>
          <div className={styles.scrollWrap}>
            <div className={styles.scrollTrack}>
              <h1>L & R Enterprises</h1>
            </div>
          </div>

          <div className={styles.mfgContainer}>
            <div className={styles.mfgText}>
              <h2>
                Delivering Reliable <br />
                Prefabricated Structures
              </h2>
              <p>
                L&R Green India Pvt Ltd specializes in manufacturing high-quality prefabricated
                structures and mild steel containers in New Delhi. From site offices to warehouse
                sheds and portable containers, our solutions are built for durability, flexibility,
                and modern industrial use.
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




        <section className={styles.processCards}>
          <div className={styles.processCardText}>
            <h2>
              Our <span>Process</span>
            </h2>
            <div className={styles.processCardLine}></div>
          </div>

          <div className={styles.processGrid}>

            {/* Card 1 */}
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <Building2
                  size={48}
                  strokeWidth={1.6}
                  className={styles.cardIcon}
                />

                <span className={styles.step}>STEP 01</span>
              </div>

              <h3>Requirement Analysis</h3>

              <p>
                We begin by understanding your project needs, space
                requirements, and specifications to provide the most
                suitable prefabricated solution.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`${styles.processCard} ${styles.activeCard}`}>
              <div className={styles.cardHeader}>
                <Box
                  size={48}
                  strokeWidth={1.6}
                  className={styles.cardIcon}
                />

                <span className={styles.step}>STEP 02</span>
              </div>

              <h3 style={{ color: "white" }}>Design &amp; Planning</h3>

              <p style={{ color: "white" }}>
                Our team creates detailed designs and structural plans
                using modern techniques to ensure accuracy,
                efficiency, and durability.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <Factory
                  size={48}
                  strokeWidth={1.6}
                  className={styles.cardIcon}
                />

                <span className={styles.step}>STEP 03</span>
              </div>

              <h3>Manufacturing</h3>

              <p>
                Using high-quality materials and advanced fabrication
                methods, we manufacture structures and containers
                with precision and strict quality control.
              </p>
            </div>

            {/* Card 4 */}
            <div className={styles.processCard}>
              <div className={styles.cardHeader}>
                <House
                  size={48}
                  strokeWidth={1.6}
                  className={styles.cardIcon}
                />

                <span className={styles.step}>STEP 04</span>
              </div>

              <h3>Delivery &amp; Installation</h3>

              <p>
                We ensure timely delivery and provide smooth on-site
                installation, making the entire process quick,
                hassle-free, and reliable.
              </p>
            </div>

          </div>
        </section>



        <section className={styles.whyChoose}>
          <div className={styles.WhyChoose}>
            <span className={styles.WhooseBoder}>WHY CHOOSE US</span>
          </div>
          <div className={styles.headings}>
            <div className={styles.WhyChoseText}>
              <h2>Building Trust Through<br /> <span> Quality & Innovation</span></h2>
              <div className={styles.WhyChooseLine}></div>
            </div>
            <p>
              We deliver reliable prefabricated and modular building solutions with
              advanced engineering, premium quality and exceptional customer
              support.
            </p>
          </div>

          <div
            className={styles.chooseSlider}
            onMouseEnter={() => setPauseSlider(true)}
            onMouseLeave={() => setPauseSlider(false)}
          >
            <div
              className={styles.chooseTrack}
              style={{
                transform: `translateX(calc(-${currentSlide} * 25%))`,
                transition: transition ? "transform .8s ease" : "none",
              }}
            >
              {sliderItems.map((feature, index) => (
                <div className={styles.chooseItem} key={index}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={styles.chooseImage}
                  />

                  <div className={styles.chooseOverlay}>
                    <div className={styles.chooseInfo}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>








        <section className={styles.smart}>
          <div className={styles.SmartFlex}>
            <div className={styles.smartHead}>
              <h2>
                Building Smarter Spaces <br />
                <span>with Precision and Trust</span>
              </h2>
              <div className={styles.smartLine}></div>
            </div>
            <p>
              L & R Enterprises delivers durable prefabricated structures and
              steel containers designed for modern industrial and commercial
              needs.
            </p>
          </div>

          <div className={styles.featuresSection}>
            <div className={styles.leftSide}>
              {features.map((item) => (
                <div className={styles.featureCard} key={item.id}>
                  <div className={styles.iconBox}>
                    {item.icon}
                  </div>

                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.rightSide}>
              <div className={styles.imageWrapper}>
                <img src={about2} alt="" />
              </div>
            </div>
          </div>

        </section>


        <section className={styles.prefabShowcaseSection}>
          <div className={styles.prefabWatermark}>
            <div className={styles.prefabWatermarkTrack}>
              <h1>L & R Enterprises</h1>
            </div>
          </div>

          <div className={styles.prefabShowcaseContainer}>
            <div className={styles.prefabContent}>
              <h2>
                Strength, Quality<br />
                & Commitment
              </h2>

              <p>
                At L & R Enterprises, we are committed to delivering high-quality prefabricated
                structures and steel containers built with precision and care. Our focus on durability,
                timely execution, and customer satisfaction makes us a trusted choice for modern construction needs.
              </p>


              <div className={styles.prefabShape}>
                <img src={design4} alt="Decoration" />
              </div>
            </div>

            <div className={styles.prefabImageCard}>
              <img
                src={design3}
                alt="Prefabricated Structure"
              />
            </div>
          </div>
        </section>



        {/* <section className={styles.commitment}>
          <div>
            <h2>
              Strength, Quality <br />& Commitment
            </h2>
            <p>
              At L & R Enterprises, we are committed to delivering high-quality
              prefabricated <br />
              structures and steel containers built with precision and care. Our
              focus on durability, <br /> timely execution, and customer
              satisfaction makes us a trusted choice for modern <br />{" "}
              construction needs.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
            alt="Structure"
          />

          <h1> L & R ENTERPRISES</h1>
        </section> */}

        <section className={styles.productsImage} >
          <div className={styles.ProductBox}>
            <span className={styles.introLabels}>• Our Product</span>
          </div>
          <div className={styles.productHead}>
            <h2>
              Quality Products <br />
              <span>We Offer</span>
            </h2>
            <div className={styles.ProductImageLine}></div>
          </div>

          <div className={styles.productGrid}>
            {cards.map((card) => (
              <div className={styles.productCard}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={styles.cardImage}
                />

                <div className={styles.darkOverlay}></div>

                <button className={styles.arrowBtn}>
                  <ArrowUpRight size={28} strokeWidth={2.5} />
                </button>

                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>





        {/* =================Faq================ */}
        <section className={styles.faqSec}>
          <span className={styles.introLabel}>• FAQS</span>
          <div className={styles.faqHeader}>
            <div className={styles.faqText}>
              <h2>Frequently Asked<br /><span>Questions</span></h2>
              <div className={styles.FaqsLine}></div>
            </div>
            <p>Find answers to common questions about our
              prefabricated structures, containers, and services.</p>
          </div>
          <div className={styles.faqBody}>
            <div className={styles.faqImg}>
              <img src={about1} alt="warehouse" />
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
      </main >

      <Footer />
    </>
  );
};

export default About;
