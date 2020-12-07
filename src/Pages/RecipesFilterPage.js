import React, { useState, useEffect } from "react";
import RecipeSearchForm from "../Component/RecipeSearchForm";
import { RecipeList } from "../Component/RecipeList";
import { apiKey } from "../Api";

import "fontsource-roboto";
import Takki from "../Component/Button";
import RecipeCard from "../Component/RecipeCard";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { GridList } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import RandomFactGenerator from "../Component/RandomFactGenerator";
// import TabScrollButton from "@material-ui/core/TabScrollButton";
import Paper from "@material-ui/core/Paper";

function RecipesFilterPage() {
  const [query, setQuery] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [diet, setDiet] = React.useState("");
  const [maxReadyTime, setMaxReadyTime] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

  const getApiRecipes = () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    if (query) {
      url += `&query=${query}`;
    }

    if (ingredients.length > 0) {
      const ingredients = ingredients.join(",");
      url += `&includeIngredients=${ingredients}`;
    }

    if (diet) {
      url += `&diet=${diet}`;
    }

    if (maxReadyTime) {
      url += `&maxReadyTime=${maxReadyTime}`;
    }

    console.log(url);

    // get recipes from the API that use the specified ingredients
    return fetch(url);
  };

  useEffect(function () {
    const params = new URLSearchParams(window.location.search);
    const currentQuery = params.get("query") || "";

    let ingredients = params.get("ingredients") || "";
    ingredients = ingredients.split(",");
    ingredients = ingredients.filter((ingredient) => ingredient);
    const diet = params.get("diet") || "";
    console.log(diet);
    const maxReadyTime = params.get("maxReadyTime") || "";

    setQuery(currentQuery);
    setIngredients(ingredients);
    setDiet(diet);
    setMaxReadyTime(maxReadyTime);
  }, []);

  useEffect(
    function () {
      getApiRecipes()
        // convert the API response to an object
        .then((response) => response.json())
        .then((data) => {
          // update the recipe list with the API data
          console.log("Got response from server");
          console.log(data);
          setRecipes(data.results);
        })
        .catch((err) => {
          console.log("Error!");
          console.log(err);
        });
    },
    [query, ingredients, diet, maxReadyTime]
  );

  return (
    <>
      <RecipeSearchForm
        setQuery={setQuery}
        setIngredients={setIngredients}
        setDiet={setDiet}
        setMaxReadyTime={setMaxReadyTime}
        ingredients={ingredients}
      />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default RecipesFilterPage;
