import React from "react";
import Button from "@mui/material/Button";

const Btn = ({ text, bg, border = "" }) => {
  return (
    <Button
      sx={{
        background: bg,
        borderRadius: "10px",
        color: "white",
        textTransform: "initial",
        padding: {
          xs: "0.5rem 1rem",
          sm: "0.7rem 3rem",
          md: "0.7rem 1.9rem",
        },
        border: { border },
        fontSize: { xs: "12px", md: "initial" },
      }}
    >
      {text}
    </Button>
  );
};

export default Btn;
