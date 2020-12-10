import React from "react";
// import { apiKey } from "../Api";
import "fontsource-roboto";
import Takki from "../Component/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import RandomFactGenerator from "../Component/RandomFactGenerator";
import RandomRecipeGenerator from "../Component/RandomRecipeGenerator";
import "fontsource-quicksand";

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "quicksand",
    backgroundColor: "#D0D8D8",
    height: "100%",
    color: "#161F22",
    position: "relative",
    paddingBottom: 20,
    overflow: "hidder",
    marginTop: -1,
  },

  headerTextSection: {
    backgroundColor: "#EAF2F2",
  },
  headerHeadline: {
    color: "#161F22",
    fontSize: 49,
    paddingLeft: 15,
    fontWeight: 700,
    fontFamily: "quicksand",
  },
  waves: {
    backgroundColor: "#EAF2F2",
    display: "flex",
    alignItems: "flexEnd",
  },

  bodyheaddline: {
    padding: 20,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "quicksand",
    fontSize: 26,
  },

  text: {
    color: "#161F22",
    fontSize: 22,
    fontFamily: "sarabun",
    paddingLeft: 15,
    paddingRight: 15,
  },
  takkar: {
    paddingLeft: 5,
    zIndex: -1,
    overflow: "auto",
    marginBottom: 10,
  },
}));

function FrontPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerTextSection}>
        <Typography
          className={classes.headerHeadline}
          gutterBottom
          variant="h3"
          component="h1"
        >
          Cooking made simple!
        </Typography>

        <Typography className={classes.text}>
          Discover recipes, get motivated and start cooking!
        </Typography>

        <svg
          className={classes.waves}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#D0D8D8"
            d="M0,128L60,160C120,192,240,256,360,272C480,288,600,256,720,208C840,160,960,96,1080,96C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Typography className={classes.bodyheaddline}>Categories</Typography>

      <ButtonGroup orientation="horizontal" className={classes.takkar}>
        {/* Displaying the Takki function from the Button.js file */}
        {/* Categories is the function above, it displays the diet that is in the () */}
        <Takki diet="" text="See All"></Takki>
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
        Random food fact
      </Typography>

      <RandomFactGenerator />
    </div>
  );
}

export default FrontPage;
