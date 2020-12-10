import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

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
  };

  handleClick = (e) => {
    // console.log('The link was clicked.');
    const tag = e.target.value;
    this.props.addIngredient(tag);
    e.target.value = "";
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "spaceBetween",
        }}
      >
        <input
          id="standard-basic"
          placeholder="Search for Ingredients"
          variant="outlined"
          onKeyDown={this.onKeyDown}
          style={{
            borderRadius: " 50px 0px 0px 50px ",
            lineHeight: 2.5,
            paddingLeft: 15,
            maxWidth: 260,
            border: "1px solid #F0F9F9",
          }}
        />
        <button
          style={{
            backgroundColor: "#A2CCBE",
            border: "none",
            height: 30,
            maxWidth: 90,
            height: 39,
            marginLeft: 3,
            borderRadius: "0px 30px 30px 0px",
          }}
          onClick={this.handleClick}
        >
          Add
        </button>
      </div>
    );
  }
}

export default SearchByIngredients;
