import React, { Component } from "react";
import IngredientTag from "./IngredientTag";

class IngredientTagList extends Component {
  render() {
    return (
      <div>
        {this.props.ingredients.map((tag) => {
          return (
            <IngredientTag
              tag={tag} 
              removeTag={this.removeTag} 
              removeIngredient={this.props.removeIngredient} 
              closable={this.props.closable}
            />
          );
        })}
      </div>
    );
  }
}

export default IngredientTagList;
