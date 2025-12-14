// SmartSolutions.js
import styles from "./SmartSolutions.module.scss";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import Button from "../Button/Button";

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
    <ScrollAnimation animation="fadeInUp">
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <ScrollAnimation animation="fadeIn" delay={100}>
            <div className={styles.header}>
              <h1>Smart Solutions</h1>
              <p>
                We leverage cutting-edge technology and strategic expertise to deliver 
                intelligent solutions that drive real business value. Our approach 
                combines strategic thinking with innovative execution.
              </p>
            </div>
          </ScrollAnimation>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <ScrollAnimation 
                key={feature.title}
                animation="fadeInUp" 
                delay={200 + (index * 100)}
              >
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className={styles.divider}></div>
        </div>
        <ScrollAnimation animation="fadeInUp" delay={500}>
          <div className={styles.BtnContainer}>
            <Button href="/navbar/oursolutions" variant="primary" size="md" as="link">
              Discover More →
            </Button>
          </div>
        </ScrollAnimation>
      </section>
    </ScrollAnimation>
  );
}