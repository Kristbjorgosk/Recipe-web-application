import React, { Component } from "react";

class SearchByDiet extends Component {
  // function that runs when a new selection has been made
  onChange = (e) => {
    // get selected diet from dropdown list set it to props
    const diet = e.target.options[e.target.selectedIndex].value;
    this.props.setDiet(diet);
  };

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Categories
        </label>
        <select
          style={{
            backgroundColor: "#3898A5",
            color: "#EAF2F2",
            width: 170,
            fontSize: 20,
            borderRadius: 10,
            border: "none",
            padding: "5px 0 5px 15px",
          }}
          onChange={this.onChange}
        >
          <option value="">select</option> {/* change first option to gray */}
          <option value="ketogenic">Keto</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
        </select>
      </form>
    );
  }
}

export default SearchByDiet;
