import React, { Component } from "react";

class SearchByIngredients extends Component {
  onKeyDown = (e) => {
    // if user presses Enter
    if (e.keyCode === 13) {
      const tag = e.target.value;
      this.props.addIngredient(tag);
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
