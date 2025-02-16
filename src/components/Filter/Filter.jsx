import { useDispatch, useSelector } from "react-redux";
import { PiShower } from "react-icons/pi";
import {
  setLocation,
  setType,
  setHasAC,
  setHasKitchen,
  setHasBathroom,
  setHasTV,
  setTransmission,
} from "../../redux/filters/slice.js";
import { setFilteredCampers } from "../../redux/campers/slice.js";
import { resetFilters } from "../../redux/filters/slice.js";
import css from "./Filter.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  // Handle filter changes
  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      switch (name) {
        case "hasAC":
          dispatch(setHasAC(checked));
          break;
        case "hasKitchen":
          dispatch(setHasKitchen(checked));
          break;
        case "hasBathroom":
          dispatch(setHasBathroom(checked));
          break;
        case "hasTV":
          dispatch(setHasTV(checked));
          break;
        case "isAutomatic":
          dispatch(setTransmission(checked ? "automatic" : ""));
          break;
        default:
          break;
      }
    } else {
      dispatch(name === "location" ? setLocation(value) : setType(value));
    }
  };

  // Handle form submission
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to filter campers based on the current state values
    dispatch(setFilteredCampers(filters));
    // Reset the filters
    dispatch(resetFilters());
  };

  return (
    <div className={css.filtersSection}>
      <form onSubmit={handleFilterSubmit}>
        <div className={css.locationLabel}>Location</div>
        <div className={css.locationInputContainer}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
            className={css.locationInput}
          />
          <svg id="map" className={css.inputIcon} />
        </div>

        <div className={css.filtersLabel}>Filters</div>

        <div className={css.filterGroup}>
          <div className={css.filterTitle}>Vehicle equipment</div>
          <div className={css.checkboxGroup}>
            <label
              className={`${css.checkboxLabel} ${
                filters.hasAC ? css.checkboxLabelActive : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ac" />
              </svg>
              <input
                type="checkbox"
                name="hasAC"
                checked={filters.hasAC}
                onChange={handleFilterChange}
                className={css.checkboxInput}
              />
              AC
            </label>
            <label
              className={`${css.checkboxLabel} ${
                filters.transmission === "automatic"
                  ? css.checkboxLabelActive
                  : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-diagram" />
              </svg>
              <input
                type="checkbox"
                name="isAutomatic"
                checked={filters.transmission === "automatic"}
                onChange={handleFilterChange}
              />
              Automatic
            </label>
            <label
              className={`${css.checkboxLabel} ${
                filters.hasKitchen ? css.checkboxLabelActive : ""
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-cup-hot" />
              </svg>
              <input
                type="checkbox"
                name="hasKitchen"
                checked={filters.hasKitchen}
                onChange={handleFilterChange}
              />
              Kitchen
            </label>
            <label
              className={`${css.checkboxLabel} ${
                filters.hasTV ? css.checkboxLabelActive : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-tv" />
              </svg>
              <input
                type="checkbox"
                name="hasTV"
                checked={filters.hasTV}
                onChange={handleFilterChange}
              />
              TV
            </label>
            <label
              className={`${css.checkboxLabel} ${
                filters.hasBathroom ? css.checkboxLabelActive : undefined
              }`}
            >
              <p>
                <PiShower size="32" /> Bathroom
              </p>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ph_shower" />
              </svg> */}
              <input
                type="checkbox"
                name="hasBathroom"
                checked={filters.hasBathroom}
                onChange={handleFilterChange}
              />
            </label>
          </div>
        </div>

        <div className={css.filterGroup}>
          <div className={css.filterTitle}>Vehicle type</div>

          <div className={css.checkboxGroup}>
            <label
              className={`${css.checkboxLabel} ${css.checkboxLabelLong} ${
                filters.type === "panelTruck"
                  ? css.checkboxLabelActive
                  : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-bi_grid-1x2" />
              </svg>
              <input
                type="radio"
                name="type"
                value="panelTruck"
                checked={filters.type === "panelTruck"}
                onChange={handleFilterChange}
              />
              Van
            </label>
            <label
              className={`${css.checkboxLabel} ${css.checkboxLabelLong} ${
                filters.type === "fullyIntegrated"
                  ? css.checkboxLabelActive
                  : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-Vector" />
              </svg>
              <input
                type="radio"
                name="type"
                value="fullyIntegrated"
                checked={filters.type === "fullyIntegrated"}
                onChange={handleFilterChange}
              />
              Fully integrated
            </label>
            <label
              className={`${css.checkboxLabel} ${
                filters.type === "alcove" ? css.checkboxLabelActive : undefined
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-bi_grid-3x3-gap" />
              </svg>
              <input
                type="radio"
                name="type"
                value="alcove"
                checked={filters.type === "alcove"}
                onChange={handleFilterChange}
              />
              Alcove
            </label>
          </div>
        </div>
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
