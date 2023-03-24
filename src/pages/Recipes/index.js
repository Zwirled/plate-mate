import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import foodPlaceholder from "../../images/foodPlaceHolder.jpeg";

function Recipes() {
  return (
    <main>
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
    </main>
  );
}

export default Recipes;
