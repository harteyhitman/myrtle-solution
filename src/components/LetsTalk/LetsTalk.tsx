// LetsTalk.js
import Link from "next/link";
import styles from "./LetsTalk.module.scss";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function LetsTalk() {
  return (
    <ScrollAnimation animation="fadeInUp">
      <section className={styles.wrapper}>
        <div className={styles.backgroundElements}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className={styles.header}>
                <h2>Let&apos;s Talk</h2>
                <p>
                  We believe in honest partnerships and practical intelligence. 
                  We don&apos;t just provide answers; we help you achieve your goals. 
                  Let&apos;s create something amazing together!
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className={styles.ctaButtons}>
                {/* <Link href="/contact" className={`${styles.button} ${styles.primary}`}>
                  Schedule a Call
                </Link> */}
                <Link href="/navbar/contactus" className={`${styles.button} ${styles.secondary}`}>
                  Send Us a Message
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}