import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const SingleCoinContainer = styled("div")`
  width: 100%;
  padding: 2rem 1rem;
`

export const CryptoName = styled(Typography)`
  text-align: center;
  font-weight: 800;
  font-size: 4rem;
`

export const CoinInfos = styled(Typography)`
  text-align: justify;
  font-weight: 400;
`

export const Rank = styled(Typography)`
  font-weight: 800;
  font-size: 2rem;
  
  span {
    font-weight: 500;
    color: rgb(124,124,124);
  }
`