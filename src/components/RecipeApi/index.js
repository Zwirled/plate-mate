import React, { useEffect } from 'react';

function RecipeApi() {
    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const api = await fetch(
            'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

        );
        const data = await api.json();
        console.log(data);
    };
    return <div>Check out the console for the objects returned from TheMealDB</div>;
}

export default RecipeApi;