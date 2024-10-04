import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";

export default function Navigation({ isMenuOpen, toggleMenu }) {
  const navVariants = {
    open: {
      right: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
    closed: {
      right: "-100%",
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  return (
    <motion.nav
      className={clsx(styles.nav)}
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      variants={navVariants}
    >
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
            onClick={toggleMenu}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
            onClick={toggleMenu}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              clsx(styles.navLink, { [styles.activeLink]: isActive })
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
}
