import { useState } from "react";
import styles from "../../styles/FAQ.module.css";

const FAQ = () => {
  const faqs = [
    {
      q: "What are Pre-Engineered Buildings (PEB)?",
      a: "Pre-Engineered Buildings (PEB) are steel structures designed and fabricated at the factory, then shipped and assembled on-site. They offer superior speed, durability, and cost-effectiveness compared to traditional construction.",
    },
    {
      q: "What are Pre-Engineered Buildings (PEB)?",
      a: "Light Gauge Steel Framing is a sustainable, earthquake-resistant construction method for modern infra, utilizing cold-formed steel profiles to build lightweight yet incredibly strong structures.",
    },
    {
      q: "What container sizes are available?",
      a: "We provide containers in standard 20ft and 40ft sizes, as well as customized dimensions designed and manufactured to meet specific site office, storage, or accommodation requirements.",
    },
    {
      q: "Do you provide installation in New Delhi?",
      a: "Yes, we provide end-to-end installation, shipping, and fabrication support throughout New Delhi, the NCR region, and across major industrial zones in India.",
    },
    {
      q: "Does L&R Green India provide solutions for solar projects?",
      a: "Yes, we design and manufacture high-performance solar mounting structures, fasteners, and specialized components for residential, commercial, and utility-scale solar installations.",
    },
  ];

  const [open, setOpen] = useState(1); // Second item open by default like in screenshot

  return (
    <section className={styles["faq-section"]}>
      <div className={styles["faq-left"]}>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>

        <div className={styles["faq-list"]}>
          {faqs.map((item, index) => (
            <div
              className={`${styles["faq-box"]} ${
                open === index ? styles.open : ""
              }`}
              key={index}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className={styles["faq-question"]}>
                <h4>{item.q}</h4>
                <span>{open === index ? "−" : "+"}</span>
              </div>

              <div className={styles["faq-answer"]}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles["faq-right"]}>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
          alt="industrial steel building construction"
        />
      </div>
    </section>
  );
};

export default FAQ;
