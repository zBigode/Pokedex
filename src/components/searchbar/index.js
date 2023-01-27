import { useState } from "react";
import "./search.css";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    const result = (e.target.value.replace(/[^a-z,0-9]/gi, ''));
    setSearch(result)
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onClickBtnHandler = () => {
    if(search === ''){
      onSearch(undefined);
    }else{
    onSearch(search);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input 
         placeholder="Buscar Pokemon" 
         onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClickBtnHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
