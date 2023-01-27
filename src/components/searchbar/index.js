import { useState } from "react";
import Pokemon from "../Pokemon";
import "./search.css";

const Searchbar = (props) => {
  const [search, setSearch] = useState('');
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onClickBtnHandler = () => {
    onSearch(search);
  };

  
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickBtnHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
