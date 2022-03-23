import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

import "./CoinPage.styled";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);

  const getCoinData = async () => {
    const { data } = await axios(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <>
      Coin page of {coin.name}
    </>
  );
};

export default CoinPage;
