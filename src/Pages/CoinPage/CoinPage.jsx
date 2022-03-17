import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import "./CoinPage.styled";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);

  const { currency, symbol } = CryptoState;

  const getCoinData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <>
      
    </>
  );
};

export default CoinPage;
