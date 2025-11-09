// src/components/BannerContent/BannerContent.tsx
'use client';

import { useState, useRef } from 'react';
import styles from './BannerContent.module.scss';

export default function BannerContent() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={styles.bannerContent}>
      {/* Background Element */}
      <div className={styles.bannerContentBg}></div>

      {/* Play Button */}
      <div className={`${styles.btnWrapper} ${styles.btnMove} ${styles.pRelative} ${styles.hasFadeAnim}`}>
        <button 
          className={`${styles.cfBtn} ${styles.wcBtnPlay} ${styles.videoPopup} ${styles.light}`}
          onClick={handlePlayVideo}
          aria-label="Play introduction video"
        >
          <i className={styles.iconWcfPlay2}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          </i>
        </button>
      </div>

      {/* Title */}
      <div className={`${styles.titleWrapper} ${styles.hasFadeAnim}`}>
        <h2 className={styles.title}>
          Taking Businesses to the{' '}
          <span className={styles.highlight}>Next Level</span>
        </h2>
      </div>

      {/* Text Content */}
      <div className={styles.text}>
        <div className={`${styles.cfText} ${styles.hasFadeAnim}`}>
          <p>Harness Innovation, Collaboration, and Expertise for Measurable Success.</p>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className={styles.videoModal} onClick={handleCloseVideo}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={handleCloseVideo}
              aria-label="Close video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <video
              ref={videoRef}
              controls
              className={styles.videoPlayer}
            >
              <source src="/assets/video/team-planning.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}