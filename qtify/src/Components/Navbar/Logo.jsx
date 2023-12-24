import React from "react";
import { ReactComponent as HeadphoneIcon } from "../../assets/headphone.svg";
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <HeadphoneIcon />
    </div>
  );
};

export default Logo;
