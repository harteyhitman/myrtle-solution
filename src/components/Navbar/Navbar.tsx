// src/components/Navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/public/Screenshot_20251105-172751~2 (1).jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/navbar/aboutus', label: 'About Us' },
    { href: '/navbar/ourexpertise', label: 'Our Expertise' },
    { href: '/navbar/oursolutions', label: 'Our Solutions' },
    { href: '/navbar/ourpartners', label: 'Our Partners/Projects' },
    { href: '/navbar/contactus', label: 'Contact Us' },
  ];

//   About Us
// Our Expertise
// Our Solutions
// Our Partners/Projects
// Contact Us
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            {/* <div className={styles.logoContent}>
              <span className={styles.logoText}>Myrtle</span>
              <span className={styles.logoSubtitle}>SOLUTIONS</span>
            </div> */}
          <Image src={Logo} alt="Myrtle Solutions Logo" className={styles.logoImg} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                <span className={styles.linkText}>{item.label}</span>
                <span className={styles.linkHover}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className={styles.navCTA}>
            <Link href="/get-started" className={styles.ctaButton}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.active : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileMenuContent}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className={styles.mobileCTA}
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}