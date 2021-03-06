import React from "react";
import { Button } from "react-bootstrap";

export const HeaderSearch = () => {
  return (
    <div className="header__search">
      <img src="/images/search.svg" alt="" className="searchIcon " />
      <input
        type="text"
        className="header__searchInput"
        placeholder="Search products, brands and categories"
      />

      <Button className="button">SEARCH</Button>
    </div>
  );
};

export const CategorySideSearch = () => {
  return (
    <div className="header__search header__searchTwo">
      <img src="/images/search.svg" alt="" className="searchIcon " />
      <input
        type="text"
        className="header__searchInput header__searchInputTwo"
        placeholder="Search"
      />
    </div>
  );
};

export const HelpSearch = () => {
  return (
    <div className="header__searchThree">
      <img src="/images/search.svg" alt="" className="searchIcon " />
      <input
        type="text"
        className="header__searchInput"
        placeholder="Describe your issue"
      />
    </div>
  );
};
