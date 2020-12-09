import React, { Component } from "react";

class SearchByDiet extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const diet = e.target.options[e.target.selectedIndex].value;
    this.props.setDiet(diet);
  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="">Search by Category</option> {/* change first option to gray */}
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="ketogenic">Keto</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="paleo">Paleo</option>
      </select>
    );
  }
}

export default SearchByDiet;
