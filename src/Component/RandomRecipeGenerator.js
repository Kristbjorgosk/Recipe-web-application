import React, { Component } from "react";
import { apiKey } from "../Api";
import RecipeCard from "./RecipeCard";

class RandomRecipeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { random: {} };
  }

  componentDidMount = () => {
    // get current day of month
    const today = new Date().getDate();
 
    // get recipe of the day from local storage
    let recipeOfTheDay = localStorage.getItem("recipeOfTheDay");

    // if a recipe of the day was found
    if (recipeOfTheDay !== null) {
      recipeOfTheDay = JSON.parse(recipeOfTheDay);

      // if it's still the same day then then use the recipe from local storage
      if (recipeOfTheDay.date === today) {
        this.setState({ random: recipeOfTheDay.recipe })
        return;
      }
    } 

    // if no recipe of the day has been chosen, or if a day has passed, then get a random recipe
    // from the Spoonacular API and mark it as the recipe of the day
    fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`)
      .then((response) => {
        // check if API request was successful
        if (response.status >= 200 && response.status < 300) {
          // parse the response as JSON data
          return response.json();
        }

        // if the API request was not successfull then throw an error
        throw new Error(`Error ${response.status} - Could not get recipes from API`);
      })
      .then((response) => {
        // save the random recipe to local storage as recipe of the day
        let recipe = response.recipes[0];
        recipe = {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          readyInMinutes: recipe.readyInMinutes,
          servings: recipe.servings,
        };
        let recipeOfTheDay = {date: today, recipe }; 
        recipeOfTheDay = JSON.stringify(recipeOfTheDay);
        localStorage.setItem("recipeOfTheDay", recipeOfTheDay);
        this.setState({ random: recipe });
      })
      // alert if API request failed
      .catch((err) => { alert(err.message); });
  }
    
  render = () => {
    return (
      <>
        <RecipeCard recipe={this.state.random} />
      </>
    );
  }
}

export default RandomRecipeGenerator;
