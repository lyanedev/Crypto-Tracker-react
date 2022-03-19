import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { CryptoState } from "../../CryptoContext";
import useAxios from "../../hooks/useAxios";

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
  Pagination,
} from "@mui/material";
import PageviewTwoToneIcon from "@mui/icons-material/PageviewTwoTone";

const CoinsTable = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isResults, setIsResults] = useState(false);

  const navigate = useNavigate();

  const { currency } = CryptoState();

  const { data: coins, isLoading, isError } = useAxios(CoinList(currency));

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
            padding: 2,
            marginTop: 5,
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
            type={"search"} // TODO: REVIEW <--------------------- here
            error={isResults}
            helperText={!isResults ? "" : "Pas de résultats 😥"}
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
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              handleSearch().length === 0
                ? setIsResults(true)
                : setIsResults(false);
            }}
          />
          <TableContainer
            sx={{
              marginTop: 3,
            }}
          >
            {isLoading && <LinearProgress />}
            {isError && <p>{isError}</p>}
            {coins && (
              <Table>
                <TableHead
                  sx={{
                    backgroundImage:
                      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  }}
                >
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
                          fontSize: 16,
                          fontFamily: "Poppins",
                          color: "rgb(249, 249, 249)",
                        }}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      const profit = row.price_change_percentage_24h > 0;

                      return (
                        <TableRow
                          key={row.name}
                          onClick={() => navigate(`/coins/${row.id}`)}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          <TableCell
                            align="left"
                            component="th"
                            scope="row"
                            sx={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <img src={row.image} alt={row.name} width={50} />
                              <Typography
                                variant="p"
                                sx={{
                                  fontWeight: 600,
                                  fontSize: 20,
                                  marginTop: 1,
                                }}
                              >
                                {row.name}
                              </Typography>
                              <Typography
                                variant="p"
                                sx={{ fontWeight: 600, opacity: 0.5 }}
                              >
                                {row.symbol}
                              </Typography>
                            </Box>
                          </TableCell>

                          <TableCell align="left">
                            <Typography
                              variant="p"
                              sx={{ fontWeight: 600, fontSize: 20 }}
                            >
                              💰 {row.current_price}{" "}
                              {currency === "EUR" ? "€" : "$"}
                            </Typography>
                          </TableCell>

                          <TableCell
                            align="left"
                            sx={{
                              color: profit > 0 ? "#60A561" : "#BF4342",
                              fontWeight: 600,
                              fontSize: 20,
                            }}
                          >
                            {profit > 0 ? "😊 +" : "😭 "}
                            {row.price_change_percentage_24h.toFixed(2)} %
                          </TableCell>

                          <TableCell
                            align="left"
                            sx={{
                              fontWeight: 600,
                              fontSize: 20,
                            }}
                          >
                            🏛 {row.market_cap.toString().slice(0, -6)}{" "}
                            <span style={{ opacity: 0.5 }}>
                              Millions {currency === "EUR" ? "€" : "$"}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
          <Pagination
            count={+(handleSearch()?.length / 10).toFixed(0)}
            onChange={(e, value) => {
              setPage(value);
              window.scroll(0, 100);
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 2,
              width: "100%",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default CoinsTable;
