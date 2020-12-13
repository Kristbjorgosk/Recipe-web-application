import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  buttons: {
    background: " #3898A5 ",
    color: "white",
    margin: 5,
    borderRadius: 6,
    height: 50,
    fontSize: 14,
    fontFamily: "sarabun",
    justifyContent: "space-around",
  },
  link: {
    textDecoration: "none",
    marginRight: 10,
  },
}));

function Takki(props) {
  const classes = useStyles();

  return (
    <>
      <Link
        className={classes.link}
        to={`/RecipesFilterPage?diet=${props.diet}`}
      >
        <Button className={classes.buttons}>{props.text} </Button>
      </Link>
    </>
  );
}

// it is imported in the Frontpage.js folder
export default Takki;
