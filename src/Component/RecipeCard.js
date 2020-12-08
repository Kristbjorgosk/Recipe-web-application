import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteButton from "./FavoriteButton";
import { red } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import RecipeFilterPage from "../Pages/RecipesFilterPage";
import RecipeSearchForm from "./RecipeSearchForm";
import RecipeDetailPage from "../Pages/RecipeDetailPage";

const useStyles = makeStyles((theme) => ({
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
    <Link to={`/${props.id}`}>
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
            {props.maxReadyTime}
            Time / Serving
          </Typography>

          <FavoriteButton
            aria-label="add to favorites"
            className={classes.favorite}
            recipeId={props.id}
          />
        </CardActions>
      </Card>
    </Link>
  );
}

export default RecipeCard;
