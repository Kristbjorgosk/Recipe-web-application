import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import RecipeSearchForm from "./RecipeSearchForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "rgba(234, 242, 242, 0.9)",
    maxHeight: 700,
    paddingBottom: 12,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "spaceBetween",
  },
  icon: {
    height: 40,
    width: 40,
    color: "black",
    display: "flex",
  },
});

export default function RecipeFilterOverlay(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState([]);
  const [diet, setDiet] = React.useState("");
  const [maxReadyTime, setMaxReadyTime] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setRecipes([]);
    props.setOffset(0);
    props.setIngredients(ingredients);
    props.setDiet(diet);
    props.setMaxReadyTime(maxReadyTime);
    setOpen(false);
  };

  // adds ingredient to ingredient state array
  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  // removes ingredient from ingredient state array
  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  return (
    <div>
      <IconButton
        className={classes.icon}
        color="primary"
        aria-label="filter recipes"
        onClick={handleClickOpen}
      >
        <TuneRoundedIcon />
      </IconButton>

      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <DialogContent>
            <RecipeSearchForm
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              setDiet={setDiet}
              diet={props.diet}
              setMaxReadyTime={setMaxReadyTime}
              maxReadyTime={props.maxReadyTime}
              ingredients={ingredients}
            />
          </DialogContent>

          <DialogActions
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "spaceBetween",
            }}
          >
            <Button
              style={{
                backgroundColor: "#A2CCBE",
                color: "#293539",
                border: "none",
                height: 30,
                maxWidth: 200,
                height: 39,
                marginBottom: 15,
                borderRadius: "30px 30px 30px 30px",
              }}
              onClick={handleClose}
              color="primary"
            >
              Apply
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
