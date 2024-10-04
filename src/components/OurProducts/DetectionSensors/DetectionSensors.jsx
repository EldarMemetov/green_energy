import panel from "../Image/panel.jpg";
import son from "../Image/son.png";
import styles from "./DetectionSensors.module.css";

export default function DetectionSensors() {
  return (
    <section className={styles.detectionSection}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Arc and Heat Detection Sensors</h2>
          <p className={styles.description}>
            Excellent security for all systems. The photovoltaic system is
            controlled by a high-level module. The premise of critical criticism
            is that it protects people and people.
          </p>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>
              <img src={son} alt="Sun icon" className={styles.icon} />
              <p className={styles.serviceText}>
                Automatic arc detection shuts down your SolarEdge system in the
                event of an insulation failure.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <img src={son} alt="Sun icon" className={styles.icon} />
              <p className={styles.serviceText}>
                Thermal sensors automatically detect a fire and reduce system
                voltage to a safe level.
              </p>
            </li>
            <li className={styles.serviceItem}>
              <img src={son} alt="Sun icon" className={styles.icon} />
              <p className={styles.serviceText}>
                Monitoring the plug connections using temperature sensors also
                ensures safety.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={panel}
            alt="Solar panel"
            className={styles.backgroundImage}
          />
        </div>
      </div>
    </section>
  );
}
