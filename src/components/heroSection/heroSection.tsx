// // src/components/HeroSection/HeroSection.tsx
// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import styles from './herosection.module.scss';
// import Slider1 from '../../../public/heroimages/slider1.jpg'
// import Slider2 from '../../../public/heroimages/slider2.jpg'
// import Slider3 from '../../../public/heroimages/slider3.jpg'
// import Slider4 from '../../../public/heroimages/slider4.jpg'
// import Image from 'next/image';

// const heroImages = [
//   {
//     id: 1,
//     src: Slider1,
//     alt: 'Professional team collaboration'
//   },
//   {
//     id: 2,
//     src: Slider2,
//     alt: 'Business meeting and strategy'
//   },
//   {
//     id: 3,
//     src: Slider3,
//     alt: 'Innovative team discussion'
//   },
//   {
//     id: 4,
//     src: Slider4,
//     alt: 'Successful project completion'
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const nextSlide = useCallback(() => {
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//   }, []);

//   const prevSlide = () => {
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
//   };

//   const goToSlide = (index: number) => {
//     setIsTransitioning(true);
//     setCurrentSlide(index);
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   // Reset transitioning state after animation
//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => setIsTransitioning(false), 500);
//       return () => clearTimeout(timer);
//     }
//   }, [isTransitioning]);

//   return (
//     <section className={styles.heroSection}>
//       {/* Background Image Slider */}
//       <div className={styles.sliderContainer}>
//         <div 
//           className={`${styles.sliderTrack} ${isTransitioning ? styles.transitioning : ''}`}
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {heroImages.map((image, index) => (
//             <div key={image.id} className={styles.slide}>
//               <div className={styles.imageWrapper}>
//                 {/* Replace with actual Image component when you have images */}
//                 <div className={styles.placeholderImage}>
//                   <div className={styles.placeholderContent}>
//                     <span>Professional Collaboration {index + 1}</span>
//                     <small>Team working together on innovative solutions</small>
//                   </div>
//                 </div>
//                 {/* Uncomment when you have actual images */}
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className={styles.sliderImage}
//                   priority={index === 0}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Gradient Overlay */}
//         <div className={styles.gradientOverlay}></div>
//       </div>

//       {/* Canoe-like Transparent Overlay */}
//       {/* <div className={styles.canoeOverlay}>
//         <div className={styles.canoeShape}></div>
//       </div> */}

//       {/* Hero Content */}
//       <div className={styles.heroContent}>
//         <div className="container">
//           <div className={styles.contentWrapper}>
//             {/* Headline */}
//             <h1 className={styles.headline}>
//               Transforming{' '}
//               <span className={styles.highlight}>Ideas</span>{' '}
//               into Exceptional{' '}
//               <span className={styles.highlight}>Solutions</span>
//             </h1>

//             {/* Sub-headline */}
//             <p className={styles.subheadline}>
//               At Myrtle Solutions, we bridge innovation with execution. 
//               Our team of expert professionals collaborates to deliver 
//               cutting-edge strategies that drive your business forward 
//               in today's dynamic landscape.
//             </p>

//             {/* CTA Buttons */}
//             <div className={styles.ctaContainer}>
//               <button className={`${styles.ctaButton} ${styles.primary}`}>
//                 Start Your Project
//                 <span className={styles.buttonHover}></span>
//               </button>
//               <button className={`${styles.ctaButton} ${styles.secondary}`}>
//                 View Our Work
//               </button>
//             </div>

//             {/* Stats */}
//             <div className={styles.statsContainer}>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>150+</span>
//                 <span className={styles.statLabel}>Projects Completed</span>
//               </div>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>98%</span>
//                 <span className={styles.statLabel}>Client Satisfaction</span>
//               </div>
//               <div className={styles.stat}>
//                 <span className={styles.statNumber}>50+</span>
//                 <span className={styles.statLabel}>Expert Professionals</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slider Controls */}
//       <div className={styles.sliderControls}>
//         <button 
//           className={styles.controlButton} 
//           onClick={prevSlide}
//           aria-label="Previous slide"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//         {/* Slide Indicators */}
//         <div className={styles.slideIndicators}>
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               className={`${styles.indicator} ${
//                 index === currentSlide ? styles.active : ''
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         <button 
//           className={styles.controlButton} 
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Scroll Indicator */}
//       <div className={styles.scrollIndicator}>
//         <div className={styles.scrollArrow}></div>
//       </div>
//     </section>
//   );
// }

// src/components/HeroSection/HeroSection.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './herosection.module.scss';
import Slider1 from '../../../public/heroimages/slider1.jpg';
import Slider2 from '../../../public/heroimages/slider2.jpg';
import Slider3 from '../../../public/heroimages/slider3.jpg';
import Slider4 from '../../../public/heroimages/slider4.jpg';
import Image from 'next/image';

const heroImages = [
  {
    id: 1,
    src: Slider1,
    alt: 'Professional team collaboration'
  },
  {
    id: 2,
    src: Slider2,
    alt: 'Business meeting and strategy'
  },
  {
    id: 3,
    src: Slider3,
    alt: 'Innovative team discussion'
  },
  {
    id: 4,
    src: Slider4,
    alt: 'Successful project completion'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reset transitioning state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className={styles.heroSection}>
      {/* Background Image Slider with Levels Advisory style */}
      <div className={styles.sliderContainer}>
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            } ${index === currentSlide - 1 || (currentSlide === 0 && index === heroImages.length - 1) ? styles.previous : ''}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.sliderImage}
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
              {/* Gradient overlay like Levels Advisory */}
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        ))}
      </div>
   .
      {/* Static Hero Content */}
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.contentWrapper}>
            {/* Headline */}
            <h1 className={styles.headline}>
              Deploying{' '}
              <span className={styles.highlight}>Technology.</span>{' '}
              Delivering{' '}
              <span className={styles.highlight}>Transformation</span>
            </h1>

            {/* Sub-headline */}
            <p className={styles.subheadline}>
             Your Trusted Canadian Partner in Project Consultancy, Strategic Advisory, and Digital Skills Training.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <button className={`${styles.ctaButton} ${styles.primary}`}>
                Start Your Project
              </button>
              <button className={`${styles.ctaButton} ${styles.secondary}`}>
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Levels Advisory Style */}
      <div className={styles.slideIndicators}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={styles.indicatorProgress}></span>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}