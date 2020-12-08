import React, { Component } from "react";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

class FavoriteButton extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false };
  }

  clickHandler = (e) => {
    let favoriteIds = localStorage.getItem("favoriteIds") || "[]";
    favoriteIds = JSON.parse(favoriteIds)

    if (this.state.active === true) {
      this.setState({ active: false });
      const index = favoriteIds.indexOf(this.props.recipeId);
      if (index !== -1) {
        favoriteIds.splice(index, 1);
      }
    } else {
      this.setState({ active: true });
      favoriteIds.push(this.props.recipeId)
    }

    favoriteIds = JSON.stringify(favoriteIds);
    localStorage.setItem("favoriteIds", favoriteIds);
  };

  componentDidMount() {
    let favoriteIds = localStorage.getItem("favoriteIds") || "[]";
    favoriteIds = JSON.parse(favoriteIds)

    if (favoriteIds.includes(this.props.recipeId)) {
      this.setState({ active: true })
    }
  }

  render() {
    if (this.state.active) {
      return <FavoriteRoundedIcon onClick={this.clickHandler} />;
    } else {
      return <FavoriteBorderRoundedIcon onClick={this.clickHandler} />;
    }
  }
}

export default FavoriteButton;