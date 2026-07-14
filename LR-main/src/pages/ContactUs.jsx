import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({ firstName: "", projectName: "", phone: "", projectPlace: "", productName: "", cityName: "", message: "", file: null });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const whyCards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "High-Quality Solutions",
      desc: "We deliver durable and precision-engineered prefab and modular structures using advanced manufacturing excellence.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M16 8v8l5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Pan-India Presence",
      desc: "With strong execution capability across India, we ensure exceptional installation teams in remote locations too.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M6 26V12l10-8 10 8v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="12" y="18" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      title: "Timely Project Delivery",
      desc: "Our streamlined processes and project team ensure all projects are completed on schedule without compromising quality.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.heroSec} style={{ backgroundImage: "url('/Images/contacthero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&amp;R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>CONTACT L&amp;R <br /><span>GREEN INDIA</span></h1>
          <p className={styles.subtitle}>Get in touch with L&amp;R Green India Pvt Ltd for reliable prefabrication and modular building solutions tailored to your project needs.</p>
          <button className={styles.btnPrimary}>Contact us &nbsp;→</button>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className={styles.touchSec}>
        <div className={styles.touchContainer}>
          <div className={styles.touchHeader}>
            <div>
              <h2 className={styles.secTitle}>Get in <span>Touch</span></h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.touchDesc}>Get in touch with our team for project updates, enquiries, quotations and complaint request for your project needs.</p>
          </div>

          <div className={styles.touchGrid}>
            {/* LEFT — Contact Info */}
            <div className={styles.contactInfoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Name</span>
                    <strong>Mr. Lalit Gautam</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <strong>+91 8595351363 / 9758813668</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Technical Support</span>
                    <strong>Info.Lr1995@gmail.Com</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Office Address</span>
                    <strong>21/02, Gautam Nagar, Gulmohar Enclave, New Delhi-110049</strong>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>100+</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Years Expertise</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Technical Inquiry Form */}
            <div className={styles.formCol}>
              <h3 className={styles.formTitle}>Technical Inquiry</h3>
              {submitted && <div className={styles.successBanner}>✓ Your enquiry has been submitted. We'll be in touch shortly!</div>}
              <form className={styles.inquiryForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="Your Name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Select Project</label>
                    <input type="text" name="projectName" placeholder="Project Name" value={formData.projectName} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone/Tel</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Project Place</label>
                    <input type="text" name="projectPlace" placeholder="Project Location" value={formData.projectPlace} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Product Name</label>
                    <input type="text" name="productName" placeholder="Product / Service" value={formData.productName} onChange={handleChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>City Name</label>
                    <input type="text" name="cityName" placeholder="Your City" value={formData.cityName} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formGroup} style={{ marginBottom: "20px" }}>
                  <label>Detailed Message</label>
                  <textarea name="message" rows={4} placeholder="Describe your project requirements in detail..." value={formData.message} onChange={handleChange} />
                </div>
                <div className={styles.fileRow}>
                  <div className={styles.formGroup} style={{ flex: 1 }}>
                    <label>Upload File</label>
                    <label className={styles.fileLabel}>
                      <input type="file" name="file" onChange={handleChange} style={{ display: "none" }} />
                      <span className={styles.fileBtn}>Choose File</span>
                      <span className={styles.fileHint}>{formData.file ? formData.file.name : "10 MB Max"}</span>
                    </label>
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>Submit Proposal &nbsp;→</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.whySec}>
        <div className={styles.whyContainer}>
          <div className={styles.whyHeader}>
            <div>
              <h2 className={styles.secTitle}>Why Choose L&amp;R <br /><span>Green India</span></h2>
              <div className={styles.divider} />
            </div>
            <p className={styles.whyDesc}>Delivering reliable, high-quality modular solutions with efficiency and indisputable value.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((card, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}>{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className={styles.mapSec}>
        <iframe
          title="L&R Green India Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0!2d77.2090!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s21%2F02%20Gautam%20Nagar%20Gulmohar%20Enclave%20New%20Delhi!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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

export default ContactUs;
