import styles from "../../styles/ClientStrip.module.css";

import animation1 from "../../assets/Home/animation1.png";
import animation2 from "../../assets/Home/animation2.png";
import animation3 from "../../assets/Home/animation3.png";
import animation4 from "../../assets/Home/animation4.png";
import animation5 from "../../assets/Home/animation5.png";
import animation6 from "../../assets/Home/animation6.png";
import animation7 from "../../assets/Home/animation7.png";

const ClientLogoStrip = () => {
  const logos = [
    animation1,
    animation2,
    animation3,
    animation4,
    animation5,
    animation6,
    animation7,
  ];

  return (
    <section className={styles.clientStrip}>
      <div className={styles.logoTrack}>
        {[...logos, ...logos].map((logo, index) => (
          <div className={styles.clientLogo} key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogoStrip;