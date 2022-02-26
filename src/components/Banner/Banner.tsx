import { Box, Container, Typography } from "@mui/material";
import Caroussel from "./Caroussel";

const Banner = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #4158D0, #C850C0, #FFCC70);",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "40%",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              color: "#fafafa",
              fontSize: 50,
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "500",
              color: "#e0e0e0",
            }}
          >
            The place where you can get info of your favorite crypto currency.
          </Typography>
        </Box>
        <Caroussel />
      </Container>
    </Box>
  );
};

export default Banner;
