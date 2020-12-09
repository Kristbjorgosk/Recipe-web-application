import React from "react";

import styles from "./mystyle.module.css";
import { Switch, Route } from "react-router-dom";

import FrontPage from "./Pages/FrontPage";
import TipsPage from "./Pages/TipsPage";
import FavouritesPage from "./Pages/FavouritesPage";
import RecipesFilterPage from "./Pages/RecipesFilterPage";

import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import "./Style/main.css";
import RecipeDetailPage from "./Pages/RecipeDetailPage";

function App() {
  return (
    <div className={styles.body}>
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
        <Route path="/:id">
          <RecipeDetailPage />
        </Route>
      </Switch>
      <Navbar />
    </div>
  );
}

export default App;
