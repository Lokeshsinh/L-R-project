import React, { useState, useRef, useEffect } from "react";
import styles from '../../styles/Contact.module.css';
import { ArrowRight, School } from "lucide-react";
import {
  ChevronDown,
  Building2,
  Container,
  Warehouse,
  SunMedium,
} from "lucide-react";
const ContactCTA = () => {
  const projects = [
    {
      value: "Pre-Engineered Building",
      icon: <Building2 size={22} />,
      desc: "Industrial Steel Structures",
    },
    {
      value: "MS Container",
      icon: <Container size={22} />,
      desc: "Portable Container Solutions",
    },
    {
      value: "LGSF Structure",
      icon: <Warehouse size={22} />,
      desc: "Light Gauge Steel Frame",
    },
    {
      value: "Solar Mounting Structure",
      icon: <SunMedium size={22} />,
      desc: "Solar Support Systems",
    },
  ];

  const [selectedProject, setSelectedProject] = useState("");
  const [openProjects, setOpenProjects] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenProjects(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    project: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*New Project Inquiry*

👤 Name: ${formData.name}

🏗 Project: ${formData.project}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

📝 Message:
${formData.message}`;

    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <section className={styles.contactSection}>
      {/* Background blueprint overlay */}
      <div
        className={styles.bgOverlay}

      />

      {/* Header Area */}
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <span className={styles.tag}>• Get In Touch</span>
          <h2>
            Let’s Build<br />
            <span className={styles.blueText}>Something That Lasts</span>
          </h2>
          <div className={styles.underline}></div>
        </div>
        <p className={styles.headerDesc}>
          Request a comprehensive technical proposal for your<br />
          next Pre-Engineered Building or structural solution.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className={styles.contactCard}>
        {/* Left Form Column */}
        <div className={styles.formColumn}>
          <h3>Technical Inquiry</h3>
          <div className={styles.formUnderline}></div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe"
                name="name"
               
                value={formData.name}
                onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Select Project</label>

              <div className={styles.projectDropdown} ref={dropdownRef}>
                <div
                  className={styles.projectSelect}
                  onClick={() => setOpenProjects(!openProjects)}
                >
                  <span>
                    {selectedProject || "Select Project"}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`${styles.arrowIcon} ${openProjects ? styles.rotate : ""
                      }`}
                  />
                </div>

                {openProjects && (
                  <div className={styles.projectPopup}>
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className={styles.projectCard}
                        onClick={() => {
                          setSelectedProject(project.value);
                          setOpenProjects(false);
                        }}
                      >
                        <div className={styles.projectIcon}>
                          {project.icon}
                        </div>

                        <div className={styles.projectContent}>
                          <h4>{project.value}</h4>
                          <p>{project.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input type="text" 
                name="phone"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" name="email"
                placeholder="Dragon@gmail.com"
                value={formData.email}
                onChange={handleChange} />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Detailed Message</label>
              <textarea placeholder="Describe you project scope, location, and demenions"></textarea>
            </div>

            <button type="submit" onClick={handleSubmit} className={styles.submitBtn}>
              <span>Submit Proposal</span>
              <ArrowRight name="message"
                placeholder="Describe your project scope, location and dimensions"
                value={formData.message}
                onChange={handleChange} size={18} strokeWidth={2.5} className={styles.arrow} />
            </button>
          </form>
        </div>

        {/* Right Info Column */}
        <div className={styles.infoColumn}>
          {/* Top Blue Info Box */}
          <div className={styles.infoBox}>
            <div className={styles.homeIcon}>
              <School size={50} />

            </div>

            <div className={styles.infoGroup}>
              <span className={styles.infoLabel}>Office Address</span>
              <p className={styles.infoValue}>
                216/2, Gautam Nagar,<br />
                Gulmohar Enclave,<br />
                New Delhi-110049
              </p>
            </div>

            <div className={styles.infoGroup}>
              <span className={styles.infoLabel}>Direct Contact</span>
              <p className={styles.infoValue}>
                +91 8595351363<br />
                9758813668
              </p>
            </div>

            <div className={styles.infoGroup}>
              <span className={styles.infoLabel}>Technical Support</span>
              <a href="mailto:Info.Lr1995@gmail.com" className={styles.infoLink}>
                Info.Lr1995@gmail.com
              </a>
            </div>
          </div>

          {/* Bottom Stats Box */}
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;