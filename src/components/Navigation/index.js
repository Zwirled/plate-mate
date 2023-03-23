import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './style.css';
import logo from '../../images/plateMateLogo.png';


function Navigation() {
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Recipe feed', path: '/recipes' },
        { name: 'Saved plates', path: '/saved' },
        { name: 'Shopping list', path: '/shopping-list' },
    ];

    return (
        <header>
            <div className="navigationContainer">
                <Container maxWidth="lg">
                    <Grid container spacing={2} >
                        <Grid xs={12}>
                            <item>
                                <nav>
                                    <ul className="pages">
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
                            </item>
                        </Grid>
                    </Grid>
                </Container >
            </div>
        </header >
    );
}

export default Navigation;