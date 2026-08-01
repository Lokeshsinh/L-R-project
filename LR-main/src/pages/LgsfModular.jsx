import React from 'react'
import { useState } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styles from '../styles/LgsfModular.module.css'
import {
    ArrowRight, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import modular1 from '../assets/LGFS/LgsfModular/modular1.png'


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