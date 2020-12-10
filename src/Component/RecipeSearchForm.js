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
        <IngredientTagList
          ingredients={this.props.ingredients}
          removeIngredient={this.props.removeIngredient}
          closable={true}
        />
        <SearchByDiet setDiet={this.props.setDiet} diet={this.props.diet} />
        <SearchByMinutes setMaxReadyTime={this.props.setMaxReadyTime} maxReadyTime={this.props.maxReadyTime} />
      </div>
    );
  }
}

export default RecipeSearchForm;
