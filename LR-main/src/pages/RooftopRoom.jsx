import React from 'react'
import { useState } from 'react'
import styles from '../styles/RooftopRoom.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, Plus, X, ArrowUpRight,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import room1 from '../assets/rooftop/rooftoproom/room1.jpg'
import room2 from '../assets/rooftop/rooftoproom/room2.jpg'
import card1 from '../assets/rooftop/rooftoproom/card1.jpg';
import card2 from '../assets/rooftop/rooftoproom/card2.jpg';
import card3 from '../assets/rooftop/rooftoproom/card3.jpg';
import card4 from '../assets/rooftop/rooftoproom/card4.jpg';



const faqs = [
    {
        id: 1,
        q: "What is a prefabricated rooftop house?",
        a:
            "A prefabricated rooftop house is a lightweight modular structure installed on an existing building's roof, providing additional living or functional space with fast installation and minimal structural disruption.",
    },
    {
        id: 2,
        q: "What types of rooftop spaces can L&R build?",
        a:
            "L&R offers customized rooftop solutions, including residential flats, guest rooms, servant rooms, party halls, home offices, studio apartments, and other modular living spaces.",
    },
    {
        id: 3,
        q: "Are rooftop structures durable and weather-resistant?",
        a:
            "Yes. Our rooftop structures are built with high-quality steel frames, insulated panels, and weather-resistant materials to ensure long-lasting performance, safety, and comfort in various climatic conditions.",
    },
    {
        id: 4,
        q: "Can the rooftop house be customized?",
        a:
            "Absolutely. We provide fully customizable layouts, interior finishes, room sizes, doors, windows, flooring, electrical systems, and plumbing solutions to match your specific requirements.",
    },
    {
        id: 5,
        q: "Why choose L&R for rooftop construction?",
        a:
            "L&R delivers complete turnkey rooftop solutions with expert engineering, premium materials, rapid installation, customized designs, and reliable after-sales support for residential and commercial projects.",
    },
];


function RooftopRoom() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(1);
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    const industryProjects = [
        {
            title: "Residential Rooftop Flat",
            desc: "Modern one or two-bedroom rooftop homes with stylish interiors, kitchen, living area, and all essential amenities.",
            img: card1,
        },
        {
            title: "Guest Room",
            desc: "Comfortable and elegant guest accommodations designed to provide privacy, convenience, and a premium stay experience.",
            img: card2,
        },
        {
            title: "Servant Room",
            desc: "Compact and functional staff quarters with efficient layouts, essential utilities, and comfortable living spaces.",
            img: card3,
        },
        {
            title: "Party Hall",
            desc: "Spacious rooftop party halls perfect for family gatherings, celebrations, corporate events, and social occasions.",
            img: card4,
        },
    ];
    return (
        <>
            <Header />

            {/* -----------hero--------------- */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.topLabel}>Smart Prefabricated Rooftop Houses</span>
                    <h1 className={styles.mainTitle}>
                        Expand Your Living Space<br />
                        <span>Without Expanding Your Land.
                        </span>
                    </h1>
                    <p className={styles.heroDesc}>
                        Experience modern rooftop living with lightweight prefabricated steel structures
                        designed for strength, comfort, and fast installation, delivering complete turnkey rooftop solutions.

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
                    <h2>Why Build on Your Rooftop? <br />  <span>Transform Your Rooftop</span></h2>
                    <div className={styles.introLine}></div>
                </div>
                <div className={styles.textSide}>

                    {/* left */}
                    <div className={styles.sideLeft}>
                        <p>Unused rooftops can be transformed into valuable residential or commercial spaces without
                            major reconstruction. Our prefabricated rooftop houses maximize existing roof areas with
                            smart, space-efficient designs and modern modular construction. Built for quick installation
                            and minimal structural impact, they offer a practical solution for urban expansion.</p>
                        <p>Designed with advanced steel structures, insulated panels, and premium materials, our
                            rooftop houses ensure superior safety, durability, and year-round comfort. Featuring
                            waterproof roofing, thermal insulation, earthquake-resistant construction, and modern
                            interior finishes, they provide reliable, energy-efficient spaces tailored to your needs.
                        </p>
                        <button className={styles.btnOutline} onClick={() => navigate('/contact')}>
                            <span>Get Contact</span>

                            <span className={styles.iconWrap}>
                                <ArrowUpRight className={styles.icon1} size={18} />
                                <ArrowUpRight className={styles.icon2} size={18} />
                            </span>
                        </button>
                    </div>

                    <div className={styles.imageCardWrapper}>
                        <img
                            src={room2}
                            alt="PEB Building"
                            className={styles.imageCard}
                        />

                        <div className={styles.sideAccent}></div>
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




            {/* ── FAQ ── */}
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
                        <img src={room1} alt="warehouse" />
                    </div>
                </div>
            </section>


            {/* ── CTA Banner ── */}
            <section className={styles.cta}>
                <h2>Build Your Dream Rooftop House with L&R</h2>
                <p>
                    From rooftop flats to guest rooms and party halls, we deliver premium
                    modular rooftop solutions with quality, speed, and reliability.
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

export default RooftopRoom;