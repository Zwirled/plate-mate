import React from "react";
import Container from '@mui/material/Container';
import SavedIngredients from "../../components/SavedIngredients";

function ShoppingList() {
    return (
        <main>
            <Container>
                <section>
                    <div>
                        <div>
                            <h1>Shopping List</h1>
                            <SavedIngredients />
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default ShoppingList;
