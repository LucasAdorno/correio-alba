import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";

import { Container } from "./styles/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Router>
          <Routes />
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
