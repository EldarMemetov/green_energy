import { motion } from "framer-motion"; // Для анимаций
import service from "../FullServicePhoto/service.png";
import styles from "./ServiceFunction.module.css";

export default function ServiceFunction() {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        {/* Блок с текстом */}
        <motion.div
          className={styles.serviceText}
          initial={{ opacity: 0, x: -50 }} // Начальная анимация (уходит влево)
          whileInView={{ opacity: 1, x: 0 }} // Анимация при появлении
          transition={{ duration: 0.8 }} // Длительность анимации
          viewport={{ once: true }} // Анимация срабатывает только один раз
        >
          <h2 className={styles.serviceTitle}>Full service</h2>
          <h3 className={styles.serviceSubtitle}>Everything from one source</h3>
          <p className={styles.serviceDescription}>
            Our dedicated team of technology-loving experts are ready to help
            you anytime. We take the time to provide you with comprehensive,
            needs-focused, forward-looking advice and work with you to find the
            best solar system for you. From detailed analysis of your energy
            needs to professional planning and installation and long-term
            support, we are here to help you!
          </p>
        </motion.div>

        {/* Блок с изображением с анимацией вращения */}
        <motion.img
          src={service}
          alt="Service"
          className={styles.serviceImage}
          initial={{ opacity: 0, rotate: 0 }} // Начальная анимация: не видно и без вращения
          whileInView={{ opacity: 1, rotate: 360 }} // Анимация при появлении: полная видимость и вращение на 360°
          transition={{ duration: 3 }} // Медленная анимация (1.5 сек)
          viewport={{ once: true }} // Анимация срабатывает только один раз
        />
      </div>
    </section>
  );
}
