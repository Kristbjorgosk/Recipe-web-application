import React, { Component } from "react";

class SearchByIngredients extends Component {
  onKeyDown = (e) => {
    // if user presses Enter
    if (e.keyCode === 13) {
      // simulate button click
      e.target.parentNode.querySelector("button").click();
    }
  }

  handleClick = (e) => {   
    // get search textbox   
    const input = e.target.parentNode.querySelector("input");

    // read tag from textbox
    const tag = input.value;

    // add tag to RecipeSearchForm ingredients
    this.props.addIngredient(tag);

    // clear textbox
    input.value = "";

    // focus textbox
    input.focus();
  }
  
  render() {
    return (
      <div>
        <input type="search" onKeyDown={this.onKeyDown} placeholder="Search for Ingredients" />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default SearchByIngredients;
