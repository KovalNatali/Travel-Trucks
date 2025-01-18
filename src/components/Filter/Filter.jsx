import css from "../../components/Filter/Filter.module.css";

export default function Filter() {
  return (
    <div className={css.box}>
      <div className={css.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ac" />
        </svg>
        <div className={css.text}>TV</div>
      </div>
      <div className={css.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-diagram" />
        </svg>
        <div style={{ marginLeft: "10px" }}>Automatic</div>
      </div>

      <div className={css.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-cup-hot" />
        </svg>
        <div style={{ marginLeft: "10px" }}>Kitchen</div>
      </div>

      <div className={css.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-tv" />
        </svg>
        <div style={{ marginLeft: "10px" }}>AC</div>
      </div>

      <div className={css.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <use xlinkHref="/src/components/svg/symbol-defs.svg#icon-ph_shower" />
        </svg>
        <div style={{ marginLeft: "10px" }}>Bathroom</div>
      </div>
    </div>
  );
}
