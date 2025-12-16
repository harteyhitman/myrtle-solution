// CeoNote.js
import Image from "next/image";
import styles from "./CeoNote.module.scss";
import CeoImg from "../../../public/updatedCEO.jpg";

export default function CeoNote() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.imageSection}>
          <div className={`${styles.imageWrapper} ${styles.fadeInLeft}`}>
            <Image src={CeoImg} alt="CEO Photo" fill className={styles.image} />
          </div>
          <div className={styles.ceoInfo}>
            <p className={styles.ceoName}>Igechi Worlu</p>
            <p className={styles.ceoTitle}>The Chief Executive Officer, Myrtle Solutions, Canada</p>
          </div>
        </div>

        <div className={`${styles.content} ${styles.fadeInRight}`}>
          <span className={styles.label}>Leadership</span>

          <h2 className={styles.title}>A Message from Our CEO.</h2>

          <p className={styles.text}>
         At Myrtle Solutions, our goal is to bridge the gap for our stakeholders through technology 
         driven solution development for everyday challenges. Our expertise is your strategic advantage, 
         driving innovation and resilience for businesses across Canada and globally
          </p>

          <p className={styles.text}>
         With our dedicated team at the heart of everything we do, we continue to create solutions that empower people and strengthen communities. 
         We’re committed to shaping technology that supports real human needs, fosters responsible innovation, and delivers meaningful value wherever our impact is felt.
          </p>

        </div>
      </div>
    </section>
  );
}