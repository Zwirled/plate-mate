import React from "react";
import photo from "../../images/homePageImage.jpeg"
import "./style.css";
import Hero from '../../components/Hero'

function Home() {
    return (
        <div>
            <section className="introduction">
            <img src={photo} id="photo" />
            </section>
            <Hero />
        </div>
        
    );
}

export default Home;
