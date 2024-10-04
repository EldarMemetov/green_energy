import { useState, useEffect } from "react"; // Импорт хуков React
import { motion } from "framer-motion"; // Библиотека для анимации
import { Element } from "react-scroll"; // Для скроллинга
import { IoBatteryCharging } from "react-icons/io5"; // Иконка батареи
import home from "../PhotoSlide/home.png"; // Изображение дома
import sun from "../PhotoSlide/son.png"; // Изображение солнца
import day from "../PhotoSlide/day.png"; // Изображение дня
import night from "../PhotoSlide/night.png"; // Изображение ночи
import panel from "../PhotoSlide/panel.png"; // Изображение панели
import styles from "./FunctionSlide.module.css"; // Стили

export default function FunctionSlide() {
  const [scrollY, setScrollY] = useState(0); // Состояние для отслеживания прокрутки
  const [isDay, setIsDay] = useState(true); // Состояние дня и ночи

  // Функция обработки прокрутки
  const handleScroll = () => {
    setScrollY(window.scrollY); // Обновляем позицию прокрутки
    setIsDay(window.scrollY <= 1800); // День, если прокрутка <= 1800
  };

  // Добавляем слушатель прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.sectionSlide}>
      {/* Фоновые изображения дня и ночи */}
      <motion.img
        src={day}
        alt="Day"
        className={`${styles.backgroundImage} ${styles.dayImage}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isDay ? 1 : 0 }}
        transition={{ duration: 20 }}
      />
      <motion.img
        src={night}
        alt="Night"
        className={`${styles.backgroundImage} ${styles.nightImage}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isDay ? 0 : 1 }}
        transition={{ duration: 2 }}
      />

      {/* Секция 1: Приветствие */}
      <Element name="section1" className={styles.sectionhome}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние: уменьшенный размер
          animate={{
            opacity: scrollY > 100 ? 1 : 0, // Появление
            scale: scrollY > 100 ? 1 : 0.8, // Увеличение
          }}
          transition={{ duration: 1 }}
        >
          <img src={home} alt="Home" className={styles.homeImage} />
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }} // Начальное состояние: уменьшенный размер
          animate={{
            opacity: scrollY > 100 ? 1 : 0, // Появление
            scale: scrollY > 100 ? 1 : 0.8, // Увеличение
          }}
          transition={{ duration: 1 }}
        >
          <img src={panel} alt="Solar Panel" className={styles.panelImage} />
        </motion.div>

        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: scrollY > 100 ? 1 : 0,
            y: scrollY > 100 ? 0 : 200,
          }}
          transition={{ duration: 1.5 }}
          style={{ margin: "20px 0", padding: "20px" }}
        >
          <div className={styles.mainTitle}>
            <h1>Bright Future Starts Today</h1>
            <p>
              Transform sunlight into clean electricity and forget about high
              energy bills! We offer top-quality solar panel installations to
              power your home for years to come.
            </p>
          </div>
        </motion.div>
      </Element>

      {/* Секция 2: Солнечная энергия */}
      <Element name="section2" className={styles.section}>
        <motion.div
          className={styles.sunSection}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: scrollY > 800 ? 1 : 0,
            scale: scrollY > 800 ? 1 : 0,
          }}
          transition={{ duration: 2 }}
          style={{ margin: "100px 0" }}
        >
          <img src={sun} alt="Sun" className={styles.sunImage} />
        </motion.div>
      </Element>

      {/* Секция 3: Ночной дом и хранение энергии */}
      <Element name="section3" className={styles.section}>
        <motion.div
          className={styles.textContainerHome}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: scrollY > 1800 ? 1 : 0,
            y: scrollY > 1800 ? 0 : -50,
          }}
          transition={{ duration: 1 }}
        >
          <h3 className={styles.elegantHeading}>
            Nighttime Energy Utilization
          </h3>
          <p className={styles.luxuryDescription}>
            While you sleep, our systems keep your home running smoothly,
            ensuring a cozy environment with reliable energy storage.
          </p>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: scrollY > 1800 ? 1 : 0,
            scale: scrollY > 1800 ? 1 : 0.8,
          }}
          transition={{ duration: 1 }}
          style={{ marginTop: "100px" }}
        >
          <img src={home} alt="Home" className={styles.homeImageNight} />
        </motion.div>

        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrollY > 2000 ? 1 : 0,
            y: scrollY > 2000 ? 0 : 50,
          }}
          transition={{ duration: 1 }}
          style={{ margin: "50px 0", padding: "20px" }}
        >
          <div className={styles.storageText}>
            <h3>Power and Reliability</h3>
            <p>
              Store excess energy to keep your home running smoothly, even when
              the sun shines. Invest in battery storage for a secure and
              sustainable future.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.batteryIcon}
          initial={{ opacity: 1 }}
          animate={{ opacity: scrollY > 2000 ? 1 : 0 }}
          transition={{ duration: 3 }}
        >
          <IoBatteryCharging className={styles.batteryImage} />
          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 600 ? 1 : 0, y: 0 }}
            transition={{ duration: 3 }}
            style={{ marginBottom: "50px", padding: "20px" }}
          >
            <div className={styles.highlightText}>
              <h2>Solar Power for Your Independence</h2>
              <p>
                Harness the free energy from the sun every day. Our systems work
                tirelessly to keep your home powered 24/7, reducing your
                dependency on the grid.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Element>
    </section>
  );
}
