import React, { useState } from "react";
import { apiKey } from "../Api";
import "fontsource-roboto";
import Takki from "../Component/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import RandomFactGenerator from "../Component/RandomFactGenerator";
import RandomRecipeGenerator from "../Component/RandomRecipeGenerator";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#D0D8D8",
    height: "100%",
    color: "#161F22",
    // zIndex: 2,
    position: "relative",
    paddingLeft: 5,
    paddingBottom: 20,
  },

  bodyheaddline: {
    padding: 20,
    fontWeight: "bold",
  },

  headerHeadline: {
    color: "#161F22",
    fontSize: 49,
    paddingLeft: 15,
  },
  text: {
    color: "#161F22",
    fontSize: 22,
    paddingLeft: 15,
  },
  takkar: {
    paddingLeft: 5,
    zIndex: -1,
    overflow: "auto",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    direction: "row",
  },
}));

function FrontPage() {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  async function categories(diet) {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diet}`;

    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }

  return (
    <div className={classes.root}>
      <Typography
        className={classes.headerHeadline}
        gutterBottom
        variant="h3"
        component="h1"
      >
        Cooking made simple!
      </Typography>
      <Typography variant="h6" component="p" className={classes.text}>
        Discover recipes, get motivated and start cooking!
      </Typography>
      <Typography variant="h6" component="p" className={classes.bodyheaddline}>
        Categories
      </Typography>

      <ButtonGroup orientation="horizontal" className={classes.takkar}>
        {/* Displaying the Takki function from the Button.js folder */}
        {/* Categories is the function above, it displays the diet that is in the () */}
        <Takki diet="vegan" text="Vegan"></Takki>
        <Takki diet="ketogenic" text="Keto"></Takki>
        <Takki diet="vegetarian" text="Vegetarian"></Takki>
        <Takki diet="pescetarian" text="Pescetarian"></Takki>
        <Takki diet="paleo" text="Paleo"></Takki>
      </ButtonGroup>
      <Typography variant="h6" component="p" className={classes.bodyheaddline}>
        Recipe of the day
      </Typography>

      <RandomRecipeGenerator />

      <Typography variant="h6" component="p" className={classes.bodyheaddline}>
        Random food fact of the Day
      </Typography>

      <RandomFactGenerator />
    </div>
  );
}

export default FrontPage;
