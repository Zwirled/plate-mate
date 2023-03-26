import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import './style.css';

function RecipeModal(props) {
    const [open, setOpen] = useState(false);

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

    BackdropUnstyled.propTypes = {
        className: PropTypes.string.isRequired,
        open: PropTypes.bool,
    };

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

    const style = (theme) => ({
    });

    const { name, image, ingredients, instructions, ...other } = props;

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
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
                        <div>
                            <h2 className="recipeModalTitle">{name}</h2>
                        </div>
                        <div>
                            <h3>ID</h3>
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