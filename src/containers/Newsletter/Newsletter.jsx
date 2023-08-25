import React from "react";
import { Stack, Typography, TextField } from "@mui/material";
import theme from "../../Theme";
import Btn from "../Hero/Btn";

const Newsletter = () => {
  const colors = theme.palette;
  return (
    <Stack
      padding={{ xs: "1rem 2rem", md: "4rem 12rem" }}
      sx={{ background: colors.primary.dark, borderRadius: "16px" }}
    >
      <Stack
        color={colors.text.white}
        alignItems={"center"}
        gap={"2rem"}
        justifyContent={"center"}
      >
        <Typography color={colors.primary.light} fontWeight={700} textAlign="center">
      Newsletter
    </Typography>
        <Typography
          fontSize={{ xs: "1.4rem", md: "40px" }}
          fontWeight={700}
          textAlign={"center"}
        >
          You Do Not Want to Miss Out on this!
        </Typography>
        <Typography color={colors.text.disabled} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        gap={{ xs: "1rem", sm: "2rem" }}
        sx={{ margin: "2rem" }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            input: {
              color: colors.text.white,
              "&::placeholder": {
                color: colors.text.white,
                opacity: 1,
              },
            },
            outlineColor: colors.text.white,
            borderRadius: "6px",
            outline: "1px solid white",
            flexGrow: 1,
          }}
          placeholder="Your Email"
        />
        <Btn text="Submit" bg={colors.primary.main} />
      </Stack>
    </Stack>
  );
};

export default Newsletter;