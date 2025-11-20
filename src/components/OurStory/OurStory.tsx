// OurStory.js
import Link from "next/link";
import styles from "./OurStory.module.scss";

export default function OurStory() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={`${styles.icon} ${styles.fadeInUp}`}>
          
        </div>

        <h2 className={`${styles.title} ${styles.fadeInUp}`}>Our Story</h2>

        <p className={`${styles.text} ${styles.fadeInUp}`}>
          Founded on the principles of innovation and excellence, our journey 
          began with a simple yet powerful vision — to transform challenges into 
          opportunities. Over the years, we've grown from a small team with big 
          dreams into a trusted partner for businesses worldwide.
        </p>

        <p className={`${styles.text} ${styles.fadeInUp}`}>
          Every milestone we've reached, every challenge we've overcome, and 
          every success we've celebrated has been driven by our unwavering 
          commitment to our values and our people. Today, we stand proud as 
          pioneers in our field, continuously pushing boundaries and setting 
          new standards.
        </p>

      </div>
              <Link href='/navbar/aboutus' className={styles.BtnContainer}>

            <button className={styles.button}>
            Discover More →
          </button>
          </Link>
    </section>
  );
}