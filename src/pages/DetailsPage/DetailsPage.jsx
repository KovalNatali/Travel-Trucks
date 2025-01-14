import { Link } from "react-router-dom";

function DetailsPage() {
  return (
    <>
      <div>
        <h1>DetailsPage</h1>
        <Link to={"reviews"}>Reviews</Link>
        <Link to={"features"}>Features</Link>
      </div>
    </>
  );
}

export default DetailsPage;
