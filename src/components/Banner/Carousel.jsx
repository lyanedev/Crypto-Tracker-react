import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

const Flickity = "react-flickity-component";

import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import { Card, Grid, Box, Typography } from "@mui/material";

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
            height: 220,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(16px) saturate(180%)",
            webkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            borderRadius: 6,
            padding: 2,
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid xs={6} item>
                <img src={coin?.image} alt={coin?.name} width="80%" />
              </Grid>
              <Grid xs={6} item>
                <Typography variant="p" sx={{ fontWeight: 600 }}>
                  {coin.name}
                </Typography>
              </Grid>
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
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      {items[0]}
      {items[1]}
      {items[2]}
    </Box>
  );
};

export default Carousel;
