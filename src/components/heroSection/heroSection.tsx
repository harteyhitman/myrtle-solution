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
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''
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
                <div className={styles.container}>
                    <div className={styles.contentWrapper}>
                        {/* Headline */}
                        <h1 className={styles.headline}>
                            Deploying{' '}
                            <span className={styles.highlight}>Technology</span>{' '}
                            Delivering{' '}
                            <span className={styles.highlight}>Transformation.</span>
                        </h1>

                        {/* Sub-headline */}
                        <p className={styles.subheadline}>
                            Your Trusted Canadian Partner in Project Consultancy, Strategic Advisory, and Digital Skills Training.
                        </p>

                        {/* CTA Buttons */}
                        <div className={styles.ctaContainer}>
                            <button className={`${styles.ctaButton} ${styles.primary}`}>
                                Discover Our Solutions
                            </button>
                            {/* <button className={`${styles.ctaButton} ${styles.secondary}`}>
                View Our Work
              </button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators - Levels Advisory Style */}
            <div className={styles.slideIndicators}>
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''
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