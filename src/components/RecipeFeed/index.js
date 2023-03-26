import React, { useEffect, useState, useCallback } from 'react';
import RecipeFilter from '../RecipeFilter';
import RecipeCard from '../RecipeCard';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import './style.css';

function RecipeFeed() {
    const [recipes, setRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const getRecipes = useCallback(async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        const data = await api.json();
        const meals = data.meals || [];

        setRecipes(meals);
    }, [selectedCategory]);

    useEffect(() => {
        if (selectedCategory) {
            getRecipes();
        } else {
            setRecipes([]);
        }
    }, [selectedCategory, getRecipes]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

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