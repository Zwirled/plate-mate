import React from 'react';

function SavedRecipeItem() {
    // retrieve saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    return (
        <div>
            {savedRecipes.map((recipe, index) => (
                <div key={index}>
                    <h2>{recipe.name}</h2>
                    <img src={recipe.image} alt={recipe.name} />
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{`${ingredient.name} - ${ingredient.amount}`}</li>
                        ))}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{recipe.instructions}</p>
                </div>
            ))}
        </div>
    );
}

export default SavedRecipeItem;