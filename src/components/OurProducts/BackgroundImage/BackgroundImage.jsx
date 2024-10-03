import photoSystem from "../Image/photoSystem.jpg";
import styles from "./BackraundImage.module.css";
export default function BackgroundImage() {
  return (
    <section className={styles.sectionImage}>
      <div>
        <img className={styles.imgPhoto} src={photoSystem} alt="" />
      </div>
    </section>
  );
}
