import Navbar from "@/src/components/Navbar/Navbar";
import styles from "./OurExpertise.module.scss";

export default function OurExpertise() {
  const expertiseAreas = [
    {
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business operations and leverage cutting-edge technology for competitive advantage."
    },
    {
      title: "Cloud Solutions",
      description: "Expert guidance on cloud migration, architecture design, and optimization to scale your infrastructure efficiently."
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence solutions."
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with robust security frameworks, threat assessment, and compliance management."
    },
    {
      title: "Software Development",
      description: "Custom application development using modern frameworks and best practices to deliver scalable, maintainable solutions."
    },
    {
      title: "IT Strategy & Consulting",
      description: "Strategic IT planning and consulting to align technology initiatives with your business objectives and growth goals."
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Our Expertise</h1>
            <p className={styles.intro}>
              We bring deep technical knowledge and industry experience to help you navigate 
              complex technology challenges and achieve your business objectives.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className={styles.expertiseGrid}>
            {expertiseAreas.map((area, index) => (
              <div key={area.title} className={`${styles.expertiseCard} ${styles.fadeInUp}`}>
                <h2 className={styles.cardTitle}>{area.title}</h2>
                <p className={styles.cardDescription}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
