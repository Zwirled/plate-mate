import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import foodPlaceholder from "../../images/foodPlaceHolder.jpeg";
import Container from '@mui/material/Container';
import RecipeFeed from '../../components/RecipeFeed';

function Recipes() {
  return (
    <main>
      <RecipeFeed />
    </main>
  );
}

export default Recipes;
