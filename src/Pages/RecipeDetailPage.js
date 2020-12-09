import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { render } from "react-dom";
import { apiKey } from "../Api";
import RecipeCard from "../Component/RecipeCard";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  instructionsList: {
    paddingTop: 20,
    fontSize: 18,
  },
}));

function RecipeDetailPage(props) {
  const classes = useStyles();
  const [info, setInfo] = useState();

  const params = useParams();
  const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((recipeDetails) => {
        setInfo(recipeDetails);
        // console.log(recipeDetails);
      });
  }, []);

  // To check if info is not defined
  // if (!info) {
  //   return null;
  // }
  console.log(info);
  return (
    <div>
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
