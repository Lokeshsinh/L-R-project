import React from 'react';
import styles from '../../styles/Contact.module.css';
import { ArrowRight, School } from "lucide-react";

const ContactCTA = () => {
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
              <input type="text" placeholder="John Doe" />
            </div>

            <div className={styles.formGroup}>
              <label>Select Project</label>
              <select defaultValue="">
                <option value="" disabled>Select Projects</option>
                <option value="peb">Pre-Engineered Building</option>
                <option value="container">MS Container</option>
                <option value="lgsf">LGSF Structure</option>
                <option value="solar">Solar Mounting Structure</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input type="text" placeholder="+91 00000 00000" />
            </div>

            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Dragon@gmail.com" />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Detailed Message</label>
              <textarea placeholder="Describe you project scope, location, and demenions"></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Submit Proposal</span>
              <ArrowRight size={18} strokeWidth={2.5} className={styles.arrow} />
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