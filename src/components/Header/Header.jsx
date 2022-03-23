import { useNavigate } from "react-router-dom";

import { styled } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Container,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

import "./Header.styled";
import { CryptoState } from "../../CryptoContext";

// TODO: ---------- MOVE TO STYLED FILE--------------------
const StyledHeaderTitle = styled(Typography)({
  fontFamily:"Poppins",
  fontWeight: "800",
  fontSize: 50,
  marginTop: 20,
  marginBottom: 20,
  flex: 1,
  cursor: "pointer",
  span: {
    color: "rgb(4,4,4, .5)",
  },
});

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="lg">
          <Toolbar>
            <StyledHeaderTitle variant="h3" onClick={() => navigate("/")}>
              <span>.</span>cryptoApp<span>( )</span>
            </StyledHeaderTitle>

            <Select
              labelId="currency"
              variant="outlined"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
              sx={{
                width: 100,
                height: 50,
              }}
            >
              <MenuItem value={"EUR"}>€ EUR</MenuItem>
              <MenuItem value={"USD"}>$ USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
