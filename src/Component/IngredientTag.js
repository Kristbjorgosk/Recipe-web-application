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
        <span>
          <i>
            <Chip size="small">
              {this.props.tag} onClick={this.onCloseClick} &times;
            </Chip>
          </i>
        </span>
      </div>
    );
  }
}

export default IngredientTag;
