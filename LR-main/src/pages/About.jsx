import { useState, useEffect, useCallback } from "react";
import styles from "../styles/AboutPage.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import {
  Building2, Factory, House, BadgeCheck, ChevronLeft, ChevronRight, Award,
  ClipboardCheck,
  ShieldCheck,
  Leaf,
  Box,
} from "lucide-react";
import {
  ArrowRight, ArrowUpRight, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import about1 from '../assets/About/about1.png'
import about2 from '../assets/About/about2.jpg'
import about3 from '../assets/About/about3.jpg'
import about4 from '../assets/About/about4.jpg'
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
import workerImage from '../assets/About/create.jpg'
import video1 from '../assets/About/video1.mp4'
import video2 from '../assets/About/video2.mp4'
import video3 from '../assets/About/video3.mp4'
import video4 from '../assets/About/video4.mp4'
import video5 from '../assets/About/video5.mp4'
import video6 from '../assets/About/video6.mp4'
import video7 from '../assets/About/video7.mp4'
import video8 from '../assets/About/video8.mp4'
import video9 from '../assets/About/video9.mp4'
import video10 from '../assets/About/video10.mp4'
import founded from "../assets/About/foundation.png";
import manufacturing from "../assets/About/manufacturing.png";
import expansion from "../assets/About/expansion.png";
import projects from "../assets/About/projects.png";
import found from '../assets/About/foun1.jpg'
import founder from '../assets/About/founder.png'


const About = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  const galleryVideos = [
    {
      id: 1,
      video: video1,
      // title: "Prefab Site Office",
    },
    {
      id: 2,
      video: video2,
      // title: "Labour Accommodation",
    },
    {
      id: 3,
      video: video3,
      // title: "MS Container",
    },
    {
      id: 4,
      video: video4,
      // title: "Sandwich Panels",
    },
    {
      id: 5,
      video: video5,
      // title: "PEB Warehouse",
    },
    {
      id: 6,
      video: video6,
      // title: "Portable Cabin",
    },
    {
      id: 7,
      video: video7,
      // title: "Steel Structure",
    },
    {
      id: 8,
      video: video8,
      // title: "Industrial Shed",
    },
    {
      id: 9,
      video: video9,
      // title: "Steel Structure",
    },
    {
      id: 10,
      video: video10,
      // title: "Industrial Shed",
    },
  ];


  const [currentSlides, setCurrentSlides] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlides((prev) =>
      prev === galleryVideos.length - 1 ? 0 : prev + 1
    );
  }, [galleryVideos.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentSlides((prev) =>
      prev === 0 ? galleryVideos.length - 1 : prev - 1
    );
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



  const journey = [
    {
      image: founded,
      category: "OUR HISTORY",
      title: "Company Founded",
      desc: "Started with a vision to provide reliable and innovative prefabricated building solutions with a strong focus on quality and customer satisfaction.",
    },
    {
      image: manufacturing,
      category: "MANUFACTURING",
      title: "Manufacturing Facility",
      desc: "Established advanced manufacturing capabilities to deliver precision-engineered structures with superior quality and efficiency.",
    },
    {
      image: expansion,
      category: "EXPANSION",
      title: "PAN India Expansion",
      desc: "Expanded our operations across India, delivering customized prefabricated and modular solutions to diverse industries and projects.",
    },
    {
      image: projects,
      category: "SUCCESS",
      title: "100+ Projects Completed",
      desc: "Successfully executed numerous projects across commercial, industrial, and infrastructure sectors with trusted performance.",
    },
  ];
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

  const qualityData = [
    {
      id: 1,
      icon: <Award size={34} strokeWidth={2.2} />,
      title: "ISO Certifications",
      description:
        "Certified under ISO 9001 Quality Management System and ISO 14001 Environmental Management System, ensuring consistent product quality, efficient processes, and sustainable manufacturing practices.",
    },
    {
      id: 2,
      icon: <ClipboardCheck size={34} strokeWidth={2.2} />,
      title: "Quality Assurance",
      description:
        "Every prefabricated structure undergoes rigorous inspections and quality testing to guarantee superior strength, precision engineering, durability, and long-lasting performance.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={34} strokeWidth={2.2} />,
      title: "Safety Standards",
      description:
        "We strictly follow industry-approved safety regulations throughout design, manufacturing, transportation, and on-site installation to ensure complete reliability.",
    },
    {
      id: 4,
      icon: <Leaf size={34} strokeWidth={2.2} />,
      title: "Environmental Commitment",
      description:
        "Committed to eco-friendly manufacturing by reducing waste, improving resource efficiency, and delivering sustainable prefabricated construction solutions.",
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






        <section className={styles.aboutIntro}>
          <div className={styles.aboutFlex}>
            <div className={styles.galleryWrapper}>

              <div className={styles.leftImageCard}>
                <img src={about3} alt="Project One" />
              </div>

              <div className={styles.rightImageCard}>
                <img src={about4} alt="Project Two" />
              </div>

            </div>
            <div className={styles.introText}>
              <span className={styles.badge}>• About us</span>
              <div className={styles.introUser}>
                <h2>
                  Company <span>Overview</span>
                </h2>
                <div class={styles.introLine}></div>
              </div>
              <p>With over 10 years of industry experience, L&R Enterprises is a trusted manufacturer
                of prefabricated buildings, modular structures, pre-engineered buildings (PEBs), sandwich
                panels, and steel fabrication solutions. We are committed to delivering innovative, durable,
                and cost-effective infrastructure for commercial, industrial, and infrastructure projects.</p>
              <p>From concept and engineering to manufacturing, installation, and final project handover,
                we provide complete turnkey solutions tailored to our clients' requirements. Backed by modern
                manufacturing facilities, skilled professionals, and a strong commitment to quality, we proudly
                serve customers across India with reliable and timely project execution.</p>
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






        <section className={styles.journey}>
          <div className={styles.Teamuser}>
            <span className={styles.TeamBoder}>Our journey</span>
          </div>
          <div className={styles.journeyText}>
            <h2> Building Growth Through <br /><span> Innovation & Excellence</span></h2>
            <div className={styles.journeyLine}></div>
          </div>

          <div className={styles.cardGrid}>
            {journey.map((card, index) => (
              <div className={styles.card} key={index}>
                <button className={styles.close}>
                  <X size={18} strokeWidth={2.5} />
                </button>

                <div className={styles.imageBox}>
                  <img src={card.image} alt={card.title} />
                </div>

                <span className={styles.category}>
                  {card.category}
                </span>

                <h3 className={styles.title}>
                  {card.title}
                </h3>

                <p className={styles.desc}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.founderSection}>
          <div className={styles.founderFlex}>
            <div className={styles.founderpara}>
              <span className={styles.founderBedge}>About the Founder</span>
              <div className={styles.founderHeader}>
                <h2>Visionary Leadership, <span>Lasting Impact</span></h2>
                <div className={styles.founderLine}></div>
              </div>
              <p>L&R Enterprises was founded with a vision to transform the prefabricated construction
                industry by delivering innovative, high-quality, and cost-effective building solutions.
                Guided by a passion for excellence and customer satisfaction, the company has grown into
                a trusted name known for reliability, precision, and timely project execution.</p>
              <p>With a strong focus on quality, innovation, and sustainable growth, the founder has
                built a culture of integrity, teamwork, and continuous improvement. This commitment
                continues to inspire the organization to deliver world-class prefabricated structures
                and engineering solutions that meet the evolving needs of clients across India.</p>
            </div>
            <div className={styles.founderContainer}>
              <img
                src={found}
                alt="Engineers working in prefabricated solutions"
                className={styles.founderPhoto}
              />

              <div className={styles.founderBadge}>
                <h2 className={styles.founderHeading}>10+ Years of Leadership</h2>
                <p className={styles.founderDescription}>
                  Leading innovation, quality, trust, and excellence in prefabricated building solutions.
                </p>
              </div>
            </div>
          </div>

        </section>


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
            <div className={styles.imageWrapper}>
              <div className={styles.yellowShape}></div>

              <div className={styles.imageCard}>
                <img src={workerImage} alt="Worker" />
              </div>

              <div className={styles.dots}></div>
            </div>
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


        {/* ==========================founder=============================== */}
        <section className={styles.profileFounder}>
          <div className={styles.FounderTitle}>
            <h2>Meet <span>Our Founder</span></h2>
            <div className={styles.foundeLine}></div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.photoSection}>
              <img
                src={founder}
                alt="Founder"
                className={styles.mainPhoto}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.badges}>
                <span>Founder</span>
                <span>CEO</span>
              </div>

              <div className={styles.bottomContent}>
                <div>
                  <h2> Lalit</h2>
                  <h2>Gautam</h2>
                </div>


              </div>
            </div>

            {/* Right Content */}
            <div className={styles.infoSection}>


              <p className={styles.designation}>
                Founder & CEO, L&R Enterprises
              </p>

              <h2 className={styles.personName}>
                Lalit <span>Gautam</span>
              </h2>

              <div className={styles.titleDivider}></div>

              <p className={styles.infoText}>
                With years of expertise in the prefab, PEB, and modular construction industry, Lalit Gautam
                founded L&R Green India   with a vision to deliver innovative, high-quality, and sustainable
                infrastructure solutions. His commitment to excellence has helped the company build a
                reputation for engineering precision, premium craftsmanship, and customer satisfaction.
              </p>

              <p className={styles.infoText}>
                Driven by innovation and quality, he leads every project with a focus on modern construction technologies,
                timely execution, and long-term value. Under his leadership, L&R Green India  continues to provide customized
                prefab buildings, portable cabins, PEB structures, LGSF buildings, rooftop houses, and turnkey infrastructure
                solutions across India.
              </p>

              <button onClick={() => navigate('/projects')} className={styles.readButton}>
                Our Projects
              </button>
            </div>

            {/* Watermark */}
            <h1 className={styles.backgroundTitle}>
              PROFILE
            </h1>
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
              <div className={styles.imageWrappers}>
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




        <section className={styles.qualitySection}>
          <div className={styles.qualityFlex}>
            <div className={styles.qualityHeading}>
              <span className={styles.qualityTag}>
                • Quality & Certifications
              </span>

              <h2>
                Committed to Excellence <br />
                <span>in Every Project</span>
              </h2>

              <div className={styles.qualityLine}></div>
            </div>
            <p className={styles.qualityDescription}>
              We follow international quality standards to deliver reliable, durable, and safe
              prefabricated building solutions, ensuring customer satisfaction and long-term performance.
            </p>
          </div>

          <div className={styles.qualityGrid}>
            {qualityData.map((item) => (
              <div className={styles.qualityCard} key={item.id}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className={styles.galaryCard}>
          <div className={styles.galaryText}>
            <h2>Explore <span>Our Solutions</span></h2>
            <div className={styles.galaryLine}></div>
          </div>

          <div className={styles.gallerySlider}>
            <button
              className={`${styles.arrowBtns} ${styles.leftArrows}`}
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.galleryViewport}>
              <div
                className={styles.galleryTrack}
                style={{
                  transform: `translateX(-${currentSlides * 375}px)`,
                }}
              >
                {galleryVideos.map((item) => (
                  <div
                    className={styles.gallerySlide}
                    key={item.id}
                  >
                    <video
                      className={styles.galleryVideo}
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    <div className={styles.videoOverlay}>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`${styles.arrowBtns} ${styles.rightArrows}`}
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className={styles.galleryDots}>
            {galleryVideos.map((_, index) => (
              <span
                key={index}
                className={
                  currentSlides === index
                    ? styles.activeDot
                    : styles.dot
                }
                onClick={() => setCurrentSlides(index)}
              ></span>
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



        {/* cta */}
        <section className={styles.cta}>
          <h2>Let's Build Your Next Project Together</h2>
          <p>
            From prefabricated buildings to steel structures, L&R Enterprises delivers reliable,
            high-quality, and customized solutions for every project. Contact our team today and turn your vision into reality.
          </p>
          <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
            <span className={styles.contactText}>Contact Us</span>

            <span className={styles.iconBoxs}>
              <ArrowRight className={styles.iconOne} size={18} />
              <ArrowRight className={styles.iconTwo} size={18} />
            </span>
          </button>
        </section>



      </main >

      <Footer />
    </>
  );
};

export default About;
