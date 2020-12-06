import React, { Component } from "react";

class SearchByRecipe extends Component {
  onKeyDown = (e) => {
    // if user presses Enter
    if (e.keyCode === 13) {
      const query = e.target.value;
      this.props.setQuery(query);
    }
  }
 
  render() {
    return (
      <input type="search" onKeyDown={this.onKeyDown} placeholder="Search by Recipe" />
    )
  }
}

export default SearchByRecipe;
