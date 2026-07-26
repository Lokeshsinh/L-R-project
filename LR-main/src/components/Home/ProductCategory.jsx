import React from "react";
// import { ArrowUpRight,  } from "lucide-react";
import styles from "../../styles/Products.module.css";
import office from '../../assets/Home/office.jpg'
import labour from '../../assets/Home/labour.jpg'

const ProductCategory = () => {
  const products = [
    {
      title: "Pre-Engineered Buildings",
      img: "/Images/preeng.jpg",
      desc: "Pre-Engineered Buildings are durable, flexible, and cost-efficient steel structures built for faster construction.",
    },
    {
      title: "Pre-Fab site office",
      img: office,
      desc: "Prefabricated site offices for workspaces. Built for quick installation at construction and industrial sites.",
    },
    {
      title: "MS Container",
      img: "/Images/mscontianer.jpg",
      desc: "Compact, secure storage and office solutions. Manufactured with Mild Steel for uncompromising security in the field.",
    },
    {
      title: "Labour Accommodation",
      img: labour,
      desc: "Labour accommodation for safe living. Built with durable materials for construction and industrial sites.",
    },
  ];
  return (
    <section className={styles["products-section"]}>
      <div className={styles["section-head"]}>
        <div>
          <div className={styles.tag}> <p>•  Our <span>Products</span></p></div>
          <h1>
            <h2>Industrial Precision &<br /> <span>Modular Innovation</span></h2>
          </h1>
        </div>

        <div className={styles["right-head"]}>
          <p className={styles["head-desc"]}>
            10 Years of Quality Products. Leading manufacturer of prefabricated
            structures in New Delhi.
          </p>
        </div>
      </div>

      <div className={styles.viewButton}>
        {/* <button className={styles.viewAllBtn}>
          <span className={styles.text}>View All</span>

          <span className={styles.icon}>
            <ChevronRight size={18} strokeWidth={3} />
          </span>
        </button> */}
      </div>

      <div className={styles.productGrid}>
        {products.map((item, i) => (
          <div className={styles.productCard} key={i}>
            <div className={styles.cardHeader}>
              <h3>{item.title}</h3>

              {/* <div className={styles.arrow}>
                <ArrowUpRight size={20} strokeWidth={2.4} />
              </div> */}
            </div>

            <div
              className={styles.productImg}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <div className={styles.overlay}></div>

              {item.desc && (
                <div className={styles.content}>
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
