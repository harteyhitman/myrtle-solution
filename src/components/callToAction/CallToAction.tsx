// src/components/ContactCTA/ContactCTA.tsx
'use client';

import { useState } from 'react';
import styles from './CallToaction.module.scss';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    // Smooth scroll to contact section or navigate
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/navbar/contactus';
    }
  };

  return (
    <ScrollAnimation animation="fadeInUp">
      <section className={styles.contactCTA} id="contact-cta">
        <div className={styles.container}>
          {/* Background Elements */}
          <div className={styles.backgroundElements}>
            <div className={styles.gradientOrb}></div>
            <div className={styles.gridPattern}></div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            {/* Header */}
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className={styles.header}>
                <div className={styles.preTitle}>Ready to Transform Your Business?</div>
                <h2 className={styles.title}>CONTACT US NOW</h2>
                <div className={styles.underline}></div>
              </div>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className={styles.description}>
                <p>
                  Join the Future. Partner with Excellence. Myrtle Solutions Canada
                  invites Partners, Investors, and Professionals
                  to discover how collaboration can drive mutual success and market leadership.
                </p>
              </div>
            </ScrollAnimation>

            {/* CTA Button */}
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className={styles.ctaContainer}>
                <button 
                  className={styles.ctaButton}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleContactClick}
                >
                  <span className={styles.buttonText}>Discover More</span>
                  <div className={styles.buttonHoverEffect}></div>
                  <div className={`${styles.buttonSparkle} ${isHovered ? styles.active : ''}`}></div>
                </button>
                
                {/* Secondary Info */}
                <div className={styles.secondaryInfo}>
                  <div className={styles.contactInfo}>
                    <span>📞 +1 (555) 123-4567</span>
                    <span>✉️ hello@myrtlesolutions.com</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Decorative Elements */}
          <div className={styles.decorativeElements}>
            <div className={styles.floatingShape1}></div>
            <div className={styles.floatingShape2}></div>
            <div className={styles.floatingShape3}></div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}