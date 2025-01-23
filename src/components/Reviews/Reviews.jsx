import css from "./Reviews.module.css";
function Reviews({ reviews }) {
  return (
    <ul className={css.reviewsmenu}>
      {reviews?.map((review) => (
        <li key={review.id}>
          <div>
            <div>{review.reviewer_name}</div>
            {/* <div ><StarRating rating={review.reviewer_rating} /></div> */}
          </div>

          <div>{review.comment}</div>
        </li>
      ))}
    </ul>
  );
}
export default Reviews;
