import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/ContactUs.module.css";
import {
  ArrowRight, ShieldCheck,
  Share2,
  Truck,
  User,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    project: "",
    phone: "",
    email: "",
    product: "",
    city: "",
    message: "",
  });

  const [fileName, setFileName] = useState("No File Chosen");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No File Chosen");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `*Technical Inquiry*

 Full Name : ${formData.fullName}

 Project : ${formData.project}

 Phone : ${formData.phone}

 Email : ${formData.email}

City : ${formData.city}

 Product : ${formData.product}

 Message :
${formData.message}

📎 Selected File :
${fileName}`;
    setFormData({
      fullName: "",
      project: "",
      phone: "",
      email: "",
      product: "",
      city: "",
      message: "",

    })

    window.open(
      `https://wa.me/918595351363?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  const features = [
    {
      id: 1,
      title: "High-Quality Solutions",
      description:
        "We deliver durable and precision-engineered structures using premium materials and advanced manufacturing standards.",
      icon: <ShieldCheck size={34} strokeWidth={1.8} />,
      active: false,
    },
    {
      id: 2,
      title: "Pan-India Presence",
      description:
        "With strong execution capability across India, we ensure seamless delivery and installation even in remote locations.",
      icon: <Share2 size={34} strokeWidth={1.8} />,
      active: true,
    },
    {
      id: 3,
      title: "Timely Project Delivery",
      description:
        "Our streamlined processes and expert team ensure projects are completed on schedule without compromising quality.",
      icon: <Truck size={34} strokeWidth={1.8} />,
      active: false,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.topLabel}>L&R Green India Pvt Ltd</span>
          <h1 className={styles.mainTitle}>
            Contact L&R  <br />
            <span>Green India
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Get in touch with L&R Green India Pvt Ltd for reliable prefabricated and
            modular building solutions tailored to your project needs.
          </p>
          <button onClick={() => navigate('/contact')} className={styles.btnWhite}>
            <span>Contact Us</span>
            <ArrowRight className={styles.arrow} size={18} />
          </button>
        </div>
      </section>








      {/* GET IN TOUCH */}
      <section className={styles.touchSec} id="#contact">
        <div className={styles.touchHeader}>
          <div className={styles.touchText}>
            <h2 >Get in <span>Touch</span></h2>
            <div className={styles.divider} />
          </div>
          <p className={styles.touchDesc}>Get in touch with our team for project updates, enquiries, quotations and complaint request for your project needs.</p>
        </div>
        <div className={styles.container}>
          {/* LEFT PANEL */}

          <div className={styles.leftPanel}>
            <div className={styles.contactBox}>
              <span>Name</span>

              <div className={styles.contactItem}>
                <User size={34} strokeWidth={1.6} />
                <h4>Mr. Lalit Gautam</h4>
              </div>

              <span>Phone no</span>

              <div className={styles.contactItem}>
                <Phone size={34} strokeWidth={1.6} />
                <h4>+91 8595351363 ; 9758813668</h4>
              </div>

              <span>Technical Support</span>

              <div className={styles.contactItem}>
                <Mail size={34} strokeWidth={1.6} />
                <h4>info.lr1995@gmail.com</h4>
              </div>

              <span>Office Address</span>

              <div className={styles.contactItem}>
                <MapPin size={34} strokeWidth={1.6} />

                <h4>
                  216/2, Gautam Nagar,
                  <br />
                  Gulmohar Enclave,
                  <br />
                  New Delhi-110049
                </h4>
              </div>
            </div>

            <div className={styles.bottomCounter}>
              <div className={styles.bottomText}>
                <h2>100+</h2>
                <p>Success Rate</p>
              </div>

              <div className={styles.bottomText}>
                <h2>10+</h2>
                <p>Years Expertise</p>
              </div>
            </div>
          </div>


          {/* =====right====== */}
          <div className={styles.rightPanel}>
            <h2>Technical Inquiry</h2>

            <div className={styles.line}></div>

            <form onSubmit={handleSubmit}>
              <div className={styles.grid}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Select Project</label>

                  <div className={styles.customSelect}>
                    <div
                      className={styles.selectBox}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {formData.project || "Select Projects"}
                      <span className={styles.arrow}>▼</span>
                    </div>

                    <div
                      className={`${styles.options} ${isOpen ? styles.showOptions : ""
                        }`}
                    >
                      <div
                        className={styles.option}
                        onClick={() => {
                          setFormData({ ...formData, project: "Prefab Site Office" });
                          setIsOpen(false);
                        }}
                      >
                        Prefab Site Office
                      </div>

                      <div
                        className={styles.option}
                        onClick={() => {
                          setFormData({ ...formData, project: "PUF Panel" });
                          setIsOpen(false);
                        }}
                      >
                        PUF Panel
                      </div>

                      <div
                        className={styles.option}
                        onClick={() => {
                          setFormData({ ...formData, project: "Labour Accommodation" });
                          setIsOpen(false);
                        }}
                      >
                        Labour Accommodation
                      </div>

                      <div
                        className={styles.option}
                        onClick={() => {
                          setFormData({ ...formData, project: "MS Container" });
                          setIsOpen(false);
                        }}
                      >
                        MS Container
                      </div>

                      <div
                        className={styles.option}
                        onClick={() => {
                          setFormData({ ...formData, project: "Warehouse" });
                          setIsOpen(false);
                        }}
                      >
                        Warehouse
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="dragon@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Product Name</label>

                  <input
                    type="text"
                    name="product"
                    placeholder="Product Name"
                    value={formData.product}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>City Name</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City Name"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Detailed Message</label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Describe your project scope, location, dimensions and requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label>Upload File</label>

                <div className={styles.uploadBox}>
                  <label
                    htmlFor="upload"
                    className={styles.chooseButton}
                  >
                    Choose File
                  </label>

                  <span>{fileName}</span>

                  <input
                    id="upload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                    onChange={handleFile}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
              >
                Submit Proposal

                <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>

      </section>




      {/* WHY CHOOSE */}
      <section className={styles.whySec}>
        <div className={styles.whyHeader}>
          <div className={styles.whyText}>
            <h2>Why Choose L&amp;R <br /><span>Green India</span></h2>
            <div className={styles.divider} />
          </div>
          <p className={styles.whyDesc}>Delivering reliable, high-quality modular solutions with efficiency and indisputable value.</p>
        </div>
        <div className={styles.container}>
          {features.map((item) => (
            <div
              key={item.id}
              className={`${styles.cards} ${item.active ? styles.activeCard : ""
                }`}
            >
              <div className={styles.iconBox}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
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

      <section className={styles.cta}>
        <h2>Get Expert Guidance Today</h2>
        <p>
          From MS Containers to PEB Structures and PUF Panels, we're ready to support your next project.
        </p>
        <button className={styles.contactBtn} onClick={() => navigate('#contact')}>
          <span className={styles.contactText}>Send an Enquiry</span>

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

export default ContactUs;
