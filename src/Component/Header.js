import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Logo/zenpotlogo.svg";

// setting up the styles, in this case, just for the "logo" - will change the logo once we have one
const useStyles = makeStyles((theme) => ({
  logo: {
    position: "center",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: "0 auto",
    height: 140,
    width: 140,
    marginBottom: 85,
    marginTop: 100,
  },
  header: {
    padding: 20,
    backgroundColor: "#EAF2F2",
    position: "relative",
    zIndex: -1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "baseline",
    alignContent: "center",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* AppBar is the header itself */}

      {/* Toolbar keeps the logo / image */}
      <Toolbar className={classes.header}>
        <img className={classes.logo} src={logo} alt=""></img>

        {/* the text that is inside the header */}
      </Toolbar>
    </React.Fragment>
  );
}

// it is imported in the app.js folder
export default Header;
