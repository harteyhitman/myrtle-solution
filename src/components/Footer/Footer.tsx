import { FaXTwitter } from "react-icons/fa6";
import styles from './Footer.module.scss'
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Logo from '../../../public/Screenshot_20251105-172751~2 (1).jpg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image src={Logo} alt="logo" className={styles.logoImg}/>
          </div>
          <span>
            <strong>Myrtle Solutions</strong> | Registered in Canada
          </span>
        </div>

        <div className={styles.links}>
          <a href="/terms">Terms of use</a>
          <a href="/privacy">Privacy policy</a>
        </div>

        <div className={styles.socials}>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <CiFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <CiLinkedin />
          </a>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomRow}>
        <p>Myrtle Solutions ©2025 Custom MVPs. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
