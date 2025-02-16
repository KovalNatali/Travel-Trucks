import css from "../DatailsCramper/DatailsCramper.module.css";

export default function DatailsCramper({ camper }) {
  console.log(camper);
  return (
    <>
      <div className={css.h}>
        <ul className={css.p}>
          <li key={camper.id}>
            <h3 className={css.name}>{camper.name}</h3>
            <div className={css.camperRatingLocationContainer}>
              <div className={css.camperRatingContainer}>
                {camper.rating}Reviews
              </div>

              <div className={css.camperLocationContainer}>
                {/* <svg id="map" width={16} height={16} /> */}
                {camper.location}
              </div>
            </div>

            <p className={css.camperPrice}>€{camper.price}</p>
          </li>
        </ul>
        <ul className={css.imageGallery}>
          {camper.gallery?.map((item, index) => (
            <li key={index}>
              <img src={item.thumb} alt={`Gallery image ${index + 1}`} />
            </li>
          ))}
        </ul>
        <div className={css.description}>
          <p>{camper.description}</p>
        </div>
      </div>
    </>
  );
}
