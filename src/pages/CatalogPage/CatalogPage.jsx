import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import css from "../../pages/CatalogPage/CatalogPage.module.css";
import Filter from "../../components/Filter/Filter.jsx";

function CatalogPage() {
  const dispatch = useDispatch();
  const { paginatedCampers } = useSelector((state) => state.campers);

  // Fetch campers
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <div className={css.conteinercanalog}>
        <Filter />
        <CatalogList campers={paginatedCampers} />
      </div>
    </>
  );
}

export default CatalogPage;
