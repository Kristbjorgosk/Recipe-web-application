import React, { useState } from "react";
import Button from "./Component/Button";
import SearchBy from "./Component/SearchBy";
import RecipeCard from "./Component/RecipeCard";
import { apiKey } from "./Api";

function App() {
  function search() {}

  // function to get different diets and it is trickered when clicking the button below in return section
  const [recipes, setRecipes] = useState([]);
  async function categories(diet) {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }
  return (
    <div>
      <Button click={search} text="search" color="red"></Button>
      <SearchBy />
      <Button click={() => categories("Vegan")} text="Vegan"></Button>
      <Button click={() => categories("Ketogenic")} text="Keto"></Button>
      <Button click={() => categories("Vegetarian")} text="Vegetarian"></Button>
      <Button
        click={() => categories("Pescetarian")}
        text="Pescetarian"
      ></Button>
      <Button click={() => categories("Paleo")} text="Paleo"></Button>
      {recipes.map((recipe) => {
        return (
          <RecipeCard title={recipe.title} image={recipe.image}></RecipeCard>
        );
      })}
    </div>
  );
}

export default App;
