import { motion } from "framer-motion";
import son from "../HeaderPhoto/son.png"; // Изображение солнца
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logoList}>
      {/* Вращающееся солнце */}
      <motion.div
        className={style.sunContainer}
        animate={{ rotate: 360 }} // Вращение на 360 градусов
        transition={{
          repeat: Infinity, // Бесконечное повторение
          duration: 30, // Длительность полного оборота
          ease: "linear", // Равномерное вращение
        }}
      >
        <img src={son} alt="Sun" className={style.sunImage} />
      </motion.div>

      {/* Текст Green Energy */}
      <a href="/" className={style.greenText}>
        Green Energy
      </a>
    </div>
  );
};

export default Logo;
