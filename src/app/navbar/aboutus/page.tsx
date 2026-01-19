"use client";

import { useState } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
import BusinessMeetingImg from "../../../../public/aboutpageimg.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";

const principlesData = [
  {
    title: "People",
    content: "Our team is our greatest asset. We invest in continuous learning, professional development, and creating an inclusive environment where every team member can thrive. We believe that empowered people drive exceptional results and innovation."
  },
  {
    title: "Adaptability (positive disruption)",
    content: "In a rapidly evolving technological landscape, we embrace change and view disruption as an opportunity for growth. We continuously adapt our strategies, methodologies, and solutions to stay ahead of industry trends and deliver cutting-edge results."
  },
  {
    title: "Customer Satisfaction",
    content: "Customer success is at the heart of everything we do. We go beyond meeting expectations to exceed them, building long-term partnerships based on trust, transparency, and delivering measurable value that drives our clients' business forward."
  },
  {
    title: "Excellence (zero quality compromise)",
    content: "We maintain the highest standards in every project, ensuring quality is never compromised. From initial consultation to final delivery, we meticulously craft solutions that are robust, scalable, and built to last. Excellence is not an option—it's our standard."
  }
];

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <BackButton />
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>About Us</h1>
              <p className={styles.intro}>
                Strategic Growth, Global Ambition. Dedicated IT consulting firm, headquartered in Canada.
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

                        {/* Core Values Column */}
                        <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className={styles.column}>
                <h2 className={styles.columnTitle}>OUR DRIVING PRINCIPLES</h2>
                <div className={styles.accordionContainer}>
                  {principlesData.map((principle, index) => (
                    <div key={index} className={styles.accordionItem}>
                      <button
                        className={`${styles.accordionHeader} ${expandedIndex === index ? styles.active : ''}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={expandedIndex === index}
                      >
                        <span className={styles.accordionTitle}>{principle.title}</span>
                        <span className={styles.accordionIcon}>
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.chevronIcon}
                          >
                            <path 
                              d="M5 7.5L10 12.5L15 7.5" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`${styles.accordionContent} ${expandedIndex === index ? styles.expanded : ''}`}
                      >
                        <p className={styles.accordionText}>{principle.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
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


          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}
