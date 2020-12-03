import React from "react";
import { apiKey } from "../Api";

function SearchBy() {
  let timeoutId = null;

  function search(e) {
    const query = e.target.value
  
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (query) {
      timeoutId = setTimeout(() => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`;

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
    <input type="search" onKeyUp={search} placeholder="search" />
  )
}

export default SearchBy;