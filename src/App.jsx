import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import "./App.css";

const lightTheme = createTheme({
  palette: {},
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <div className="App">App</div>
      </ThemeProvider>
    </>
  );
}

export default App;
