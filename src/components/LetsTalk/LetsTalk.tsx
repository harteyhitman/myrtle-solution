// LetsTalk.js
import Link from "next/link";
import styles from "./LetsTalk.module.scss";

export default function LetsTalk() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundElements}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.header} ${styles.fadeInUp}`}>
            <h2>Let&apos;s Talk</h2>
            <p>
              We believe in honest partnerships and practical intelligence. 
              We don&apos;t just provide answers; we help you achieve your goals. 
              Let&apos;s create something amazing together!
            </p>
          </div>

          <div className={`${styles.ctaButtons} ${styles.fadeInUp}`}>
            {/* <Link href="/contact" className={`${styles.button} ${styles.primary}`}>
              Schedule a Call
            </Link> */}
            <Link href="/navbar/contactus" className={`${styles.button} ${styles.secondary}`}>
              Send Us a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}