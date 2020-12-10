import React, { Component } from "react";

class SearchByDiet extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const diet = e.target.options[e.target.selectedIndex].value;
    this.props.setDiet(diet);
  }

  componentDidMount() {
    // if a diet/category has been chosen
    if (this.props.diet !== "") {
      // find the selected diet in dropdown list
      const selectedDiet = Array.from(document.querySelectorAll("#dietDropdown option"))
        .find((option) => option.value === this.props.diet);

      // select the diet
      if (selectedDiet !== undefined) {
        selectedDiet.selected = true;
      }
    }
  }

  render() {
    return (
      <>
        <label>Categories</label>
        <select id="dietDropdown" onChange={this.onChange}>
          <option value="">select</option> {/* change first option to gray */}
          <option value="ketogenic">Keto</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
        </select>
      </>
    );
  }
}

export default SearchByDiet;
