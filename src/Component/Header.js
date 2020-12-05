import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// setting up the styles, in this case, just for the "logo" - will change the logo once we have one
const useStyles = makeStyles((theme) => ({
  logo: {
    position: "center",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: "0 auto",
    height: 80,
    width: 80,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* AppBar is the header itself */}
      <AppBar
        position="Sticky"
        maxWidth="xs"
        style={{ padding: 20, marginBottom: 20 }}
      >
        {/* Toolbar keeps the logo / image */}
        <Toolbar style={{ paddingTop: 30, paddingBottom: 90 }}>
          <Avatar
            alt="Logo"
            src="/static/images/avatar/1.jpg"
            className={classes.logo}
          />
        </Toolbar>

        {/* the text that is inside the header */}
        <Typography gutterBottom variant="h3" component="h1">
          Cooking made simple!
        </Typography>
        <Typography variant="h6" component="p">
          Discover recipes, get motivated and start cooking!
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}

// it is imported in the app.js folder
export default Header;
