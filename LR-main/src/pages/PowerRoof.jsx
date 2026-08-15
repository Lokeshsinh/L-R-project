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
    SunMedium,
    Maximize2,
    Layers3,
    Building2,
    Leaf,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import power1 from '../assets/solar/PowerRoof/power1.png'
import power2 from '../assets/solar/PowerRoof/power2.png'
import power3 from '../assets/solar/PowerRoof/power3.png'
import power4 from '../assets/solar/PowerRoof/power4.png'
import design from '../assets/solar/PowerRoof/design.png'
import design1 from '../assets/solar/PowerRoof/design1.png'
import card1 from '../assets/solar/PowerRoof/card1.png';
import card2 from '../assets/solar/PowerRoof/card2.png';
import card3 from '../assets/solar/PowerRoof/card3.png';
import card4 from '../assets/solar/PowerRoof/card4.png';
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
    const whyChooseItems = [
        {
            icon: Maximize2,
            title: "Smart Use of Space",
            description:
                "Make better use of available roof areas by turning unused space into an opportunity for clean solar energy generation and efficient power use.",
        },
        {
            icon: Layers3,
            title: "Integrated Roof & Solar Design",
            description:
                "Roofing and solar requirements are considered together from the beginning, creating a more coordinated and practical solution for your project needs.",
        },
        {
            icon: Building2,
            title: "Built for Diverse Applications",
            description:
                "Designed for industrial, commercial, and infrastructure projects, including sheds, warehouses, PEB buildings, containers, and parking structures across various applications.",
        },
        {
            icon: Leaf,
            title: "Future-Ready Energy Solution",
            description:
                "Create infrastructure prepared for renewable energy integration and the growing demand for smarter, more sustainable power solutions in the years ahead.",
        },
    ];
    const industryProjects = [
        {
            title: "Industrial Sheds & Factories",
            desc: "Convert large roof areas into productive spaces for solar energy generation and efficient power use while supporting long-term energy requirements.",
            img: card1,
        },
        {
            title: "Warehouses & PEB Buildings",
            desc: "Utilize expansive rooftops to support renewable energy generation while making better use of available space for modern industrial operations.",
            img: card2,
        },
        {
            title: "Prefabricated & MS Containers",
            desc: "Create solar-ready containers for site offices, accommodation, stores, control rooms, and other applications with practical energy-ready infrastructure solutions.",
            img: card3,
        },
        {
            title: "Solar Parking & Custom Structures",
            desc: "Combine vehicle protection with solar power generation across parking sheds and customized commercial or industrial structures for specific project needs.",
            img: card4,
        },
    ];
    return (
        <>
            <Header />

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>YOUR ROOF. YOUR ENERGY. YOUR POWER.</span>
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


            {/* ── Products ── */}
            <section className={styles.productsSec}>
                <div className={styles.productsInner}>
                    <div className={styles.productsHeader}>
                        <div className={styles.productText}>
                            <h2>
                                Solar-Ready Solutions<br />
                                <span>for Multiple Structures</span>
                            </h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p className={styles.productsSubtext}>
                            Flexible roofing solutions designed to integrate solar power across
                            industrial, commercial, and prefabricated structures.
                        </p>
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
                </div>
            </section>

            {/* ---------------Our Partner---------- */}
            <section className={styles.SolarEpic}>
                <div className={styles.solarEpicTitle}>
                    <h2>One Partner<br /><span>Multiple Solutions.</span></h2>
                    <div className={styles.FaqsLine}></div>
                </div>
                <div className={styles.SolarEpicFLex}>
                    <div className={styles.solartext}>
                        <p>With L&R Prefab Solar, multiple capabilities come together under one roof. From prefabricated
                            structures, MS containers, industrial sheds, and PEB buildings to roofing systems and solar-ready
                            solutions, we provide practical solutions across diverse project requirements. Our expertise
                            allows every element to be considered with performance, functionality, and long-term value in mind.</p>
                        <p>Our integrated approach brings structural planning and renewable energy considerations together
                            from the beginning. By connecting these capabilities, we help create coordinated, efficient,
                            and future-ready infrastructure designed around your project needs. One partner, multiple
                            capabilities, and a smarter approach to modern infrastructure, built for evolving energy
                            demands and sustainable growth. Our solutions are designed to deliver lasting value
                            across every stage of your project.</p>
                    </div>

                    <div className={styles.photoCard}>
                        <div className={styles.dotPattern}></div>
                        <img
                            src={power3}
                            alt="PEB Building"
                            className={styles.mediaImage}
                        />
                        <div className={styles.accentPillar}></div>
                    </div>
                </div>
            </section>




            {/* ── SECTION 4: FINAL TESTING & COMMISSIONING ── */}
            <section className={styles.mfgBand}>
                <div className={styles.scrollWrap}>
                </div>

                <div className={styles.mfgContainer}>
                    <div className={styles.mfgText}>
                        <h2>
                            Manufacturing Smarter <br />
                            Solar-Ready Infrastructure
                        </h2>
                        <p>
                            L&R Prefab Solar combines advanced fabrication expertise with solar-ready roofing solutions
                            to create durable structures for industrial and commercial applications, including prefabricated
                            structures, MS containers, industrial sheds, PEB buildings, and solar-integrated roofing systems,
                            with a focus on quality, reliability, and project-specific requirements.
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

            {/* ----------------Why Choose---------------- */}

            <section className={styles.ourProcess}>
                <div className={styles.ourProcessFLex}>
                    <div class={styles.ourProcessText}>
                        <h2>Why Choose <br /> <span>L&R PowerRoof™?</span></h2>
                        <div className={styles.ourProcessLine}></div>
                    </div>
                    <p>Smart, solar-ready roofing solutions designed for efficient, sustainable, and future-ready infrastructure.</p>
                </div>
                <div className={styles.chooseRoofCards}>
                    {whyChooseItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article
                                className={styles.chooseRoofCard}
                                key={item.title}
                            >
                                <div className={styles.chooseRoofShape}></div>
                                <div className={styles.chooseRoofIcon}>
                                    <Icon strokeWidth={1.5} />
                                </div>
                                <div className={styles.chooseRoofContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.chooseRoofLine}></div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* --------------Our PowerRoof----------------- */}
            <section className={styles.section}>
                <div className={styles.headerGroup}>
                    <h2 className={styles.heading}>
                        More Than a Roof.<br />
                        <span className={styles.highlightText}>A Power Solution.</span>
                    </h2>
                    <div className={styles.dividerLine}></div>
                </div>

                <div className={styles.contentLayout}>
                    <div className={styles.mediaWrapper}>
                        <div className={styles.patternGrid}></div>
                        <img
                            src={power4}
                            alt="PEB Building"
                            className={styles.heroImage}
                        />
                        <div className={styles.sideBar}></div>
                    </div>
                    <div className={styles.descriptionColumn}>
                        <p>
                            The future of infrastructure is about making every suitable space work smarter. L&R PowerRoof™
                            brings together our expertise in prefabrication, PEB structures, industrial roofing, and solar
                            applications to create practical, solar-ready solutions for modern businesses. Our approach
                            focuses on combining structural performance with renewable energy opportunities from the initial design stage.
                        </p>
                        <p>
                            Whether you are planning a warehouse, industrial shed, PEB building, parking shed, container,
                            or site office, our team can explore a roofing solution designed around your project requirements.
                            By integrating roofing and solar considerations, we help create smarter infrastructure that supports
                            efficiency, sustainability, and long-term energy goals. These solutions are designed to adapt to the
                            evolving needs of modern businesses. Every project is planned with practicality, performance, and
                            future energy possibilities in mind.
                        </p>
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