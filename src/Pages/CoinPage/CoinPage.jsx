import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";

import {SingleCoin} from "../../config/api";
import {CryptoState} from "../../CryptoContext";

import "./CoinPage.styled";
import {Box, Container, Grid} from "@mui/material";
import {CoinInfos, CryptoName, Rank, SingleCoinContainer} from "./CoinPage.styled";
import {CoinInfo} from "../../components";



const CoinPage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState([]);

  const {currency} = CryptoState()

  const getCoinData = async () => {
    const {data} = await axios(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    getCoinData();
  }, [currency]);

  return (<>
    <Container maxWidth="lg">
      <SingleCoinContainer>
        <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap={2}
        >

          <Grid item container
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap={2}
          >
            <Grid item>
              <img src={coin?.image?.large} alt={`${coin?.name}' logo`} height="100"/>
            </Grid>
            <Grid item>
              <CryptoName>{coin?.name}</CryptoName>
            </Grid>
          </Grid>

          <Grid item>
            <CoinInfos variant="p">{coin?.description?.en?.split(". ")[0]}.</CoinInfos>
          </Grid>

          <Grid item container justifyContent="space-around" alignItems="center">
            <Grid item>
              <Rank variant="p">🏅 Rank: <span>{coin?.coingecko_rank}e</span></Rank>
            </Grid>
            <Grid item>
              <Rank variant="p">💰
                Prix: <span>{coin?.market_data?.current_price[currency.toLowerCase()]}{currency === "EUR" ? "€" : "$"}</span>
              </Rank>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <CoinInfo coin={coin}/>
        </Box>
      </SingleCoinContainer>
    </Container>
  </>);
};

export default CoinPage;
