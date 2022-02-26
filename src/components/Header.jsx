import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#212121",
      },
      mode: "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AppBar color="transparent" position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                variant="h1"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "3rem",
                  padding: "1rem 0",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                Crypto Tracker 
              </Typography>
              <Select
                variant="outlined"
                sx={{
                  width: 100,
                  height: 50,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
