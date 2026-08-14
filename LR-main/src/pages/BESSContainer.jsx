import React from 'react'
import { useState } from 'react';
import styles from '../styles/BESSContainer.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, Plus, X, ArrowUpRight, CheckCircle2, ClipboardList,
    LayoutDashboard,
    Factory,
    Truck,
    Sun,
    Wind,
    Building2,
    Network,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import bess1 from '../assets/BESS/bess1.png'
import bess2 from '../assets/BESS/bess2.png'
import bess3 from '../assets/BESS/bess3.png'
import bess4 from '../assets/BESS/bess4.png'
import bess5 from '../assets/BESS/bess5.png'
import card1 from '../assets/BESS/card1.png';
import card2 from '../assets/BESS/card2.png';
import card3 from '../assets/BESS/card3.png';
import card4 from '../assets/BESS/card4.png';
import design from '../assets/BESS/design.png';
import design1 from '../assets/BESS/design1.png';

function BESSContainer() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const processSteps = [
        {
            number: "01",
            title: "Requirement & Planning",
            description:
                "Understand project capacity, battery technology, site conditions, equipment requirements and system data.",
            icon: ClipboardList,
        },
        {
            number: "02",
            title: "Engineering & Design",
            description:
                "Develop equipment layouts, access, cable routing, HVAC, safety arrangements and structural engineering.",
            icon: LayoutDashboard,
        },
        {
            number: "03",
            title: "Fabrication & Integration",
            description:
                "Complete steel fabrication, welding, panels, supports, doors, coating, equipment mounting and system integration.",
            icon: Factory,
        },
        {
            number: "04",
            title: "Inspection & Delivery",
            description:
                "Inspect the completed enclosure and prepare it for transportation, site installation and final deployment.",
            icon: Truck,
        },
    ];

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


    const applications = [
        {
            id: "01",
            title: "Solar + BESS",
            description:
                "Store solar generation and make energy available when required.",
            icon: Sun,
        },
        {
            id: "02",
            title: "Wind + BESS",
            description:
                "Improve flexibility and energy management for wind-generation projects.",
            icon: Wind,
        },
        {
            id: "03",
            title: "Commercial & Industrial",
            description:
                "Support peak-demand management, backup, energy shifting and renewable integration.",
            icon: Building2,
        },
        {
            id: "04",
            title: "Utility-Scale BESS",
            description:
                "Support large-scale grid and energy-storage applications.",
            icon: Network,
        },
    ];


    const industryProjects = [
        {
            title: "BESS Enclosures",
            desc: "Purpose-built steel enclosures for battery energy-storage equipment.",
            img: card1,
        },
        {
            title: "Battery Rack Containers",
            desc: "Containers configured for battery racks and associated systems.",
            img: card2,
        },
        {
            title: "Electrical Equipment Containers",
            desc: " Solutions for PCS, switchgear, control panels and auxiliary equipment.",
            img: card3,
        },
        {
            title: "Integrated BESS Containers",
            desc: "Containerized solutions accommodating multiple BESS subsystems.",
            img: card4,
        },
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


            {/* -------------Intro------------- */}
            <section className={styles.introSec}>
                <div className={styles.secTitle}>
                    <h2>
                        What Is a   <br />
                        <span>BESS Container?</span>
                    </h2>
                    <div className={styles.introLine} />
                </div>

                <div className={styles.introContainer}>
                    <div className={styles.introText}>
                        <p>
                            A BESS container is a specially engineered enclosure designed to safely house battery-storage equipment
                            and its associated systems. Unlike a standard shipping container, a purpose-built BESS enclosure is
                            designed around the specific requirements of the energy storage system, including equipment dimensions,
                            structural loads, HVAC performance, cable routing, fire safety, ventilation, transportation, lifting,
                            and maintenance access.
                        </p>
                        <p>
                            Every BESS container is designed around the complete system and site requirements. This includes battery
                            rack configuration, equipment dimensions and weight, HVAC and thermal management, electrical systems and
                            cable routing, fire and safety provisions, transportation and lifting requirements, site and environmental
                            conditions, and convenient maintenance and service access. The result is a reliable, efficient, and
                            purpose-built enclosure ready for demanding energy storage applications.
                        </p>
                        <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                            <span>Get Contact</span>

                            <span className={styles.iconWrap}>
                                <ArrowUpRight className={styles.icon1} size={18} />
                                <ArrowUpRight className={styles.icon2} size={18} />
                            </span>
                        </button>
                    </div>

                    <div className={styles.heroCard}>
                        <div className={styles.dotPattern}></div>
                        <div className={styles.accentBar}></div>

                        <div className={styles.mediaContainer}>
                            <img src={bess2} alt="Worker" className={styles.mediaImage} />
                        </div>
                    </div>
                </div>
            </section>


            {/* ── Products ── */}
            <section className={styles.productsSec}>
                <div className={styles.productsInner}>
                    <div className={styles.productsHeader}>
                        <div className={styles.productText}>
                            <h2>
                                Engineered for Your <br />
                                <span>BESS Architecture</span>
                            </h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p className={styles.productsSubtext}>
                            Every energy-storage project is unique. L&R develops customized BESS containers around
                            your battery configuration, equipment and project requirements.
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



            {/* ------------Serviceability-------------- */}
            <section className={styles.advSec}>
                <div className={styles.secTitle}>
                    <h2>
                        Purpose-Built <br />
                        <span>BESS Containers</span>
                    </h2>
                    <div className={styles.introLine}></div>
                </div>
                <div className={styles.advFlex}>
                    <div className={styles.frameContainer}>
                        <div className={styles.dotGrid}></div>
                        <div className={styles.accentBackdrop}></div>

                        <div className={styles.imageCard}>
                            <img src={bess3} alt="Worker" className={styles.cardPhoto} />
                        </div>
                    </div>

                    <div className={styles.advContainer}>
                        <div className={styles.advText}>
                            <p>
                                A BESS container is more than a standard shipping container. It is a specially engineered enclosure designed around
                                battery racks, electrical equipment, thermal management, fire-safety systems, controls and project-specific requirements.
                            </p>
                            <div className={styles.featureListWrap}>
                                <div className={styles.featureRow}>

                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Battery Rack Integration</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>HVAC & Thermal Management</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Fire & Safety Systems</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Electrical & Cable Integration</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Maintenance & Service Access</p>
                                </div>
                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Transportation & Environmental Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* -------------Applications--------------- */}
            <section className={styles.bessContainer}>
                <div className={styles.bessContainerFlex}>
                    <div className={styles.bessContainerText}>
                        <h2>Energy Storage for <br /> <span>Multiple Applications</span></h2>
                        <div className={styles.bessContainerLine}></div>
                    </div>
                    <p>Our containerized BESS infrastructure can support a wide range of
                        renewable-energy and power-management applications.</p>
                </div>
                <div className={styles.applicationGrid}>
                    {applications.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article className={styles.applicationCard} key={item.id}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.hoverShape}></div>
                            </article>
                        );
                    })}
                </div>

            </section>


            {/* ── SECTION 4: FINAL TESTING & COMMISSIONING ── */}
            <section className={styles.mfgBand}>
                <div className={styles.scrollWrap}>
                </div>

                <div className={styles.mfgContainer}>
                    <div className={styles.mfgText}>
                        <h2>
                            Precision Manufacturing for  <br />
                            Reliable Energy Storage
                        </h2>
                        <p>
                            L&R Prefab Solar India Private Limited combines engineering expertise with controlled
                            prefab manufacturing to deliver robust, customized BESS containers. From steel fabrication
                            and structural assembly to equipment integration, HVAC provisions, cable management and
                            protective finishing, every enclosure is manufactured with a focus on strength, accuracy,
                            quality and long-term performance.
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



            {/* ------------------BESS Conatiner------------- */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <h2>
                        Engineered for Safety, <br />
                        <span>Performance & Serviceability</span>
                    </h2>
                    <div className={styles.divider}></div>
                </div>
                <div className={styles.contentWrapper}>

                    <div className={styles.textContainer}>
                        <div className={styles.descriptionBlock}>
                            <p>
                                Our BESS container design considers the operating environment of the energy-storage system.
                                From structural strength and layout to HVAC, cable routing and safety interfaces, every
                                element is developed around project requirements.
                            </p>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Structural Engineering</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Equipment Layout</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Thermal Management</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Cable Management</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Fire & Safety Systems</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconContainer}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureTitle}>Ventilation & Environmental Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visualContainer}>
                        <div className={styles.patternBackground}></div>
                        <div className={styles.accentBar}></div>

                        <div className={styles.imageWrapper}>
                            <img src={bess4} alt="Worker" className={styles.image} />
                        </div>
                    </div>


                </div>
            </section>

            {/* -----------------Process--------------------- */}
            <section className={styles.besApplications}>
                <div className={styles.besApplicationsFlex}>
                    <div className={styles.besAplicationText}>
                        <h2>Our BESS Container<br /> <span>Manufacturing Process</span></h2>
                        <div className={styles.bssLines}></div>
                    </div>
                    <p>L&R follows a structured process from project requirement analysis through engineering, manufacturing, inspection and delivery.</p>
                </div>

                <div className={styles.processGrid}>
                    {processSteps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div className={styles.processCard} key={step.number}>
                                <div className={styles.cardTop}>
                                    <span className={styles.stepNumber}>{step.number}</span>

                                    <div className={styles.iconBoxs}>
                                        <Icon size={32} strokeWidth={1.8} />
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>

                                <div className={styles.cardLine}></div>
                            </div>
                        );
                    })}
                </div>

            </section>



            {/* ------------Why L&R BESS CONtainer----------- */}
            <section className={styles.SolarEpic}>
                <div className={styles.solarEpicTitle}>
                    <h2>Why Choose L&R <br /><span>BESS Containers?</span></h2>
                    <div className={styles.FaqsLine}></div>
                </div>
                <div className={styles.SolarEpicFLex}>
                    <div className={styles.mediaBox}>
                        <div className={styles.dotGrid}></div>
                        <div className={styles.sideAccent}></div>

                        <div className={styles.frameHolder}>
                            <img src={bess5} alt="Worker" className={styles.featurePhoto} />
                        </div>
                    </div>
                    <div className={styles.solartext}>
                        <p>As renewable energy continues to expand, reliable energy-storage infrastructure is becoming
                            increasingly important. L&R Prefab Solar India Private Limited delivers professionally
                            engineered and customizable BESS container solutions designed around actual equipment,
                            project requirements and site conditions. Our solutions combine robust construction,
                            practical design and integration-ready infrastructure to support dependable energy-storage projects.</p>
                        <p>With prefab manufacturing expertise, flexible configurations and integration-ready solutions
                            for battery, electrical, HVAC and safety systems, L&R focuses on structural accuracy, quality
                            workmanship, reliable finishing and project-specific engineering. From solar and C&I applications
                            to microgrids and utility-scale projects, we provide robust infrastructure built to support the
                            evolving energy-storage industry.</p>
                    </div>

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
                    <p>Find answers to common questions about BESS containers, engineering,
                        customization, safety and applications.</p>
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
                        <img src={bess1} alt="warehouse" />
                    </div>
                </div>
            </section>



            {/* -------------CTA------------------- */}
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