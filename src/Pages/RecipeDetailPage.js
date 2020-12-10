import React, { useState, useEffect } from "react";
import { apiKey } from "../Api";
import RecipeCard from "../Component/RecipeCard";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import "fontsource-rufina";

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
  },
}));

function RecipeDetailPage(props) {
  const classes = useStyles();
  const [info, setInfo] = useState();

  const params = useParams();

  useEffect(() => {
    const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;
    fetch(URL)
      .then((r) => r.json())
      .then((recipeDetails) => {
        setInfo(recipeDetails);
      });
  }, [params]);

  return (
    <div className={classes.root}>
      {/* Show if info is defined */}
      {!!info && (
        <>
          <RecipeCard recipe={info}></RecipeCard>

          <div
            className={classes.instructionsList}
            dangerouslySetInnerHTML={{ __html: info.instructions }}
          />
        </>
      )}
    </div>
  );
}

export default RecipeDetailPage;
