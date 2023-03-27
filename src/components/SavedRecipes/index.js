import React, { useState } from 'react';

function SavedRecipes() {
    // Retrieve saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    // Maintain a state variable to track the list of saved recipes
    const [recipes, setRecipes] = useState(savedRecipes);

    // Define a function to remove a recipe from local storage and the state variable
    const handleRemoveRecipe = (recipe) => {
        const updatedRecipes = recipes.filter((r) => r.name !== recipe.name);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
        setRecipes(updatedRecipes);
    };

    // Define a function to save an ingredient to local storage
    const handleSaveIngredient = (ingredient) => {
        const savedIngredients = JSON.parse(localStorage.getItem('savedIngredients')) || [];
        const ingredientExists = savedIngredients.some((savedIngredient) => savedIngredient === ingredient.name);

        if (!ingredientExists) {
            savedIngredients.push(ingredient.name);
            localStorage.setItem('savedIngredients', JSON.stringify(savedIngredients));
        }
    };

    return (
        <div>
            {/* If no saved recipes, display "No saved recipes" */}
            {savedRecipes.length === 0 ? (
                <p>No saved recipes</p>
            ) : (
                // Map through the savedRecipes array and render the information for each recipe
                savedRecipes.map((recipe, index) => (
                    <div key={index}>
                        <h2>{recipe.name}</h2>
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, i) => (
                                <li key={i}>
                                    {`${ingredient.name} - ${ingredient.amount}`}
                                    <button onClick={() => handleSaveIngredient(ingredient)}>Add to list</button>
                                </li>
                            ))}
                        </ul>
                        <h3>Instructions:</h3>
                        <p>{recipe.instructions}</p>
                        <button onClick={() => handleRemoveRecipe(recipe)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default SavedRecipes;