"use client";
import HeaderNav from "../HeaderNav/HeaderNav";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.headerSection}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};
export default Header;
