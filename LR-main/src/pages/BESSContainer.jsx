import React from 'react'
import { useState } from 'react';
import styles from '../styles/BESSContainer.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight,  Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import bess1 from '../assets/BESS/bess1.png'

function BESSContainer() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "How is a BESS container designed for a specific project?",
            a: "The design is based on battery layout, MW/MWh capacity, equipment dimensions, HVAC, safety, and site requirements."
        },
        {
            q: "Can the internal layout be customized?",
            a: "Yes. Battery racks, equipment supports, cable routing, access areas, HVAC, and safety systems can be arranged to suit the project."
        },
        {
            q: "How does L&R support BESS transportation?",
            a: "Containers can be engineered with suitable lifting points, structural provisions, and transportation requirements."
        },
        {
            q: "Can BESS containers include HVAC provisions?",
            a: "Yes. HVAC mounting, airflow, ducting, drainage, cable routes, and service access can be incorporated."
        },
        {
            q: "What factors are considered for outdoor installation?",
            a: "Design can account for rain, dust, humidity, heat, wind, corrosion, solar exposure, and other site conditions."
        }
    ];
    return (
        <>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>BESS Container Solutions</span>
                    <h1 className={styles.mainTitle}>
                        Advanced BESS Container  <br />
                        <span>for Reliable Energy
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        Purpose-built Battery Energy Storage System (BESS) containers engineered for renewable energy,
                        industrial, commercial, and utility-scale applications.


                    </p>
                    <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
                        <span>Contact Us</span>
                        <ArrowRight className={styles.arrow} size={18} />
                    </button>
                </div>
            </section>



            <section className={styles.faqSec}>
                <span className={styles.introLabel}>• FAQS</span>
                <div className={styles.faqHeader}>
                    <div className={styles.faqText}>
                        <h2>Frequently Asked<br /><span>Questions</span></h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p>Find answers to common questions about BESS containers, engineering,
                        customization, safety and applications.</p>
                </div>
                <div className={styles.faqBody}>
                    <div className={styles.faqImg}>
                        <img src={bess1} alt="warehouse" />
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



            <section className={styles.cta}>
                <h2>Ready to Engineer Your Energy Storage Infrastructure?</h2>
                <p>
                    Whether you need a single custom container or a multi-MW utility-scale enclosure, our engineering team is ready to
                    review your project specifications and deliver an integration-ready solution.
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

export default BESSContainer;