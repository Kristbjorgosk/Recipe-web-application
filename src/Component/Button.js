import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
}));

function Takki(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* the Button is imported above from MUI, the value for props is set in app.js */}

      <Button onClick={props.click} className={classes.buttons}>
        {props.text}
      </Button>
    </div>
  );
}

// it is imported in the app.js folder
export default Takki;
