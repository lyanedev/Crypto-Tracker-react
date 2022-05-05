import {NavLink} from "react-router-dom";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import {CryptoState} from "../../CryptoContext";

import useAxios from "../../hooks/useAxios";

import {TrendingCoins} from "../../config/api";
import {
  Card,
  Grid,
  Box,
  Typography,
  Chip,
  CircularProgress,
} from "@mui/material";

const Carousel = () => {
  const {currency} = CryptoState();

  const {data, isLoading, isError} = useAxios(TrendingCoins(currency));

  const options = {
    rewind: true,
    width: "100%",
    perPage: 4,
    mediaQuery: "max",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      640: {
        perPage: 1,
      },
    },
    pagination: false,
    padding: {left: 50},
    slap: true,
  }

  const items = data.map((coin) => {
    return (
        <SplideSlide key={coin.id}>
          <NavLink to={`/coins/${coin.id}`}>
            <Card
                sx={{
                  width: 200,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  webkitBackdropFilter: "blur(16px) saturate(180%)",
                  border: "1px solid rgba(209, 213, 219, 0.3)",
                  borderRadius: 6,
                  padding: 2,
                }}
            >
              <Grid container direction="column" justifyContent="space-between">
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                  <Grid xs={5} item>
                    <img src={coin?.image} alt={coin?.name} width="80%"/>
                  </Grid>

                  <Grid xs={7} item container direction="column">
                    <Grid item xs={12}>
                      <Typography
                          variant="p"
                          sx={{fontWeight: 600, opacity: 0.7}}
                      >
                        {coin.name}
                      </Typography>

                      <Grid item xs={12}>
                        <Chip label={coin.symbol} sx={{fontWeight: 600}}/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                      variant="p"
                      sx={{
                        color:
                            coin.price_change_percentage_24h > 0
                                ? "#60A561"
                                : "#BF4342",
                        fontWeight: 600,
                        fontSize: 20,
                      }}
                  >
                    {coin.price_change_percentage_24h > 0 ? "+" : ""}
                    {coin.price_change_percentage_24h.toFixed(2)} %
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </NavLink>
        </SplideSlide>
    );
  });

  return (
      <>
        {isLoading && <CircularProgress size={100} thickness={1}/>}
        {isError && <p>{isError}</p>}
        {data && <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              padding: 20,
            }}
        >
          <Splide options={options}>
            {data && items}
          </Splide>

        </Box>}

      </>
  );
};

export default Carousel;
