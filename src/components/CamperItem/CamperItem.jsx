import { useDispatch, useSelector } from "react-redux";
import { fetchCampersDetails } from "../../redux/campers/operations.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../CamperItem/CamperItem.module.css";

export default function CamperItem() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector((state) => state.campers.items);

  useEffect(() => {
    dispatch(fetchCampersDetails(id)); // Отримуємо деталі обраного кемпера
  }, [dispatch, id]);
  fetchCampersDetails();

  return (
    <div className={css.h}>
      {/* <div className={css.image}>
        {camper.gallery?.map((image, index) => (
          <img
            key={index}
            className={css.image}
            src={image.thumb}
            alt={`Camper ${index + 1}`}
          />
        ))}
      </div> */}

      <ul className={css.gallary}>
        {camper.gallery?.map((item, index) => (
          <li key={index}>
            <img
              className={css.image}
              src={item.thumb}
              alt={`Gallery image ${index + 1}`}
            />
          </li>
        ))}
      </ul>
      <ul className={css.p}>
        <li key={camper.id}>
          <h3>{camper.name}</h3>
          <p>Price: {camper.price} UAH</p>
          <p>Location: {camper.location}</p>
          <p>Rating: {camper.rating} ★</p>
        </li>
      </ul>
    </div>
  );
}
