// src/components/PreloadScreen/PreloadScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './PreloadScreen.module.scss';

interface PreloadScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const PreloadScreen: React.FC<PreloadScreenProps> = ({ 
  onLoadingComplete, 
  duration = 4000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'animating' | 'exiting'>('entering');

  useEffect(() => {
    const sequence = {
      enter: 500,
      animate: 2500,
      exit: 1000,
    };

    const enterTimer = setTimeout(() => {
      setAnimationPhase('animating');
    }, sequence.enter);

    const exitTimer = setTimeout(() => {
      setAnimationPhase('exiting');
    }, sequence.enter + sequence.animate);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, sequence.enter + sequence.animate + sequence.exit);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete, duration]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.preloadScreen} ${styles[animationPhase]}`}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridLines}></div>
        <div className={styles.floatingOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Logo Container with Elegant Reveal */}
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            {/* Main Logo Text */}
            <div className={styles.mainLogo}>
              <h1 className={styles.logoText}>Myrtle</h1>
              <div className={styles.logoSubtitle}>SOLUTIONS</div>
            </div>
            
            {/* Animated Border */}
            <div className={styles.logoBorder}>
              <div className={styles.borderTop}></div>
              <div className={styles.borderRight}></div>
              <div className={styles.borderBottom}></div>
              <div className={styles.borderLeft}></div>
            </div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className={styles.loadingProgress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          <div className={styles.loadingText}>
           Deploying Technology Delivering Transformation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloadScreen;