// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import PreloadScreen from '../components/PreloadScreen/PreloadScreen';
import Navbar from '../components/Navbar/Navbar';
import styles from './page.module.scss';
import HomePage from '../homepage/homepage';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Fallback timer in case preloader doesn't complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Slightly longer than preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader at the root level - outside main content */}
      {isLoading && (
        <PreloadScreen 
          onLoadingComplete={handleLoadingComplete} 
          duration={4000}
        />
      )}
      
      {/* Main content - only show when not loading */}
      {!isLoading && (
        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.homepage}>
              <Navbar />
              <HomePage />
              <Footer />
            </div>
          </div>
        </main>
      )}
    </>
  );
}