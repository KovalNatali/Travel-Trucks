// import MainMenu from "../MainMenu/MainMenu.jsx";
import { NavLink } from "react-router-dom";
import css from "../../components/Header/Header.module.css";

const Header = () => {
  return (
    <nav className={css.nav}>
      <div>TravelTrucks</div>
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
