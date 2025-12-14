'use client';

import Navbar from "@/src/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
import styles from "./ContactUs.module.scss";
import ContactImg from "../../../../public/contact page.jpg";
import Button from "@/src/components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your backend/API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Info</h1>
            <p className={styles.intro}>
            Get in Touch with Myrtle Solutions Canada to Explore Innovative Digital Transformation Strategies.
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
                <h2 className={styles.sectionTitle}>Contact Info</h2>
                
                {/* Contact Information */}
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>📍</span>
                    <span className={styles.contactText}>
                    Company Address: (241 Caribou way North
Lethbridge,
T1H 7E9)
                    </span>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>✉️</span>
                    <span className={styles.contactText}>
                      Email: <a href="mailto:info@innovatdtco.com" className={styles.emailLink}>Support@myrtlesolutions.org</a>
                    </span>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>📞</span>
                    <span className={styles.contactText}>
                      Phone: +1 403 615 7876
                    </span>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      rows={6}
                      required
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                      Something went wrong. Please try again.
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
