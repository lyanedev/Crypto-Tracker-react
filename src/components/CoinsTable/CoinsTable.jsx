import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";

import { CoinList } from "../../config/api";
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import PageviewTwoToneIcon from "@mui/icons-material/PageviewTwoTone";

const CoinsTable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { currency } = CryptoState();

  const getCoinsData = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setcoins(data);
    setloading(false);
  };

  useEffect(() => {
    getCoinsData();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "left",
            padding: 3,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins",
              fontSize: 40,
              fontWeight: 600,
              flex: 1,
            }}
          >
            Valeurs actuelles des Crypto
          </Typography>
          <TextField
            variant="outlined"
            label="Rechercher"
            placeholder="Bitcoin, Ethereum, ..."
            value={search}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PageviewTwoToneIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearch(e.target.value)}
          />

          <TableContainer>
            {loading ? (
              <LinearProgress />
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    {[
                      "Monnaie",
                      "Prix",
                      "Changement en 24h",
                      "Capitalisation boursière",
                    ].map((head) => (
                      <TableCell
                        key={head}
                        sx={{
                          fontWeight: 600,
                          fontFamily: "Poppins",
                        }}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch().map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        key={row.name}
                        onClick={() => navigate(`/coins/${row.id}`)}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            display: "flex",
                            gap: 15
                          }}
                        >
                          <img src={row.image} alt={row.name} width={50} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default CoinsTable;
