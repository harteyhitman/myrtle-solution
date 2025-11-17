// SmartSolutions.js
import styles from "./SmartSolutions.module.scss";

export default function SmartSolutions() {
  const features = [
    {
      title: "Strategic",
      description: "Customer-focused solutions that secure competitive equity and drive sustainable business growth through data-driven insights.",
      icon: "S"
    },
    {
      title: "Scalable",
      description: "Flexible architecture designed for exponential growth, whether on-premise or cloud-hosted, adapting to your evolving needs.",
      icon: "S"
    },
    {
      title: "Sustainable",
      description: "Long-term solutions that minimize environmental impact while maximizing value creation and operational efficiency.",
      icon: "S"
    }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.fadeIn}`}>
          <h1>Smart Solutions</h1>
          <p>
            We leverage cutting-edge technology and strategic expertise to deliver 
            intelligent solutions that drive real business value. Our approach 
            combines strategic thinking with innovative execution.
          </p>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`${styles.feature} ${styles.staggerFadeIn}`}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>
      </div>
        <div className={styles.BtnContainer}>
           <button className={styles.button}>
            Discover More →
          </button>
      </div>
    </section>
  );
}