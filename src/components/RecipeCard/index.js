import React, { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import RecipeModal from '../RecipeModal';
import './style.css';

function RecipeCard({ name, image, id }) {
    const [open, setOpen] = React.useState(false);
    const [recipeData, setRecipeData] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (open && id) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setRecipeData(data.meals[0]);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [open, id]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid item xs={12} md={4} className="recipeCardItem">
            <Card>
                <CardMedia
                    component="img"
                    height="175"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <h2 className="recipeCardTitle">{name}</h2>
                </CardContent>
                <CardActions id="buttonContainer">
                    <ButtonUnstyled id="viewRecipeButton" onClick={handleOpen}>View recipe</ButtonUnstyled>
                </CardActions>
            </Card>
            {recipeData && (
                <RecipeModal
                    open={open}
                    onClose={handleClose}
                    name={recipeData.strMeal}
                    image={recipeData.strMealThumb}
                    ingredients={Object.entries(recipeData)
                        .filter(([key, value]) => key.startsWith('strIngredient') && value)
                        .map(([key, value]) => ({
                            name: value,
                            amount: recipeData[`strMeasure${key.slice(13)}`],
                        }))}
                    instructions={recipeData.strInstructions}
                />
            )}
        </Grid>
    );
}

export default RecipeCard;