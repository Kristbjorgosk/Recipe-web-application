import React, { useEffect } from "react";
import RecipeSearchForm from "../Component/RecipeSearchForm";
import RecipeList from "../Component/RecipeList";
import { apiKey } from "../Api";
import "fontsource-roboto";

function RecipesFilterPage() {
  const [query, setQuery] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [diet, setDiet] = React.useState("");
  const [maxReadyTime, setMaxReadyTime] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

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

    // split ingredients on commas to an array
    ingredients = ingredients.split(",");

    // remove empty ingredients from array
    ingredients = ingredients.filter((ingredient) => ingredient);

    // set component state
    setQuery(query);
    setIngredients(ingredients);
    setDiet(diet);
    setMaxReadyTime(maxReadyTime);
  }, []);

  // effect that should run every time the component's state is updated
  useEffect(() => {
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
        throw new Error(`Error ${response.status} - Could not get recipes from API`);
      })
      .then((data) => {
        // update the recipe list with the API data
        setRecipes(data.results);
        // console.log(data.results);
      })
      .catch((err) => { alert(err.message); });
  }, [query, ingredients, diet, maxReadyTime]);

  return (
    <>
      <RecipeSearchForm
        setQuery={setQuery}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        setDiet={setDiet}
        setMaxReadyTime={setMaxReadyTime}
        ingredients={ingredients}
      />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default RecipesFilterPage;
