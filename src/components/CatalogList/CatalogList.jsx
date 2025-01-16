import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "../../components/CatalogList/CatalogList.module.css";

export default function CatalogList() {
  const campers = useSelector(selectCampers);

  return (
    <>
      <ul className={css.list}>
        {campers.items?.map((camper) => (
          <li key={camper.id}>
            <img src={camper.gallery[0].thumb} alt={camper.name} width={292} />
            <h3>{camper.name}</h3>
            <p>Price: {camper.price} UAH</p>
            <p>Location: {camper.location}</p>
            <p>Rating: {camper.rating} ★</p>
            <button className={css.butButton}>Show more</button>
          </li>
        ))}
      </ul>
    </>
  );
}
