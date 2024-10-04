import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ toggleMenu, isMenuOpen }) {
  return (
    <motion.div
      className={styles.burgerMenu}
      onClick={toggleMenu}
      whileTap={{ scale: 0.9 }} // Плавная анимация при нажатии
    >
      {isMenuOpen ? <motion.span>&times;</motion.span> : <IoMdMenu />}
    </motion.div>
  );
}
