import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { white } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  buttons: {
    background: " #3898A5 ",
    color: "white",
    margin: 5,
    borderRadius: 6,
    height: 50,
    fontSize: 16,
    // display: "Flex",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
  },
}));

function Takki(props) {
  const classes = useStyles();

  return (
    <>
      {/* the Button is imported above from MUI, the value for props is set in app.js */}

      <Button onClick={props.click} className={classes.buttons}>
        {props.text}
      </Button>
    
      <Link to={`/RecipesFilterPage?diet=${props.diet}`}>
        <Button className={classes.buttons}>{props.text}</Button>
      </Link>
    </>
  );
}

// it is imported in the app.js folder
export default Takki;
