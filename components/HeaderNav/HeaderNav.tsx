"use client";

import Link from "next/link";
import css from "./HeaderNav.module.css";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link
              className={`${css.navListLink} ${path === "/" && css.navListActiveLink}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${css.navListLink} ${path === "/catalog" && css.navListActiveLink}`}
              href="/catalog"
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderNav;
