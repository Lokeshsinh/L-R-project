import React from 'react'
import { useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
import styles from '../styles/HomeContainer.module.css'
import {
    ArrowRight, ArrowUpRight,  Box, Plus, X, Home,
    Building2,
    BriefcaseBusiness,
    BedDouble,
    ShoppingBag,
    ShieldCheck,
    History,
    LayoutGrid,
    Headset,
    CheckCircle2
} from "lucide-react";
import containerImg from '../assets/conatiners/HomeConatiner/container1.png'
import card1 from '../assets/conatiners/HomeConatiner/card1.png';
import card2 from '../assets/conatiners/HomeConatiner/card2.png';
import card3 from '../assets/conatiners/HomeConatiner/card3.png';
import card4 from '../assets/conatiners/HomeConatiner/card4.png';
import design from '../assets/conatiners/HomeConatiner/design.png';
import design1 from '../assets/conatiners/HomeConatiner/design1.png';
import faq from '../assets/conatiners/HomeConatiner/read.png';
import HomeContainers  from '../assets/conatiners/HomeConatiner/homecontainer.png'

function HomeContainer() {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const cards = [
        {
            icon: ShieldCheck,
            title: "Strong MS Structure",
            desc: "Built using premium-quality mild steel for durability, safety, and long-lasting performance.",
        },
        {
            icon: History,
            title: "Fast Installation",
            desc: "Quick manufacturing and rapid on-site installation for faster project completion.",
        },
        {
            icon: LayoutGrid,
            title: "Custom Home Designs",
            desc: "Flexible layouts and interior options designed to match your space requirements.",
        },
        {
            icon: Headset,
            title: "Complete Support",
            desc: "End-to-end solutions with installation, maintenance, and long-term AMC support.",
        },
    ];

    const faqs = [
        {
            id: 0,
            q: "What are Modular MS Container Homes?",
            a: "Modular MS Container Homes are prefabricated steel structures designed for residential, commercial, and industrial use. They offer durability, quick installation, and cost-effective construction.",
        },
        {
            id: 1,
            q: "Do you provide installation services?",
            a: "Yes. We provide complete transportation, on-site installation, and commissioning services to ensure a smooth and hassle-free setup.",
        },
        {
            id: 2,
            q: "Can the container structures be customized?",
            a: "Yes. We customize layouts, interiors, insulation, doors, windows, electrical systems, plumbing, and finishes to meet your project requirements.",
        },
        {
            id: 3,
            q: "Are the structures weather resistant?",
            a: "Yes. Our container structures are manufactured using high-quality steel and protective coatings to withstand harsh weather conditions and ensure long-term durability.",
        },
        {
            id: 4,
            q: "Do you offer maintenance services?",
            a: "Yes. We provide maintenance, repair, and after-sales support to keep your modular container structures in excellent condition throughout their lifespan.",
        },
    ];

    const industryProjects = [
        {
            title: "Modular Living Solutions",
            desc: "Modern modular living containers designed for comfortable residential spaces. Built for durability, convenience, and quick installation.",
            img: card1,
        },
        {
            title: "Office & Workspace Solutions",
            desc: "Portable office containers for productive and efficient work environments. Ideal for construction, industrial, and commercial projects.",
            img: card2,
        },
        {
            title: "Storage & Security Solutions",
            desc: "Secure storage containers for tools, equipment, and valuable materials. Designed for maximum protection and organized space utilization.",
            img: card3,
        },
        {
            title: "Modular Infrastructure Solutions",
            desc: "Custom modular containers for offices, accommodations, and utility spaces. Engineered for flexibility, durability, and rapid deployment.",
            img: card4,
        },
    ];

    const features = [
        {
            icon: Home,
            title: "Single Unit Container Homes",
            desc: "Compact modular homes designed for personal living and temporary accommodation.",
        },
        {
            icon: Building2,
            title: "Multi-Unit Modular Structures",
            desc: "Expandable modular housing solutions for large residential and industrial projects.",
        },
        {
            icon: BriefcaseBusiness,
            title: "Portable Office Containers",
            desc: "Functional office spaces equipped with lighting, insulation, and workspace interiors.",
        },
        {
            icon: BedDouble,
            title: "Site Accommodation Units",
            desc: "Portable site living spaces for engineers, workers, and project staff.",
        },
        {
            icon: Box,
            title: "Storage & Utility Containers",
            desc: "Secure storage containers available in multiple sizes and configurations.",
        },
        {
            icon: ShoppingBag,
            title: "Modular Commercial Spaces",
            desc: "Portable modular structures suitable for shops, cafeterias, and business operations.",
        },
    ];

    return (
        <>
            <div className={styles.wrapper}>
                <Header />

                {/* ── Hero ── */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <span className={styles.topLabel}>L&R Green PVT LDT</span>
                        <h1 className={styles.mainTitle}>
                            Home  MS <br />
                            <span>Conatiners</span>
                        </h1>
                        <p className={styles.heroDesc}>Strong, durable, and ready-to-install Modular
                            MS Container Homes designed for residential, commercial, and industrial use.</p>
                        <button className={styles.btnWhite}>
                            <span>Contact Us</span>
                            <ArrowRight className={styles.arrow} size={18} />
                        </button>
                    </div>
                </section>


                {/* ── Intro ── */}
                <section className={styles.intro}>
                    <div className={styles.introText}>
                        <h2>
                            L&R Home <span>MS Container </span>
                        </h2>
                        <div className={styles.introLine}></div>
                    </div>

                    <div className={styles.introGrid}>
                        <div className={styles.imageFrame}>
                            <div className={styles.frameImage}>
                                <img src={containerImg} alt="Container Office" />
                            </div>
                        </div>
                        <div className={styles.introContent}>
                            <p>
                                L&R Green Private Limited is a trusted manufacturer of Modular MS
                                Container Homes in India. We provide complete modular
                                construction solutions including design, manufacturing, transportation,
                                installation, construction, and maintenance services.
                            </p>
                            <p>
                                Our container homes are manufactured using premium-quality mild steel
                                to ensure strength, safety, durability, and long service life.
                                From single-unit homes to large modular housing projects, we deliver
                                reliable structures tailored to customer requirements.
                            </p>
                            <p>
                                With experienced professionals, advanced manufacturing methods,
                                and strict quality standards, we ensure every project
                                is completed efficiently and delivered on time.
                            </p>
                            <button className={styles.btnOutline}>
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
                                    Our Modular Home MS  <br />
                                    <span>Container Solutions</span>
                                </h2>
                                <div className={styles.productsDivider}></div>
                            </div>
                            <p className={styles.productsSubtext}>
                                High-quality modular container solutions designed for residential, commercial,
                                industrial, and site-based applications with durable mild steel construction.
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

                {/* ___Home Cards___ */}
                <section className={styles.HomeContainer}>
                    <div className={styles.HomeFlex}>
                        <div className={styles.HomeText}>
                            <h2>Types of Modular Home <br />
                                <span>MS Container Solutions</span></h2>
                            <div className={styles.HomeLine}></div>
                        </div>
                        <p>Smart and durable modular container solutions designed for residential,
                            commercial, office, and industrial applications.</p>
                    </div>
                    <div className={styles.cardFlex}>
                        <div className={styles.cardGrid}>
                            {features.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`${styles.featureCard} ${item.active ? styles.activeCard : ""
                                            }`}
                                    >
                                        <div className={styles.iconBox}>
                                            <Icon size={42} strokeWidth={1.5} />
                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* ── Manufacturing Strength ── */}
                <section className={styles.mfgBand}>
                    <div className={styles.scrollWrap}>
                        <div className={styles.scrollTrack}>
                            <h1>Home MS Container</h1>

                        </div>
                    </div>

                    <div className={styles.mfgContainer}>
                        <div className={styles.mfgText}>
                            <h2>
                                Quality & Safety  &amp; <br />
                                Commitment
                            </h2>

                            <p>
                                At L&R Green Private Limited, we manufacture high-quality Modular MS
                                Container Homes using premium mild steel for strength, safety, durability,
                                and long-lasting performance. Every container home undergoes strict quality checks
                                to ensure reliable construction, quality finishing, and customer satisfaction
                                across residential, commercial, and site applications.
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

                {/* ____Home Container Modular____ */}

                <section className={styles.HomeContainerModular}>
                    <div className={styles.HomeContainerText}>
                        <h2>Features of Our Modular <br /> <span>Home MS Container Homes</span></h2>
                        <div className={styles.HomeContainerLine}></div>
                    </div>

                    <div className={styles.HomeConatinerFlex}>
                        <div className={styles.HomeContainerPara}>
                            <p>At L&R Green Private Limited, our Modular MS Container Homes are built with premium mild steel for
                                durability, safety, and long-lasting performance. Designed with modern interiors, insulation, and weather-resistant
                                construction, they provide comfortable and low-maintenance living solutions for all applications.</p>
                            <div className={styles.featureListWrap}>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Premium MS Steel Structure</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Fast Installation & Delivery</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Weather Resistant Design</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Custom Layout Solutions</p>
                                </div>

                                <div className={styles.featureRow}>
                                    <div className={styles.featureIconBox}>
                                        <CheckCircle2 size={17} strokeWidth={2.2} />
                                    </div>
                                    <p className={styles.featureText}>Complete After Sales Support</p>
                                </div>

                            </div>
                        </div>
                        {/* image */}
                        <div className={styles.HomeContainerImg}>
                            <img src={HomeContainers} alt="HomeContainer" />
                        </div>

                    </div>
                </section>


                {/* ___Why Home Conatiner _____ */}
                <section className={styles.whyHomeContainersModule}>
                    <div className={styles.WhyHomeCon}>
                        <div className={styles.WhyHomeText}>
                            <h1>Why Choose L&R <br />
                                <span>Home MS Container</span></h1>
                            <div className={styles.WhyHomeLine}></div>
                        </div>
                        <p>L&R Green Private Limited delivers durable Modular MS Container
                            Homes with complete installation and maintenance support.</p>
                    </div>

                    <div className={styles.serviceGrid}>
                        {cards.map((item, index) => (
                            <div className={styles.serviceCard} key={index}>
                                <div className={styles.serviceIcon}>
                                    <item.icon size={38} strokeWidth={1.8} />
                                </div>

                                <h3 className={styles.serviceHeading}>
                                    {item.title}
                                </h3>

                                <p className={styles.serviceText}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </section>

                {/* ── FAQ ── */}
                <section className={styles.faqSec}>
                    <span className={styles.introLabel}>• FAQS</span>
                    <div className={styles.faqHeader}>
                        <div className={styles.faqText}>
                            <h2>
                                Frequently Asked
                                <br />
                                <span>Questions</span>
                            </h2>
                            <div className={styles.FaqsLine}></div>
                        </div>
                        <p>
                            Find quick answers about PUF containers, their insulation, applications,
                            durability, and customization options for industrial and commercial use.
                        </p>
                    </div>
                    <div className={styles.faqBody}>
                        <div className={styles.faqImg}>
                            <img src={faq} alt="container" />
                        </div>
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



                {/* ── CTA ── */}
                <section className={styles.cta}>
                    <h2>Ready for Your Home Ms Container Solution?</h2>
                    <p>
                        Connect with our team to design and deliver compact, durable, and
                        fully Home MS Container solutions tailored to your site needs.
                    </p>


                    <button className={styles.contactBtn}>
                        <span className={styles.contactText}>Contact Us</span>

                        <span className={styles.iconBoxs}>
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

export default HomeContainer;