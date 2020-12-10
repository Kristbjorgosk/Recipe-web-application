import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

class IngredientTag extends Component {
  // remove tag if close button is clicked
  onCloseClick = (e) => {
    const ingredient = e.target.parentNode.querySelector("span").innerText;
    this.props.removeIngredient(ingredient);
  };

  render() {
    return (
      <div>
        <span>{this.props.tag}</span>
        {this.props.closable && <i onClick={this.onCloseClick}>&times;</i>}
      </div>
    );
  }
}

export default IngredientTag;
