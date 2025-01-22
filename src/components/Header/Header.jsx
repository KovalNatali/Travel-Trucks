// import MainMenu from "../MainMenu/MainMenu.jsx";
import { NavLink } from "react-router-dom";
import css from "../../components/Header/Header.module.css";

const Header = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="136" height="15">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-Logo" />
        </svg>
      </div>

      <div className={css.navlink}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.activeLink}` : css.link
          }
        >
          Catalog
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;
