import gustavo from "../PhotoTeam/gustavo.jpg";
import styles from "./TransparentCommunication.module.css";

export default function TransparentCommunication() {
  return (
    <section className={styles.transparentSection}>
      {/* Центрируем заголовки */}
      <div className={styles.centeredHeader}>
        <h2 className={styles.title}>Transparent Communication</h2>
        <h3 className={styles.subtitle}>
          TO MAKE AN INFORMED PURCHASING DECISION
        </h3>
      </div>

      {/* Блок с изображением и текстом */}
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={gustavo}
            alt="Team member communicating"
            className={styles.image}
          />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.description}>
            Since our clients are as diverse as the projects we have already
            implemented, we attach great importance to accessibility in order to
            clarify all questions and problems competently, individually, and in
            a personal conversation. Through clear and open communication, we
            ensure that we implement your requirements and wishes to your
            complete satisfaction.
          </p>
          <p className={styles.description}>
            If necessary, our team will understand you in plain language - “I’ll
            chat with you.”
          </p>
        </div>
      </div>
    </section>
  );
}
