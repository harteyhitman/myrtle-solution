import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurExpertise.module.scss";
import ConsultingImg from "../../../../public/ourexpertise page.jpg";
import TrainingImg from "../../../../public/heroimages/newslider3.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";

export default function OurExpertise() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>Our Expertise</h1>
              <p className={styles.intro}>
                Our Expertise: Strategy Meets Execution Consulting: Strategic
                guidance, landscape analysis, and technological roadmaps. Training
                (Digital Skills): Intensive, hands-on programs to build capability
                and workforce skills.
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
                    <h2 className={styles.overlayTitle}>IT CONSULTING</h2>
                    <p className={styles.overlaySubtitle}>
                      Strategic Guidance for Business Growth
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                  Unlock your business full potential with tailored strategies,
                  and Srasgie. Our expent consulants drive and growth.
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
                    <h2 className={styles.overlayTitle}>IT TRAINING</h2>
                    <p className={styles.overlaySubtitle}>
                      Upskilling Your Team for Tomorrow
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                  Software Development Bootcamps. Advance your career with
                  hands-on bootcamps, network and certifications. Empower team
                  with technology.
                </p>
                <Link href="/navbar/oursolutions" className={styles.ctaButton}>
                Learn More →
                </Link>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}