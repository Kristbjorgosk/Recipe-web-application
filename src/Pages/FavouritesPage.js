import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import RecipeList from "../Component/RecipeList";

function FavouritesPage() {
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    // get favorites from local storage
    let favorites = localStorage.getItem("favorites") || "[]";
    favorites = JSON.parse(favorites);

    // set favorite recipes to state
    setRecipes(favorites);
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h3" component="h1">
        Helloooo þetta er Favourite síðan !! !!
      </Typography>

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default FavouritesPage;
