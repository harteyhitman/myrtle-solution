// CoreStrengths.js
import Image from "next/image";
import styles from "./CoreStrengths.module.scss";
import StrengthImg from "../../../public/core-strength-main-img.jpeg";

export default function CoreStrengths() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <div className={`${styles.left} ${styles.fadeInLeft}`}>
          <span className={styles.label}>Excellence in Every Engagement</span>

          <h2 className={styles.title}>Core Strengths</h2>
          <div className={styles.list}>
            <div>
              <h4>Innovation First:</h4>
              <p>We pioneer forward-thinking technology consulting services that anticipate tomorrow’s business challenges today.</p>
            </div>

            <div>
              <h4>Expert Team</h4>
              <p>Our certified professionals bring global experience, strategic insight, and hands-on execution to every digital project.</p>
            </div>

            <div>
              <h4>Client Focus</h4>
              <p>We build long-term partnerships based on trust, transparency, and a shared drive for measurable success in every digital transformation journey.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.right} ${styles.fadeInRight}`}>
          <Image src={StrengthImg} alt="Core Strength Image" fill className={styles.image} />
        </div>
         
      </div>
      <div className={styles.BtnContainer}>
           <button className={styles.button}>
            Explore Our Expertise →
          </button>
      </div>
                
    </section>
  );
}