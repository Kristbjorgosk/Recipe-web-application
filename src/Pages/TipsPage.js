import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import Divider from "@material-ui/core/Divider";
import "fontsource-quicksand";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EAF2F2",
    height: "100%",
    color: "#161F22",
    paddingBottom: 100,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  tipHeadline: {
    color: "#161F22",
    fontSize: 49,
    paddingLeft: 15,
    paddingBottom: 50,
    justifyContent: "center",
    display: "flex",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    maxWidth: 50,
    maxHeight: 50,
  },
  expandOpen: {
    transform: "rotate(180deg)",
    maxWidth: 50,
    maxHeight: 50,
  },
  tip1: {
    backgroundColor: "#A2CCBE",
    marginBottom: 15,
    maxWidth: 450,
    borderRadius: 20,
  },
  tip2: {
    backgroundColor: "#A2CCBE",
    marginBottom: 15,
    maxWidth: 450,
    borderRadius: 20,
  },
  tip3: {
    backgroundColor: "#A2CCBE",
    marginBottom: 15,
    maxWidth: 450,
    borderRadius: 20,
  },
}));

function TipsPage() {
  const classes = useStyles();
  const [showFirstTip, setShowFirstTip] = React.useState(false);
  const [showSecondTip, setShowSecondTip] = React.useState(false);
  const [showThirdTip, setShowThirdTip] = React.useState(false);

  const handleShowFirstTipClick = () => {
    setShowFirstTip(!showFirstTip);
  };
  const handleShowSecondTipClick = () => {
    setShowSecondTip(!showSecondTip);
  };
  const handleShowThirdTipClick = () => {
    setShowThirdTip(!showThirdTip);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.tipHeadline}>Tips & Ideas </Typography>
      <div className={classes.tip1}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          BEGINNERS GUIDE
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: showFirstTip,
            })}
            onClick={handleShowFirstTipClick}
            aria-expanded={showFirstTip}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>{" "}
        </p>
        <Collapse in={showFirstTip} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              At the end of the day, like everything else in life, cooking boils
              down to practise. So… while you’re in a safe environment with all
              the ingredients around you, have a go. Make a mess and burn
              everything. You will only get better by making mistakes and
              learning from them. Get some tuition from your mum, mates, Nigella
              or whoever is brave enough to teach you. Don’t be shy about
              admitting that you are a bit inept in the cookery department; you
              will get better.
            </Typography>
            <Typography paragraph>
              Start small and build up. Find a easy recipe with few ingredients
              that you like. Don´t worry if it isn´t the tastiest, its a start
              and you made it by yourself. Be proud.Here are some suggestions:
            </Typography>

            <Typography paragraph variant="h5">
              Classic easy beginner dishes
            </Typography>
            <Typography paragraph>
              - Scrambled eggs <br /> - Hamburgers <br /> - Spaghetti Bolognese{" "}
              <br /> - Oven baked chicken/veggies <br /> - Pesto Pasta <br />
            </Typography>
            <Typography paragraph>
              “Knowing how to cook is the most beneficial skill one can learn
              because it affects one’s life in so many positive ways. Most
              importantly, it will improve your health and relationship with
              food by allowing you to take control over what you eat.”
            </Typography>
            <Typography paragraph>- Ranelle Kirchner</Typography>
            <IconButton
              onClick={handleShowFirstTipClick}
              aria-expanded={showFirstTip}
              aria-label="close tip"
            >
              <CloseRoundedIcon />
            </IconButton>
          </CardContent>
        </Collapse>
      </div>
      <div className={classes.tip2}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          {" "}
          KITCHEN FLOW
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: showSecondTip,
            })}
            onClick={handleShowSecondTipClick}
            aria-expanded={showSecondTip}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>{" "}
        </p>
        <Collapse in={showSecondTip} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              You can scrub and declutter your kitchen to sparkling perfection,
              but if your mugs are a mile away from the coffee pot and your
              cooking spices are buried in the pantry, it won’t stay that way
              for long. That is an issue of poor kitchen “flow”. Kitchen flow is
              strategic item placement that will inevitably make your cooking
              and cleaning routine way more seamless.
            </Typography>
            <Typography paragraph>
              Here are some tips to improve your flow to ensure a better time in
              the kitchen by minimizing stress and making the cooking progress
              simpler.
            </Typography>
            <Typography paragraph variant="h5">
              1. Organize in “zones”
            </Typography>
            <Typography paragraph>
              Copy good chefs and designers and think about your kitchen as a
              series of dedicated areas. For example; zone for prepping food,
              cooking food, storing food, eating food, etc. The general rule of
              thumb is to keep like items with like items so that you: 1. Know
              where to find them and 2. Know what you actually have so that
              don’t overbuy and end up with 6 bags of rice.
            </Typography>

            <Typography paragraph variant="h5">
              2. Store seasonally
            </Typography>
            <Typography paragraph>
              So how do you get this extra counter space for dedicated “zones”?
              Easy. You pack away your sweaters and coats when spring temps
              return—but are you doing the same for your Crock-Pot and cookie
              sheets? Like closets, kitchens should be modeled for seasonal
              efficiency, so you don’t waste valuable easy-access storage space
              on items that won’t be used for several months. Instead, stash
              off-season items in your garage or a spare cabinet, then pull out
              timely favorites (like your lemonade pitcher and ice-cream maker)
              come summertime.
            </Typography>
            <Typography paragraph variant="h5">
              3. Keep spices on hand
            </Typography>
            <Typography paragraph>
              Storing ingredients you cook with regularly far from your stove is
              a silly way to add extra time to meal prep. Speed up your daily
              cooking routines by putting oils and spices somewhere sensible—aka
              actually near the stove. Ideally, these guys should be stowed in a
              stove-adjacent cupboard (to reduce visual clutter), but if that
              isn’t in the cards, use a stylish tray on your counter to corral
              everyday essentials.
            </Typography>
            <Typography paragraph variant="h5">
              4. Cater to your dishwasher
            </Typography>
            <Typography paragraph>
              OK, not to bemoan the dishwasher (they’re literally the best thing
              to happen to kitchens ever), but unloading it can be taxing on our
              back. To make dishwasher unloading less of a workout, store
              dishes, glasses and silverware as close as possible to the
              dishwasher. Clear cabinet space near your dishwasher, then remove
              freshly cleaned dishes and return them to their rightful place in
              one fell swoop.
            </Typography>
            <Typography paragraph variant="h5">
              5. Clean while cooking
            </Typography>
            <Typography paragraph>
              So you have finished chopping and are waiting for the water to
              start boiling? Don´t go into your phone, the moments in between
              steps are precious. Use this time to do little tasks, like putting
              away that bag of carrots, throwing away the cucumber wrapping and
              the cut-offs from chopping, putting the used souce pot in the sink
              with water (to make it easier to clean up later). All these tasks
              add up. After eating there is much less mess to clean up.
            </Typography>
            <Typography paragraph variant="h5">
              6. Set up stations for your favorites
            </Typography>
            <Typography paragraph>
              Does your world revolve around coffee? Make a mini coffee station
              with all the fixings like sugar, mugs, coffee beans and french
              press, grouped in one place. Avid baker? Set up a nifty little
              baking station for the next time you make cookies. You’ll save
              energy and can show off your favorite part of the kitchen.
            </Typography>
            <IconButton
              onClick={handleShowSecondTipClick}
              aria-expanded={showSecondTip}
              aria-label="close tip"
            >
              <CloseRoundedIcon />
            </IconButton>
          </CardContent>
        </Collapse>
      </div>
      <div className={classes.tip3}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          {" "}
          ENJOY COOKING
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: showThirdTip,
            })}
            onClick={handleShowThirdTipClick}
            aria-expanded={showThirdTip}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>{" "}
        </p>
        <Collapse in={showThirdTip} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>"healthy eating is too hard"</Typography>
            <Typography paragraph>"I hate cooking"</Typography>
            <Typography paragraph>
              {" "}
              "it's impossible to cook for one"
            </Typography>
            <Typography paragraph>
              {" "}
              "going to the grocery store pains me"
            </Typography>
            <Typography paragraph>
              {" "}
              "it's too expensive to cook at home when I usually end up throwing
              out ingredients before I can even use them"
            </Typography>
            <Typography paragraph>
              "I can´t make and follow a meal plan"
            </Typography>

            <Typography paragraph>"I can´t do this"</Typography>
            <Typography paragraph>
              The list goes on, but you get the picture. People have a lot of
              objections to cooking for themselves. Grabbing a bite to eat
              somewhere else seems like a much better idea. Less effort, less
              time, less stress. Easier.
            </Typography>

            <Typography paragraph>
              But here's a secret: It's not less effort. It's not less time.
              It's not less stress. And it's not easier if you know what you're
              doing. You can actually enjoy cooking and save time, money &
              stress!
            </Typography>
            <Typography paragraph>
              Cooking doesn't have to be a chore. Here are some tips to actually
              enjoy cooking
            </Typography>

            <Typography paragraph variant="h5">
              1. Set up your kitchen
            </Typography>
            <Typography paragraph>
              Have the right tools so your kitchen is set up for success. A good
              knife, a solid cutting board, and a sturdy skillet or pot are the
              three basic things you must have.
            </Typography>
            <Typography paragraph variant="h5">
              2. Don't be so Hard on Yourself
            </Typography>
            <Typography paragraph>
              Mistakes in the kitchen are bound to happen. Try to learn
              something from them.Maybe you tried to bake brownies in a 9-inch
              pan instead of an 8-inch pan and they burned. Or maybe you got a
              little heavy handed with the salt because you thought you totally
              didn't need to measure out 1/2 teaspoon... you could guess it
              right? Then your food was a wee bit too salty. It happens to
              everyone! Remember, no need to be a gourmet cook. You're not
              expected to make elaborate meals a week after you start cooking
              (or ever).
            </Typography>
            <Typography paragraph variant="h5">
              3. Know the basics
            </Typography>
            <Typography paragraph>
              Knowing a few basic cooking methods will make your life infinitely
              easier. If you know how to roast a chicken, make the perfect rice
              and sauté vegetables then you've got multiple meals you can make
              already in the bag.
            </Typography>
            <Typography paragraph variant="h5">
              4. Pick favorites
            </Typography>
            <Typography paragraph>
              Do you have any favorite meals or recipes? Keep those in the
              weekly rotation. Don't make them every single week, but having a
              few stand-by favorites is extremely helpful when it comes to
              planning your meals.
            </Typography>
            <Typography paragraph variant="h5">
              5. Experiment
            </Typography>
            <Typography paragraph>
              Try something new! New vegetables or different cooking methods.
              Vary your cooking methods: steam, sauté, bake, roast, broil,
              poach, etc. Vary flavorings and sides; try different herbs &
              spices, look for new vegetables to try. However, be sure to have
              something familiar on your plate in case you don't love the new
              food. Do remember to keep an open mind.
            </Typography>
            <Typography paragraph variant="h5">
              6. Put on some music!
            </Typography>
            <Typography paragraph>
              Get your headphones or speaker and put on your favorite playlist.
              Take little dance breaks while something is in the oven and just
              jam out. Music can help you get in the mood and make this moment
              more enjoyable.
            </Typography>
            <Typography paragraph variant="h5">
              7. Cook with friends and family
            </Typography>
            <Typography paragraph>
              Food has brought people together for centuries. Use this time to
              connect to the people in your life. Bring your heads together to
              make a great meal you can share together. Divide tasks and enjoy
              each others company.
            </Typography>
            <Typography paragraph variant="h5">
              8. Just be
            </Typography>
            <Typography paragraph>
              For many people the act of preparing meals is a stress reliver. It
              can be a great moment to meditate, focus on the task at hand and
              put all events over the day to the side. Be aware of your
              movements, the smells and your surroundings. Its just you, in this
              moment making a meal.
            </Typography>
            <IconButton
              onClick={handleShowThirdTipClick}
              aria-expanded={showThirdTip}
              aria-label="close tip"
            >
              <CloseRoundedIcon />
            </IconButton>
          </CardContent>
        </Collapse>
      </div>
    </div>
  );
}

export default TipsPage;
