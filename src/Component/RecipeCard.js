import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "space-around",
  //   overflow: "hidden",
  //   direction: "colums",
  // },

  media: {
    width: 300,
    height: 300,
  },
  card: {
    width: 200,
  },
  favorite: {
    height: 40,
    width: 40,
    color: "red",
    zIndex: -1,
    position: "relative",
  },
}));

function RecipeCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="h1">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* Here comes a text about the recipe */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.readyInMinutes} Time / Serving
        </Typography>

        <IconButton aria-label="add to favorites" className={classes.favorite}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
