import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Typography from "@mui/material/Typography";

import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

import "./CoinPage.styled";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);

  const { currency, symbol } = CryptoState;

  const getCoinData = async () => {
    const { data } = await axios(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <>
      
    </>
  );
};

export default CoinPage;
