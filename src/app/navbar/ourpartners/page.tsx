import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurPartners.module.scss";
import Project1Img from "../../../../public/heroimages/myslider4.jpg";
import Project2Img from "../../../../public/heroimages/newSlider1.jpg";
import Project3Img from "../../../../public/heroimages/newSlider2.jpeg";

export default function OurPartners() {
  const partners = [
    { name: "Global Tech Corp", icon: "GT", color: "blue", shape: "circle" },
    { name: "Innovate", icon: "↑", color: "green", shape: "hexagon" },
    { name: "Future Systems", icon: "FS", color: "blue", shape: "square" },
    { name: "Cloudrises", icon: "☁", color: "blue", shape: "hexagon" },
    { name: "Global Tech", subtitle: "Technology Across Alliances", icon: "GT", color: "blue", shape: "circle" },
    { name: "FUTURE Systems", icon: "V", color: "red", shape: "square" },
    { name: "CloudNet", icon: "☁", color: "green", shape: "circle" },
    { name: "DataStream", icon: "⇄", color: "blue", shape: "hexagon" }
  ];

  const projects = [
    {
      title: "Manufacturing Digitalization",
      image: Project1Img,
      description: "Transforming manufacturing operations through digital innovation"
    },
    {
      title: "Healthcare Platform Development",
      image: Project2Img,
      description: "Building comprehensive healthcare solutions for modern needs"
    },
    {
      title: "Fintech AI Implementation",
      image: Project3Img,
      description: "Revolutionizing financial services with artificial intelligence"
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Our Partners & Projects</h1>
            <p className={styles.intro}>
            Proven success with trusted partnerships built on experience, seamless collaboration,
             measurable growth, and impactful project outcomes that drive efficiency, performance,
              and long-term success. </p>
          </div>

          {/* Strategic Partners Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Strategic Partners</h2>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <div className={`${styles.partnerIcon} ${styles[`icon${partner.color.charAt(0).toUpperCase() + partner.color.slice(1)}`]} ${styles[`shape${partner.shape.charAt(0).toUpperCase() + partner.shape.slice(1)}`]}`}>
                    {partner.icon}
                  </div>
                  <div className={styles.partnerInfo}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    {partner.subtitle && (
                      <p className={styles.partnerSubtitle}>{partner.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Projects Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Strategic Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectImageWrapper}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className={styles.projectImage}
                      priority={index === 0}
                    />
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <Link href="/navbar/contactus" className={styles.learnMoreBtn}>
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
