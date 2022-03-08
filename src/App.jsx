import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CoinPage from "./Pages/CoinPage/CoinPage";

import SocialSpeedDial from "./components/SocialSpeedDial/SocialSpeedDial";

const lightTheme = createTheme({
  palette: {},
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <div
          sx={{
            backroundColor: "rgb(249,249,249)",
            color: "rgb(4,4,4)",
            minHeight: "100vh"
          }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/coins/:id" element={<CoinPage />} />
            </Routes>
          </BrowserRouter>
          <SocialSpeedDial />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
