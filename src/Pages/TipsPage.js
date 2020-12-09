import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-quicksand";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#D0D8D8",
    height: "100%",
    color: "#161F22",
    position: "relative",
    paddingLeft: 5,
    paddingBottom: 20,
    paddingLeft: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  tipHeadline: {
    color: "#161F22",
    fontSize: 49,
    paddingLeft: 15,
    paddingBottom: 20,
  },
  tipsButtons: {
    backgroundColor: "#A2CCBE",
    color: "293539",
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 20,
    fontFamily: "quicksand",
    fontSize: 22,
    maxWidth: 310,
    maxHeight: 60,
    justifyContent: "center",
    textAlign: "centers",
  },
}));

function TipsPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.tipHeadline}>Tips & Ideas</Typography>

      <Button className={classes.tipsButtons} variant="contained">
        beginners guide
      </Button>
      <Button className={classes.tipsButtons} variant="contained">
        kitchen flow
      </Button>

      <Button className={classes.tipsButtons} variant="contained">
        enjoy cooking
      </Button>
    </div>
  );
}

export default TipsPage;
