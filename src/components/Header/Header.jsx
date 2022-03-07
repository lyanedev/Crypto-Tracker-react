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

// TODO: ---------- MOVE TO STYLED FILE--------------------
const StyledHeaderTitle = styled(Typography)({
  fontWeight: "800",
  fontSize: 50,
  marginTop: 10,
  marginBottom: 10,
  flex: 1,
  cursor: "pointer",
  span: {
    color: "rgb(4,4,4, .5)",
  },
});

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="lg">
          <Toolbar>
            <StyledHeaderTitle variant="h3" onClick={() => navigate("/")}>
              <span>.</span>cryptoApp<span>( )</span>
            </StyledHeaderTitle>

            <Select
              labelId="currency"
              variant="outlined"
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
