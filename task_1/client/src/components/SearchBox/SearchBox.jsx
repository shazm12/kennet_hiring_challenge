import { useState } from "react";
import "./SearchBox.css";
const SearchBox = ({ handleSearch }) => {
  const [ keyword, setKeyword ] = useState("");
  return (
    <>
      <div className="search_box__container">
        <input type="text" name="search" value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Search for anything ..." />
        <button onClick={() => handleSearch(keyword)}>Search</button>
      </div>
    </>
  );
};

export default SearchBox;
