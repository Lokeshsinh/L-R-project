import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../assets/Home/logo.jpg'

import "../../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [openNested, setOpenNested] = useState(null);
  const [openDeep, setOpenDeep] = useState(null);
  const navigate = useNavigate();

  const isMobile = () => window.innerWidth <= 900;

  useEffect(() => {
    const applyFlips = () => {
      if (isMobile()) return;
      const MARGIN = 16;
      document
        .querySelectorAll(".dropdown-submenu, .nested-submenu, .deep-submenu")
        .forEach((el) => {
          const list = el.querySelector(
            ":scope > .submenu-list, :scope > .nested-list, :scope > .deep-list",
          );
          if (!list) return;
          el.classList.remove("flip-left");
          const rect = list.getBoundingClientRect();
          if (rect.right > window.innerWidth - MARGIN) {
            el.classList.add("flip-left");
          }
        });
    };
    const nav = document.querySelector(".nav-links");
    if (nav) nav.addEventListener("mouseenter", applyFlips, true);
    window.addEventListener("resize", applyFlips);
    return () => {
      if (nav) nav.removeEventListener("mouseenter", applyFlips, true);
      window.removeEventListener("resize", applyFlips);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSub(null);
    setOpenNested(null);
    setOpenDeep(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setOpenDropdown(null);
      setOpenSub(null);
      setOpenNested(null);
      setOpenDeep(null);
    }
  };

  const handleProductsClick = (e) => {
    if (!isMobile()) return;
    e.preventDefault();
    setOpenDropdown((prev) => (prev === "products" ? null : "products"));
    setOpenSub(null);
    setOpenNested(null);
    setOpenDeep(null);
  };

  const handleSubClick = (name, path) => (e) => {
    if (isMobile()) {
      e.preventDefault();
      setOpenSub((prev) => (prev === name ? null : name));
      setOpenNested(null);
      setOpenDeep(null);
    } else if (path) {
      navigate(path);
      closeMenu();
    }
  };

  const handleNestedClick = (name, path) => (e) => {
    if (isMobile()) {
      e.preventDefault();
      setOpenNested((prev) => (prev === name ? null : name));
      setOpenDeep(null);
    } else if (path) {
      navigate(path);
      closeMenu();
    }
  };

  const handleDeepClick = (name, path) => (e) => {
    if (isMobile()) {
      e.preventDefault();
      setOpenDeep((prev) => (prev === name ? null : name));
    } else if (path) {
      navigate(path);
      closeMenu();
    }
  };

  return (
    <header className="site-header">
      {/* Top bar */}
      <div className="top-bar">
        {/* names */}
        <div className="top-header">
        <div className="top-label">L&amp;R GREEN INDIA PVT LTD</div>
        <div className="top-info">
          <span className="info-item">
            <i className="ti ti-mail" aria-hidden="true"></i>
            <span>Info.Lr1995@gmail.com</span>
          </span>
          <span className="info-item">
            <i className="ti ti-phone" aria-hidden="true"></i>
            <span>+91-8595351363 &nbsp;|&nbsp; 9758813668</span>
          </span>
        </div>
        </div>
        {/* icons */}
        <div className="top-social">
          <a href="#fb" aria-label="Facebook">
            <FaFacebookF className="ti" size={16} />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <FaLinkedinIn className="ti" size={16} />
          </a>
          <a href="#twitter" aria-label="Twitter / X">
           <FaXTwitter  className="ti" size={16}/>
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram className="ti" size={16} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="brand-icon-circle">
            <img  src={logo} alt="logo" />
          </div>
        </Link>

        <ul className={`nav-links${menuOpen ? " show-menu" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          {/* OUR PRODUCTS */}
          <li
            className={`dropdown${openDropdown === "products" ? " mobile-open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-toggle"
              onClick={handleProductsClick}
              aria-expanded={openDropdown === "products"}
              aria-haspopup="true"
            >
              <span>Our Products</span>
              <i className="ti ti-chevron-down arrow" aria-hidden="true"></i>
            </button>

            <ul className="dropdown-menu">
              {/* 1. MODULAR SOLUTIONS */}
              <li
                className={`dropdown-submenu${openSub === "modular" ? " mobile-sub-open" : ""}`}
              >
                <button type="button" onClick={handleSubClick("modular")}>
                  <span>Modular Solutions</span>
                  <i
                    className="ti ti-chevron-right side-arrow"
                    aria-hidden="true"
                  ></i>
                </button>
                <ul className="submenu-list">
                  {/* MS Containers → opens nested with Premium label + links */}
                  <li
                    className={`nested-submenu${openNested === "ms-containers" ? " mobile-nested-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={handleNestedClick(
                        "ms-containers",
                        "/ms-containers",
                      )}
                    >
                      <span>MS Containers</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      {/* Premium Containers = section heading, not clickable */}
                      <li>
                        <Link
                          to="/premium-ms-containers"
                          onClick={closeMenu}
                          className="nested-section-heading"
                          style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                          Premium Containers
                        </Link>
                      </li>
                      <li>
                        <Link to="/executive-containers" onClick={closeMenu}>
                          Executive Container
                        </Link>
                      </li>
                      <li>
                        <Link to="/lr-value-containers" onClick={closeMenu}>
                          L&amp;R Values
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Direct items in Modular Solutions */}
                  <li>
                    <Link to="/home-containers" onClick={closeMenu}>
                      Home Containers
                    </Link>
                  </li>
                  <li>
                    <Link to="/puf-containers" onClick={closeMenu}>
                      PUF Containers
                    </Link>
                  </li>
                  <li>
                    <Link to="/hinge-containers" onClick={closeMenu}>
                      Hinge Containers
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 2. STEEL STRUCTURES BUILDINGS */}
              <li
                className={`dropdown-submenu${openSub === "steel" ? " mobile-sub-open" : ""}`}
              >
                <button type="button" onClick={handleSubClick("steel")}>
                  <span>Steel Structures Buildings</span>
                  <i
                    className="ti ti-chevron-right side-arrow"
                    aria-hidden="true"
                  ></i>
                </button>
                <ul className="submenu-list">
                  {/* Pre-engineered Building */}
                  <li
                    className={`nested-submenu${openNested === "pre" ? " mobile-nested-open" : ""}`}
                  >
                    <button type="button" onClick={handleNestedClick("pre")}>
                      <span>Pre-engineered Building</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      <li>
                        <Link to="/factory-building" onClick={closeMenu}>
                          Factory Building
                        </Link>
                      </li>
                      <li>
                        <Link to="/warehouse" onClick={closeMenu}>
                          Warehouse
                        </Link>
                      </li>
                      <li>
                        <Link to="/industrial-sheds" onClick={closeMenu}>
                          Industrial Shell
                        </Link>
                      </li>
                      <li>
                        <Link to="/cold-room" onClick={closeMenu}>
                          Cold Storage
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Prefabricated Modular Building */}
                  <li
                    className={`nested-submenu${openNested === "prefab" ? " mobile-nested-open" : ""}`}
                  >
                    <button type="button" onClick={handleNestedClick("prefab")}>
                      <span>Prefabricated Modular Building</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      <li>
                        <Link to="/labour-accommodation" onClick={closeMenu}>
                          Prefab Labour Accommodation
                        </Link>
                      </li>
                      <li>
                        <Link to="/site-office" onClick={closeMenu}>
                          Prefab Site Office
                        </Link>
                      </li>
                      <li>
                        <Link to="/control-rooms" onClick={closeMenu}>
                          Control Rooms
                        </Link>
                      </li>
                      <li>
                        <Link to="/clean-rooms" onClick={closeMenu}>
                          Clean Rooms
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-mushroom" onClick={closeMenu}>
                          Mushroom Plants
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/prefab-industrial-enclosures"
                          onClick={closeMenu}
                        >
                          Industrial Enclosures
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-staff-canteens" onClick={closeMenu}>
                          Prefabricated Staff Canteens
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-dry-wall" onClick={closeMenu}>
                          Prefab Drywall
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-railway-shelters" onClick={closeMenu}>
                          Prefab Railway &amp; Telecom Shelters
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Sandwich Panels */}
                  <li
                    className={`nested-submenu${openNested === "sandwich" ? " mobile-nested-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={handleNestedClick(
                        "sandwich",
                        "/prefab-sandwich-panels",
                      )}
                    >
                      <span>Sandwich Panels</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      {/* PUF → Wall & Roof (4th level) */}
                      <li
                        className={`deep-submenu${openDeep === "puf-panels" ? " mobile-deep-open" : ""}`}
                      >
                        <button
                          type="button"
                          onClick={handleDeepClick(
                            "puf-panels",
                            "/puf-sandwich-panels",
                          )}
                        >
                          <span>PUF Sandwich Panels</span>
                          <i
                            className="ti ti-chevron-right side-arrow"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <ul className="deep-list">
                          <li>
                            <Link to="/wall-puf-panels" onClick={closeMenu}>
                              Wall PUF Panels
                            </Link>
                          </li>
                          <li>
                            <Link to="/roof-puf-panels" onClick={closeMenu}>
                              Roof PUF Panels
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/eps-panels" onClick={closeMenu}>
                          EPS Sandwich Panels
                        </Link>
                      </li>
                      <li>
                        <Link to="/rockwool-panels" onClick={closeMenu}>
                          Rockwool Panels
                        </Link>
                      </li>
                      <li>
                        <Link to="/glasswool-panels" onClick={closeMenu}>
                          Glasswool Panels
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Rooftop Room */}
                  <li
                    className={`nested-submenu${openNested === "rooftop" ? " mobile-nested-open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={handleNestedClick("rooftop")}
                    >
                      <span>Rooftop Room</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      <li>
                        <Link
                          to="/rooftop-residential-flats"
                          onClick={closeMenu}
                        >
                          Residential Flat
                        </Link>
                      </li>
                      <li>
                        <Link to="/rooftop-party-lounge" onClick={closeMenu}>
                          Party Lounge
                        </Link>
                      </li>
                      <li>
                        <Link to="/rooftop-guest-rooms" onClick={closeMenu}>
                          Guest Room
                        </Link>
                      </li>
                      <li>
                        <Link to="/rooftop-servant-rooms" onClick={closeMenu}>
                          Servant Room
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* LGSF Modular Solutions */}
                  <li
                    className={`nested-submenu${openNested === "lgsf" ? " mobile-nested-open" : ""}`}
                  >
                    <button type="button" onClick={handleNestedClick("lgsf")}>
                      <span>LGSF Modular Solutions</span>
                      <i
                        className="ti ti-chevron-right side-arrow"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <ul className="nested-list">
                      <li>
                        <Link to="/prefab-dry-wall" onClick={closeMenu}>
                          Prefab Drywall
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/prefab-residential-house"
                          onClick={closeMenu}
                        >
                          Prefab Residential House (G+1, G+2)
                        </Link>
                      </li>
                      <li>
                        <Link to="/lgsf-luxury-lounges" onClick={closeMenu}>
                          Luxury Lounge
                        </Link>
                      </li>
                      <li>
                        <Link to="/lgsf-showroom" onClick={closeMenu}>
                          Showrooms
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-sales-office" onClick={closeMenu}>
                          Prefabricated Sales Office
                        </Link>
                      </li>
                      <li>
                        <Link to="/prefab-waiting-area" onClick={closeMenu}>
                          Prefabricated Waiting Area
                        </Link>
                      </li>
                      <li>
                        <Link to="/farmhouse-cottage" onClick={closeMenu}>
                          Farmhouses / Cottages
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* 3. SOLAR ENERGY SOLUTIONS */}
              <li
                className={`dropdown-submenu${openSub === "solar" ? " mobile-sub-open" : ""}`}
              >
                <button type="button" onClick={handleSubClick("solar")}>
                  <span>Solar Energy Solutions</span>
                  <i
                    className="ti ti-chevron-right side-arrow"
                    aria-hidden="true"
                  ></i>
                </button>
                <ul className="submenu-list">
                  <li>
                    <Link to="/solar-epc" onClick={closeMenu}>
                      Solar EPC Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-mounting-structure" onClick={closeMenu}>
                      Module Mounting Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/hardware-solutions" onClick={closeMenu}>
                      Hardware Solutions
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 4. HVAC SOLUTIONS — direct */}
              <li>
                <Link to="/hvac-solutions" onClick={closeMenu}>
                  HVAC Solutions
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/brochure" onClick={closeMenu}>
              Brochure
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button className="dark-btn desktop-btn"><span>Get Started</span></button>
        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <i className="ti ti-x" aria-hidden="true"></i>
          ) : (
            <i className="ti ti-menu-2" aria-hidden="true"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
