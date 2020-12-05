import React, { Component } from "react";

class SearchByDiet extends Component {
  onChange = (e) => {
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
