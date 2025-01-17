import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "../../components/CatalogList/CatalogList.module.css";
import { Link } from "react-router-dom";

export default function CatalogList() {
  const campers = useSelector(selectCampers);
  const [visibleCount, setVisibleCount] = useState(5); // Initial visible items count

  const loadMore = () => {
    setVisibleCount(visibleCount + 5); // Increase visible items by 4
  };

  return (
    <div className={css.catalog}>
      <div className={css.list}>
        {campers.items?.slice(0, visibleCount).map((camper) => (
          <div key={camper.id}>
            <div className={css.item}>
              <img
                src={camper.gallery[0].thumb}
                alt={camper.name}
                width={292}
                className={css.camperImage}
              />
              <div className={css.info}>
                <h2 className={css.campername}>{camper.name}</h2>
                <p className={css.price}>
                  €
                  {camper.price.toLocaleString("en", {
                    useGrouping: false,
                    minimumFractionDigits: 2,
                  })}
                  <button className={css.buttonFavorit}>&</button>
                </p>
                <div className={css.rating}>
                  <div className={css.ratingCont}>
                    {camper.rating}({camper.reviews.length} Reviews)
                  </div>
                  <div className={css.camperLocation}>{camper.location}</div>
                </div>

                <div className={css.camperDescription}>
                  {camper.description}
                </div>

                <Link
                  to={`/catalog/${camper.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={css.butButton}>Show more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < campers.items?.length && (
        <button className={css.loadMoreButton} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
