import css from "../DatailsCramper/DatailsCramper.module.css";

export default function DatailsCramper({ camper }) {
  console.log(camper);
  return (
    <div className={css.h}>
      <ul className={css.p}>
        <li key={camper.id}>
          <h3>{camper.name}</h3>
          <p>Price: {camper.price} UAH</p>
          <p>Location: {camper.location}</p>
          <p>Rating: {camper.rating} ★</p>
        </li>
      </ul>
      <ul className={css.gallary}>
        {camper.gallery?.map((item, index) => (
          <li key={index}>
            <img src={item.thumb} alt={`Gallery image ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
