import React, { Component } from "react";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

class FavoriteButton extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false };
  }

  clickHandler = () => {
    // get favorites array from local storage and
    let favorites = localStorage.getItem("favorites") || "[]";
    favorites = JSON.parse(favorites)

    // if recipe is already favorited
    if (this.state.active === true) {
      this.setState({ active: false });

      // find the recipe and remove it from favorites
      const recipe = favorites.find((item) => item.id === this.props.recipe.id);
      if (recipe !== null) {
        favorites.splice(recipe, 1);
      }
    } else {
      // else if recipe is not favorited
      this.setState({ active: true });

      // add it to favorites
      favorites.push({
        id: this.props.recipe.id,
        title: this.props.recipe.title,
        image: this.props.recipe.image,
        readyInMinutes: this.props.recipe.readyInMinutes,
        servings: this.props.recipe.servings,
      })
    }

    // convert favorites to string and store in local storage
    favorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", favorites);
  };

  componentDidMount() {
    // get favorite recipes from local storage
    let favorites = localStorage.getItem("favorites") || "[]";
    favorites = JSON.parse(favorites)

    // find the recipe and mark it as favorite if found
    if (favorites.find((item) => item.id === this.props.recipe.id)) {
      this.setState({ active: true })
    }
  }

  render() {
    // render favorite rounded icon if recipe is favorited
    if (this.state.active) {
      return <FavoriteRoundedIcon onClick={this.clickHandler} />;
    } else { // otherwise render favorite border rounded icon if recipe is not favorited
      return <FavoriteBorderRoundedIcon onClick={this.clickHandler} />;
    }
  }
}

export default FavoriteButton;