// Footer.js
import { FaTwitter, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.scss'
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Logo from '../../../public/Screenshot_20251105-172751~2 (1).jpg'

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Expertise", href: "/expertise" },
    { name: "Our Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" }
  ];

  const companyLinks = [
    { name: "Careers", href: "/careers" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" }
  ];

  const partnerLogos = [
    { name: "TechCorp" },
    { name: "InnovateCo" },
    { name: "GlobalSoft" },
    { name: "NextGen" },
    { name: "FutureTech" },
    { name: "SmartSys" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Image src={Logo} alt="Myrtle Solutions Logo" fill className={styles.logoImg}/>
              </div>
              <div className={styles.brandText}>
                <strong>Myrtle Solutions</strong>
                <span>Registered in Canada</span>
              </div>
            </div>
            
            <div className={styles.companyInfo}>
              <p>
                <FaMapMarkerAlt />
                123 Business Avenue, Toronto, ON M5V 2T6, Canada
              </p>
              <p>
                <FaEnvelope />
                <a href="mailto:info@myrtlesolutions.ca">info@myrtlesolutions.ca</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className={styles.linksSection}>
            <h3>Company</h3>
            <div className={styles.links}>
              {companyLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Partners & Social */}
          <div className={styles.socialSection}>
            <div className={styles.partnersSection}>
              <h3>Our Partners</h3>
              <div className={styles.partnerLogos}>
                {partnerLogos.map((partner, index) => (
                  <div key={index} className={styles.partnerLogo}>
                    <div className={styles.logoPlaceholder}>
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <CiLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IoLogoInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <CiFacebook />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>

            <div className={styles.newsletter}>
              <h4>Stay Updated</h4>
              <div className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomRow}>
          <p>Myrtle Solutions ©2025 Custom MVPs. All Rights Reserved</p>
          <div className={styles.legalLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;