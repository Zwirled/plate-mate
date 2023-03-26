import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './style.css';


function Navigation() {
    // Set initial state for mobile navigation
    const [isOpen, setIsOpen] = useState(false);

    // React Router - array of pages and url paths
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Recipe feed', path: '/recipes' },
        { name: 'Saved plates', path: '/saved' },
        { name: 'Shopping list', path: '/shopping-list' },
    ];

    // Handling mobile navigation click
    useEffect(() => {
        const mobElement = document.querySelector('.mob');
        mobElement.addEventListener('click', () => {
            setIsOpen(!isOpen);
        });

        // Remove event listener
        return () => {
            mobElement.removeEventListener('click', () => {
                setIsOpen(!isOpen);
            });
        };
    }, [isOpen]);

    // Render navigation component
    return (
        <div className="navigationContainer">
            <Container maxWidth="lg">
                <Grid container spacing={0} >
                    <Grid xs={12}>
                        <nav className="navDesktop">
                            <ul className={`pages ${isOpen ? 'open' : ''}`}>
                                {pages.map((page) => (
                                    <li className="navItem" key={page.path}>
                                        <NavLink
                                            to={page.path}
                                            end={page.end}
                                            className={({ isActive }) =>
                                                isActive ? 'nav-link active' : 'nav-link'
                                            }
                                        >
                                            <ButtonUnstyled>
                                                {page.name}
                                            </ButtonUnstyled>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <nav className="navMobile">
                            <div className="mob">
                                <ButtonUnstyled>
                                    Menu
                                </ButtonUnstyled>
                            </div>
                            <ul className={`pages ${isOpen ? 'open' : ''}`}>
                                {pages.map((page) => (
                                    <li className="navItem" key={page.path}>
                                        <NavLink
                                            to={page.path}
                                            end={page.end}
                                            className={({ isActive }) =>
                                                isActive ? 'nav-link active' : 'nav-link'
                                            }
                                        >
                                            <ButtonUnstyled>
                                                {page.name}
                                            </ButtonUnstyled>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </Container >
        </div>
    );
}

export default Navigation;