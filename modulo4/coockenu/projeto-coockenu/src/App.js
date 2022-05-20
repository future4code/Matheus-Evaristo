import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import theme from "./constants/theme";
import Rotas from "./routes/Rotas";

const App = () => {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText ] = useState(token ? 'Logout' : 'Login')

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Rotas setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
