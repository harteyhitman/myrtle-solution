// OurImpacts.js
import Image from "next/image";
import styles from "./OurImpacts.module.scss";
import ImpactsImg from "../../../public/black-smart-solution.jpeg";
import Link from "next/link";

export default function OurImpacts() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <div className={`${styles.left} ${styles.fadeInLeft}`}>
          <span className={styles.label}>Measuring Success</span>

          <h2 className={styles.title}>Our Impacts</h2>
          
          <div className={styles.impacts}>
            <div>
              <strong>500+ Projects Delivered</strong>
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
      <Link href='/navbar/ourpartners' className={styles.BtnContainer}>
      <button className={styles.button}>
        View Our Case Studies →
      </button>
      </Link>
    </section>
  );
}