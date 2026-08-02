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
import video3 from '../assets/About/video6.mp4'
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


const CATEGORIES = [
  { label: "All", key: "all" },
  { label: "Pre-Engineered", key: "pre-engine" },
  { label: "LGSF", key: "lgsf" },
  { label: "Prefab Site Office", key: "site-office" },
  { label: "Labor Hutment", key: "labor-hutment" },
  { label: "Modular Office", key: "modular-office" },
  { label: "MS Container", key: "ms-container" },
  { label: "Premium Container", key: "container-premium" },
  { label: "Sandwich Panel", key: "sandwich-panel" },
  { label: "40X8 MS Container", key: "40x8-ms" },
  { label: "20X8 MS Container", key: "20x8-ms" },
  { label: "40X10 MS Container", key: "40x10-ms" },
  { label: "20X10 MS Container", key: "20x10-ms" },
];

const ALL_MEDIA = [
  { id: 1, type: "image", category: "lgsf", src: preEng1 },
  { id: 2, type: "image", category: "lgsf", src: preEng2 },
  { id: 3, type: "image", category: "lgsf", src: "/Images/gal1.jpg" },
  { id: 4, type: "image", category: "modular-office", src: "/Images/gal2.jpg" },
  { id: 5, type: "video", category: "lgsf", src: video1 },
  { id: 6, type: "image", category: "modular-office", src: "/Images/gal2.jpg" },
  { id: 7, type: "video", category: "lgsf", src: video2 },
  { id: 8, type: "image", category: "labor-hutment", src: labour1 },
  { id: 9, type: "video", category: "ms-container", src: video8},
  { id: 10, type: "image", category: "20x8-ms", src: "/Images/gal6.jpg" },
  { id: 11, type: "video", category: "lgsf", src: video3 },
  { id: 12, type: "image", category: "lgsf", src: preEng3 },
  { id: 13, type: "image", category: "lgsf", src: preEng4 },
  { id: 14, type: "image", category: "lgsf", src: preEng5 },
  { id: 15, type: "image", category: "pre-engine", src: preEng6 },
  { id: 16, type: "image", category: "pre-engine", src: preEng7 },
  { id: 17, type: "image", category: "pre-engine", src: preEng8 },
  { id: 18, type: "image", category: "pre-engine", src: preEng9 },
  { id: 19, type: "image", category: "pre-engine", src: preEng10 },
  { id: 20, type: "image", category: "pre-engine", src: preEng11 },
  { id: 20, type: "video", category: "pre-engine", src: video4 },
  { id: 21, type: "image", category: "lgsf", src: preEng12 },
  { id: 22, type: "image", category: "lgsf", src: preEng13 },
  { id: 23, type: "image", category: "lgsf", src: preEng14 },
  { id: 24, type: "image", category: "ms-container", src: container1 },
  { id: 25, type: "image", category: "ms-container", src: container2 },
  { id: 26, type: "image", category: "ms-container", src: container3 },
  { id: 27, type: "image", category: "ms-container", src: container4 },
  { id: 28, type: "image", category: "ms-container", src: container5 },
  { id: 29, type: "image", category: "ms-container", src: container6 },
  { id: 30, type: "image", category: "ms-container", src: container7 },
  { id: 31, type: "image", category: "ms-container", src: container8 },
  { id: 32, type: "image", category: "ms-container", src: container9 },
  { id: 33, type: "image", category: "site-office", src: siteOffice1 },
  { id: 34, type: "image", category: "site-office", src: siteOffice2 },
  { id: 35, type: "image", category: "site-office", src: siteOffice3 },
  { id: 36, type: "image", category: "site-office", src: siteOffice4 },
  { id: 37, type: "image", category: "site-office", src: siteOffice5 },
  { id: 38, type: "image", category: "site-office", src: siteOffice6 },
  { id: 39, type: "image", category: "labor-hutment", src: labour2 },
  { id: 40, type: "image", category: "ms-container", src: container10 },
  { id: 41, type: "image", category: "container-premium", src: premium1 },
  { id: 42, type: "image", category: "container-premium", src: premium2 },
  { id: 43, type: "image", category: "container-premium", src: premium3 },
  { id: 44, type: "image", category: "container-premium", src: premium4 },
  { id: 45, type: "image", category: "container-premium", src: premium5 },
  { id: 46, type: "image", category: "sandwich-panel", src: sandwich1 },
  { id: 47, type: "image", category: "sandwich-panel", src: sandwich2 },
  { id: 48, type: "image", category: "sandwich-panel", src: sandwich3 },
  { id: 49, type: "video", category: "container-premium", src:video5 },
  { id: 50, type: "video", category: "container-premium", src:video6 },
  { id: 51, type: "video", category: "ms-container", src:video7 },






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
