// OurStory.js
import styles from "./OurStory.module.scss";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import Button from "../Button/Button";

export default function OurStory() {
  return (
    <ScrollAnimation animation="fadeInUp">
      <section id="our-story" className={styles.wrapper}>
        <div className={styles.container}>
          
          <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className={styles.icon}>
              
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={200}>
            <h2 className={styles.title}>Our Story</h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={300}>
            <p className={styles.text}>
              Founded on the principles of innovation and excellence, our journey 
              began with a simple yet, powerful vision, to transform challenges into 
              opportunities. Over the years, we have grown from a small team with big 
              dreams into a trusted partner for businesses worldwide.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <p className={styles.text}>
              Every milestone we have reached, every challenge we have overcome, and 
              every success we have celebrated has been driven by our unwavering 
              commitment to our values and our people. Today, we stand proud as 
              pioneers in our field, continuously pushing boundaries and setting 
              new standards.
            </p>
          </ScrollAnimation>

        </div>
        <ScrollAnimation animation="fadeInUp" delay={500}>
          <div className={styles.BtnContainer}>
            <Button href="/navbar/aboutus" variant="primary" size="md" as="link">
              Discover More →
            </Button>
          </div>
        </ScrollAnimation>
      </section>
    </ScrollAnimation>
  );
}