import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import RecipeList from "../Component/RecipeList";
import { makeStyles } from "@material-ui/core/styles";
// import FavoriteButton from "./FavoriteButton";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#D0D8D8",
    paddingBottom: 30,
  },
  headline: {
    backgroundColor: "#EAF2F2",
    color: "#161F22",
    fontSize: 49,
    fontWeight: 700,
    fontFamily: "quicksand",
    display: "flex",
    textAlign: "center",
  },
  waves: {
    backgroundColor: "#EAF2F2",
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 40,
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
    <div>
      <Typography className={classes.headline}>Favorite Recipes 🖤</Typography>
      {/* <FavoriteButton
            aria-label="add to favorites"
          /> */}
      <div className={classes.root}>
        <svg
          className={classes.waves}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#D0D8D8"
            d="M0,128L60,160C120,192,240,256,360,272C480,288,600,256,720,208C840,160,960,96,1080,96C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default FavouritesPage;
