import css from "./Reviews.module.css";
function Reviews({ reviews }) {
  return (
    <ul className={css.reviewsmenu}>
      {reviews?.map((review) => (
        <li key={review.id}>
            <div>{review.reviewer_name}</div>
          <div>{review.comment}</div>
        </li>
      ))}
    </ul>
  );
}
export default Reviews;
