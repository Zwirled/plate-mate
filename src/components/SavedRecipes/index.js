import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./style.css";

function SavedRecipes() {
  // Retrieve saved recipes from localStorage
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  // Maintain a state variable to track the list of saved recipes
  const [recipes, setRecipes] = useState(savedRecipes);

  // Define a function to remove a recipe from local storage and the state variable
  const handleRemoveRecipe = (recipe) => {
    const updatedRecipes = recipes.filter((r) => r.name !== recipe.name);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
  };

  // Define a function to save an ingredient to local storage
  const handleSaveIngredient = (ingredient) => {
    const savedIngredients =
      JSON.parse(localStorage.getItem("savedIngredients")) || [];
    const ingredientExists = savedIngredients.some(
      (savedIngredient) => savedIngredient === ingredient.name
    );

    if (!ingredientExists) {
      savedIngredients.push(ingredient.name);
      localStorage.setItem(
        "savedIngredients",
        JSON.stringify(savedIngredients)
      );
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
            <Grid className="container" container spacing={2}>
              <Grid item sm={12}>
                <h2 className="recipeTitle">{recipe.name}</h2>
              </Grid>
              <Grid item sm={6}>
                <img src={recipe.image} alt={recipe.name} />
              </Grid>
              <Grid className="ingredients" item sm={6}>
                <h3 className="ingredientsTitle">Ingredients:</h3>
                <ul className="ingredientsList">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li className="listItem" key={i}>
                      {`${ingredient.name} - ${ingredient.amount}`}
                      <button
                        className="ingredientBtn"
                        onClick={() => handleSaveIngredient(ingredient)}
                      >
                        Add to list
                      </button>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item sm={12}>
                <h3 className="instructionsTitle">Instructions:</h3>
                <p className="recipeInstructions">{recipe.instructions}</p>
                <button
                  className="removeRecipe"
                  onClick={() => handleRemoveRecipe(recipe)}
                >
                  Remove
                </button>
              </Grid>
            </Grid>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedRecipes;
