import { motion } from "framer-motion";
import lamp from "../RepairsOverPhoto/lamp.png";
import styles from "./OverFunction.module.css";

export default function OverFunction() {
  return (
    <section className={styles.repairSection}>
      <div className={styles.overlay}></div> {/* Затемнение фона */}
      <div className={styles.repairContainer}>
        {/* Контейнер для текста и изображения */}
        <div className={styles.repairContent}>
          {/* Текстовый блок с заголовком и описанием */}
          <div className={styles.textBlock}>
            {/* Заголовок с плавным появлением */}
            <motion.h2
              className={styles.repairTitle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              Repairs Over Replacement
            </motion.h2>
            {/* Описание с анимацией */}
            <motion.p
              className={styles.repairDescription}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We approach every aspect of our business with sustainability in
              mind. why we believe it’s always worth trying to fix a system
              before replacing it. This approach requires fewer materials, is
              easier on the planet, and better for your wallet! If another
              company tells you that your system needs to be replaced, give us a
              call and see if we can repair it first.
            </motion.p>
          </div>
          {/* Изображение лампы с анимацией */}
          <motion.img
            src={lamp}
            alt="Lamp"
            className={styles.repairImage}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}
