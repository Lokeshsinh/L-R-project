import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/IndustrialShed.module.css"; 

const projects = [
  {
    title: "Manufacturing Sheds",
    desc: "Heavy-duty steel sheds suitable for fabrication activities, machinery operations, and industrial processing.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=600",
  },
  {
    title: "Fabrication Sheds",
    desc: "Heavy-duty steel sheds suitable for fabrication activities, machinery operations, and industrial processing.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600",
  },
  {
    title: "Automotive Workshop Sheds",
    desc: "Heavy-duty steel sheds suitable for fabrication activities, machinery operations, and industrial processing.",
    img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=600",
  },
  {
    title: "Storage & Utility Sheds",
    desc: "Heavy-duty steel sheds suitable for fabrication activities, machinery operations, and industrial processing.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600",
  },
];

const processSteps = [
  {
    title: "Design & Planning",
    desc: "Customized structural design based on load requirements, operational needs, and site conditions.",
  },
  {
    title: "Manufacturing",
    desc: "Precision fabrication of steel components and roofing systems using advanced machinery and quality materials.",
  },
  {
    title: "Quality & Integration",
    desc: "Comprehensive quality checks, structural validation, and integration of functional industrial components.",
  },
  {
    title: "Installation & Commissioning",
    desc: "On-site erection, structural alignment, and final handover ensuring ready-to-use industrial sheds.",
  },
];

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

const IndustrialSheds = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />

      {/* 1. HERO SECTION (image_bd3717_2.jpg top) */}
      <section className={styles.hero} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600')` }}>
        <div className={styles.heroContent}>
          <span className={styles.subTitle}>L&R Green India Pvt Ltd</span>
          <h1>PERFORMANCE INDUSTRIAL<br />SHED SOLUTIONS</h1>
          <p>
            Engineered for strength, efficiency, and durability — L&R Enterprises delivers robust 
            prefabricated industrial sheds for modern manufacturing and industrial operations.
          </p>
          <button className={styles.btnBlueFill}>Contact us &nbsp; →</button>
        </div>
      </section>

      {/* 2. INTRO SECTION (L&R Advanced...) */}
      <section className={styles.splitSection}>
        <div className={styles.textSide}>
          <span className={styles.labelTag}>• About L&R</span>
          <h2>L&R Advanced<br /><span className={styles.blueText}>Industrial Shed Systems</span></h2>
          <div className={styles.dividerShort}></div>
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
          <button className={styles.btnDarkFill}>Get Contact &nbsp; ↗</button>
        </div>
        <div className={styles.imageSide} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800')` }}></div>
      </section>

      {/* 3. PROJECT SHOWCASE (Grid Section) */}
      <section className={styles.showcase}>
        <div className={styles.secHeader}>
          <h2>Industrial Shed<br /><span className={styles.blueText}>Project Showcase</span></h2>
          <p className={styles.secDesc}>Strong, scalable, and customizable industrial sheds built for heavy-duty performance and long-term reliability.</p>
        </div>
        <div className={styles.gridContainer}>
          {projects.map((item, index) => (
            <div key={index} className={styles.gridCard}>
              <div className={styles.cardImg} style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className={styles.cardOverlay}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ADVANTAGE SECTION (L&R Industrial Shed Advantage) */}
      <section className={styles.splitSection}>
        <div className={styles.textSide}>
          <h2>L&R Industrial<br /><span className={styles.blueText}>Shed Advantage</span></h2>
          <p>
            L&R Industrial Sheds are engineered using high-strength steel frameworks that ensure 
            superior durability and resistance to environmental factors such as wind, heat, and corrosion. 
            Our modular construction approach significantly reduces project timelines while 
            maintaining consistent quality and structural integrity.
          </p>
          <p>
            We offer complete customization in design, dimensions, insulation, and structural 
            features such as crane provisions and ventilation systems.
          </p>
        </div>
        <div className={styles.imageSide} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800')` }}></div>
      </section>

      {/* 5. STRENGTH BAND (image_bd3717_2.jpg bottom) */}
      <section className={styles.strengthBand}>
        <div className={styles.watermark}>INDUSTRIAL</div>
        <div className={styles.strengthFlex}>
          <h2>Industrial Shed Strength<br />& Engineering Excellence</h2>
          <p>
            L&R Enterprises utilizes advanced fabrication facilities equipped with CNC machinery, 
            automated welding systems, and precision engineering processes to manufacture industrial 
            sheds that meet high standards of strength, accuracy, and performance.
          </p>
        </div>
      </section>

      {/* 6. MANUFACTURING PROCESS (image_bd36f0_2.png top) */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <h2>Sandwich Panel<br /><span className={styles.blueText}>Manufacturing Process</span></h2>
          <p>Our industrial sheds are designed to deliver strength, durability, and efficient workspace solutions.</p>
        </div>
        <div className={styles.processContent}>
          <div className={styles.processSteps}>
            {processSteps.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className={styles.stepIcon}>0{idx + 1}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.processImage} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800')` }}></div>
        </div>
      </section>

      {/* 7. FAQ SECTION (image_bd36f0_2.png middle) */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqLeft}>
            <span className={styles.labelTag}>• FAQ</span>
            <h2>Frequently Asked<br /><span className={styles.blueText}>Questions</span></h2>
            <p>Get answers to common questions about L&R industrial sheds, including design, durability, and installation.</p>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className={styles.faqRightImg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800')` }}></div>
        </div>
      </section>

      {/* 8. READY TO CTA */}
      <section className={styles.readyCta}>
        <h2>Ready for Your Industrial Sheds Solution?</h2>
        <p>Connect with our team to design and deliver durable, efficient, and fully customized solutions.</p>
        <button className={styles.btnBlueOutline}>Contact US &nbsp; →</button>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrialSheds;