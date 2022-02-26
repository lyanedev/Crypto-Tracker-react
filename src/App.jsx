import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "#fafafa",
            color: "#212121",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
