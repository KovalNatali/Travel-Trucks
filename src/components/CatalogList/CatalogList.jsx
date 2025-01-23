import { useDispatch, useSelector } from "react-redux";
import css from "../../components/CatalogList/CatalogList.module.css";
import { Loader } from "../../components/Loader/Loader.jsx";
import CamperItem from "../../components/CamperItem/CamperItem.jsx";
import { loadMoreCampers } from "../../redux/campers/slice.js";

const CatalogList = ({ campers }) => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.campers.status);

  const handleLoadMore = () => {
    dispatch(loadMoreCampers());
  };

  return (
    <div className={css.campersListContainer}>
      {status === "loading" && <Loader />}
      {status === "succeeded" && !campers && <p>No campers found</p>}

      {status === "failed" && <p>Error loading campers</p>}

      {status === "succeeded" &&
        campers &&
        campers.map((camper) => <CamperItem key={camper.id} camper={camper} />)}

      {/* <button onClick={handleLoadMore}>Load More</button> */}
      {status === "succeeded" && (
        <button className={css.loadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogList;
