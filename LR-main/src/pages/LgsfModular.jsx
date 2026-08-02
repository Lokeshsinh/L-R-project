import React from 'react'
import { useState } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styles from '../styles/LgsfModular.module.css'
import {
    ArrowRight, Plus, X, ArrowUpRight, CheckCircle2,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import modular1 from '../assets/LGFS/LgsfModular/modular1.png'
import modular2 from '../assets/LGFS/LgsfModular/modular2.png'
import modular3 from '../assets/LGFS/LgsfModular/modular3.png'
import card1 from '../assets/LGFS/LgsfModular/card1.jpg';
import card2 from '../assets/LGFS/LgsfModular/card2.png';
import card3 from '../assets/LGFS/LgsfModular/card3.jpg';
import card4 from '../assets/LGFS/LgsfModular/card4.png';

const faqs = [
    {
        id: 1,
        q: "What is LGSF construction?",
        a:
            "LGSF is a modern construction method that uses lightweight galvanized steel frames to build strong, durable, and energy-efficient structures.",
    },
    {
        id: 2,
        q: "Where can LGSF buildings be used??",
        a:
            "LGSF is suitable for residential homes, commercial buildings, offices, schools, hospitals, warehouses, and industrial facilities.",
    },
    {
        id: 3,
        q: "Are LGSF buildings durable?",
        a:
            "Yes. LGSF buildings are corrosion-resistant, earthquake-resistant, fire-resistant, and designed for long-term structural performance.",
    },
    {
        id: 4,
        q: "Is LGSF construction faster than conventional construction?",
        a:
            "Yes. Prefabricated steel components significantly reduce construction time and enable faster project completion.",
    },
    {
        id: 5,
        q: "Can LGSF buildings be customized?",
        a:
            "Absolutely. LGSF structures can be customized in terms of layouts, elevations, finishes, and interior designs to meet project requirements.",
    },
];

function LgsfModular() {
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const industryProjects = [
        {
            title: "Residential Homes",
            desc: "Modern and energy-efficient homes designed with lightweight steel framing for long-lasting performance.",
            img: card1,
        },
        {
            title: "Commercial Buildings",
            desc: "Flexible office spaces, retail outlets, and business facilities built with precision-engineered steel frames.",
            img: card2,
        },
        {
            title: "Institutional Buildings",
            desc: "Schools, hospitals, hostels, and educational facilities designed for safety, durability, and functionality.",
            img: card3,
        },
        {
            title: "Industrial Structures",
            desc: "Warehouses, workshops, and manufacturing facilities offering high strength and quick installation.",
            img: card4,
        },
    ];


    const navigate = useNavigate();
    return (
        <>
            <Header />

            {/* -----------hero--------------- */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
                    <h1 className={styles.mainTitle}>
                        Light Gauge Steel<br />
                        <span>Frame (LGSF) Buildings
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        Build faster with advanced Light Gauge Steel Frame (LGSF) technology, delivering durable, lightweight,
                        and energy-efficient structures for residential, commercial, and industrial applications.

                    </p>
                    <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
                        <span>Contact Us</span>
                        <ArrowRight className={styles.arrow} size={18} />
                    </button>
                </div>
            </section>


            {/* INTRO */}
            <section className={styles.splitSection}>
                <div className={styles.splitText}>
                    <h2>Smart Construction for<br />  <span>Modern Buildings</span></h2>
                    <div className={styles.introLine}></div>
                </div>
                <div className={styles.textSide}>

                    {/* left */}
                    <div className={styles.sideLeft}>
                        <p>LGSF construction is a modern building solution that uses precision-engineered galvanized steel sections
                            to create strong, lightweight, and durable structures. It offers faster construction, superior quality,
                            and long-lasting performance while reducing overall project timelines. Its precision-manufactured components
                            ensure consistent quality, improved structural integrity, and efficient project execution.</p>
                        <p>Engineered for strength, safety, and sustainability, LGSF buildings provide excellent thermal efficiency,
                            corrosion resistance, and design flexibility. They are ideal for residential homes, commercial buildings,
                            schools, hospitals, and institutional projects. The lightweight steel framework enhances structural stability
                            while delivering exceptional comfort and long-term reliability.
                        </p>
                        <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                            <span>Get Contact</span>

                            <span className={styles.iconWrap}>
                                <ArrowUpRight className={styles.icon1} size={18} />
                                <ArrowUpRight className={styles.icon2} size={18} />
                            </span>
                        </button>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.rightShape}></div>

                        <img
                            src={modular2}
                            alt="PUF Panel"
                            className={styles.image}
                        />
                    </div>
                </div>
            </section>


            {/* PRODUCTS */}
            <section className={styles.showcase}>
                <div className={styles.secHeader}>
                    <div className={styles.secText}>
                        <h2>Versatile LGSF<br /><span>Building Solutions</span></h2>
                        <div className={styles.productsDivider}></div>
                    </div>
                    <p className={styles.secDesc}>Our LGSF solutions provide strong, lightweight, and customizable buildings for residential,
                        commercial, institutional, and industrial applications, ensuring fast construction and long-lasting performance.</p>
                </div>
                <div className={styles.expertiseGrid}>
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


            <div className={styles.PEBStructure}>
                <div className={styles.PEBStructureTExt}>
                    <h2>What is LGSF  <br /><span>construction?</span></h2>
                    <div className={styles.productsDivider}></div>
                </div>

                <div className={styles.PEBStructureFlex}>
                    <div className={styles.heroFrame}>
                        <div className={styles.sidePillar}></div>

                        <img
                            src={modular3}
                            alt="PUF Panel"
                            className={styles.coverPhoto}
                        />
                    </div>

                    <div className={styles.PEBStructurePara}>
                        <p>LGSF is a modern construction method that uses lightweight galvanized steel frames to build strong,
                            durable, and energy-efficient structures. Its precision-engineered components ensure faster
                            installation, superior structural performance, and consistent construction quality for
                            projects of every scale.</p>
                        <div className={styles.featureListWrap}>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Lightweight Steel Frame</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>High Structural Strength</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Earthquake Resistant</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Fire Resistant Construction</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Thermal & Acoustic Insulation</p>
                            </div>
                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Corrosion Resistant</p>
                            </div>

                        </div>
                    </div>
                    {/* image */}



                </div>
            </div>



            {/* ── FAQ ── */}
            <section className={styles.faqSec}>
                <span className={styles.introLabel}>• FAQS</span>
                <div className={styles.faqHeader}>
                    <div className={styles.faqText}>
                        <h2>Frequently Asked<br /><span>Questions</span></h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p>Find answers to common questions about LGSF construction and its key benefits. Understand
                        how it delivers faster, stronger, and efficient building solutions.</p>
                </div>
                <div className={styles.faqBody}>
                    <div className={styles.faqImg}>
                        <img src={modular1} alt="warehouse" />
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

            {/* ── CTA Banner ── */}
            <section className={styles.cta}>
                <h2>Ready to Build with LGSF Technology?</h2>
                <p>
                    Build smarter with our advanced LGSF solutions, delivering strong, lightweight,
                    and energy-efficient structures with fast construction and lasting quality.
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
        </>
    );
}

export default LgsfModular;