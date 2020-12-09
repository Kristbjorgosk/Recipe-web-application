import React, { useEffect } from "react";
import RecipeSearchForm from "../Component/RecipeSearchForm";
import { RecipeList } from "../Component/RecipeList";
import { apiKey } from "../Api";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#D0D8D8",
    height: "100%",
    color: "#161F22",
    position: "relative",
    paddingLeft: 5,
  },
  headerHeadline: {
    fontSize: 49,
    paddingLeft: 15,
  },
  headlineSection: {
    backgroundColor: "#EAF2F2",
  },
  waves: {
    backgroundColor: "#EAF2F2",
    display: "flex",
    alignItems: "flexEnd",
  },
}));

function RecipesFilterPage() {
  const [query, setQuery] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [diet, setDiet] = React.useState("");
  const [maxReadyTime, setMaxReadyTime] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

  const classes = useStyles();

  const getApiRecipes = () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    if (query) {
      url += `&query=${query}`;
    }

    if (ingredients.length > 0) {
      const ingredients = ingredients.join(",");
      url += `&includeIngredients=${ingredients}`;
    }

    if (diet) {
      url += `&diet=${diet}`;
    }

    if (maxReadyTime) {
      url += `&maxReadyTime=${maxReadyTime}`;
    }

    console.log(url);

    // get recipes from the API that use the specified ingredients
    return fetch(url);
  };

  useEffect(function () {
    const params = new URLSearchParams(window.location.search);
    const currentQuery = params.get("query") || "";

    let ingredients = params.get("ingredients") || "";
    ingredients = ingredients.split(",");
    ingredients = ingredients.filter((ingredient) => ingredient);
    const diet = params.get("diet") || "";
    console.log(diet);
    const maxReadyTime = params.get("maxReadyTime") || "";

    setQuery(currentQuery);
    setIngredients(ingredients);
    setDiet(diet);
    setMaxReadyTime(maxReadyTime);
  }, []);

  useEffect(
    function () {
      getApiRecipes()
        // convert the API response to an object
        .then((response) => response.json())
        .then((data) => {
          // update the recipe list with the API data
          console.log("Got response from server");
          console.log(data);
          setRecipes(data.results);
        })
        .catch((err) => {
          console.log("Error!");
          console.log(err);
        });
    },
    [query, ingredients, diet, maxReadyTime]
  );

  return (
    <div className={classes.headlineSection}>
      <Typography variant="h6" component="p" className={classes.headerHeadline}>
        Recipes
      </Typography>

      <div className={classes.root}></div>

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

      <RecipeSearchForm
        setQuery={setQuery}
        setIngredients={setIngredients}
        setDiet={setDiet}
        setMaxReadyTime={setMaxReadyTime}
        ingredients={ingredients}
      />
      <RecipeList recipes={recipes} maxReadyTime={maxReadyTime} />
    </div>
  );
}

export default RecipesFilterPage;
