import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
import BusinessMeetingImg from "../../../../public/aboutpageimg.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Footer from "@/src/components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>About Us</h1>
              <p className={styles.intro}>
                Strategic Growth, Global Ambition. Dedicated IT consulting firm headquartered in Canada.
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Image Section */}
          <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={BusinessMeetingImg} 
                  alt="Business meeting with technology" 
                  fill 
                  className={styles.image}
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Three Column Layout */}
          <div className={styles.columns}>
            {/* Mission Column */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className={styles.column}>
                <h2 className={styles.columnTitle}>OUR MISSION</h2>
                <p className={styles.columnText}>
                  Empower our customers through the use of technology in solving everyday challenges.
                </p>
              </div>
            </ScrollAnimation>

            {/* Vision Column */}
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className={styles.column}>
                <h2 className={styles.columnTitle}>OUR VISION</h2>
                <p className={styles.columnText}>
                  Our desire is to become a global leading project consultancy and solution provider through deployment of technology.
                </p>
              </div>
            </ScrollAnimation>

            {/* Core Values Column */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className={styles.column}>
                <h2 className={styles.columnTitle}>OUR DRIVING PRINCIPLES</h2>
                <ul className={styles.principlesList}>
                  <li>People</li>
                  <li>Adaptability (positive disruption)</li>
                  <li>Customer Satisfaction</li>
                  <li>Excellence (zero quality compromise)</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}
