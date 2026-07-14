import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Warehouse.module.css";

const products = [
  { title: "Industrial Warehouses", desc: "", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" },
  { title: "Logistics & Distribution Warehouses", desc: "Optimized for fast-moving supply chain operations, ensuring smooth inbound and outbound flow.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
  { title: "Cold Storage Warehouses", desc: "", img: "https://images.unsplash.com/photo-1631700611307-37dbcf89af7d?auto=format&fit=crop&w=600&q=80" },
  { title: "Agricultural Storage Warehouses", desc: "", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" },
];

const processSteps = [
  { title: "Site Assessment & Design", desc: "Detailed site analysis and custom warehouse layout planning based on storage requirements and workflow." },
  { title: "Engineering & Fabrication", desc: "Precision steel fabrication of all structural components using advanced CNC and automated systems." },
  { title: "Quality Control", desc: "Rigorous inspection of all fabricated components to ensure structural integrity and compliance." },
  { title: "Installation & Handover", desc: "On-site erection, alignment, and commissioning followed by complete documentation and client handover." },
];

const faqs = [
  { q: "What are pre-engineered warehouses?", a: "Pre-engineered warehouses are factory-fabricated steel structures designed for rapid on-site assembly, offering significant cost and time savings over conventional construction." },
  { q: "Can warehouse size and layout be customized?", a: "Yes, every dimension, layout, height, span, and feature including mezzanines, loading docks, and ventilation can be fully customized to your operational needs." },
  { q: "Are prefab warehouses durable in harsh conditions?", a: "Yes. Built with high-grade steel and engineered to IS standards, our warehouses withstand wind, seismic, and heavy load conditions reliably." },
  { q: "How long does warehouse construction take?", a: "Typically 4–8 weeks from design approval depending on scale, site conditions, and complexity of the structure." },
  { q: "Can the warehouse be expanded later?", a: "Absolutely. Our modular pre-engineered systems are designed for easy future expansion both horizontally and vertically." },
];

const Warehouse = () => {
  return (
    <>
      <Header />

      <div className={styles.breadcrumb}>
        L&amp;R Green India Pvt Ltd &rsaquo; <span>Warehouse</span>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>STRONG &amp; SCALABLE<br />WAREHOUSING SOLUTIONS</h1>
        <p>Accelerate your storage and logistics operations with L&amp;R Enterprises' Pre-Engineered Warehouse Solutions, built for portability and rapid deployment.</p>
        <button className={styles.btnWhite}>Contact us &nbsp;→</button>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.introImg} />
        <div className={styles.introText}>
          <span className={styles.introLabel}>About L&amp;R</span>
          <h2>L&amp;R<br /><span>Warehouse</span></h2>
          <p>L&amp;R Green India Pvt Ltd specialises in designing and manufacturing high-performance pre-engineered warehouses that meet the evolving needs of modern industries. With advanced engineering practices and dedicated expertise, our warehouse solutions deliver durability, flexibility, and optimal space utilization.</p>
          <p>Our warehouses are built using high-grade steel structures and modular construction techniques, enabling reduced costs. From planning to installation, we provide end-to-end solutions tailored to your storage, logistics, and industrial space requirements.</p>
          <button className={styles.btnOutline}>Get Contact &nbsp;↗</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.productsSec}>
        <div className={styles.secTitle}>
          <h2>Our<br /><span>Warehouse Products</span></h2>
        </div>
        <div className={styles.prodGrid}>
          {products.map((p) => (
            <div key={p.title} className={styles.prodCard}>
              <div className={styles.prodImg} style={{ backgroundImage: `url('${p.img}')` }} />
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
          <h2>L&amp;R Advantage<br /><span>Warehouse</span></h2>
          <p>L&amp;R Green India Pvt Ltd Delivers Warehouses That Combine Advanced Engineering With Practical Functionality. Our Pre-Engineered Structures Are Designed To Provide Large Open Spaces, Enabling Maximum Storage Capacity. The Modular Nature Of Our Systems Allows For Flexible Components And Significantly Reduces Construction Timelines.</p>
          <p>We Focus On Quality, Durability, And Cost-Efficiency. Our Warehouses Are Built To Withstand Industrial Stresses, Using High-Grade Materials That Meet Industrial Standards, And Can Be Expanded As Your Needs Change.</p>
        </div>
      </section>

      {/* STRENGTH BAND */}
      <section className={styles.strength}>
        <div className={styles.strengthWatermark}>WAREHOUSE</div>
        <div>
          <h2>Our Strength &amp;<br />Manufacturing Excellence</h2>
        </div>
        <div>
          <p>We offer state-of-the-art manufacturing proficiency, high-grade raw materials, and effective quality assurance to deliver long-lasting, cost-efficient warehouse structures. Our expertise in PEB systems ensures precision, consistency, and superior performance in every project.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSec}>
        <div className={styles.processHeader}>
          <h2>Warehouse Construction<br /><span>Process by L&amp;R</span></h2>
          <p>Our structured process ensures efficient execution from design and engineering to quality assurance and final handover.</p>
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
          <p>A complete end-to-end warehouse solution from design and manufacturing to quality integration and final installation.</p>
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
        <h2>Ready for Your Pre-Engineered Warehouse?</h2>
        <p>Connect with our team to design and deliver durable, efficient, and fully customized warehouse solutions tailored to your site needs.</p>
        <button className={styles.btnBlue}>Contact US &nbsp;→</button>
      </section>

      <Footer />
    </>
  );
};

export default Warehouse;