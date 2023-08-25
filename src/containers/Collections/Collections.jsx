import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../Theme";
import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";
import collection3 from "../../assets/collection3.png";
import Logotext from "../../components/Logo";

const Collection = () => {
  const colors = theme.palette;
  return (
    <Stack>
      <Stack gap="1rem" padding={{ xs: "0rem 2rem", md: "0rem 16rem" }}>
        <Typography
          color={colors.primary.light}
          fontWeight={700}
          textAlign="center"
        >
          Collection
        </Typography>
        <Typography
          fontSize={{ xs: "2rem", md: "3rem" }}
          fontWeight={700}
          color={colors.text.white}
          textAlign={"center"}
        >
          Yorfy NFT Collections
        </Typography>
        <Typography color={colors.text.disabled} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Stack
        position={"relative"}
        zIndex={2}
        gap={"1rem"}
        direction="row"
        margin="2rem auto"
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            width: { xs: "20px", sm: "200px", md: "250px" },
            height: { xs: "20px", sm: "200px", md: "250px" },
            opacity: 0.5,
            borderRadius: "400px",
            position: "absolute",
            top: "6rem",
            left: "-5rem",
            zIndex: 0,
          }}
        ></Box>
        <Box
          sx={{
            width: { xs: "20px", sm: "200px", md: "250px" },
            height: { xs: "20px", sm: "200px", md: "250px" },
            opacity: 1,
            borderRadius: "400px",
            position: "absolute",
            top: { xs: "3rem", md: "8rem" },
            right: { xs: "1rem", md: "0rem" },
            zIndex: 0,
          }}
        ></Box>
        <Stack gap={"1rem"}>
          <Stack
            sx={{
              border: `2px solid ${colors.primary.main}`,
              padding: "2rem",
              borderRadius: "5px",
            }}
            gap={"1rem"}
            width={{ xs: "15rem", md: "23rem" }}
          >
            <img
              src={collection1}
              alt="artImage"
              width="100%"
              style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
            />
            <Logotext text={"YorNoose#32"} notNone={false} />
          </Stack>
        </Stack>

        <Stack gap={"1rem"}>
          <Stack
            sx={{
              border: `2px solid ${colors.primary.main}`,
              padding: "2rem",
              borderRadius: "5px",
            }}
            gap={"1rem"}
            width={{ xs: "15rem", md: "23rem" }}
          >
            <img
              src={collection2}
              alt="artImage"
              width="100%"
              style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
            />
            <Logotext text={"YorNoose#32"} notNone={false} />
          </Stack>
        </Stack>

        <Stack gap={"1rem"}>
          <Stack
            sx={{
              border: `2px solid ${colors.primary.main}`,
              padding: "2rem",
              borderRadius: "5px",
            }}
            gap={"1rem"}
            width={{ xs: "15rem", md: "23rem" }}
          >
            <img
              src={collection3}
              alt="artImage"
              width="100%"
              style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
            />
            <Logotext text={"YorNoose#32"} notNone={false} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Collection;
