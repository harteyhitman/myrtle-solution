'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './BackButton.module.scss';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  // Don't show back button on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <button 
      onClick={handleBack}
      className={styles.backButton}
      aria-label="Go back to previous page"
    >
      <span className={styles.arrow}>←</span>
      <span className={styles.text}>Back</span>
    </button>
  );
}
