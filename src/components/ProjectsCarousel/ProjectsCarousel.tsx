'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectsCarousel.module.scss';

import Aradel from '../../../public/partners/logo+-+aradel.png';
import PipeCoaters from '../../../public/partners/pipeCoaters.png';
import Nigeriansummit from '../../../public/partners/nigerianEconicSummitgroup.jpg';
import mentorPartners from '../../../public/partners/mentorsPartners.png';
import Primus from '../../../public/partners/primus.png';

const projects = [
  {
    name: 'Aradel',
    logo: Aradel,
    description:
      'Comprehensive digital transformation focused on cloud infrastructure and operational efficiency.',
  },
  {
    name: 'PIPE COATERS',
    logo: PipeCoaters,
    description:
      'Specialized software for pipeline control, quality management, and compliance.',
  },
  {
    name: 'Nigerian Economic Summit Group',
    logo: Nigeriansummit,
    description:
      'Digital strategy and stakeholder engagement platforms supporting national growth.',
  },
  {
    name: 'Mentors Partners',
    logo: mentorPartners,
    description:
      'Digital strategy collaboration and scalable stakeholder engagement systems.',
  },
  {
    name: 'Primus',
    logo: Primus,
    description:
      'Technology-driven solutions supporting operational excellence and growth.',
  },
];

export default function ProjectsCarousel() {
  const [paused, setPaused] = useState(false);

  // Duplicate once for seamless infinite loop
  const loopProjects = [...projects, ...projects];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our Strategic Projects</h2>
          <p className={styles.subtitle}>
            Driving innovation and transformation through trusted partnerships
          </p>
        </header>

        <div
          className={`${styles.carousel} ${paused ? styles.paused : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.track}>
            {loopProjects.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className={styles.card}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={220}
                    height={100}
                    className={styles.logo}
                  />
                </div>

                <h3 className={styles.cardTitle}>
                  {project.name}
                </h3>

                <p className={styles.description}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
