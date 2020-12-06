import React, { useState } from "react";
import { apiKey } from "./Component/Api";
import "fontsource-roboto";
import Takki from "./Component/Button";
import RecipeCard from "./Component/RecipeCard";
import Header from "./Component/Header";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { GridList } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import RandomFactGenerator from "./Component/RandomFactGenerator";
import TabScrollButton from "@material-ui/core/TabScrollButton";

function FrontPage() {
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
      <Typography variant="h3" component="h1">
        Þetta er front page!!!!!!
      </Typography>

      <RandomFactGenerator />

      <Typography variant="h6" component="p">
        Categories
      </Typography>

      {/* <Link to="/recipes?diet=ketogenic">Keto</Link> */}

      <GridList cols={1}>
        <ButtonGroup orientation="horizontal" style={{ marginBottom: 5 }}>
          {/* Displaying the Takki function from the Button.js folder */}
          {/* Categories is the function above, it displays the diet that is in the () */}
          <Takki click={() => categories("Vegan")} text="Vegan"></Takki>
          <Takki click={() => categories("Ketogenic")} text="Keto"></Takki>
          <Takki
            click={() => categories("Vegetarian")}
            text="Vegetarian"
          ></Takki>
          <Takki
            click={() => categories("Pescetarian")}
            text="Pescetarian"
          ></Takki>
          <Takki click={() => categories("Paleo")} text="Paleo"></Takki>
        </ButtonGroup>
      </GridList>
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

export default FrontPage;
