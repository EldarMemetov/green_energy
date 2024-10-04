import kindelmedia from "../Image/kindelmedia.jpg";
import styles from "./InstalledRoof.module.css";

export default function InstalledRoof() {
  return (
    <section className={styles.installedRoofSection}>
      <div className={styles.contentWrapper}>
        <img
          src={kindelmedia}
          alt="Roof installation"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>Floating Installed on the Roof</h2>
          <p className={styles.description}>
            Your roof is constantly moving because differences in temperature
            and humidity cause the roof structure to work. To prevent damage to
            your system during long-term operation in snow, cold, rain, and
            scorching sun, we lay the PV modules floating and completely
            dispense with modular clamps. Thermal expansion leaves your system
            cold.
          </p>
        </div>
      </div>
    </section>
  );
}
