import {useEffect, useState} from "react";

import {HistoricalChart} from "../config/api";

import {CryptoState} from "../CryptoContext";
import {Box, CircularProgress} from "@mui/material";
import axios from "axios";

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState()
  const [days, setDays] = useState(1)

  const {currency} = CryptoState()

  console.log("coin", coin.id)

  const fetchHistoricData = async () => {
    try {
      const {data} = await axios.get(HistoricalChart(coin.id, days, currency))
      setHistoricData(data.prices)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchHistoricData()
  }, [currency, days]);


  return (<>
    {!historicData ? (<CircularProgress size={100} thickness={1}/>) : (
        <Box sx={{width: "100%"}}>
          <Line
              data={{
                labels: historicData.map(coin => {
                  let date = new Date(coin[0])
                  let time = date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`

                  return days === 1 ? time : date.toLocaleDateString()
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Prix des ${days} derniers jours en ${currency}`,
                    borderColor: "#ab52c3"
                  }
                ]
              }}/>
        </Box>
    )}
  </>);
};

export default CoinInfo;
