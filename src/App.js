import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core";
import "./Style/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import RandomFactGenerator from "./Component/RandomFactGenerator";

import FrontPage from "./FrontPage";
import TipsPage from "./TipsPage";
import RecipesPage from "./Component/RecipesPage";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <RandomFactGenerator />

          <Header />
          <Switch>
            <Route path="/frontpage" component={FrontPage} />
            <Route path="/tipspage" component={TipsPage} />
            <Route path="/RecipesPage" component={RecipesPage} />
          </Switch>
        </Router>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
