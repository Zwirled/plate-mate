import React, { useEffect, useState } from 'react';
import RecipeFilter from '../RecipeFilter';
import RecipeCard from '../RecipeCard';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import './style.css';

function RecipeFeed() {
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Seafood'); useEffect(() => {
        getRecipes();
    }, [selectedCategory]);

    const getRecipes = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        const data = await api.json();
        const meals = data.meals || [];

        setRecipes(meals);
        console.log(meals);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Container>
            <h1>Recipe & Meal Ideas</h1>
            <RecipeFilter onCategoryChange={handleCategoryChange} />
            <Grid id="feedGrid" container spacing={0}>
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
            </Grid>
        </Container>
    );
}

export default RecipeFeed;