import { Box, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

const Caroussel = () => {
  const [trending, setTrending] = useState([]);

  const { currency, symbol } = CryptoState();

  const getTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    getTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <NavLink to={`/coins/${coin.id}`}>
        <Card
          sx={{
            width: 160,
            height: 160,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(14px)",
            padding: 3,
            color: "#fafafa",
            borderRadius: 5,
            margin: 1,
          }}
        >
          <img
            src={coin?.image}
            alt={coin.name}
            height="60"
            style={{
              marginBottom: 10,
            }}
          />
          <span>{coin?.name}</span>
          <span>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
          <span>
              {symbol}{coin?.current_price.toFixed(1)}
          </span>
        </Card>
      </NavLink>
    );
  });

  const resposiveCarroussel = {
    0: {
      items: 2,
    },
    512: {
      items: 5,
    },
  };

  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={50}
        animationDuration={1500}
        disableDotsControls
        responsive={resposiveCarroussel}
        autoPlay
        disableButtonsControls
        items={items}
      />
    </Box>
  );
};

export default Caroussel;
