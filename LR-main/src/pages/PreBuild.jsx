import React from 'react'
import styles from '../styles/PreBuild.module.css'
import { useState } from 'react';
import Header from '../components/common/Header';
import {
    ArrowRight, ArrowUpRight, Plus, X, Clock3,
    BrainCircuit,
    PencilRuler,
    ShieldCheck,
    Wrench,
    Expand,
    CheckCircle2
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import PreBuild1 from '../assets/Pre-Build/PreBuild/prebuild.png'
import PreBuild2 from '../assets/Pre-Build/PreBuild/prebuild1.png'
import PreBuild3 from '../assets/Pre-Build/PreBuild/prebuild2.png'
import card1 from '../assets/Pre-Build/PreBuild/card.png';
import card2 from '../assets/Pre-Build/PreBuild/card1.png';
import card3 from '../assets/Pre-Build/PreBuild/card3.png';
import card4 from '../assets/Pre-Build/PreBuild/card2.png';
import design from '../assets/Pre-Build/PreBuild/design.png'
import design1 from '../assets/Pre-Build/PreBuild/design1.png'
import user1 from '../assets/Pre-Build/PreBuild/user1.png'
import user2 from '../assets/Pre-Build/PreBuild/user2.png'
import user3 from '../assets/Pre-Build/PreBuild/user3.png'
import user4 from '../assets/Pre-Build/PreBuild/user4.png'
import Footer from '../components/common/Footer';




const faqs = [
    {
        q: "What is a Pre-Engineered Building (PEB)?",
        a: "A Pre-Engineered Building (PEB) is a steel structure manufactured in a factory and assembled on-site. It offers faster construction, durability, and cost-effective performance.",
    },
    {
        q: "How long does PEB construction take?",
        a: "PEB projects are completed much faster than conventional buildings due to factory fabrication. Installation is quick, reducing overall project timelines.",
    },
    {
        q: "Are PEB structures durable?",
        a: "Yes. PEB structures are built with high-quality steel and engineered to withstand harsh weather, corrosion, and heavy loads for long-term performance.",
    },
    {
        q: "Can PEB buildings be expanded later?",
        a: "Yes. PEB buildings are designed for easy future expansion, allowing additional bays, floors, or extensions as your business grows.",
    },
    {
        q: "What industries use PEB structures?",
        a: "PEB structures are widely used in manufacturing, warehousing, logistics, agriculture, commercial buildings, airports, and industrial facilities.",
    },
];


function PreBuild() {
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const industryProjects = [
        {
            title: "Industrial Buildings",
            desc: "Modern steel buildings designed for manufacturing and industrial operations. Built for durability, efficiency, and long-term performance.",
            img: card1,
        },
        {
            title: "Commercial Spaces",
            desc: "Custom-built commercial structures for retail, offices, and business operations. Designed to maximize space, functionality, and customer experience.",
            img: card2,
        },
        {
            title: "Institutional Buildings",
            desc: "Reliable steel buildings for schools, hospitals, and public institutions. Engineered for safety, strength, and efficient space utilization.",
            img: card3,
        },
        {
            title: "Agricultural Facilities",
            desc: "Durable agricultural buildings for farming, storage, and livestock operations. Designed to withstand harsh conditions and improve productivity.",
            img: card4,
        },
    ];


    const buildingProducts = [
        {
            title: "Multi-Storey Buildings",
            desc: "Steel multi-storey buildings designed for commercial and industrial projects. Built for maximum space utilization, strength, and flexibility.",
            img: user1,
        },
        {
            title: "Warehouses",
            desc: "Modern warehouse buildings for secure storage and smooth logistics operations. Designed with spacious layouts for efficient inventory management.",
            img: user2,
        },
        {
            title: "Industrial Sheds",
            desc: "High-quality industrial sheds built for manufacturing and production activities. Engineered for durability, efficiency, and long-term performance.",
            img: user3,
        },
        {
            title: "Cold Storage",
            desc: "Temperature-controlled cold storage facilities for preserving perishable goods. Ideal for food, pharmaceuticals, and agricultural products.",
            img: user4,
        },
    ];


    const benefits = [
        {
            id: 1,
            icon: <Clock3 size={34} strokeWidth={1.8} />,
            title: "Faster Construction",
            description:
                "Reduce overall project timelines with factory-fabricated components and rapid on-site installation.",
        },
        {
            id: 2,
            icon: <BrainCircuit size={34} strokeWidth={1.8} />,
            title: "Cost Efficient",
            description:
                "Optimized structural design minimizes steel consumption and lowers overall construction costs.",
            featured: true,
        },
        {
            id: 3,
            icon: <PencilRuler size={34} strokeWidth={1.8} />,
            title: "Flexible Design",
            description:
                "Custom spans, layouts, elevations, and structural configurations designed according to project needs.",
        },
        {
            id: 4,
            icon: <ShieldCheck size={34} strokeWidth={1.8} />,
            title: "High Durability",
            description:
                "Built using premium-grade steel components for superior strength and long service life.",
        },
        {
            id: 5,
            icon: <Wrench size={34} strokeWidth={1.8} />,
            title: "Low Maintenance",
            description:
                "Engineered for reduced maintenance requirements and long-term operational savings.",
        },
        {
            id: 6,
            icon: <Expand size={34} strokeWidth={1.8} />,
            title: "Future Expansion Ready",
            description:
                "PEB systems can be easily expanded or modified without major reconstruction work.",
        },
    ];

    return (
        <>
            <div className={styles.PreBuild}>
                <Header />

                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.topLabel}>L&R Pre-engineered</span>
                        <h1 className={styles.mainTitle}>
                            Pre-engineered<br />
                            <span>building</span>
                        </h1>
                        <p className={styles.heroDesc}>Modern pre-engineered steel buildings built for speed,
                            durability, and long-term performance.
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
                        <h2>L&R Cold  <span>Room Solutions</span></h2>
                        <div className={styles.introLine}></div>
                    </div>
                    <div className={styles.textSide}>
                        <div className={styles.imageCardWrapper}>
                            <img
                                src={PreBuild1}
                                alt="PEB Building"
                                className={styles.imageCard}
                            />

                            <div className={styles.sideAccent}></div>
                        </div>
                        {/* left */}
                        <div className={styles.sideLeft}>
                            <p>A Pre-Engineered Building (PEB) is a steel structure developed using a combination
                                of primary framing, secondary framing, roofing systems, wall cladding, and structural
                                accessories. All building components are precision-manufactured in a controlled factory
                                environment and assembled on-site for faster execution and improved quality.</p>
                            <p>we provide complete turnkey PEB solutions for industrial, commercial, institutional, and infrastructure
                                projects across India. Our engineering-focused approach ensures optimized steel usage, quicker project completion,
                                and cost-effective building systems tailored to client requirements.
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


                {/* PRODUCTS */}
                <section className={styles.showcase}>
                    <div className={styles.secHeader}>
                        <div className={styles.secText}>
                            <h2>Industrial Shed<br /><span>Project Showcase</span></h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p className={styles.secDesc}>Strong, scalable, and customizable industrial sheds built for heavy-duty performance and long-term reliability.</p>
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


                {/* Key Features of */}
                <div className={styles.PreBuildSection}>
                    <div className={styles.PreBuildFlex}>
                        <div className={styles.PreBuildText}>
                            <h2>Key Features of <br /> <span>Our PEB Structures</span> </h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p>Engineered for faster construction, durability, cost efficiency, flexible design, and
                            long-term performance across industrial and commercial projects.</p>
                    </div>
                    {/* cards */}
                    <div className={styles.benefitsGrid}>
                        {benefits.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.benefitCard} ${item.featured ? styles.featuredCard : ""
                                    }`}
                            >
                                <div
                                    className={`${styles.iconBox} ${item.featured ? styles.featuredIcon : ""
                                        }`}
                                >
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* STRENGTH BAND */}
                <section className={styles.mfgBand}>
                    <div className={styles.scrollWrap}>
                        <div className={styles.scrollTrack}>
                            <h1>Pre-engineered building</h1>

                        </div>
                    </div>

                    <div className={styles.mfgContainer}>
                        <div className={styles.mfgText}>
                            <h2>
                                Benefits of Pre- <br />
                                Engineered Buildings
                            </h2>
                            <p>
                                Pre-engineered buildings offer faster installation, durable performance, energy efficiency,
                                flexible designs, low maintenance, and reliable long-term structural strength for modern
                                industrial and commercial projects.
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


                {/* PRODUCTS */}
                <section className={styles.showcase}>
                    <div className={styles.secHeader}>
                        <div className={styles.secText}>
                            <h2>Our Pre-Engineered <br /><span>Building Products</span></h2>
                            <div className={styles.productsDivider}></div>
                        </div>
                        <p className={styles.secDesc}>Versatile steel building solutions designed for industrial,
                            commercial, institutional, agricultural, and specialized infrastructure projects.</p>
                    </div>
                    <div className={styles.expertiseGrid}>
                        {buildingProducts.map((item, index) => (
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


                {/* PEB Structures */}

                <div className={styles.PEBStructure}>
                    <div className={styles.PEBStructureTExt}>
                        <h2>Key Features of <br /><span>Our PEB Structures</span></h2>
                        <div className={styles.productsDivider}></div>
                    </div>

                    <div className={styles.PEBStructureFlex}>
                        <div className={styles.PEBStructurePara}>
                            <p>Modern PEB structures designed for faster construction, cost efficiency,
                                flexible layouts, high durability, reduced maintenance, and long-term performance
                                for industrial and commercial projects.</p>
                            <div className={styles.featureListWrap}>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Faster Construction</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Cost Efficient</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Flexible Design</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>High Durability</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Future Expansion Ready</p>
                                </div>

                            </div>
                        </div>
                        {/* image */}
                        <div className={styles.pebImageContainer}>
                            <img
                                src={PreBuild2}
                                alt="PEB Building"
                                className={styles.pebImage}
                            />

                            <div className={styles.pebImageAccent}></div>
                        </div>


                    </div>
                </div>


                {/* Why PEB Engineered */}

                <section className={styles.whyPEBEnginer}>
                    <div className={styles.whyPEBEnginerTitle}>
                        <h2>Why Choose Pre- <br /><span>Engineered Buildings</span></h2>
                        <div className={styles.productsDivider}></div>
                    </div>
                    <div className={styles.whyPEBEnginerFlex}>
                        <div className={styles.pebImageFrame}>
                            <img
                                src={PreBuild1}
                                alt="PEB Building"
                                className={styles.pebBuildingImage}
                            />

                            <div className={styles.pebSideStrip}></div>
                        </div>
                        <div className={styles.pebEnginerPara}>
                            <p>Pre-engineered buildings offer faster construction, cost-effective solutions, flexible designs,
                                and high structural durability for industrial, commercial, and infrastructure projects. Their
                                factory-manufactured components ensure precision, reduced construction time, and reliable long-term
                                performance.</p>
                            <p>Built with advanced engineering and quality manufacturing standards, PEB structures support quick
                                installation, low maintenance, future expansion, and complete turnkey execution for modern business requirements.</p>
                        </div>

                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.faqSec}>
                    <span className={styles.introLabel}>• FAQS</span>
                    <div className={styles.faqHeader}>
                        <div className={styles.faqText}>
                            <h2>Frequently Asked<br /><span>Questions</span></h2>
                            <div className={styles.FaqsLine}></div>
                        </div>
                        <p>Find answers to common questions about our warehouse solutions, design process, and performance benefits.</p>
                    </div>
                    <div className={styles.faqBody}>
                        <div className={styles.faqImg}>
                            <img src={PreBuild3} alt="warehouse" />
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



                {/* CTA */}
                <section className={styles.cta}>
                    <h2>Ready for Your Pre-engineered building?</h2>
                    <p>
                        Connect with our team to design and deliver compact, durable, and
                        fully Pre-engineered building solutions tailored to your site needs.
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
            </div>
        </>
    );
}

export default PreBuild;