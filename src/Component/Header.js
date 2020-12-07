import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { salmon } from "@material-ui/core/colors";
import SvgIcon from "@material-ui/core/SvgIcon";

// setting up the styles, in this case, just for the "logo" - will change the logo once we have one
const useStyles = makeStyles((theme) => ({
  logo: {
    position: "center",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: "0 auto",
    height: 320,
    width: 320,
  },
  textHeadline: {
    color: "#161F22",
    fontSize: 49,
  },
  text: {
    color: "#161F22",
    fontSize: 22,
  },
  header: {
    padding: 20,
    backgroundColor: "#EAF2F2",
    position: "relative",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* AppBar is the header itself */}
      <AppBar className={classes.header}>
        {/* Toolbar keeps the logo / image */}
        <Toolbar>
          <SvgIcon className={classes.logo}></SvgIcon>
        </Toolbar>

        {/* the text that is inside the header */}
        <Typography
          className={classes.textHeadline}
          gutterBottom
          variant="h3"
          component="h1"
        >
          Cooking made simple!
        </Typography>
        <Typography variant="h6" component="p" className={classes.text}>
          Discover recipes, get motivated and start cooking!
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}

// it is imported in the app.js folder
export default Header;
