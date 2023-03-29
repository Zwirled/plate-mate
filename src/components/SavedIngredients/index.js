import React, { useState, useEffect } from 'react';
import "./style.css";

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
            ) : (<>
                <div className="shoppingList">
                    <h2 className="savedIngredientsTitle">Saved Ingredients:</h2>
                    <ul className="ingredientList">
                        {savedIngredients.map((ingredient, index) => (
                            <li className="ingredientItem" key={index}>
                                {"- " + ingredient}
                                <button className="removeBtn" onClick={() => handleRemoveIngredient(ingredient)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                        <div className="paperEnd"></div>
                        </>
            )}
        </div>
    );
}

export default SavedIngredients;