import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import css from "../../pages/HomePage/HomePage.module.css";
import Filter from "../../components/Filter/Filter.jsx";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.conteiner}>
      <CatalogList />
      <Filter />
    </div>
  );
}

export default CatalogPage;
