import React, { Component } from "react";
import SearchByRecipe from "./SearchByRecipe";
import SearchByIngredients from "./SearchByIngredients";
import SearchByDiet from "./SearchByDiet";
import SearchByMinutes from "./SearchByMinutes";
import IngredientTagList from "./IngredientTagList";
import { apiKey } from "../Api";
import { updateRecipes } from "./RecipeList";

class RecipeSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      ingredients: [],
      diet: "",
      maxReadyTime: "",
    };
  }

  setQuery = (query) => {
    this.setState({
      query,
    });
  }

  addIngredient = (ingredient) => {
    this.setState({
      ingredients: [
        ...this.state.ingredients,
        ingredient,
      ],
    });
  }

  removeIngredient = (ingredient) => {
    this.setState({
      ingredients: this.state.ingredients.filter((item) => item !== ingredient),
    })
  }

  setDiet = (diet) => {
    this.setState({
      diet,
    });
  }

  setMaxReadyTime = (maxReadyTime) => {
    this.setState({
      maxReadyTime,
    });
  }

  getApiRecipes = () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

    if (this.state.query) {
      url += `&query=${this.state.query}`;
    }

    if (this.state.ingredients.length > 0) {
      const ingredients = this.state.ingredients.join(",");
      url += `&includeIngredients=${ingredients}`;
    }

    if (this.state.diet) {
      url += `&diet=${this.state.diet}`;
    }

    if (this.state.maxReadyTime) {
      url += `&maxReadyTime=${this.state.maxReadyTime}`;
    }
 
     // get recipes from the API that use the specified ingredients
    return fetch(url)
  }

  componentDidMount() {
    this.getApiRecipes()
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
  }

  componentDidUpdate() {
    this.getApiRecipes()
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
  }

  render() {
    return (
      <div>
        <SearchByRecipe setQuery={this.setQuery} />
        <SearchByIngredients addIngredient={this.addIngredient} />
        <SearchByDiet setDiet={this.setDiet} />
        <SearchByMinutes setMaxReadyTime={this.setMaxReadyTime} />
        <IngredientTagList ingredients={this.state.ingredients} removeIngredient={this.removeIngredient} />
      </div>
    );
  }
}

export default RecipeSearchForm;
