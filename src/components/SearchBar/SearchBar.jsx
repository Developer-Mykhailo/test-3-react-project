import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleCange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={s.search_wrap} onChange={handleCange}>
      <input type="text" />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
