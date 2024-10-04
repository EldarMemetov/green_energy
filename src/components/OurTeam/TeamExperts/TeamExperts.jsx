import markusspiske from "../PhotoTeam/markusspiske.jpg";
import styles from "./TeamExperts.module.css";

export default function TeamExperts() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.backgroundImageContainer}>
        <img
          src={markusspiske}
          alt="Team of Experts"
          className={styles.backgroundImage}
        />
        <div className={styles.textOverlay}>
          <h1 className={styles.title}>Our Team of Experts</h1>
          <p className={styles.subtitle}>
            Crafting innovation with expertise and passion
          </p>
        </div>
      </div>
    </section>
  );
}
