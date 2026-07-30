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
import panel1 from '../assets/Projects/Pufpanel/penal1.jpg'
import panel2 from '../assets/Projects/Pufpanel/panel2.jpg'
import panel3 from '../assets/Projects/Pufpanel/panel3.jpg'
import panel4 from '../assets/Projects/Pufpanel/panel4.jpg'
import panel5 from '../assets/Projects/Pufpanel/panel5.jpg'
import panel6 from '../assets/Projects/Pufpanel/panel6.jpg'
import pre1 from '../assets/Projects/Pre-eng/pre1.jpeg'
import pre2 from '../assets/Projects/Pre-eng/pre2.jpeg'
import pre3 from '../assets/Projects/Pre-eng/pre3.jpg'
import pre4 from '../assets/Projects/Pre-eng/pre4.jpg'
import pre5 from '../assets/Projects/Pre-eng/pre5.jpg'
import prefab1 from '../assets/Projects/Prefab/prefab1.jpg'
import prefab2 from '../assets/Projects/Prefab/prefab2.jpg'
import prefab3 from '../assets/Projects/Prefab/prefab3.jpg'
import prefab4 from '../assets/Projects/Prefab/prefab4.jpg'
import prefab5 from '../assets/Projects/Prefab/prefab5.jpg'
import prefab6 from '../assets/Projects/Prefab/prefab6.jpg'
import prefab7 from '../assets/Projects/Prefab/prefab7.jpg'
import prefab8 from '../assets/Projects/Prefab/prefab8.jpg'
import container1 from '../assets/Projects/Container/container1.jpg'
import container2 from '../assets/Projects/Container/container2.jpg'
import container3 from '../assets/Projects/Container/container3.jpg'
import container4 from '../assets/Projects/Container/container4.jpg'
import container5 from '../assets/Projects/Container/container5.jpg'
import container6 from '../assets/Projects/Container/container6.jpg'
import container7 from '../assets/Projects/Container/container7.jpg'
import container8 from '../assets/Projects/Container/container8.jpg'
import hvac1 from '../assets/Projects/HVAC/hvac1.jpg'
import hvac2 from '../assets/Projects/HVAC/hvac2.jpg'
import hvac3 from '../assets/Projects/HVAC/hvac3.jpg'
import hvac4 from '../assets/Projects/HVAC/hvac4.jpg'
import module from '../assets/Projects/Container/module.jpg'
import steel from '../assets/Projects/Pre-eng/steel.jpeg'
import energe from '../assets/Projects/solar/energ.jpg'

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
  { id: 3, title: "Prefab Labour Accommodation", category: "prefab-modular", tag: "Prefab Modular", img: prefab1, desc: "Complete prefabricated labour accommodation complex with 200 rooms, canteen, and washrooms for a construction project site." },
  { id: 4, title: "Industrial Warehouse — Steel Structure", category: "pre-engineered", tag: "Pre-engineered", img: pre1, desc: "Pre-engineered steel warehouse of 15,000 sq ft for a logistics company requiring rapid completion within 6 weeks." },
  { id: 5, title: "Rooftop Residential Flat (G+2)", category: "rooftop-room", tag: "Rooftop Room", img: rooftop5, desc: "Prefabricated rooftop residential flat on an existing RCC building using LGSF technology with complete finishing." },
  { id: 6, title: "Module Mounting Structure — 1 MW", category: "solar-mounting", tag: "Solar Mounting", img: solar2, desc: "Supply and installation of galvanized steel module mounting structures for a 1 MW ground-mounted solar farm." },
  { id: 7, title: "MS Executive Container Office", category: "ms-containers", tag: "MS Containers", img: container1, desc: "Custom-built executive MS container office with AC, full electrical fittings, and premium interior for a site office." },
  { id: 8, title: "Factory Building — PEB Structure", category: "pre-engineered", tag: "Pre-engineered", img: pre2, desc: "Pre-engineered factory building of 25,000 sq ft with mezzanine floors for a manufacturing unit in Noida." },
  { id: 9, title: "Prefab Sales Office — LGSF", category: "lgsf", tag: "LGSF", img: lgsf6, desc: "Premium LGSF prefabricated sales office with glass facade and branded exterior for a real estate developer." },
  { id: 10, title: "PUF Wall Panels — Cold Storage", category: "sandwich-panels", tag: "Sandwich Panels", img: panel6, desc: "Complete cold storage insulation using PUF wall and roof panels for a 2,000 sq ft food processing facility." },
  { id: 11, title: "Solar Carport — Parking Structure", category: "solar-hardware", tag: "Solar Hardware", img: solar3, desc: "Solar carport mounting structure for 50 kW rooftop system over a commercial parking area in Delhi NCR." },
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
  { id: 23, title: "Puf Sandwich Panel", category: "sandwich-panels", tag: "Sandwich Panels", img: panel1, desc: "High-performance PUF sandwich panels designed for superior thermal insulation and durability. Ideal for prefabricated structures, cold rooms, and industrial applications with energy-efficient solutions." },
  { id: 24, title: "Roof PUF Panel", category: "sandwich-panels", tag: "Roof PUF Panel", img: panel2, desc: "Durable roof PUF panels designed for excellent thermal insulation and weather protection. Ideal for prefabricated buildings, warehouses, and industrial structures with long-lasting performance." },
  { id: 25, title: "EPS PUF Panels", category: "sandwich-panels", tag: "Roof PUF Panel", img: panel3, desc: "High-quality EPS PUF panels designed for effective insulation, strength, and energy efficiency. Ideal for prefabricated buildings, clean rooms, and industrial applications with reliable performance." },
  { id: 26, title: "Rock Wool Panels", category: "sandwich-panels", tag: "Rock Wool Panels", img: panel4, desc: "Fire-resistant rock wool panels designed for superior thermal and acoustic insulation. Ideal for industrial buildings, clean rooms, and prefabricated structures requiring safety, durability, and energy efficiency." },
  { id: 27, title: "Glass Wool Sandwich Panels", category: "sandwich-panels", tag: "Glass Wool Panels", img: panel5, desc: "Premium glass wool sandwich panels designed for excellent thermal and sound insulation. Ideal for industrial, commercial, and prefabricated structures with enhanced safety, durability, and energy efficiency." },
  { id: 28, title: "Warehouse", category: "pre-engineered", tag: "Pre-engineered", img: pre3, desc: "Advanced pre-engineered warehouses designed for efficient storage and industrial applications. Built with robust steel structures, faster installation, and customizable designs for durable long-term performance." },
  { id: 29, title: "Industrial Shed", category: "pre-engineered", tag: "Pre-engineered", img: pre4, desc: "Durable industrial sheds designed for manufacturing, storage, and commercial applications. Built with strong structures, quick installation, and customized solutions to meet diverse industrial requirements." },
  { id: 30, title: "Cold Room", category: "pre-engineered", tag: "Cold Room", img: pre5, desc: "Advanced cold room solutions designed for efficient temperature control and product preservation. Built with high-quality insulation, energy efficiency, and reliable performance for storage applications." },
  { id: 31, title: "Prefabricated Site Office", category: "prefab-modular", tag: "Prefab Modular", img: prefab2, desc: "Modern prefabricated site offices designed for construction and industrial projects. Built for quick installation, durability, and comfortable workspaces with customizable layouts." },
  { id: 32, title: "Prefabricated Control Panel Rooms", category: "prefab-modular", tag: "Control Room", img: prefab3, desc: "Secure prefabricated control panel rooms designed to protect electrical and automation systems. Built with durable materials, quick installation, and reliable performance for industrial applications." },
  { id: 33, title: "Prefabricated Clean Room", category: "prefab-modular", tag: "Clean Room", img: prefab4, desc: "High-performance prefabricated clean rooms designed for controlled and contamination-free environments. Built with superior insulation, hygienic materials, and customizable layouts for industrial and pharmaceutical applications." },
  { id: 34, title: "Prefabricated Mushroom Farms", category: "prefab-modular", tag: "Mushroom Farm", img: prefab4, desc: "Efficient prefabricated mushroom farms designed for controlled cultivation and higher productivity. Built with durable insulated panels, quick installation, and optimal growing conditions for year-round farming." },
  { id: 35, title: "Prefabricated Mushroom Farms", category: "prefab-modular", tag: "Mushroom Farm", img: prefab4, desc: "Efficient prefabricated mushroom farms designed for controlled cultivation and higher productivity. Built with durable insulated panels, quick installation, and optimal growing conditions for year-round farming." },
  { id: 36, title: "Prefab Industrial Enclosures", category: "prefab-modular", tag: "Industrial Enclosures", img: prefab5, desc: "Robust prefab industrial enclosures designed to protect equipment and critical operations. Built with durable materials, quick installation, and customizable designs for reliable industrial performance." },
  { id: 37, title: "Prefab Industrial Enclosures", category: "prefab-modular", tag: "Industrial Enclosures", img: prefab6, desc: "Robust prefab industrial enclosures designed to protect equipment and critical operations. Built with durable materials, quick installation, and customizable designs for reliable industrial performance." },
  { id: 38, title: "Prefabricated Staff Canteens & Recreation Rooms", category: "prefab-modular", tag: "Staff Canteens & Recreation Rooms", img: prefab7, desc: "Modern prefabricated staff canteens and recreation rooms designed for employee comfort and convenience. Built with durable materials, quick installation, and customizable layouts for productive workplaces." },
  { id: 39, title: "Prefab Railway & Telecom Shelters", category: "prefab-modular", tag: "Railway & Telecom Shelters", img: prefab8, desc: "Durable prefab railway and telecom shelters designed to protect critical equipment in all weather conditions. Built for quick installation, high strength, and reliable long-term performance." },
  { id: 40, title: "MS Containers", category: "ms-containers", tag: "MS Containers", img: container2, desc: "High-strength MS containers designed for secure storage, site offices, and industrial applications. Built with durable mild steel, quick installation, and customizable layouts for long-lasting performance." },
  { id: 41, title: "Premium MS Containers", category: "ms-containers", tag: "Premium Containers", img: container3, desc: "Premium MS containers designed for superior strength, security, and long-lasting performance. Ideal for site offices, storage, and industrial applications with fully customizable layouts." },
  { id: 42, title: "Executive MS Containers", category: "ms-containers", tag: "Executive Containers", img: container4, desc: "Premium executive MS containers designed for modern offices and commercial spaces. Built with durable steel, elegant interiors, and customizable layouts for comfort and professional functionality." },
  { id: 43, title: "L&R Value MS Container", category: "ms-containers", tag: "L&R Value Container", img: container5, desc: "L&R Value MS Containers offer durable, cost-effective solutions for storage, site offices, and industrial use. Built with high-quality steel, quick installation, and customizable designs for reliable performance." },
  { id: 44, title: "Home MS Containers", category: "ms-containers", tag: "Home Containers", img: container6, desc: "Modern Home MS Containers designed for comfortable and stylish living spaces. Built with durable steel, quick installation, and customizable interiors for long-lasting residential use." },
  { id: 45, title: "PUF MS Container", category: "ms-containers", tag: "PUF Container", img: container7, desc: "Insulated PUF containers designed for superior thermal performance and durability. Ideal for site offices, storage, accommodation, and industrial applications with quick installation and energy efficiency." },
  { id: 46, title: "Hinge MS Container", category: "ms-containers", tag: "Hinge Container", img: container8, desc: "Hinge MS containers designed for easy access, secure storage, and industrial applications. Built with durable mild steel, quick installation, and reliable long-term performance." },
  { id: 47, title: "HVAC Solutions", category: "hvac", tag: "HVAC", img: hvac1, desc: "Advanced HVAC solutions designed for efficient heating, ventilation, and air conditioning. Built for optimal indoor comfort, energy efficiency, and reliable performance across commercial and industrial spaces." },
  { id: 48, title: "Central AC Systems", category: "central-ac", tag: "Central AC", img: hvac2, desc: "High-performance central AC systems designed for efficient cooling and consistent indoor comfort. Ideal for commercial, industrial, and residential spaces with energy-efficient and reliable operation." },
  { id: 49, title: "VRF/VRV Systems", category: "vrf", tag: "HVAC", img: hvac3, desc: "Energy-efficient VRF/VRV systems designed for precise climate control and maximum comfort. Ideal for commercial, residential, and industrial spaces with flexible installation and reliable performance." },
  { id: 50, title: "Industrial Ventilation", category: "industrial-ventilation", tag: "HVAC", img: hvac4, desc: "Efficient industrial ventilation systems designed to improve air quality and workplace safety. Built for reliable airflow, energy efficiency, and optimal performance in industrial environments." },
  { id: 51, title: "Modular Solutions", category: "modular", tag: "Modular Solutions", img: module, desc: "Innovative modular solutions designed for fast construction and flexible space requirements. Built with durable materials, customizable designs, and quick installation for residential, commercial, and industrial applications." },
  { id: 53, title: "Steel Structure Buildings", category: "steel", tag: "Steel Buildings", img: steel, desc: "High-strength steel structure buildings designed for industrial, commercial, and infrastructure projects. Built for durability, rapid construction, and customizable layouts with long-lasting performance." },
  { id: 54, title: "Solar Energy Solutions", category: "solar", tag: "Solar Energy", img: energe, desc: "Comprehensive solar energy solutions designed for efficient, sustainable, and cost-effective power generation. Built with high-quality components for reliable performance, long-term savings, and maximum energy efficiency." },




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
                        className={`${styles.dropdownItem} ${hoveredParent === group.key ? styles.dropdownItemActive : ""
                          }`}
                        onMouseEnter={() => setHoveredParent(group.key)}
                      >
                        <span>{group.label}</span>

                        <svg width="14" height="14" viewBox="0 0 24 24">
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
      <section className={styles.cta}>
        <h2>Let's Build Your Next Project Together</h2>
        <p>
          From prefabricated buildings to steel structures, L&R Enterprises delivers reliable,
          high-quality, and customized solutions for every project. Contact our team today and turn your vision into reality.
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

export default Projects;
