import React, { useState } from "react";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const formhandle =(e)=>{
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.foorm} onSubmit={formhandle}>
        <input className={styles.searchbar} placeholder="Search a album of your choice" required />
        <button type="submit" className={styles.button}>
          <SearchIcon/>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
