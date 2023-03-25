import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';

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
        <div>
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
        </div>
    );
}

export default RecipeFeed;