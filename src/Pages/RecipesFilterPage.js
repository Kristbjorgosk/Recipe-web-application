import React, { useEffect, useRef } from "react";
// import RecipeSearchForm from "../Component/RecipeSearchForm";
import RecipeList from "../Component/RecipeList";
import { apiKey } from "../Api";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import RecipeFilterOverlay from "../Component/RecipeFilterOverlay";
import SearchByRecipe from "../Component/SearchByRecipe";
import { Button } from "@material-ui/core";
import IngredientTagList from "../Component/IngredientTagList";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#D0D8D8",
    padding: "15px 15px 15px 15px",
  },
  headerHeadline: {
    color: "#161F22",
    fontSize: 49,
    fontWeight: 700,
    fontFamily: "quicksand",
    display: "flex",
    justifyContent: "center",
    textAlign: "cetner",
    backgroundColor: "#EAF2F2",
  },
  headlineSection: {
    backgroundColor: "#EAF2F2",
    display: "flex",
  },
  waves: {
    backgroundColor: "#EAF2F2",
    display: "flex",
    alignItems: "flex-end",
  },
}));

function RecipesFilterPage() {
  const [query, setQuery] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [diet, setDiet] = React.useState("");
  const [maxReadyTime, setMaxReadyTime] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [number, setNumber] = React.useState(12);

 
  // effect that should only run when component is mounted
  useEffect(() => {
    // get query string parameters from URL
    const params = new URLSearchParams(window.location.search);

    // get query, diet and maxReadyTime from query string parameters
    const query = params.get("query") || "";
    const diet = params.get("diet") || "";
    const maxReadyTime = params.get("maxReadyTime") || "";
    let ingredients = params.get("ingredients") || "";
    const offset = params.get("offset") || 0;
    const number = params.get("number") || 12;

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
    setNumber(number);
  }, []);

  const classes = useStyles();

  // this is thanks to Shubham Khatri.
  // used to make sure the next effect is only run on updates and not on the initial mount
  const isInitialMount = useRef(true);

  // effect that should run every time the component's state is updated
  useEffect(
    () => {
      if (isInitialMount.current === true) {
        isInitialMount.current = false;
        return;
      }

      let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&offset=${offset}&number=${number}`;

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
          // setRecipes(data.results);
          setRecipes([...recipes, ...data.results]);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, ingredients, diet, maxReadyTime, offset]
  );

  // removes ingredient from ingredient state array
  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  const onSeeMoreClick = () => {
    setOffset(offset + number);
  };

  return (
    <div>
      <Typography variant="h6" component="p" className={classes.headerHeadline}>
        Recipes
      </Typography>
      <div className={classes.headlineSection}>
        <SearchByRecipe
          setQuery={setQuery}
          setRecipes={setRecipes}
          setOffset={setOffset}
        />
        <IngredientTagList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />

        <RecipeFilterOverlay
          setDiet={setDiet}
          diet={diet}
          setMaxReadyTime={setMaxReadyTime}
          maxReadyTime={maxReadyTime}
          setIngredients={setIngredients}
          ingredients={ingredients}
          setRecipes={setRecipes}
          setOffset={setOffset}
        />
      </div>

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

        <Button
          style={{
            backgroundColor: "#A2CCBE",
            color: "#293539",
            border: "none",
            height: 39,
            borderRadius: "30px 30px 30px 30px",
            fontFamily: "quicksand",
            fontWeight: 700,
            fontSize: 20,
            marginTop: 15,
          }}
          onClick={onSeeMoreClick}
        >
          See more
        </Button>
      </div>
    </div>
  );
}

export default RecipesFilterPage;
