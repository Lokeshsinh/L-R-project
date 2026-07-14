import React, { useState, useEffect, useRef } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Gallery.module.css";

const CATEGORIES = [
  { label: "All", key: "all" },
  { label: "LGSF", key: "lgsf" },
  { label: "Labor Hutment", key: "labor-hutment" },
  { label: "Modular Office", key: "modular-office" },
  { label: "10X10 MS Container", key: "10x10-ms" },
  { label: "40X8 MS Container", key: "40x8-ms" },
  { label: "20X8 MS Container", key: "20x8-ms" },
  { label: "40X10 MS Container", key: "40x10-ms" },
  { label: "20X10 MS Container", key: "20x10-ms" },
];

const ALL_IMAGES = [
  { id: 1, category: "lgsf", img: "/Images/gal1.jpg", title: "LGSF Structure" },
  { id: 2, category: "modular-office", img: "/Images/gal2.jpg", title: "Modular Office" },
  { id: 3, category: "lgsf", img: "/Images/gal3.jpg", title: "LGSF Building" },
  { id: 4, category: "labor-hutment", img: "/Images/gal4.jpg", title: "Labor Hutment" },
  { id: 5, category: "10x10-ms", img: "/Images/gal5.jpg", title: "10X10 MS Container" },
  { id: 6, category: "40x8-ms", img: "/Images/gal6.jpg", title: "40X8 MS Container" },
  { id: 7, category: "lgsf", img: "/Images/gal7.jpg", title: "LGSF Rooftop" },
  { id: 8, category: "20x8-ms", img: "/Images/gal8.jpg", title: "20X8 MS Container" },
  { id: 9, category: "40x10-ms", img: "/Images/gal9.jpg", title: "40X10 MS Container" },
  { id: 10, category: "labor-hutment", img: "/Images/gal10.jpg", title: "Labor Accommodation" },
  { id: 11, category: "modular-office", img: "/Images/gal11.jpg", title: "Site Office" },
  { id: 12, category: "20x10-ms", img: "/Images/gal12.jpg", title: "20X10 MS Container" },
  { id: 13, category: "lgsf", img: "/Images/gal13.jpg", title: "LGSF Panel Structure" },
  { id: 14, category: "40x8-ms", img: "/Images/gal14.jpg", title: "40X8 Container Unit" },
  { id: 15, category: "modular-office", img: "/Images/gal15.jpg", title: "Modular Cabin" },
  { id: 16, category: "10x10-ms", img: "/Images/gal16.jpg", title: "MS Office Unit" },
  { id: 17, category: "labor-hutment", img: "/Images/gal17.jpg", title: "Workers Housing" },
  { id: 18, category: "lgsf", img: "/Images/gal18.jpg", title: "LGSF Steel Frame" },
];

const PAGE_SIZE = 9;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = activeFilter === "all" ? ALL_IMAGES : ALL_IMAGES.filter(i => i.category === activeFilter);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const activeLabel = CATEGORIES.find(c => c.key === activeFilter)?.label || "All";

  const handleFilter = (key) => {
    setActiveFilter(key);
    setDropdownOpen(false);
    setCurrentPage(1);
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/galleryhero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>OUR PROJECT <br /><span>GALLERY</span></h1>
          <p className={styles.subtitle}>Explore our portfolio of prefabricated and pre-engineered building solutions, showcasing strength, precision, and versatility across diverse projects.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className={styles.gallerySec}>
        <div className={styles.galleryContainer}>

          {/* Heading Row */}
          <div className={styles.headingRow}>
            <div>
              <h2 className={styles.discoverTitle}>Discover Our</h2>
              <h2 className={styles.discoverSub}>Gallery</h2>
              <div className={styles.discoverDivider} />
            </div>
            <p className={styles.discoverDesc}>Advanced modular cold storage solutions ensuring consistent temperature, energy efficiency, and reliability.</p>
          </div>

          {/* Filter Row */}
          <div className={styles.filterRow}>
            <span className={styles.sortByLabel}>SORT BY</span>
            <div className={styles.filterDropdownWrap} ref={dropdownRef}>
              <button className={styles.filterBtn} onClick={() => setDropdownOpen(!dropdownOpen)} aria-expanded={dropdownOpen}>
                <span>{activeLabel}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className={styles.dropdownPanel}>
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.key}
                      className={`${styles.dropdownItem} ${activeFilter === cat.key ? styles.dropdownItemActive : ""}`}
                      onClick={() => handleFilter(cat.key)}
                    >
                      {cat.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Image Grid */}
          <div className={styles.imageGrid}>
            {paginated.map((item) => (
              <div key={item.id} className={styles.imageCard} onClick={() => setLightbox(item)}>
                <img src={item.img} alt={item.title} className={styles.gridImg} />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageTitle}>{item.title}</span>
                </div>
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
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.img} alt={lightbox.title} className={styles.lightboxImg} />
            <p className={styles.lightboxTitle}>{lightbox.title}</p>
          </div>
        </div>
      )}

      {/* CONNECT BANNER */}
      <section className={styles.connectBanner}>
        <div className={styles.connectInner}>
          <h2>LET'S CONNECT L&amp;R GREEN INDIA</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
