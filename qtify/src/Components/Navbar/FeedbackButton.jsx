import React from "react";
import Button from "@mui/material/Button";
import styles from "./FeedbackButton.module.css"

const FeedbackButton = () => {
  return (
    <div className={styles.font}>
      {" "}
      <Button
        variant="contained"
        sx={{
          fontFamily: "Poppins",
          height: "47px",
          width: "170px",
          backgroundColor: "#121212",
          color: "#34C94B",
          fontWeight: "bold",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#121212", 
          },
        }}
      >
        Give Feedback
      </Button>
    </div>
  );
};

export default FeedbackButton;
