import React from 'react';
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import RecipeModal from '../RecipeModal';
import './style.css';

function RecipeCard({ name, image, ingredients, instructions }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

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
                        <h2>{name}</h2>
                    </CardContent>
                <CardActions id="buttonContainer">
                    <ButtonUnstyled id="viewRecipeButton" onClick={handleOpen}>View recipe</ButtonUnstyled>
                    <ButtonUnstyled id="saveButton">Save</ButtonUnstyled>
                </CardActions>
            </Card>
            <RecipeModal
                open={open}
                onClose={handleClose}
                image={image}
                title={name}
                ingredients={ingredients}
                method={instructions}
            />
        </Grid>
    );
}

export default RecipeCard;