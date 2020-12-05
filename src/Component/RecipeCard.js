import React from "react";
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
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: 180,
    height: 200,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  favorite: {
    height: 40,
    width: 40,
    color: "red",
  },
}));

function RecipeCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="h1">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Here comes a text about the recipe
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          Time / Servings: {""}
        </Typography>

        <IconButton aria-label="add to favorites" className={classes.favorite}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;