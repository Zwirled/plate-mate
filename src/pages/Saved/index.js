import React from 'react';
import Container from '@mui/material/Container';
import SavedRecipes from '../../components/SavedRecipes';

function Saved() {
    return (
        <main>
            <Container>
                <div>
                    <h1>Saved Plates</h1>
                    <SavedRecipes />
                </div>
            </Container>
        </main>
    );
}

export default Saved;