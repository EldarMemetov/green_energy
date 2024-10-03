import son from "../Image/son.png";
import styles from "./OurProducts.module.css";

export default function OurProducts() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.description}>
          We plan, design, and install complete photovoltaic systems from
          Arizona. Our experienced team of experts monitors the system from
          request to commissioning.
        </p>
        <h3 className={styles.subtitle}>Scope of services</h3>
        <ul className={styles.servicesList}>
          <li
            className={`${styles.serviceItem} ${styles.fadeIn}`}
            style={{ animationDelay: "0.2s" }}
          >
            <img src={son} alt="Service Icon" className={styles.icon} />
            <p>
              Roof installation, including construction and dismantling of
              scaffolding, additional work.
            </p>
          </li>
          <li
            className={`${styles.serviceItem} ${styles.fadeIn}`}
            style={{ animationDelay: "0.4s" }}
          >
            <img src={son} alt="Service Icon" className={styles.icon} />
            <p>Electrical installation of the entire system.</p>
          </li>
          <li
            className={`${styles.serviceItem} ${styles.fadeIn}`}
            style={{ animationDelay: "0.6s" }}
          >
            <img src={son} alt="Service Icon" className={styles.icon} />
            <p>Commissioning with the responsible network operator.</p>
          </li>
          <li
            className={`${styles.serviceItem} ${styles.fadeIn}`}
            style={{ animationDelay: "0.8s" }}
          >
            <img src={son} alt="Service Icon" className={styles.icon} />
            <p>Monitoring and service.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
