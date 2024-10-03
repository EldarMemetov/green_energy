import { motion } from "framer-motion";
import son from "../Image/son.png";
import styles from "./PhotovoltaicModules.module.css";

export default function PhotovoltaicModules() {
  return (
    <section className={styles.photovoltaicSection}>
      <div className={styles.content}>
        <motion.img
          src={son}
          alt="Sun"
          className={styles.sunImage}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />
        <h2 className={styles.moduleTitle}>Our photovoltaic modules</h2>
        <p className={styles.moduleText}>
          When installing our photovoltaic systems, we only use photovoltaic
          modules from reputable companies and give preference to modules with a
          national warranty. Photovoltaic modules vary in cell technology,
          design, performance, appearance and size. We will advise you in detail
          which type of module is best to choose in your individual case.
        </p>
      </div>
    </section>
  );
}
