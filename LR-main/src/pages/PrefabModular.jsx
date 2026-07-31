import React from 'react'
import { useState } from 'react';
import styles from '../styles/PrefabModular.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, Plus, X, ArrowUpRight, CheckCircle2, Factory,
    Sofa,
    Building2,
    Hospital, Hexagon,
    Leaf,
    Shield,
    Construction,
    Puzzle,
    Truck,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import modular1 from '../assets/PREFAB/PrefabModular/modular1.png'
import modular2 from '../assets/PREFAB/PrefabModular/modular2.png'
import modular3 from '../assets/PREFAB/PrefabModular/modular3.png'
import modular4 from '../assets/PREFAB/PrefabModular/modular4.png'
import design from '../assets/PREFAB/PrefabModular/design.png'
import design1 from '../assets/PREFAB/controllRoom/design1.png'
import card1 from '../assets/PREFAB/PrefabModular/card1.png';
import card2 from '../assets/PREFAB/PrefabModular/card2.png';
import card3 from '../assets/PREFAB/PrefabModular/card3.png';
import card4 from '../assets/PREFAB/PrefabModular/card4.jpg';


const benefitCards = [
    {
        id: 1,
        title: "Rapid Construction",
        description:
            "Prefab structures can be installed within days instead of months, enabling faster project handover.",
        icon: Hexagon,
    },
    {
        id: 2,
        title: "Reduced Construction Waste",
        description:
            "Controlled manufacturing significantly reduces material wastage and environmental impact.",
        icon: Leaf,
    },
    {
        id: 3,
        title: "Strong & Reliable Structures",
        description:
            "Engineered to withstand harsh weather conditions, corrosion, and heavy operational usage.",
        icon: Shield,
    },
    {
        id: 4,
        title: "Minimal Site Disruption",
        description:
            "Most manufacturing work is completed off-site, reducing noise, labor congestion, and construction disturbance.",
        icon: Construction,
    },
    {
        id: 5,
        title: "Custom Design Flexibility",
        description:
            "Available in multiple layouts, sizes, elevations, and interior configurations based on project requirements.",
        icon: Puzzle,
    },
    {
        id: 6,
        title: "Relocatable & Reusable",
        description:
            "Many prefab modular structures can be dismantled, transported, and reinstalled at different locations.",
        icon: Truck,
    },
];
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
    const cards = [
        {
            icon: <Factory size={42} strokeWidth={1.8} />,
            title: "Industrial Buildings",
            description:
                "Factory buildings, manufacturing units, production facilities, and warehouses are prefab structures for industrial performance.",
        },
        {
            icon: <Sofa size={42} strokeWidth={1.8} />,
            title: "Commercial Buildings",
            description:
                "Office spaces, retail outlets, showrooms, and commercial complexes are prefab structures for commercial use.",
            active: true,
        },
        {
            icon: <Building2 size={42} strokeWidth={1.8} />,
            title: "Residential Solutions",
            description:
                "Prefab homes, villas, staff accommodation, and modular housing are fast, cost-effective living solutions.",
        },
        {
            icon: <Hospital size={42} strokeWidth={1.8} />,
            title: "Institutional Buildings",
            description:
                "Schools, hospitals, healthcare centers, and government infrastructure are prefab structures for public facilities.",
        },
    ];


    const industryProjects = [
        {
            title: "Prefab Site Offices",
            desc: "Modern site offices designed for efficient workspaces and daily operations. Built for quick installation, durability, and long-lasting performance.",
            img: card1,
        },
        {
            title: "Portable Cabins",
            desc: "Portable cabins offering flexible spaces for offices, storage, and accommodation. Designed for easy relocation, durability, and reliable performance.",
            img: card2,
        },
        {
            title: "Labor Hutments",
            desc: "Comfortable labor hutments providing safe and practical workforce accommodation. Built for quick installation, strength, and long-term durability.",
            img: card3,
        },
        {
            title: "Prefabricated Toilets",
            desc: "Prefabricated toilets offering hygienic and efficient sanitation solutions. Designed for fast installation, easy maintenance, and reliable daily use.",
            img: card4,
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


            {/* ── Products ── */}
            <section className={styles.productsSec}>
                <div className={styles.productsInner}>
                    <div className={styles.productsHeader}>
                        <div className={styles.productText}>
                            <h2>
                               Our Prefabricated<br />
                                <span>Modular Building Solutions</span>
                            </h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p className={styles.productsSubtext}>
                           We offer durable, fast-to-install, and cost-effective modular structures for 
                           site setups, worker housing, industrial needs, and specialized applications.
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



            {/* ── Structural Strength & Safety ── */}
            <section className={styles.mfgBand}>
                <div className={styles.scrollWrap}>
                    <div className={styles.scrollTrack}>
                        <h1>Prefabricated modular building</h1>
                    </div>
                </div>

                <div className={styles.mfgContainer}>
                    <div className={styles.mfgText}>
                        <h2>
                            What is Modular<br />
                            Construction?
                        </h2>
                        <p>
                            Modular construction is an advanced form of prefabrication where complete
                            building modules are manufactured off-site with finished interiors, electrical
                            systems, plumbing, insulation, and structural components already integrated.The
                            modules are transported to the site and assembled into a complete building,
                            significantly reducing project completion time and site disruption.
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


            {/* ================Modular Applictaions==================== */}
            <section className={styles.modularBuild}>
                <div className={styles.modularBuildFlex}>
                    <div className={styles.modularBuildText}>
                        <h2>Benefits of Prefabricated <br /><span>Modular Buildings</span></h2>
                        <div className={styles.modularBuildLine}></div>
                    </div>
                    <p>Prefab modular buildings offer fast installation, low waste, strong durability, flexible design, and easy
                        relocation, making them cost-effective and efficient solutions.</p>
                </div>
                <div className={styles.prefabGrid}>
                    {benefitCards.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.id}
                                className={styles.benefitCard}
                            >
                                <span className={styles.hoverLayer}></span>

                                <div className={styles.iconWrapper}>
                                    <Icon
                                        className={styles.cardIcon}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                <div className={styles.contentArea}>
                                    <h3 className={styles.cardTitle}>
                                        {item.title}
                                    </h3>

                                    <p className={styles.cardDescription}>
                                        {item.description}
                                    </p>
                                </div>

                                <span className={styles.cornerGlow}></span>
                            </article>
                        );
                    })}
                </div>
            </section>


            {/* --------------------Applications----------------------- */}
            <section className={styles.ApplictaionBuild}>
                <div className={styles.ApplictaionBuildFlex}>
                    <div className={styles.ApplictaionBuildText}>
                        <h2>Prefabricated Building <br /><span>Applications</span></h2>
                        <div className={styles.ApplicationLine}></div>
                    </div>
                    <p>Prefabricated buildings are used in industrial, commercial, residential, and institutional
                        sectors for fast, durable, and cost-effective construction solutions.</p>
                </div>

                <div className={styles.industryWrapper}>
                    {cards.map((item) => (
                        <div className={styles.industryCard} key={item.id}>
                            <div className={styles.hoverFill}></div>

                            <div className={styles.iconHolder}>
                                {item.icon}
                            </div>

                            <h3 className={styles.cardHeading}>
                                {item.title}
                            </h3>

                            <p className={styles.cardText}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </section>



            {/* ── SECTION 6: WHY CHOOSE ROOFTOP PREFAB ROOMS ── */}
            <section className={styles.SolarEpic}>
                <div className={styles.solarEpicTitle}>
                    <h2>Why Prefabricated  <span>Construction is the Future</span></h2>
                    <div className={styles.FaqsLine}></div>
                </div>
                <div className={styles.SolarEpicFLex}>
                    {/*  */}
                    <div className={styles.solartext}>
                        <p>Prefabricated modular construction is rapidly transforming the building industry by offering faster,
                            smarter, and more sustainable solutions compared to traditional methods. With factory-controlled
                            manufacturing, it ensures superior quality, reduced project timelines, minimal material waste,
                            and improved energy efficiency, making it a highly reliable choice for modern infrastructure development.</p>
                        <p>As demand for efficient and flexible construction grows, prefab buildings are becoming the preferred solution
                            across industrial, commercial, residential, and institutional sectors. L&R Green Private Limited delivers
                            advanced prefabricated modular building systems with complete end-to-end support, ensuring durable,
                            cost-effective, and customized solutions for every project requirement.</p>
                    </div>
                    <div className={styles.previewCard}>
                        <div className={styles.mediaFrame}>
                            <div className={styles.sidebarTab}></div>
                            <img
                                src={modular4}
                                alt="Building"
                                className={styles.mediaItem}
                            />
                            <div className={styles.backdropOverlay}></div>
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
                    <p>Get answers to common questions about L&R industrial sheds, including design, durability, and installation.</p>
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