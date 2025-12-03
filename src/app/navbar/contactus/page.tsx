'use client';

import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import styles from "./ContactUs.module.scss";
import ContactImg from "../../../../public/heroimages/myslider2.jpeg";

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ subject, message });
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.intro}>
              We&apos;re here you help. Reach out through any any the following methods or fill to form below.
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className={styles.content}>
            {/* Left Column - Image */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={ContactImg} 
                  alt="Business professionals meeting" 
                  fill 
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Right Column - Get In Touch */}
            <div className={styles.formColumn}>
              <div className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                
                {/* Contact Information */}
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>📍</span>
                    <span className={styles.contactText}>
                      Address: 123 Technology Drive, Suite 456, Francisco, CA 90077
                    </span>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>✉️</span>
                    <span className={styles.contactText}>
                      Email: <a href="mailto:info@innovatdtco.com" className={styles.emailLink}>info@innovatdtco.com</a>
                    </span>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>📞</span>
                    <span className={styles.contactText}>
                      Phone: (0) 448 725 777767
                    </span>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={styles.textarea}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
