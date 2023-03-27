import React from 'react';
import SavedRecipes from '../../components/SavedRecipes';

function Saved() {
    return (
        <section>
            <div>
                <h1>Saved Plates</h1>
                <SavedRecipes />
            </div>
        </section>
    );
}

export default Saved;