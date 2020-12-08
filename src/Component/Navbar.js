import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
        to="/FavouritesPage"
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
  );
}

export default Navbar;