'use client';

import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import styles from "./OurSolutions.module.scss";
import TechConsultingImg from "../../../../public/ourSolution/solution1.jpg";
import AdvisoryImg from "../../../../public/ourSolution/solution2.jpg";
import TrainingImg from "../../../../public/ourSolution/solution3.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";

export default function OurSolutions() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const solutions = [
    {
      id: "technology-consulting",
      title: "Technology Consulting",
      description: "Innovative Strategies for Digital Transformation",
      fullDescription: "Deploying future-ready technology and driving business transformation.",
      image: TechConsultingImg,
      gradient: "blue",
      buttonColor: "blue",
      items: [
        "Information Technology Consulting",
        "Web and Mobile Application Development",
        "Business Transformation and ERP Integration",
        "Technology Product Design, Development and Launch"
      ]
    },
    {
      id: "advisory",
      title: "Advisory",
      description: "Expert Guidance & Strategic Planning",
      fullDescription: "Strategic, high-level guidance for resilience, compliance, and optimized resource management.",
      image: AdvisoryImg,
      gradient: "green",
      buttonColor: "green",
      items: [
        "Cybersecurity and GRC",
        "PCI - DSS Audit",
        "Enterprise Agile Transformation",
        "Project and Program Management Office as a Service",
        "Procurement and Sourcing"
      ]
    },
    {
      id: "training",
      title: "IT Skill Training",
      description: "Empowering the Next Generation",
      fullDescription: "Comprehensive training programs focused on high-demand, practical skills.",
      image: TrainingImg,
      gradient: "yellow",
      buttonColor: "yellow",
      items: [
        "Project Management",
        "Program Management",
        "Technical Program Management",
        "Project Planning using MsP, seePrimavera",
        "Product Management",
        "Scrum and Hybrid",
        "Business Analysis",
        "Data Analysis",
        "Cybersecurity and GRC",
        "Human Resources"
      ]
    }
  ];

  const handleExpand = (id: string) => {
    setExpandedCard(id);
  };

  const handleCollapse = () => {
    setExpandedCard(null);
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>Our Solutions</h1>
              <p className={styles.intro}>
                Who A team is cernsiislives tire empented With dote lies to dolilans faro vice Pota.
              </p>
            </div>
          </ScrollAnimation>

          {/* Solutions Cards */}
          <div className={styles.cards}>
            {solutions.map((solution, index) => (
              <ScrollAnimation 
                key={solution.id}
                animation="fadeInUp" 
                delay={100 + (index * 100)}
              >
                <div 
                  className={`${styles.card} ${styles[`gradient${solution.gradient.charAt(0).toUpperCase() + solution.gradient.slice(1)}`]} ${expandedCard === solution.id ? styles.expanded : ''}`}
                >
                {expandedCard === solution.id ? (
                  // Expanded View
                  <div className={styles.expandedContent}>
                    <button 
                      onClick={handleCollapse}
                      className={styles.backButton}
                      aria-label="Back to solutions"
                    >
                      ←
                    </button>
                    <h2 className={styles.expandedTitle}>{solution.title}</h2>
                    <p className={styles.expandedDescription}>{solution.fullDescription}</p>
                    <ul className={styles.solutionsList}>
                      {solution.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles.solutionItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Collapsed View
                  <>
                    <div className={styles.imageWrapper}>
                      <div className={styles.colorBar}></div>
                      <Image 
                        src={solution.image} 
                        alt={solution.title} 
                        fill 
                        className={styles.image}
                        priority={index === 0}
                      />
                    </div>
                    <div className={styles.content}>
                      <h2 className={styles.cardTitle}>{solution.title}</h2>
                      <p className={styles.cardDescription}>{solution.description}</p>
                      <button 
                        onClick={() => handleExpand(solution.id)}
                        className={`${styles.learnMore} ${styles[`button${solution.buttonColor.charAt(0).toUpperCase() + solution.buttonColor.slice(1)}`]}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </>
                )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
