import React from "react";
import styles from "./Footer.module.css";
import FooterAccordian from "./FooterAccordian/FooterAccordian";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.base}>
        <div className={styles.typo}>
          <h1>FAQs</h1>
        </div>
        <FooterAccordian />
      </div>
    </div>
  );
};

export default Footer;
