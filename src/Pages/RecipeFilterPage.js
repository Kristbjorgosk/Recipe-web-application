import React, { useState } from "react";
import RecipeCard from "../Component/RecipeCard";
import Header from "../Component/Header";
import { apiKey } from "../Api";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SearchByRecipe from "../Component/SearchByRecipe";
import SearchByMinutes from "../Component/SearchByMinutes";
import SearchByIngredients from "../Component/SearchByIngredients";
import SearchByDiet from "../Component/SearchByDiet";

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
    <>
      <Typography variant="h3" component="h1">
        Þetta er recipe Filter page!!!!!!
      </Typography>
      <SearchByRecipe />

      <SearchByIngredients />
      <SearchByDiet />
      <SearchByMinutes />
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
    </>
  );
}

export default RecipeFilterPage;
