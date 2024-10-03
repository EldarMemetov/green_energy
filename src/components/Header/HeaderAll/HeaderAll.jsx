import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../../Navigation/Navigation";
import Logo from "../Logo/Logo";
import style from "./HeaderAll.module.css";

export function HeaderAll() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Управление прокруткой
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Очистка эффекта при размонтировании
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header className={style.header}>
      <Logo />
      <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
