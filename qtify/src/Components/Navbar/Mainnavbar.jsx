import React from "react";
import SearchBar from "./SearchBar";
import FeedbackButton from "./FeedbackButton";
import styles from "./Mainnavbar.module.css";
import Logo from "./Logo";

const Mainnavbar = () => {
  return (
    <div className={styles.mainnav}>
      <Logo />
      <SearchBar />
      <FeedbackButton />
    </div>
  );
};

export default Mainnavbar;
