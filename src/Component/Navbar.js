import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import RecipeFilterPage from "../RecipeFilterPage";
import { salmon, white } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TipsPage from "../TipsPage";
import FrontPage from "../FrontPage";
import Favourite from "../Favourite";
import Account from "../Account";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    overflow: "hidden",
    bottom: 0,
  },
});

function Navbar() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab
            to="/"
            component={Link}
            value={"/"}
            icon={<HomeIcon />}
            label="Home"
          />
          <Tab
            to="/Tipspage"
            component={Link}
            value={"TipsPage"}
            icon={<EmojiObjectsIcon />}
            label="Tips"
          />
          <Tab
            to="/Favourite"
            component={Link}
            value={"Favourite"}
            icon={<FavoriteIcon />}
            label="Favorite"
          />
          <Tab
            to="/RecipeFilterPage"
            component={Link}
            value={"RecipeFilterPage"}
            icon={<RestaurantIcon />}
            label="Recipes"
          />
          <Tab
            to="/Account"
            component={Link}
            value={"Account"}
            icon={<AccountCircleIcon />}
            label="Account"
          />
        </Tabs>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/Tipspage">
            <TipsPage />
          </Route>
          <Route path="/Favourite">
            <Favourite />
          </Route>
          <Route path="/RecipeFilterPage">
            <RecipeFilterPage />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
        </Switch>
      </Paper>
    </Router>
  );
}

export default Navbar;
