import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E50FF",
      dark: "#081956",
    },
    secondary: {
      dark: "#0E0E0E",
      main: "#051139",
    },
    base: {
      black: "#000000",
      white: "#FFFFFF",
    },
    background: {
      default: "#AA00FF",
    },
    accent: {
      main: "#5699FF",
    },
    text: {
      title: "#333333",
      body: "#666666",
      inField: "#B8B8B8",
      disabled: "#EBEBEB",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: 56,
      fontWeight: 700,
    },
    h3: {
      fontSize: 40,
      fontWeight: 700,
    },
    h4: {
      fontSize: 32,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
});

export default theme;
