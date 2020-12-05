import React, { Component } from "react";
import { updateRecipes } from "./RecipeList";
import { apiKey } from "../Api";

// timeoutId is a variable that contains the return value of setTimeout
// and is used to stop the timer if the user enters a new key within the
// time delay
let timeoutId = null;

function search(e) {
  const delay = 800;

  // get the value of the search textbox
  const query = e.target.value;

  // if a timer is active then stop it
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // if the user input is not empty
  if (query) {
    timeoutId = setTimeout(() => {
      // start a new timer that calls the API after a small delay to avoid
      // sending multiple requests after every keystroke
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`;

      // get recipes from the API that use the specified ingredients
      fetch(url)
      // convert the API response to an object
        .then((response) => response.json())
        .then((data) => {
          // update the recipe list with the API data
          console.log("Got response from server");
          console.log(data);
          updateRecipes(data.results);          
        }) 
        .catch((err) => {
          console.log("Error!");
          console.log(err);
        });

      timeoutId = null;
    }, delay);
  }
}

class SearchByRecipe extends Component {
  render() {
    return (
      <input type="search" onKeyUp={search} placeholder="Search Recipe" />
    )
  }
}

export default SearchByRecipe;
