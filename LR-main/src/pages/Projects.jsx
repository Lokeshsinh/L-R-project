import React, { useState, useEffect, useRef } from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Projects.module.css";

// ── Filter taxonomy (matches screenshots exactly) ──────────────────────────
const FILTER_TREE = [
  {
    label: "Modular Solutions",
    key: "modular",
    children: [
      { label: "MS Containers", key: "ms-containers" },
      { label: "Home Containers", key: "home-containers" },
      { label: "PUF Containers", key: "puf-containers" },
      { label: "Hinge Containers", key: "hinge-containers" },
    ],
  },
  {
    label: "Steel Structures Buildings",
    key: "steel",
    children: [
      { label: "Pre-engineered Building", key: "pre-engineered" },
      { label: "Site Office Container", key: "site-office" },
      { label: "Prefabricated Modular Building", key: "prefab-modular" },
      { label: "Sandwich Panels", key: "sandwich-panels" },
      { label: "Rooftop Room", key: "rooftop-room" },
      { label: "LGSF Modular Solutions", key: "lgsf" },
      { label: "Farm Houses / Cottages", key: "farmhouse" },
    ],
  },
  {
    label: "Solar Energy Solutions",
    key: "solar",
    children: [
      { label: "Solar EPC Work", key: "solar-epc" },
      { label: "Module Mounting Structure", key: "solar-mounting" },
      { label: "Solar Hardware", key: "solar-hardware" },
    ],
  },
  {
    label: "HVAC Solutions",
    key: "hvac",
    children: [
      { label: "Central AC Systems", key: "central-ac" },
      { label: "VRF/VRV Systems", key: "vrf" },
      { label: "Industrial Ventilation", key: "industrial-ventilation" },
    ],
  },
];

// ── All project cards ──────────────────────────────────────────────────────
const ALL_PROJECTS = [
  { id: 1, title: "Light Gauge Steel Frame Construction", category: "lgsf", tag: "LGSF", img: "/Images/proj1.jpg", desc: "LGSF (Light Gauge Steel Frame) is a modern system using cold-formed steel for strong, lightweight structures. At L&R Green Pvt Ltd, we build prefab rooftop and structural systems that are quick to install, durable, and ideal for all project types." },
  { id: 2, title: "Solar EPC Farm Installation", category: "solar-epc", tag: "Solar EPC", img: "/Images/proj2.jpg", desc: "End-to-end solar EPC project delivering a 500 kW ground-mounted solar power plant for an industrial client in Rajasthan." },
  { id: 3, title: "Prefab Labour Accommodation", category: "prefab-modular", tag: "Prefab Modular", img: "/Images/proj3.jpg", desc: "Complete prefabricated labour accommodation complex with 200 rooms, canteen, and washrooms for a construction project site." },
  { id: 4, title: "Industrial Warehouse — Steel Structure", category: "pre-engineered", tag: "Pre-engineered", img: "/Images/proj4.jpg", desc: "Pre-engineered steel warehouse of 15,000 sq ft for a logistics company requiring rapid completion within 6 weeks." },
  { id: 5, title: "Rooftop Residential Flat (G+2)", category: "rooftop-room", tag: "Rooftop Room", img: "/Images/proj5.jpg", desc: "Prefabricated rooftop residential flat on an existing RCC building using LGSF technology with complete finishing." },
  { id: 6, title: "Module Mounting Structure — 1 MW", category: "solar-mounting", tag: "Solar Mounting", img: "/Images/proj6.jpg", desc: "Supply and installation of galvanized steel module mounting structures for a 1 MW ground-mounted solar farm." },
  { id: 7, title: "MS Executive Container Office", category: "ms-containers", tag: "MS Containers", img: "/Images/proj7.jpg", desc: "Custom-built executive MS container office with AC, full electrical fittings, and premium interior for a site office." },
  { id: 8, title: "Factory Building — PEB Structure", category: "pre-engineered", tag: "Pre-engineered", img: "/Images/proj8.jpg", desc: "Pre-engineered factory building of 25,000 sq ft with mezzanine floors for a manufacturing unit in Noida." },
  { id: 9, title: "Prefab Sales Office — LGSF", category: "lgsf", tag: "LGSF", img: "/Images/proj9.jpg", desc: "Premium LGSF prefabricated sales office with glass facade and branded exterior for a real estate developer." },
  { id: 10, title: "PUF Wall Panels — Cold Storage", category: "sandwich-panels", tag: "Sandwich Panels", img: "/Images/proj10.jpg", desc: "Complete cold storage insulation using PUF wall and roof panels for a 2,000 sq ft food processing facility." },
  { id: 11, title: "Solar Carport — Parking Structure", category: "solar-hardware", tag: "Solar Hardware", img: "/Images/proj11.jpg", desc: "Solar carport mounting structure for 50 kW rooftop system over a commercial parking area in Delhi NCR." },
  { id: 12, title: "Prefab Farmhouse — Rural Retreat", category: "farmhouse", tag: "Farmhouse", img: "/Images/proj12.jpg", desc: "Modern prefabricated farmhouse with sloped roofing, wooden cladding, and complete interior finishing." },
];

const PAGE_SIZE = 9;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredParent, setHoveredParent] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setHoveredParent(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = activeFilter === "all"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handleSelectFilter = (key, label) => {
    setActiveFilter(key);
    setDropdownOpen(false);
    setHoveredParent(null);
    setCurrentPage(1);
  };

  const getActiveLabel = () => {
    if (activeFilter === "all") return "All";
    for (const group of FILTER_TREE) {
      if (group.key === activeFilter) return group.label;
      const child = group.children.find((c) => c.key === activeFilter);
      if (child) return child.label;
    }
    return "All";
  };

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/projectshero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>L&amp;R GREEN <br /><span>PROJECTS</span></h1>
          <p className={styles.subtitle}>At L&amp;R Green India Pvt Ltd, we manufacture LGSF prefab rooftops and sandwich panels for construction workers and cost-effective projects.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className={styles.projectsSec}>
        <div className={styles.projectsContainer}>

          {/* Heading row */}
          <div className={styles.headingRow}>
            <div>
              <h2 className={styles.discoverTitle}>Discover Our</h2>
              <h2 className={styles.discoverSub}>Projects</h2>
              <div className={styles.discoverDivider} />
            </div>
            <p className={styles.discoverDesc}>Advanced modular solar energy solutions bringing circular innovation and eco-skills.</p>
          </div>

          {/* Filter row */}
          <div className={styles.filterRow}>
            <span className={styles.sortByLabel}>SORT BY</span>
            <div className={styles.filterDropdownWrap} ref={dropdownRef}>
              <button
                className={styles.filterBtn}
                onClick={() => { setDropdownOpen(!dropdownOpen); setHoveredParent(null); }}
                aria-expanded={dropdownOpen}
              >
                <span>{getActiveLabel()}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className={styles.dropdownPanel}>
                  {/* Left column — categories */}
                  <div className={styles.dropdownLeft}>
                    <div
                      className={`${styles.dropdownItem} ${activeFilter === "all" ? styles.dropdownItemActive : ""}`}
                      onClick={() => handleSelectFilter("all", "All")}
                    >
                      <span>All</span>
                    </div>
                    {FILTER_TREE.map((group) => (
                      <div
                        key={group.key}
                        className={`${styles.dropdownItem} ${hoveredParent === group.key ? styles.dropdownItemActive : ""}`}
                        onMouseEnter={() => setHoveredParent(group.key)}
                        onClick={() => handleSelectFilter(group.key, group.label)}
                      >
                        <span>{group.label}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Right column — sub-categories */}
                  {hoveredParent && (
                    <div className={styles.dropdownRight}>
                      {FILTER_TREE.find((g) => g.key === hoveredParent)?.children.map((child) => (
                        <div
                          key={child.key}
                          className={`${styles.dropdownSubItem} ${activeFilter === child.key ? styles.dropdownSubItemActive : ""}`}
                          onClick={() => handleSelectFilter(child.key, child.label)}
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {paginated.map((proj) => (
              <div key={proj.id} className={styles.projectCard}>
                <div className={styles.projectImgWrap}>
                  <img src={proj.img} alt={proj.title} className={styles.projectImg} />
                  <div className={styles.projectImgOverlay}>
                    <span className={styles.projectTag}>{proj.tag}</span>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`${styles.pageBtn} ${currentPage === page ? styles.pageBtnActive : ""}`}
                  onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

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

export default Projects;
