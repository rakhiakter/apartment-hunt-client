import React from 'react';
import rectangle13 from "../../images/rectangle 13.png";
import './SearchBar.scss';
const SearchBar = () => {
  console.log({ rectangle13 });
  return (
    <div className="bgColor">
      <h1 className="find">FIND YOUR HOUSE RENT</h1>

      <form className="searchIn">
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button className="searchBtn" type="submit">
          Find Now
        </button>
      </form>
    </div>
  );
};

export default SearchBar;