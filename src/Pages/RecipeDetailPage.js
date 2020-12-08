import React, { useState, useEffect } from "react";
import { apiKey } from "../Api";
import RecipeCard from "../Component/RecipeCard";

import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function RecipeDetailPage(props) {
  const [info, setInfo] = useState();

  const params = useParams();
  const URL = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((recipeDetails) => {
        setInfo(recipeDetails);
        console.log(recipeDetails);
      });
  }, []);

  // To check if info is not defined
  // if (!info) {
  //   return null;
  // }

  return (
    <div>
      {/* Show if info is defined */}
      {!!info && (
        <>
          <Typography gutterBottom variant="body1" component="h1">
            Þetta er Recipe Detail Síðan
          </Typography>
          <img src={info.image} />
        </>
      )}
      Þetta er url
      {URL}
    </div>
  );
}

export default RecipeDetailPage;
