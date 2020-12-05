import React, { Component } from "react";

class SearchByRecipe extends Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
    this.delay = 800;
  }

  onChange = (e) => {
    // if a timer is active then stop it
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // start a timer
    this.timeoutId = setTimeout(() => {
      const query = e.target.value;
      this.props.setQuery(query);
      this.timeoutId = null;
    }, this.delay);
  }
 
  render() {
    return (
      <input type="search" onChange={this.onChange} placeholder="Search by Recipe" />
    )
  }
}

export default SearchByRecipe;
