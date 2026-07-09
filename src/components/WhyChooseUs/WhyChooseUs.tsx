"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.scss';

const features = [
  {
    icon: '🚀',
    title: 'Innovation-Driven',
    description: 'We leverage cutting-edge technology to deliver forward-thinking solutions that drive real business transformation.'
  },
  {
    icon: '💡',
    title: 'Expert Team',
    description: 'Our dedicated professionals bring years of experience in IT consulting, strategic advisory, and digital skills training.'
  },
  {
    icon: '🎯',
    title: 'Client-Focused',
    description: 'Your success is our priority. We build long-term partnerships based on trust, transparency, and measurable results.'
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    description: 'From Canada to across the globe, we empower businesses and communities through technology-driven innovation.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.label}>Why Choose Us</span>
          <h2 className={styles.title}>The Myrtle Solutions Advantage</h2>
          <p className={styles.subtitle}>
            Discover what sets us apart and how we can help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={styles.featureCard}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
