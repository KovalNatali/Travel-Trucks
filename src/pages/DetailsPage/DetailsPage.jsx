import { Link } from "react-router-dom";

import CamperItem from "../../components/CamperItem/CamperItem.jsx";

function DetailsPage() {
  return (
    <>
      <title>Details</title>

      <div>
        <CamperItem />
        {/* <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<TruckFeatures />} />
        <Route path="reviews" element={<TruckReviews />} />
      </Routes> */}
        <Link to={"features"}>Features</Link>
        <Link to={"reviews"}>Reviews</Link>
      </div>
    </>
  );
}

export default DetailsPage;
