import React, { useEffect } from 'react';

function Recipe() {
    useEffect(() => {
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const api = await fetch(
            // 'https://jsonplaceholder.typicode.com/posts?_limit=10'
            // 'https://restcountries.com/v2/name/France'
            // 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
            'https://www.themealdb.com/api/json/v1/1/search.php?f=a'

        );
        const data = await api.json();
        console.log(data);
    };
        return <div>Recipe</div>;
    }

    export default Recipe;