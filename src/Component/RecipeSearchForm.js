import React, { Component } from "react";
// import SearchByRecipe from "./SearchByRecipe";
import SearchByIngredients from "./SearchByIngredients";
import SearchByDiet from "./SearchByDiet";
import SearchByMinutes from "./SearchByMinutes";
import IngredientTagList from "./IngredientTagList";

class RecipeSearchForm extends Component {
  render() {
    return (
      <div>
        {/* <SearchByRecipe setQuery={this.props.setQuery} /> */}
        <SearchByIngredients addIngredient={this.props.addIngredient} />
        <SearchByDiet setDiet={this.props.setDiet} />
        <SearchByMinutes setMaxReadyTime={this.props.setMaxReadyTime} />
        <IngredientTagList
          ingredients={this.props.ingredients}
          removeIngredient={this.props.removeIngredient}
        />
      </div>
    );
  }
}

export default RecipeSearchForm;
