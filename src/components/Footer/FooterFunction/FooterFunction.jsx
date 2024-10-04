import { motion } from "framer-motion";
import stylesFooter from "./FooterFunction.module.css";
import son from "../FooterFunctionImage/son.png";

export default function FooterFunction() {
  return (
    <footer className={stylesFooter.footer}>
      {/* Блок с текстом и вращающимся солнцем */}
      <div className={stylesFooter.logoContainer}>
        <motion.span
          className={stylesFooter.sunImage}
          animate={{ rotate: 360 }} // Вращение на 360 градусов
          transition={{
            repeat: Infinity, // Бесконечное повторение
            duration: 30, // Длительность полного оборота
            ease: "linear", // Равномерное вращение
          }}
        >
          <img src={son} alt="Sun" className={stylesFooter.sunImage} />
        </motion.span>
        <span className={stylesFooter.companyName}>Green Energy</span>
      </div>

      {/* Меню */}
      <ul className={stylesFooter.menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Форма для подписки на email */}
      <div className={stylesFooter.emailContainer}>
        <p className={stylesFooter.emailText}>Subscribe to our newsletter:</p>
        <form className={stylesFooter.emailForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={stylesFooter.emailInput}
          />
          <button type="submit" className={stylesFooter.emailButton}>
            Subscribe
          </button>
        </form>
      </div>

      {/* Контактная информация */}
      <div className={stylesFooter.contactInfo}>
        <p>Contact us:</p>
        <p>Address: 123 Solar St, Green City, Earth</p>
        <p>Email: contact@greenenergy.com</p>
        <p>Phone: +1 (234) 567-890</p>
      </div>
    </footer>
  );
}
