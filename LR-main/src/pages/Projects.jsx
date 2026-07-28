import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Projects.module.css";
import lgsf1 from '../assets/Projects/LGSF/lgsf.jpeg'
import lgsf2 from '../assets/Projects/LGSF/lgsf2.jpg'
import lgsf3 from '../assets/Projects/LGSF/lgsf3.jpg'
import lgsf4 from '../assets/Projects/LGSF/lgsf4.jpg'
import lgsf5 from '../assets/Projects/LGSF/lgsf5.jpg'
import lgsf6 from '../assets/Projects/LGSF/lgsf6.jpg'
import lgsf7 from '../assets/Projects/LGSF/lgsf7.jpg'
import lgsf8 from '../assets/Projects/LGSF/lgsf8.jpg'
import lgsf9 from '../assets/Projects/LGSF/lgsf9.jpg'
import rooftop1 from '../assets/Projects/rooftop/rooftop1.jpg'
import rooftop2 from '../assets/Projects/rooftop/rooftop2.jpg'
import rooftop3 from '../assets/Projects/rooftop/rooftop3.jpg'
import rooftop4 from '../assets/Projects/rooftop/rooftop4.jpg'
import rooftop5 from '../assets/Projects/rooftop/rooftop5.jpg'
import solar1 from '../assets/Projects/solar/solar.jpg'
import solar2 from '../assets/Projects/solar/solar2.jpg'
import solar3 from '../assets/Projects/solar/solar3.jpg'

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
  { id: 1, title: "Light Gauge Steel Frame Construction", category: "lgsf", tag: "LGSF", img: lgsf1, desc: "LGSF (Light Gauge Steel Frame) is a modern system using cold-formed steel for strong, lightweight structures. At L&R Green Pvt Ltd, we build prefab rooftop and structural systems that are quick to install, durable, and ideal for all project types." },
  { id: 2, title: "Solar EPC Farm Installation", category: "solar-epc", tag: "Solar EPC", img: solar1, desc: "End-to-end solar EPC project delivering a 500 kW ground-mounted solar power plant for an industrial client in Rajasthan." },
  { id: 3, title: "Prefab Labour Accommodation", category: "prefab-modular", tag: "Prefab Modular", img: "/Images/proj3.jpg", desc: "Complete prefabricated labour accommodation complex with 200 rooms, canteen, and washrooms for a construction project site." },
  { id: 4, title: "Industrial Warehouse — Steel Structure", category: "pre-engineered", tag: "Pre-engineered", img: "/Images/proj4.jpg", desc: "Pre-engineered steel warehouse of 15,000 sq ft for a logistics company requiring rapid completion within 6 weeks." },
  { id: 5, title: "Rooftop Residential Flat (G+2)", category: "rooftop-room", tag: "Rooftop Room", img: rooftop5, desc: "Prefabricated rooftop residential flat on an existing RCC building using LGSF technology with complete finishing." },
  { id: 6, title: "Module Mounting Structure — 1 MW", category: "solar-mounting", tag: "Solar Mounting", img: "/Images/proj6.jpg", desc: "Supply and installation of galvanized steel module mounting structures for a 1 MW ground-mounted solar farm." },
  { id: 7, title: "MS Executive Container Office", category: "ms-containers", tag: "MS Containers", img: "/Images/proj7.jpg", desc: "Custom-built executive MS container office with AC, full electrical fittings, and premium interior for a site office." },
  { id: 8, title: "Factory Building — PEB Structure", category: "pre-engineered", tag: "Pre-engineered", img: "/Images/proj8.jpg", desc: "Pre-engineered factory building of 25,000 sq ft with mezzanine floors for a manufacturing unit in Noida." },
  { id: 9, title: "Prefab Sales Office — LGSF", category: "lgsf", tag: "LGSF", img: lgsf6, desc: "Premium LGSF prefabricated sales office with glass facade and branded exterior for a real estate developer." },
  { id: 10, title: "PUF Wall Panels — Cold Storage", category: "sandwich-panels", tag: "Sandwich Panels", img: "/Images/proj10.jpg", desc: "Complete cold storage insulation using PUF wall and roof panels for a 2,000 sq ft food processing facility." },
  { id: 11, title: "Solar Carport — Parking Structure", category: "solar-hardware", tag: "Solar Hardware", img: "/Images/proj11.jpg", desc: "Solar carport mounting structure for 50 kW rooftop system over a commercial parking area in Delhi NCR." },
  { id: 12, title: "Prefab Farmhouses", category: "lgsf", tag: "Farmhouse", img: lgsf8, desc: "Prefab Farmhouses offer modern, durable, and comfortable living spaces. Designed for quick installation, energy efficiency, and lasting performance." },
  { id: 13, title: "LGSF Prefab Dry Wall", category: "lgsf", tag: "Prefab Dry Wall", img: lgsf2, desc: "LGSF prefab dry walls offer lightweight, durable, and energy-efficient partition solutions. They ensure quick installation, excellent insulation, and long-lasting performance." },
  { id: 14, title: "LGSF Prefab Residential Houses (G+1 & G+2)", category: "lgsf", tag: "Prefab Residential Houses (G+1 & G+2)", img: lgsf3, desc: "LGSF G+1 and G+2 residential houses provide strong, lightweight, and energy-efficient living spaces. Designed for faster construction, durability, and modern comfort." },
  { id: 15, title: "LGSF Luxury Lounges", category: "lgsf", tag: "Luxury Lounges", img: lgsf4, desc: "LGSF Luxury Lounges offer elegant, durable, and modern spaces with premium finishes. Built for fast construction, comfort, and long-lasting performance." },
  { id: 16, title: "LGSF Showroom", category: "lgsf", tag: "Showroom", img: lgsf5, desc: "LGSF Showrooms provide modern, durable, and customizable commercial spaces. Built for fast construction, energy efficiency, and long-lasting performance." },
  { id: 17, title: "LGSF Prefabricated Waiting Areas", category: "lgsf", tag: "Prefabricated Waiting Areas", img: lgsf7, desc: "LGSF Prefabricated Waiting Areas offer comfortable, durable, and modern shelter solutions. Designed for quick installation, weather resistance, and long-lasting performance." },
  { id: 18, title: "Prefab Cottages", category: "lgsf", tag: "Cottages", img: lgsf9, desc: "Prefab Cottages offer modern, comfortable, and durable living spaces. Designed for quick installation, energy efficiency, and lasting performance." },
  { id: 19, title: "Rooftop Rooms for Residential Flats", category: "rooftop-room", tag: "Residential Flats", img: rooftop1, desc: "Space-efficient prefabricated rooftop rooms designed for residential flats. Offering quick installation, durability, and modern comfort with excellent insulation and customized designs." },
  { id: 20, title: "Rooftop Party Lounge Rooms for Residential Flats", category: "rooftop-room", tag: "Rooftop Party Lounge", img: rooftop2, desc: "Stylish prefabricated rooftop party lounge rooms designed for residential flats. Create elegant entertainment spaces with modern interiors, quick installation, and durable construction." },
  { id: 21, title: "Rooftop Guest Rooms", category: "rooftop-room", tag: "Rooftop Guest Rooms", img: rooftop3, desc: "Comfortable prefabricated rooftop guest rooms designed for residential and commercial spaces. Built with modern layouts, quick installation, and durable materials for a welcoming stay experience." },
  { id: 22, title: "Rooftop Servant Rooms", category: "rooftop-room", tag: "Rooftop Servant Rooms", img: rooftop4, desc: "Compact and durable prefabricated rooftop servant rooms designed for residential needs. Providing comfortable living spaces with quick installation, smart design, and reliable performance." },
  { id: 23, title: "Solar Module Mounting", category: "solar-epc", tag: "Module Mounting", img: solar2, desc: "Reliable solar module mounting systems designed for secure and efficient panel installation. Built with durable materials to provide stability, long-term performance, and easy maintenance." },
  { id: 23, title: "Hardware for Solar Systems", category: "solar-epc", tag: "Hardware Solar", img: solar3, desc: "Advanced solar hardware solutions designed for efficient and secure solar installations. Built for durability, easy integration, and reliable performance to maximize renewable energy output." },


];

const PAGE_SIZE = 12;

const Projects = () => {
  const navigate = useNavigate()
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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            L&r green <br />
            <span>Projects
            </span>
          </h1>
          <p className={styles.heroDesc}>
            At L&R Green Pvt Ltd, we deliver high-performance Rockwool panels designed for demanding
            industrial, commercial, and specialized environments.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>











      {/* PROJECTS GRID */}
      <section className={styles.projectsSec}>
        <div className={styles.projectsContainer}>

          {/* Heading row */}
          <div className={styles.headingRow}>
            <div className={styles.ProjectText}>
              <h2>Discover Our <br /> Projects</h2>
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
                          className={`${styles.dropdownSubItems} ${activeFilter === child.key ? styles.dropdownSubItemActive : ""}`}
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
            {paginated.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.projectCard} ${index === 0 ? styles.activeCard : ""
                  }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.projectImg}
                />
                <div className={styles.projectOverlay}></div>
                <div className={styles.projectContent}>
                  <span className={styles.projectTag}>{project.tag}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
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
