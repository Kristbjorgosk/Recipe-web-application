import React, { Component } from "react";
import Header from "../Component/Header";
import RecipeSearchForm from "../Component/RecipeSearchForm";
import { RecipeList } from "../Component/RecipeList";

class RecipesFilterPage extends Component {
  render() {
    return (
      <>
        <RecipeSearchForm />
        <RecipeList />
      </>
    );
  }
}

export default RecipesFilterPage;
