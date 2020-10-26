import React from "react";
import styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.header__search}>
    <input
      type="text"
      className={styles.header__searchInput}
      placeholder="Search, products, brands and categories"
    />

    <img src="/images/submitButton.svg" alt="" />
  </div>

  );
}

export default Search;
