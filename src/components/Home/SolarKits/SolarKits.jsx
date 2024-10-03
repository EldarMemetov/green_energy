import { motion } from "framer-motion";
import styles from "./SolarKits.module.css";
import panels1 from "./ImageFoto/panels1.png";
import panels2 from "./ImageFoto/panels2.png";
import panels3 from "./ImageFoto/panels3.png";

export default function SolarKits() {
  return (
    <section className={styles.sectionKits}>
      <div>
        <h2 className={styles.solarTitle}>Solar Kits</h2>
        <p className={styles.solarDescription}>
          Complete solar system kits, ready for installation. They can be used
          to supplement on-grid housing, a complete self-sustaining home or some
          combination of the two.
        </p>
        <div>
          <ul className={styles.solarProductList}>
            {/* Продукт 1 */}
            <motion.li
              className={styles.solarProductItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={panels1} alt="" className={styles.solarImage} />
              <h3 className={styles.solarProductTitle}>Off Grid</h3>
              <p className={styles.solarProductDescription}>
                Self-sustaining solar power systems for off-grid homes and
                remote locations. Get clean energy anywhere!
              </p>
              <button className={styles.solarButton}>View Products</button>
            </motion.li>

            {/* Продукт 2 */}
            <motion.li
              className={styles.solarProductItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={panels2} alt="" className={styles.solarImage} />
              <h3 className={styles.solarProductTitle}>On Grid</h3>
              <p className={styles.solarProductDescription}>
                Efficient on-grid systems to power your home and reduce energy
                bills by harnessing the power of the sun.
              </p>
              <button className={styles.solarButton}>View Products</button>
            </motion.li>

            {/* Продукт 3 */}
            <motion.li
              className={styles.solarProductItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={panels3} alt="" className={styles.solarImage} />
              <h3 className={styles.solarProductTitle}>Hybrid</h3>
              <p className={styles.solarProductDescription}>
                Combine the best of both worlds with hybrid solar systems, ideal
                for maximum energy efficiency.
              </p>
              <button className={styles.solarButton}>View Products</button>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
