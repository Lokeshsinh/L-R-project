import { useState, useEffect, useCallback } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/SolarHardware.module.css";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Plus, X, Shield,
  Weight,
  Hexagon,
  Hammer,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import hardware1 from '../assets/solar/hardware/hardware1.png'
import hardware2 from '../assets/solar/hardware/hardware2.png'
import hardware3 from '../assets/solar/hardware/hardware3.png'
import hardware4 from '../assets/solar/hardware/hardware4.png'
import hardware5 from '../assets/solar/hardware/hardware5.png'
import hardware6 from '../assets/solar/hardware/hardware6.png'
import hardware7 from '../assets/solar/hardware/hardware7.png'
import hardware8 from '../assets/solar/hardware/hardware8.png'
import hardware9 from '../assets/solar/hardware/hardware9.png'
import card1 from '../assets/solar/hardware/card1.png';
import card2 from '../assets/solar/hardware/card2.png';
import card3 from '../assets/solar/hardware/card3.png';
import card4 from '../assets/solar/hardware/card4.png';
import card5 from '../assets/solar/hardware/card5.png';
import card6 from '../assets/solar/hardware/card6.png';
import design from '../assets/solar/hardware/design.png'
import design1 from '../assets/solar/hardware/design1.png'


const SolarHardware = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(1);
  const [index, setIndex] = useState(0);


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => { window.scrollTo(0, 0); }, []);




  const industryProjects = [
    {
      title: "Spiral Lock Nuts",
      desc: "High-strength lock nuts designed to prevent loosening under vibration. Ideal for industrial, automotive, and structural fastening applications.",
      img: card1,
    },
    {
      title: "Hex Bolts & Nuts",
      desc: "Durable hex bolts and nuts for secure and reliable fastening. Suitable for construction, machinery, and engineering projects.",
      img: card2,
    },
    {
      title: "Allen Bolts",
      desc: "Precision Allen bolts designed for strong and accurate fastening. Perfect for machinery, equipment, and industrial assemblies.",
      img: card3,
    },
    {
      title: "Square Nuts",
      desc: "Heavy-duty square nuts offering a firm and dependable grip. Widely used in structural, fabrication, and mechanical applications.",
      img: card4,
    },
    {
      title: "High-Strength Rivets",
      desc: "Durable rivets designed for permanent and vibration-resistant fastening. Ideal for construction, automotive, and industrial applications.",
      img: card5,
    },
    {
      title: "Lockbolts",
      desc: "Heavy-duty lockbolts engineered for maximum strength and secure fastening. Perfect for structural steel, bridges, and heavy engineering projects.",
      img: card6,
    },

  ];



  const hardwareFeatures = [
    {
      icon: <Shield />,
      title: "Enhanced Durability",
      description:
        "Built with premium materials to withstand extreme weather and long-term usage, ensuring durability in demanding outdoor environments.",
    },
    {
      icon: <Weight />,
      title: "Corrosion Resistance",
      description:
        "Advanced coatings like galvanization protect against rust and environmental damage, ensuring durability in harsh outdoor conditions.",
    },
    {
      icon: <Hexagon />,
      title: "Structural Reliability",
      description:
        "Ensures strong, stable, and secure fastening for critical solar components, for long-term reliable structural performance.",
    },
    {
      icon: <Hammer />,
      title: "Installation Efficiency",
      description:
        "Designed for quick, easy, and hassle-free installation on-site, reducing labor time and improving overall project efficiency significantly.",
    },
  ];




  const faqs = [
    { id: 0, q: "What solar hardware products do you supply?", a: "We supply a complete range of solar mounting hardware including T-bolts, spring nuts, mid/end clamps, roof hooks, flashings, grounding clips, cable management clips, and rail splices." },
    { id: 1, q: "Are your hardware products compatible with all solar panels?", a: "Yes, our hardware is designed to be universally compatible with standard 60, 72, and 144-cell solar modules from all major manufacturers." },
    { id: 2, q: "What material is used for your solar hardware?", a: "We use Grade 304/316 stainless steel for fasteners and 6063-T5 anodized aluminium for clamps and rails, both rated for 25+ years outdoor service life." },
    { id: 3, q: "Do you supply hardware for floating solar projects?", a: "Yes, we offer marine-grade stainless steel hardware specifically designed for floating solar pontoon installations with enhanced corrosion resistance." },
    { id: 4, q: "Can you provide custom hardware for special mounting systems?", a: "Absolutely. We accept custom orders for non-standard module sizes, special roof profiles, or unique structural requirements with engineering support." },
  ];

  const visibleCards = 4;

  const nextSlide = useCallback(() => {
    setIndex((prev) =>
      prev >= industryProjects.length - visibleCards ? 0 : prev + 1
    );
  }, [industryProjects.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + industryProjects.length) % industryProjects.length);
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Smart Hardware<br />
            <span>for Solar Systems
            </span>
          </h1>
          <p className={styles.heroDesc}>
            At L&R Green Pvt Ltd, we manufacture high-performance solar hardware that
            supports efficient, durable, and cost-effective energy systems.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>





      {/* INTRO */}
      <section className={styles.introSec}>
        <div className={styles.secTitle}>
          <h2>
            Solar Hardware for<br />
            <span>Reliable Performance</span>
          </h2>
          <div className={styles.introLine} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.solarImageContainer}>
            <div className={styles.mainImageWrapper}>
              <img
                src={hardware1}
                alt="Solar Mounting Structure"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.floatingImageFrame}>
              <div className={styles.floatingImageWrapper}>
                <img
                  src={hardware2}
                  alt="Solar Rail Detail"
                  className={styles.floatingImage}
                />
              </div>
            </div>

          </div>

          <div className={styles.introText}>
            <p>
              Our solar hardware solutions cover a complete range of components designed to mount, secure, and connect
              solar systems with precision. We focus on high-quality fasteners and structural elements that ensure strong
              mechanical integrity, long-term durability, and consistent performance across all types of installations.
            </p>
            <p>
              Working closely with solar developers, EPC contractors, and manufacturers, we deliver both standard and customized
              solutions tailored to specific project requirements. Our approach ensures flexibility, efficiency, and dependable
              support for residential, commercial, and utility-scale solar projects.
            </p>
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




      {/* KEY FEATURES */}
      <section className={styles.advSec}>
        <div className={styles.secTitle}>
          <h2>
            Key Features of<br />
            <span>Our Solar Hardware</span>
          </h2>
          <div className={styles.introLine}></div>
        </div>
        <div className={styles.advFlex}>
          <div className={styles.advContainer}>
            <div className={styles.advText}>
              <p>
                Our solar hardware is designed to deliver superior strength, precision, and long-term
                reliability, ensuring secure and efficient performance across all types of solar installations
                while meeting diverse project requirements.
              </p>
              <div className={styles.featureListWrap}>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>High load-bearing capacity for structural stability</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Precision-engineered for accurate fitting and alignment</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Excellent corrosion resistance with advanced coatings</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Compatible with rooftop and ground-mounted systems</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Designed for quick and easy installation</p>
                </div>
                <div className={styles.featureRow}>
                  <div className={styles.featureIconBox}>
                    <CheckCircle2 size={17} strokeWidth={2.2} />
                  </div>
                  <p className={styles.featureText}>Customization options for diverse project needs</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hardwareImageContainer}>
            <div className={styles.hardwareMainFrame}>
              <img
                src={hardware3}
                alt="Solar Mounting Structure"
                className={styles.hardwareMainImage}
              />
            </div>

            <div className={styles.hardwareFloatingCard}>
              <div className={styles.hardwareFloatingFrame}>
                <img
                  src={hardware4}
                  alt="Solar Rail Detail"
                  className={styles.hardwareFloatingImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* FASTENING SOLUTIONS */}
      <section className={styles.spaceUser}>
        <div className={styles.spaceUserFlex}>
          <div className={styles.spaceuserText}>
            <h2>Fastening Solutions <br /> <span>for Solar Construction</span></h2>
            <div className={styles.divider}></div>
          </div>
          <p>Solar installations require strong, reliable fastening solutions to ensure stability
            and long-term performance. Our systems are designed to withstand harsh outdoor conditions
            while delivering consistent durability and structural integrity.</p>
        </div>
        <div className={styles.controls}>
          <button className={styles.Btn} onClick={prevSlide}>
            <ChevronLeft size={22} />
          </button>

          <button className={styles.btn1} onClick={nextSlide}>
            <ChevronRight size={22} />
          </button>
        </div>
        <div
          className={styles.expertiseGrid}
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
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


      {/* STRENGTH BANNER */}
      <section className={styles.mfgBand}>
        <div className={styles.scrollWrap}>
          <div className={styles.scrollTrack}>
            <h1>L&R SOLar hardware</h1>
          </div>
        </div>

        <div className={styles.mfgContainer}>
          <div className={styles.mfgText}>
            <h2>
              Built for Strength &<br />
              Reliability in Solar Hardware
            </h2>
            <p>
              Our solar hardware solutions are engineered to deliver exceptional strength, durability,
              and long-term reliability, ensuring secure structural support and consistent performance
              across all solar installations, even in demanding environmental conditions.
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




      {/* ADVANTAGES */}
      <section className={styles.advantagesUser}>
        <div className={styles.advantagesGrid}>
          <div className={styles.advantageText}>
            <h2>Advantages of Our <br /><span>Solar Hardware Fasteners</span></h2>
            <div className={styles.divider} ></div>
          </div>
          <p>Our solar fasteners are designed to deliver long-lasting strength, reliability,
            and performance in demanding environments. They ensure secure connections while
            improving efficiency and reducing overall project costs.</p>
        </div>

        <div className={styles.hardwareFeatureGrid}>
          {hardwareFeatures.map((item, index) => (
            <div key={index} className={styles.hardwareFeatureCard}>
              <div className={styles.hardwareIcon}>
                {item.icon}
              </div>

              <div className={styles.hardwareContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className={styles.conatineUser}>
        <div className={styles.containerMaxs}>
          <h2>
            Applications of Solar<br />
            <span>Hardware Fasteners</span>
          </h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.containerFlex}>
          <div className={styles.containerText}>
            <p>Our solar hardware solutions are designed to support a wide range of solar projects,
              ensuring strength, adaptability, and reliable performance across different installation
              environments and scales.</p>
            <div className={styles.applicationFeatureList}>
              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Residential rooftop solar systems</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Commercial and industrial solar installations</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Utility-scale solar power plants</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Ground-mounted solar structures</p>
              </div>

              <div className={styles.applicationFeatureItem}>
                <div className={styles.applicationFeatureIcon}>
                  <CheckCircle2 size={17} strokeWidth={2.2} />
                </div>
                <p className={styles.applicationFeatureText}>Solar installations in harsh or coastal environments</p>
              </div>
            </div>
          </div>
          <div className={styles.mountingGalleryContainer}>
            <div className={styles.mountingMainImageWrapper}>
              <img
                src={hardware8}
                alt="Solar Mounting Structure"
                className={styles.mountingMainImage}
              />
            </div>

            <div className={styles.mountingPreviewCard}>
              <div className={styles.mountingPreviewWrapper}>
                <img
                  src={hardware9}
                  alt="Solar Rail Detail"
                  className={styles.mountingPreviewImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.SolarEpic}>
        <div className={styles.solarEpicTitle}>
          <h2>Why Choose Solar<br /><span>Hardware Fasteners</span></h2>
          <div className={styles.FaqsLine}></div>
        </div>
        <div className={styles.SolarEpicFLex}>
          <div className={styles.solarHardwareContainer}>
            <div className={styles.solarHardwareMainImageBox}>
              <img
                src={hardware6}
                alt="Solar Mounting Structure"
                className={styles.solarHardwareMainImage}
              />
            </div>

            <div className={styles.solarHardwarePreviewCard}>
              <div className={styles.solarHardwarePreviewImageBox}>
                <img
                  src={hardware7}
                  alt="Solar Rail Detail"
                  className={styles.solarHardwarePreviewImage}
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.solartext}>
            <p>L&R Green Pvt Ltd provides specialized solar fastening solutions engineered to withstand
              demanding environmental conditions. By combining industry-focused expertise with rigorous
              quality standards, we deliver hardware that ensures long-term structural integrity and consistent
              performance. Our focus on Reliable Performance minimizes maintenance risks, making us a trusted
              partner for durable renewable energy infrastructure.</p>
            <p>We differentiate ourselves through Customization Capabilities and comprehensive End-to-End Support,
              tailoring every system to meet specific project requirements. From the initial design consultation to
              final delivery, our team provides the technical guidance and high-quality components necessary for seamless
              installation. Choosing L&R Green means investing in precision-engineered solutions backed by dedicated professional service.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSec}>
        <span className={styles.introLabel}>• FAQS</span>
        <div className={styles.faqHeader}>
          <div className={styles.faqText}>
            <h2>Frequently Asked<br /><span>Questions</span></h2>
            <div className={styles.FaqsLine}></div>
          </div>
          <p>Solar hardware solutions provide stability, durability, and proper alignment,
            enhancing system performance, safety, and lifespan.</p>
        </div>
        <div className={styles.faqBody}>
          <div className={styles.faqImg}>
            <img src={hardware5} alt="warehouse" />
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




      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start Your Solar Fasteners Today?</h2>
        <p>
          Connect with our team to design and deliver durable, efficient, and fully
          customized solar plant infrastructure solutions tailored to your project needs.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBox}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default SolarHardware;
