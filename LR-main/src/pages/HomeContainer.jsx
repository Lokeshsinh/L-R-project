import React from 'react'
import Header from '../components/common/Header';
import styles from '../styles/HomeContainer.module.css'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Box, Plus, X } from "lucide-react";
import containerImg from '../assets/conatiners/HomeConatiner/container1.png'
import card1 from '../assets/conatiners/HomeConatiner/card1.png';
import card2 from '../assets/conatiners/HomeConatiner/card2.png';
import card3 from '../assets/conatiners/HomeConatiner/card3.png';
import card4 from '../assets/conatiners/HomeConatiner/card4.png';

function HomeContainer() {

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




            </div>

        </>
    );
}

export default HomeContainer;