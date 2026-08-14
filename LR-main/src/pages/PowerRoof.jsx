import React from 'react'
import styles from '../styles/PowerRoof.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useState } from 'react';
import {
    ArrowRight, Plus, X, ArrowUpRight,
    ClipboardList,
    PenTool,
    Settings,
    SunMedium
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import power1 from '../assets/solar/PowerRoof/power1.png'
import power2 from '../assets/solar/PowerRoof/power2.png'
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


    const processData = [
        {
            number: "01",
            icon: ClipboardList,
            title: "Understand Your Requirements",
            description:
                "We begin by understanding your structure, application, available space, and solar energy requirements to define the right project approach."
        },
        {
            number: "02",
            icon: PenTool,
            title: "Design & Planning",
            description:
                "Our team develops the roofing concept while considering structural requirements and solar integration for a practical, coordinated design."
        },
        {
            number: "03",
            icon: Settings,
            title: "Engineering & Execution",
            description:
                "The solution is engineered and prepared for practical implementation, with attention to quality and project requirements at every stage of execution."
        },
        {
            number: "04",
            icon: SunMedium,
            title: "Solar-Ready Delivery",
            description:
                "We deliver a coordinated roofing solution designed to support solar installation and future energy needs while meeting your project expectations."
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


            {/* -------------Intro------------- */}
            <section className={styles.introSec}>
                <div className={styles.secTitle}>
                    <h2>
                        Roofing Designed With<br />
                        <span>Solar in Mind</span>
                    </h2>
                    <div className={styles.introLine} />
                </div>

                <div className={styles.introContainer}>
                    <div className={styles.mediaContainer}>
                        <div className={styles.dotGrid}></div>
                        <img
                            src={power2}
                            alt="PEB Building"
                            className={styles.primaryPhoto}
                        />
                        <div className={styles.verticalPill}></div>
                    </div>
                    <div className={styles.introText}>
                        <p>
                            Traditionally, roofing and solar installations are planned as separate projects, often requiring
                            separate design and installation considerations. L&R PowerRoof™ brings these elements together
                            from the beginning, combining structural design, roofing requirements, and solar integration
                            into one coordinated approach.
                        </p>
                        <p>
                            Our concept makes better use of available roof space while preparing suitable structures for renewable
                            energy generation. By considering roofing and solar requirements together, we create practical solutions
                            tailored to warehouses, industrial sheds, PEB buildings, containers, parking sheds, site offices, and
                            other applications. This integrated approach supports smarter planning and more efficient use of
                            infrastructure. It also helps create future-ready structures designed around evolving energy needs.
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



            {/* -------------Process ---------------- */}
            <section className={styles.whyPowerRoof}>
                <div className={styles.whyPowerRoofFlex}>
                    <div className={styles.whyPowerRoofText}>
                        <h2>Designed for Energy<br /> <span>Built for Performance.</span></h2>
                        <div className={styles.whyPowerRoofLine}></div>
                    </div>
                    <p>A smarter approach to roofing and solar integration, creating practical, 
                        reliable, and future-ready solutions for modern infrastructure.</p>
                </div>

                <div className={styles.cardGrid}>
                    {processData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className={styles.chooseCard}
                                key={item.number}
                            >
                                <span className={styles.bgNumber}>
                                    {item.number}
                                </span>

                                <div className={styles.topLine}></div>
                                <div className={styles.cardTop}>
                                    <span className={styles.cardNumber}>
                                        {item.number}
                                    </span>
                                    <div className={styles.iconCircle}>
                                        <Icon
                                            size={27}
                                            strokeWidth={1.7}
                                        />
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>
                                        {item.title}
                                    </h3>

                                    <div className={styles.divider}></div>

                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                {/* Decorative Corner */}
                                <div className={styles.cornerShape}></div>
                                {/* Hover Circle */}
                                <div className={styles.hoverCircle}></div>

                            </article>
                        );
                    })}
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