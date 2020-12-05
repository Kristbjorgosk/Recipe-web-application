import React, { useState } from "react";
import RecipeCard from "./Component/RecipeCard";
import Header from "./Component/Header";
import { apiKey } from "./Component/Api";
import Grid from "@material-ui/core/Grid";

function RecipeFilterPage() {
  const [recipes, setRecipes] = useState([]);
  async function categories(diet) {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }
  // function to get different diets and it is trickered when clicking the button below in return section

  return (
    // sx is about the same size as mobile -this is mobile first approach
    <div>
      <Header />

      {/* the RecipeCard gets it function from the function above, it maps through the recipes and displays 
          the recipe card when the button (Takki) is clicked */}
      {recipes.map((recipe) => {
        return (
          <Grid container spacing={3}>
            <Grid item s={6}>
              <RecipeCard
                title={recipe.title}
                image={recipe.image}
              ></RecipeCard>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default RecipeFilterPage;
