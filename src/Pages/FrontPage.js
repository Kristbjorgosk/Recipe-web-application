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
  // root: {
  //   backgroundColor: "#D0D8D8",
  //   height: "100%",
  //   color: "#161F22",
  //   zIndex: 2,
  //   position: "relative",
  // },

  root: {
    flexGrow: 1,
  },
  bodytext: {
    padding: 20,
    fontWeight: "bold",
  },
  takkar: {
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

    // -- Spyrja Smára hvort þetta sé rétt til að sýna time í recipe card
    // if (recipes.maxReadyTime) {
    //   API_URL += `&maxReadyTime=${props.maxReadyTime}`;
    // }

    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }
  // function to get different diets and it is trickered when clicking the button below in return section

  return (
    // sx is about the same size as mobile -this is mobile first approach
    <div className={classes.root}>
      <Typography variant="h6" component="p" className={classes.bodytext}>
        Categories
      </Typography>

      {/* <Link to="/recipes?diet=ketogenic">Keto</Link> */}

      <ButtonGroup orientation="horizontal" className={classes.takkar}>
        {/* Displaying the Takki function from the Button.js folder */}
        {/* Categories is the function above, it displays the diet that is in the () */}
        <Takki diet="vegan" text="Vegan"></Takki>
        <Takki diet="ketogenic" text="Keto"></Takki>
        <Takki diet="vegetarian" text="Vegetarian"></Takki>
        <Takki diet="pescetarian" text="Pescetarian"></Takki>
        <Takki diet="paleo" text="Paleo"></Takki>
      </ButtonGroup>
      <Typography variant="h6" component="p" className={classes.bodytext}>
        Recipe of the moment
      </Typography>

      <RandomRecipeGenerator />

      <Typography variant="h6" component="p" className={classes.bodytext}>
        Random food fact of the Day
      </Typography>
      
      <RandomFactGenerator />
    </div>
  );
}

export default FrontPage;
