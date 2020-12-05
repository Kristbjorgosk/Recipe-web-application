import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import FrontPage from "./FrontPage";
import NavbarFooter from "./Component/Navbar";
import "./Style/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // sx is about the same size as mobile -this is mobile first approach
    <Container maxWidth="xs">
      <FrontPage />
      <NavbarFooter />
    </Container>
  );
}

export default App;
