import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

// function that can be called by sibling components to update the
// RecipeList component's state
function updateRecipes(recipes) {
  this.setState({ recipes });
}

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe) => {
          return (
            <RecipeCard title={recipe.title} image={recipe.image} />
          );
        })}
      </div>
    );
  }

  // connect the updateRecipes function to the RecipeList component
  componentDidMount() {
    updateRecipes = updateRecipes.bind(this);
  }
}

export {
  RecipeList,
  updateRecipes,
};
