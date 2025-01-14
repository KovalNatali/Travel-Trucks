import { NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/catalog">Catalog</NavLink>
      </li>
    </ul>
  );
};
export default MainMenu;
