"use client";
import Link from "next/link";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className={`container`}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroSubtitle}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={`greenBtn ${css.heroLink}`}>
          View Now
        </Link>
      </div>
    </section>
  );
};
export default Hero;
