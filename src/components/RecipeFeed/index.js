import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import './style.css';

function RecipeFeed() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const api = await fetch(
            'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
        );
        const data = await api.json();
        const meals = data.meals || [];

        setRecipes(meals);
        console.log(meals);
    };

    return (
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

            </Grid>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.idMeal}
                    name={recipe.strMeal}
                    image={recipe.strMealThumb}
                    ingredients={Object.entries(recipe)
                        .filter(([key, value]) => key.startsWith('strIngredient') && value)
                        .map(([key, value]) => ({
                            name: value,
                            amount: recipe[`strMeasure${key.slice(13)}`],
                        }))}
                    instructions={recipe.strInstructions}
                />
            ))}
        </Container>
    );
}

export default RecipeFeed;