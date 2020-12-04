import React from "react";
import Button from "./Component/Button";
import SearchByRecipe from "./Component/SearchByRecipe";
import SearchByIngredients from "./Component/SearchByIngredients";
import { RecipeList, updateRecipes } from "./Component/RecipeList";
import { apiKey } from "./Api";

function App() {
  function search() {}

  // function to get different diets and it is trickered when clicking the button below in return section
  async function categories(diet) {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    // update RecipeList with API results by calling updateRecipes function from the RecipeList component
    updateRecipes(data.results);
    console.log(data.results);
  }

  return (
    <div>
      <Button click={search} text="search" color="red"></Button>
      <SearchByRecipe />
      <SearchByIngredients />
      <Button click={() => categories("Vegan")} text="Vegan"></Button>
      <Button click={() => categories("Ketogenic")} text="Keto"></Button>
      <Button click={() => categories("Vegetarian")} text="Vegetarian"></Button>
      <Button click={() => categories("Pescetarian")} text="Pescetarian"></Button>
      <Button click={() => categories("Paleo")} text="Paleo"></Button>
      <RecipeList />
    </div>
  );
}

export default App;
