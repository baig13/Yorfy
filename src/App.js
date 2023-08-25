import { Footer, Navbar, Partners, Sale } from "./components";
import {
  Collections,
  Community,
  Hero,
  Highlights,
  Newsletter,
} from "./containers";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./App.css";

function App() {
  const colors = theme.palette;
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"xl"}
        sx={{
          borderRadius: "0px",
          background: colors.secondary.main,
          padding: "0 !important",
        }}
      >
        <Navbar />
        <Hero />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Sale />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Highlights />
        </Box>
        <Collections />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Community />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Sale />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <Newsletter />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <Footer />
        </Box>
        {/* Footer ends */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
