import styles from "../styles/AboutPage.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Building2, Package, Factory, House } from "lucide-react";
import workImg from "../assets/aboutus-work.jpeg";
import processBg from "../assets/process-bg.jpeg";

const About = () => {
  const journey = [
    {
      year: "2015",
      title: "Foundation",
      text: "L & R Enterprises established in New Delhi with a vision to redefine modular construction through technical precision and high-grade materials.",
      side: "right",
    },
    {
      year: "2018",
      title: "Industrial Scale",
      text: "Expanded manufacturing capacities to include large-scale MS Container fabrication and industrial warehouse assets for the booming logistics sector.",
      side: "left",
    },
    {
      year: "2021",
      title: "Specialized Solutions",
      text: "Added solar structures, prefab rooms, and pharma buildings to cater to specialized industry requirements.",
      side: "right",
    },
    {
      year: "2025",
      title: "Innovation & Growth",
      text: "Pioneering LGSF technology and insulated panel solutions for next-generation prefab construction.",
      side: "left",
    },
  ];

  const process = [
    {
      step: "STEP 01",
      title: "Requirement Analysis",
      text: "We begin by understanding your project needs, space requirements, and specifications to provide the most suitable prefabricated solution.",
      icon: <Building2 size={28} strokeWidth={1.8} />,
    },
    {
      step: "STEP 02",
      title: "Design & Planning",
      text: "Our team creates detailed designs and structural plans using modern techniques to ensure accuracy, efficiency, and durability.",
      icon: <Package size={28} strokeWidth={1.8} />,
      active: true,
    },
    {
      step: "STEP 03",
      title: "Manufacturing",
      text: "Using high-quality materials and advanced fabrication methods, we manufacture structures and containers with precision and strict quality control.",
      icon: <Factory size={28} strokeWidth={1.8} />,
    },
    {
      step: "STEP 04",
      title: "Delivery & Installation",
      text: "We ensure timely delivery and provide smooth on-site installation, making the entire process quick, hassle-free, and reliable.",
      icon: <House size={28} strokeWidth={1.8} />,
    },
  ];

  const products = [
    {
      title: "Prefab Building",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Canteen",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Insulated Puf Panels",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Industrial shed",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const faqs = [
    "What products does L & R Enterprises manufacture?",
    "Are your prefabricated structures customizable?",
    "How durable are your mild steel containers?",
    "Do you provide installation services?",
    "What industries do you serve?",
  ];

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
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
        </section>

        <section className={styles.aboutIntro}>
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
        </section>

        <section className={styles.journey}>
          <h2>
            Our <span>Journey</span>
          </h2>

          <div className={styles.timeline}>
            {journey.map((item, index) => (
              <div
                className={`${styles.timelineItem} ${
                  item.side === "left" ? styles.left : styles.right
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
        </section>

        <section className={styles.blueBanner}>
          <div>
            <h2>
              Delivering Reliable <br />
              Prefabricated Structures
            </h2>
            <p>
              L&R Green India Pvt Ltd specializes in manufacturing high-quality
              prefabricated
              <br /> structures and mild steel containers in New Delhi. From
              site offices to warehouse <br /> sheds and portable containers,
              our solutions are built for durability, flexibility, and <br />
              modern industrial use.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
            alt="Prefab Building"
          />

          <h1> L & R ENTERPRISES</h1>
        </section>

        <section
          className={styles.process}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url(${processBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2>
            Our <span>Process</span>
          </h2>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <div
                className={`${styles.processCard} ${
                  item.active ? styles.activeProcess : ""
                }`}
                key={item.step}
              >
                <div className={styles.processTop}>
                  <span className={styles.processIcon}>{item.icon}</span>
                  <small>{item.step}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.smart}>
          <div className={styles.smartHead}>
            <h2>
              Building Smarter Spaces <br />
              <span>with Precision and Trust</span>
            </h2>
            <p>
              L & R Enterprises delivers durable prefabricated structures and
              steel containers designed for modern industrial and commercial
              needs.
            </p>
          </div>

          <div className={styles.smartBody}>
            <div className={styles.smartList}>
              <div className={styles.smartItem}>
                {/* Building Icon */}
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>

                <div>
                  <h4>Diverse Prefabricated Solutions</h4>
                  <p>
                    Our mild steel containers are engineered to provide
                    adaptable workspace and storage solutions for various
                    applications.
                  </p>
                </div>
              </div>

              <div className={styles.smartItem}>
                {/* Factory Icon */}
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V8l7 5V8l7 5v8" />
                    <path d="M8 17h.01" />
                    <path d="M12 17h.01" />
                    <path d="M16 17h.01" />
                  </svg>
                </div>

                <div>
                  <h4>Advanced Manufacturing Approach</h4>
                  <p>
                    We combine modern fabrication techniques with high-quality
                    materials to deliver superior structural performance.
                  </p>
                </div>
              </div>

              <div className={styles.smartItem}>
                {/* Heart Check Icon */}
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    <path d="m9.5 12.5 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <h4>Commitment to Client Success</h4>
                  <p>
                    We believe strong relationships are built on trust,
                    consistency, and dependable service. Through timely delivery
                    and customized solutions, we continue to support businesses
                    with structures built for the future.
                  </p>
                </div>
              </div>
            </div>

            <img src={workImg} alt="Work" />
          </div>
        </section>

        <section className={styles.commitment}>
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
        </section>

        <section className={styles.products}>
          <div className={styles.productHead}>
            <div>
              <span className={styles.badge}>• Our Product</span>
              <h2>
                Quality Products <br />
                We Offer
              </h2>
            </div>
          </div>

          <div className={styles.productGrid}>
            {products.map((item) => (
              <div className={styles.productCard} key={item.title}>
                <img src={item.img} alt={item.title} />

                <button className={styles.arrowBtn}>↗</button>

                <div className={styles.productInfo}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqTop}>
            <div>
              <span className={styles.badge}>• FAQS</span>
              <h2>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
            </div>
            <p>
              Find answers to common questions about our <br />
              prefabricated structures, containers, and services.
            </p>
          </div>

          <div className={styles.faqBody}>
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80"
              alt="Factory"
            />

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  className={`${styles.faqItem} ${
                    index === 1 ? styles.activeFaq : ""
                  }`}
                  key={faq}
                >
                  <h4>{faq}</h4>
                  <span>{index === 1 ? "↓" : "↑"}</span>
                  {index === 1 && (
                    <p>
                      Yes, all our structures and containers can be customized
                      based on your requirements, including size, design,
                      layout, and functionality.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
