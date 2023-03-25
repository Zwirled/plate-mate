import React from 'react';

function RecipeCard({ name, image, ingredients, instructions }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.amount}
          </li>
        ))}
          </ul>
          <h3>Method:</h3>
          <p>{instructions}</p>
    </div>
  );
}

export default RecipeCard;