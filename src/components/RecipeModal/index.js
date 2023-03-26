import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import './style.css';

function RecipeModal(props) {
    // State hook for modal open/closed status
    const [open, setOpen] = useState(false);

    // Backdrop component for the modal
    const BackdropUnstyled = React.forwardRef((props, ref) => {
        const { open, className, ...other } = props;
        return (
            <div
                className={clsx({ 'MuiBackdrop-open': open }, className)}
                ref={ref}
                {...other}
            />
        );
    });

    // Prop types for BackdropUnstyled
    BackdropUnstyled.propTypes = {
        className: PropTypes.string.isRequired,
        open: PropTypes.bool,
    };

    // Style the modal component using MUI
    const StyledModal = styled(ModalUnstyled)`
      position: fixed;
      z-index: 1300;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    // Style the backdrop component
    const Backdrop = styled(BackdropUnstyled)`
      z-index: -1;
      position: fixed;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-tap-highlight-color: transparent;
    `;

    // Styles for the RecipeModal component
    const style = (theme) => ({
    });

    // Extract required props from parent component
    const { name, image, ingredients, instructions, ...other } = props;

    // Handle function - close the modal
    const handleClose = () => {
        setOpen(false);
    };

    // Handle function - save the recipe in local storage
    const handleSave = () => {
        if (props) {
            const newRecipe = {
                name: name || '',
                image: image || '',
                ingredients: ingredients
                    .filter((ingredient) => ingredient.name && ingredient.amount)
                    .map((ingredient) => {
                        return {
                            name: ingredient.name,
                            amount: ingredient.amount,
                        };
                    }),
                instructions: instructions || '',
            };
            const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
            savedRecipes.push(newRecipe);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        }
    };

    return (
        <div>
            <StyledModal className="recipeModal"
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                {...other}
            >
                <Box sx={style} className="recipeModalContainer">
                    <div className="left">
                        <img className="recipeModalImage" src={image} alt={name} />
                    </div>
                    <div className="right">
                        <div className="recipeModalTop">
                            <h2 className="recipeModalTitle">{name}</h2>
                            <ButtonUnstyled id="saveButton" onClick={handleSave}>Save recipe</ButtonUnstyled>
                        </div>
                        <div>
                            <h3>Ingredients:</h3>
                            <ul className="recipeModalList">
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                        {`${ingredient.amount} ${ingredient.name}`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Method:</h3>
                            <p>{instructions}</p>
                        </div>
                    </div>
                </Box>
            </StyledModal>
        </div>
    );
}

export default RecipeModal;