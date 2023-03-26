import React, { useEffect, useState, useCallback } from 'react';
import RecipeFilter from '../RecipeFilter';
import RecipeCard from '../RecipeCard';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import './style.css';

function RecipeFeed() {

    // Declare state variables using the useState hook
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Define a function using the useCallback hook to retrieve recipe data from a user-selected category
    const getRecipes = useCallback(async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        const data = await api.json();
        const meals = data.meals || [];

        setRecipes(meals);
    }, [selectedCategory]);

    // Update the recipes in the feed based on the selected category
    useEffect(() => {
        if (selectedCategory) {
            getRecipes();
        } else {
            setRecipes([]);
        }
    }, [selectedCategory, getRecipes]);

    // Updates the selected category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Render the component with the updated state and user interactions
    return (
        <Container className="feed">
            <h1>Recipe & Meal Ideas</h1>
            <RecipeFilter onCategoryChange={handleCategoryChange} />
            {selectedCategory ? (
                <Grid id="feedGrid" container spacing={0}>
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.idMeal}
                            name={recipe.strMeal}
                            image={recipe.strMealThumb}
                            id={recipe.idMeal}
                        />
                    ))}
                </Grid>
            ) : (
                <p>No results. Please try again.</p>
            )}
        </Container>
    );
}

export default RecipeFeed;