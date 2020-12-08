import React, { Component } from "react";
import { apiKey } from "../Api";
import RecipeCard from './RecipeCard';

class RandomRecipeGenerator extends Component {
  state ={
      random: []
  }

  componentDidMount = () =>{
    fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`)
    .then(resp => resp.json())
    .then((resp) => {
      this.setState({
        random: resp.recipes
      })
      console.log(this.state.random)
      })
  }
    
  render = () => { 
    console.log(this.state.random)
    const getRecipes = this.state.random.map(recipe => 
      <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} />)
    return (
      <>
        { getRecipes }
      </>
    );
  }
}

export default RandomRecipeGenerator;