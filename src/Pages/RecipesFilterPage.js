import React, { useEffect } from "react";
// import RecipeSearchForm from "../Component/RecipeSearchForm";
import RecipeList from "../Component/RecipeList";
import { apiKey } from "../Api";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import RecipeFilterOverlay from "../Component/RecipeFilterOverlay";
import SearchByRecipe from "../Component/SearchByRecipe";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#D0D8D8",
    height: "100%",
    paddingTop: 40,
  },
  headerHeadline: {
    fontSize: 49,
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
  const [offset, setOffset] = React.useState("");
  const [number, setnumber] = React.useState("");

  // adds ingredient to ingredient state array
  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  // removes ingredient from ingredient state array
  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  // effect that should only run when component is mounted
  useEffect(() => {
    // get query string parameters from URL
    const params = new URLSearchParams(window.location.search);

    // get query, diet and maxReadyTime from query string parameters
    const query = params.get("query") || "";
    const diet = params.get("diet") || "";
    const maxReadyTime = params.get("maxReadyTime") || "";
    let ingredients = params.get("ingredients") || "";
    const offset = params.get("offset") || "";
    const number = params.get("number") || "";

    // split ingredients on commas to an array
    ingredients = ingredients.split(",");

    // remove empty ingredients from array
    ingredients = ingredients.filter((ingredient) => ingredient);

    // set component state
    setQuery(query);
    setIngredients(ingredients);
    setDiet(diet);
    setMaxReadyTime(maxReadyTime);
    setOffset(offset);
    setnumber(number);
  }, []);

  const classes = useStyles();

  // effect that should run every time the component's state is updated
  useEffect(
    () => {
      let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true`;

      // append query to URL
      if (query) {
        url += `&query=${query}`;
      }

      // append ingredients to URL with commas between them
      if (ingredients.length > 0) {
        const ingredientStr = ingredients.join(",");
        url += `&includeIngredients=${ingredientStr}`;
      }

      // append diet to URL
      if (diet) {
        url += `&diet=${diet}`;
      }

      // append maxReadyTime to URL
      if (maxReadyTime) {
        url += `&maxReadyTime=${maxReadyTime}`;
      }
      if (number) {
        url += `&number=20`;
      }

      // console.log(url);

      // get recipes with filters from Spoonacular API
      fetch(url)
        .then((response) => {
          // check if API request was successful
          if (response.status >= 200 && response.status < 300) {
            // parse the response as JSON data
            return response.json();
          }

          // if the API request was not successfull then throw an error
          throw new Error(
            `Error ${response.status} - Could not get recipes from API`
          );
        })
        .then((data) => {
          // update the recipe list with the API data
          setRecipes(data.results);
          // console.log(data.results);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    [query, ingredients, diet, maxReadyTime, number],
    offset
  );

  return (
    <div className={classes.headlineSection}>
      <Typography variant="h6" component="p" className={classes.headerHeadline}>
        Recipes
      </Typography>

      <div>
        <SearchByRecipe setQuery={setQuery} />
        <RecipeFilterOverlay
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          setDiet={setDiet}
          setMaxReadyTime={setMaxReadyTime}
          ingredients={ingredients}
        />
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
        <div className={classes.root}>
          <RecipeList recipes={recipes} />
          <Button onClick={recipes.number}>See more</Button>
        </div>
      </div>
    </div>
  );
}

export default RecipesFilterPage;
