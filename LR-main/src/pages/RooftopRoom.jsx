import React from 'react'
import { useState } from 'react'
import styles from '../styles/RooftopRoom.module.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    ArrowRight, Plus, X, ArrowUpRight, CheckCircle2, MapPinned,
    PencilRuler,
    Truck,
    BadgeCheck,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import room1 from '../assets/rooftop/rooftoproom/room1.jpg'
import room2 from '../assets/rooftop/rooftoproom/room2.jpg'
import room3 from '../assets/rooftop/rooftoproom/room3.jpg'
import room4 from '../assets/rooftop/rooftoproom/room4.jpg'
import card1 from '../assets/rooftop/rooftoproom/card1.jpg';
import card2 from '../assets/rooftop/rooftoproom/card2.jpg';
import card3 from '../assets/rooftop/rooftoproom/card3.jpg';
import card4 from '../assets/rooftop/rooftoproom/card4.jpg';
import design from '../assets/rooftop/rooftoproom/design.png'
import design1 from '../assets/rooftop/rooftoproom/design1.png'


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

    const process = [
        {
            id: "01",
            icon: <MapPinned size={38} />,
            title: "Site Assessment & Planning",
            description:
                "Our experts inspect the rooftop, evaluate structural capacity, and understand your space requirements to create the ideal rooftop solution.",
        },
        {
            id: "02",
            icon: <PencilRuler size={38} />,
            title: "Custom Design & Manufacturing",
            description:
                "Based on the assessment, we prepare customized designs and manufacture high-quality prefabricated components using advanced engineering techniques.",
        },
        {
            id: "03",
            icon: <Truck size={38} />,
            title: "Delivery & Installation",
            description:
                "The completed modules are safely transported to the site and installed quickly with minimal disruption, ensuring precision and structural stability.",
        },
        {
            id: "04",
            icon: <BadgeCheck size={38} />,
            title: "Final Inspection & Handover",
            description:
                "After thorough quality checks and finishing work, the rooftop house is handed over as a ready-to-use space with complete customer satisfaction.",
        },
    ];

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


            <div className={styles.PEBStructure}>
                <div className={styles.PEBStructureTExt}>
                    <h2>Premium Interior Features <br /><span>Our Rooftop Rooms</span></h2>
                    <div className={styles.productsDivider}></div>
                </div>

                <div className={styles.PEBStructureFlex}>
                    <div className={styles.mediaContainer}>
                        <img
                            src={room3}
                            alt="PEB Building"
                            className={styles.mediaImage}
                        />
                        <div className={styles.accentBadge}></div>
                    </div>

                    <div className={styles.PEBStructurePara}>
                        <p>Discover thoughtfully designed interiors that combine modern aesthetics, functionality, and everyday
                            comfort. Every rooftop house is equipped with premium finishes and essential amenities to create a
                            stylish, durable, and comfortable living environment.</p>
                        <div className={styles.featureListWrap}>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Luxury Bedroom</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Modern Living Room</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Modular Kitchen</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Attached Bathroom</p>
                            </div>

                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Premium Interior Finishes</p>
                            </div>
                            <div className={styles.featureRow}>
                                <div className={styles.featureIconBox}>
                                    <CheckCircle2 size={17} strokeWidth={2.2} />
                                </div>
                                <p className={styles.featureText}>Electrical & Plumbing Ready</p>
                            </div>

                        </div>
                    </div>
                    {/* image */}



                </div>
            </div>



            {/* STRENGTH BAND */}
            <section className={styles.mfgBand}>
                <div className={styles.scrollWrap}>
                    <div className={styles.scrollTrack}>
                        <h1>Built for Rooftop Living</h1>

                    </div>
                </div>

                <div className={styles.mfgContainer}>
                    <div className={styles.mfgText}>
                        <h2>
                            Strong & Secure <br />
                            Rooftop Solutions
                        </h2>
                        <p>
                            Built with premium steel structures and high-quality materials, our rooftop houses
                            deliver exceptional strength, long-lasting durability, and reliable performance in
                            all weather conditions. Engineered to withstand harsh environmental conditions, they
                            offer superior structural stability and lasting protection. Every rooftop solution
                            is designed for years of safe, low-maintenance performance.
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


            {/* --------process --------- */}
            <section className={styles.processSec}>
                <div className={styles.secHeaders}>
                    <div className={styles.secTexts}>
                        <h2>Our Construction<br /><span>Process</span></h2>
                        <div className={styles.productsDividers}></div>
                    </div>
                    <p >Our efficient construction process covers everything from site assessment and custom design to professional
                        installation and final handover, ensuring a safe, durable, and ready-to-use rooftop solution.</p>
                </div>

                <div className={styles.grid}>
                    {process.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <span className={styles.step}>{item.id}</span>

                            <div className={styles.iconBoxs}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Why PEB Engineered */}
            <section className={styles.whyPEBEnginer}>
                <div className={styles.whyPEBEnginerTitle}>
                    <h2>Why Choose Our <br /><span>Rooftop Houses?</span></h2>
                    <div className={styles.productsDivider}></div>
                </div>
                <div className={styles.whyPEBEnginerFlex}>

                    <div className={styles.pebEnginerPara}>
                        <p>Our prefabricated rooftop houses are built with lightweight steel structures that
                            minimize the load on existing buildings while ensuring exceptional strength and
                            long-term durability. With rapid installation, waterproof roofing, and fire-resistant
                            materials, they provide a safe, reliable, and hassle-free solution for modern rooftop
                            living. Every structure is engineered to deliver lasting performance with minimal maintenance.</p>
                        <p>Designed for year-round comfort and maximum efficiency, our rooftop homes feature advanced
                            thermal insulation that helps maintain indoor temperatures and reduce energy consumption.
                            Every project is fully customizable, allowing you to personalize layouts, interiors,
                            finishes, and elevations to create a space that perfectly suits your lifestyle and
                            requirements. From concept to installation, we deliver complete turnkey rooftop solutions
                            with uncompromising quality.</p>
                    </div>
                    <div className={styles.imageBox}>
                        <img
                            src={room4}
                            alt="PEB Building"
                            className={styles.featuredPhoto}
                        />
                        <div className={styles.badgeBar}></div>
                    </div>

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
                    <div className={styles.faqImg}>
                        <img src={room1} alt="warehouse" />
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