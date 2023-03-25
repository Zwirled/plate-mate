import React from 'react';
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import RecipeModal from '../RecipeModal';

function RecipeCard({ name, image, ingredients, instructions }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="175"
                            image={image}
                            alt={name}
                        />
                        <CardContent>
                            <h2>{name}</h2>
                            <div>
                                <h3>Ingredients:</h3>
                                <ul>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            {ingredient.amount} {ingredient.name}
                                        </li>
                                    ))}
                                </ul>
                                <h3>Method:</h3>
                                <p>{instructions}</p>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <CardActions id="buttonContainer">
                        <ButtonUnstyled id="viewRecipeButton" onClick={handleOpen}>View recipe</ButtonUnstyled>
                        <ButtonUnstyled id="saveButton">Save</ButtonUnstyled>
                    </CardActions>
                </Card>
            </Grid>
            <RecipeModal
                open={open}
                onClose={handleClose}
                title={name}
                ingredients={ingredients}
                method={instructions}
            />
        </div>
    );
}

export default RecipeCard;