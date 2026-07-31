import React from 'react'
import { useState } from 'react';
import styles from '../styles/PrefabModular.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, Plus, X, ArrowUpRight, CheckCircle2,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import modular1 from '../assets/PREFAB/PrefabModular/modular1.png'
import modular2 from '../assets/PREFAB/PrefabModular/modular2.png'
import modular3 from '../assets/PREFAB/PrefabModular/modular3.png'
function PrefabModular() {
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const navigate = useNavigate()




    const faqs = [
        {
            id: 1,
            q: "What are prefabricated modular buildings?",
            a:
                "Prefabricated modular buildings are factory-built structures assembled on-site, offering faster construction, superior quality, and cost-effective solutions for residential, commercial, and industrial applications.",
        },
        {
            id: 2,
            q: "Are prefab buildings durable?",
            a:
                "Yes, prefab buildings are highly durable, engineered with premium materials, and designed to withstand harsh weather conditions while providing long-lasting structural performance.",
        },
        {
            id: 3,
            q: "How much time does prefab construction save?",
            a:
                "Prefab construction can reduce project completion time by up to 50% compared to conventional construction, thanks to off-site manufacturing and quick on-site installation.",
        },
        {
            id: 4,
            q: "Can prefab structures be customized?",
            a:
                "Yes, prefab structures can be fully customized in terms of layout, size, interiors, finishes, insulation, and utilities to suit specific project requirements.",
        },
        {
            id: 5,
            q: "Are modular buildings relocatable?",
            a:
                "Yes, many modular buildings are designed to be dismantled, transported, and reinstalled at different locations without compromising their structural integrity.",
        },
    ];


    return (
        <>
            <Header />

            {/*---------------------- Hero--------------- */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
                    <h1 className={styles.mainTitle}>
                        Prefabricated Modular <br />
                        <span>Building Solutions
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        L&R Green Private Limited delivers durable, cost-effective prefabricated modular
                        buildings with fast construction and long-term performance across India.

                    </p>
                    <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
                        <span>Contact Us</span>
                        <ArrowRight className={styles.arrow} size={18} />
                    </button>
                </div>
            </section>

            {/* --------------------Intro-------------------------- */}
            <section className={styles.introSec}>
                <div className={styles.secTitle}>
                    <h2>
                        What is a <span>Prefabricated Building?</span>

                    </h2>
                    <div className={styles.introLine} />
                </div>

                <div className={styles.introContainer}>
                    <div className={styles.introText}>
                        <p>
                            Prefabricated buildings are structures manufactured in controlled factory environments and
                            then assembled at the project site. All major components such as walls, roofs, flooring systems,
                            structural frames, and modular units are pre-engineered with precision to ensure faster installation,
                            consistent quality, and reliable performance.
                        </p>
                        <p>
                            These structures significantly reduce construction timelines while improving accuracy and efficiency.
                            By minimizing material waste and on-site labor requirements, prefabricated buildings offer a cost-effective
                            and sustainable solution suitable for a wide range of industrial, commercial, residential, and infrastructure
                            applications.
                        </p>
                        <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                            <span>Get Contact</span>

                            <span className={styles.iconWrap}>
                                <ArrowUpRight className={styles.icon1} size={18} />
                                <ArrowUpRight className={styles.icon2} size={18} />
                            </span>
                        </button>
                    </div>
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>

                            <div className={styles.leftAccent}></div>

                            <img
                                src={modular2}
                                alt="Building"
                                className={styles.image}
                            />

                            <div className={styles.overlay}></div>

                        </div>
                    </div>
                </div>
            </section>



            {/* ------------------Prefaoffice----------------------- */}
            <section className={styles.advSec}>
                <div className={styles.secTitle}>
                    <h2>
                        Features of Our<br />
                        <span>Prefabricated Structures</span>
                    </h2>
                    <div className={styles.introLine}></div>
                </div>
                <div className={styles.advFlex}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardWrapper}>
                            <div className={styles.accentBadge}></div>
                            <img
                                src={modular3}
                                alt="Building"
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay}></div>
                        </div>
                    </div>

                    {/*  */}
                    <div className={styles.advContainer}>
                        <div className={styles.advText}>
                            <p>
                                Our prefabricated structures are made with high-strength steel and insulated
                                panels for durability, safety, and energy efficiency. Built to withstand all
                                weather conditions, they provide corrosion resistance, insulation, fast installation,
                                low maintenance, and long-lasting performance with flexible and customizable designs.
                            </p>
                            <div className={styles.featureListWrap}>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Strong & Durable Structure</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Weather & Corrosion Resistance</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Energy Efficient Insulation</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Fast & Easy Installation</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Flexible & Low Maintenance Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* -----------------------Faqs------------------------ */}
            <section className={styles.faqSec}>
                <span className={styles.introLabel}>• FAQS</span>
                <div className={styles.faqHeader}>
                    <div className={styles.faqText}>
                        <h2>Frequently Asked<br /><span>Questions</span></h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p>Essential answers to common questions about clean room design, functionality, and benefits.</p>
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



            {/* ---------------------cta-------------------------- */}
            <section className={styles.cta}>
                <h2>Ready to Build Your Prefabricated modular building?</h2>
                <p>
                    Connect with our team to design and deliver durable, efficient, and fully customized
                    Prefabricated modular building solutions tailored to your storage needs.
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

export default PrefabModular;