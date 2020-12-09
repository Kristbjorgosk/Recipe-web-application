import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import RecipeList from "../Component/RecipeList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EAF2F2",
    height: "80vh",
  },
}));

function FavouritesPage() {
  const classes = useStyles();
  const [recipes, setRecipes] = React.useState([]);

  useEffect(() => {
    // get favorites from local storage
    let favorites = localStorage.getItem("favorites") || "[]";
    favorites = JSON.parse(favorites);

    // set favorite recipes to state
    setRecipes(favorites);
  }, []);

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h1">
        Once you have marked a recipe with a 🖤 it will display it
      </Typography>

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default FavouritesPage;
