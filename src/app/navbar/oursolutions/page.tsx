import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurSolutions.module.scss";
import TechConsultingImg from "../../../../public/heroimages/myslider1.jpg";
import AdvisoryImg from "../../../../public/heroimages/myslider3.jpg";
import TrainingImg from "../../../../public/heroimages/newslider3.jpg";

export default function OurSolutions() {
  const solutions = [
    {
      title: "Technology Consulting",
      description: "Innovative Strategies for Digital Transformation",
      image: TechConsultingImg,
      gradient: "blue",
      buttonColor: "blue"
    },
    {
      title: "Advisory",
      description: "Expert Guidance & Strategic Planning",
      image: AdvisoryImg,
      gradient: "green",
      buttonColor: "green"
    },
    {
      title: "IT Skill Training",
      description: "Empowering the Next Generation",
      image: TrainingImg,
      gradient: "yellow",
      buttonColor: "yellow"
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Our Solutions</h1>
            <p className={styles.intro}>
              Who A team is cernsiislives tire empented With dote lies to dolilans faro vice Pota.
            </p>
          </div>

          {/* Solutions Cards */}
          <div className={styles.cards}>
            {solutions.map((solution, index) => (
              <div key={solution.title} className={`${styles.card} ${styles[`gradient${solution.gradient.charAt(0).toUpperCase() + solution.gradient.slice(1)}`]}`}>
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
                  <Link href="/navbar/consultation" className={`${styles.learnMore} ${styles[`button${solution.buttonColor.charAt(0).toUpperCase() + solution.buttonColor.slice(1)}`]}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
