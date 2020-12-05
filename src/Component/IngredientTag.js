import React, { Component } from "react";

class IngredientTag extends Component {
  onCloseClick = (e) => {
    const ingredient = e.target.parentNode.querySelector("span").innerText;
    this.props.removeIngredient(ingredient);
  }

  render() {
    return (
      <div>
        <span>{this.props.tag}</span>
        <i onClick={this.onCloseClick}>&times;</i>
      </div>
    )
  }
}

export default IngredientTag;
