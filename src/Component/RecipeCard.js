import React, { useState, useEffect } from "react";
import { apiKey } from "../Api";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import FavoriteButton from "./FavoriteButton";

const useStyles = makeStyles((theme) => ({
  recipiecard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: 310,
    width: 350,
  },
  card: {
    width: 350,
    height: 500,
    borderRadius: 20,
    paddingBottom: 15,
  },

  text: {
    textDecoration: "none",
    fontSize: 25,
  },
}));

function RecipeCard(props) {
  const [expanded, setExpanded] = useState();

  const params = useParams();
  const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((recipecard) => {
        setExpanded(recipecard);
        console.log(recipecard);
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <Link to={`/${props.id}`} style={{ textDecoration: "none" }}>
      <div className={classes.recipiecard}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={props.image} />

          <CardContent>
            <Typography
              className={classes.text}
              gutterBottom
              variant="body1"
              component="h1"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {/* Here comes a text about the recipe */}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Typography
              className={classes.text}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Time
            </Typography>

            <FavoriteButton
              aria-label="add to favorites"
              className={classes.favorite}
              recipeId={props.id}
            />
          </CardActions>
        </Card>
      </div>
    </Link>
  );
}

export default RecipeCard;
