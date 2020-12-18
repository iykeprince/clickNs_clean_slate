import React from "react";
import styles from './Search.module.css'
import  './Search.module.css'
import {Button} from "react-bootstrap"

function Search() {
  return (
    <div className={styles.header__search}>
      <img src="/images/search.svg" alt="" className={styles.searchIcon}/>
    <input
      type="text"
      className={styles.header__searchInput}
      placeholder="Search products, brands and categories"
    />

    <Button className={styles.button}>SEARCH</Button> 
    {/* <button class="buttonn">Button</button> */}
  </div>

  );
}

export default Search;
