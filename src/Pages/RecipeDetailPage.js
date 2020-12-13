import React, { useState, useEffect } from "react";
import { apiKey } from "../Api";
import RecipeCard from "../Component/RecipeCard";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import "fontsource-rufina";

// styling for everything on this page
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#789D91",
    padding: 20,
  },
  instructionsList: {
    paddingTop: 20,
    fontSize: 16,
    backgroundColor: "#EAF2F2",
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
    fontFamily: "sarabun",
    fontWeight: 400,
    listStyle: "none",
  },
}));

function RecipeDetailPage(props) {
  const classes = useStyles();
  /* Declare a new state variable, in this case we call it info  */
  const [info, setInfo] = useState();

  const params = useParams();

  /* fetching the data we need from the API url */
  useEffect(() => {
    const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;
    fetch(URL)
      .then((r) => r.json())
      /* passing the data we fetch as "recipeDetails" */
      .then((recipeDetails) => {
        console.log(recipeDetails);
        /* make setInfo equal to recipeDetail (the data that is fetched from the APU url) */
        setInfo(recipeDetails);
      });
  }, [params]);

  return (
    <div className={classes.root}>
      {/* Show if info is defined */}
      {!!info && (
        <>
          {/* passing the API info in the recipeCard */}
          <RecipeCard recipe={info}></RecipeCard>

          <ul className={classes.instructionsList}>
            {/* mapping through the ingredients and displaying them in a list */}
            {info.extendedIngredients.map((item) => {
              return <li>{item.originalString}</li>;
            })}
          </ul>

          <div
            className={classes.instructionsList}
            /* the instruction list already had html markdown so we will use that and 
            display in on the page (some recipe have markdown, othoer dont) */
            dangerouslySetInnerHTML={{ __html: info.instructions }}
          />
        </>
      )}
    </div>
  );
}

export default RecipeDetailPage;
