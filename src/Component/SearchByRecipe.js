import React, { Component } from "react";

class SearchByRecipe extends Component {
  onKeyDown = (e) => {
    // if user presses Enter
    if (e.keyCode === 13) {
      // get query from textbox
      const query = e.target.value;

      // set query to props
      this.props.setQuery(query);
    }
  }
 
  render() {
    return (
      <input type="search" onKeyDown={this.onKeyDown} placeholder="search for recipes..." />
    )
  }
}

export default SearchByRecipe;
