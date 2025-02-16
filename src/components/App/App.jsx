import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import DetailsPage from "../../pages/DetailsPage/DetailsPage.jsx";
// import FeaturesPage from "../../pages/FeaturesPage/FeaturesPage.jsx";
import ReviewsPage from "../../pages/ReviewsPage/ReviewsPage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            {/* <Route path="features" element={<FeaturesPage />} /> */}
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
// Features
