import {BrowserRouter, Routes, Route} from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import CoinPage from "./Pages/CoinPage/CoinPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

import SocialSpeedDial from "./components/SocialSpeedDial/SocialSpeedDial";


function App() {
    return (<>
            <CssBaseline/>
            <div
                sx={{
                    backroundColor: "rgb(249,249,249)", color: "rgb(4,4,4)", minHeight: "100vh",
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
