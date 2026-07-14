import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarHardware.module.css";

const SolarHardware = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const keyFeatures = [
    "Corrosion-resistant hot-dip galvanized & anodized aluminium finish",
    "Pre-assembled and pre-drilled for ultra-fast site installation",
    "Compatible with all major solar panel brands and frame sizes",
    "Rated for wind speeds up to 170 km/h and seismic zone compliance",
    "Stainless steel T-bolts, spring nuts, and mid/end clamps included",
    "25+ year design life with zero maintenance requirements",
  ];

  const fasteningCards = [
    { title: "T-Bolts & Spring Nuts", desc: "Precision-forged stainless steel fasteners for rock-solid panel-to-rail connections.", img: "/Images/tbolt.jpg" },
    { title: "Mid & End Clamps", desc: "Aluminium clamps engineered to grip panel frames securely without stress concentration.", img: "/Images/clamp.jpg" },
    { title: "Roof Hooks", desc: "Weatherproof roof hooks for metal sheet, RCC flat, and tiled roof installations.", img: "/Images/roofhook.jpg" },
  ];

  const strengthCards = [
    { title: "High-Grade Materials", desc: "Every component is manufactured from grade 304/316 stainless steel or 6063-T5 anodized aluminium." },
    { title: "Load-Tested Design", desc: "All hardware is tested to handle dead loads, wind uplift, and dynamic seismic forces." },
    { title: "Anti-Corrosion Coating", desc: "Multi-layer galvanizing and anodizing protect against salt, humidity and UV degradation." },
    { title: "Precision Manufacturing", desc: "CNC-machined components with tight tolerances for perfect fit and reliable long-term performance." },
  ];

  const advantages = [
    { num: "01", title: "Faster Installation", desc: "Pre-drilled, pre-slotted hardware reduces on-site assembly time by up to 50%." },
    { num: "02", title: "Universal Compatibility", desc: "Works with panels from 60 to 144 cell format and all major mounting rail brands." },
    { num: "03", title: "Lifetime Durability", desc: "Designed to outlast the 25-year solar panel warranty in all climate conditions." },
    { num: "04", title: "Cost Effective", desc: "Competitive pricing with no hidden costs — bulk project pricing available." },
  ];

  const applications = [
    { title: "Rooftop Solar Systems", desc: "Complete fastening kits for residential, commercial, and industrial rooftop installations.", img: "/Images/hardapp1.jpg" },
    { title: "Ground-Mounted Farms", desc: "Pile anchors, rail clamps, and module hardware for utility-scale solar projects.", img: "/Images/hardapp2.jpg" },
    { title: "Carport Solar Structures", desc: "Elevated structure hardware for solar carports and parking shade structures.", img: "/Images/hardapp3.jpg" },
  ];

  const faqs = [
    { id: 0, q: "What solar hardware products do you supply?", a: "We supply a complete range of solar mounting hardware including T-bolts, spring nuts, mid/end clamps, roof hooks, flashings, grounding clips, cable management clips, and rail splices." },
    { id: 1, q: "Are your hardware products compatible with all solar panels?", a: "Yes, our hardware is designed to be universally compatible with standard 60, 72, and 144-cell solar modules from all major manufacturers." },
    { id: 2, q: "What material is used for your solar hardware?", a: "We use Grade 304/316 stainless steel for fasteners and 6063-T5 anodized aluminium for clamps and rails, both rated for 25+ years outdoor service life." },
    { id: 3, q: "Do you supply hardware for floating solar projects?", a: "Yes, we offer marine-grade stainless steel hardware specifically designed for floating solar pontoon installations with enhanced corrosion resistance." },
    { id: 4, q: "Can you provide custom hardware for special mounting systems?", a: "Absolutely. We accept custom orders for non-standard module sizes, special roof profiles, or unique structural requirements with engineering support." },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/solarhardware.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>SMART HARDWARE <br /><span>FOR SOLAR SYSTEMS</span></h1>
          <p className={styles.subtitle}>High-performance solar mounting hardware engineered for durability, speed of installation, and universal compatibility — powering reliable solar installations across India.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.splitSec}>
        <div className={styles.splitContainer}>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Solar Hardware For <br /><span>Reliable Performance</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px", fontWeight: "600", color: "#334155" }}>L&amp;R Green India Pvt Ltd supplies a complete range of precision-engineered solar mounting hardware — from roof hooks and flashings to module clamps, T-bolts, and grounding clips.</p>
            <p>Every component is manufactured to the highest quality standards using corrosion-resistant materials, ensuring your solar installation stays secure, watertight, and fully operational throughout its 25+ year lifecycle.</p>
            <button className={styles.btnPrimary} style={{ marginTop: "20px" }}>Get a Quote &nbsp;→</button>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/solarhardware1.jpg" alt="Solar hardware products" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/solarhardware2.jpg" alt="Solar fasteners closeup" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Key Features of <br /><span>Our Solar Hardware</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.featuresGrid}>
            {keyFeatures.map((feat, i) => (
              <div key={i} className={styles.featureItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" fill="#233a5e" />
                  <path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASTENING SOLUTIONS */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Fastening Solutions <br /><span>for Solar Construction</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.threeCardGrid}>
            {fasteningCards.map((card, i) => (
              <div key={i} className={styles.fasteningCard}>
                <div className={styles.fasteningImgWrap}><img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className={styles.fasteningContent}><h3>{card.title}</h3><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTH BANNER */}
      <section className={styles.blueBannerSec}>
        <div className={styles.watermark}>HARDWARE</div>
        <div className={styles.blueBannerContainer}>
          <div className={styles.blueBannerText}>
            <h2>Built for Strength &amp; <br /><strong>Reliability in Solar Hardware</strong></h2>
            <div className={styles.divider} style={{ background: "#ffffff", marginBottom: "30px" }} />
            <div className={styles.strengthGrid}>
              {strengthCards.map((sc, i) => (
                <div key={i} className={styles.strengthItem}>
                  <strong>{sc.title}</strong>
                  <p>{sc.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src="/Images/solarstrength.jpg" alt="Solar hardware strength" style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "cover", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className={styles.splitSec}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Advantages of Our <br /><span>Solar Hardware Fasteners</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.advGrid}>
            {advantages.map((adv, i) => (
              <div key={i} className={styles.advCard}>
                <span className={styles.advNum}>{adv.num}</span>
                <h4>{adv.title}</h4>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className={styles.splitSec} style={{ background: "#f8fafc" }}>
        <div className={styles.containerMax}>
          <div style={{ marginBottom: "50px" }}>
            <h2 className={styles.secTitle}>Applications of Solar <br /><span>Hardware Fasteners</span></h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.threeCardGrid}>
            {applications.map((card, i) => (
              <div key={i} className={styles.appCard}>
                <div className={styles.appImgWrap}><img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div className={styles.appContent}><h3>{card.title}</h3><p>{card.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.splitSecAlt}>
        <div className={styles.splitContainer}>
          <div className={styles.imgCol}>
            <div className={styles.multiImgWrap}>
              <div className={styles.mainImg}><img src="/Images/whyhardware1.jpg" alt="Why choose L&R hardware" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "14px" }} /></div>
              <div className={styles.smallImg}><img src="/Images/whyhardware2.jpg" alt="Solar hardware quality" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} /></div>
            </div>
          </div>
          <div className={styles.textCol}>
            <h2 className={styles.secTitle}>Why Choose Solar <br /><span>Hardware Fasteners</span></h2>
            <div className={styles.divider} />
            <p style={{ marginTop: "30px" }}>L&amp;R Green India Pvt Ltd is your trusted solar hardware partner — supplying certified, tested, and warranty-backed mounting hardware for every type of solar installation.</p>
            <p>With in-house quality control, bulk supply capability, and PAN India delivery, we ensure your project gets the right hardware, on time, every time.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <div className={styles.faqContainer}>
          <span className={styles.faqTag}>• FAQs</span>
          <div className={styles.faqHeaderRow}>
            <div>
              <h2 className={styles.secTitle}>Frequently Asked <br /><span>Questions</span></h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.faqDesc}>Common questions about our solar hardware products — materials, compatibility, and supply.</p>
          </div>
          <div className={styles.faqContent}>
            <div className={styles.faqImgOuter}>
              <img src="/Images/faqhardware.jpg" alt="FAQ solar hardware" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "12px" }} />
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.id} className={`${styles.faqItem} ${openFaq === faq.id ? styles.faqItemActive : ""}`}>
                  <div className={styles.faqHeader} onClick={() => setOpenFaq(faq.id === openFaq ? -1 : faq.id)}>
                    <span>{faq.q}</span>
                    <span className={styles.faqArrow}>{openFaq === faq.id ? "↓" : "↑"}</span>
                  </div>
                  {openFaq === faq.id && <div className={styles.faqBody}><p>{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url('/Images/ctahardware.jpg')" }}>
        <div className={styles.ctaInner}>
          <h2>Start Your Solar Fasteners Today</h2>
          <p>Connect with our team to source certified, high-performance solar mounting hardware for your next installation project.</p>
          <button className={styles.btnSecondary}>Contact US &nbsp;→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarHardware;
