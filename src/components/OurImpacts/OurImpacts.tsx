// OurImpacts.js
import Image from "next/image";
import styles from "./OurImpacts.module.scss";
import ImpactsImg from "../../../public/ourImpacts.jpg";
import Button from "../Button/Button";

export default function OurImpacts() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <div className={`${styles.left} ${styles.fadeInLeft}`}>
          <span className={styles.label}>Measuring Success</span>

          <h2 className={styles.title}>Our Impacts</h2>
          
          <div className={styles.impacts}>
            <div>
              <strong>5+ Projects Delivered</strong>
              <span>Successfully completed across multiple industries and initiatives, driving measurable business outcomes.</span>
            </div>

            <div>
              <strong>95% Client Satisfaction</strong>
              <span>Building lasting relationships through excellence, trust, and consistent delivery of exceptional results.</span>
            </div>

            <div>
              <strong>Global Reach</strong>
              <span>Serving diverse clients across 30+ countries worldwide, with localized expertise and global perspective.</span>
            </div>
          </div>
        </div>

        <div className={`${styles.right} ${styles.fadeInRight}`}>
          <Image src={ImpactsImg} alt="Our Impacts Image" fill className={styles.image} />
        </div>

      </div>
      <div className={styles.BtnContainer}>
        <Button href="/navbar/ourpartners" variant="primary" size="md" as="link">
          Discover More →
        </Button>
      </div>
    </section>
  );
}
