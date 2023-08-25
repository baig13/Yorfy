import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import theme from "../../Theme.js";

function Sale() {
  const colors = theme.palette;
  return (
    <Stack
    sx={{
      backgroundColor: "#AA00FF",
      padding: { xs: "10px 10px", md: "20px 70px" },
    }}
    direction={"row"}
    justifyContent={{ xs: "space-between", md: "space-between" }}
  >
    <Typography
      fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
      fontWeight={700}
      color={colors.text.white}
    >
      Discount Sale
    </Typography>
    <Typography
      fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
      fontWeight={700}
      color={"transparent"}
      sx={{
        color: "transparent",
        WebkitTextStroke: "1px white",
        WebkitTextFillColor: "transparent",
      }}
    >
      Up to 40%
    </Typography>
    <Typography
      fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
      fontWeight={700}
      color={colors.text.white}
    >
      Discount Sale
    </Typography>
    <Typography
      fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
      fontWeight={700}
      color={colors.text.white}
      sx={{
        color: "transparent",
        WebkitTextStroke: "1px white",
        WebkitTextFillColor: "transparent",
      }}
    >
      Up to 40%
    </Typography>
  </Stack>
  );
}

export default Sale;
