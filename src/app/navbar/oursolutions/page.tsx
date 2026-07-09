'use client';

import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import styles from "./OurSolutions.module.scss";
// import TechConsultingImg from "../../../../public/ourSolution/solution1.jpg";
// import AdvisoryImg from "../../../../public/ourSolution/solution2.jpg";
// import TrainingImg from "../../../../public/ourSolution/solution3.jpg";
import ScrollAnimation from "@/src/components/ScrollAnimation/ScrollAnimation";
import Button from "@/src/components/Button/Button";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";
import { solutions, Solution } from "../../../data/solutionsData";

export default function OurSolutions() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
          <BackButton />
          {/* Header Section */}
          <ScrollAnimation animation="fadeInUp">
            <div className={styles.header}>
              <h1 className={styles.title}>Our Solutions</h1>
              <p className={styles.intro}>
              We leverage cutting-edge technology and strategic expertise to deliver intelligent solutions that drive real business value. Our approach combines strategic thinking with innovative execution.
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
                      <Button 
                        onClick={() => handleExpand(solution.id)}
                        variant={solution.buttonColor as 'blue' | 'green' | 'yellow'}
                        size="md"
                      >
                        Learn More
                      </Button>
                    </div>
                  </>
                )}
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
