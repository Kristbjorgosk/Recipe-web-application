import React, { Component } from "react";
// import Chip from '@material-ui/core/Chip';

class IngredientTag extends Component {
  // remove tag if close button is clicked
  onCloseClick = (e) => {
    const ingredient = e.target.parentNode.querySelector("span").innerText;
    this.props.removeIngredient(ingredient);
  }

  render() {
    return (
      <div>
        <span>{this.props.tag}</span>
        <i onClick={this.onCloseClick}>&times;</i>
        {/* <Chip size="small" onDelete={handleDelete} /> */}
      </div>
    )
  }
}

export default IngredientTag;
