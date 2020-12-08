import React from "react";
import { Switch, Route } from "react-router-dom";

import FrontPage from "./Pages/FrontPage";
import TipsPage from "./Pages/TipsPage";
import FavouritesPage from "./Pages/FavouritesPage";
import RecipesFilterPage from "./Pages/RecipesFilterPage";

import Header from "./Component/Header";
import Navbar from "./Component/Navbar";

import "./Style/main.css";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/Tipspage">
          <TipsPage />
        </Route>
        <Route path="/FavouritesPage">
          <FavouritesPage />
        </Route>
        <Route path="/RecipesFilterPage">
          <RecipesFilterPage />
        </Route>
      </Switch>

      <Navbar />
    </>
  );
}

export default App;
