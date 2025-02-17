import { Link } from "react-router-dom";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "../CamperItem/CamperItem.module.css";

// import { SVG } from "../../components/svg/svg";

const CamperItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);

  // Handle favorites
  const getIsFavorite = (id) => {
    return favorites.includes(id) ? "favorite" : "";
  };

  const handleFavoriteClick = (id) => {
    if (getIsFavorite(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div key={camper.id} className={css.camperCard}>
      <img src={camper.gallery[0].thumb} alt={camper.name} />
      <div className={css.camperDetails}>
        <div className={css.camperTitleLocationContainer}>
          <div className={css.camperTitle}>
            <h2 className={css.camperName}>{camper.name}</h2>
            <div className={css.camperPriceContainer}>
              <p className={css.camperPrice}>
                €
                {camper.price.toLocaleString("en", {
                  useGrouping: false,
                  minimumFractionDigits: 2,
                })}
              </p>
              <button
                key={camper.id}
                onClick={() => handleFavoriteClick(camper.id)}
                className={css.favoriteButton}
              >
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  id="favorite"
                  width="24"
                  height="24"
                  className={
                    getIsFavorite(camper.id)
                      ? css.camperFavoriteAdded
                      : css.camperFavorite
                  }
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  {/* <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-diagram" /> */}
                </svg>
              </button>
            </div>
            <div className={css.camperRatingLocationContainer}>
              <div className={css.camperRatingContainer}>
                <svg id="rating-star" width={20} height={20} />
                {camper.rating}({camper.reviews.length} Reviews)
              </div>
              <div className={css.camperLocationContainer}>
                <svg id="map" width={16} height={16} />
                {camper.location}
              </div>
            </div>
          </div>

          <div className={css.camperDescription}>{camper.description}</div>

          <div className={css.camperInfo}>
            {camper.transmission && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-diagram" />
                </svg>
                {camper.transmission}
              </span>
            )}
            {camper.engine && (
              <span className={css.camperInfoItem}>
                <svg id="fuel-pump" width={20} height={20} />
                {camper.engine}
              </span>
            )}
            {camper.form && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-bi_grid-3x3-gap" />
                </svg>
                {camper.form === "fullyIntegrated"
                  ? "Fully Integrated"
                  : camper.form === "panelTruck"
                  ? "Panel Truck"
                  : camper.form}
              </span>
            )}
            {camper.AC && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ac" />
                </svg>
                AC
              </span>
            )}
            {camper.kitchen && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-cup-hot" />
                </svg>
                Kitchen
              </span>
            )}
            {camper.bathroom && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ph_shower" />
                </svg>
                Bathroom
              </span>
            )}
            {camper.TV && (
              <span className={css.camperInfoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-tv" />
                </svg>
                TV
              </span>
            )}
          </div>

          <Link
            to={`/catalog/${camper.id}`}
            className={css.showMoreButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperItem;
