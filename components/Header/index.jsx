import { useState, useContext, useEffect } from "react";
import Link from "next/link";

import ThemeContext from "../../context/themeContext";
import styles from "./index.module.css";

import IconMenu from "../icons/IconMenu";
import IconCancel from "../icons/IconCancel";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

import { getTheme } from "../../utils/storage";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const darkMode = getTheme();
    theme.dispatch({
      type: "SET",
      darkMode: darkMode === "true" ? true : false,
    });
  }, []);

  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleThemeTogglerClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  const navItemsClasses = showMenu
    ? `${styles["nav-items"]} ${styles.show}`
    : `${styles["nav-items"]}`;

  return (
    <header className={styles.header}>
      <Link href="/" className={styles["nav-logo"]}>
        PPW.
      </Link>
      <nav className={styles.nav}>
        <ul className={navItemsClasses} onClick={handleMenuItemClick}>
          {/* <li>
            <Link href="/#projects">projects</Link>
          </li> */}
          <li>
            <Link href="/#skills">skills</Link>
          </li>
          <li>
            <Link href="/#contact">contact</Link>
          </li>
        </ul>
        <button onClick={handleThemeTogglerClick}>
          {darkMode ? <IconMoon /> : <IconSun />}
        </button>
        <button
          onClick={handleMenuClick}
          className={styles["toggle-menu"]}
          type="button"
          aria-label="toggle navigation"
        >
          {showMenu ? <IconCancel /> : <IconMenu />}
        </button>
      </nav>
    </header>
  );
};
export default Header;
