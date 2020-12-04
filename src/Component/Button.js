import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Takki(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* the Button is imported above from MUI, the value for props is set in app.js */}
      <Button
        onClick={props.click}
        className={`mainButtons${props.color}`}
        // some styling, we will costumize it more when the UI is ready
        style={{
          width: 120,
          fontSize: 14,
          height: 50,
          margin: 5,
        }}
        variant="contained"
      >
        {props.text}
      </Button>
    </div>
  );
}

// it is imported in the app.js folder
export default Takki;
