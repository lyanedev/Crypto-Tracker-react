import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { Card, Grid, Box, Typography, Chip } from "@mui/material";

const Carousel = () => {
  const [trendingData, setTrendingData] = useState([]);
  const { currency } = CryptoState();

  const getTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrendingData(data);
  };

  useEffect(() => {
    getTrendingCoins();
  }, [currency]);

  console.log(trendingData); // TODO: REMOVE <-----------

  const items = trendingData.map((coin) => {
    return (
      <NavLink to={`/coins/${coin.id}`} key={coin.name}>
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
                <img src={coin?.image} alt={coin?.name} width="80%" />
              </Grid>

              <Grid xs={7} item container direction="column">
                <Grid item xs={12}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: 600, opacity: 0.7 }}
                  >
                    {coin.name}
                  </Typography>

                  <Grid item xs={12}>
                    <Chip label={coin.symbol} sx={{ fontWeight: 600 }} />
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
    );
  });

  const flickityOptions = {
    initialIndex: 0,
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        padding: 20,
      }}
    >
      {items[0]}
      {items[1]}
      {items[2]}
    </Box>
  );
};

export default Carousel;
