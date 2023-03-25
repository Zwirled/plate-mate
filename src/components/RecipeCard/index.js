import React from 'react';

function RecipeCard(props) {
    const { recipe } = props;

    return (
        <div>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
        </div>
    );
}

export default RecipeCard;