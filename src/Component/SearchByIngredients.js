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

  render() {
    return (
      <input type="search" onKeyDown={this.onKeyDown} placeholder="Search by Ingredients" />
    )
  }
}

export default SearchByIngredients;
