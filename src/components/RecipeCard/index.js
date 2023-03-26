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
    // State to check whether the recipe modal is/isnt open, and for storing recipe data
    const [open, setOpen] = React.useState(false);
    const [recipeData, setRecipeData] = useState(null);

    // Function to open the recipe modal
    const handleOpen = () => {
        setOpen(true);
    };

    // Use effect to fetch recipe data from the API when the modal is open
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

    // Function to close the recipe modal
    const handleClose = () => {
        setOpen(false);
    };

    return (
        // Set up a grid item for the recipe card
        <Grid item xs={12} md={4} className="recipeCardItem">
            {/* Render a card with an image and the recipe name */}
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
                {/* Render a button to open the recipe modal */}
                <CardActions id="buttonContainer">
                    <ButtonUnstyled id="viewRecipeButton" onClick={handleOpen}>View recipe</ButtonUnstyled>
                </CardActions>
            </Card>
            {/* Render the recipe modal if recipe data is available */}
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