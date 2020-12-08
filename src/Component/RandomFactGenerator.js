import React, { Component } from "react";
import { fungeneratorsApiKey } from "../Api";

import Typography from "@material-ui/core/Typography";

class RandomFactGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: "",
    };
  }

  componentDidMount() {
    const headers = {
      accept: "application/json",
      "X-Fungenerators-Api-Secret": fungeneratorsApiKey,
    };

    const subcategories = [
      "Coffee",
      "Chocolate",
      "Pasta",
      "Pizza",
      "Cheese",
      "Bacon",
      "Sugar",
      "KFC",
      "Popcorn",
      "Donuts",
      "Beef",
    ];

    const subcategory =
      subcategories[Math.floor(Math.random() * subcategories.length)];

    fetch(
      `http://api.fungenerators.com/fact/random?category=food&subcategory=${subcategory}`,
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        const fact = data.contents.fact;
        this.setState({ fact });
      })
      .catch((err) => {
        console.log("Error!");
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Typography
          style={{ paddingLeft: 15, paddingRight: 15 }}
          variant="body2"
          component="p"
        >
          {this.state.fact}
        </Typography>
      </>
    );
  }
}

export default RandomFactGenerator;
