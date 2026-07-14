import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/GlasswoolPanels.module.css";

const GlasswoolPanels = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      id: 0,
      q: "Are glass wool panels fire-resistant?",
      a: "Yes, glass wool is naturally non-combustible and holds Class A/Class 0 fire ratings, preventing the spread of flames.",
    },
    {
      id: 1,
      q: "How does glass wool compare with rock wool?",
      a: "Glass wool is lighter and has slightly better thermal efficiency at lower thicknesses, while rock wool is denser and offers higher fire rating duration.",
    },
    {
      id: 2,
      q: "What thicknesses do you offer?",
      a: "We offer Glass Wool panels in thickness options from 50mm up to 150mm depending on thermal and insulation specifications.",
    },
    {
      id: 3,
      q: "Do glass wool panels sag over time?",
      a: "No, our advanced thermosetting resin bonding ensures that glass fibers remain stiff and do not sag, maintaining uniform insulation.",
    },
    {
      id: 4,
      q: "Is glass wool safe and eco-friendly?",
      a: "Yes, glass wool is made from natural silica sand and recycled glass. It is completely non-toxic, eco-friendly, and fully recyclable.",
    },
  ];

  const apps = [
    {
      title: "Fire-Rated Partitions & Walls",
      desc: "Ideal for large-span roofs and vertical wall cladding in commercial buildings, factories, and warehouses.",
    },
    {
      title: "Acoustic Enclosures",
      desc: "Ideal for DG sets, machinery rooms, studios, and auditoriums where effective noise reduction is essential.",
    },
    {
      title: "Clean Room & Laboratories",
      desc: "Suitable for pharma units, factories, and warehouses requiring controlled environments, insulation, and hygiene.",
    },
    {
      title: "Roofing & HVAC Insulation",
      desc: "Applied in industrial roofing, cladding, and HVAC ducting to improve thermal efficiency and energy savings.",
    },
  ];

  const specs = [
    { label: "Core Material", value: "High-Density Glass Wool" },
    { label: "Thermal Conductivity", value: "0.028 – 0.045 W/mK" },
    { label: "Fire Rating", value: "Class A1 (Non-Combustible)" },
    { label: "Facing", value: "PPGI / PPGL Sheets" },
    { label: "Thickness", value: "50mm – 150mm" },
    { label: "Density", value: "64 kg/m³" },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* ── HERO SECTION ── */}
      <section
        className={styles.heroSec}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/glasswool1.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            GLASS WOOL <br />
            SANDWICH PANELS
          </h1>
          <p className={styles.subtitle}>
            Advanced insulation solutions by L&amp;R Green Pvt Ltd for superior
            thermal efficiency, acoustic comfort, and fire safety.
          </p>
          <button
            className={styles.btnPrimary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Conatct us &nbsp;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── SECTION 1: WHAT ARE GLASS WOOL PANELS? ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              What are Glass <br />
              <span>Wool Panels?</span>
            </h2>
            <div className={styles.divider} />
            <div
              className={styles.imgWrap}
              style={{ display: "flex", gap: "20px", height: "350px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  flex: 1,
                  backgroundImage: "url('/Images/glasswool2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
              <div
                style={{
                  width: "50px",
                  backgroundColor: "#233a5e",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <p>
              Glass wool panels are advanced insulation materials manufactured
              from fine strands of molten glass spun into a soft, wool-like
              texture. This unique structure traps air within its fibers,
              providing excellent thermal insulation while also minimizing sound
              transmission. These panels are widely used in modern construction
              due to their lightweight nature, ease of installation, and
              reliable performance across a variety of environments.
            </p>
            <p>
              At L&amp;R Green Pvt Ltd, our glass wool panels are designed to
              meet high industry standards for safety, efficiency, and
              durability. They offer superior fire resistance, effective
              acoustic control, and long-lasting insulation performance, making
              them an ideal choice for industrial, commercial, and specialized
              applications where comfort and safety are essential.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CORE BENEFITS & FEATURES ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Core Benefits <br />
              <span>&amp; Features</span>
            </h2>
            <div className={styles.divider} />
            <p>
              One of the major advantages of wall PUF panels is their superior
              insulation capability. The closed-cell polyurethane foam:
            </p>
            <ul
              className={styles.featureList}
              style={{ listStyle: "disc", paddingLeft: "20px" }}
            >
              <li
                className={styles.featureItem}
                style={{ display: "list-item", marginBottom: "10px" }}
              >
                <strong>Thermal Efficiency:</strong> Reduces heat transfer by
                trapping air pockets, helping maintain indoor temperature and
                lowering energy costs
              </li>
              <li
                className={styles.featureItem}
                style={{ display: "list-item", marginBottom: "10px" }}
              >
                <strong>Acoustic Performance:</strong> High NRC (0.90–1.00)
                ensures superior sound absorption and reduced noise levels.
              </li>
              <li
                className={styles.featureItem}
                style={{ display: "list-item", marginBottom: "10px" }}
              >
                <strong>Fire Resistance:</strong> Non-combustible material that
                withstands high temperatures without emitting toxic fumes.
              </li>
              <li
                className={styles.featureItem}
                style={{ display: "list-item", marginBottom: "10px" }}
              >
                <strong>Moisture Resistance:</strong> Prevents mold, mildew, and
                corrosion for long-lasting durability.
              </li>
              <li
                className={styles.featureItem}
                style={{ display: "list-item", marginBottom: "10px" }}
              >
                <strong>Eco-Friendly:</strong> Made from recycled glass and
                supports sustainable construction practices.
              </li>
            </ul>
          </div>
          <div className={styles.imgCol}>
            <div
              className={styles.imgWrap}
              style={{ display: "flex", gap: "20px", height: "350px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  flex: 1,
                  backgroundImage: "url('/Images/glasswool3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
              <div
                style={{
                  width: "50px",
                  backgroundColor: "#233a5e",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TECHNICAL SPECIFICATIONS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <h2 className={styles.secTitle}>
              Glass Wool Panel <br />
              <span>Technical Specifications</span>
            </h2>
            <div className={styles.divider} />
            <div
              className={styles.imgWrap}
              style={{ display: "flex", gap: "20px", height: "350px" }}
            >
              <div
                className={styles.placeholderImg}
                style={{
                  flex: 1,
                  backgroundImage: "url('/Images/glasswool4.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
              <div
                style={{
                  width: "50px",
                  backgroundColor: "#233a5e",
                  borderRadius: "8px",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className={styles.textCol}>
            <div className={styles.compareGrid}>
              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>Property</div>
                <div className={styles.compareValue}>Specification</div>
              </div>
              {specs.map((spec, i) => (
                <div key={i} className={styles.compareRow}>
                  <div className={styles.compareLabel}>{spec.label}</div>
                  <div className={styles.compareValue}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SUSTAINABLE STRENGTH & DURABILITY ── */}
      <section className={styles.blueBannerSec}>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>
              Sustainable Strength <br />
              &amp; Durability
            </h2>
            <div
              className={styles.divider}
              style={{ background: "#fff", width: "50px", height: "4px" }}
            />
            <p>
              Glass wool panels from L&amp;R Green Pvt Ltd are made using up to
              80% recycled glass, making them an eco-friendly solution that
              supports green building certifications like LEED and GRIHA. Along
              with sustainability, they offer excellent durability—resistant to
              moisture, mold, and corrosion—ensuring long-lasting structural
              integrity and reliable performance for years.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div
                className={styles.placeholderImgTransparent}
                style={{
                  backgroundImage: "url('/Images/glasswool5.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: APPLICATIONS OF GLASS WOOL PANELS ── */}
      <section className={styles.splitSecAlt}>
        <div className={styles.containerMax}>
          <div className={styles.thicknessHeaderRow}>
            <div className={styles.thicknessHeaderLeft}>
              <h2 className={styles.secTitle}>
                Applications of <br />
                <span>Glass Wool Panels</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.thicknessDesc}>
              Glass wool panels from L&amp;R Green Pvt Ltd are designed for
              versatile use across industrial, commercial, and specialized
              environments, delivering insulation, safety, and acoustic
              performance.
            </p>
          </div>
          <div className={styles.thicknessGrid}>
            {apps.map((app, i) => (
              <div
                key={i}
                className={`${styles.thicknessCard} ${i === 1 ? styles.thicknessCardActive : ""}`}
              >
                <h3>{app.title}</h3>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE GLASS WOOL PANELS ── */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>
              Why Choose <br />
              <span>Glass Wool Panels</span>
            </h2>
            <div className={styles.divider} />
            <p>
              Glass wool panels from L&R Green Pvt Ltd offer an ideal
              combination of thermal insulation, fire safety, and acoustic
              performance, making them suitable for a wide range of industrial
              and commercial applications. Their lightweight structure allows
              for easy handling and faster installation, reducing construction
              time while maintaining high efficiency and performance standards.
            </p>
            <p>
              Designed for long-term reliability, L&R Green Pvt Ltd panels are
              resistant to moisture, corrosion, and environmental stress. They
              help maintain consistent indoor temperatures, reduce noise levels,
              and lower energy consumption, ensuring cost-effective and durable
              solutions for modern construction projects.
            </p>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <div className={styles.imgShapeRight} />
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/glasswool6.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ SECTION ── */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeaderRow}>
            <div className={styles.faqHeaderLeft}>
              <h2 className={styles.secTitle}>
                Frequently Asked <br />
                <span>Questions</span>
              </h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>
              Find clear and concise answers to the most commonly asked
              questions about glass wool panels.
            </p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}
                >
                  <div
                    className={styles.faqHeader}
                    onClick={() => setOpenFaq(faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>
                      {openFaq === faq.id ? "▼" : "▶"}
                    </span>
                  </div>
                  {openFaq === faq.id && (
                    <div className={styles.faqBody}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.faqImgOuter}>
              <div
                className={styles.placeholderImg}
                style={{
                  backgroundImage: "url('/Images/glasswool7.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className={styles.ctaBanner}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Images/lastwool.jpg')",
        }}
      >
        <div className={styles.ctaInner}>
          <h2>Ready for Your Glass wool Panels Solution?</h2>
          <p>
            Connect with our team to design and deliver durable, efficient, and
            fully customized Glasswool panel solutions tailored to your site
            needs.
          </p>
          <button
            className={styles.btnSecondary}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3164a6",
              color: "#fff",
            }}
          >
            Contact US &nbsp;
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlasswoolPanels;
