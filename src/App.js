import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import RecipeSearchForm from "./Component/RecipeSearchForm";
import { RecipeList, updateRecipes } from "./Component/RecipeList";
import { apiKey } from "./Api";
import Takki from "./Component/Button";
import Header from "./Component/Header";
import NavbarFooter from "./Component/Navbar";
import "./Style/main.css";
import "fontsource-roboto";

function App() {
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
    // sx is about the same size as mobile -this is mobile first approach
    <Container maxWidth="xs">
      <Header />

      <RecipeSearchForm />

      {/* <Button click={search} text="search" color="red"></Button>
      <SearchBy />
      <DropdownButton />
       */}

      <Typography variant="h6" component="p">
        Categories
      </Typography>

      {/* Displaying the Takki function from the Button.js folder */}
      {/* Categories is the function above, it displays the diet that is in the () */}
      <Takki click={() => categories("Vegan")} text="Vegan"></Takki>
      <Takki click={() => categories("Ketogenic")} text="Keto"></Takki>
      <Takki click={() => categories("Vegetarian")} text="Vegetarian"></Takki>
      <Takki click={() => categories("Pescetarian")} text="Pescetarian"></Takki>
      <Takki click={() => categories("Paleo")} text="Paleo"></Takki>

      {/* the RecipeCard gets it function from the function above, it maps through the recipes and displays 
      the recipe card when the button (Takki) is clicked */}
      <RecipeList />

      {/* Calling the NavbarFooter to display the navbar */}
      <NavbarFooter />
    </Container>
  );
}

export default App;
