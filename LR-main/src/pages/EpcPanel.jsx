import { useState } from 'react'
import styles from '../styles/EpcPanel.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, ArrowUpRight, CheckCircle2, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import epc1 from '../assets/panel/EPC/epc1.png'
import epc2 from '../assets/panel/EPC/epc2.png'
import epc3 from '../assets/panel/EPC/epc3.png'
import epc4 from '../assets/panel/EPC/epc4.png'
import epc5 from '../assets/panel/EPC/epc5.png'
import epc6 from '../assets/panel/EPC/epc6.png'
import user1 from '../assets/panel/EPC/card1.jpg'
import user2 from '../assets/panel/EPC/card2.jpg'
import user3 from '../assets/panel/EPC/card3.jpg'
import user4 from '../assets/panel/EPC/card4.jpg'
import design from '../assets/panel/EPC/design.png'
import design1 from '../assets/panel/EPC/design1.png'

function EpcPanel() {
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const galleryCards = [
        {
            id: 1,
            image: user1,
            title: "Standard Insulated Panels",
            description:
                "Ideal for walls and roofing, offering good thermal insulation and durability. Suitable for residential and commercial applications.",
        },
        {
            id: 2,
            image: user2,
            title: "EPS Cement Sandwich Panels",
            description:
                "Built with cement layers for better fire resistance and higher strength. Perfect for projects requiring added safety and load capacity.",
        },
        {
            id: 3,
            image: user3,
            title: "Roofing Panels",
            description:
                "Designed to reduce heat and allow efficient water drainage. Ensures long-lasting performance in roofing applications.",
        },
        {
            id: 4,
            image: user4,
            title: "Structural Insulated Panels",
            description:
                "Engineered for energy-efficient buildings with strong structural support. Ideal for modern, sustainable construction projects.",
        },
    ];

    const specifications = [
        { feature: "Core Density", value: "12–36 kg/m³" },
        { feature: "Thickness", value: "40mm–150mm" },
        { feature: "Width", value: "1000–1200mm" },
        { feature: "Fire Rating", value: "B1 / B2" },
        { feature: "Thermal Conductivity", value: "0.024–0.041 W/m·K" },
    ];



    const faqs = [
        {
            id: 1,
            question: "What are EPS panels used for?",
            answer:
                "EPS panels are widely used for prefabricated buildings, cold storage, clean rooms, warehouses, and industrial structures due to their excellent insulation and lightweight design.",
        },
        {
            id: 2,
            question: "Do EPS panels provide good insulation?",
            answer:
                "Yes, EPS panels offer excellent thermal insulation, helping maintain indoor temperatures while reducing energy consumption and cooling costs.",
        },
        {
            id: 3,
            question: "Are EPS panels fire-resistant?",
            answer:
                "EPS panels are available with fire-retardant cores that improve safety and comply with industry standards for commercial and industrial applications.",
        },
        {
            id: 4,
            question: "How durable are EPS panels?",
            answer:
                "EPS panels are highly durable, moisture-resistant, corrosion-resistant, and designed to provide long-lasting performance with minimal maintenance.",
        },
        {
            id: 5,
            question: "Are EPS panels cost-effective?",
            answer:
                "Yes, EPS panels are an economical building solution that reduces construction time, labor costs, and long-term energy expenses.",
        },
    ];
    return (
        <>
            <Header />
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>L&R PREFAB SOLAR INDIA PVT LTD</span>
                    <h1 className={styles.mainTitle}>
                        High-Performance<br />
                        <span>EPS  Panels
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        At L&R Prefab Solar India Pvt Ltd, our EPS panels are engineered to deliver superior insulation,
                        durability, and fast installation for residential, commercial, and industrial projects.
                    </p>
                    <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
                        <span>Contact Us</span>
                        <ArrowRight className={styles.arrow} size={18} />
                    </button>
                </div>
            </section>




            {/* ── SECTION 1: MAXIMIZE YOUR BUILDING POTENTIAL ── */}
            <section className={styles.introSec}>
                <div className={styles.secTitle}>
                    <h2>
                        What Are<br />
                        <span>EPS Panels?</span>
                    </h2>
                    <div className={styles.introLine} />
                </div>
                <div className={styles.introContainer}>
                    <div className={styles.introText}>
                        <p>
                            EPS (Expanded Polystyrene) sandwich panels by L&R Prefab Solar India Pvt Ltd are modern prefabricated building materials
                            designed with a rigid foam insulation core placed between two strong outer sheets such as steel, aluminium,
                            or cement board. This layered construction forms a single, unified structure that is lightweight yet highly
                            durable, making it ideal for fast and efficient construction across various applications.
                        </p>
                        <p>
                            These panels provide excellent thermal insulation due to their closed-cell foam structure, which helps maintain
                            consistent indoor temperatures and reduce energy consumption. In addition to insulation, EPS panels from L&R Prefab Solar
                            India Pvt Ltd offer strong structural stability, easy installation, and cost efficiency, making them a reliable choice for
                            residential, commercial, and industrial projects.
                        </p>
                        <button className={styles.btnOutline} onClick={() => {
                            navigate("/contact");
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}>
                            <span>Get Contact</span>

                            <span className={styles.iconWrap}>
                                <ArrowUpRight className={styles.icon1} size={18} />
                                <ArrowUpRight className={styles.icon2} size={18} />
                            </span>
                        </button>
                    </div>
                    <div className={styles.structureCard}>
                        <div className={styles.structureSidePanel}></div>
                        <div className={styles.structureImageWrapper}>
                            <img
                                src={epc1}
                                alt="Solar Structure"
                                className={styles.structureImage}
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* ── SECTION 3: DESIGNED AROUND YOUR LIFESTYLE ── */}
            <section className={styles.siteSec}>
                <div className={styles.siteHeader}>
                    <div className={styles.siteText}>
                        <h2>
                            Types of<br />
                            <span>EPS Panels</span>
                        </h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p >
                        L&R Prefab Solar India Pvt Ltd provides a versatile range of EPS panels designed
                        to meet diverse construction and insulation requirements.
                    </p>
                </div>

                <div className={styles.galleryGrid}>
                    {galleryCards.map((card) => (
                        <div key={card.id} className={styles.galleryCard}>
                            <div className={styles.galleryImageWrapper}>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={styles.galleryImage}
                                />
                            </div>

                            <div className={styles.galleryContent}>
                                <h3 className={styles.galleryTitle}>
                                    {card.title}
                                </h3>

                                <p className={styles.galleryDescription}>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------key------------------------ */}
            <section className={styles.TechUser}>
                <div className={styles.TechText}>
                    <h2>EPS Panels <br /><span>Technical Specifications</span></h2>
                    <div className={styles.TechLine}></div>
                </div>
                <div className={styles.TechFlex}>
                    <div className={styles.epcImageWrapper}>
                        <div className={styles.epcSideAccent}></div>

                        <div className={styles.epcImageFrame}>
                            <img
                                src={epc5}
                                alt="Solar Structure"
                                className={styles.epcMainImage}
                            />
                        </div>
                    </div>
                    <div className={styles.specificationTable}>
                        <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                            <div className={styles.tableCell}>Feature</div>
                            <div className={styles.tableCell}>Specification</div>
                        </div>

                        {specifications.map((item, index) => (
                            <div className={styles.tableRow} key={index}>
                                <div className={styles.tableCell}>{item.feature}</div>
                                <div className={styles.tableCell}>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* ── SECTION 4: ENGINEERED FOR SAFE URBAN LIVING ── */}
            <section className={styles.mfgBand}>
                <div className={styles.scrollWrap}>

                </div>

                <div className={styles.mfgContainer}>
                    <div className={styles.mfgText}>
                        <h2>
                            Where EPS<br />
                            Safe Urban Living
                        </h2>
                        <p>
                            Our rooftop units are built with lightweight steel framing, PUF insulated panels,
                            and weather-resistant roofing for strength, comfort, and durability. Designed to
                            reduce load on existing buildings, they include earthquake and wind resistance along
                            with proper structural safety assessment for reliable urban expansion.
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


            {/* MAINTENANCE */}
            <section className={styles.hvacSection}>
                <div className={styles.hvacSectionTitle}>
                    <h2>
                        Key Features & Benefits<br />
                        <span>of EPS Panels</span>
                    </h2>
                    <div className={styles.hvacIntroLine}></div>
                </div>

                <div className={styles.hvacContentWrapper}>
                    <div className={styles.hvacTextContainer}>
                        <div className={styles.hvacContent}>
                            <p>
                                EPS panels from L&R prefab Solar India Pvt Ltd combine lightweight construction with strong performance,
                                offering reliable insulation, durability, and cost efficiency for modern building solutions.
                            </p>
                            <div className={styles.hvacFeatureList}>
                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Lightweight & easy to install</p>
                                </div>

                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Cost-efficient construction solution</p>
                                </div>

                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Good thermal insulation performance</p>
                                </div>

                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Moisture & pest resistant</p>
                                </div>

                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Sound insulation (23–42 dB)</p>
                                </div>
                                <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Flexible design & finish options (PPGI/PPGL)</p>
                                </div>          <div className={styles.hvacFeatureItem}>
                                    <div className={styles.hvacFeatureIcon}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.hvacFeatureText}>Environmentally friendly</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageDesign}>
                        <div className={styles.imageBlueAccent}></div>
                        <img
                            src={epc2}
                            alt="Prefab Structure"
                            className={styles.mainImage}
                        />
                    </div>
                </div>
            </section>



            {/* -------EPC SOLUTIONS --------------------- */}
            <section className={styles.epsSection}>
                <div className={styles.epsHeading}>
                    <h2>
                        Applications of <br />
                        <span>EPS Panels?</span>
                    </h2>
                    <div className={styles.hvacIntroLine}></div>
                </div>

                <div className={styles.epsContentWrapper}>
                    <div className={styles.epsImageWrapper}>
                        <div className={styles.epsSideAccent}></div>

                        <div className={styles.epsImageFrame}>
                            <img
                                src={epc6}
                                alt="Solar Structure"
                                className={styles.epsImage}
                            />
                        </div>
                    </div>

                    <div className={styles.epsContent}>
                        <p>
                            EPS panels from L&R Prefab Solar India Pvt Ltd are versatile and widely used across residential, commercial, and
                            industrial projects, offering efficient insulation, quick installation, and cost-effective construction
                            solutions.
                        </p>
                        <ul>
                            <li>Interior partitions & office spaces</li>
                            <li>False ceilings & wall cladding</li>
                            <li>Lightweight roofing systems</li>
                            <li>Lightweight roofing systems</li>
                            <li>Temporary structures (site offices, kiosks)</li>
                            <li>Warehouses & industrial sheds</li>
                        </ul>
                    </div>
                </div>
            </section>




            {/* ── SECTION 6: WHY CHOOSE ROOFTOP PREFAB ROOMS ── */}
            <section className={styles.SolarEpic}>
                <div className={styles.solarEpicTitle}>
                    <h2>Why Choose<br /><span>EPS Panels?</span></h2>
                    <div className={styles.FaqsLine}></div>
                </div>
                <div className={styles.SolarEpicFLex}>
                    {/*  */}
                    <div className={styles.solartext}>
                        <p>L&R Prefab Solar India stands out for its commitment to quality, innovation, and customer
                            satisfaction. Our EPS panels are manufactured using advanced technology and strict
                            quality control processes to ensure consistent performance, durability, and reliability
                            across every project. We offer a wide range of customizable options in terms of sizes,
                            thickness, and finishes to meet specific project requirements.</p>
                        <p>With strong industry expertise and a customer-focused approach, we provide end-to-end
                            support—from product selection to delivery. Our technical team offers expert guidance
                            to help you choose the right solutions, while our reliable pan-India supply network
                            ensures timely delivery and seamless project execution.</p>
                    </div>
                    <div className={styles.structureDisplayContainer}>
                        <div className={styles.leftDecorPanel}></div>
                        <div className={styles.structureImageContainer}>
                            <img
                                src={epc3}
                                alt="Solar Structure"
                                className={styles.structureDisplayImage}
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* ── SECTION 7: FAQ SECTION ── */}
            <section className={styles.faqSec}>
                <span className={styles.introLabel}>• FAQS</span>
                <div className={styles.faqHeader}>
                    <div className={styles.faqText}>
                        <h2>Frequently Asked<br /><span>Questions</span></h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p>Find quick answers to common queries about EPS panels,
                        including their performance, applications, and benefits.</p>
                </div>
                <div className={styles.faqBody}>
                    <div className={styles.faqImg}>
                        <img src={epc4} alt="warehouse" />
                    </div>
                    {/*  */}
                    <div className={styles.container}>
                        {faqs.map((item, index) => (
                            <div
                                key={item.id}
                                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                                    }`}
                            >
                                <div
                                    className={styles.question}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3>{item.question}</h3>

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
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <h2>Ready for Your EPS panels Solution?</h2>
                <p>
                    Connect with our team to design and deliver durable, efficient, and fully
                    customized insulated EPS panels solutions tailored to your site needs.
                </p>
                <button className={styles.contactBtn} onClick={() => {
                    navigate("/contact");
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}>
                    <span className={styles.contactText}>Contact Us</span>

                    <span className={styles.iconBox}>
                        <ArrowRight className={styles.iconOne} size={18} />
                        <ArrowRight className={styles.iconTwo} size={18} />
                    </span>
                </button>
            </section>





            <Footer />
        </>
    );
}

export default EpcPanel;