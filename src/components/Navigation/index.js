import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navigation() {
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Recipes', path: '/recipes' },
        { name: 'Saved', path: '/saved' },
        { name: 'ShoppingList', path: '/shopping-list' },
    ];

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <NavLink to={pages[0].path}>
                            <h1>Logo</h1>
                        </NavLink>
                    </div>
                    <nav>
                        <ul className="nav nav-tabs">
                            {pages.map((page) => (
                                <li className="nav-item" key={page.path}>
                                    <NavLink
                                        to={page.path}
                                        end={page.end}
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                    >
                                        {page.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;