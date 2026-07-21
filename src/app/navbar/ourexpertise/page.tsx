'use client';

import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import styles from "./OurExpertise.module.scss";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";
import { expertise, Expertise } from "../../../data/expertiseData";

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState<string>("tech-consulting");
  const activeExpertise = expertise.find(e => e.id === activeTab) || expertise[0];

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

          {/* Tab Navigation */}
          <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className={styles.tabs}>
              {expertise.map((item) => (
                <button
                  key={item.id}
                  className={`${styles.tab} ${activeTab === item.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className={styles.tabIcon}>{item.icon}</span>
                  <span className={styles.tabTitle}>{item.title}</span>
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Active Tab Content */}
          <ScrollAnimation animation="fadeIn" delay={200}>
            <div className={styles.contentArea}>
              <div className={styles.imageContainer}>
                <Image
                  src={activeExpertise.image}
                  alt={activeExpertise.title}
                  fill
                  className={styles.contentImage}
                  priority
                />
                <div className={`${styles.gradientOverlay} ${styles[activeExpertise.color]}`}></div>
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.contentTitle}>
                  {activeExpertise.title}
                </h2>
                <p className={styles.contentSubtitle}>
                  {activeExpertise.subtitle}
                </p>
                <p className={styles.contentDescription}>
                  {activeExpertise.description}
                </p>
                
                <div className={styles.keyPoints}>
                  <h3 className={styles.keyPointsTitle}>Key Focus Areas</h3>
                  <ul className={styles.keyPointsList}>
                    {activeExpertise.keyPoints.map((point, i) => (
                      <li key={i} className={styles.keyPointItem}>
                        <span className={styles.checkmark}>✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </>
  );
}