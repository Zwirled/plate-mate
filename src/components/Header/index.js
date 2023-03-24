import React from 'react';
import './style.css';
import logo from "../../images/plateMateLogo.png";

function Header() {
    return (
            <section className="introduction">
               <img src={logo} id="logo" alt="PlateMate logo" />
            </section>
        
    );
}

export default Header;

