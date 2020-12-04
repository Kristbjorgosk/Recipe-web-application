import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

function NavbarFooter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      // setting up the size for mobile
      maxWidth="xs"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* the emojis are imported above */}
      <BottomNavigationAction label="Tips" icon={<EmojiObjectsIcon />} />
      <BottomNavigationAction label="Recipes" icon={<RestaurantIcon />} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

// imported in the app.js folder
export default NavbarFooter;
