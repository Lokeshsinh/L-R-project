import React, { useState, useEffect, useRef } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Gallery.module.css";
import {
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import labour1 from '../assets/Gallary/Labour/labour1.jpeg'
import labour2 from '../assets/Gallary/Labour/labour2.png'
import preEng1 from '../assets/Gallary/PreEngineed/preEng1.jpeg'
import preEng2 from '../assets/Gallary/PreEngineed/preEng2.jpeg'
import preEng3 from '../assets/Gallary/PreEngineed/preEng3.jpeg'
import preEng4 from '../assets/Gallary/PreEngineed/preEng4.jpeg'
import preEng5 from '../assets/Gallary/PreEngineed/preEng5.jpeg'
import preEng6 from '../assets/Gallary/PreEngineed/preEng6.jpeg'
import preEng7 from '../assets/Gallary/PreEngineed/preEng7.jpeg'
import preEng8 from '../assets/Gallary/PreEngineed/preEng8.jpeg'
import preEng9 from '../assets/Gallary/PreEngineed/preEng9.jpeg'
import preEng10 from '../assets/Gallary/PreEngineed/PreEng10.jpeg'
import preEng11 from '../assets/Gallary/PreEngineed/PreEng11.jpeg'
import preEng12 from '../assets/Gallary/PreEngineed/preEng12.jpeg'
import preEng13 from '../assets/Gallary/PreEngineed/preEng13.jpeg'
import preEng14 from '../assets/Gallary/PreEngineed/preEng14.jpeg'
import video1 from '../assets/About/video5.mp4'
import video2 from '../assets/About/video3.mp4'
import video3 from '../assets/About/video4.mp4'
import video4 from '../assets/Gallary/PreEngineed/preEngVideo.mp4'
import video5 from '../assets/About/video6.mp4'
import video6 from '../assets/About/video6.mp4'
import video7 from '../assets/About/video8.mp4'
import video8 from '../assets/About/video10.mp4'
import container1 from '../assets/Gallary/msContainer/con1.jpeg'
import container2 from '../assets/Gallary/msContainer/con2.jpeg'
import container3 from '../assets/Gallary/msContainer/con3.jpeg'
import container4 from '../assets/Gallary/msContainer/con4.jpg'
import container5 from '../assets/Gallary/msContainer/con5.jpeg'
import container6 from '../assets/Gallary/msContainer/con6.jpeg'
import container7 from '../assets/Gallary/msContainer/con7.jpeg'
import container8 from '../assets/Gallary/msContainer/con8.jpeg'
import container9 from '../assets/Gallary/msContainer/con9.jpeg'
import container10 from '../assets/Gallary/msContainer/con10.png'
import siteOffice1 from '../assets/Gallary/siteOffice/site.jpeg'
import siteOffice2 from '../assets/Gallary/siteOffice/site2.png'
import siteOffice3 from '../assets/Gallary/siteOffice/site3.png'
import siteOffice4 from '../assets/Gallary/siteOffice/site4.png'
import siteOffice5 from '../assets/Gallary/siteOffice/site5.png'
import siteOffice6 from '../assets/Gallary/siteOffice/site6.png'
import premium1 from '../assets/Gallary/premium/premium1.png'
import premium2 from '../assets/Gallary/premium/premium2.png'
import premium3 from '../assets/Gallary/premium/premium3.png'
import premium4 from '../assets/Gallary/premium/premium1.png'
import premium5 from '../assets/Gallary/premium/premium5.png'
import sandwich1 from '../assets/Gallary/sandwich/sandwich1.png'
import sandwich2 from '../assets/Gallary/sandwich/sandwich2.png'
import sandwich3 from '../assets/Gallary/sandwich/sandwich3.png'
import pufSand1 from '../assets/panel/pufPanel/pufpanel1.png'
import pufSand2 from '../assets/panel/pufPanel/pufpanel2.png'
import wallPuf1 from '../assets/panel/wallpuf/wallpuf6.png'
import wallPuf2 from '../assets/panel/wallpuf/wallpuf7.png'
import roofPuf1 from '../assets/panel/rufpanel/roof1.png'
import roofPuf2 from '../assets/panel/rufpanel/roof7.png'
import epc1 from '../assets/panel/EPC/epc1.png'
import epc2 from '../assets/panel/EPC/epc3.png'
import rock1 from '../assets/panel/rookwall/roock1.png'
import rock2 from '../assets/panel/rookwall/rock8.png'
import glass1 from '../assets/panel/glasswall/glass1.png'
import glass2 from '../assets/panel/glasswall/glass2.png'
import factory1 from '../assets/Pre-Build/Factory/card1.png'
import factory2 from '../assets/Pre-Build/Factory/container3.png'
import warehouse1 from '../assets/Pre-Build/warehouse/card1.png'
import warehouse2 from '../assets/Pre-Build/warehouse/card2.png'
import indusShed1 from '../assets/Pre-Build/industrylSheld/card5.jpg'
import indusShed2 from '../assets/Pre-Build/industrylSheld/card7.jpg'
import cold1 from '../assets/Pre-Build/ColdRoom/card3.png'
import cold2 from '../assets/Pre-Build/ColdRoom/card4.png'
import executed1 from '../assets/conatiners/ExecutiveContainer/container1.png'
import value1 from '../assets/conatiners/L&RContainer/card4.jpg'
import home1 from '../assets/conatiners/HomeConatiner/card1.png'
import pufContainer1 from '../assets/conatiners/pufContainer/can2.jpg'
import hingeContainer1 from '../assets/conatiners/HigneContainer/container3.jpg'
import prefabDry1 from '../assets/PREFAB/prefab1.png'
import control1 from '../assets/Gallary/Control/control1.jpg'
import control2 from '../assets/PREFAB/controllRoom/control1.png'
import clean1 from '../assets/PREFAB/cleanroom/clean1.png'
import clean2 from '../assets/PREFAB/cleanroom/clean3.png'
import mashroom1 from '../assets/PREFAB/mashroom/mashroom4.png'
import indus1 from '../assets/PREFAB/Indus/indu5.png'
import canteen1 from '../assets/Gallary/canteen/canten1.png'
import canteen2 from '../assets/Pre-Build/canteen/canteen3.png'
import railway1 from '../assets/PREFAB/railway/railway4.png'
import roof1 from '../assets/rooftop/rooftoproom/card2.jpg'
import roof2 from '../assets/rooftop/rooftoproom/card3.jpg'
import resident1 from '../assets/rooftop/resident/resident4.png'
import party1 from '../assets/rooftop/party/party2.png'
import guest1 from '../assets/rooftop/guest/guest2.png'
import servent1 from '../assets/rooftop/servent/servent2.png'
import prefabRes1 from '../assets/PREFAB/prefabresi/reshouse3.png'
import luxury1 from '../assets/LGFS/Luxury/luxury3.png'
import showroom1 from '../assets/LGFS/showroom/showroom5.png'
import waiting1 from '../assets/LGFS/wating/waiting1.png'
import farm1 from '../assets/LGFS/FramHouse/farm4.png'
import solarepic1 from '../assets/solar/solarepic/solarepic2.png'
import solarmodular from '../assets/solar/solarModule/solarmodule4.png'
import hardware1 from '../assets/solar/hardware/hardware1.png'
import hvac1 from '../assets/hvm/hvm6.png'
const CATEGORIES = [
  { label: "All", key: "all" },
  { label: "MS Container", key: "ms-container" },
  { label: "Premium Container", key: "container-premium" },
  { label: "Executive Containers", key: "executive-container" },
  { label: "L&R Value Container", key: "l&r-value" },
  { label: "Home Container", key: "home-container" },
  { label: "Puf Container", key: "puf-container" },
  { label: "Hinge Container", key: "hinge-container" },
  { label: "Pre-Engineered", key: "pre-engine" },
  { label: "Factory Building ", key: "factory-build" },
  { label: "Warehouse ", key: "warehouse" },
  { label: "Industrial Sheds", key: "Indus-shed" },
  { label: "Cold Rooms", key: "cold-room" },
  { label: "Clean Rooms", key: "clean-room" },
  { label: "Labor Hutment", key: "labor-hutment" },
  { label: "Prefab Site Office", key: "site-office" },
  { label: "Prefab Dry Wall", key: "prefab-drywall" },
  { label: "Control Rooms", key: "control-room" },
  { label: "Mashroom", key: "mashroom" },
  { label: "Industrial Enclosures", key: "industrial-enclosures" },
  { label: "prefabricated Canteen", key: "staff-canteen" },
  { label: "Railway Shelters", key: "railway-shelters" },
  { label: "Modular Office", key: "modular-office" },
  { label: "Sandwich Panel", key: "sandwich-panel" },
  { label: "Puf Sandwich Panel", key: "puf-sandwich" },
  { label: "Wall Puf Panel", key: "wall-puf" },
  { label: "Roof Puf Panel", key: "roof-puf" },
  { label: "EPS Sandwich Panel", key: "eps-panel" },
  { label: "Rookwool Panel", key: "rookwool-panel" },
  { label: "Glasswool Panel", key: "glasswool-panel" },
  { label: "Rooftop Rooms", key: "rooftop-room" },
  { label: "Residential Flats", key: "residential-flat" },
  { label: "Party Lounge", key: "party-lounge" },
  { label: "Guest Rooms", key: "guest-room" },
  { label: "Servant Rooms", key: "servant-room" },
  { label: "LGSF", key: "lgsf" },
  { label: "Prefab Residential", key: "prefab-residential" },
  { label: "Luxury Lounges", key: "luxury-lounges" },
  { label: "Showrooms", key: "showrooms" },
  { label: "Waiting Areas", key: "waiting-areas" },
  { label: "Farmhouses", key: "farmhouses" },
  { label: "Solar EPC", key: "solar-epc" },
  { label: "Solar Mounting", key: "solar-mounting" },
  { label: "Hardware", key: "hardware" },
  { label: "HVAC", key: "hvac" },

];

const ALL_MEDIA = [
  { id: 1, type: "image", category: "lgsf", src: preEng1 },
  { id: 2, type: "image", category: "lgsf", src: preEng2 },
  { id: 3, type: "image", category: "factory-build", src: factory1 },
  // { id: 4, type: "image", category: "modular-office", src: "/Images/gal2.jpg" },
  { id: 4, type: "video", category: "lgsf", src: video1 },
  // { id: 6, type: "image", category: "modular-office", src: "/Images/gal2.jpg" },
  { id: 5, type: "video", category: "lgsf", src: video2 },
  { id: 6, type: "image", category: "labor-hutment", src: labour1 },
  { id: 7, type: "video", category: "ms-container", src: video8 },
  { id: 8, type: "image", category: "home-container", src: home1 },
  { id: 9, type: "video", category: "prefab-drywall", src: video3 },
  { id: 10, type: "image", category: "lgsf", src: preEng3 },
  { id: 11, type: "image", category: "lgsf", src: preEng4 },
  { id: 12, type: "image", category: "lgsf", src: preEng5 },
  { id: 13, type: "image", category: "pre-engine", src: preEng6 },
  { id: 14, type: "image", category: "pre-engine", src: preEng7 },
  { id: 15, type: "image", category: "pre-engine", src: preEng8 },
  { id: 16, type: "image", category: "pre-engine", src: preEng9 },
  { id: 17, type: "image", category: "pre-engine", src: preEng10 },
  { id: 18, type: "image", category: "pre-engine", src: preEng11 },
  { id: 19, type: "video", category: "pre-engine", src: video4 },
  { id: 20, type: "image", category: "lgsf", src: preEng12 },
  { id: 21, type: "image", category: "lgsf", src: preEng13 },
  { id: 22, type: "image", category: "lgsf", src: preEng14 },
  { id: 23, type: "image", category: "ms-container", src: container1 },
  { id: 24, type: "image", category: "ms-container", src: container2 },
  { id: 25, type: "image", category: "ms-container", src: container3 },
  { id: 26, type: "image", category: "ms-container", src: container4 },
  { id: 27, type: "image", category: "ms-container", src: container5 },
  { id: 28, type: "image", category: "ms-container", src: container6 },
  { id: 29, type: "image", category: "ms-container", src: container7 },
  { id: 30, type: "image", category: "ms-container", src: container8 },
  { id: 31, type: "image", category: "ms-container", src: container9 },
  { id: 32, type: "image", category: "site-office", src: siteOffice1 },
  { id: 33, type: "image", category: "site-office", src: siteOffice2 },
  { id: 34, type: "image", category: "site-office", src: siteOffice3 },
  { id: 35, type: "image", category: "site-office", src: siteOffice4 },
  { id: 36, type: "image", category: "site-office", src: siteOffice5 },
  { id: 37, type: "image", category: "site-office", src: siteOffice6 },
  { id: 38, type: "image", category: "labor-hutment", src: labour2 },
  { id: 39, type: "image", category: "ms-container", src: container10 },
  { id: 40, type: "image", category: "container-premium", src: premium1 },
  { id: 41, type: "image", category: "container-premium", src: premium2 },
  { id: 42, type: "image", category: "container-premium", src: premium3 },
  { id: 43, type: "image", category: "container-premium", src: premium4 },
  { id: 44, type: "image", category: "container-premium", src: premium5 },
  { id: 45, type: "image", category: "sandwich-panel", src: sandwich1 },
  { id: 46, type: "image", category: "sandwich-panel", src: sandwich2 },
  { id: 47, type: "image", category: "sandwich-panel", src: sandwich3 },
  { id: 48, type: "video", category: "container-premium", src: video5 },
  { id: 49, type: "video", category: "container-premium", src: video6 },
  { id: 50, type: "video", category: "ms-container", src: video7 },
  { id: 51, type: "image", category: "puf-sandwich", src: pufSand1 },
  { id: 52, type: "image", category: "puf-sandwich", src: pufSand2 },
  { id: 53, type: "image", category: "wall-puf", src: wallPuf1 },
  { id: 54, type: "image", category: "wall-puf", src: wallPuf2 },
  { id: 55, type: "image", category: "roof-puf", src: roofPuf1 },
  { id: 56, type: "image", category: "roof-puf", src: roofPuf2 },
  { id: 57, type: "image", category: "eps-panel", src: epc1 },
  { id: 58, type: "image", category: "eps-panel", src: epc2 },
  { id: 59, type: "image", category: "rookwool-panel", src: rock1 },
  { id: 60, type: "image", category: "rookwool-panel", src: rock2 },
  { id: 61, type: "image", category: "glasswool-panel", src: glass1 },
  { id: 62, type: "image", category: "glasswool-panel", src: glass2 },
  { id: 63, type: "image", category: "factory-build", src: factory2 },
  { id: 64, type: "image", category: "warehouse", src: warehouse1 },
  { id: 65, type: "image", category: "warehouse", src: warehouse2 },
  { id: 66, type: "image", category: "Indus-shed", src: indusShed2 },
  { id: 67, type: "image", category: "Indus-shed", src: indusShed1 },
  { id: 68, type: "image", category: "cold-room", src: cold1 },
  { id: 69, type: "image", category: "cold-room", src: cold2 },
  { id: 70, type: "image", category: "executive-container", src: executed1 },
  { id: 71, type: "image", category: "l&r-value", src: value1 },
  { id: 72, type: "image", category: "puf-container", src: pufContainer1 },
  { id: 73, type: "image", category: "hinge-container", src: hingeContainer1 },
  { id: 74, type: "image", category: "prefab-drywall", src: prefabDry1 },
  { id: 75, type: "image", category: "control-room", src: control1 },
  { id: 76, type: "image", category: "control-room", src: control2 },
  { id: 77, type: "image", category: "clean-room", src: clean1 },
  { id: 78, type: "image", category: "clean-room", src: clean2 },
  { id: 79, type: "image", category: "mashroom", src: mashroom1 },
  { id: 80, type: "image", category: "industrial-enclosures", src: indus1 },
  { id: 81, type: "image", category: "staff-canteen", src: canteen1 },
  { id: 82, type: "image", category: "staff-canteen", src: canteen2 },
  { id: 83, type: "image", category: "railway-shelters", src: railway1 },
  { id: 84, type: "image", category: "rooftop-room", src: roof1 },
  { id: 85, type: "image", category: "rooftop-room", src: roof2 },
  { id: 86, type: "image", category: "residential-flat", src: resident1 },
  { id: 87, type: "image", category: "party-lounge", src: party1 },
  { id: 88, type: "image", category: "guest-room", src: guest1 },
  { id: 89, type: "image", category: "servant-room", src: servent1 },
  { id: 90, type: "image", category: "prefab-residential", src: prefabRes1 },
  { id: 91, type: "image", category: "luxury-lounges", src: luxury1 },
  { id: 92, type: "image", category: "showrooms", src: showroom1 },
  { id: 93, type: "image", category: "waiting-areas", src: waiting1 },
  { id: 94, type: "image", category: "farmhouses", src: farm1 },
  { id: 95, type: "image", category: "solar-epc", src: solarepic1 },
  { id: 96, type: "image", category: "solar-mounting", src: solarmodular },
  { id: 97, type: "image", category: "hardware", src: hardware1 },
  { id: 98, type: "image", category: "hvac", src:  hvac1},







];

const PAGE_SIZE = 12;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [popup, setPopup] = useState(null);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const filtered = React.useMemo(() => {
    if (activeFilter === "all") return ALL_MEDIA;

    return ALL_MEDIA.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );



  const activeLabel =
    CATEGORIES.find((c) => c.key === activeFilter)?.label || "All";

  const handleFilter = (key) => {
    setActiveFilter(key);
    setCurrentPage(1);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Our Project<br />
            <span>Gallery
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Explore our portfolio of prefabricated and pre-engineered building solutions,
            showcasing strength, precision, and versatility across diverse projects.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>




      {/* GALLERY SECTION */}
      <section className={styles.gallerySec}>
        {/* Heading Row */}
        <div className={styles.headingRow}>
          <div className={styles.galleryText}>
            <h2>Discover Our <br /><span>Projects</span></h2>
            <div className={styles.discoverDivider} ></div>
          </div>
          <p>Advanced modular cold storage solutions ensuring consistent temperature, energy efficiency, and reliability.</p>
        </div>

        {/* Filter Row */}
        <div className={styles.filterRow}>
          <div className={styles.filterFlex}>
            <span className={styles.sortByLabel}>SORT BY</span>
            <div
              className={styles.filterDropdownWrap}
              ref={dropdownRef}
            >
              <button
                type="button"
                className={styles.filterBtn}
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <span>{activeLabel}</span>
                <svg
                  className={dropdownOpen ? styles.arrowOpen : ""}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className={styles.dropdownPanel}>
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.key}
                      className={`${styles.dropdownItem} ${activeFilter === cat.key
                        ? styles.dropdownItemActive
                        : ""
                        }`}
                      onClick={() => handleFilter(cat.key)}
                    >
                      {cat.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>




        {/* Image Grid */}
        <div className={styles.imageGrid}>
          {paginated.map((item) => (
            <div
              key={item.id}
              className={styles.imageCard}
              onClick={() => setPopup(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  className={styles.gridImg}
                />
              ) : (
                <>
                  <video
                    className={styles.gridImg}
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>

                  <div className={styles.playIcon}>
                    ▶
                  </div>
                </>
              )}
              <div className={styles.hoverOverlay}></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${currentPage === 1 ? styles.pageBtnDisabled : ""}`} onClick={() => currentPage > 1 && setCurrentPage(p => p - 1)}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} className={`${styles.pageBtn} ${currentPage === page ? styles.pageBtnActive : ""}`} onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{page}</button>
            ))}
            <button className={`${styles.pageBtn} ${currentPage === totalPages ? styles.pageBtnDisabled : ""}`} onClick={() => currentPage < totalPages && setCurrentPage(p => p + 1)}>›</button>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      {popup && (
        <div
          className={styles.popupOverlay}
          onClick={() => setPopup(null)}
        >
          <button
            className={styles.closeBtn}
            onClick={() => setPopup(null)}
          >
            ✕
          </button>

          <div
            className={styles.popupBox}
            onClick={(e) => e.stopPropagation()}
          >
            {popup.type === "image" ? (
              <img
                src={popup.src}
                alt=""
                className={styles.popupMedia}
              />
            ) : (
              <video
                className={styles.popupMedia}
                controls
                autoPlay
              >
                <source src={popup.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
      {/* CONNECT BANNER */}

      <section className={styles.cta}>
        <h2>Building Excellence, One Project at a Time</h2>
        <p>
          Explore our portfolio of completed modular construction projects, showcasing
          innovation, precision, and engineering excellence.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('/contact')}>
          <span className={styles.contactText}>Contact Us</span>

          <span className={styles.iconBoxs}>
            <ArrowRight className={styles.iconOne} size={18} />
            <ArrowRight className={styles.iconTwo} size={18} />
          </span>
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
