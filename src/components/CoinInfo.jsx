import {useEffect, useState} from "react";

import {HistoricalChart} from "../config/api";

import {CryptoState} from "../CryptoContext";
import {CircularProgress} from "@mui/material";
import axios from "axios";

import {Line} from "react-chartjs-2"

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState()
  const [days, setDays] = useState(1)

  const {currency} = CryptoState()

  const fetchHistoricData = async () => {
    try {
      const {data} = await axios.get(HistoricalChart(coin.id, days, currency))
      setHistoricData(data.prices)
    } catch (err) {
      console.error(err)
    }
  }

  console.log(coin.id)

  useEffect(() => {
    fetchHistoricData()
  }, [currency, days]);


  return (<>
    {!historicData ? (<CircularProgress size={100} thickness={1}/>) : (
        <h1>{historicData}</h1>
    )}
  </>);
};

export default CoinInfo;
