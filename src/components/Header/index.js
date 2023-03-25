import React from 'react';
import './style.css';
import logo from "../../images/plateMateLogo.png";
import Navigation from "../Navigation";

function Header() {
    return (
        <header>
            <section className="topLogo">
               <img src={logo} id="logo" alt="Plate Mate logo" />
            </section>
            <Navigation/>
        </header>
    );
}

export default Header;

