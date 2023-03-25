import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

function RecipeModal(props) {
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
        width: 400,
        bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
        border: '2px solid currentColor',
        padding: '16px 32px 24px 32px',
    });

    const { title, ingredients, method, ...other } = props;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: Backdrop }}
                {...other}
            >
                <Box sx={style}>
                    <h2 id="unstyled-modal-title">{title}</h2>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {`${ingredient.amount} ${ingredient.name}`}
                            </li>
                        ))}
                    </ul>
                    <p>{method}</p>
                </Box>
            </StyledModal>
        </div>
    );
}

export default RecipeModal;