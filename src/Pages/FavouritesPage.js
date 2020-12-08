import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { RecipeList } from "../Component/RecipeList";

class FavouritesPage extends Component {
  render() {
    return (
      <div>
        <Typography gutterBottom variant="h3" component="h1">
          Helloooo þetta er Favourite síðan !! !!
        </Typography>
        <RecipeList recipes={[]} />
      </div>
    );
  }
}

export default FavouritesPage;
