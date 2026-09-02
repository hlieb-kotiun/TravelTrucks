"use client";
import Link from "next/link";
import HeaderNav from "../HeaderNav/HeaderNav";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.headerSection}>
      <div className={`container ${css.headerContainer}`}>
        {/* <p className={css.logo}>TravelTrack</p> */}
        <Link href="/">
          {/* <svg className="icon icon-TravelTrucks"> */}
          <svg />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
};
export default Header;
