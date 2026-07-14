import { useState } from "react";
import styles from "../../styles/FAQ.module.css";
import { Plus, X } from "lucide-react";
import faq from '../../assets/Home/faq.png'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className={styles["faq-section"]}>
      <div className={styles.faqTitle}>
        <h2>
          Frequently Asked <br /><span>Questions</span>
        </h2>
        <div className={styles.FaqLine}></div>
      </div>

      <div className={styles.FaqFlex}>
        <div className={styles["faq-left"]}>


          <div className={styles.container}>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                  }`}
              >
                <div
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{item.q}</h3>

                  <span className={styles.icon}>
                    {activeIndex === index ? (
                      <X size={28} strokeWidth={2} />
                    ) : (
                      <Plus size={28} strokeWidth={2} />
                    )}
                  </span>
                </div>

                <div
                  className={`${styles.answerWrapper} ${activeIndex === index ? styles.open : ""
                    }`}
                >
                  <div className={styles.answer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* image */}

        <div className={styles["faq-right"]}>
          <img
            src={faq}
            alt="industrial steel building construction"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
