// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import PreloadScreen from '../components/PreloadScreen/PreloadScreen';
import Navbar from '../components/Navbar/Navbar';
// import Footer from '../components/Footer/Footer';
import styles from './page.module.scss';
import HomePage from '../homepage/homepage';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <main className={styles.main}>
      {isLoading && <PreloadScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`${styles.content} ${isLoading ? styles.loading : styles.loaded}`}>
      <HomePage />
      </div>
    </main>
  );
}