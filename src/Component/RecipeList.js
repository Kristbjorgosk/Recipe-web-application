import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import Grid from "@material-ui/core/Grid";

class RecipeList extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          {/* render a card for every recipe */}
          {this.props.recipes.map((recipe) => {
            return (
              <Grid key={recipe.id} item xs={12} sm={6} md={3}>
                <RecipeCard recipe={recipe} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default RecipeList;
