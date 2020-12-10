import React, { Component } from "react";
import "fontsource-sarabun";

class IngredientTag extends Component {
  // remove tag if close button is clicked
  onCloseClick = (e) => {
    const ingredient = e.target.parentNode.querySelector("span").innerText;
    this.props.removeIngredient(ingredient);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3898A5",
          color: "#EAF2F2",
          marginTop: 4,
          borderRadius: 15,
          // paddingLeft: 15,
          padding: "5px 5px 5px 15px",
          width: 120,
          fontSize: 20,
          fontFamily: "sarabun",
          fontWeight: "bold",
        }}
      >
        <span>{this.props.tag}</span>
        {this.props.closable && <i onClick={this.onCloseClick}>&times;</i>}
      </div>
    );
  }
}

export default IngredientTag;
