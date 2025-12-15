import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./OurPartners.module.scss";
import IgechiWorly from "../../../../public/updatedCEO.jpg";
import DarlingtonAngele from "../../../../public/partners/darlighton.png";
import ChidiUdze from "../../../../public/partners/udeze.png";
import TajiriIzoma from "../../../../public/partners/tajiri izoma.jpeg";

import Aradel from "../../../../public/partners/logo+-+aradel.png";
import PipeCoaters from "../../../../public/partners/pipeCoaters.png";
import Nigeriansummit from "../../../../public/partners/nigerianEconicSummitgroup.jpg";
import mentorPartners from "../../../../public/partners/mentorsPartners.png";
import Primus from "../../../../public/partners/primus.png";

export default function OurPartners() {
  const partners = [
    {
      name: "Igechi Worly",
      title: "Chief Executive Officer, Myrtle Solutions, Canada",
      image: IgechiWorly
    },

    {
      name: "Darlington Angele",
      title: "Advisory, Strategic programs",
      image: DarlingtonAngele
    },
    {
      name: "Chidi Udze",
      title: "Lead, Technology & IT Infrastructure",
      image: ChidiUdze
    },
    {
      name: "Tajiri Izoma",
      title: "Relationship Manager",
      image: TajiriIzoma
    }
  ];

  const projects = [
    {
      name: "Aradel",
      logo: Aradel,
      description: "Comprehensive digital transformation project, focusing on cloud infrastructure integration, improving operational efficiency and additional efficiency."
    },
    {
      name: "PIPE COATERS",
      logo: PipeCoaters,
      description: "Implementation of specialized software suite for pipeline control and quality management, ensuring compliance and material waste reduction."
    },
    {
      name: "Nigerian Economic Summit Group",
      logo: Nigeriansummit,
      description: "Collaboration on developing digital strategies for economic disruption and stakeholder engagement platform fostering national growth."
    },
    {
      name: "Mentors Partners",
      logo: mentorPartners,
      description: "Collaboration on developing digital strategies for economic disruption and stakeholder engagement platform fostering national growth."
    },
    {
      name: "Primus",
      logo: Primus,
      description: "Collaboration on developing digital strategies for economic disruption and stakeholder engagement platform fostering national growth."
    },
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
              and long-term success.
            </p>
          </div>

          {/* PARTNERS Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>PARTNERS</h2>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <div className={styles.partnerImageWrapper}>
                    <Image 
                      src={partner.image} 
                      alt={partner.name} 
                      fill
                      className={styles.partnerImage}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className={styles.partnerInfo}>
                    <h3 className={styles.partnerName}>{partner.name}</h3>
                    <p className={styles.partnerTitle}>{partner.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* PROJECTS Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>PROJECTS</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectLogoWrapper}>
                    <Image 
                      src={project.logo} 
                      alt={project.name} 
                      width={300}
                      height={150}
                      className={styles.projectLogo}
                      priority={index === 0}
                    />
                  </div>
                  <div className={styles.projectDescriptionIndicator}>
                    <span className={styles.arrow}>↓</span>
                    <span className={styles.indicatorText}>Its write up</span>
                  </div>
                  <div className={styles.projectContent}>
                    <p className={styles.projectDescription}>{project.description}</p>
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
