import React from "react";
import { button } from "./Component/Button";
import SearchByRecipe from "./Component/SearchByRecipe";
import SearchByIngredients from "./Component/SearchByIngredients";

function App() {
  function search() {}
  return (
    <div>
      <button onClick={search} text="search" color="red">
        See recipes
      </button>
      
      <SearchByRecipe />
      <SearchByIngredients />
      
    </div>
  );
}

export default App;
