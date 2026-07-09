import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./OurExpertise.module.scss";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";
import { solutions, Solution } from "../../../data/solutionsData"; // Import solutions data and type

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

          {/* Solutions Columns */}
          <div className={styles.columns}>
            {solutions.map((solution: Solution, index: number) => (
              <ScrollAnimation key={solution.id} animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={100 + (index * 100)}>
                <div className={`${styles.column} ${styles[solution.id.replace(/-/g, '') + 'Column']}`}>
                  <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className={styles.image}
                        priority
                      />
                      <div className={styles.imageOverlay}>
                        <h2 className={styles.overlayTitle}>{solution.title}</h2>
                        <p className={styles.overlaySubtitle}>
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <p className={styles.description}>
                      {solution.fullDescription}
                    </p>
                    <ul className={styles.expertiseList}>
                      {solution.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className={styles.expertiseListItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}