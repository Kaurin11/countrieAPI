import React from "react";

const Dropdown = ({ onChange, value }) => {
  return (
    <form className="search__dropdown">
      <select value={value} onChange={onChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Dropdown;
