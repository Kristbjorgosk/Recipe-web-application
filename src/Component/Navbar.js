import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import RecipesFilterPage from "../Pages/RecipesFilterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TipsPage from "../Pages/TipsPage";
import FrontPage from "../Pages/FrontPage";
import FavouritePage from "../Pages/FavouritePage";
import Account from "../Pages/Account";
import RecipeDetailPage from "../Pages/RecipeDetailPage";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    overflow: "hidden",
    bottom: 0,
    backgroundColor: "#EAF2F2",
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
      <Tabs
        className={classes.root}
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
          to="/FavouritePage"
          component={Link}
          value={"Favourite"}
          icon={<FavoriteIcon />}
          label="Favorite"
        />
        <Tab
          to="/RecipesFilterPage"
          component={Link}
          value={"RecipesFilterPage"}
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
        <Route path="/FavouritePage">
          <FavouritePage />
        </Route>
        <Route path="/RecipesFilterPage">
          <RecipesFilterPage />
        </Route>
        <Route path="/Account">
          <Account />
        </Route>
        <Route path="/:id">
          <RecipeDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
