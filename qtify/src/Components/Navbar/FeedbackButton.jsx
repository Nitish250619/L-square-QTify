import React from "react";
import Button from "@mui/material/Button";

const FeedbackButton = () => {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        sx={{
          fontFamily: "poppins, sans-serif",
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
