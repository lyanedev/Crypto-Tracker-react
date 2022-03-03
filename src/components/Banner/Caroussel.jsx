import { Box, Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

// add commas to crypto prices
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Caroussel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const getTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (err) {
      console.log(err.message);
    }
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
          <span
            style={{
              marginBottom: 6,
            }}
          >
            {coin?.name}
          </span>
          <span
            style={{
              color: profit > 0 ? "#8bc34a" : "#ff5722",
              fontWeight: 600,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {numberWithCommas(coin?.current_price.toFixed(1))}
            {symbol}
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
      {items}
    </Box>
  );
};

export default Caroussel;
