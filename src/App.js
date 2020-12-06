import React from "react";
import Container from "@material-ui/core/Container";
import "./Style/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import FrontPage from "./FrontPage";
import TipsPage from "./TipsPage";
import RecipesPage from "./Component/RecipesPage";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Header />

      <Navbar />
    </>
  );
}

export default App;
