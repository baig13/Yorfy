import React from "react";
import { Stack, Typography } from "@mui/material";
import theme from "../../Theme";
import Logotext from "../Logo";

const socialMedia = ["Fb", "lg", "Li", "Yt"];
const Footer = () => {
  const colors = theme.palette;
  return (
    <Stack gap={"2rem"}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Logotext text="YORFY" />
        <Stack direction={"row"} gap={"15px"}>
          {socialMedia.map((media) => {
            return (
              <Typography
                key={media}
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: colors.text.white,
                  textDecoration: "none",
                  borderRadius: "50%",
                  fontSize: "0.8rem",
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid white",
                }}
              >
                {media}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
      <hr style={{ border: `1px solid ${colors.primary.main}` }} />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        color={colors.text.white}
      >
        <Typography>&copy; 2023 Yorfy template. All Rights Reserved</Typography>
        <Typography>Made With Love by Groweb Studio</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
