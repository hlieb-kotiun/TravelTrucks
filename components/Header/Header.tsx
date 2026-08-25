"use client";
import HeaderNav from "../HeaderNav/HeaderNav";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.headerSection}>
      <div className={`container ${css.headerContainer}`}>
        <p className={css.logo}>TravelTrack</p>
        <HeaderNav />
      </div>
    </header>
  );
};
export default Header;
