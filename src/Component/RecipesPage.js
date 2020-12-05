import React, { Component } from "react";
import Header from "./Header";
import RecipeSearchForm from "./RecipeSearchForm"
import { RecipeList } from "./RecipeList";

class RecipesPage extends Component {
  render() {
    return (
      <>
        <Header />
        <RecipeSearchForm />
        <RecipeList />
      </>
    );
  }
}

export default RecipesPage;
