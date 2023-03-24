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
import RecipeApi from '../../components/RecipeApi';

function Recipes() {
  return (
    <main>
      <RecipeApi />
      <Container>
      <h1>Recipe & Meal Ideas</h1>
      <Grid id="filter" container spacing={1} columns={10}>
        <Grid item xs={5} md={2}>
          <Typography>Filter:</Typography>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
        <Grid item xs={5} md={2}>
          <ButtonUnstyled size="small" color="primary">
            Option
          </ButtonUnstyled>
        </Grid>
      </Grid>
      <Grid id="feedGrid" container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={foodPlaceholder}
                alt="Lemon Pie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lemon Pie
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions id="buttonContainer">
              <ButtonUnstyled id="saveButton">Save</ButtonUnstyled>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={foodPlaceholder}
                alt="Lemon Pie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lemon Pie
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={foodPlaceholder}
                alt="Lemon Pie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lemon Pie
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </Container>
    </main>
  );
}

export default Recipes;
