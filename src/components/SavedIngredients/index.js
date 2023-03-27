import React, { useState, useEffect } from 'react';

function SavedIngredients() {
    const [savedIngredients, setSavedIngredients] = useState([]);

    useEffect(() => {
        const savedIngredientsFromStorage = JSON.parse(localStorage.getItem('savedIngredients')) || [];
        setSavedIngredients(savedIngredientsFromStorage);
    }, []);

    const handleRemoveIngredient = (ingredientName) => {
        const updatedIngredients = savedIngredients.filter((ingredient) => ingredient !== ingredientName);
        localStorage.setItem('savedIngredients', JSON.stringify(updatedIngredients));
        setSavedIngredients(updatedIngredients);
    };

    return (
        <div>
            {savedIngredients.length === 0 ? (
                <p>No saved ingredients</p>
            ) : (
                <>
                    <h2>Saved Ingredients:</h2>
                    <ul>
                        {savedIngredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient}
                                <button onClick={() => handleRemoveIngredient(ingredient)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default SavedIngredients;