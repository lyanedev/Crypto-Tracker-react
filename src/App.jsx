import {BrowserRouter, Routes, Route} from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";


import {Header, SocialSpeedDial} from "./components";
import {CoinPage, HomePage, NotFoundPage} from "./Pages";

function App() {
  return (<>
    <CssBaseline/>
    <div
        style={{
          backgroundColor: "rgb(249,249,249)", color: "rgb(4,4,4)", minHeight: "100vh",
        }}
    >
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/coins/:id" element={<CoinPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      <SocialSpeedDial/>
    </div>
  </>);
}

export default App;
