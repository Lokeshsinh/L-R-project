import React, { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styles from "../styles/MsContainer.module.css";

const containerTypes = [
  {
    title: "Premium Series Containers",
    desc: "High-end modular MS containers built for durability, portability, and multi-application use for luxury offices, accommodation, control rooms, site service centres, with strong steel frames, insulation, and premium finishes.",
    img: "/Images/work1.jpg",
    path: "/puf-containers",
  },
  {
    title: "Executive Series Containers",
    desc: "Efficient prefabricated containers designed for offices, cabins, and site operations. Built with durable MS structures, they offer strength, weather resistance, and a practical cost-effective workspace solution.",
    img: "/Images/work2.jpg",
    path: "/executive-containers",
  },
  {
    title: "L&R Value Series Containers",
    desc: "Economical container solutions at sites, built for strength and flexibility—ideal for budget-friendly, durable, and quick-deployment projects across various industries and site conditions.",
    img: "/Images/work3.jpg",
    path: "/lr-value-containers",
  },
];

const industryProjects = [
  {
    title: "Oil & Gas Projects",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Energy Sector Solutions",
    desc: "Reliable container units for renewable and power projects, supporting temporary settlements and operational facilities.",
    img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Site Buildings",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portable Modular Systems",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
  },
];

const deliveryFeatures = [
  {
    img: "https://unpkg.com/lucide-static/icons/calendar-clock.svg",
    title: "End-to-End Execution",
    desc: "Complete project handling from design and engineering to manufacturing and final installation, ensuring a smooth and coordinated workflow.",
  },
  {
    img: "https://unpkg.com/lucide-static/icons/box.svg",
    title: "In-House Manufacturing",
    desc: "All container units are produced within dedicated facilities, maintaining strict quality control and faster production timelines.",
  },
  {
    img: "https://unpkg.com/lucide-static/icons/house-plug.svg",
    title: "Plug-and-Play Units",
    desc: "Pre-fabricated and mounted containers delivered ready-for-use, reducing on-site work and enabling quick setup.",
  },
  {
    img: "https://unpkg.com/lucide-static/icons/square-check.svg",
    title: "Rapid Project Completion",
    desc: "Efficient processes and minimal on-site labour ensure faster commissioning and timely project delivery.",
  },
];

const faqs = [
  {
    q: "What industries can MS modular containers be used in?",
    a: "MS modular containers are widely used across Oil & Gas, Construction, Renewable Energy, Railways, Highways, Food Processing, Cement, and Infrastructure industries for offices, accommodation, storage, and site operations.",
  },
  {
    q: "What is a skid-mounted container system?",
    a: "A skid-mounted container system allows units to be installed without a permanent foundation, making them easy to transport, relocate, and set up quickly along oilfields or remote sites.",
  },
  {
    q: "How fast can MS container projects be delivered?",
    a: "Depending on specifications and quantity, most standard MS container units are delivered within 2–4 weeks from order confirmation, with express timelines available for urgent requirements.",
  },
  {
    q: "Are MS containers suitable for harsh environments?",
    a: "Yes. Our MS containers are engineered with high-tensile steel, corrosion-resistant coatings, and heavy-duty insulation to withstand extreme weather, humidity, dust, and industrial site conditions.",
  },
  {
    q: "Can MS containers be customized for different uses?",
    a: "Absolutely. Size, layout, doors, windows, insulation, electrical fittings, plumbing, HVAC, and finishes can all be fully customized to match your project's operational and functional requirements.",
  },
];

const MsContainer = () => {
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
          <h2>
            MS <span>Container</span>
          </h2>
          <div className={styles.introThumb} />
        </div>

        <div className={styles.introBody}>
          {/* Left Image */}
          <div
            className={styles.introImg}
            style={{ backgroundImage: "url('/Images/wallapanel.jpg')" }}
          ></div>

          {/* Right Content */}
          <div className={styles.introText}>
            <p>
              MS Containers (Mild Steel Containers) are portable and modular{" "}
              <br />
              structures designed for durable and flexible space solutions.{" "}
              Built with <br />
              strong steel, they are widely used in industrial, oil &amp; gas,{" "}
              <br /> construction, renewable energy, and infrastructure projects
              where quick <br />
              setup and versatility are important.
            </p>

            <p>
              These containers feature a skid-mounted design, allowing easy{" "}
              <br />
              installation without foundations and simple relocation using
              cranes or <br /> forklifts. Suitable for offices, accommodation,
              and storage, MS <br /> Containers provide a cost-effective,
              low-maintenance, and practical <br /> solution for modern project
              needs.
            </p>

            <p>
              With strong build quality and smart design, MS Containers ensure{" "}
              <br />
              stability, efficiency, and long-lasting use.
            </p>

            <button className={styles.btnOutline}>Get Contact &nbsp;↗</button>
          </div>
        </div>
      </section>
      {/* TYPES */}
      <section className={styles.typesSec}>
        <div className={styles.typesHeader}>
          <div>
            <h2>
              Types of Modular
              <br />
              <span>MS Containers</span>
            </h2>
          </div>

          <p>
            Discover a versatile range of modular MS containers built <br />
            for industrial and commercial use offering durable, mobile,
            <br />
            and flexible solutions for offices, accommodation, storage,
            <br />
            and site operations.
          </p>
        </div>

        <div className={styles.typesGrid}>
          {containerTypes.map((c) => (
            <div key={c.title} className={styles.typeCard}>
              <div
                className={styles.typeImg}
                style={{
                  backgroundImage: `url('${c.img}')`,
                }}
              />

              <div className={styles.typeBody}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>

                <button
                  className={styles.btnKnow}
                  onClick={() => navigate(c.path)}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* HIGH MOBILITY */}
      <section className={styles.mobilitySec}>
        <div className={styles.mobilityGrid}>
          <div className={styles.mobilityContent}>
            <h2 className={styles.secTitle}>
              High Mobility &amp; Flexible <br />
              <span>Modular Container Solutions</span>
            </h2>
            <div className={styles.mobilityDivider} />
            <p>
              Skid-mounted MS containers are designed for quick and safe
              placement <br />
              without the need for foundations. Their strong steel structure
              allows easy transportation and relocation using cranes or
              forklifts.
            </p>
            <p>
              These containers are ideal for remote and challenging environments
              such <br /> as oil & gas sites, energy projects, and temporary
              settlements where <br />
              mobility and fast setup are essential.
            </p>
            <p>
              Built for both accommodation and office use, the units offer
              efficient <br />
              layouts, user comfort, and durable, low-maintenance construction
              for <br />
              long-term performance.
            </p>
          </div>
          <div className={styles.mobilityImagesCol}>
            <div
              className={styles.mobilityImgTop}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80')",
              }}
            />

            <div className={styles.mobilityImgWrapper}>
              <div
                className={styles.mobilityImgBottom}
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80')",
                }}
              />
            </div>
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
          <h2>
            Expertise Across Energy
            <br />
            <span>&amp; Industrial Projects</span>
          </h2>
          <p>
            L&amp;R delivers advanced modular container solutions for oil &amp;
            gas, energy, and construction sectors, combining strong engineering,
            flexible design, and fast project execution for demanding
            environments.
          </p>
        </div>
        <div className={styles.expertiseGrid}>
          {industryProjects.map((item) => (
            <div key={item.title} className={styles.expCard}>
              <div
                className={styles.expImg}
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className={styles.expLabel}>
                <h4>{item.title}</h4>
                {item.desc && <p>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAST DELIVERY */}
      <section className={styles.delivery}>
        <div className={styles.deliveryHeader}>
          <h2>
            Fast &amp; Integrated
            <br />
            <span>Project Delivery</span>
          </h2>
          <p>
            Seamless execution from design to installation, ensuring quick
            deployment and timely completion.
          </p>
        </div>
        <div className={styles.deliveryGrid}>
          {deliveryFeatures.map((f) => (
            <div key={f.title} className={styles.delivCard}>
              <div className={styles.delivIcon}>
                <img className="iconimg" src={f.img} alt={f.title} />
              </div>

              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>FAQ</span>
        <div className={styles.faqHeader}>
          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>
          <p>
            Find answers to common questions about our container solutions,
            design process, and performance benefits.
          </p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <div
            className={styles.faqImg}
            style={{ backgroundImage: "url('/Images/mscontianer.jpg')" }}
          />
        </div>
      </section>
      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Ms Containers?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and
          fully customised ms containers tailored to your storage needs.
        </p>
        <button className={styles.btnBlue}>Contact US &nbsp;→</button>
      </section>
      <Footer />
    </>
  );
};

export default MsContainer;
