import { NavLink } from "react-router-dom";
import css from "../../components/MainMenu/MainMenu.module.css";

const MainMenu = () => {
  return (
    <nav className={css.nav}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/catalog">Catalog</NavLink>
      </li>
    </nav>
  );
};
export default MainMenu;
