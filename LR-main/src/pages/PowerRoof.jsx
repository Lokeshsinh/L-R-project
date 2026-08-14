import React from 'react'
import styles from '../styles/PowerRoof.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useState } from 'react';
import {
    ArrowRight, Plus, X,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import power1 from '../assets/solar/PowerRoof/power1.png'
function PowerRoof() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    const faqs = [
        {
            q: "What is L&R PowerRoof™?",
            a: "L&R PowerRoof™ is a solar-ready roofing concept by L&R Prefab Solar, designed for industrial, commercial, prefabricated, and infrastructure applications."
        },
        {
            q: "Where can L&R PowerRoof™ be used?",
            a: "It can be used for industrial sheds, warehouses, PEB buildings, containers, site offices, solar parking sheds, and other suitable structures."
        },
        {
            q: "Can solar panels be installed over the roof structure?",
            a: "Yes. L&R PowerRoof™ is designed to support solar panel integration based on structural and project requirements."
        },
        {
            q: "What are the benefits of a solar-ready roof?",
            a: "It helps utilize available space, support clean energy generation, and integrate roofing and solar requirements from the start."
        },
        {
            q: "Can L&R Prefab Solar customize the PowerRoof™ solution?",
            a: "Yes. Solutions can be customized based on the structure, application, space, and solar installation requirements."
        }
    ];
    return (
        <>
            <Header />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>Your Roof. Your Energy. Your Power.</span>
                    <h1 className={styles.mainTitle}>
                        Solar-Ready Roofing  <br />
                        <span>for Smarter Infrastructure
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        L&R PowerRoof™ by L&R Prefab Solar combines practical roofing structures with solar-ready design
                        for containers, warehouses, industrial sheds, PEB buildings, parking sheds, site offices, and more.


                    </p>
                    <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
                        <span>Contact Us</span>
                        <ArrowRight className={styles.arrow} size={18} />
                    </button>
                </div>
            </section>



            {/* -------------FAQS--------------- */}
            <section className={styles.faqSec}>
                <span className={styles.introLabel}>• FAQS</span>
                <div className={styles.faqHeader}>
                    <div className={styles.faqText}>
                        <h2>Frequently Asked<br /><span>Questions</span></h2>
                        <div className={styles.FaqsLine}></div>
                    </div>
                    <p>Find answers to common questions about L&R PowerRoof™, our solar-ready roofing
                        solutions, applications, benefits, and customized solutions for modern infrastructure.</p>
                </div>
                <div className={styles.faqBody}>

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
                    <div className={styles.faqImg}>
                        <img src={power1} alt="warehouse" />
                    </div>
                </div>
            </section>




            {/* -------------CTA------------------- */}
            <section className={styles.cta}>
                <h2>Ready to Turn Your Roof Into Power?</h2>
                <p>
                    Planning a warehouse, industrial shed, PEB, container, site office, or parking shed? Let L&R Prefab
                    Solar create a smart, solar-ready roofing solution for your project.
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

export default PowerRoof;