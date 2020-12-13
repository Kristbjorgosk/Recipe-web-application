import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    bottom: 0,
    backgroundColor: "#EAF2F2",
    paddingBottom: 12,
    boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.15)",
  },
});

function Navbar() {
  const classes = useStyles();

  /*  Declare a new state variable, in this case we call it info  */
  const [value, setValue] = React.useState(0);

  /* when clicked on each tab / icon the navigate to the value it holds */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className={classes.root}
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="#3898A5"
      textColor="3898A5"
      aria-label="icon label tabs example"
    >
      {/* using Link from react router to navigate to a different page */}
      <Tab to="/" component={Link} value={"/"} icon={<HomeIcon />} />
      <Tab
        to="/Tipspage"
        component={Link}
        value={"TipsPage"}
        icon={<EmojiObjectsIcon />}
      />

      <Tab
        to="/RecipesFilterPage"
        component={Link}
        value={"RecipesFilterPage"}
        icon={<RestaurantIcon />}
      />
      <Tab
        to="/FavouritesPage"
        component={Link}
        value={"Favourite"}
        icon={<FavoriteIcon />}
      />
    </Tabs>
  );
}

export default Navbar;
