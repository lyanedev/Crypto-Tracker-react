import { useEffect, useState } from "react";
import axios from "axios";

import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";

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

  console.log(trendingData);

  return <div>Carousel</div>;
};

export default Carousel;
