import placeholderImage from "../PhotoTeam/placeholderImage.jpg";
import styles from "./CustomSolutions.module.css";

export default function CustomSolutions() {
  return (
    <section className={styles.customSolutionsSection}>
      <div className={styles.container}>
        <div className={styles.textAboveImage}>
          <h2 className={styles.title}>Innovative</h2>
          <h3 className={styles.subtitle}>AND CUSTOM SOLUTIONS</h3>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={placeholderImage}
            alt="Innovative solutions"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <p className={styles.description}>
              Our long-term employees not only impress with their extensive
              specialist knowledge, technical know-how and experience, but are
              also distinguished by their passion for their work. Our team is
              young, motivated and loves to develop innovative and customized
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
