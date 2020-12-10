import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteButton from "./FavoriteButton";
import "fontsource-rufina";

const useStyles = makeStyles(() => ({
  recipiecard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  media: {
    height: 170,
    width: 350,
  },
  card: {
    width: 350,
    height: 320,
    borderRadius: 20,
  },

  cardtitile: {
    fontSize: 18,
    fontFamily: "rufina",
  },
  timeText: {
    margin: 0,
    fontSize: 16,
    fontFamily: "rufina",
    paddingLeft: 17,
  },
}));

function RecipeCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.recipiecard}>
      <Card className={classes.card}>
        <Link to={`/${props.recipe.id}`}>
          <CardMedia className={classes.media} image={props.recipe.image} />
        </Link>

        <CardContent>
          <Link
            to={`/${props.recipe.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              className={classes.cardtitile}
              gutterBottom
              component="h1"
            >
              {props.recipe.title}
            </Typography>
          </Link>
        </CardContent>
        <CardActions>
          <Typography className={classes.timeText} component="p">
            {props.recipe.readyInMinutes} min |&nbsp;
            {props.recipe.servings} Servings
          </Typography>

          <FavoriteButton
            aria-label="add to favorites"
            className={classes.favorite}
            recipe={props.recipe}
          />
        </CardActions>
      </Card>
    </div>
  );
}

export default RecipeCard;
