import React, { useEffect } from 'react';

function RecipeApi() {
    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const api = await fetch(
            'https://www.themealdb.com/api/json/v1/1/list.php?c=list'

        );
        const data = await api.json();
    };
    return <div>Check out the console for the objects returned from TheMealDB</div>;
}

export default RecipeApi;