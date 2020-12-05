import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import FrontPage from "./FrontPage";
import RecipesPage from "./Component/RecipesPage";
import NavbarFooter from "./Component/Navbar";
import "./Style/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* sx is about the same size as mobile -this is mobile first approach */}
        <Container maxWidth="xs">
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/recipes" component={RecipesPage} />
          </Switch>
          <NavbarFooter />
        </Container>
      </Router>
    </>
  );
}

export default App;
