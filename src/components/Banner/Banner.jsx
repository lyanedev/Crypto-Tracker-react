import {Box, Container, Typography} from "@mui/material";

import "./Banner.styled";
import {Carousel} from "../index";


const Banner = () => {
  return (
      <Box
          sx={{
            backgroundColor: "#4158D0",
            backgroundImage:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
          }}
      >
        <Container
            maxWidth="lg"
            sx={{
              width: "100%",
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 5,
            }}
        >
          <Box>
            <Typography
                variant="h1"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  color: "rgb(249,249,249)",
                  fontSize: 50,
                  textAlign: "center",
                  marginBottom: 2,
                }}
            >
              Crypto Tracker
            </Typography>

            <Typography
                variant="p"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "rgb(249,249,249, .7)",
                  fontSize: 15,
                  textAlign: "justify",
                }}
            >
              L'endroit pour être toujours au courant du marché des crypto. <br/>
              Fait avec 🚀 par Lyane Lamara.
            </Typography>
          </Box>

          <Carousel/>

        </Container>
      </Box>
  );
};

export default Banner;
