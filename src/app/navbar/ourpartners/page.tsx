import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./OurPartners.module.scss";
import IgechiWorly from "../../../../public/updatedCEO.jpg";
import DarlingtonAnaele from "../../../../public/partners/darlighton.png";
import ChidiUdeze from "../../../../public/partners/udeze.png";
import TajiriIzoma from "../../../../public/partners/tajiri izoma.jpeg";

import Aradel from "../../../../public/partners/logo+-+aradel.png";
import PipeCoaters from "../../../../public/partners/pipeCoaters.png";
import Nigeriansummit from "../../../../public/partners/nigerianEconicSummitgroup.jpg";
import mentorPartners from "../../../../public/partners/mentorsPartners.png";
import Primus from "../../../../public/partners/primus.png";
import Verisult from "../../../../public/partners/verisult.png";
import Footer from "@/src/components/Footer/Footer";
import BackButton from "@/src/components/BackButton/BackButton";

export default function OurPartners() {
  const partners = [
    {
      name: "Igechi Worlu",
      title: "Lead consultant, Myrtle Solutions, Canada",
      image: IgechiWorly
    },

    {
      name: "Darlington Anaele",
      title: "Advisory, Strategic programs",
      image: DarlingtonAnaele
    },
    {
      name: "Nnamdi Udeze",
      title: "Lead consultant- Technology",
      image: ChidiUdeze
    },
    {
      name: "Tejiri Izoma",
      title: "Relationship Manager",
      image: TajiriIzoma
    }
  ];

  const projects = [
    {
      name: "Aradel",
      logo: Aradel,
      description: "Myrtle Solutions and Primus, collaborated to modernize Aradel's connectivity landscape. This initiative involved the end-to-end delivery of multiple telecom towers, resulting in a measurable boost in operational efficiency. The project has successfully bridged communication gaps and optimized data storage capabilities across Aradel's diverse facility network."
    },
    {
      name: "PIPE COATERS",
      logo: PipeCoaters,
      description: "For over a decade, Myrtle Solutions, through a strategic partnership with Primus, has been a cornerstone of engineering excellence for Tenaris / Pipe Coaters. Our long-standing collaboration has successfully delivered comprehensive project management and design solutions. Our scope has evolved to encompass international procurement, engineering and electrical recertification, and high-level strategic advisory services."
    },
    {
      name: "Nigerian Economic Summit Group",
      logo: Nigeriansummit,
      description: "Between 2021 and 2022, Myrtle Solutions successfully led the organizational transformation and operational launch of the NESG Project Management Office (PMO). This initiative established robust governance frameworks, strategically positioning the PMO to drive consistent, high-quality project and service delivery across the entire organization."
    },
    {
      name: "Verisult",
      logo: Verisult,
      description: "Myrtle Solutions collaborates with Verisult to enhance career development, talent placement, and smart tech solutions. Together, we support individuals in building meaningful careers and businesses in finding skilled, diverse talent, while delivering innovative solutions that drive success."
    },
    // {
    //   name: "Mentors Partners",
    //   logo: mentorPartners,
    //   description: "Collaboration on developing digital strategies for economic disruption and stakeholder engagement platform fostering national growth."
    // },
    // {
    //   name: "Primus",
    //   logo: Primus,
    //   description: "Collaboration on developing digital strategies for economic disruption and stakeholder engagement platform fostering national growth."
    // },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <BackButton />
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
            <h2 className={styles.sectionTitle}>MEET OUR PARTNERS</h2>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <div className={styles.partnerInfo}>
                    <div className={styles.partnerInitial}>{partner.name.split(' ').map(n => n[0]).join('')}</div>
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
            <h2 className={styles.sectionTitle}>VIEW OUR PROJECTS</h2>
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
                    {/* <span className={styles.indicatorText}>Its write up</span> */}
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
      <Footer />
    </>
  );
}
