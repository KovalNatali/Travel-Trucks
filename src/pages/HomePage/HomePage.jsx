import { Link } from "react-router-dom";
import css from "../../pages/HomePage/HomePage.module.css";

function HomePage() {
  return (
    <div className={css.backgroundContainer}>
      {" "}
      <div className={css.heroContent}>
        <div className={css.heroText}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.text}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <div>
          <Link to="/catalog">
            <button className={css.butButton}>View Now</button>
          </Link>
        </div>{" "}
      </div>
    </div>
  );
}

export default HomePage;
