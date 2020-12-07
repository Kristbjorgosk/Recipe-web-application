import React, { useState } from "react";
import { apiKey } from "../Api";
import "fontsource-roboto";
import Takki from "../Component/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import RandomFactGenerator from "../Component/RandomFactGenerator";

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
    backgroundColor: "black",
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D0D8D8"
          fill-opacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,112C672,96,768,128,864,133.3C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>{" "}
      </svg>
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
        Recipie of the Day
      </Typography>
      <Typography variant="h6" component="p" className={classes.bodytext}>
        Random food fact of the Day
      </Typography>
      <RandomFactGenerator />
    </div>
  );
}

export default FrontPage;
