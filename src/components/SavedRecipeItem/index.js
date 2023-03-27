import React from 'react';
import useLocalStorage from '../LocalStorage'

function SavedRecipeItem() {

    //Saved recipes from local storage are stored in storeRecipe
    //Set items into local storage with setStoredRecipe: 
    //const [storedRecipe, setStoredRecipe] = useLocalStorage("Recipe", Recipe);

    const [storedRecipe] = useLocalStorage("Recipe");
    console.log("stored values", storedRecipe);


    // Retrieve saved recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    return (
        <div>
            {/* Map through the savedRecipes array and render the information for each recipe */}
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