import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
import BusinessMeetingImg from "../../../../public/heroimages/myslider2.jpeg";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.headline}>ABOUT MYRTLE SOLUTIONS CANADA</h1>
            <p className={styles.tagline}>
              Strategic Growth, Global Ambition. Dedicated IT consulting firm headquartered in Canada.
            </p>
          </div>

          {/* Main Image Section */}
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

          {/* Three Column Layout */}
          <div className={styles.columns}>
            {/* Mission Column */}
            <div className={`${styles.column} ${styles.fadeInUp}`}>
              <h2 className={styles.columnTitle}>OUR MISSION</h2>
              <p className={styles.columnText}>
                Empower our customers through the use of technology in solving everyday challenges.
              </p>
            </div>

            {/* Vision Column */}
            <div className={`${styles.column} ${styles.fadeInUp}`}>
              <h2 className={styles.columnTitle}>OUR VISION</h2>
              <p className={styles.columnText}>
                Our desire is to become a global leading project consultancy and solution provider through deployment of technology.
              </p>
            </div>

            {/* Driving Principles Column */}
            <div className={`${styles.column} ${styles.fadeInUp}`}>
              <h2 className={styles.columnTitle}>OUR DRIVING PRINCIPLES</h2>
              <ul className={styles.principlesList}>
                <li>People</li>
                <li>Adaptability (positive disruption)</li>
                <li>Customer Satisfaction</li>
                <li>Excellence (zero quality compromise)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
