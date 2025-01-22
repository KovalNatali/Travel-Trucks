import { Link, useParams } from "react-router-dom";

import DatailsCramper from "../../components/DatailsCramper/DatailsCramper.jsx";
import BookingForm from "../../components/Booking/Booking.jsx";
import css from "../../pages/DetailsPage/DetailsPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations.js";
import { useEffect } from "react";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const camper = useSelector((state) => state.campers.list);
  // const status = useSelector((state) => state.campers.status);
  // const [activeTab, setActiveTab] = useState("features");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab); // Update the active tab
  // };

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      <title>Details</title>

      <div className={css.detalscontaner}>
        <DatailsCramper />
        <div className={css.menudetails}> </div>
        <BookingForm />
        <div>
          <Link to={"features"}>Features</Link>
          <Link to={"reviews"}>Reviews</Link>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
