import React, { Component } from "react";

class SearchByIngredients extends Component {
    onKeyDown = (e) => {
      // if user presses Enter
      if (e.keyCode === 13) {
        // get ingredient text
        const tag = e.target.value;
  
        // add ingredient to props
        this.props.addIngredient(tag);
  
        // empty ingredient textbox
        e.target.value = "";
      }
    }

    handleClick = (e) => {    
        // console.log('The link was clicked.');  
        const tag = e.target.value;
        this.props.addIngredient(tag);
        e.target.value = "";
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
