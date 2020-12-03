import React from "react";

// function to display the front of the recipe
function RecipeCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <a href={props.id}>
        <img src={props.image}></img>
      </a>
    </div>
  );
}

export default RecipeCard;
