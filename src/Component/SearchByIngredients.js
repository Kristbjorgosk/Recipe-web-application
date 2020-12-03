import React from "react";
import { apiKey } from "../Api";

function SearchByIngredients() {
  let timeoutId = null;

  function search(e) {
    const ingredients = e.target.value
  
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (ingredients) {
      timeoutId = setTimeout(() => {
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log("Got response from server");
            console.log(data);
          }) 
          .catch((err) => {
            console.log("Error!");
            console.log(err);
          });

        timeoutId = null;
      }, 2000);
    }
  }

  return (
    <input type="search" onKeyUp={search} placeholder="Search by Ingredients" />
  )
}

export default SearchByIngredients;