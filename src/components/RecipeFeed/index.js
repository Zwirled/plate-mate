import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';

function RecipeFeed() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch(
            'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
        );
        const data = await response.json();
        const meals = data.meals || [];

        setRecipes(meals);
    };

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipeFeed;