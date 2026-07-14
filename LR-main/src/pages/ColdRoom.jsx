import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ColdRoom.module.css";

const products = [
  {
    title: "Modular Cold Rooms",
    desc: "",
    img: "https://images.unsplash.com/photo-1631700611307-37dbcf89af7d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Cold Storage",
    desc: "Large-scale refrigerated storage built for food processing plants, pharmaceutical units, and bulk commodity preservation.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Pharmaceutical Cold Rooms",
    desc: "",
    img: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Flora & Agriculture Cold Rooms",
    desc: "",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  },
];

const processSteps = [
  {
    title: "Design & Planning",
    desc: "Detailed site analysis and custom cold room layout planning based on temperature requirements, storage capacity, and workflow.",
  },
  {
    title: "Manufacturing",
    desc: "Precision fabrication of insulated panels, refrigeration units, and structural components using advanced automated systems.",
  },
  {
    title: "Quality & Inspection",
    desc: "Rigorous testing of all panels, seals, and refrigeration systems to ensure thermal performance and energy compliance.",
  },
  {
    title: "Installation & Commissioning",
    desc: "On-site assembly, refrigeration hook-up, and performance commissioning followed by full documentation and client handover.",
  },
];

const faqs = [
  {
    q: "What is a prefabricated cold room?",
    a: "A prefabricated cold room is a factory-built insulated structure with integrated refrigeration systems, designed for rapid on-site assembly and precise temperature-controlled storage.",
  },
  {
    q: "What temperature range can your cold rooms maintain?",
    a: "Our cold rooms can be engineered to maintain temperatures from +18°C down to -40°C, covering everything from fresh produce storage to deep freeze applications.",
  },
  {
    q: "Is cold storage always affected?",
    a: "No. Our systems are designed with redundant refrigeration and high-performance insulation panels to ensure consistent temperatures even in extreme ambient conditions.",
  },
  {
    q: "Can the cold room size be customised?",
    a: "Absolutely. Every dimension, layout, panel thickness, and refrigeration capacity can be fully customised to your storage volume and temperature requirements.",
  },
  {
    q: "How long does installation take?",
    a: "Typically 2–5 weeks from design approval depending on room size, site conditions, and complexity of the refrigeration system.",
  },
];

const ColdRoom = () => {
  return (
    <>
      <Header />

      <div className={styles.breadcrumb}>
        L&amp;R Green India Pvt Ltd &rsaquo; <span>Cold Room</span>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>L&amp;R COLD<br />ROOM SOLUTIONS</h1>
        <p>
          L&amp;R Cold Room Solutions deliver efficient, energy-saving, and fully customisable
          cold storage systems for reliable temperature-controlled performance.
        </p>
        <button className={styles.btnWhite}>Contact us &nbsp;→</button>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introImg} />
        <div className={styles.introText}>
          <span className={styles.introLabel}>About L&amp;R</span>
          <h2>L&amp;R Cold<br /><span>Room Solutions</span></h2>
          <p>
            L&amp;R Green India Pvt Ltd specialises in designing and manufacturing high-performance
            cold storage solutions built with advanced insulation technology, precision engineering,
            and fully customisable configurations for diverse temperature-controlled applications.
          </p>
          <p>
            Built using advanced insulation technology and durable materials, our cold rooms
            deliver superior energy efficiency and performance. Whether for food, pharma, or
            agriculture, we manufacture cold storage solutions tailored to your precise
            temperature requirements ensuring product quality, safety, and minimal shelf life.
          </p>
          <button className={styles.btnOutline}>Get Contact &nbsp;↗</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.productsSec}>
        <div className={styles.secTitle}>
          <h2>Our Cold<br /><span>Room Products</span></h2>
        </div>
        <div className={styles.prodGrid}>
          {products.map((p) => (
            <div key={p.title} className={styles.prodCard}>
              <div
                className={styles.prodImg}
                style={{ backgroundImage: `url('${p.img}')` }}
              />
              <div className={styles.prodLabel}>
                <h4>{p.title}</h4>
                {p.desc && <p>{p.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className={styles.advantage}>
        <div className={styles.advImg} />
        <div className={styles.advText}>
          <h2>L&amp;R Advantage<br /><span>Cold Room</span></h2>
          <p>
            At L&amp;R, we combine advanced refrigeration technology with modular
            construction methods to offer efficient cold storage solutions precisely
            designed to minimise energy consumption while maintaining optimal
            storage conditions.
          </p>
          <p>
            With complete in-house manufacturing capabilities, system integration
            expertise, and end-to-end project management, we ensure every cold
            storage unit meets the highest benchmarks for quality, reliability,
            and energy efficiency.
          </p>
        </div>
      </section>

      {/* STRENGTH BAND */}
      <section className={styles.strength}>
        <div className={styles.strengthWatermark}>COLD ROOM</div>
        <div>
          <h2>Our Strength &amp;<br />Manufacturing Excellence</h2>
        </div>
        <div>
          <p>
            L&amp;R Green India Pvt Ltd operates state-of-the-art manufacturing facilities equipped
            with high-performance insulation panel lines, advanced refrigeration integration, and
            strict quality assurance processes, ensuring every cold storage unit achieves superior
            thermal efficiency, durability, and energy efficiency.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSec}>
        <div className={styles.processHeader}>
          <h2>The L&amp;R Cold<br /><span>Room Process</span></h2>
          <p>
            A precise and efficient process ensuring optimised design, advanced insulation
            manufacturing, on-site installation, and long-lasting cold room performance.
          </p>
        </div>
        <div className={styles.processBody}>
          <div className={styles.processImg} />
          <div className={styles.processSteps}>
            {processSteps.map((s) => (
              <div key={s.title} className={styles.pStep}>
                <div className={styles.pDot} />
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>FAQ</span>
        <div className={styles.faqHeader}>
          <h2>Frequently Asked<br /><span>Questions</span></h2>
          <p>
            Find instant answers to common questions about our cold room features,
            customisation options, and performance benefits.
          </p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg} />
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Build Your Cold Storage?</h2>
        <p>
          Connect with our team to design and deliver durable, energy-efficient, and fully
          customised cold room solutions tailored to your temperature and capacity needs.
        </p>
        <button className={styles.btnBlue}>Contact US &nbsp;→</button>
      </section>

      <Footer />
    </>
  );
};

export default ColdRoom;