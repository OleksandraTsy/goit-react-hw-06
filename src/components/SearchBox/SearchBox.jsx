import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>
        Find contacts by name
      </label>
      <input
        id={id}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value.trim()))}
        className={css.input}
      ></input>
    </div>
  );
}