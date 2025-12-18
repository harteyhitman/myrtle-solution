import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurExpertise.module.scss";
import ConsultingImg from "../../../../public/ourexpertise page.jpg";
import TrainingImg from "../../../../public/heroimages/newslider3.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";

export default function OurExpertise() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <BackButton />
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>Our Expertise</h1>
              <p className={styles.intro}>
              Strategy Meets Execution
              </p>
            </div>
          </ScrollAnimation>

          {/* Two Column Layout */}
          <div className={styles.columns}>
            {/* IT Consulting Column */}
            <ScrollAnimation animation="fadeInLeft" delay={100}>
              <div className={`${styles.column} ${styles.consultingColumn}`}>
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={ConsultingImg}
                    alt="IT Consulting - Business professionals collaborating"
                    fill
                    className={styles.image}
                    priority
                  />
                  <div className={styles.imageOverlay}>
                    <h2 className={styles.overlayTitle}>Technology Consulting</h2>
                    <p className={styles.overlaySubtitle}>
                      Strategic Guidance for Business Growth
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                Strategic guidance, landscape analysis, and technological roadmaps.
                </p>
                {/* <Link href="/navbar/consultation" className={styles.ctaButton}>
                
                </Link> */}
              </div>
              </div>
            </ScrollAnimation>

            {/* IT Training Column */}
            <ScrollAnimation animation="fadeInRight" delay={200}>
              <div className={`${styles.column} ${styles.trainingColumn}`}>
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={TrainingImg}
                    alt="IT Training - Team learning and upskilling"
                    fill
                    className={styles.image}
                    priority
                  />
                  <div className={styles.imageOverlay}>
                    <h2 className={styles.overlayTitle}> ⁠IT Skills Training</h2>
                    <p className={styles.overlaySubtitle}>
                      Upskilling Your Team for Tomorrow
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                Intensive, hands-on programs to build capability and workforce skills.
                </p>
                {/* <Link href="/navbar/oursolutions" className={styles.ctaButton}>
                Learn More →
                </Link> */}
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}