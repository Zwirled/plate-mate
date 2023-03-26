import React, { useState } from 'react';
import { Grid } from "@mui/material";
import './style.css';

function RecipeFilter(props) {
    const [selectedCategory, setSelectedCategory] = useState(''); const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        props.onCategoryChange(event.target.value);
    };

    return (
        <div>
            <Grid id="filter" container spacing={1} columns={12} className="">
                <Grid item xs={12} md={12} className="filterContainer">
                    <select className="filter" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        <option value="Beef">Beef</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Goat">Goat</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Pork">Pork</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Side">Side</option>
                        <option value="Starter">Starter</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                    </select>
                </Grid>
            </Grid>
        </div>
    );
}

export default RecipeFilter;