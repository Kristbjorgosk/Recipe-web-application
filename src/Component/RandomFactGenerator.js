import React, { Component } from "react";
import { fungeneratorsApiKey } from "../Api";
import "fontsource-quicksand";
import Typography from "@material-ui/core/Typography";

class RandomFactGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: "",
    };
  }

  componentDidMount() {
    // create headers for API request that contain the API key for the Fungenerators API
    const headers = {
      accept: "application/json",
      "X-Fungenerators-Api-Secret": fungeneratorsApiKey,
    };

    // array of allowed subcategories
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

    // choose a random subcategory
    const subcategory = subcategories[Math.floor(Math.random() * subcategories.length)];

    // get random fact from Fungenerators API
    fetch(`https://api.fungenerators.com/fact/random?category=food&subcategory=${subcategory}`, { headers })
      .then((response) => {
        // check if API request was successful
        if (response.status >= 200 && response.status < 300) {
          // parse the response as JSON data
          return response.json();
        }

        // if the API request was not successfull then throw an error
        throw new Error(`Error ${response.status} - Could not get random fact from API`);
      })
      .then((data) => {
        // set state fact from API response
        const fact = data.contents.fact;
        this.setState({ fact });
      })
      // alert if API request failed
      .catch((err) => { alert(err.message); });
  }

  render() {
    return (
      <>
        <Typography
          style={{
            paddingLeft: 18,
            paddingRight: 15,
            paddingTop: 10,
            fontFamily: "quicksand",
            fontSize: 20,
          }}
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
