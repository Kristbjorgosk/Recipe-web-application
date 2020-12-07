import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import Grid from "@material-ui/core/Grid";

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
    console.log(this.props.maxReadyTime);
    return (
      <div>
        <Grid container spacing={2}>
          {this.props.recipes.map((recipe) => {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <RecipeCard
                  title={recipe.title}
                  image={recipe.image}
                  maxReadyTime={this.props.maxReadyTime}
                  id={recipe.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }

  // connect the updateRecipes function to the RecipeList component
  componentDidMount() {
    updateRecipes = updateRecipes.bind(this);
  }
}

export { RecipeList, updateRecipes };
