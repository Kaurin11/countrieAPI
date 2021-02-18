import React from "react";

const SearchBox = ({ placeholder,value, onChange }) => {
  return (
    <form>
      <div className="search__box">
        <ion-icon size="large" name="search-circle-outline"></ion-icon>
        <input
          type="search"
          className="search__input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </form>
  );
};

export default SearchBox;
