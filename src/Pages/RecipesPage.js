import React, { Component } from "react";
import Header from "../Component/Header";
import RecipeSearchForm from "../Component/RecipeSearchForm";
import { RecipeList } from "../Component/RecipeList";

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
